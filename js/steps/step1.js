export function renderStep1(root) {
  fetch('./partials/step1.html')
    .then(res => res.text())
    .then(html => {
      root.innerHTML = html;
      populateStep1Fields();

      // Gán sự kiện cho nút "Quay lại"
      document.getElementById("btn-back-step0").onclick = () => {
        window.location.hash = "#/step0";
      };

      // Gán sự kiện cho nút "Tiếp tục"
      document.getElementById("btn-save-next").onclick = () => {
        saveStep1();
        window.location.hash = "#/step2";
      };
    });
}

// ----- LOGIC GIỮ NGUYÊN GỐC -----

function populateStep1Fields() {
  const data = JSON.parse(localStorage.getItem("currentData") || "{}");
  document.getElementById("patient-name").value = data.name || "";
  document.getElementById("patient-birth").value = data.birth || "";
  document.getElementById("patient-gender").value = data.gender || "";
  document.getElementById("patient-symptoms").value = data.steps?.step1?.symptoms || "";
}

function saveStep1() {
  const name = document.getElementById("patient-name").value;
  const birth = document.getElementById("patient-birth").value;
  const gender = document.getElementById("patient-gender").value;
  const symptoms = document.getElementById("patient-symptoms").value.trim();

  const key = localStorage.getItem("currentPatient");
  if (!key) return alert("Chưa chọn hồ sơ!");

  const data = JSON.parse(localStorage.getItem(key) || "{}");
  data.birth = birth;
  data.gender = gender;
  data.steps = data.steps || {};
  data.steps.step1 = { birth, gender, symptoms };

  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem("currentData", JSON.stringify(data));
}
