// @ts-nocheck
'use strict';

const navSidebar = document.querySelector('.dashboard__navigation');
const toggleBtn = document.querySelector('.dashboard__navigation-toggle-btn');
const Body = document.querySelector('body');
toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  navSidebar.classList.toggle('active');
  Body.classList.toggle('overlay');
});

$('.dashboard__posted-ads-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1200,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
