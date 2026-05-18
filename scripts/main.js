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

/* ── Form Handling（Formspree Email + Google Sheets 後台）── */
(function initForms() {
  var GAS = 'https://script.google.com/macros/s/AKfycbzpTF810MngB7Iw3z2quyFec_K4l-5G14JvwSDl0d9NiZbWhSzlqJa-rthZFQyLOIL-/exec';

  function pageType() {
    var p = window.location.pathname;
    if (p.includes('custom-order')) return '客製訂單';
    if (p.includes('courses'))      return '課程報名';
    if (p.includes('corporate'))    return '企業包班';
    if (p.includes('contact'))      return '聯絡詢問';
    return '其他';
  }

  function sendToSheets(data) {
    fetch(GAS, { method:'POST', mode:'no-cors', body: JSON.stringify(data) }).catch(function(){});
  }

  document.querySelectorAll('form[action*="formspree"]').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      var orig = btn ? btn.innerHTML : '';
      if (btn) { btn.innerHTML = '送出中…'; btn.disabled = true; }

      var fd   = new FormData(form);
      var data = {};
      fd.forEach(function(v,k){ data[k]=v; });
      data.type = pageType();

      // ① 存入 Google Sheets
      sendToSheets(data);

      // ② 寄 Email via Formspree
      fetch(form.action, { method:'POST', body: fd, headers:{ Accept:'application/json' } })
        .then(function(r){
        if (r.ok) { showSuccess(true); }
        else { showError(); if(btn){ btn.innerHTML=orig; btn.disabled=false; } }
      })
        .catch(function(){ showSuccess(true); }); // GAS 已存，視為成功

      function showSuccess(ok) {
        var wrap = form.closest('.form-container, .contact-form-wrapper, section') || document.body;
        var suc  = wrap.querySelector('.form-success') || document.querySelector('.form-success');
        if (suc) { form.style.display='none'; suc.classList.add('show'); suc.style.display='block'; }
        else if (btn) { btn.innerHTML = ok ? '✓ 已送出！' : orig; btn.disabled = false; }
      }
      function showError() {
        var wrap = form.closest('.form-container, .contact-form-wrapper, section') || document.body;
        var errEl = wrap.querySelector('.form-error');
        if (!errEl) {
          errEl = document.createElement('div');
          errEl.className = 'form-error';
          errEl.style.cssText = 'color:#c0392b;background:#fff5f5;border:1px solid #f5c6cb;border-radius:8px;padding:12px 16px;margin-top:12px;font-size:0.88rem;';
          form.parentNode.insertBefore(errEl, form.nextSibling);
        }
        errEl.textContent = '⚠️ 送出失敗，請稍後再試，或直接寄信至 eaea128@gmail.com';
        errEl.style.display = 'block';
      }
    });
  });

  // Email 格式即時驗證
  document.querySelectorAll('input[type="email"]').forEach(function(input) {
    input.addEventListener('blur', function() {
      if (this.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
        this.style.borderColor = '#e74c3c';
        var msg = this.parentNode.querySelector('.email-err');
        if (!msg) {
          msg = document.createElement('span');
          msg.className = 'email-err';
          msg.style.cssText = 'color:#e74c3c;font-size:0.78rem;display:block;margin-top:4px;';
          msg.textContent = '請輸入正確的 Email 格式';
          this.parentNode.appendChild(msg);
        }
      } else {
        this.style.borderColor = '';
        var msg = this.parentNode.querySelector('.email-err');
        if (msg) msg.remove();
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

/* ── Toast Notification System ── */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.vivi-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'vivi-toast';
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span><span>${message}</span>`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}

/* ── FAQ Category Filter ── */
(function initFaqFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const target = this.dataset.filter;
      document.querySelectorAll('.faq-section').forEach(section => {
        if (target === 'all') {
          section.style.display = '';
        } else {
          section.style.display = section.dataset.section === target ? '' : 'none';
        }
      });
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
