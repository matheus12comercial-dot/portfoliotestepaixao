/* ==========================================================
   PORTFÓLIO — SCRIPT
   Menu mobile, cabeçalho ao rolar, animação de entrada e ano do rodapé.
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

  // Elementos com class="reveal" aparecem suavemente ao entrar na tela
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-visible'));
  }

  // Ano automático no rodapé
  const y = document.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();
})();
