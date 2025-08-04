// main.js

import { startRouter, registerRoute } from "./router.js";
import { appState, loadState } from "./state.js";
import { renderStep0 } from "./steps/step0.js";
import { renderStep1 } from "./steps/step1.js";
import { renderStep2 } from "./steps/step2.js";
import { renderStep3 } from "./steps/step3.js";
import { renderStep4 } from "./steps/step4.js";
import { renderStep5 } from "./steps/step5.js";

// 1. Thiết lập biến lang toàn cục (ngôn ngữ mặc định)
window.lang = window.lang_vi || {}; // Đảm bảo biến lang global cho mọi file dùng

const root = document.getElementById("app");
loadState();

// 2. Đăng ký các route cho từng bước (không đổi so với cũ)
registerRoute("#/step0", () => renderStep0(root, appState));
registerRoute("#/step1", () => renderStep1(root, appState));
registerRoute("#/step2", () => renderStep2(root, appState));
registerRoute("#/step3", () => renderStep3(root, appState));
registerRoute("#/step4", () => renderStep4(root, appState));
registerRoute("#/step5", () => renderStep5(root, appState));

// 3. Hàm xác định bước hiện tại và render lại sau khi đổi ngôn ngữ
function rerenderCurrentStep() {
  const currentHash = window.location.hash;
  if (currentHash.startsWith("#/step0")) renderStep0(root, appState);
  else if (currentHash.startsWith("#/step1")) renderStep1(root, appState);
  else if (currentHash.startsWith("#/step2")) renderStep2(root, appState);
  else if (currentHash.startsWith("#/step3")) renderStep3(root, appState);
  else if (currentHash.startsWith("#/step4")) renderStep4(root, appState);
  else if (currentHash.startsWith("#/step5")) renderStep5(root, appState);
  // ... thêm các bước mới nếu cần
}

// 4. Sự kiện chọn ngôn ngữ (select ở ngoài index.html)
const langSelect = document.getElementById('lang-select');
if (langSelect) {
  langSelect.addEventListener('change', function () {
    // Đổi biến lang toàn cục
    if (this.value === 'zh') window.lang = window.lang_zh;
    else window.lang = window.lang_vi;
    // Render lại bước hiện tại
    rerenderCurrentStep();
  });
}

// 5. Bắt đầu app tại bước 0 (hoặc lưu vào localStorage nếu muốn nhớ bước cuối)
startRouter("#/step0");
