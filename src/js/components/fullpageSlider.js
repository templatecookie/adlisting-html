'use strict';

$('.product-sliderview-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-sliderview-nav',
  autoplay: false,
});
$('.product-sliderview-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.product-sliderview-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  arrows: true,
  autoplay: false,
  prevArrow: '.gallery-slider-left',
  nextArrow: '.gallery-slider-right',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
