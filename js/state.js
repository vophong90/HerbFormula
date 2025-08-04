// /js/state.js
export const appState = { steps: {} };

export function loadState() {
  const raw = localStorage.getItem("currentData");
  if (raw) {
    try { Object.assign(appState, JSON.parse(raw)); } catch {}
  }
}

export function saveState() {
  localStorage.setItem("currentData", JSON.stringify(appState));
}

// tiện lấy/đặt hồ sơ đang mở
export function setCurrentPatientKey(key) {
  localStorage.setItem("currentPatient", key);
}
export function getCurrentPatientKey() {
  return localStorage.getItem("currentPatient");
}
