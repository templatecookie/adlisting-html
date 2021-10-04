'use strict';

// ===== UI Variables ===== \\
const featureSlider = document.querySelector('.banner__feature-slider');
const postSlider = document.querySelector('.dashboard__posted-ads-slider');
const sliderNav = document.querySelector('product-slider-nav');
const sliderFor = document.querySelector('.product-slider-for');
const relatedSlider = document.querySelector('.related-post__slider');
const viewFor = document.querySelector('.product-sliderview-for');
const viewNav = document.querySelector('.product-sliderview-nav');
const testimonialSlider = document.querySelector('.testimonial-slider');
const brandSlider = document.querySelector('.support-brand__slider');
const categorySelect = document.querySelector('#category');
const toggle = document.querySelector('.toggle-icon');
const mainNav = document.querySelector('.header');
const mobileNav = document.querySelector('.menu--sm');
const logo = document.querySelector('.logo-transparent');
const preloader = document.querySelector('.loader');
const galleryVeno = document.querySelector('.galleryView');
const youtubeVeno = document.querySelector('.yplayer');
const selectOne = document.querySelector('#item');
const selectTwo = document.querySelector('#page');
const cardNumber = document.querySelector('.card-number');
const blogSidebar = document.querySelector('.product-ad__sidebar');
const toggleBtn = document.querySelector('.product-ad__sidebar .toggle-bar');
const navSidebar = document.querySelector('.dashboard__navigation');
const allCategory = document.querySelector('#allCategory');
const recentSelect = document.querySelector('#recent');
const viewSelect = document.querySelector('#recent');
const countrySelect = document.querySelector('#country');
const citySelect = document.querySelector('#city');
const stateSelect = document.querySelector('#state');
const subCategorySelect = document.querySelector('#subcategory');
const brandSelect = document.querySelector('#brand');
const modelSelect = document.querySelector('#model');
const conditionSelect = document.querySelector('#conditions');
const authenSelect = document.querySelector('#authenticity');
const toggleSidebar = document.querySelector(
  '.dashboard__navigation-toggle-btn'
);
const inputNumber = document.querySelector('#telephone');
const ctx = document.querySelector('#adsview');
let body = document.querySelector('body');
const dashboardContainer = document.querySelector('.dashboard__message');
const users = document.querySelectorAll('.user--profile');
const messageBody = document.querySelector('.dashboard__message-user');
const backList = document.querySelector('.back-message--list');

// ===== Page Loader ===== \\
window.addEventListener('load', (event) => {
  preloader.style.display = 'none';
});

// ===== mobile Navigation ===== \\
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
function changeLogo(logopath) {
  logo.src = `src/images/${logopath}.png`;
}

// ===== Sidebar ===== \\

if (toggleBtn) {
  toggleBtn.addEventListener('click', function (e) {
    e.preventDefault();
    blogSidebar.classList.toggle('active');
    body.classList.toggle('overlay');
  });
}

if (toggleSidebar) {
  toggleSidebar.addEventListener('click', function (e) {
    e.preventDefault();
    navSidebar.classList.toggle('active');
    body.classList.toggle('overlay');
  });
}

// =====  Slider ===== \\
if (featureSlider) {
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
}

if (viewFor || viewNav) {
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
}

if (sliderFor || sliderNav) {
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
}

if (testimonialSlider) {
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
}

if (brandSlider) {
  $('.support-brand__slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1200,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
}
if (postSlider) {
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
}

// ===== Select2 ===== \\
if (categorySelect) {
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
}

// ===== BV Select ===== \\
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

if (allCategory) {
  var category = new BVSelect({
    selector: '#allCategory',
    searchbox: false,
    offset: true,
    placeholder: 'All category',
    search_autofocus: true,
    breakpoint: 450,
  });
}

if (recentSelect) {
  var recent = new BVSelect({
    selector: '#recent',
    searchbox: false,
    offset: true,
    placeholder: 'Recently added',
    search_placeholder: 'Search...',
    search_autofocus: true,
    breakpoint: 450,
  });
}

if (viewSelect) {
  var all = new BVSelect({
    selector: '#view',
    searchbox: false,
    offset: true,
    placeholder: 'All',
    search_placeholder: 'Search...',
    search_autofocus: true,
    breakpoint: 450,
  });
}

if (countrySelect) {
  var country = new BVSelect({
    selector: '#country',
    searchbox: false,
    offset: true,
    placeholder: 'select...',
    search_autofocus: true,
    breakpoint: 450,
  });
}

if (citySelect) {
  var city = new BVSelect({
    selector: '#city',
    searchbox: false,
    offset: true,
    placeholder: 'select...',
    search_autofocus: true,
    breakpoint: 450,
  });
}

if (stateSelect) {
  var state = new BVSelect({
    selector: '#state',
    searchbox: false,
    offset: true,
    placeholder: 'select...',
    search_autofocus: true,
    breakpoint: 450,
  });
}
if (subCategorySelect) {
  var subcategory = new BVSelect({
    selector: '#subcategory',
    searchbox: false,
    offset: true,
    placeholder: 'select...',
    search_placeholder: 'Search...',
    search_autofocus: true,
    breakpoint: 450,
  });
}
if (brandSelect) {
  var brand = new BVSelect({
    selector: '#brand',
    searchbox: false,
    offset: true,
    placeholder: 'All',
    search_placeholder: 'Search...',
    search_autofocus: true,
    breakpoint: 450,
  });
}
if (modelSelect) {
  var model = new BVSelect({
    selector: '#model',
    searchbox: false,
    offset: true,
    placeholder: 'All',
    search_placeholder: 'Search...',
    search_autofocus: true,
    breakpoint: 450,
  });
}
if (conditionSelect) {
  var condition = new BVSelect({
    selector: '#conditions',
    searchbox: false,
    offset: true,
    placeholder: 'All',
    search_placeholder: 'Search...',
    search_autofocus: true,
    breakpoint: 450,
  });
}
if (authenSelect) {
  var auth = new BVSelect({
    selector: '#authenticity',
    searchbox: false,
    offset: true,
    placeholder: 'All',
    search_placeholder: 'Search...',
    search_autofocus: true,
    breakpoint: 450,
  });
}

// ===== Veno box ===== \\
if (galleryVeno) {
  $('.galleryView').venobox({
    framewidth: '400px',
    frameheight: '300px',
  });
}

if (youtubeVeno) {
  $('.yplayer').venobox({
    spinner: 'wave',
    spinColor: '#00aaff',
  });
}

// ===== card number show/hide ===== \\
if (cardNumber) {
  cardNumber.addEventListener('click', function () {
    cardNumber.classList.toggle('show');
  });
}

// ===== Price Plan ===== \\
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
// change text
function changeText(string) {
  packageType.forEach((text) => (text.textContent = string));
}

// remove active class
function removeActive() {
  planBtns.forEach((btn) => btn.classList.remove('active'));
}

// ===== chart ===== \\
if (ctx) {
  ctx.getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sun', 'Mon', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      datasets: [
        {
          label: '',
          data: [277, 138, 109, 171, 215, 120, 245],
          backgroundColor: '#00aaff',
          borderWidth: 0,
          barThickness: 28,
          borderRadius: 100,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// ==== Internation telephone  Code ===== \\
if (inputNumber) {
  window.intlTelInput(inputNumber, {
    preferredCountries: ['us', 'bd'],
  });
}

// ===== Message Dashboard ===== \\
if (users) {
  users.forEach((user) => {
    user.addEventListener('click', function (e) {
      dashboardContainer.classList.toggle('active');
    });
  });
}
if (backList) {
  // back to message list
  backList.addEventListener('click', function () {
    dashboardContainer.classList.remove('active');
  });
}
