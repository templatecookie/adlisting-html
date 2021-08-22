'use strict';

// Header Navigation Toggle event
// const toggle = document.querySelector('.toggle-icon');
// const mainNav = document.querySelector('.header');
// const mobileNav = document.querySelector('.menu--sm');
// const logo = document.querySelector('[alt="brand-logo"]');

// let logoChange = false;

// toggle.addEventListener('click', function (e) {
//   e.preventDefault();
//   toggle.classList.toggle('active');
//   mainNav.classList.toggle('active');
//   mobileNav.classList.toggle('active');

//   // change logo if it's background are transparent
//   // logoChange === true
//   //   ? (logo.src = 'src/images/logo.png')
//   //   : (logo.src = 'src/images/logo-dark.png');
//   // logoChange = !logoChange;
// });

// Cards Edit menu
const editBtn = document.querySelectorAll('.edit-icon');

editBtn.forEach((dropMenu) => {
  dropMenu.addEventListener('click', function () {
    dropMenu.classList.toggle('active');
  });
});

// Slider
const sliderRange = document.querySelector('.sliderrange');
const output = document.querySelector('#value-range');

output.innerHTML = `${sliderRange.value} miles`;

sliderRange.oninput = function () {
  output.innerHTML = `${this.value} miles`;
};

sliderRange.addEventListener('mousemove', function () {
  var x = sliderRange.value;

  var color = `linear-gradient(
    90deg,
    rgb(0, 170, 255) ${x}%,
    rgb(218, 221, 229) ${x}%
  )`;

  sliderRange.style.background = color;
});
