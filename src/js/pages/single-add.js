'use strict';

const cardNumber = document.querySelector('.card-number');

cardNumber.addEventListener('click', function () {
  cardNumber.classList.toggle('show');
});

const blogSidebar = document.querySelector('.product-ad__sidebar');
const toggleBtn = document.querySelector('.product-ad__sidebar .toggle-bar');
let body = document.querySelector('body');

toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  blogSidebar.classList.toggle('active');
  body.classList.toggle('overlay');
});
