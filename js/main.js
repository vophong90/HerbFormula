import { startRouter, registerRoute } from "./router.js";
import { appState, loadState } from "./state.js";
import { renderStep0 } from "./steps/step0.js";
import { renderStep1 } from "./steps/step1.js";
import { renderStep2 } from "./steps/step2.js";
import { renderStep3 } from "./steps/step3.js";
import { renderStep4 } from "./steps/step4.js";
import { renderStep5 } from "./steps/step5.js";

// 1. Thiết lập biến lang toàn cục (load mặc định từ localStorage hoặc vi)
if (!window.lang_vi || !window.lang_zh) {
  alert("Lỗi: Chưa load file ngôn ngữ (lang_vi.js hoặc lang_zh.js)!");
}
const defaultLangCode = localStorage.getItem("currentLang") || "vi";
window.lang = defaultLangCode === "zh" ? window.lang_zh : window.lang_vi;

// 2. Gán lại biến lang khi đổi ngôn ngữ
function setAppLang(langCode) {
  if (langCode === "zh") window.lang = window.lang_zh;
  else window.lang = window.lang_vi;
  localStorage.setItem("currentLang", langCode);
  rerenderCurrentStep();
}

// 3. Render lại bước hiện tại khi đổi ngôn ngữ
function rerenderCurrentStep() {
  const currentHash = window.location.hash || "#/step0";
  if (currentHash.startsWith("#/step0")) renderStep0(root, appState);
  else if (currentHash.startsWith("#/step1")) renderStep1(root, appState);
  else if (currentHash.startsWith("#/step2")) renderStep2(root, appState);
  else if (currentHash.startsWith("#/step3")) renderStep3(root, appState);
  else if (currentHash.startsWith("#/step4")) renderStep4(root, appState);
  else if (currentHash.startsWith("#/step5")) renderStep5(root, appState);
}

// 4. Đăng ký sự kiện đổi ngôn ngữ cho select box ngoài index.html
const langSelect = document.getElementById('lang-select');
if (langSelect) {
  langSelect.value = defaultLangCode;
  langSelect.addEventListener('change', function () {
    setAppLang(this.value);
  });
}

const root = document.getElementById("app");
loadState();

// 5. Đăng ký router cho từng bước
registerRoute("#/step0", () => renderStep0(root, appState));
registerRoute("#/step1", () => renderStep1(root, appState));
registerRoute("#/step2", () => renderStep2(root, appState));
registerRoute("#/step3", () => renderStep3(root, appState));
registerRoute("#/step4", () => renderStep4(root, appState));
registerRoute("#/step5", () => renderStep5(root, appState));

// 6. Khởi động router (bước đầu)
startRouter("#/step0");
