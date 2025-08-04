export function renderStep5() {
  fetch('./partials/step5.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
      populateStep5();
      // Gắn các sự kiện nút phân tích biểu đồ
      document.getElementById("btn-render-tukhi")?.addEventListener("click", renderChartTemperature);
      document.getElementById("btn-render-flavor")?.addEventListener("click", renderChartFlavor);
      document.getElementById("btn-render-meridian")?.addEventListener("click", renderChartMeridian);
      document.getElementById("btn-render-direction")?.addEventListener("click", renderChartDirection);
      document.getElementById("btn-render-effect")?.addEventListener("click", renderChartEffect);
    });
}

// ====== BEGIN logic hoàn chỉnh Bước 5 (copy nguyên gốc từ index.html) ======

window.populateStep5 = function() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  // 1. Lịch sử toa thuốc
  const container = document.getElementById("previous-formulas");
  container.innerHTML = "";
  const history = data.history || [];
  history.forEach((entry, i) => {
    const formulaText = [];
    const date = entry?.date || `(Chưa ghi ngày)`;
    const syndrome = entry?.syndrome || "(chưa có hội chứng)";
    const finalFormula = entry?.finalFormula || "(chưa lưu)";
    const usage = entry?.usage || "(chưa ghi)";
    const note = entry?.note || "";

    formulaText.push(`🗓️ Lần ${i + 1} – Ngày: ${date} – Hội chứng: ${syndrome}`);
    formulaText.push(`🧾 Toa thuốc: ${finalFormula}`);
    formulaText.push(`💊 Cách dùng: ${usage}`);
    if (note) formulaText.push(`📝 Ghi chú: ${note}`);

    const box = document.createElement("textarea");
    box.className = "w-full border rounded px-3 py-2 bg-gray-100 mb-4";
    box.rows = 5;
    box.readOnly = true;
    box.value = formulaText.join("\n\n");
    container.appendChild(box);
  });

  // 2. Toa bác sĩ đề xuất (bước 4)
  const doctorDraft = document.getElementById("step5-doctor-draft");
  if (doctorDraft) {
    doctorDraft.value = data.steps?.step4?.finalDoctor || "";
    parseDoctorDraftFormula();
  }

  // 3. Toa thuốc cuối cùng (vị thuốc, liều) – nếu có data cũ
  if (data.steps?.step5?.finalHerbs) {
    renderFinalHerbList(data.steps.step5.finalHerbs);
  }

  // 4. Cách dùng, ghi chú lần này
  const usage = document.getElementById("step5-usage");
  if (usage) usage.value = data.steps?.step5?.usage || "";
  const note = document.getElementById("step5-note");
  if (note) note.value = data.steps?.step5?.note || "";
};

window.parseDoctorDraftFormula = function() {
  const draft = document.getElementById("step5-doctor-draft")?.value || "";
  const container = document.getElementById("final-herb-list");
  if (!draft || !container) return;
  const herbs = [];

  // Chuẩn hóa: tách bằng dấu phẩy, dấu cộng hoặc dấu chấm phẩy
  const items = draft.split(/[,+;]/);

  items.forEach(item => {
    const parts = item.trim().match(/^(.+?)\s+(\d+(?:[.,]\d+)?)/);
    if (parts && parts.length >= 3) {
      const name = parts[1].trim();
      const dose = parts[2].replace(",", "."); // chuyển 12,5 → 12.5
      herbs.push({ name, dose });
    }
  });

  renderFinalHerbList(herbs);
};

window.renderFinalHerbList = function(herbs) {
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
};

window.addFinalHerb = function() {
  const name = document.getElementById("final-new-herb").value.trim();
  const dose = document.getElementById("final-new-dose").value.trim();
  if (!name) return;
  const container = document.getElementById("final-herb-list");
  let herbs = [];
  try {
    herbs = JSON.parse(container.dataset.herbs || "[]");
  } catch {
    herbs = [];
  }
  herbs.push({ name, dose });
  renderFinalHerbList(herbs);
  document.getElementById("final-new-herb").value = "";
  document.getElementById("final-new-dose").value = "";
};

window.autoFillStep5Note = function() {
  const noteBox = document.getElementById("step5-note");
  const herbs = getFinalHerbList();
  const mainHerb = herbs.length ? herbs[0].name : "(chưa rõ)";
  noteBox.value = `Lưu ý: kiểm soát tác dụng của ${mainHerb}, tăng liều dần theo đáp ứng.`;
};

window.getFinalHerbList = function() {
  const container = document.getElementById("final-herb-list");
  let herbs = [];
  try {
    herbs = JSON.parse(container.dataset.herbs || "[]");
  } catch {
    herbs = [];
  }
  return herbs;
};

window.saveStep5 = function() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  const herbs = getFinalHerbList();
  const formula = herbs.map(h => `${h.name} ${h.dose}`).join(", ");
  const usage = document.getElementById("step5-usage")?.value || "";
  const note = document.getElementById("step5-note")?.value || "";

  data.steps = data.steps || {};
  data.steps.step5 = {
    finalHerbs: herbs,
    finalFormula: formula,
    usage: usage,
    note: note
  };
  localStorage.setItem("currentData", JSON.stringify(data));
};

window.downloadCurrentDataAsJSON = function() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  const filename = data.name ? `Hoso_${data.name}.json` : "hoso_YHCT.json";
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
};

// ====== BEGIN: Các hàm vẽ biểu đồ (Chart.js) giữ nguyên logic gốc ======

window.renderChartTemperature = function() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }
  const V = { Hàn: 0, Lương: 0, Bình: 0, Ấm: 0, Nhiệt: 0 };
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
    const temp = item.temperature?.trim();
    if (temp && V.hasOwnProperty(temp)) {
      V[temp] += dose / sd;
    } else {
      missing.push(h.name + " (không rõ tứ khí)");
    }
  }
  const ctx = document.getElementById("chart-temperature").getContext("2d");
  if (window._chartTukhi) window._chartTukhi.destroy();
  window._chartTukhi = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(V),
      datasets: [{
        label: "Lực tứ khí (chuẩn hoá)",
        data: Object.values(V)
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
};

window.renderChartFlavor = function() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }
  const flavors = ["Cay", "Đắng", "Ngọt", "Chua", "Mặn", "Nhạt", "Chát"];
  const V = Object.fromEntries(flavors.map(f => [f, 0]));
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
    const flavor = item.flavor?.split(/[、,]/) || [];
    for (const f of flavor) {
      if (V.hasOwnProperty(f.trim())) {
        V[f.trim()] += dose / sd;
      }
    }
  }
  const ctx = document.getElementById("chart-flavor").getContext("2d");
  if (window._chartFlavor) window._chartFlavor.destroy();
  window._chartFlavor = new Chart(ctx, {
    type: "bar",
    data: {
      labels: flavors,
      datasets: [{
        label: "Lực ngũ vị (chuẩn hoá)",
        data: flavors.map(f => V[f])
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
};

window.renderChartMeridian = function() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }
  const meridians = ["Phế", "Tâm", "Tỳ", "Vị", "Thận", "Can", "Đởm", "Tiểu trường", "Đại trường", "Bàng quang", "Tâm bào", "Tam tiêu"];
  const V = Object.fromEntries(meridians.map(f => [f, 0]));
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
    const mdn = item.meridian?.split(/[、,]/) || [];
    for (const m of mdn) {
      if (V.hasOwnProperty(m.trim())) {
        V[m.trim()] += dose / sd;
      }
    }
  }
  const ctx = document.getElementById("chart-meridian").getContext("2d");
  if (window._chartMeridian) window._chartMeridian.destroy();
  window._chartMeridian = new Chart(ctx, {
    type: "bar",
    data: {
      labels: meridians,
      datasets: [{
        label: "Lực quy kinh (chuẩn hoá)",
        data: meridians.map(f => V[f])
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
};

window.renderChartDirection = function() {
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
    V.Thăng += (thanggiang > 0 ? thanggiang : 0) * dose / sd;
    V.Giáng += (thanggiang < 0 ? -thanggiang : 0) * dose / sd;
    V.Phù += (phutram > 0 ? phutram : 0) * dose / sd;
    V.Trầm += (phutram < 0 ? -phutram : 0) * dose / sd;
  }
  const ctx = document.getElementById("chart-direction").getContext("2d");
  if (window._chartDirection) window._chartDirection.destroy();
  window._chartDirection = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(V),
      datasets: [{
        label: "Thăng – Giáng – Phù – Trầm (chuẩn hoá)",
        data: Object.values(V)
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
};

window.renderChartEffect = function() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }
  // Tổng hợp hiệu lực từng nhóm pháp trị từ bảng effect trong herbalData
  const effectKeys = Array.from(new Set(
    herbs.flatMap(h => {
      const item = window.herbalData.find(x => x.herb === h.name);
      return item?.effect?.split(/[、,]/) || [];
    })
  )).filter(x => x);

  const V = Object.fromEntries(effectKeys.map(f => [f, 0]));
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
    const effects = item.effect?.split(/[、,]/) || [];
    for (const f of effects) {
      if (V.hasOwnProperty(f.trim())) {
        V[f.trim()] += dose / sd;
      }
    }
  }
  const ctx = document.getElementById("chart-effect").getContext("2d");
  if (window._chartEffect) window._chartEffect.destroy();
  window._chartEffect = new Chart(ctx, {
    type: "bar",
    data: {
      labels: effectKeys,
      datasets: [{
        label: "Lực tác dụng (chuẩn hoá)",
        data: effectKeys.map(f => V[f])
      }]
    },
    options: { responsive: true, plugins: { legend: { display: false } } }
  });
  if (missing.length) {
    alert("Một số vị không phân tích được:\n" + missing.join("\n"));
  }
};

// ====== END các hàm vẽ biểu đồ giữ logic gốc ======
