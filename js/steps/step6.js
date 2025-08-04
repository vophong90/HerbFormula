import { appState, saveState } from "../state.js";

/* ================== STATE STEP6 ================== */
function ensureStep6() {
  appState.steps ||= {};
  appState.steps.step6 ||= {
    notesBySnapshot: {} // { snapshotAtISO: "ghi chú ..." }
  };
  return appState.steps.step6;
}

/* ================== RENDER CHÍNH ================== */
async function loadPartial(path) {
  const res = await fetch(path);
  return await res.text();
}

let _lineChart, _barChart;

export async function renderStep6(root) {
  root.innerHTML = await loadPartial("/partials/step6.html");

  // nguồn dữ liệu từ Bước 2 (history các lần VAS)
  const st2 = appState.steps?.step2 || { symptoms: [], history: [] };
  const history = Array.isArray(st2.history) ? st2.history : [];

  // cập nhật thẻ tóm tắt
  const $count = document.getElementById("b6-snapshot-count");
  const $range = document.getElementById("b6-range");
  const $improved = document.getElementById("b6-improved");
  $count.textContent = String(history.length || 0);
  if (history.length >= 1) {
    const first = history[0].at;
    const last = history[history.length - 1].at;
    $range.textContent = `${fmtDT(first)} → ${fmtDT(last)}`;
    $improved.textContent = String(countImproved(st2));
  } else {
    $range.textContent = "—";
    $improved.textContent = "0";
  }

  // đổ dropdown triệu chứng
  const symptomSet = collectAllSymptoms(st2);
  const $select = document.getElementById("b6-symptom-select");
  $select.innerHTML = "";
  if (symptomSet.size === 0) {
    $select.innerHTML = `<option value="">(Chưa có dữ liệu VAS — hãy lưu ở Bước 2)</option>`;
  } else {
    Array.from(symptomSet).forEach(name => {
      const opt = document.createElement("option");
      opt.value = name; opt.textContent = name;
      $select.appendChild(opt);
    });
  }

  // biểu đồ đường theo thời gian cho triệu chứng đang chọn
  const firstSymptom = $select.options[0]?.value || "";
  if (firstSymptom) drawLineChart(st2, firstSymptom);
  $select.addEventListener("change", () => {
    const s = $select.value;
    drawLineChart(st2, s);
  });

  // biểu đồ cột so sánh baseline vs gần nhất
  drawBarChart(st2);

  // ghi chú theo snapshot gần nhất
  const st6 = ensureStep6();
  const latestAt = history[history.length - 1]?.at || "";
  const $note = document.getElementById("b6-note");
  const $status = document.getElementById("b6-note-status");
  $note.value = (latestAt && st6.notesBySnapshot[latestAt]) || "";
  document.getElementById("b6-btn-save-note").onclick = () => {
    if (!latestAt) {
      alert("Chưa có lần đánh giá VAS để lưu ghi chú.");
      return;
    }
    st6.notesBySnapshot[latestAt] = $note.value.trim();
    saveState();
    $status.textContent = "Đã lưu ghi chú cho lần " + fmtDT(latestAt);
    setTimeout(() => { $status.textContent = ""; }, 2000);
  };

  // điều hướng
  document.getElementById("b6-btn-back5").onclick = () => (location.hash = "#/step5");
  document.getElementById("b6-btn-next7").onclick = () => (location.hash = "#/step7");
}

/* ================== TÍNH TOÁN & VẼ BIỂU ĐỒ ================== */
function collectAllSymptoms(st2) {
  const set = new Set();
  // từ danh sách hiện tại
  (st2.symptoms || []).forEach(x => x?.text && set.add(x.text));
  // từ lịch sử
  (st2.history || []).forEach(snap => {
    (snap.items || []).forEach(x => x?.text && set.add(x.text));
  });
  return set;
}

function buildSeriesForSymptom(st2, symptomText) {
  const xs = []; // nhãn: thời điểm
  const ys = []; // giá trị VAS

  (st2.history || []).forEach(snap => {
    xs.push(fmtDT(snap.at));
    const found = (snap.items || []).find(x => x.text === symptomText);
    ys.push(found ? Number(found.value ?? 0) : 0);
  });
  return { xs, ys };
}

function drawLineChart(st2, symptomText) {
  const ctx = document.getElementById("b6-line");
  if (!ctx) return;
  if (_lineChart) _lineChart.destroy();

  const { xs, ys } = buildSeriesForSymptom(st2, symptomText || "");
  _lineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xs,
      datasets: [{ label: symptomText || "Triệu chứng", data: ys }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      scales: { y: { suggestedMin: 0, suggestedMax: 10, ticks: { stepSize: 1 } } }
    }
  });
}

function drawBarChart(st2) {
  const ctx = document.getElementById("b6-bar");
  if (!ctx) return;
  if (_barChart) _barChart.destroy();

  const base = valueMapAt(st2, 0); // lần đầu
  const last = valueMapAt(st2, (st2.history?.length || 1) - 1); // lần gần nhất

  const allNames = Array.from(new Set([...Object.keys(base), ...Object.keys(last)]));
  // sắp xếp theo VAS lần gần nhất giảm dần
  allNames.sort((a, b) => (last[b] ?? 0) - (last[a] ?? 0));

  const labels = allNames.map(trimLabel24);
  const baseline = allNames.map(n => base[n] ?? 0);
  const latest = allNames.map(n => last[n] ?? 0);

  _barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        { label: "Lần đầu", data: baseline },
        { label: "Gần nhất", data: latest }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: true }, tooltip: { enabled: true } },
      scales: { y: { suggestedMin: 0, suggestedMax: 10, ticks: { stepSize: 1 } } }
    }
  });
}

function valueMapAt(st2, index) {
  const map = {};
  const snaps = st2.history || [];
  if (!snaps.length) return map;
  const i = Math.max(0, Math.min(index, snaps.length - 1));
  (snaps[i].items || []).forEach(x => {
    const name = (x.text || "").trim();
    if (!name) return;
    map[name] = Number(x.value ?? 0);
  });
  return map;
}

function countImproved(st2) {
  // đếm số triệu chứng có (baseline - latest) > 0
  const base = valueMapAt(st2, 0);
  const last = valueMapAt(st2, (st2.history?.length || 1) - 1);
  let c = 0;
  Object.keys(base).forEach(k => {
    const d = (base[k] ?? 0) - (last[k] ?? 0);
    if (d > 0) c++;
  });
  return c;
}

/* ================== HELPERS ================== */
function fmtDT(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleString();
}
function trimLabel24(s) {
  s = String(s || "");
  return s.length > 24 ? s.slice(0, 23) + "…" : s;
}
