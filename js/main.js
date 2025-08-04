// js/main.js
import { startRouter, registerRoute } from "./router.js";
import { appState, loadState } from "./state.js";
import { renderStep0 } from "./steps/step0.js";
import { renderStep1 } from "./steps/step1.js";
import { renderStep2 } from "./steps/step2.js";
import { renderStep3 } from "./steps/step3.js";
import { renderStep4 } from "./steps/step4.js";
import { renderStep5 } from "./steps/step5.js";

// ------------------------------
// 1) Khởi tạo ngôn ngữ & helpers
// ------------------------------
if (!window.lang_vi || !window.lang_zh) {
  alert("Lỗi: Chưa load file ngôn ngữ (lang_vi.js hoặc lang_zh.js)!");
}

const root = document.getElementById("app");
const langSelect = document.getElementById("lang-select");

// Lấy lang mặc định từ localStorage hoặc 'vi'
const defaultLangCode = localStorage.getItem("currentLang") || (window.langCode || "vi");
window.lang = defaultLangCode === "zh" ? window.lang_zh : window.lang_vi;

// Hàm render lại bước hiện tại
function rerenderCurrentStep() {
  const currentHash = window.location.hash || "#/step0";
  if (currentHash.startsWith("#/step0")) renderStep0(root, appState);
  else if (currentHash.startsWith("#/step1")) renderStep1(root, appState);
  else if (currentHash.startsWith("#/step2")) renderStep2(root, appState);
  else if (currentHash.startsWith("#/step3")) renderStep3(root, appState);
  else if (currentHash.startsWith("#/step4")) renderStep4(root, appState);
  else if (currentHash.startsWith("#/step5")) renderStep5(root, appState);
}

// Expose để index.html có thể gọi nếu muốn
window.app = window.app || {};
window.app.rerender = rerenderCurrentStep;

// Hàm đổi ngôn ngữ cấp app: đổi UI lang + nạp lại dữ liệu tương ứng
async function setAppLang(langCode) {
  // 1) Đổi resource ngôn ngữ giao diện
  if (langCode === "zh") window.lang = window.lang_zh;
  else window.lang = window.lang_vi;

  // 2) Lưu lựa chọn
  localStorage.setItem("currentLang", langCode);

  // 3) Nạp lại DATA theo ngôn ngữ (được khai báo trong index.html)
  if (typeof window.loadDataForLang === "function") {
    try {
      await window.loadDataForLang(langCode);
    } catch (err) {
      console.error("Lỗi nạp dữ liệu khi đổi ngôn ngữ:", err);
      alert("Không nạp được dữ liệu cho ngôn ngữ mới. Vui lòng kiểm tra console.");
    }
  } else {
    // Nếu chưa có hàm (trường hợp hiếm), vẫn tiếp tục render UI để không chặn app
    console.warn("loadDataForLang() chưa sẵn sàng tại thời điểm đổi ngôn ngữ.");
  }

  // 4) Render lại bước hiện tại
  rerenderCurrentStep();
}

// Đồng bộ giá trị select ngôn ngữ với trạng thái hiện tại
if (langSelect) {
  langSelect.value = defaultLangCode;
  // Gắn handler đổi ngôn ngữ (nếu index.html chưa gắn)
  if (!langSelect._appBound) {
    langSelect.addEventListener("change", function () {
      setAppLang(this.value);
    });
    langSelect._appBound = true;
  }
}

// ---------------------------------
// 2) Chờ dữ liệu ban đầu rồi bootstrap
// ---------------------------------
async function bootstrap() {
  // Chờ dữ liệu ban đầu nếu có (được set trong index.html)
  if (window._initialDataPromise && typeof window._initialDataPromise.then === "function") {
    try {
      await window._initialDataPromise;
    } catch (err) {
      console.error("Lỗi nạp dữ liệu ban đầu:", err);
      alert("Không nạp được dữ liệu ban đầu. Vui lòng kiểm tra console.");
    }
  }

  // Sau khi dữ liệu đã sẵn sàng, load state ứng dụng
  loadState();

  // Đăng ký router cho từng bước
  registerRoute("#/step0", () => renderStep0(root, appState));
  registerRoute("#/step1", () => renderStep1(root, appState));
  registerRoute("#/step2", () => renderStep2(root, appState));
  registerRoute("#/step3", () => renderStep3(root, appState));
  registerRoute("#/step4", () => renderStep4(root, appState));
  registerRoute("#/step5", () => renderStep5(root, appState));

  // Khởi động router
  startRouter("#/step0");

  // Render lần đầu (nếu router đã đẩy đúng hash thì hàm dưới sẽ vẽ step tương ứng)
  rerenderCurrentStep();
}

// ---------------------------------
// 3) Lắng nghe khi dữ liệu ngôn ngữ được nạp lại
// ---------------------------------
window.addEventListener("i18n-data-loaded", (e) => {
  // Khi dữ liệu theo ngôn ngữ mới đã nạp xong => render lại
  rerenderCurrentStep();
});

// ---------------------------------
// 4) Khởi động ứng dụng
// ---------------------------------
bootstrap();
