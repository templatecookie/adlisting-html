'use strict';

// $(document).ready(function () {
//   $('.galleryView').venobox();
//   $('.yplayer').venobox({
//     spinner: 'wave',
//     spinColor: '#00aaff',
//   });
// });

const blogSidebar = document.querySelector('.blog__sidebar');
const toggleBtn = document.querySelector('.blog__sidebar .toggle-icon');
let body = document.querySelector('body');

toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  blogSidebar.classList.toggle('active');
  body.classList.toggle('overlay');
});
