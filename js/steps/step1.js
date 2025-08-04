export function renderStep1(root) {
  root.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">${window.lang.step1.title}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div>
        <label class="font-medium">${window.lang.step1.name}</label>
        <input id="patient-name" type="text" disabled class="w-full border rounded px-3 py-2 bg-gray-100">
      </div>
      <div>
        <label class="font-medium">${window.lang.step1.birth}</label>
        <input id="patient-birth" type="number" placeholder="VD: 1985" class="w-full border rounded px-3 py-2">
      </div>
      <div>
        <label class="font-medium">${window.lang.step1.gender}</label>
        <select id="patient-gender" class="w-full border rounded px-3 py-2">
          <option value="">${window.lang.step1.gender_options.choose}</option>
          <option value="Nam">${window.lang.step1.gender_options.male}</option>
          <option value="Nữ">${window.lang.step1.gender_options.female}</option>
          <option value="Khác">${window.lang.step1.gender_options.other}</option>
        </select>
      </div>
    </div>
    <div class="mb-6">
      <label class="font-medium">${window.lang.step1.symptoms}</label>
      <textarea id="patient-symptoms" rows="6" placeholder="${window.lang.step1.symptoms_placeholder}" class="w-full border rounded px-3 py-2"></textarea>
    </div>
    <div class="flex justify-between">
      <button id="btn-back-step0" class="bg-gray-500 text-white px-4 py-2 rounded">${window.lang.step1.back}</button>
      <button id="btn-save-next" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">${window.lang.step1.next}</button>
    </div>
  `;

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
  if (!key) return alert(window.lang.step1.alert_no_profile || "Chưa chọn hồ sơ!");

  const data = JSON.parse(localStorage.getItem(key) || "{}");
  data.birth = birth;
  data.gender = gender;
  data.steps = data.steps || {};
  data.steps.step1 = { birth, gender, symptoms };

  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem("currentData", JSON.stringify(data));
}
