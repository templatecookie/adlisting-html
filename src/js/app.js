'use strict';

//  Page Loader
const preloader = document.querySelector('.loader');

window.addEventListener('load', (event) => {
  preloader.style.display = 'none';
});

// Cards Edit menu
const editBtn = document.querySelectorAll('.edit-icon');

editBtn.forEach((dropMenu) => {
  dropMenu.addEventListener('click', function () {
    dropMenu.classList.toggle('active');
  });
});

// Back to Top Btn
window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY > 500);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
// Sticky header
window.addEventListener('scroll', function () {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
