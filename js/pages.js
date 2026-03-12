/* pages.js — shared JS for inner pages */

// Header shadow on scroll
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// Mobile nav toggle (same as main)
function toggleNav() {
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('hamburger');
  const isOpen = nav.classList.toggle('mobile-open');
  btn.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Mobile dropdown accordion
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.has-drop > .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        this.closest('.has-drop').classList.toggle('open');
      }
    });
  });
});

// Sidebar / contact form submit feedback
function submitSidebarForm(btn) {
  const orig = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Request Sent!';
  btn.style.background = '#333';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
}
