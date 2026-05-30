// Sticky header visibility on scroll for article page
window.addEventListener('scroll', function() {
  var header = document.getElementById('sticky-header');
  if (window.scrollY > 120) {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
});
