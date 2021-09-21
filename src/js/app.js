'use strict';

//  Page Loader
const preloader = document.querySelector('.loader');

window.addEventListener('load', (event) => {
  preloader.style.display = 'none';
});

// Header Navigation Toggle event
const toggle = document.querySelector('.toggle-icon');
const mainNav = document.querySelector('.header');
const mobileNav = document.querySelector('.menu--sm');
const logo = document.querySelector('.logo-transparent');

if (toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    toggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    mobileNav.classList.toggle('active');

    // change Logo when background added on navbar
    // temproary disable
    // logo.src == `src/images/logo.png`
    //   ? changeLogo('logo-dark')
    //   : changeLogo('logo');
  });
}

// change logo
// function changeLogo(logopath) {
//   logo.src = `src/images/${logopath}.png`;
// }

// Price Plans package
const planBtns = document.querySelectorAll('.price-plan__link');
const packageType = document.querySelectorAll('.plan-card__price span');
planBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeActive();
    btn.classList.add('active');
    btn.textContent === 'Monthly'
      ? changeText('/month')
      : changeText('/annual');
  });
});

// remove active class
function removeActive() {
  planBtns.forEach((btn) => btn.classList.remove('active'));
}

// change text
function changeText(string) {
  packageType.forEach((text) => (text.textContent = string));
}

// Cards Edit menu
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
// Veno box
// $(document).ready(function () {
//   $('.galleryView').venobox();
//   $('.yplayer').venobox({
//     spinner: 'wave',
//     spinColor: '#00aaff',
//   });
// });

// BV Select

const selectOne = document.querySelector('#item');
const selectTwo = document.querySelector('#page');
const selectors = [selectOne, selectTwo];

if (selectOne) {
  var item = new BVSelect({
    selector: '#item',
    searchbox: false,
    offset: true,
    placeholder: 'Select',
    search_autofocus: true,
    breakpoint: 450,
  });
}

if (selectTwo) {
  var page = new BVSelect({
    selector: '#page',
    searchbox: false,
    offset: true,
    placeholder: 'Select',
    search_autofocus: true,
    breakpoint: 450,
  });
}

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
