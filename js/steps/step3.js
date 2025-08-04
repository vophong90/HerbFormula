// /js/steps/step3.js

export function renderStep3() {
  fetch('./partials/step3.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
      // Điền triệu chứng từ step1
      const s = window.currentData?.steps?.step1?.symptoms || '';
      document.getElementById('step3-symptoms').value = s.trim();

      // Điền lại state nếu có
      const st3 = window.currentData?.steps?.step3 || {};
      document.getElementById('selected-syndrome').value = st3.selectedSyndrome || '';
      renderSyndromeSuggestList(st3.suggestions || []);
      renderExtraQuestions(st3.extraQuestions || []);
      renderSimpleTree(st3.tree || '');
    });
}

// Gọi GPT (hoặc API) gợi ý hội chứng, giữ prompt gốc
window.suggestSyndromeGPT = async function() {
  const symptoms = window.currentData?.steps?.step1?.symptoms || '';
  if (!symptoms.trim()) {
    alert("Chưa có triệu chứng!");
    return;
  }
  // Gọi API thật nếu có, nếu không sẽ trả mẫu
  let items = [];
  try {
    // Gọi API của bạn ở đây nếu có, giữ đúng prompt
    const res = await fetch('https://gpt-api-19xu.onrender.com/classic-syndrome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symptoms: symptoms.split(/\r?\n/), max: 5, lang: "vi" })
    });
    if (res.ok) {
      const data = await res.json();
      items = (data?.items || []).map(x => ({
        name: x.name,
        notes: x.notes || ""
      }));
    }
  } catch (e) {
    // fallback
  }
  // Fallback mẫu (giữ logic gốc)
  if (!items.length) {
    items = [
      { name: "Can khí uất", notes: "Đau tức ngực sườn, dễ cáu, ợ hơi, rêu lưỡi mỏng." },
      { name: "Tỳ hư thấp trệ", notes: "Ăn kém, bụng đầy, mệt mỏi, rêu trắng nhờn." },
      { name: "Vị khí bất hòa", notes: "Ợ chua, buồn nôn, đầy thượng vị." }
    ];
  }
  // Lưu vào state
  window.currentData.steps = window.currentData.steps || {};
  window.currentData.steps.step3 = window.currentData.steps.step3 || {};
  window.currentData.steps.step3.suggestions = items;
  localStorage.setItem('currentData', JSON.stringify(window.currentData));
  renderSyndromeSuggestList(items);
}

// Xoá danh sách gợi ý hội chứng
window.clearSyndromeSuggests = function() {
  window.currentData.steps = window.currentData.steps || {};
  window.currentData.steps.step3 = window.currentData.steps.step3 || {};
  window.currentData.steps.step3.suggestions = [];
  localStorage.setItem('currentData', JSON.stringify(window.currentData));
  renderSyndromeSuggestList([]);
}

// Render danh sách gợi ý hội chứng
window.renderSyndromeSuggestList = function(items) {
  const box = document.getElementById('syndrome-suggest-list');
  if (!box) return;
  if (!items?.length) {
    box.innerHTML = `<div class="text-gray-500">Chưa có gợi ý. Nhấn “GPT gợi ý hội chứng”.</div>`;
    return;
  }
  box.innerHTML = "";
  items.forEach((it, idx) => {
    const row = document.createElement('div');
    row.className = "bg-white border rounded p-3 flex items-start justify-between gap-3";
    row.innerHTML = `
      <div>
        <div class="font-medium">#${idx + 1}. ${escapeHTML(it.name)}</div>
        ${it.notes ? `<div class="text-sm text-gray-600 mt-1">${escapeHTML(it.notes)}</div>` : ""}
      </div>
      <button class="bg-blue-600 text-white px-3 py-1 rounded" onclick="pickSyndrome('${escapeJS(it.name)}')">Chọn</button>
    `;
    box.appendChild(row);
  });
}

// Chọn hội chứng từ danh sách gợi ý
window.pickSyndrome = function(name) {
  document.getElementById('selected-syndrome').value = name;
  // Lưu luôn vào state
  window.currentData.steps = window.currentData.steps || {};
  window.currentData.steps.step3 = window.currentData.steps.step3 || {};
  window.currentData.steps.step3.selectedSyndrome = name;
  localStorage.setItem('currentData', JSON.stringify(window.currentData));
}

// Sinh câu hỏi bổ sung
window.generateExtraQuestions = function() {
  const name = document.getElementById('selected-syndrome').value.trim();
  if (!name) {
    alert("Chưa chọn hội chứng đang xét!");
    return;
  }
  // Sinh mẫu câu hỏi (giữ logic gốc)
  const base = [
    { id: "pain_site", text: "Vị trí/tạng phủ liên quan?", type: "text", value: "" },
    { id: "heat_cold", text: "Cảm giác hàn/nhiệt, sợ lạnh/nóng?", type: "text", value: "" },
    { id: "tongue", text: "Lưỡi (màu/rêu) phù hợp hội chứng?", type: "text", value: "" },
    { id: "pulse", text: "Mạch tượng gợi ý gì?", type: "text", value: "" },
    { id: "course", text: "Diễn tiến (phát/kéo dài/lui)?", type: "text", value: "" }
  ];
  // Thêm logic hội chứng đặc biệt nếu bạn muốn (giống logic gốc)
  if (/can\s*khí\s*uất/i.test(name)) {
    base.unshift({ id: "irritability", text: "Dễ cáu gắt, uất ức?", type: "yesno", value: null });
  }
  // Lưu vào state
  window.currentData.steps = window.currentData.steps || {};
  window.currentData.steps.step3 = window.currentData.steps.step3 || {};
  window.currentData.steps.step3.extraQuestions = base;
  localStorage.setItem('currentData', JSON.stringify(window.currentData));
  renderExtraQuestions(base);
  buildSimpleTree();
}

// Xoá câu hỏi bổ sung
window.clearExtraQuestions = function() {
  window.currentData.steps = window.currentData.steps || {};
  window.currentData.steps.step3 = window.currentData.steps.step3 || {};
  window.currentData.steps.step3.extraQuestions = [];
  localStorage.setItem('currentData', JSON.stringify(window.currentData));
  renderExtraQuestions([]);
  buildSimpleTree();
}

// Hiển thị câu hỏi bổ sung
window.renderExtraQuestions = function(items) {
  const box = document.getElementById('extra-questions');
  if (!box) return;
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
    setTimeout(() => {
      attachInputHandler(wrap, q, idx);
    }, 10);
    box.appendChild(wrap);
  });
}

// Input theo kiểu yesno/text/number (giữ logic gốc)
function renderInputHTML(q, idx) {
  if (q.type === "yesno") {
    const v = q.value === true ? "yes" : q.value === false ? "no" : "";
    return `
      <select data-idx="${idx}" class="border rounded px-2 py-1">
        <option value="">-- chọn --</option>
        <option value="yes" ${v === "yes" ? "selected" : ""}>Có</option>
        <option value="no"  ${v === "no" ? "selected" : ""}>Không</option>
      </select>
    `;
  }
  if (q.type === "number") {
    return `<input data-idx="${idx}" type="number" class="border rounded px-2 py-1" value="${q.value ?? ""}">`;
  }
  // text mặc định
  return `<input data-idx="${idx}" type="text" class="border rounded px-2 py-1 w-full" value="${escapeAttr(q.value ?? "")}">`;
}

// Gắn sự kiện lưu câu trả lời
function attachInputHandler(container, q, idx) {
  const el = container.querySelector("[data-idx]");
  if (!el) return;
  el.addEventListener("input", (e) => {
    const st3 = window.currentData?.steps?.step3;
    if (!st3 || !st3.extraQuestions) return;
    if (q.type === "yesno") {
      st3.extraQuestions[idx].value = e.target.value === "yes" ? true : e.target.value === "no" ? false : null;
    } else if (q.type === "number") {
      st3.extraQuestions[idx].value = e.target.value === "" ? null : Number(e.target.value);
    } else {
      st3.extraQuestions[idx].value = e.target.value;
    }
    localStorage.setItem("currentData", JSON.stringify(window.currentData));
    buildSimpleTree();
  });
}

// Xây cây chẩn đoán đơn giản
window.buildSimpleTree = function() {
  const st3 = window.currentData?.steps?.step3 || {};
  const lines = [];
  lines.push(`Hội chứng: ${st3.selectedSyndrome || "(chưa chọn)"}`);
  (st3.extraQuestions || []).forEach((q, i) => {
    const v = q.type === "yesno"
      ? (q.value === true ? "Có" : q.value === false ? "Không" : "(chưa trả lời)")
      : (q.value ?? "(chưa trả lời)");
    lines.push(`- Q${i + 1}: ${q.text} → ${v}`);
  });
  st3.tree = lines.join("\n");
  window.currentData.steps.step3 = st3;
  localStorage.setItem("currentData", JSON.stringify(window.currentData));
  renderSimpleTree(st3.tree);
}

// Hiển thị cây chẩn đoán đơn giản
window.renderSimpleTree = function(text) {
  document.getElementById("simple-tree").textContent = text || "—";
}

// Lưu Bước 3
window.saveStep3 = function() {
  // Dữ liệu đã đồng bộ vào currentData rồi, chỉ xác nhận
  localStorage.setItem("currentData", JSON.stringify(window.currentData));
  alert("✅ Đã lưu Bước 3.");
}

// ==== Helper ==== 
function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, (m) => (
    { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[m]
  ));
}
function escapeAttr(s) {
  return escapeHTML(s).replace(/"/g, "&quot;");
}
function escapeJS(s) {
  // Để bảo vệ tên khi nhét vào onclick=""
  return String(s).replace(/'/g, "\\'");
}
