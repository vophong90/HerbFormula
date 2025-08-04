export function renderStep0(root) {
  root.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">${window.lang.step0.title}</h2>
    <label>${window.lang.step0.datetime}</label>
    <input type="datetime-local" id="visit-datetime" class="border p-1 rounded w-full mb-3">

    <div class="mb-6">
      <label class="block text-sm font-medium mb-1">${window.lang.step0.choose_file}</label>
      <input type="file" id="json-file-input" accept=".json" class="block w-full text-sm text-gray-600">
      <button id="btn-open-patient-file" class="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        ${window.lang.step0.open_file}
      </button>
    </div>
    <hr class="my-6">
    <div class="mb-6">
      <label class="block text-sm font-medium mb-1">${window.lang.step0.new_record}</label>
      <input id="new-patient-name" type="text" placeholder="${window.lang.step0.enter_name_placeholder}" class="w-full border rounded px-3 py-2">
      <button id="btn-create-new-patient" class="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        ${window.lang.step0.create_record}
      </button>
    </div>
    <div class="mt-6">
      <button id="btn-step0-continue" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        ${window.lang.step0.continue}
      </button>
    </div>
  `;
  attachStep0Events();
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
  if (!input.files || input.files.length === 0) return alert(window.lang.step0.alert_choose_file);

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.name) return alert(window.lang.step0.alert_invalid_file);

      const key = "patient_" + data.name;
      localStorage.setItem(key, JSON.stringify(data));
      localStorage.setItem("currentPatient", key);
      localStorage.setItem("currentData", JSON.stringify(data));

      alert(window.lang.step0.alert_loaded_file.replace("{name}", data.name));
      if (typeof populateStep1Fields === "function") populateStep1Fields();
      window.location.hash = "#/step1";
    } catch (err) {
      alert(window.lang.step0.alert_read_error + err.message);
    }
  };

  reader.readAsText(file);
}

window.createNewPatient = function() {
  const name = document.getElementById("new-patient-name").value.trim();
  if (!name) return alert(window.lang.step0.alert_enter_name);

  const key = "patient_" + name;
  if (localStorage.getItem(key)) {
    if (!confirm(window.lang.step0.alert_overwrite)) return;
  }

  const data = {
    name: name,
    created: new Date().toISOString(),
    steps: {}
  };

  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem("currentPatient", key);
  localStorage.setItem("currentData", JSON.stringify(data));
  alert(window.lang.step0.alert_created.replace("{name}", name));
}
