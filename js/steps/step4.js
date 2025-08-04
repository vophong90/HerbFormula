// step4.js: Đúng logic gốc, không module hóa, thao tác trực tiếp với localStorage, id field giữ nguyên

export function renderStep4() {
  fetch('./partials/step4.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
      populateStep4();
    });
}

// Hàm gốc lấy từ index.html
function populateStep4() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");

  // Hội chứng từ bước 3
  const syndrome = data.steps?.step3?.final || "(chưa xác định)";
  const syndromeDiv = document.getElementById("confirmed-syndrome");
  if (syndromeDiv) syndromeDiv.textContent = syndrome;

  // Triệu chứng nổi bật
  const symptoms = data.steps?.step2?.symptoms || [];
  const sorted = [...symptoms].sort((a, b) => b.vas - a.vas);
  const topSymptoms = sorted.slice(0, 5);

  const ul = document.getElementById("step4-top-symptom-list");
  if (ul) {
    ul.innerHTML = "";
    topSymptoms.forEach(s => {
      const li = document.createElement("li");
      li.textContent = `${s.symptom} (VAS ${s.vas})`;
      ul.appendChild(li);
    });
  }

  // Nạp dữ liệu các ô đã có
  const step4 = data.steps?.step4 || {};
  const sixs = step4.sixs || {};

  const fields = [
    ["final-gpt-formula", step4.finalGPT],
    ["final-doctor-formula", step4.finalDoctor],
    ["sixs-source", sixs.source],
    ["sixs-symptom", sixs.symptom],
    ["sixs-site", sixs.site],
    ["sixs-strength", sixs.strength],
    ["sixs-sideeffect", sixs.sideeffect],
    ["sixs-secondary", sixs.secondary]
  ];

  fields.forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.value = value || "";
  });

  setupHerbBarChartUI();
}

// Gợi ý pháp trị YHCT
window.autoSuggestMethod = async function() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  const syndrome = data.steps?.step3?.final?.trim();
  const symptoms = data.steps?.step2?.symptoms || [];
  const outputBox = document.getElementById("treatmethod-gpt");

  if (!syndrome || symptoms.length === 0) {
    outputBox.value = "⚠️ Thiếu dữ liệu hội chứng hoặc triệu chứng.";
    return;
  }

  outputBox.value = "⏳ Đang gợi ý pháp trị, vui lòng chờ...";

  const symptomList = symptoms
    .sort((a, b) => b.vas - a.vas)
    .map((s, i) => `${i + 1}. ${s.symptom} (VAS: ${s.vas})`)
    .join("\n");

  const prompt = `
Bạn là chuyên gia Y học cổ truyền.

Bệnh nhân được chẩn đoán theo YHCT là: **${syndrome}**

Danh sách các triệu chứng đã ghi nhận, sắp xếp theo mức độ VAS:

${symptomList}

Dựa trên chẩn đoán và triệu chứng, hãy xác định các pháp trị phù hợp theo nguyên tắc biện chứng luận trị. Pháp trị cần chia làm hai nhóm rõ ràng:

🔹 **Trị bản** (nhằm điều trị cơ chế sinh bệnh, gốc rễ bệnh theo lý luận tạng phủ, khí huyết, tà chính, hư thực...).

🔹 **Trị tiêu** (nhằm điều trị triệu chứng hiện tại đang gây khó chịu nhiều nhất).

Yêu cầu:
- Chỉ chọn trong các pháp trị chuẩn của Trung y, không được sáng tạo.
- Ưu tiên trình bày bằng thuật ngữ Hán Việt.
- Không viết thừa, không lan man.

Trình bày kết quả như sau:

🔸 **Trị bản:**  
– Pháp trị: ...  
– Lý do chọn pháp trị: ...

🔸 **Trị tiêu:**  
– Pháp trị: ...  
– Lý do chọn pháp trị: ...
`;

  const res = await fetch("https://gpt-api-19xu.onrender.com/gpt.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: prompt })
  });

  const result = await res.json();
  const reply = result.choices?.[0]?.message?.content || "❌ GPT không trả về kết quả.";

  outputBox.value = reply;
}

// Tra cứu đối dược
window.searchDoiDuocByKeyword = function() {
  const input = document.getElementById("keyword-doiduoc");
  const keyword = input.value.trim().toLowerCase();
  const resultBox = document.getElementById("result-doiduoc");

  if (!keyword) {
    resultBox.value = "⚠️ Vui lòng nhập từ khóa.";
    return;
  }

  const keywords = keyword.split(/\s+/).filter(k => k);

  const matches = (window.doiDuocData || []).filter(item => {
    const chutriText = item.chutri?.toLowerCase() || "";
    return keywords.every(word => chutriText.includes(word));
  });

  if (matches.length === 0) {
    resultBox.value = "❌ Không tìm thấy kết quả phù hợp.";
    return;
  }

  resultBox.value = matches.map(item =>
    `📌 Đối dược: ${item.doiduoc}\n📋 Chủ trị: ${item.chutri}`
  ).join("\n\n");
}

// Vẽ biểu đồ vị thuốc theo pháp trị
window.setupHerbBarChartUI = function() {
  const select = document.getElementById("effectSelector");
  const effects = Object.keys(window.herbsByEffect || {});

  select.innerHTML = '<option value="">-- Chọn pháp trị --</option>';
  for (const eff of effects) {
    const option = document.createElement("option");
    option.value = eff;
    option.textContent = eff;
    select.appendChild(option);
  }

  select.addEventListener("change", () => {
    const selected = select.value;
    if (selected) {
      drawHerbBarChart(selected);
    }
  });
}

window.drawHerbBarChart = function(effect) {
  const data = window.herbsByEffect?.[effect] || [];
  const labels = data.map(d => d.vietnamese);
  const scores = data.map(d => d.score);

  const canvas = document.getElementById("herbBarChart");
  const ctx = canvas.getContext("2d");

  if (window.herbChartInstance) {
    window.herbChartInstance.destroy();
  }

  const columnWidth = 60;
  const chartWidth = Math.max(400, labels.length * columnWidth);
  canvas.removeAttribute("style");
  canvas.setAttribute("width", chartWidth);
  canvas.setAttribute("height", 300);

  const enrichedData = data.map(d => {
    const matched = window.herbalData.find(h => h.herb === d.vietnamese);
    return {
      ...d,
      tukhi: matched?.tukhi ?? null,
      sd_dose: matched?.sd_dose ?? null,
      latin: matched?.latin ?? null
    };
  });

  function tukhiToColor(tukhi) {
    if (tukhi == null) return "white";
    const colors = [
      "#2c7bb6", "#00a6ca", "#00ccbc", "#ffffbf",
      "#fdae61", "#f46d43", "#d73027"
    ];
    if (tukhi <= -3.5) return colors[0];
    if (tukhi <= -2)   return colors[1];
    if (tukhi <= -0.5) return colors[2];
    if (tukhi < 0.5)   return colors[3];
    if (tukhi < 2)     return colors[4];
    if (tukhi < 3.5)   return colors[5];
    return colors[6];
  }

  const backgroundColors = enrichedData.map(d =>
    d.tukhi == null ? "white" : tukhiToColor(d.tukhi)
  );
  const borderColors = enrichedData.map(d =>
    d.tukhi == null ? "#cccccc" : "black"
  );

  requestAnimationFrame(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    window.herbChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "Điểm mạnh (score)",
          data: scores,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 2,
          barThickness: 40
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: { autoSkip: false },
            grid: { display: false }
          },
          y: {
            beginAtZero: true,
            grid: { display: true }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function(ctx) {
                const herb = enrichedData[ctx.dataIndex];
                const latin = herb.latin || "–";
                const dose = herb.sd_dose != null ? `${herb.sd_dose}g` : "Không rõ liều";
                return `${herb.vietnamese} (${latin}):\nĐiểm: ${herb.score}, Liều: ${dose}`;
              }
            }
          }
        }
      }
    });
  });
}

// Tổng hợp 6S và loại trùng
window.renderFinalGPTFormula = function() {
  const fields = [
    "sixs-source",
    "sixs-symptom",
    "sixs-site",
    "sixs-strength",
    "sixs-sideeffect",
    "sixs-secondary"
  ];

  const herbSet = new Set();
  for (const id of fields) {
    const value = document.getElementById(id)?.value || "";
    const herbs = value.split(",").map(h => h.trim()).filter(h => h);
    herbs.forEach(h => herbSet.add(h));
  }
  const finalFormula = Array.from(herbSet).join(", ");
  const outputBox = document.getElementById("final-gpt-formula");
  if (outputBox) outputBox.value = finalFormula;
}

// Lưu Bước 4
window.saveStep4 = function() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  // Thu thập dữ liệu từ các ô 6S
  const sixs = {
    source: document.getElementById("sixs-source")?.value || "",
    symptom: document.getElementById("sixs-symptom")?.value || "",
    site: document.getElementById("sixs-site")?.value || "",
    strength: document.getElementById("sixs-strength")?.value || "",
    sideeffect: document.getElementById("sixs-sideeffect")?.value || "",
    secondary: document.getElementById("sixs-secondary")?.value || ""
  };
  // Toa thuốc tổng hợp GPT và bác sĩ
  const finalGPT = document.getElementById("final-gpt-formula")?.value || "";
  const finalDoctor = document.getElementById("final-doctor-formula")?.value || "";
  data.steps = data.steps || {};
  data.steps.step4 = {
    sixs: sixs,
    finalGPT: finalGPT,
    finalDoctor: finalDoctor
  };
  localStorage.setItem("currentData", JSON.stringify(data));
}
