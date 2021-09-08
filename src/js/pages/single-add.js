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

$('.product-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-slider-nav',
  autoplay: false,
});
$('.product-slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.product-slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  arrows: true,
  autoplay: false,
  prevArrow: `<span class="slider-arrow slider-arrow--prev">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19.5L7.5 12L15 4.5" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</span>`,
  nextArrow: `<span class="slider-arrow slider-arrow--next">

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19.5L16.5 12L9 4.5" stroke="#191F33" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


</span>`,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.related-post__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 1500,
  adaptiveHeight: true,
  prevArrow: '.slider-btn--prev',
  nextArrow: '.slider-btn--next',
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
