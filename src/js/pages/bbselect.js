'use strict';
document.addEventListener('DOMContentLoaded', function () {
  var country = new BVSelect({
    selector: '#country',
    width: '315px',
    searchbox: false,
    offset: true,
    placeholder: 'Select...',
    search_autofocus: true,
    breakpoint: 450,
  });
  var country = new BVSelect({
    selector: '#city',
    width: '315px',
    searchbox: false,
    offset: true,
    placeholder: 'Select...',
    search_placeholder: 'Search...',
    search_autofocus: true,
    breakpoint: 450,
  });
});
