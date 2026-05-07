  // ─── SCROLL PROGRESS ───
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = pct + '%';

    // Back to top button
    const btn = document.getElementById('backToTop');
    if (scrollTop > 400) { btn.classList.add('visible'); }
    else { btn.classList.remove('visible'); }
  });

  // ─── INTERSECTION OBSERVER for animations ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.article-card, .chapter-header, .pullquote').forEach((el, i) => {
    el.style.transitionDelay = (i % 3) * 0.1 + 's';
    observer.observe(el);
  });

  // ─── TOGGLE EXPAND ───
  function toggleExpand(btn) {
    const expanded = btn.nextElementSibling;
    const isOpen = expanded.classList.contains('open');
    expanded.classList.toggle('open');
    btn.textContent = isOpen ? 'Read More' : 'Collapse';
  }

  // ─── ACTIVE NAV ───
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-inner a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 80) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });