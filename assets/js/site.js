// Shared minimal JS (safe to use across pages)
(function () {
  // Set current year in footer if element exists
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  // Simple mobile menu (if used)
  const btn = document.getElementById('mobile-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
})();
