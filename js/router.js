// /js/router.js
const routes = {}; // { "#/step1": async () => {...} }

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function startRouter(defaultPath = "#/step0") {
  async function resolve() {
    const path = location.hash || defaultPath;
    const handler = routes[path] || routes[defaultPath];
    await handler();
    // highlight tab
    document.querySelectorAll(".step-tab").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.path === path);
    });
  }
  window.addEventListener("hashchange", resolve);
  // click on tabs
  document.querySelectorAll(".step-tab").forEach(btn => {
    btn.addEventListener("click", () => location.hash = btn.dataset.path);
  });
  resolve();
}
