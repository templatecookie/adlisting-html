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
