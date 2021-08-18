'use strict';

$(document).ready(function () {
  $('.galleryView').venobox();
});

const blogSidebar = document.querySelector('.blog__sidebar');
const toggle = document.querySelector('.blog__sidebar .toggle-icon');
let body = document.querySelector('body');

toggle.addEventListener('click', function (e) {
  e.preventDefault();
  blogSidebar.classList.toggle('active');
  body.classList.toggle('overlay');
});
