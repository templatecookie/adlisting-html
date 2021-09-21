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

let backBtn = document.querySelector('.scrollTop');
backBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY > 500);
});

$('#category').select2({
  theme: 'bootstrap-5',
  width: $(this).data('width')
    ? $(this).data('width')
    : $(this).hasClass('w-100')
    ? '100%'
    : 'style',
  placeholder: 'Select Category',
  allowClear: Boolean($(this).data('allow-clear')),
  closeOnSelect: !$(this).attr('multiple'),
});

// var item = new BVSelect({
//   selector: '#item',
//   searchbox: false,
//   offset: true,
//   placeholder: 'Select',
//   search_autofocus: true,
//   breakpoint: 450,
// });
// var page = new BVSelect({
//   selector: '#page',
//   searchbox: false,
//   offset: true,
//   placeholder: 'Select',
//   search_autofocus: true,
//   breakpoint: 450,
// });

$('.banner__feature-slider').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
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
