// =============================================
// ALNJATH PHOTOGRAPHY — MAIN JAVASCRIPT
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── NAVBAR SCROLL EFFECT ──────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── HAMBURGER / MOBILE MENU ───────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  window.closeMobile = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  // ── SCROLL REVEAL ─────────────────────────
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Add reveal class to sections/cards
  document.querySelectorAll(
    '.about-inner, .service-card, .booking-inner, .testimonial-card, .section-header, .portfolio-filters'
  ).forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });

  // ── PORTFOLIO FILTER ──────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ── LIGHTBOX ──────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img && img.src && !img.src.endsWith('undefined') && img.style.display !== 'none') {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── TESTIMONIALS SLIDER ───────────────────
  const track = document.getElementById('testimonialsTrack');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');
  let currentIndex = 0;

  function getVisibleCount() {
    return window.innerWidth > 768 ? 2 : 1;
  }

  function updateSlider() {
    const cards = track.querySelectorAll('.testimonial-card');
    const visible = getVisibleCount();
    const maxIndex = Math.max(0, cards.length - visible);
    currentIndex = Math.min(currentIndex, maxIndex);
    const offset = currentIndex * (100 / visible);
    track.style.transform = `translateX(-${offset}%)`;
  }

  nextBtn.addEventListener('click', () => {
    const cards = track.querySelectorAll('.testimonial-card');
    const visible = getVisibleCount();
    const maxIndex = cards.length - visible;
    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    const cards = track.querySelectorAll('.testimonial-card');
    const visible = getVisibleCount();
    const maxIndex = cards.length - visible;
    currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);

  // Auto-advance testimonials
  setInterval(() => {
    const cards = track.querySelectorAll('.testimonial-card');
    const visible = getVisibleCount();
    const maxIndex = cards.length - visible;
    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    updateSlider();
  }, 5000);

  // ── BOOKING FORM ──────────────────────────
  const bookingForm = document.getElementById('bookingForm');
  const formSuccess = document.getElementById('formSuccess');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name     = document.getElementById('clientName').value.trim();
    const email    = document.getElementById('clientEmail').value.trim();
    const date     = document.getElementById('sessionDate').value;
    const service  = document.getElementById('serviceType').value;

    if (!name || !email || !date || !service) {
      alert('Please fill in all required fields.');
      return;
    }

    // Simulate submission
    const btn = bookingForm.querySelector('.btn-submit');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      bookingForm.style.display = 'none';
      formSuccess.classList.add('visible');
    }, 1200);
  });

  // ── SMOOTH SCROLL FOR NAV LINKS ───────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── ACTIVE NAV HIGHLIGHT ──────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
      link.style.opacity = link.getAttribute('href') === `#${current}` ? '1' : '';
    });
  });

});
