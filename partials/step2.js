// steps/step2.js
export function renderStep2(root, state) {
  root.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4">${window.lang.step2.title}</h2>

    <!-- Các nút thao tác -->
    <div class="mb-4 space-x-2">
      <button id="btn-extract-symptoms" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        ${window.lang.step2.extract}
      </button>
      <button id="btn-rank-symptoms" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        ${window.lang.step2.ranking}
      </button>
    </div>

    <div id="symptom-vas-list" class="space-y-4"></div>

    <!-- Chart các lần khám trước -->
    <div id="followup-section" class="mt-8 hidden border-t pt-6">
      <h3 class="text-lg font-semibold mb-4">${window.lang.step2.followup_chart_title}</h3>
      <canvas id="followup-vas-chart" height="150"></canvas>
    </div>

    <!-- Điều hướng -->
    <div class="mt-6 flex justify-between">
      <button id="btn-back-step1" class="bg-gray-500 text-white px-4 py-2 rounded">
        ${window.lang.step2.back}
      </button>
      <button id="btn-save-next-step2" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        ${window.lang.step2.next}
      </button>
    </div>
  `;
}
