import { appState, saveState } from "../state.js";

/* ================== STATE STEP5 ================== */
function ensureStep5() {
  appState.steps ||= {};
  appState.steps.step5 ||= {
    prescription: { items: [], instructions: "", notes: "" },
    history: [] // [{ at, items, instructions, notes }]
  };
  return appState.steps.step5;
}

/* ================== RENDER CHÍNH ================== */
async function loadPartial(path) {
  const res = await fetch(path);
  return await res.text();
}

export async function renderStep5(root) {
  root.innerHTML = await loadPartial("/partials/step5.html");

  // thông tin ngữ cảnh
  document.getElementById("b5-patient").textContent = appState.name || "—";
  document.getElementById("b5-syndrome").textContent = appState.steps?.step3?.selectedSyndrome || "—";
  document.getElementById("b5-time").textContent = new Date().toLocaleString();

  // khởi tạo toa: nếu chưa có, nạp từ bước 4
  const st5 = ensureStep5();
  if (!st5.prescription.items?.length) {
    const fromB4 = appState.steps?.step4?.final || [];
    st5.prescription.items = fromB4.map(x => ({ name: x.name, dose: x.dose ?? "", note: x.note || "" }));
    saveState();
  }

  // đổ dữ liệu
  document.getElementById("b5-instructions").value = st5.prescription.instructions || "";
  document.getElementById("b5-notes").value = st5.prescription.notes || "";
  renderTable(st5.prescription.items);
  renderHistory(st5.history);

  // wire buttons
  document.getElementById("b5-btn-from-b4").onclick = () => {
    const fromB4 = appState.steps?.step4?.final || [];
    st5.prescription.items = fromB4.map(x => ({ name: x.name, dose: x.dose ?? "", note: x.note || "" }));
    saveState(); renderTable(st5.prescription.items);
  };
  document.getElementById("b5-btn-clear").onclick = () => {
    if (!confirm("Xoá toàn bộ toa hiện tại?")) return;
    st5.prescription.items = []; saveState(); renderTable([]);
  };
  document.getElementById("b5-btn-add").onclick = onAddItem;
  document.getElementById("b5-btn-save").onclick = onSave;
  document.getElementById("b5-btn-download").onclick = downloadCurrentDataAsJSON;
  document.getElementById("b5-btn-commit").onclick = commitVisit;
  document.getElementById("b5-btn-back4").onclick = () => (location.hash = "#/step4");
  document.getElementById("b5-btn-next6").onclick = () => { onSave(); location.hash = "#/step6"; };

  // lắng nghe thay đổi instructions/notes
  document.getElementById("b5-instructions").addEventListener("input", (e) => {
    const st5 = ensureStep5(); st5.prescription.instructions = e.target.value; saveState();
  });
  document.getElementById("b5-notes").addEventListener("input", (e) => {
    const st5 = ensureStep5(); st5.prescription.notes = e.target.value; saveState();
  });
}

/* ================== BẢNG TOA ================== */
function renderTable(items) {
  const tbody = document.getElementById("b5-final-tbody");
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
        const st5 = ensureStep5();
        if (k === "dose") {
          st5.prescription.items[i][k] = e.target.value === "" ? "" : Number(e.target.value);
        } else {
          st5.prescription.items[i][k] = e.target.value;
        }
        saveState();
      });
    });
    tr.querySelector("[data-del]").onclick = (e) => {
      const i = Number(e.currentTarget.getAttribute("data-del"));
      const st5 = ensureStep5();
      st5.prescription.items.splice(i, 1);
      saveState();
      renderTable(st5.prescription.items);
    };
    tbody.appendChild(tr);
  });
}

function onAddItem() {
  const name = document.getElementById("b5-custom-herb").value.trim();
  const dose = document.getElementById("b5-custom-dose").value.trim();
  if (!name) return;
  const st5 = ensureStep5();
  st5.prescription.items.push({ name, dose: dose ? Number(dose) : "", note: "" });
  saveState();
  renderTable(st5.prescription.items);
  document.getElementById("b5-custom-herb").value = "";
  document.getElementById("b5-custom-dose").value = "";
}

/* ================== LƯU & LỊCH SỬ ================== */
function onSave() {
  const st5 = ensureStep5();
  // đảm bảo items hợp lệ (lọc rỗng tên)
  st5.prescription.items = (st5.prescription.items || []).filter(x => (x.name || "").trim());
  saveState();
  alert("✅ Đã lưu toa hiện tại.");
}

function commitVisit() {
  const st5 = ensureStep5();
  // snapshot
  const snap = {
    at: new Date().toISOString(),
    items: (st5.prescription.items || []).map(x => ({ ...x })),
    instructions: st5.prescription.instructions || "",
    notes: st5.prescription.notes || "",
  };
  st5.history.push(snap);
  saveState();
  renderHistory(st5.history);
  alert("✅ Đã ghi nhận vào lịch sử.");
}

function renderHistory(list) {
  const box = document.getElementById("b5-history");
  if (!list?.length) {
    box.innerHTML = `<div class="text-gray-500">Chưa có lần khám nào được ghi nhận.</div>`;
    return;
  }
  box.innerHTML = "";
  [...list].reverse().forEach((h, idx) => {
    const wrap = document.createElement("div");
    wrap.className = "border rounded p-3 mb-2";
    const lines = (h.items || []).map(it => `• ${it.name}${it.dose ? ` — ${it.dose}g` : ""}${it.note ? ` (${it.note})` : ""}`).join("\n");
    wrap.innerHTML = `
      <div class="flex items-center justify-between">
        <div class="font-semibold">Lần ${list.length - idx} — ${new Date(h.at).toLocaleString()}</div>
        <button class="bg-blue-600 text-white px-2 py-1 rounded" data-restore="${list.length - idx - 1}">Phục hồi</button>
      </div>
      <pre class="text-sm bg-gray-50 p-2 rounded mt-2 whitespace-pre-wrap">${escapeHTML(lines)}</pre>
      ${h.instructions ? `<div class="mt-1 text-sm"><span class="font-medium">Cách dùng:</span> ${escapeHTML(h.instructions)}</div>` : ""}
      ${h.notes ? `<div class="text-sm"><span class="font-medium">Ghi chú:</span> ${escapeHTML(h.notes)}</div>` : ""}
    `;
    wrap.querySelector("[data-restore]").onclick = () => {
      // vị trí thực trong mảng: index từ 0..n-1
      const realIdx = Number(wrap.querySelector("[data-restore]").getAttribute("data-restore"));
      const real = list[realIdx];
      const st5 = ensureStep5();
      st5.prescription.items = (real.items || []).map(x => ({ ...x }));
      st5.prescription.instructions = real.instructions || "";
      st5.prescription.notes = real.notes || "";
      saveState();
      renderTable(st5.prescription.items);
      document.getElementById("b5-instructions").value = st5.prescription.instructions;
      document.getElementById("b5-notes").value = st5.prescription.notes;
      alert("↩ Đã phục hồi toa từ lịch sử.");
    };
    box.appendChild(wrap);
  });
}

/* ================== XUẤT JSON ================== */
function downloadCurrentDataAsJSON() {
  const filename = makeFilename();
  const blob = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 0);
}

function makeFilename() {
  const name = (appState.name || "ho_so").replace(/\s+/g, "_");
  const d = new Date();
  const ymd = [d.getFullYear(), String(d.getMonth()+1).padStart(2,"0"), String(d.getDate()).padStart(2,"0")].join("");
  const hm = [String(d.getHours()).padStart(2,"0"), String(d.getMinutes()).padStart(2,"0")].join("");
  return `${name}_toa_${ymd}_${hm}.json`;
}

/* ================== HELPERS ================== */
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, (m) => (
    { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[m]
  ));
}
function escapeAttr(s) {
  return escapeHTML(s).replace(/"/g, "&quot;");
}
