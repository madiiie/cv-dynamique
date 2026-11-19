let savedTheme;
try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch {
  // The current page can still change themes.
}

function updateThemeButton() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;
  const dark = document.documentElement.dataset.theme === "dark";
  const french = document.documentElement.lang === "fr";
  const label = french
    ? (dark ? "Activer le mode clair" : "Activer le mode sombre")
    : (dark ? "Switch to light mode" : "Switch to dark mode");
  button.setAttribute("aria-label", label);
  button.title = label;
  button.firstElementChild.textContent = dark ? "☀" : "☾";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  updateThemeButton();
  document.querySelector(".giscus-frame")?.contentWindow?.postMessage({
    giscus: { setConfig: { theme } },
  }, "https://giscus.app");
}

applyTheme(savedTheme === "light" ? "light" : "dark");

document.addEventListener("DOMContentLoaded", () => {
  updateThemeButton();
  document.querySelector("[data-theme-toggle]").addEventListener("click", () => {
    savedTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(savedTheme);
    try {
      localStorage.setItem("portfolio-theme", savedTheme);
    } catch {
      // Storage can be disabled by the browser.
    }
  });
});
