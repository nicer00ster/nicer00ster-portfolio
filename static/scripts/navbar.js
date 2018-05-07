const menu = document.querySelector('.hamburger');
const wrapper = document.querySelector('.wrapper');
const drawer = document.querySelector('.navbar');

menu.addEventListener('click', function(event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});
wrapper.addEventListener('click', function() {
  drawer.classList.remove('open');
});
