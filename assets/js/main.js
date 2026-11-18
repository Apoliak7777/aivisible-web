/*!
 * AIVisible — UI behaviour
 * © Apoliak 2026 — Všetky práva vyhradené.
 * Neoprávnené kopírovanie, šírenie alebo úprava tohto kódu sú zakázané.
 */
(function () {
  'use strict';

  /* ---------- mobile drawer ---------- */
  var burger = document.querySelector('.nav__burger');
  var drawer = document.querySelector('.drawer');

  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('is-locked', open);
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        drawer.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('is-locked');
      }
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        drawer.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('is-locked');
      }
    });
  }

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < reveals.length; i++) reveals[i].classList.add('is-in');
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(function () { el.classList.add('is-in'); }, delay);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- score bars (technology page) ---------- */
  var bars = document.querySelectorAll('.score-card__bar i');
  if (bars.length && 'IntersectionObserver' in window) {
    var barIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var bar = entry.target;
        bar.style.width = (bar.getAttribute('data-val') || '0') + '%';
        barIo.unobserve(bar);
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { barIo.observe(b); });
  } else {
    bars.forEach(function (b) { b.style.width = (b.getAttribute('data-val') || '0') + '%'; });
  }

  /* ---------- counters ---------- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        cIo.unobserve(el);
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var decimals = (String(target).split('.')[1] || '').length;
        var start = null;
        var dur = 1100;
        function tick(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cIo.observe(c); });
  }

  /* ---------- hero / audit form ---------- */
  document.querySelectorAll('form[data-audit]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="text"], input[type="url"]');
      var value = input ? input.value.trim() : '';
      if (!value) { if (input) input.focus(); return; }
      var btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      var original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Spúšťam test…';
      setTimeout(function () {
        btn.innerHTML = 'Ukážka, test sa nespúšťa';
        setTimeout(function () {
          btn.disabled = false;
          btn.innerHTML = original;
          if (input) input.value = '';
        }, 2400);
      }, 900);
    });
  });

  /* ---------- contact form ---------- */
  var contactForm = document.querySelector('form[data-contact]');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = contactForm.parentNode.querySelector('.form-ok');
      var btn = contactForm.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Odosielam…'; }
      setTimeout(function () {
        if (ok) {
          ok.classList.add('is-visible');
          ok.textContent = 'Toto je ukážka webu z portfólia, správa sa nikam neodoslala.';
        }
        contactForm.reset();
        if (btn) { btn.disabled = false; btn.textContent = 'Odoslať správu'; }
      }, 800);
    });
  }

  /* ---------- FAQ: one open at a time ---------- */
  var faqItems = document.querySelectorAll('.faq__list .faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

})();
