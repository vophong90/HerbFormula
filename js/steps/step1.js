// /js/steps/step1.js

export function renderStep1() {
  fetch('./partials/step1.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;

      // Đổ dữ liệu cũ nếu có
      if (window.currentData) {
        document.getElementById('patient-name').value = window.currentData.patientName || '';
        document.getElementById('birth-year').value = window.currentData.birthYear || '';
        document.getElementById('gender').value = window.currentData.gender || '';
        if (window.currentData.steps && window.currentData.steps.step1) {
          document.getElementById('symptoms').value = window.currentData.steps.step1.symptoms || '';
        }
      }
    });
}

// Lưu dữ liệu Bước 1
window.saveStep1 = function() {
  if (!window.currentData) window.currentData = {};
  window.currentData.patientName = document.getElementById('patient-name').value.trim();
  window.currentData.birthYear = document.getElementById('birth-year').value.trim();
  window.currentData.gender = document.getElementById('gender').value;
  // Lưu triệu chứng vào steps.step1
  const symptoms = document.getElementById('symptoms').value.trim();
  window.currentData.steps = window.currentData.steps || {};
  window.currentData.steps.step1 = { symptoms };
  // Lưu vào localStorage
  localStorage.setItem('currentData', JSON.stringify(window.currentData));
  alert("✅ Đã lưu thông tin lâm sàng!");
}
