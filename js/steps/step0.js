import { appState, saveState, setCurrentPatientKey } from "../state.js";

async function loadPartial(path) {
  const res = await fetch(path);
  return await res.text();
}

export async function renderStep0(root) {
  root.innerHTML = await loadPartial("/partials/step0.html");

  document.getElementById("btn-open-json").onclick = openFromJSON;
  document.getElementById("btn-create").onclick = createNewPatient;
  document.getElementById("btn-next1").onclick = () => location.hash = "#/step1";
}

function openFromJSON() {
  const input = document.getElementById("json-file-input");
  if (!input.files?.length) return alert("Vui lòng chọn file JSON!");

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.name) return alert("File không hợp lệ (thiếu tên).");
      setCurrentPatientKey("patient_" + data.name);
      Object.assign(appState, data);
      saveState();
      alert("✅ Đã tải hồ sơ: " + data.name);
      location.hash = "#/step1";
    } catch (err) {
      alert("❌ Lỗi JSON: " + err.message);
    }
  };
  reader.readAsText(input.files[0]);
}

function createNewPatient() {
  const name = document.getElementById("new-patient-name").value.trim();
  if (!name) return alert("Nhập tên!");

  setCurrentPatientKey("patient_" + name);
  Object.assign(appState, { name, created: new Date().toISOString(), steps: {} });
  saveState();
  alert("✅ Đã tạo hồ sơ mới: " + name);
}
