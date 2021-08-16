'use strict';

const navSidebar = document.querySelector('.dashboard__navigation');
const toggleBtn = document.querySelector('.dashboard__navigation-toggle-btn');

toggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  navSidebar.classList.toggle('active');
});
