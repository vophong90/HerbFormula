import { appState, saveState } from "../state.js";

/* ================== CẤU HÌNH API (nếu muốn gọi GPT) ================== */
const API_BASE = "https://gpt-api-19xu.onrender.com"; // sửa nếu cần

async function gptSuggestBySyndrome(syndrome) {
  // Thử endpoint JSON hiện đại
  try {
    const res = await fetch(`${API_BASE}/suggest-herbs-by-syndrome`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ syndrome, max: 10, lang: "vi" }),
    });
    if (res.ok) return await res.json(); // { items: [{name, dose?, note?}] }
  } catch {}
  // Thử endpoint PHP form-urlencoded cũ
  try {
    const form = new URLSearchParams();
    form.set("action", "suggest_source_herbs");
    form.set("syndrome", syndrome);
    const res = await fetch(`${API_BASE}/gpt.php`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
    if (res.ok) {
      const t = await res.text();
      try { return JSON.parse(t); } catch {
        const items = t.split(/\r?\n/).map(s => s.trim()).filter(Boolean).slice(0, 10);
        return { items: items.map(n => ({ name: n })) };
      }
    }
  } catch {}
  // Fallback để không vỡ app
  return {
    items: [
      { name: "Sài hồ", dose: 8, note: "sơ can giải uất" },
      { name: "Bạch truật", dose: 10, note: "kiện tỳ táo thấp" },
      { name: "Phục linh", dose: 12, note: "lợi thấp" },
    ],
  };
}

async function gptSuggestBySymptom(symptom) {
  try {
    const res = await fetch(`${API_BASE}/suggest-herbs-by-symptom`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptom, max: 10, lang: "vi" }),
    });
    if (res.ok) return await res.json();
  } catch {}
  // Fallback
  return {
    items: [
      { name: "Hương phụ", dose: 8, note: "lý khí chỉ thống" },
      { name: "Chỉ xác", dose: 6, note: "hành khí tiêu bĩ" },
      { name: "Cam thảo", dose: 4, note: "hoà trung" },
    ],
  };
}

/* ================== STATE STEP4 ================== */
function ensureStep4() {
  appState.steps ||= {};
  appState.steps.step4 ||= {
    s1: [], // [{name, note}]
    s2: [],
    s3: [],
    final: [], // [{name, dose, note}]
  };
  return appState.steps.step4;
}

function topPrioritySymptom() {
  const st2 = appState.steps?.step2;
  if (!st2?.symptoms?.length) return "";
  // lấy mục có VAS cao nhất
  const sorted = [...st2.symptoms].sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
  return sorted[0]?.text || "";
}

/* ================== RENDER CHÍNH ================== */
async function loadPartial(path) {
  const res = await fetch(path);
  return await res.text();
}

export async function renderStep4(root) {
  root.innerHTML = await loadPartial("/partials/step4.html");

  // đổ ngữ cảnh
  document.getElementById("b4-syndrome").value = appState.steps?.step3?.selectedSyndrome || "";
  document.getElementById("b4-priority-symptom").value = topPrioritySymptom();

  const st4 = ensureStep4();
  renderSList("b4-s1-list", st4.s1);
  renderSList("b4-s2-list", st4.s2);
  renderSList("b4-s3-list", st4.s3);
  renderFinalTable(st4.final);

  // Wire buttons
  document.getElementById("b4-btn-s1").onclick = onSuggestS1;
  document.getElementById("b4-btn-s1-clear").onclick = () => clearSList("s1");
  document.getElementById("b4-btn-s2").onclick = onSuggestS2;
  document.getElementById("b4-btn-s2-clear").onclick = () => clearSList("s2");
  document.getElementById("b4-btn-s3").onclick = onSuggestS3;
  document.getElementById("b4-btn-s3-clear").onclick = () => clearSList("s3");

  document.getElementById("b4-btn-merge").onclick = onMergeToFinal;
  document.getElementById("b4-btn-clear-final").onclick = () => { ensureStep4().final = []; saveState(); renderFinalTable([]); };

  document.getElementById("b4-btn-add").onclick = onAddCustom;
  document.getElementById("b4-btn-back3").onclick = () => (location.hash = "#/step3");
  document.getElementById("b4-btn-save").onclick = () => { saveState(); alert("✅ Đã lưu Bước 4."); };
  document.getElementById("b4-btn-next5").onclick = () => { saveState(); location.hash = "#/step5"; };
}

/* ================== 6S — HANDLERS ================== */
async function onSuggestS1() {
  const syn = (appState.steps?.step3?.selectedSyndrome || "").trim();
  if (!syn) return alert("Chưa có hội chứng ở Bước 3.");
  const btn = document.getElementById("b4-btn-s1"); btn.disabled = true; btn.textContent = "Đang gợi ý…";
  try {
    const rsp = await gptSuggestBySyndrome(syn);
    const items = normalizeItems(rsp?.items || []);
    const st4 = ensureStep4();
    st4.s1 = items;
    saveState();
    renderSList("b4-s1-list", st4.s1);
  } finally {
    btn.disabled = false; btn.textContent = "🤖 Gợi ý S1";
  }
}

async function onSuggestS2() {
  const sym = topPrioritySymptom();
  if (!sym) return alert("Chưa có triệu chứng ưu tiên (Bước 2).");
  const btn = document.getElementById("b4-btn-s2"); btn.disabled = true; btn.textContent = "Đang gợi ý…";
  try {
    const rsp = await gptSuggestBySymptom(sym);
    const items = normalizeItems(rsp?.items || []);
    const st4 = ensureStep4();
    st4.s2 = items;
    saveState();
    renderSList("b4-s2-list", st4.s2);
  } finally {
    btn.disabled = false; btn.textContent = "🤖 Gợi ý S2";
  }
}

function onSuggestS3() {
  // Gợi ý S3 đơn giản: thêm Cam thảo điều hoà + Trần bì kiện tỳ (fallback)
  const st4 = ensureStep4();
  const base = [
    { name: "Cam thảo", note: "hoà trung điều hoà", dose: 3 },
    { name: "Trần bì", note: "lý khí hoà vị", dose: 6 },
  ];
  st4.s3 = base;
  saveState();
  renderSList("b4-s3-list", st4.s3);
}

function clearSList(key) {
  const st4 = ensureStep4();
  st4[key] = [];
  saveState();
  renderSList(`b4-${key}-list`, []);
}

/* ================== GHÉP TOA ================== */
function onMergeToFinal() {
  const st4 = ensureStep4();
  const bucket = new Map(); // name -> {name, dose, note}
  const add = (it) => {
    const name = it.name?.trim();
    if (!name) return;
    const prev = bucket.get(name) || { name, dose: 0, note: "" };
    // cộng dồn liều nếu trùng
    prev.dose = Number(prev.dose || 0) + Number(it.dose || 0) || undefined;
    prev.note = prev.note || it.note || "";
    bucket.set(name, prev);
  };
  [...st4.s1, ...st4.s2, ...st4.s3].forEach(add);

  // Nếu mục nào chưa có dose → đặt mặc định 6g
  const merged = Array.from(bucket.values()).map(x => ({ ...x, dose: x.dose ?? 6 }));
  st4.final = merged;
  saveState();
  renderFinalTable(st4.final);
}

/* ================== UI LIST & FINAL TABLE ================== */
function renderSList(ulId, items) {
  const box = document.getElementById(ulId);
  if (!box) return;
  if (!items?.length) {
    box.innerHTML = `<li class="text-gray-500">— trống —</li>`;
    return;
  }
  box.innerHTML = "";
  items.forEach(it => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="font-medium">${escapeHTML(it.name)}</span>${
      it.dose ? ` — ${Number(it.dose)}g` : ""
    }${it.note ? ` <span class="text-gray-600">(${escapeHTML(it.note)})</span>` : ""}`;
    box.appendChild(li);
  });
}

function renderFinalTable(items) {
  const tbody = document.getElementById("b4-final-tbody");
  tbody.innerHTML = "";
  (items || []).forEach((it, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="border px-2 py-1">
        <input data-k="name" data-i="${idx}" value="${escapeAttr(it.name || "")}" class="w-full border rounded px-2 py-1">
      </td>
      <td class="border px-2 py-1 w-28">
        <input data-k="dose" data-i="${idx}" type="number" step="0.5" value="${it.dose ?? ""}" class="w-full border rounded px-2 py-1 text-right">
      </td>
      <td class="border px-2 py-1">
        <input data-k="note" data-i="${idx}" value="${escapeAttr(it.note || "")}" class="w-full border rounded px-2 py-1">
      </td>
      <td class="border px-2 py-1 text-center">
        <button data-del="${idx}" class="bg-red-600 text-white px-2 py-1 rounded">Xoá</button>
      </td>
    `;
    // events
    tr.querySelectorAll("input[data-k]").forEach(inp => {
      inp.addEventListener("input", (e) => {
        const i = Number(e.target.dataset.i);
        const k = e.target.dataset.k;
        const st4 = ensureStep4();
        if (k === "dose") {
          st4.final[i][k] = e.target.value === "" ? undefined : Number(e.target.value);
        } else {
          st4.final[i][k] = e.target.value;
        }
        saveState();
      });
    });
    tr.querySelector("[data-del]").onclick = (e) => {
      const i = Number(e.currentTarget.getAttribute("data-del"));
      const st4 = ensureStep4();
      st4.final.splice(i, 1);
      saveState();
      renderFinalTable(st4.final);
    };
    tbody.appendChild(tr);
  });
}

function onAddCustom() {
  const name = document.getElementById("b4-custom-herb").value.trim();
  const dose = document.getElementById("b4-custom-dose").value.trim();
  if (!name) return;
  const st4 = ensureStep4();
  st4.final.push({ name, dose: dose ? Number(dose) : undefined, note: "" });
  saveState();
  renderFinalTable(st4.final);
  document.getElementById("b4-custom-herb").value = "";
  document.getElementById("b4-custom-dose").value = "";
}

/* ================== HELPERS ================== */
function normalizeItems(arr) {
  return arr
    .map(x => ({
      name: String(x.name || "").trim(),
      dose: x.dose != null ? Number(x.dose) : undefined,
      note: x.note ? String(x.note) : "",
    }))
    .filter(x => x.name);
}
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, (m) => (
    { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[m]
  ));
}
function escapeAttr(s) {
  return escapeHTML(s).replace(/"/g, "&quot;");
}
