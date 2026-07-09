// ==========================================================================
// MEICONTADOR — main.js
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '5527997755884';
  const whatsappUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll('[data-whatsapp-message]').forEach(link => {
    const message = link.getAttribute('data-whatsapp-message');
    if (message) link.href = whatsappUrl(message);
  });

  /* ---- Sticky header on scroll -------------------------------------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ----------------------------------------------------*/
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  const setMenuOpen = (isOpen) => {
    if (!menuToggle || !navLinks) return;
    menuToggle.classList.toggle('open', isOpen);
    navLinks.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  };

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      setMenuOpen(!navLinks.classList.contains('open'));
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => setMenuOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        setMenuOpen(false);
        menuToggle.focus();
      }
    });
  }

  /* ---- Scroll reveal ----------------------------------------------------*/
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* ---- FAQ accordion ----------------------------------------------------*/
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-answer');
    if (!q || !answer) return;

    const setFaqOpen = (faqItem, faqAnswer, faqButton, isOpen) => {
      if (!faqItem || !faqAnswer || !faqButton) return;
      faqItem.classList.toggle('open', isOpen);
      faqButton.setAttribute('aria-expanded', String(isOpen));
      faqAnswer.style.maxHeight = isOpen ? `${faqAnswer.scrollHeight}px` : null;
    };

    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          setFaqOpen(
            openItem,
            openItem.querySelector('.faq-answer'),
            openItem.querySelector('.faq-q'),
            false
          );
        }
      });
      setFaqOpen(item, answer, q, !isOpen);
    });
  });

  /* ---- Contact form -> WhatsApp ------------------------------------- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('fname').value.trim();
      const phone = document.getElementById('fphone').value.trim();
      const email = document.getElementById('femail').value.trim();
      const servico = document.getElementById('fservico').value;
      const msg = document.getElementById('fmsg').value.trim();

      let text = `Olá! Meu nome é ${name}.`;
      text += `\nTenho interesse em: ${servico}.`;
      if (msg) text += `\nMensagem: ${msg}`;
      text += `\nMeu e-mail: ${email}`;
      text += `\nMeu WhatsApp: ${phone}`;

      window.open(whatsappUrl(text), '_blank', 'noopener');
    });
  }

  /* ---- Cookie banner (LGPD) ------------------------------------------ */
  const cookieBar = document.getElementById('cookieBar');
  const cookieAccept = document.getElementById('cookieAccept');
  if (cookieBar && cookieAccept) {
    try {
      if (!localStorage.getItem('meicontador_cookie_ok')) {
        setTimeout(() => cookieBar.classList.add('show'), 1200);
      }
    } catch (err) {
      setTimeout(() => cookieBar.classList.add('show'), 1200);
    }
    cookieAccept.addEventListener('click', () => {
      cookieBar.classList.remove('show');
      try { localStorage.setItem('meicontador_cookie_ok', '1'); } catch (err) {}
    });
  }

  /* ---- Footer year --------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
