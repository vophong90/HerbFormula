// /js/steps/step0.js

export function renderStep0() {
  // Đọc partial và gắn vào main-content
  fetch('./partials/step0.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;

      // Nếu muốn điền giá trị cũ vào ngày giờ khám (tùy logic cũ của bạn)
      if (window.currentData && window.currentData.visitDatetime) {
        document.getElementById('visit-datetime').value = window.currentData.visitDatetime;
      }
    });
}

// === Dưới đây là các hàm xử lý Bước 0 giữ nguyên logic cũ, KHÔNG sửa tên ===

// Mở hồ sơ từ file JSON
window.loadPatientFromFile = function() {
  const fileInput = document.getElementById("json-file-input");
  if (!fileInput.files || !fileInput.files[0]) {
    alert("Vui lòng chọn file!");
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      window.currentData = data;
      localStorage.setItem("currentData", JSON.stringify(data));
      alert("Đã nạp hồ sơ thành công.");
      // Nếu bạn có populateStep1Fields thì gọi, hoặc chuyển bước
      if (typeof window.populateStep1Fields === "function") {
        window.populateStep1Fields();
      }
    } catch (err) {
      alert("Lỗi khi đọc file: " + err);
    }
  };
  reader.readAsText(fileInput.files[0]);
}

// Tạo hồ sơ mới
window.createNewPatient = function() {
  const name = document.getElementById("new-patient-name").value.trim();
  const visitDatetime = document.getElementById("visit-datetime").value;
  if (!name) {
    alert("Nhập tên bệnh nhân!");
    return;
  }
  window.currentData = {
    patientName: name,
    visitDatetime: visitDatetime,
    steps: {}
  };
  localStorage.setItem("currentData", JSON.stringify(window.currentData));
  alert("Đã tạo hồ sơ mới cho " + name);
}

// Chuyển sang bước 1 và điền thông tin (giữ logic gốc)
window.populateStep1Fields = function() {
  // Nếu bạn có hàm điền dữ liệu cho bước 1 thì giữ nguyên như file cũ,
  // hoặc chỉ cần chuyển bước thôi nếu chưa có
  // Ví dụ:
  // window.goToStep(1);
}
