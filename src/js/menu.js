(() => {
  const menu = document.querySelector('[data-menu]');
  const bgOverlay = document.querySelector('[data-bg]');
  document
    .querySelectorAll(
      '[data-menu-open], [data-menu-close], [data-bg-open], [data-bg-close]'
    )
    .forEach(btn => {
      btn.addEventListener('click', toggleMenu);
    });
  bgOverlay?.addEventListener('click', toggleMenu);
  function toggleMenu() {
    menu.classList.toggle('is-open');
    bgOverlay?.classList.toggle('is-open');
  }
})();
