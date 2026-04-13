/* ============================================================
   Vivi Felt Studio — Main JavaScript
   ============================================================ */

/* ── Navbar Scroll ── */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile Menu ── */
(function initMobileMenu() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  let isOpen = false;

  function toggle() {
    isOpen = !isOpen;
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';

    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(4.5px, 4.5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(4.5px, -4.5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  }

  hamburger.addEventListener('click', toggle);

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggle();
    });
  });
})();

/* ── Scroll Reveal Animations ── */
(function initScrollReveal() {
  const targets = document.querySelectorAll('.fade-up, .fade-in');

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger effect based on sibling index
        const parent = entry.target.parentElement;
        let delay = 0;
        if (parent && parent.classList.contains('stagger')) {
          const siblings = Array.from(parent.children);
          const idx = siblings.indexOf(entry.target);
          delay = idx * 80;
        }
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));

  // Stagger groups
  document.querySelectorAll('.stagger').forEach(group => {
    const children = group.children;
    Array.from(children).forEach(child => {
      child.classList.add('fade-up');
      observer.observe(child);
    });
  });
})();

/* ── FAQ Accordion ── */
(function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const item = question.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all in same group
      const group = item.closest('.faq-group') || item.closest('.faq-list');
      if (group) {
        group.querySelectorAll('.faq-item.open').forEach(openItem => {
          if (openItem !== item) openItem.classList.remove('open');
        });
      }

      item.classList.toggle('open', !isOpen);
    });
  });
})();

/* ── Form Handling ── */
(function initForms() {
  document.querySelectorAll('form[data-netlify]').forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const submitBtn = form.querySelector('[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.innerHTML = '傳送中...';
        submitBtn.disabled = true;
      }

      // Simulate submission (replace with real Netlify fetch if needed)
      const formData = new FormData(form);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
        .then(() => showSuccess(form))
        .catch(() => showSuccess(form)); // Show success even on error for demo

      function showSuccess(f) {
        const successEl = document.querySelector('.form-success');
        if (successEl) {
          f.style.display = 'none';
          successEl.classList.add('show');
        } else {
          if (submitBtn) {
            submitBtn.innerHTML = '✓ 已送出';
            submitBtn.style.background = '#6B7D6B';
          }
        }
      }
    });
  });
})();

/* ── Smooth Scroll for anchor links ── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();

/* ── Product Cart Button Placeholder ── */
(function initCartButtons() {
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function() {
      const original = this.innerHTML;
      this.innerHTML = '✓ 已加入';
      this.style.background = 'var(--warm-brown)';
      setTimeout(() => {
        this.innerHTML = original;
        this.style.background = '';
      }, 2000);
    });
  });
})();

/* ── Admin Sidebar Toggle (mobile) ── */
(function initAdminSidebar() {
  const toggleBtn = document.querySelector('.admin-menu-toggle');
  const sidebar = document.querySelector('.admin-sidebar');
  if (!toggleBtn || !sidebar) return;

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
})();

/* ── Tabs ── */
(function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const tabBtns = tabContainer.querySelectorAll('.tab-btn');
    const tabPanels = tabContainer.querySelectorAll('.tab-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const target = tabContainer.querySelector(`#${btn.dataset.tab}`);
        if (target) target.classList.add('active');
      });
    });
  });
})();

/* ── Number Counter Animation ── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const duration = 1800;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased).toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ── Active Nav Link ── */
(function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__nav a, .footer a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) {
      link.style.color = 'var(--espresso)';
    }
  });
})();

/* ── Image Lazy Loading ── */
(function initLazyImages() {
  if ('loading' in HTMLImageElement.prototype) return; // native support

  const images = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => observer.observe(img));
})();
