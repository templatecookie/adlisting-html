'use strict';

const navToggle = document.querySelector('.navbar-toggler');

navToggle.addEventListener('click', function (e) {
  e.preventDefault();
  navToggle.classList.toggle('active');
});
