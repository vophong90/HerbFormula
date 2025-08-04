export function renderStep5(root) {
  fetch('./partials/step5.html')
    .then(res => res.text())
    .then(html => {
      root.innerHTML = html;
      populateStep5();

      document.getElementById("btn-back-step4").onclick = () => window.location.hash = "#/step4";
      document.getElementById("btn-save-step5").onclick = () => {
        saveStep5();
        downloadCurrentDataAsJSON();
      };

      document.getElementById("btn-add-final-herb").onclick = addFinalHerb;
      document.getElementById("btn-autofill-step5-note").onclick = autoFillStep5Note;

      // Biểu đồ
      document.getElementById("btn-render-tukhi").onclick = renderChartTemperature;
      document.getElementById("btn-render-flavor").onclick = renderChartFlavor;
      document.getElementById("btn-render-meridian").onclick = renderChartMeridian;
      document.getElementById("btn-render-direction").onclick = renderChartDirection;
      document.getElementById("btn-render-effect").onclick = renderChartEffect;
    });
}

// --- Quản lý lịch sử toa cũ và toa hiện tại ---
export function populateStep5() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  // Lịch sử toa cũ
  const container = document.getElementById("previous-formulas");
  container.innerHTML = "";
  const history = data.steps?.step2?.history || [];
  history.forEach((entry, i) => {
    const date = entry?.datetime || `(Chưa ghi ngày)`;
    const syndrome = entry?.syndrome?.final || "(chưa có hội chứng)";
    const finalFormula = entry?.step5?.finalFormula || "(chưa lưu)";
    const usage = entry?.step5?.usage || "(chưa ghi)";
    const note = entry?.step5?.note || "";
    const formulaText = [
      `🗓️ Lần ${i + 1} – Ngày: ${date} – Hội chứng: ${syndrome}`,
      `🧾 Toa thuốc: ${finalFormula}`,
      `💊 Cách dùng: ${usage}`,
      note ? `📝 Ghi chú: ${note}` : ""
    ].join("\n\n");
    const box = document.createElement("textarea");
    box.className = "w-full border rounded px-3 py-2 bg-gray-100 mb-4";
    box.rows = 5;
    box.readOnly = true;
    box.value = formulaText;
    container.appendChild(box);
  });

  // Toa đề xuất từ bước 4
  document.getElementById("step5-doctor-draft").value = data.steps?.step4?.finalDoctor || "";

  // Parse thành danh sách vị thuốc
  parseDoctorDraftFormula();

  // Lấy lại thông tin lưu lần trước
  document.getElementById("step5-usage").value = data.steps?.step5?.usage || "";
  document.getElementById("step5-note").value = data.steps?.step5?.note || "";
}

// --- Quản lý danh sách vị thuốc ---
function parseDoctorDraftFormula() {
  const draft = document.getElementById("step5-doctor-draft")?.value || "";
  const container = document.getElementById("final-herb-list");
  if (!draft || !container) return;

  const herbs = [];
  // Tách tên vị và liều, ví dụ "Đương quy 12, Bạch truật 10"
  const items = draft.split(/[,+]/);
  items.forEach(item => {
    const parts = item.trim().match(/^(.+?)\s*(\d+(?:[.,]\d+)?)/);
    if (parts && parts.length >= 3) {
      const name = parts[1].trim();
      const dose = parts[2].replace(",", ".");
      herbs.push({ name, dose });
    }
  });
  renderFinalHerbList(herbs);
}

function renderFinalHerbList(herbs) {
  const container = document.getElementById("final-herb-list");
  container.innerHTML = "";
  herbs.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "flex items-center gap-2";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = item.name;
    nameInput.className = "flex-1 border rounded px-3 py-2";
    nameInput.oninput = () => herbs[index].name = nameInput.value;
    const doseInput = document.createElement("input");
    doseInput.type = "text";
    doseInput.value = item.dose;
    doseInput.className = "w-24 border rounded px-3 py-2";
    doseInput.oninput = () => herbs[index].dose = doseInput.value;
    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.className = "text-red-600 hover:text-red-800";
    btn.onclick = () => {
      herbs.splice(index, 1);
      renderFinalHerbList(herbs);
    };
    row.appendChild(nameInput);
    row.appendChild(doseInput);
    row.appendChild(btn);
    container.appendChild(row);
  });
  container.dataset.herbs = JSON.stringify(herbs);
}

// Thêm vị thuốc mới
function addFinalHerb() {
  const name = document.getElementById("final-new-herb").value.trim();
  const dose = document.getElementById("final-new-dose").value.trim();
  if (!name || !dose) return;
  const container = document.getElementById("final-herb-list");
  const herbs = JSON.parse(container.dataset.herbs || "[]");
  herbs.push({ name, dose });
  renderFinalHerbList(herbs);
  document.getElementById("final-new-herb").value = "";
  document.getElementById("final-new-dose").value = "";
}

// Ghi chú tự động
function autoFillStep5Note() {
  document.getElementById("step5-note").value += "\nĐã kiểm tra và hiệu chỉnh theo đáp ứng lâm sàng.";
}

// Lưu bước 5 và export JSON
function saveStep5() {
  const key = localStorage.getItem("currentPatient");
  if (!key) return alert("Chưa chọn hồ sơ!");
  const data = JSON.parse(localStorage.getItem(key) || "{}");
  // Danh sách vị thuốc
  const herbs = JSON.parse(document.getElementById("final-herb-list").dataset.herbs || "[]");
  const finalFormula = herbs.map(h => `${h.name} ${h.dose}`).join(", ");
  // Các trường khác
  const usage = document.getElementById("step5-usage").value;
  const note = document.getElementById("step5-note").value;
  data.steps = data.steps || {};
  data.steps.step5 = { herbs, finalFormula, usage, note };
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem("currentData", JSON.stringify(data));
}

function downloadCurrentDataAsJSON() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = (data.name || "hoso_yhct") + ".json";
  a.click();
  URL.revokeObjectURL(url);
}

// ================== CÁC BIỂU ĐỒ PHÂN TÍCH TOA ==================

function renderChartTemperature() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }
  const tukhiLabels = ["Hàn", "Lương", "Bình", "Ôn", "Nhiệt"];
  const tukhiMap = { "-2": "Hàn", "-1": "Lương", "0": "Bình", "1": "Ôn", "2": "Nhiệt" };
  const tukhiData = { "Hàn": 0, "Lương": 0, "Bình": 0, "Ôn": 0, "Nhiệt": 0 };
  const missing = [];
  herbs.forEach(h => {
    const item = window.herbalData.find(x => x.herb === h.name);
    if (!item) {
      missing.push(h.name + " (không tìm thấy)");
      return;
    }
    const dose = parseFloat(h.dose);
    if (isNaN(dose)) {
      missing.push(h.name + " (thiếu liều)");
      return;
    }
    const tukhi = tukhiMap[item.tukhi] || "Bình";
    tukhiData[tukhi] += dose;
  });
  const ctx = document.getElementById("chart-temperature").getContext("2d");
  if (window.temperatureChart) window.temperatureChart.destroy();
  window.temperatureChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: tukhiLabels,
      datasets: [{
        label: "Tổng liều (g)",
        data: tukhiLabels.map(l => tukhiData[l]),
        backgroundColor: [
          "#3399ff", "#66ccff", "#cccccc", "#ffcc66", "#ff6633"
        ]
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
}

function renderChartFlavor() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }
  const flavorLabels = ["Tân", "Cam", "Toan", "Khổ", "Hàm", "Đạm"];
  const flavorData = { "Tân": 0, "Cam": 0, "Toan": 0, "Khổ": 0, "Hàm": 0, "Đạm": 0 };
  const missing = [];
  herbs.forEach(h => {
    const item = window.herbalData.find(x => x.herb === h.name);
    if (!item) {
      missing.push(h.name + " (không tìm thấy)");
      return;
    }
    const dose = parseFloat(h.dose);
    if (isNaN(dose)) {
      missing.push(h.name + " (thiếu liều)");
      return;
    }
    (item.flavor || []).forEach(flv => {
      if (flavorData[flv] !== undefined) flavorData[flv] += dose;
    });
  });
  const ctx = document.getElementById("chart-flavor").getContext("2d");
  if (window.flavorChart) window.flavorChart.destroy();
  window.flavorChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: flavorLabels,
      datasets: [{
        label: "Tổng liều (g)",
        data: flavorLabels.map(l => flavorData[l]),
        backgroundColor: "#60a5fa"
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
}

function renderChartMeridian() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }
  const meridianLabels = ["Phế", "Đại trường", "Vị", "Tỳ", "Tâm", "Tiểu trường", "Bàng quang", "Thận", "Tâm bào", "Tam tiêu", "Đởm", "Can"];
  const meridianData = {};
  meridianLabels.forEach(l => { meridianData[l] = 0; });
  const missing = [];
  herbs.forEach(h => {
    const item = window.herbalData.find(x => x.herb === h.name);
    if (!item) {
      missing.push(h.name + " (không tìm thấy)");
      return;
    }
    const dose = parseFloat(h.dose);
    if (isNaN(dose)) {
      missing.push(h.name + " (thiếu liều)");
      return;
    }
    (item.meridian || []).forEach(m => {
      if (meridianData[m] !== undefined) meridianData[m] += dose;
    });
  });
  const ctx = document.getElementById("chart-meridian").getContext("2d");
  if (window.meridianChart) window.meridianChart.destroy();
  window.meridianChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: meridianLabels,
      datasets: [{
        label: "Tổng liều (g)",
        data: meridianLabels.map(l => meridianData[l]),
        backgroundColor: "#34d399"
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
}

function renderChartDirection() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }
  const V = { Thăng: 0, Giáng: 0, Phù: 0, Trầm: 0 };
  const missing = [];
  for (const h of herbs) {
    const item = window.herbalData.find(x => x.herb === h.name);
    if (!item) {
      missing.push(h.name + " (không tìm thấy)");
      continue;
    }
    const dose = parseFloat(h.dose);
    const sd = parseFloat(item.sd_dose);
    if (isNaN(dose) || isNaN(sd) || sd === 0) {
      missing.push(h.name + " (thiếu liều hoặc SD)");
      continue;
    }
    const thanggiang = parseFloat(item.thanggiang);
    const phutram = parseFloat(item.phutram);
    const weight = dose / sd;
    if (!isNaN(thanggiang)) {
      if (thanggiang > 0) V.Thăng += thanggiang * weight;
      else V.Giáng += -thanggiang * weight;
    }
    if (!isNaN(phutram)) {
      if (phutram > 0) V.Phù += phutram * weight;
      else V.Trầm += -phutram * weight;
    }
  }
  const ctx = document.getElementById("chart-direction").getContext("2d");
  if (window.directionChart) window.directionChart.destroy();
  window.directionChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Thăng", "Giáng", "Phù", "Trầm"],
      datasets: [{
        label: "Tổng lực",
        data: [V.Thăng, V.Giáng, V.Phù, V.Trầm],
        backgroundColor: ["#f59e42", "#4c51bf", "#3ab981", "#6b7280"]
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
}

function renderChartEffect() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbsByEffect) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbsByEffect chưa sẵn sàng.");
    return;
  }
  const effectLabels = Object.keys(window.herbsByEffect);
  const effectData = {};
  effectLabels.forEach(eff => { effectData[eff] = 0; });
  const missing = [];
  herbs.forEach(h => {
    let found = false;
    for (const eff of effectLabels) {
      const list = window.herbsByEffect[eff].map(x => x.vietnamese);
      if (list.includes(h.name)) {
        effectData[eff] += parseFloat(h.dose) || 0;
        found = true;
      }
    }
    if (!found) missing.push(h.name + " (không rõ tác dụng)");
  });
  const ctx = document.getElementById("chart-effect").getContext("2d");
  if (window.effectChart) window.effectChart.destroy();
  window.effectChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: effectLabels,
      datasets: [{
        label: "Tổng liều (g)",
        data: effectLabels.map(l => effectData[l]),
        backgroundColor: "#6366f1"
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
}

// ------ HÀM TIỆN ÍCH LẤY DANH SÁCH VỊ THUỐC ĐANG HIỆU CHỈNH ------
function getFinalHerbList() {
  try {
    return JSON.parse(document.getElementById("final-herb-list").dataset.herbs || "[]");
  } catch { return []; }
}
