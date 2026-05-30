// Sticky header shadow on scroll for product landing page
window.addEventListener('scroll', function() {
  var header = document.getElementById('main-header');
  if (window.scrollY > 60) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
