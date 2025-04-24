(() => {
  const menu = document.querySelector('[data-menu]');
  const bgOverlay = document.querySelector('[data-bg]');

  // Attach event listeners to buttons with toggle data attributes
  document
    .querySelectorAll(
      '[data-menu-open], [data-menu-close], [data-bg-open], [data-bg-close]'
    )
    .forEach(btn => {
      btn.addEventListener('click', toggleMenu);
    });

  // Close the menu when clicking on the background overlay
  bgOverlay?.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menu.classList.toggle('is-open');
    bgOverlay?.classList.toggle('is-open');
  }
})();
