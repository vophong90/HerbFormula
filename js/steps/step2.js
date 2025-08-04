import { appState, saveState } from "../state.js";

/** Utils */
async function loadPartial(path) {
  const res = await fetch(path);
  return await res.text();
}
function ensureStep2() {
  appState.steps ||= {};
  appState.steps.step2 ||= { symptoms: [], history: [] };
  return appState.steps.step2;
}

/** 1) Hàm chính render bước 2 */
export async function renderStep2(root) {
  root.innerHTML = await loadPartial("/partials/step2.html");

  // wire buttons
  document.getElementById("btn-extract").onclick = onExtractSymptoms;
  document.getElementById("btn-rank").onclick = onRankSymptoms;
  document.getElementById("btn-clear").onclick = onClearAll;
  document.getElementById("btn-back1").onclick = () => (location.hash = "#/step1");
  document.getElementById("btn-save").onclick = onSaveStep2;
  document.getElementById("btn-next3").onclick = () => {
    onSaveStep2();
    location.hash = "#/step3";
  };

  // render danh sách VAS từ state hiện tại (nếu có)
  renderSymptomVASList();
  drawVASChart();
}

/** 2) Tách triệu chứng từ Bước 1 → mảng */
function onExtractSymptoms() {
  const step1 = appState.steps?.step1 || {};
  const raw = (step1.symptoms || "").trim();

  if (!raw) {
    alert("Chưa có triệu chứng ở Bước 1. Vui lòng nhập ở Bước 1.");
    return;
  }

  const lines = raw
    .split(/\r?\n/)
    .map(s => s.trim())
    .filter(Boolean);

  const st2 = ensureStep2();
  // hợp nhất: giữ VAS cũ nếu trùng triệu chứng
  const map = new Map(st2.symptoms.map(x => [x.text, x.value ?? 0]));
  st2.symptoms = lines.map(text => ({ text, value: map.get(text) ?? 0 }));

  saveState();
  renderSymptomVASList();
  drawVASChart();
}

/** 3) Sắp xếp theo VAS giảm dần */
function onRankSymptoms() {
  const st2 = ensureStep2();
  st2.symptoms.sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  saveState();
  renderSymptomVASList();
  drawVASChart();
}

/** 4) Xoá tất cả triệu chứng khỏi bước 2 (không xoá dữ liệu bước 1) */
function onClearAll() {
  if (!confirm("Xoá tất cả mục VAS ở Bước 2?")) return;
  const st2 = ensureStep2();
  st2.symptoms = [];
  saveState();
  renderSymptomVASList();
  drawVASChart();
}

/** 5) Lưu snapshot lịch sử (lần hiện tại) */
function onSaveStep2() {
  const st2 = ensureStep2();
  const snapshot = {
    at: new Date().toISOString(),
    items: st2.symptoms.map(x => ({ ...x })),
  };
  // cập nhật lịch sử: thêm lần mới vào cuối
  st2.history.push(snapshot);
  saveState();
  alert("✅ Đã lưu đánh giá VAS.");
}

/** 6) Render danh sách triệu chứng + slider VAS */
function renderSymptomVASList() {
  const container = document.getElementById("symptom-vas-list");
  const st2 = ensureStep2();

  if (!st2.symptoms.length) {
    container.innerHTML =
      `<div class="text-gray-500">Chưa có mục nào. Nhấn “Tách triệu chứng”.</div>`;
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
      <button class="bg-red-600 text-white px-2 py-1 rounded" data-del="${idx}">Xoá</button>
    `;

    // sự kiện: đổi VAS
    row.querySelector('input[type="range"]').addEventListener("input", (e) => {
      const i = Number(e.target.dataset.idx);
      const val = Number(e.target.value);
      st2.symptoms[i].value = val;
      document.getElementById(`val-${i}`).textContent = val;
      saveState();
      drawVASChart(); // cập nhật biểu đồ realtime
    });

    // xoá 1 dòng
    row.querySelector('[data-del]').addEventListener("click", (e) => {
      const i = Number(e.target.getAttribute("data-del"));
      st2.symptoms.splice(i, 1);
      saveState();
      renderSymptomVASList();
      drawVASChart();
    });

    container.appendChild(row);
  });
}

/** 7) Vẽ biểu đồ cột VAS lần hiện tại */
let _vasChart;
function drawVASChart() {
  const ctx = document.getElementById("vas-chart");
  if (!ctx) return;

  const st2 = ensureStep2();
  const labels = st2.symptoms.map(x => trimLabel(x.text, 24));
  const data = st2.symptoms.map(x => Number(x.value ?? 0));

  if (_vasChart) _vasChart.destroy();

  // LƯU Ý: Không set màu/stylesheet — theo yêu cầu môi trường.
  _vasChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "VAS",
          data,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      scales: {
        y: { suggestedMin: 0, suggestedMax: 10, ticks: { stepSize: 1 } },
      },
    },
  });
}

/** Helpers */
function escapeHTML(s) {
  return s.replace(/[&<>"']/g, (m) => (
    { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[m]
  ));
}
function trimLabel(s, max = 24) {
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}
