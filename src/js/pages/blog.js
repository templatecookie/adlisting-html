'use strict';

$(document).ready(function () {
  $('.galleryView').venobox();
  $('.yplayer').venobox({
    spinner: 'wave',
    spinColor: '#00aaff',
  });
});

const blogSidebar = document.querySelector('.blog__sidebar');
const toggleBtn = document.querySelector('.blog__sidebar .toggle-icon');
let body = document.querySelector('body');

toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  blogSidebar.classList.toggle('active');
  body.classList.toggle('overlay');
});

// Header Navigation Toggle event
const toggle = document.querySelector('.toggle-icon');
const mainNav = document.querySelector('.header');
const mobileNav = document.querySelector('.menu--sm');
const logo = document.querySelector('[alt="brand-logo"]');

let logoChange = false;

toggle.addEventListener('click', function (e) {
  e.preventDefault();
  toggle.classList.toggle('active');
  mainNav.classList.toggle('active');
  mobileNav.classList.toggle('active');

  // change logo if it's background are transparent
  // logoChange === true
  //   ? (logo.src = 'src/images/logo.png')
  //   : (logo.src = 'src/images/logo-dark.png');
  // logoChange = !logoChange;
});
