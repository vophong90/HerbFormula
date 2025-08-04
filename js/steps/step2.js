// /js/steps/step2.js

export function renderStep2() {
  fetch('./partials/step2.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
      renderSymptomVASList();
      drawVASChart();
    });
}

// Tách triệu chứng từ bước 1
window.extractSymptoms = function() {
  if (!window.currentData || !window.currentData.steps || !window.currentData.steps.step1) {
    alert("Chưa có dữ liệu triệu chứng Bước 1!");
    return;
  }
  const raw = (window.currentData.steps.step1.symptoms || "").trim();
  const lines = raw.split(/\r?\n/).map(s => s.trim()).filter(Boolean);

  window.currentData.steps.step2 = window.currentData.steps.step2 || { symptoms: [] };
  // Nếu có giá trị cũ, giữ lại VAS đã nhập
  const oldList = (window.currentData.steps.step2.symptoms || []);
  const mapOld = new Map(oldList.map(x => [x.text, x.value ?? 0]));
  window.currentData.steps.step2.symptoms = lines.map(text => ({
    text,
    value: mapOld.get(text) ?? 0
  }));

  localStorage.setItem("currentData", JSON.stringify(window.currentData));
  renderSymptomVASList();
  drawVASChart();
}

// Sắp xếp triệu chứng theo VAS giảm dần
window.rankSymptoms = function() {
  const st2 = window.currentData?.steps?.step2;
  if (!st2?.symptoms) return;
  st2.symptoms.sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  localStorage.setItem("currentData", JSON.stringify(window.currentData));
  renderSymptomVASList();
  drawVASChart();
}

// Xoá tất cả triệu chứng ở bước 2 (không xoá bước 1)
window.clearVAS = function() {
  if (!confirm("Xoá tất cả VAS ở Bước 2?")) return;
  const st2 = window.currentData?.steps?.step2;
  if (!st2) return;
  st2.symptoms = [];
  localStorage.setItem("currentData", JSON.stringify(window.currentData));
  renderSymptomVASList();
  drawVASChart();
}

// Lưu snapshot VAS (bổ sung lịch sử lần hiện tại)
window.saveStep2 = function() {
  const st2 = window.currentData?.steps?.step2;
  if (!st2) return;
  st2.history = st2.history || [];
  const snapshot = {
    at: new Date().toISOString(),
    items: (st2.symptoms || []).map(x => ({ ...x }))
  };
  st2.history.push(snapshot);
  localStorage.setItem("currentData", JSON.stringify(window.currentData));
  alert("✅ Đã lưu đánh giá VAS.");
}

// Render danh sách triệu chứng + slider VAS
window.renderSymptomVASList = function() {
  const container = document.getElementById("symptom-vas-list");
  const st2 = window.currentData?.steps?.step2 || { symptoms: [] };

  if (!st2.symptoms.length) {
    container.innerHTML = `<div class="text-gray-500">Chưa có mục nào. Nhấn “Tách triệu chứng”.</div>`;
    return;
  }

  container.innerHTML = "";
  st2.symptoms.forEach((item, idx) => {
    const row = document.createElement("div");
    row.className = "bg-white border rounded p-3 flex items-center gap-3";
    row.innerHTML = `
      <div class="flex-1">
        <div class="font-medium">${escapeHTML(item.text)}</div>
        <input type="range" min="0" max="10" step="1"
               value="${item.value ?? 0}" data-idx="${idx}"
               class="w-full mt-2">
      </div>
      <div class="w-12 text-center font-semibold">
        <span id="val-${idx}">${item.value ?? 0}</span>
      </div>
      <button class="bg-red-600 text-white px-2 py-1 rounded" onclick="deleteVASRow(${idx})">Xoá</button>
    `;

    // Đăng ký sự kiện đổi VAS cho slider
    setTimeout(() => {
      const input = row.querySelector('input[type="range"]');
      if (input) {
        input.addEventListener("input", (e) => {
          const i = Number(e.target.dataset.idx);
          st2.symptoms[i].value = Number(e.target.value);
          document.getElementById(`val-${i}`).textContent = e.target.value;
          localStorage.setItem("currentData", JSON.stringify(window.currentData));
          drawVASChart();
        });
      }
    }, 10);

    container.appendChild(row);
  });
}

// Xoá 1 dòng triệu chứng
window.deleteVASRow = function(idx) {
  const st2 = window.currentData?.steps?.step2;
  if (!st2) return;
  st2.symptoms.splice(idx, 1);
  localStorage.setItem("currentData", JSON.stringify(window.currentData));
  renderSymptomVASList();
  drawVASChart();
}

// Vẽ biểu đồ VAS lần hiện tại (Chart.js, không set màu)
window.drawVASChart = function() {
  const ctx = document.getElementById("vas-chart");
  if (!ctx) return;
  const st2 = window.currentData?.steps?.step2 || { symptoms: [] };
  const labels = st2.symptoms.map(x => x.text.length > 24 ? x.text.slice(0, 23) + "…" : x.text);
  const data = st2.symptoms.map(x => Number(x.value ?? 0));
  // Hủy chart cũ nếu có
  if (window._vasChart) window._vasChart.destroy();

  window._vasChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "VAS",
        data
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: { y: { suggestedMin: 0, suggestedMax: 10, ticks: { stepSize: 1 } } }
    }
  });
}

// Helper để escape HTML
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, (m) => (
    { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[m]
  ));
}
