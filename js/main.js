/* ================================================================
   DR. SS DENTAL CARE — Main JS
   Handles: hero slider, mobile nav, gallery filter,
            video modal, form submit, scroll reveal, header scroll
================================================================ */

/* -- Hero slider state -- */
let currentSlide = 0;
const totalSlides = 2;
let slideTimer;

// Advance slide by direction (+1 / -1)
function heroSlide(dir) {
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  showSlide(currentSlide);
  resetTimer();
}

// Jump to a specific slide index
function heroGo(idx) {
  currentSlide = idx;
  showSlide(idx);
  resetTimer();
}

function showSlide(idx) {
  // toggle active on slide images
  document.querySelectorAll('.hero-slider .hero-slide').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
  // toggle active dots
  document.querySelectorAll('.h-dot').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
}

// Auto-advance every 5 seconds
function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => heroSlide(1), 5000);
}

// ================================================================
// Mobile nav toggle
// ================================================================
function toggleNav() {
  const nav  = document.getElementById('mainNav');
  const btn  = document.getElementById('hamburger');
  const isOpen = nav.classList.toggle('mobile-open');
  btn.classList.toggle('open', isOpen);

  // Prevent body scroll when menu is open
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Mobile: clicking a nav-link with dropdown toggles it
document.addEventListener('DOMContentLoaded', () => {

  // Start hero auto-play
  resetTimer();

  // On mobile, dropdown parents toggle on click of the link
  document.querySelectorAll('.has-drop > .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      // only intercept on mobile
      if (window.innerWidth <= 860) {
        e.preventDefault();
        this.closest('.has-drop').classList.toggle('open');
      }
    });
  });

  // Close nav when clicking overlay area (any regular nav link)
  document.querySelectorAll('.main-nav a:not(.has-drop > .nav-link)').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth <= 860) {
        const nav = document.getElementById('mainNav');
        const btn = document.getElementById('hamburger');
        nav.classList.remove('mobile-open');
        btn.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // Scroll reveal — watch each .reveal element
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire only once
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Header shadow on scroll
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Mark first nav link as active on load
  updateActiveNav();
});

// ================================================================
// Gallery filter
// ================================================================
function filterGallery(type, btn) {
  // Toggle active tab style
  document.querySelectorAll('.g-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide gallery items with a small fade
  document.querySelectorAll('.g-item').forEach(item => {
    if (type === 'all' || item.dataset.type === type) {
      item.style.display = '';
      // tiny delay so transitions look nice
      setTimeout(() => item.style.opacity = '1', 10);
    } else {
      item.style.opacity = '0';
      setTimeout(() => item.style.display = 'none', 250);
    }
  });
}

// ================================================================
// Video modal
// ================================================================
function openModal(src) {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('modalFrame');
  // add autoplay param
  frame.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  // close if clicking the backdrop (not the inner box)
  if (e.target === document.getElementById('videoModal')) {
    closeModalBtn();
  }
}

function closeModalBtn() {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('modalFrame');
  modal.classList.remove('active');
  frame.src = ''; // stop video
  document.body.style.overflow = '';
}

// Close modal on ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalBtn();
});

// ================================================================
// Appointment form submit
// ================================================================
function submitForm(btn) {
  // Basic validation — check required fields
  const fields = btn.closest('.appt-form-box').querySelectorAll('input[type=text], input[type=tel]');
  let ok = true;
  fields.forEach(f => {
    f.style.borderColor = '';
    if (!f.value.trim()) {
      f.style.borderColor = '#e74c3c';
      ok = false;
    }
  });

  if (!ok) return;

  // Visual feedback — swap button text
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
  btn.style.background = '#27ae60';
  btn.disabled = true;

  // Reset after 3s (normally you'd do a real AJAX call here)
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = '';
    btn.disabled = false;
    // Clear all form inputs
    btn.closest('.appt-form-box').querySelectorAll('input, textarea, select').forEach(f => {
      if (f.tagName === 'SELECT') f.selectedIndex = 0;
      else f.value = '';
    });
  }, 3000);
}

// ================================================================
// Active nav highlight based on scroll position
// ================================================================
function updateActiveNav() {
  const sections = ['home', 'about', 'services', 'gallery', 'contact'];
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    links.forEach(l => {
      const href = l.getAttribute('href') || '';
      l.classList.toggle('active', href === '#' + current);
    });
  }, { passive: true });
}

// ================================================================
// Staggered reveal helper — adds reveal class to common sections
// Call after DOM ready so we can batch-add classes
// ================================================================
(function addRevealClasses() {
  const targets = [
    '.svc-card',
    '.vid-card',
    '.rev-card',
    '.ba-card',
    '.smile-img',
    '.why-item',
    '.g-item',
  ];
  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      // stagger delay based on position in set
      el.style.transitionDelay = (i % 4) * 0.08 + 's';
    });
  });
})();
