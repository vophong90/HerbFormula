export function renderStep5(root) {
  root.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">${window.lang.step5.title}</h2>
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2">${window.lang.step5.history_title}</h3>
      <div id="previous-formulas" class="space-y-4"></div>
    </div>
    <hr class="my-6">
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2">${window.lang.step5.edit_title}</h3>
      <div class="mb-4">
        <label class="font-semibold block mb-1">${window.lang.step5.doctor_draft_label}</label>
        <textarea id="step5-doctor-draft" class="w-full border rounded px-3 py-2 bg-gray-100" rows="3" readonly></textarea>
      </div>
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">${window.lang.step5.final_formula_title}</h3>
        <div id="final-herb-list" class="space-y-2 mb-2" data-herbs="[]"></div>
        <div class="flex gap-2 mb-4">
          <input type="text" id="final-new-herb" placeholder="${window.lang.step5.add_herb_placeholder}" class="flex-1 border rounded px-3 py-2">
          <input type="text" id="final-new-dose" placeholder="${window.lang.step5.add_dose_placeholder}" class="w-24 border rounded px-3 py-2">
          <button id="btn-add-final-herb" class="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            ${window.lang.step5.add_btn}
          </button>
        </div>
      </div>
      <div class="mb-4">
        <label class="font-semibold block mb-1">${window.lang.step5.usage_label}</label>
        <textarea id="step5-usage" class="w-full border rounded px-3 py-2" rows="2" placeholder="${window.lang.step5.usage_placeholder}"></textarea>
      </div>
      <div class="mb-4">
        <button id="btn-autofill-step5-note" class="text-blue-700 hover:underline mt-2">
           ${window.lang.step5.note_btn}
        </button>
        <textarea id="step5-note" class="w-full border rounded px-3 py-2" rows="2" placeholder="${window.lang.step5.note_placeholder}"></textarea>
      </div>
    </div>
    <div id="formula-analysis-charts" class="mt-6 space-y-6">
      <div class="my-4">
        <button id="btn-render-tukhi" class="text-left text-lg font-semibold text-blue-700 hover:text-blue-900 hover:underline">
           ${window.lang.step5.analysis.tukhi_btn}
        </button>
        <canvas id="chart-temperature" width="1000" height="80" class="mt-2 border rounded shadow"></canvas>
      </div>
      <div class="my-4 grid grid-cols-2 gap-4">
        <div>
          <button id="btn-render-flavor" class="text-blue-700 hover:underline text-lg font-semibold mb-2">
            ${window.lang.step5.analysis.flavor_btn}
          </button>
          <canvas id="chart-flavor" class="border rounded shadow" style="width: 100%; height: 300px;"></canvas>
        </div>
        <div>
          <button id="btn-render-meridian" class="text-blue-700 hover:underline text-lg font-semibold mb-2">
           ${window.lang.step5.analysis.meridian_btn}
          </button>
          <canvas id="chart-meridian" class="border rounded shadow" style="width: 100%; height: 300px;"></canvas>
        </div>
      </div>
      <div class="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col">
          <div class="text-left mb-2">
            <button id="btn-render-direction" class="text-blue-700 hover:underline text-lg font-semibold">
               ${window.lang.step5.analysis.direction_btn}
            </button>
          </div>
          <div class="w-full border rounded shadow overflow-hidden" style="height: 360px;">
            <canvas id="chart-direction" class="w-full h-full"></canvas>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-left mb-2">
            <button id="btn-render-effect" class="text-blue-700 hover:underline text-lg font-semibold">
               ${window.lang.step5.analysis.effect_btn}
            </button>
          </div>
          <div class="w-full border rounded shadow overflow-hidden" style="height: 360px;">
            <canvas id="chart-effect" class="w-full h-full"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-8">
      <button id="btn-back-step4" class="bg-gray-500 text-white px-4 py-2 rounded">${window.lang.step5.back}</button>
      <button id="btn-save-step5" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">${window.lang.step5.save}</button>
    </div>
  `;

  // Các nút điều hướng & chức năng
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

  populateStep5();
}

// --------- Hàm lấy danh sách vị thuốc hiệu chỉnh cuối cùng ---------
function getFinalHerbList() {
  try {
    return JSON.parse(document.getElementById("final-herb-list").dataset.herbs || "[]");
  } catch { return []; }
}

// --------- HIỂN THỊ LỊCH SỬ TOA CŨ & TOA HIỆN TẠI ---------
export function populateStep5() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");

  // PHẦN 1: Lịch sử toa thuốc
  const container = document.getElementById("previous-formulas");
  if (!container) return;
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

  // PHẦN 2: Toa bác sĩ đề xuất
  document.getElementById("step5-doctor-draft").value = data.steps?.step4?.finalDoctor || "";

  // PHẦN 3: Đổ lại danh sách vị thuốc cuối cùng (edit)
  parseDoctorDraftFormula();

  // PHẦN 4: Gán lại usage/note đã lưu
  document.getElementById("step5-usage").value = data.steps?.step5?.usage || "";
  document.getElementById("step5-note").value = data.steps?.step5?.note || "";
}

// --------- XỬ LÝ DANH SÁCH VỊ THUỐC ---------
function parseDoctorDraftFormula() {
  const draft = document.getElementById("step5-doctor-draft")?.value || "";
  const container = document.getElementById("final-herb-list");
  if (!draft || !container) return;
  const herbs = [];
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

// --------- Thêm vị thuốc mới ---------
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

// --------- Ghi chú tự động ---------
function autoFillStep5Note() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    alert("⚠️ Không có vị thuốc hoặc dữ liệu.");
    return;
  }

  const lines = [];

  herbs.forEach(h => {
    const item = window.herbalData.find(x => x.herb === h.name);
    if (!item) return;

    const toxicNote = item.toxic?.trim();
    const generalNote = item.note?.trim();

    let combinedNote = "";

    if (toxicNote) combinedNote += `☠️ ${toxicNote}`;
    if (generalNote) {
      if (combinedNote) combinedNote += " | ";
      combinedNote += `📝 ${generalNote}`;
    }

    if (combinedNote) {
      lines.push(`• ${h.name}: ${combinedNote}`);
    }
  });

  const noteBox = document.getElementById("step5-note");
  noteBox.value = lines.join("\n") || "Không có ghi chú đặc biệt.";
}

// --------- Lưu dữ liệu bước 5 và xuất file JSON ---------
function saveStep5() {
  const key = localStorage.getItem("currentPatient");
  if (!key) return alert("Chưa chọn hồ sơ!");
  const data = JSON.parse(localStorage.getItem(key) || "{}");
  const herbs = JSON.parse(document.getElementById("final-herb-list").dataset.herbs || "[]");
  const finalFormula = herbs.map(h => `${h.name} ${h.dose}`).join(", ");
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

// ======================= BIỂU ĐỒ PHÂN TÍCH TOA =======================

// 1. TỨ KHÍ
function renderChartTemperature() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    console.warn("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }

  let sum = 0, count = 0;
  const missingTukhi = [];

  herbs.forEach(h => {
    const item = window.herbalData.find(x => x.herb === h.name);
    if (!item) {
      missingTukhi.push(h.name + " (không tìm thấy)");
      return;
    }

    const tukhi = parseFloat(item.tukhi);
    const sd_dose = parseFloat(item.sd_dose);
    const dose = h.dose;

    if (!isNaN(tukhi) && !isNaN(sd_dose) && sd_dose > 0) {
      const score = (dose / sd_dose) * tukhi;
      sum += score;
      count++;
    } else {
      missingTukhi.push(h.name + " (thiếu tứ khí hoặc SD)");
    }
  });

  if (missingTukhi.length > 0) {
    alert("⚠️ Thiếu dữ liệu cho các vị thuốc:\n- " + missingTukhi.join("\n- "));
  }

  const avgScore = count ? sum / count : 0;
  renderGradientScale(avgScore); // Gọi vẽ thanh gradient
}

function renderGradientScale(avgScore) {
  const canvas = document.getElementById("chart-temperature");
  const ctx = canvas.getContext("2d");

  const width = canvas.width;
  const height = canvas.height;

  // Xóa canvas cũ
  ctx.clearRect(0, 0, width, height);

  // Màu các vùng tứ khí
  const colors = [
    "#2c7bb6", // Đại Hàn
    "#00a6ca", // Hàn
    "#00ccbc", // Lương
    "#ffffbf", // Bình
    "#fdae61", // Ôn
    "#f46d43", // Nhiệt
    "#d73027"  // Đại Nhiệt
  ];

  const labels = ["Đại Hàn", "Hàn", "Lương", "Bình", "Ôn", "Nhiệt", "Đại Nhiệt"];
  const numZones = labels.length;
  const zoneWidth = width / numZones;

  // Vẽ từng vùng màu
  for (let i = 0; i < numZones; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(i * zoneWidth, 30, zoneWidth, 30);
  }

  // Vẽ nhãn vùng
  ctx.fillStyle = "#000";
  ctx.font = "12px sans-serif";
  ctx.textAlign = "center";

  labels.forEach((label, i) => {
    const x = i * zoneWidth + zoneWidth / 2;
    ctx.fillText(label, x, 75);
  });

  // Vẽ mũi tên chỉ vị trí avgScore [-5 đến +5]
  const normalized = (avgScore + 5) / 10;  // chuyển sang khoảng [0,1]
  const posX = normalized * width;

  ctx.fillStyle = "black";
  ctx.font = "20px sans-serif";
  ctx.fillText("⬇", posX, 25);
}

// 2. NGŨ VỊ
function renderChartFlavor() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    console.warn("❌ Không có vị thuốc hoặc dữ liệu.");
    return;
  }

  const flavorLabels = ["Toan", "Tân", "Hàm", "Khổ", "Cam", "Phương hương"];
  const flavorKeys = ["chua", "cay", "man", "dang", "ngot", "muithom"];
  const flavorTotals = [0, 0, 0, 0, 0, 0];
  const missingFlavorData = [];

  herbs.forEach(h => {
    const item = window.herbalData.find(x => x.herb === h.name);
    if (!item) {
      missingFlavorData.push(h.name + " (không tìm thấy)");
      return;
    }

    const dose = parseFloat(h.dose);
    const sd_dose = parseFloat(item.sd_dose);

    if (isNaN(dose) || isNaN(sd_dose) || sd_dose === 0) {
      missingFlavorData.push(h.name + " (thiếu liều hoặc SD)");
      return;
    }

    let valid = true;
    const scores = flavorKeys.map(key => {
      const value = parseFloat(item[key]);
      if (isNaN(value)) {
        valid = false;
        return 0;
      }
      return (dose / sd_dose) * value;
    });

    if (!valid) {
      missingFlavorData.push(h.name + " (thiếu trị số ngũ vị)");
    }

    scores.forEach((s, i) => flavorTotals[i] += s);
  });

  // 🔔 Cảnh báo nếu thiếu thông tin
  if (missingFlavorData.length > 0) {
    alert("⚠️ Các vị thuốc sau thiếu dữ liệu vị hoặc mùi:\n- " + missingFlavorData.join("\n- "));
  }

  // 🎯 Vẽ biểu đồ radar
  const ctx = document.getElementById("chart-flavor").getContext("2d");

  if (window.flavorChart) {
    window.flavorChart.destroy();
  }

  window.flavorChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: flavorLabels,
      datasets: [{
        label: "Tổng hợp ngũ vị & mùi",
        data: flavorTotals,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)"
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          suggestedMax: Math.max(...flavorTotals) + 1
        }
      }
    }
  });
}

// 3. QUY KINH
function renderChartMeridian() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    console.warn("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
    return;
  }

  const meridianLabels = ["Tâm", "Can", "Tỳ", "Phế", "Thận", "Tâm bào", "Đại trường", "Tiểu trường", "Vị", "Đởm", "Bàng quang", "Tam tiêu"];
  const meridianKeys = ["tam", "can", "ty", "phe", "than", "tambao", "dai truong", "tieutruong", "vi", "dom", "bangquang", "tamtieu"];
  const meridianTotals = Array(12).fill(0);
  const missingMeridianData = [];

  herbs.forEach(h => {
    const item = window.herbalData.find(x => x.herb === h.name);
    if (!item) {
      missingMeridianData.push(h.name + " (không tìm thấy)");
      return;
    }

    const dose = parseFloat(h.dose);
    const sd_dose = parseFloat(item.sd_dose);

    if (isNaN(dose) || isNaN(sd_dose) || sd_dose === 0) {
      missingMeridianData.push(h.name + " (thiếu liều hoặc SD)");
      return;
    }

    let valid = true;
    const scores = meridianKeys.map(key => {
      const value = parseFloat(item[key]);
      if (isNaN(value)) {
        valid = false;
        return 0;
      }
      return (dose / sd_dose) * value;
    });

    if (!valid) {
      missingMeridianData.push(h.name + " (thiếu trị số quy kinh)");
    }

    scores.forEach((s, i) => meridianTotals[i] += s);
  });

  if (missingMeridianData.length > 0) {
    alert("⚠️ Các vị thuốc sau thiếu dữ liệu quy kinh:\n- " + missingMeridianData.join("\n- "));
  }

  const ctx = document.getElementById("chart-meridian").getContext("2d");

  if (window.meridianChart) {
    window.meridianChart.destroy();
  }

  window.meridianChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: meridianLabels,
      datasets: [{
        label: "Tổng hợp quy kinh",
        data: meridianTotals,
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgba(255, 205, 86, 1)"
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          suggestedMax: Math.max(...meridianTotals) + 1
        }
      }
    }
  });
}

function safeParseNumber(value) {
  if (value === null || value === undefined || value === "") return NaN;
  return typeof value === "number" ? value : parseFloat(String(value).trim());
}

// 4. THĂNG – GIÁNG – PHÙ – TRẦM
function renderChartDirection() {
  const herbs = getFinalHerbList();
  if (!herbs.length || !window.herbalData) {
    console.warn("❌ Không có vị thuốc hoặc dữ liệu herbalData chưa sẵn sàng.");
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
      if (thanggiang > 0) V["Thăng"] += weight * thanggiang;
      else V["Giáng"] += weight * Math.abs(thanggiang);
    }

    if (!isNaN(phutram)) {
      if (phutram > 0) V["Phù"] += weight * phutram;
      else V["Trầm"] += weight * Math.abs(phutram);
    }
  }

  if (missing.length > 0) {
    alert("⚠️ Thiếu dữ liệu:\n- " + missing.join("\n- "));
  }

  const vectorX = V.Thăng - V.Giáng;
  const vectorY = V.Phù - V.Trầm;
  const magnitude = Math.sqrt(vectorX ** 2 + vectorY ** 2);
  const angleRad = Math.atan2(vectorY, vectorX);

  const ctx = document.getElementById("chart-direction")?.getContext("2d");
  if (!ctx) return;
  if (window.directionChart) window.directionChart.destroy();

  const maxValue = Math.max(V.Thăng, V.Giáng, V.Phù, V.Trầm, 1);

  const vectorPlugin = {
    id: 'vectorPluginRadar',
    afterDraw(chart) {
      const { ctx, chartArea, scales } = chart;
      const centerX = chartArea.left + chartArea.width / 2;
      const centerY = chartArea.top + chartArea.height / 2;
      const rScale = scales.r;

      const radius = rScale.getPixelForValue(magnitude) - rScale.getPixelForValue(0);
      const angle = angleRad - Math.PI / 2;

      const endX = centerX + radius * Math.cos(angle);
      const endY = centerY + radius * Math.sin(angle);

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = "orange";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Mũi tên
      const headlen = 10;
      const dx = endX - centerX;
      const dy = endY - centerY;
      const angle2 = Math.atan2(dy, dx);

      ctx.beginPath();
      ctx.moveTo(endX, endY);
      ctx.lineTo(endX - headlen * Math.cos(angle2 - Math.PI / 6), endY - headlen * Math.sin(angle2 - Math.PI / 6));
      ctx.lineTo(endX - headlen * Math.cos(angle2 + Math.PI / 6), endY - headlen * Math.sin(angle2 + Math.PI / 6));
      ctx.fillStyle = "orange";
      ctx.fill();

      ctx.restore();
    }
  };

  window.directionChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: ["Thăng", "Phù", "Giáng", "Trầm"],
      datasets: [{
        label: "Tổng lực",
        data: [V.Thăng, V.Phù, V.Giáng, V.Trầm],
        backgroundColor: "rgba(255, 165, 0, 0.2)",
        borderColor: "orange",
        pointBackgroundColor: "orange"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1 },
      scales: {
        r: {
          beginAtZero: true,
          max: Math.ceil(maxValue * 1.1),
          ticks: {
            stepSize: Math.ceil(maxValue / 3) || 1
          },
          pointLabels: {
            font: { size: 14 }
          }
        }
      },
      plugins: {
        title: {
          display: true,
          text: "Biểu đồ Radar: Thăng – Giáng – Phù – Trầm"
        },
        legend: {
          display: false
        }
      }
    },
    plugins: [vectorPlugin]
  });
}

// 5. TÁC DỤNG YHCT
function renderChartEffect() {
  const herbsByEffect = window.herbsByEffect || {};
  const masterHerbData = window.herbalData || [];
  const formula = getFinalHerbList();

  if (!Array.isArray(formula) || formula.length === 0) {
    alert("⚠️ Không có toa thuốc để phân tích.");
    return;
  }

  const effectScores = {};

  for (const herbItem of formula) {
    const herbName = herbItem.name?.trim();
    const doseUsed = parseFloat(herbItem.dose || 0);

    if (!herbName || doseUsed <= 0) {
      console.warn(`⚠️ Bỏ qua vị thuốc không hợp lệ: ${herbName}`);
      continue;
    }

    const standard = masterHerbData.find(h => h.herb?.trim() === herbName && h.sd_dose);
    const sdDose = standard ? parseFloat(standard.sd_dose) : doseUsed;

    let matched = false;

    for (const [effect, herbs] of Object.entries(herbsByEffect)) {
      for (const h of herbs) {
        const hName = h.vietnamese?.trim();
        const score = parseFloat(h.score || 0);

        if (hName === herbName && score > 0 && sdDose > 0) {
          matched = true;
          const weighted = (score * doseUsed) / sdDose;
          effectScores[effect] = (effectScores[effect] || 0) + weighted;
        }
      }
    }

    if (!matched) {
      console.warn(`❌ Không tìm thấy tác dụng phù hợp cho: ${herbName}`);
    }
  }

  const labels = Object.keys(effectScores);
  const values = Object.values(effectScores).map(x => +x.toFixed(2));

  if (labels.length === 0) {
    alert("⚠️ Không có tác dụng YHCT nào được xác định.");
    return;
  }

  const ctx = document.getElementById("chart-effect").getContext("2d");
  if (window.effectChart) window.effectChart.destroy();
  window.effectChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Tổng điểm tác dụng",
        data: values,
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        barThickness: labels.length > 15 ? 10 : labels.length > 10 ? 15 : 20
      }]
    },
    options: {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false, // ⚠️ để canvas cao theo div cha
  plugins: {
    title: {
      display: true,
      text: "Phân tích tổng điểm Tác dụng YHCT của bài thuốc"
    },
    legend: { display: false }
  },
  scales: {
    x: { beginAtZero: true },
    y: {
      ticks: {
        autoSkip: false,
        font: (ctx) => {
          const total = labels.length;
          const size = total > 15 ? 10 : total > 10 ? 12 : 14;
          return { size };
        }
      }
    }
  }
}
  });
}
