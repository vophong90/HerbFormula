import { appState, saveState } from "../state.js";

/** ====== CẤU HÌNH API (nếu muốn gọi GPT của bạn) ====== */
const API_BASE = "https://gpt-api-19xu.onrender.com"; // ← sửa nếu cần
// Ví dụ: nếu bạn có endpoint PHP cũ: `${API_BASE}/gpt.php`
// Hoặc endpoint JSON mới: `${API_BASE}/classic-syndrome`
async function callGPTSuggest(symptomsText) {
  // TODO: sửa cho khớp API của bạn. Dưới đây là 2 ví dụ — bỏ cái bạn không dùng:

  // --- Ví dụ A: API JSON POST hiện đại ---
  try {
    const res = await fetch(`${API_BASE}/classic-syndrome`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        symptoms: symptomsText.split(/\r?\n/).map(s => s.trim()).filter(Boolean),
        max: 5,
        lang: "vi"
      }),
    });
    if (res.ok) return await res.json(); // kỳ vọng: { items: [ { name, notes? }, ... ] }
  } catch (e) {
    // ignore để thử phương án B
  }

  // --- Ví dụ B: API PHP cũ (form-urlencoded) ---
  try {
    const form = new URLSearchParams();
    form.set("action", "suggest_classic_syndrome");
    form.set("symptoms", symptomsText);

    const res = await fetch(`${API_BASE}/gpt.php`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString(),
    });
    if (res.ok) {
      // tuỳ API của bạn trả gì: JSON hoặc text dạng danh sách
      const text = await res.text();
      // cố gắng parse JSON; nếu không được, tách dòng
      try {
        return JSON.parse(text);
      } catch {
        const items = text.split(/\r?\n/).map(s => s.trim()).filter(Boolean).slice(0, 5);
        return { items: items.map(x => ({ name: x })) };
      }
    }
  } catch (e) {
    // fall through
  }

  // --- Fallback mẫu (không cần API, để không vỡ app) ---
  return {
    items: [
      { name: "Can khí uất", notes: "Đau tức ngực sườn, ợ hơi, dễ cáu, lưỡi hồng, rêu mỏng." },
      { name: "Tỳ hư thấp trệ", notes: "Ăn kém, bụng đầy, mệt, đại tiện lỏng, lưỡi nhạt, rêu trắng nhờn." },
      { name: "Vị khí bất hòa", notes: "Ợ chua, buồn nôn, đầy trướng vùng thượng vị." },
    ]
  };
}

/** ====== TIỆN ÍCH CHUNG ====== */
async function loadPartial(path) {
  const res = await fetch(path);
  return await res.text();
}
function ensureStep3() {
  appState.steps ||= {};
  appState.steps.step3 ||= {
    selectedSyndrome: "",
    suggestions: [],       // [{ name, notes? }]
    extraQuestions: [],    // [{ id, text, type: 'yesno'|'text'|'number', value }]
    tree: "",              // mô tả cây đơn giản
  };
  return appState.steps.step3;
}
function getStep1SymptomsText() {
  return (appState.steps?.step1?.symptoms || "").trim();
}

/** ====== RENDER CHÍNH ====== */
export async function renderStep3(root) {
  root.innerHTML = await loadPartial("/partials/step3.html");

  // Điền triệu chứng từ Bước 1
  const $sym = document.getElementById("b3-symptoms");
  $sym.value = getStep1SymptomsText();

  // Khởi tạo UI theo state
  const st3 = ensureStep3();
  document.getElementById("b3-selected-syndrome").value = st3.selectedSyndrome || "";
  renderSuggestList(st3.suggestions);
  renderQuestions(st3.extraQuestions);
  renderTree(st3.tree);

  // Wire buttons
  document.getElementById("b3-btn-suggest").onclick = onSuggestClick;
  document.getElementById("b3-btn-clear-suggest").onclick = () => {
    const st = ensureStep3();
    st.suggestions = [];
    saveState();
    renderSuggestList(st.suggestions);
  };

  document.getElementById("b3-btn-gen-questions").onclick = onGenerateQuestions;
  document.getElementById("b3-btn-clear-questions").onclick = () => {
    const st = ensureStep3();
    st.extraQuestions = [];
    saveState();
    renderQuestions(st.extraQuestions);
  };

  document.getElementById("b3-btn-back2").onclick = () => (location.hash = "#/step2");
  document.getElementById("b3-btn-save").onclick = onSave;
  document.getElementById("b3-btn-next4").onclick = () => {
    onSave();
    location.hash = "#/step4";
  };

  // Lưu thay đổi ô nhập hội chứng
  document.getElementById("b3-selected-syndrome").addEventListener("input", (e) => {
    const st = ensureStep3();
    st.selectedSyndrome = e.target.value;
    saveState();
  });
}

/** ====== HÀM: Gợi ý hội chứng ====== */
async function onSuggestClick() {
  const text = getStep1SymptomsText();
  if (!text) return alert("Chưa có triệu chứng ở Bước 1.");

  const btn = document.getElementById("b3-btn-suggest");
  btn.disabled = true; btn.textContent = "Đang gợi ý…";
  try {
    const data = await callGPTSuggest(text); // { items: [{name, notes?}, ...] }
    const items = (data?.items || [])
      .filter(x => x?.name)
      .map(x => ({ name: String(x.name), notes: x.notes ? String(x.notes) : "" }))
      .slice(0, 5);

    const st = ensureStep3();
    st.suggestions = items;
    // Nếu chưa có hội chứng đang xét → chọn mục đầu tiên
    if (!st.selectedSyndrome && items[0]) st.selectedSyndrome = items[0].name;
    saveState();

    renderSuggestList(items);
    // cập nhật ô nhập
    document.getElementById("b3-selected-syndrome").value = st.selectedSyndrome || "";
  } catch (e) {
    alert("Không gợi ý được (API lỗi). Đã dùng dữ liệu mẫu để tránh vỡ app.");
  } finally {
    btn.disabled = false; btn.textContent = "🤖 GPT gợi ý";
  }
}

function renderSuggestList(items) {
  const box = document.getElementById("b3-suggest-list");
  if (!items?.length) {
    box.innerHTML = `<div class="text-gray-500">Chưa có gợi ý. Nhấn “GPT gợi ý”.</div>`;
    return;
  }
  box.innerHTML = "";
  items.forEach((it, idx) => {
    const card = document.createElement("div");
    card.className = "border rounded p-3 bg-white";
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <div>
          <div class="font-medium">#${idx + 1}. ${escapeHTML(it.name)}</div>
          ${it.notes ? `<div class="text-sm text-gray-600 mt-1">${escapeHTML(it.notes)}</div>` : ""}
        </div>
        <button class="b3-pick bg-blue-600 text-white px-3 py-1 rounded" data-name="${escapeAttr(it.name)}">Chọn</button>
      </div>
    `;
    card.querySelector(".b3-pick").onclick = (e) => {
      const name = e.currentTarget.getAttribute("data-name");
      const st = ensureStep3();
      st.selectedSyndrome = name;
      saveState();
      document.getElementById("b3-selected-syndrome").value = name;
    };
    box.appendChild(card);
  });
}

/** ====== HÀM: Sinh câu hỏi bổ sung từ hội chứng đang xét ====== */
function onGenerateQuestions() {
  const st = ensureStep3();
  const name = (st.selectedSyndrome || "").trim();
  if (!name) return alert("Chưa chọn hội chứng đang xét.");

  // Ở đây mình tạo mẫu câu hỏi dựa trên tên hội chứng.
  // Bạn có thể thay bằng gọi API để sinh câu hỏi chi tiết.
  const base = [
    { id: "pain_site", text: "Vị trí/tạng phủ liên quan có biểu hiện đặc trưng không?", type: "text", value: "" },
    { id: "heat_cold", text: "Cảm giác hàn/nhiệt, sợ lạnh hay nóng?", type: "text", value: "" },
    { id: "tongue", text: "Lưỡi (màu/rêu) phù hợp với hội chứng?", type: "text", value: "" },
    { id: "pulse", text: "Mạch tượng gợi ý gì?", type: "text", value: "" },
    { id: "course", text: "Diễn tiến (phát tác/kéo dài/lui bệnh)?", type: "text", value: "" },
  ];

  // Nếu là "Can khí uất" thêm 1 yes/no minh hoạ
  if (/can\s*khí\s*uất/i.test(name)) {
    base.unshift({ id: "irritability", text: "Dễ cáu gắt, uất ức?", type: "yesno", value: null });
  }

  st.extraQuestions = base;
  saveState();
  renderQuestions(st.extraQuestions);
  buildSimpleTree(); // cập nhật preview cây chẩn đoán
}

function renderQuestions(items) {
  const box = document.getElementById("b3-questions");
  if (!items?.length) {
    box.innerHTML = `<div class="text-gray-500">Chưa có câu hỏi. Nhấn “Sinh câu hỏi bổ sung”.</div>`;
    return;
  }
  box.innerHTML = "";

  items.forEach((q, idx) => {
    const wrap = document.createElement("div");
    wrap.className = "bg-white border rounded p-3";
    wrap.innerHTML = `
      <div class="font-medium mb-1">Q${idx + 1}. ${escapeHTML(q.text)}</div>
      <div>${renderInputHTML(q, idx)}</div>
    `;
    // gắn sự kiện cập nhật giá trị
    attachInputHandler(wrap, q, idx);
    box.appendChild(wrap);
  });
}

function renderInputHTML(q, idx) {
  if (q.type === "yesno") {
    const v = q.value === true ? "yes" : q.value === false ? "no" : "";
    return `
      <select data-idx="${idx}" class="border rounded px-2 py-1">
        <option value="">-- chọn --</option>
        <option value="yes" ${v==="yes"?"selected":""}>Có</option>
        <option value="no"  ${v==="no" ?"selected":""}>Không</option>
      </select>
    `;
  }
  if (q.type === "number") {
    return `<input data-idx="${idx}" type="number" class="border rounded px-2 py-1" value="${q.value ?? ""}">`;
  }
  // text mặc định
  return `<input data-idx="${idx}" type="text" class="border rounded px-2 py-1 w-full" value="${escapeAttr(q.value ?? "")}">`;
}

function attachInputHandler(container, q, idx) {
  const el = container.querySelector("[data-idx]");
  if (!el) return;
  el.addEventListener("input", (e) => {
    const st = ensureStep3();
    if (q.type === "yesno") {
      st.extraQuestions[idx].value = e.target.value === "yes" ? true : e.target.value === "no" ? false : null;
    } else if (q.type === "number") {
      st.extraQuestions[idx].value = e.target.value === "" ? null : Number(e.target.value);
    } else {
      st.extraQuestions[idx].value = e.target.value;
    }
    saveState();
    buildSimpleTree(); // cập nhật preview cây
  });
}

/** ====== HÀM: Tạo "cây chẩn đoán" đơn giản để preview ====== */
function buildSimpleTree() {
  const st3 = ensureStep3();
  const lines = [];
  lines.push(`Hội chứng: ${st3.selectedSyndrome || "(chưa chọn)"}`);
  (st3.extraQuestions || []).forEach((q, i) => {
    const v = q.type === "yesno"
      ? (q.value === true ? "Có" : q.value === false ? "Không" : "(chưa trả lời)")
      : (q.value ?? "(chưa trả lời)");
    lines.push(`- Q${i + 1}: ${q.text} → ${v}`);
  });
  st3.tree = lines.join("\n");
  saveState();
  renderTree(st3.tree);
}

function renderTree(text) {
  document.getElementById("b3-tree").textContent = text || "—";
}

/** ====== LƯU & HELPERS ====== */
function onSave() {
  // dữ liệu đã đồng bộ liên tục vào appState; nhấn Lưu để xác nhận
  saveState();
  alert("✅ Đã lưu Bước 3.");
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, (m) => (
    { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[m]
  ));
}
function escapeAttr(s) {
  return escapeHTML(s).replace(/"/g, "&quot;");
}
