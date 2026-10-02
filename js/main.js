/* ==========================================================
   PORTFÓLIO — SCRIPT
   Menu mobile, cabeçalho ao rolar e ano do rodapé.
   ========================================================== */
(() => {
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (btn && nav) {
    const close = () => {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    };
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  }

  // Ano automático no rodapé
  const y = document.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();
})();
