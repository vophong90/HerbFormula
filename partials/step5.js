// steps/step5.js
export function renderStep5(root, state) {
  root.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">${window.lang.step5.title}</h2>

    <!-- LỊCH SỬ TOA CŨ -->
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2">${window.lang.step5.history_title}</h3>
      <div id="previous-formulas" class="space-y-4"></div>
    </div>
    <hr class="my-6">

    <!-- HIỆU CHỈNH TOA HIỆN TẠI -->
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-2">${window.lang.step5.edit_title}</h3>
      <div class="mb-4">
        <label class="font-semibold block mb-1">${window.lang.step5.doctor_draft_label}</label>
        <textarea id="step5-doctor-draft" class="w-full border rounded px-3 py-2 bg-gray-100" rows="3" readonly></textarea>
      </div>

      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-2">${window.lang.step5.final_formula_title}</h3>
        <div id="final-herb-list" class="space-y-2 mb-2" data-herbs="[]"></div>
        <!-- Nhập thêm vị thuốc -->
        <div class="flex gap-2 mb-4">
          <input type="text" id="final-new-herb" placeholder="${window.lang.step5.add_herb_placeholder}" class="flex-1 border rounded px-3 py-2">
          <input type="text" id="final-new-dose" placeholder="${window.lang.step5.add_dose_placeholder}" class="w-24 border rounded px-3 py-2">
          <button id="btn-add-final-herb" class="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            ${window.lang.step5.add_btn}
          </button>
        </div>
      </div>
      <div class="mb-4">
        <label class="font-semibold block mb-1">${window.lang.step5.usage_label}</label>
        <textarea id="step5-usage" class="w-full border rounded px-3 py-2" rows="2" placeholder="${window.lang.step5.usage_placeholder}"></textarea>
      </div>
      <div class="mb-4">
        <button id="btn-autofill-step5-note" class="text-blue-700 hover:underline mt-2">
          ${window.lang.step5.note_btn}
        </button>
        <textarea id="step5-note" class="w-full border rounded px-3 py-2" rows="2" placeholder="${window.lang.step5.note_placeholder}"></textarea>
      </div>
    </div>

    <!-- PHÂN TÍCH TOA THUỐC -->
    <div id="formula-analysis-charts" class="mt-6 space-y-6">
      <!-- 1. Tứ khí -->
      <div class="my-4">
        <button id="btn-render-tukhi" class="text-left text-lg font-semibold text-blue-700 hover:text-blue-900 hover:underline">
          ${window.lang.step5.analysis.tukhi_btn}
        </button>
        <canvas id="chart-temperature" width="1000" height="80" class="mt-2 border rounded shadow"></canvas>
      </div>
      <!-- 2-3. Ngũ vị và Quy kinh -->
      <div class="my-4 grid grid-cols-2 gap-4">
        <div>
          <button id="btn-render-flavor" class="text-blue-700 hover:underline text-lg font-semibold mb-2">
            ${window.lang.step5.analysis.flavor_btn}
          </button>
          <canvas id="chart-flavor" class="border rounded shadow" style="width: 100%; height: 300px;"></canvas>
        </div>
        <div>
          <button id="btn-render-meridian" class="text-blue-700 hover:underline text-lg font-semibold mb-2">
            ${window.lang.step5.analysis.meridian_btn}
          </button>
          <canvas id="chart-meridian" class="border rounded shadow" style="width: 100%; height: 300px;"></canvas>
        </div>
      </div>
      <!-- 4–5. Thăng – Giáng – Phù – Trầm và Tác dụng YHCT -->
      <div class="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col">
          <div class="text-left mb-2">
            <button id="btn-render-direction" class="text-blue-700 hover:underline text-lg font-semibold">
              ${window.lang.step5.analysis.direction_btn}
            </button>
          </div>
          <div class="w-full border rounded shadow overflow-hidden" style="height: 360px;">
            <canvas id="chart-direction" class="w-full h-full"></canvas>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-left mb-2">
            <button id="btn-render-effect" class="text-blue-700 hover:underline text-lg font-semibold">
              ${window.lang.step5.analysis.effect_btn}
            </button>
          </div>
          <div class="w-full border rounded shadow overflow-hidden" style="height: 360px;">
            <canvas id="chart-effect" class="w-full h-full"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-8">
      <button id="btn-back-step4" class="bg-gray-500 text-white px-4 py-2 rounded">
        ${window.lang.step5.back}
      </button>
      <button id="btn-save-step5" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        ${window.lang.step5.save}
      </button>
    </div>
  `;
}
