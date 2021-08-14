'use strict';

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
});

$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
