import { appState, saveState } from "../state.js";

async function loadPartial(path) {
  const res = await fetch(path);
  return await res.text();
}

export async function renderStep1(root) {
  root.innerHTML = await loadPartial("/partials/step1.html");

  // đổ dữ liệu
  document.getElementById("patient-name").value = appState.name || "";
  document.getElementById("patient-birth").value = appState.birth || "";
  document.getElementById("patient-gender").value = appState.gender || "";
  document.getElementById("patient-symptoms").value = appState.steps?.step1?.symptoms || "";

  // điều hướng
  document.getElementById("btn-back0").onclick = () => location.hash = "#/step0";
  document.getElementById("btn-next2").onclick = () => {
    const birth = document.getElementById("patient-birth").value;
    const gender = document.getElementById("patient-gender").value;
    const symptoms = document.getElementById("patient-symptoms").value.trim();

    appState.birth = birth;
    appState.gender = gender;
    appState.steps = appState.steps || {};
    appState.steps.step1 = { birth, gender, symptoms };

    saveState();
    location.hash = "#/step2";
  };
}
