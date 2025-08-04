// /js/main.js
import { startRouter, registerRoute } from "./router.js";
import { appState, loadState } from "./state.js";
import { renderStep0 } from "./steps/step0.js";
import { renderStep1 } from "./steps/step1.js";
import { renderStep2 } from "./steps/step2.js";
import { renderStep3 } from "./steps/step3.js";
import { renderStep4 } from "./steps/step4.js";
import { renderStep5 } from "./steps/step5.js";

const root = document.getElementById("app");
loadState();

registerRoute("#/step0", () => renderStep0(root, appState));
registerRoute("#/step1", () => renderStep1(root, appState));
registerRoute("#/step2", () => renderStep2(root, appState));
registerRoute("#/step3", () => renderStep3(root, appState));
registerRoute("#/step4", () => renderStep4(root, appState));
registerRoute("#/step5", () => renderStep5(root, appState));

startRouter("#/step0");
