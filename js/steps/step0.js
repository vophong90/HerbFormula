export function renderStep0(root) {
  fetch('./partials/step0.html')
    .then(res => res.text())
    .then(html => {
      root.innerHTML = html;
      attachStep0Events();
    });
}

function attachStep0Events() {
  // Nút mở hồ sơ từ file JSON
  document.getElementById('btn-open-patient-file').onclick = loadPatientFromFile;

  // Nút tạo hồ sơ mới
  document.getElementById('btn-create-new-patient').onclick = createNewPatient;

  // Nút tiếp tục sang bước 1
  document.getElementById('btn-step0-continue').onclick = function () {
    if (typeof populateStep1Fields === "function") populateStep1Fields();
    window.location.hash = "#/step1";
  };
}

// ===== Logic gốc giữ nguyên =====
window.loadPatientFromFile = function() {
  const input = document.getElementById("json-file-input");
  if (!input.files || input.files.length === 0) return alert("Vui lòng chọn một file JSON!");

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.name) return alert("⚠️ File không hợp lệ: thiếu tên bệnh nhân");

      const key = "patient_" + data.name;
      localStorage.setItem(key, JSON.stringify(data));
      localStorage.setItem("currentPatient", key);
      localStorage.setItem("currentData", JSON.stringify(data));

      alert("✅ Đã tải hồ sơ từ file: " + data.name);
      if (typeof populateStep1Fields === "function") populateStep1Fields();
      window.location.hash = "#/step1";
    } catch (err) {
      alert("❌ Lỗi khi đọc file JSON: " + err.message);
    }
  };

  reader.readAsText(file);
}

window.createNewPatient = function() {
  const name = document.getElementById("new-patient-name").value.trim();
  if (!name) return alert("Vui lòng nhập tên!");

  const key = "patient_" + name;
  if (localStorage.getItem(key)) {
    if (!confirm("Hồ sơ đã tồn tại. Ghi đè?")) return;
  }

  const data = {
    name: name,
    created: new Date().toISOString(),
    steps: {}
  };

  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem("currentPatient", key);
  localStorage.setItem("currentData", JSON.stringify(data));
  alert("✅ Đã tạo hồ sơ mới: " + name);
}
