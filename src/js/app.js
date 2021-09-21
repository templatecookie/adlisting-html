'use strict';

//  Page Loader
const preloader = document.querySelector('.loader');

window.addEventListener('load', (event) => {
  preloader.style.display = 'none';
});

// Cards Edit menu
// const editBtn = document.querySelectorAll('.edit-icon');
const editBtn = document.querySelectorAll('.edit');
editBtn.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
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
