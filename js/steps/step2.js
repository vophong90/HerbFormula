export function renderStep2(root) {
  root.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">${window.lang.step2.title}</h2>
    <div class="mb-4 space-x-2">
      <button id="btn-extract-symptoms" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        ${window.lang.step2.extract}
      </button>
      <button id="btn-rank-symptoms" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        ${window.lang.step2.ranking}
      </button>
    </div>
    <div id="symptom-vas-list" class="space-y-4"></div>
    <div id="followup-section" class="mt-8 hidden border-t pt-6">
      <h3 class="text-lg font-semibold mb-4">${window.lang.step2.followup_chart_title}</h3>
      <canvas id="followup-vas-chart" height="150"></canvas>
    </div>
    <div class="mt-6 flex justify-between">
      <button id="btn-back-step1" class="bg-gray-500 text-white px-4 py-2 rounded">${window.lang.step2.back}</button>
      <button id="btn-save-next-step2" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">${window.lang.step2.next}</button>
    </div>
  `;

  // Sự kiện tách triệu chứng bằng GPT
  document.getElementById("btn-extract-symptoms").onclick = extractSymptoms;
  // Sự kiện xếp hạng VAS giảm dần
  document.getElementById("btn-rank-symptoms").onclick = rankSymptoms;
  // Sự kiện Quay lại
  document.getElementById("btn-back-step1").onclick = () => window.location.hash = "#/step1";
  // Sự kiện Tiếp tục
  document.getElementById("btn-save-next-step2").onclick = () => {
    saveStep2();
    window.location.hash = "#/step3";
  };

  renderStep2Content();
}

// ----------- LOGIC GIỮ NGUYÊN -----------

function renderStep2Content() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");

  const history = data.steps?.step2?.history || [];
  const allSymptoms = new Set();

  // Triệu chứng lịch sử
  history.forEach(entry => entry.symptoms?.forEach(s => allSymptoms.add(s.symptom)));
  // Triệu chứng mới nhập ở bước 1
  const newSymptoms = (data.steps?.step1?.symptoms || "").split("\n").map(s => s.trim()).filter(Boolean);
  newSymptoms.forEach(s => allSymptoms.add(s));
  // Triệu chứng hiện tại đã có VAS
  const currentVAS = {};
  (data.steps?.step2?.symptoms || []).forEach(s => { currentVAS[s.symptom] = s.vas; });

  // Render list
  const container = document.getElementById("symptom-vas-list");
  container.innerHTML = "";
  Array.from(allSymptoms).forEach(symptom => {
    const vas = currentVAS[symptom] ?? 5;
    container.appendChild(createSymptomVASBlock(symptom, vas));
  });

  // Hiện chart nếu có lịch sử
  if (history.length > 0) {
    document.getElementById("followup-section").classList.remove("hidden");
    renderVASChart();
  } else {
    document.getElementById("followup-section").classList.add("hidden");
  }
}

// Tách triệu chứng qua GPT (dùng API gốc, giữ logic không đổi)
async function extractSymptoms() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  const raw = data?.steps?.step1?.symptoms || "";

  if (!raw.trim()) {
    alert(window.lang?.step2?.alert_no_symptom || "⚠️ Không có dữ liệu triệu chứng để phân tích.");
    return;
  }

  const prompt = `
Bạn là bác sĩ Y học cổ truyền. Dưới đây là đoạn mô tả triệu chứng và kết quả hỏi bệnh của bệnh nhân:

"${raw}"

Hãy tách ra danh sách các triệu chứng cụ thể, mỗi dòng ghi 1 triệu chứng ngắn gọn và dễ hiểu (không lặp từ). Lưu ý chỉ lấy triệu chứng, không lấy các đặc điểm của triệu chứng đó. Không cần phân tích, chỉ liệt kê như sau:
1. [triệu chứng 1]
2. [triệu chứng 2]
...`.trim();

  let reply = "";
  try {
    const res = await fetch("https://gpt-api-19xu.onrender.com/gpt.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "chat",          // <<< QUAN TRỌNG: trỏ đúng route 'chat' trong PHP
        prompt                   //  bạn cũng có thể gửi {model:"gpt-5"} nếu muốn override
      })
    });

    // HTTP error guard
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} – ${text || res.statusText}`);
    }

    const json = await res.json();

    // === Lấy text theo Responses API ===
    reply = extractOutputText(json).trim();

  } catch (e) {
    console.error("extractSymptoms error:", e);
    alert(window.lang?.step2?.alert_gpt_fail || "❌ GPT không trích xuất được triệu chứng.");
    return;
  }

  // Tách các dòng, loại "1. ", "- ", bullet...
  const lines = reply
    .split(/\r?\n/)
    .map(line => line.replace(/^\s*[-*•]?\s*/, "").replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);

  if (!lines.length) {
    alert(window.lang?.step2?.alert_gpt_fail || "❌ GPT không trích xuất được triệu chứng.");
    return;
  }

  const container = document.getElementById("symptom-vas-list");
  if (!container) {
    console.warn("#symptom-vas-list không tồn tại.");
    return;
  }
  container.innerHTML = "";
  lines.forEach(symptom => container.appendChild(createSymptomVASBlock(symptom)));
}

// Helper: bóc text từ Responses API (và tương thích ngược)
function extractOutputText(resp) {
  // 1) Responses API: thuộc tính thuận tiện
  if (typeof resp?.output_text === "string" && resp.output_text.trim()) {
    return resp.output_text;
  }
  // 2) Responses API: duyệt mảng output -> message -> content[]
  if (Array.isArray(resp?.output)) {
    const parts = [];
    for (const item of resp.output) {
      if (item?.type === "message" && Array.isArray(item.content)) {
        for (const c of item.content) {
          if (typeof c?.text === "string") parts.push(c.text);
        }
      }
    }
    if (parts.length) return parts.join("\n");
  }
  // 3) Tương thích ngược: Chat Completions
  const legacy = resp?.choices?.[0]?.message?.content || resp?.choices?.[0]?.text;
  return legacy || "";
}

// Tạo 1 dòng triệu chứng với thanh trượt VAS và input số
function createSymptomVASBlock(symptom, vas = 5) {
  const div = document.createElement("div");
  div.className = "bg-gray-100 p-3 rounded shadow relative symptom-item";

  const label = document.createElement("label");
  label.className = "block font-semibold mb-2";
  label.textContent = `🔹 ${symptom}`;
  div.appendChild(label);

  // Thanh trượt
  const slider = document.createElement("input");
  slider.type = "range"; slider.min = 0; slider.max = 10; slider.step = 0.1;
  slider.value = vas;
  slider.className = "w-full mb-1";
  slider.dataset.symptom = symptom;
  div.appendChild(slider);

  // Input số
  const input = document.createElement("input");
  input.type = "number";
  input.min = 0; input.max = 10; input.step = 0.1;
  input.value = vas;
  input.className = "border border-gray-300 rounded w-20 p-1 text-right text-sm float-right";
  div.appendChild(input);

  // Text hiển thị
  const output = document.createElement("span");
  output.className = "text-sm text-gray-700 font-mono";
  output.textContent = "VAS: " + vas;
  div.appendChild(output);

  // Đồng bộ slider <-> input
  slider.oninput = () => {
    input.value = slider.value;
    output.textContent = "VAS: " + parseFloat(slider.value).toFixed(1);
    triggerLiveVAS();
  };
  input.oninput = () => {
    const val = Math.max(0, Math.min(10, parseFloat(input.value) || 0));
    slider.value = val;
    output.textContent = "VAS: " + val.toFixed(1);
    triggerLiveVAS();
  };

  // Nút xóa triệu chứng
  const btn = document.createElement("button");
  btn.textContent = "🗑️";
  btn.className = "absolute top-2 right-2 text-red-600 hover:text-red-800 text-lg";
  btn.onclick = () => div.remove();
  div.appendChild(btn);

  return div;
}

// Sắp xếp triệu chứng theo VAS giảm dần
function rankSymptoms() {
  const container = document.getElementById("symptom-vas-list");
  const items = Array.from(container.querySelectorAll(".symptom-item"));
  items.sort((a, b) => {
    const va = parseFloat(a.querySelector("input[type=range]").value);
    const vb = parseFloat(b.querySelector("input[type=range]").value);
    return vb - va;
  });
  container.innerHTML = "";
  items.forEach(el => container.appendChild(el));
}

// Lưu dữ liệu bước 2
function saveStep2() {
  const key = localStorage.getItem("currentPatient");
  if (!key) return alert(window.lang.step2.alert_no_profile || "Chưa chọn hồ sơ!");
  const data = JSON.parse(localStorage.getItem(key) || "{}");
  data.steps = data.steps || {};
  data.steps.step2 = data.steps.step2 || {};

  // Lưu VAS hiện tại tạm thời (chưa lưu vào history)
  const blocks = document.querySelectorAll(".symptom-item");
  const symptoms = Array.from(blocks).map(block => {
    const symptom = block.querySelector("input[type=range]").dataset.symptom;
    const vas = parseFloat(block.querySelector("input[type=range]").value);
    return { symptom, vas };
  });

  data.steps.step2.symptoms = symptoms;
  // Để biểu đồ vẽ đúng lần đang theo dõi
  data.steps.step6 = data.steps.step6 || {};
  data.steps.step6.followupSymptoms = symptoms;
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem("currentData", JSON.stringify(data));
}

// Vẽ chart VAS các lần khám (history)
let followupChart = null;
function renderVASChart() {
  const ctx = document.getElementById("followup-vas-chart").getContext("2d");
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  const history = data.steps?.step6?.followupHistory || data.steps?.step2?.history || [];
  const temp = data.steps?.step6?.followupSymptoms || [];
  const initial = data.steps?.step2?.symptoms || [];
  // Tổng hợp tất cả triệu chứng từng xuất hiện
  const symptomSet = new Set();
  initial.forEach(s => symptomSet.add(s.symptom));
  history.forEach(entry => entry.symptoms.forEach(s => symptomSet.add(s.symptom)));
  temp.forEach(s => symptomSet.add(s.symptom));
  const allSymptoms = Array.from(symptomSet);
  // Nhãn trục X
  const labels = ["VAS 0", ...history.map((_, i) => `VAS ${i + 1}`)];
  if (temp.length > 0) labels.push(`VAS ${history.length + 1}`);
  // Dữ liệu từng triệu chứng
  const datasets = allSymptoms.map(symptom => {
    const dataPoints = [];
    // Lần 0: ban đầu
    const s0 = initial.find(s => s.symptom === symptom);
    dataPoints.push(s0 ? s0.vas : null);
    // Các lần tái khám cũ
    history.forEach(entry => {
      const match = entry.symptoms.find(s => s.symptom === symptom);
      dataPoints.push(match ? match.vas : null);
    });
    // Lần hiện tại
    if (temp.length > 0) {
      const match = temp.find(s => s.symptom === symptom);
      dataPoints.push(match ? match.vas : null);
    }
    return {
      label: symptom,
      data: dataPoints,
      fill: false,
      tension: 0.3,
      borderWidth: 2
    };
  });
  // Xóa chart cũ
  if (followupChart) followupChart.destroy();
  // Vẽ chart mới
  followupChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" },
        tooltip: { mode: "index", intersect: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 10,
          title: { display: true, text: "VAS" }
        }
      }
    }
  });
}

// Cập nhật live VAS cho chart
function triggerLiveVAS() {
  const blocks = document.querySelectorAll(".symptom-item");
  const currentSymptoms = Array.from(blocks).map(block => {
    const symptom = block.querySelector("input[type=range]").dataset.symptom;
    const vas = parseFloat(block.querySelector("input[type=range]").value);
    return { symptom, vas };
  });
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  data.steps = data.steps || {};
  data.steps.step6 = data.steps.step6 || {};
  data.steps.step6.followupSymptoms = currentSymptoms;
  localStorage.setItem("currentData", JSON.stringify(data));
  renderVASChart();
}
