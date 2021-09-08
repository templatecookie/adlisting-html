// Header Navigation Toggle event
const toggle = document.querySelector('.toggle-icon');
const mainNav = document.querySelector('.header');
const mobileNav = document.querySelector('.menu--sm');
const logo = document.querySelector('.logo-transparent');

toggle.addEventListener('click', function (e) {
  e.preventDefault();
  toggle.classList.toggle('active');
  mainNav.classList.toggle('active');
  mobileNav.classList.toggle('active');

  // change Logo when background added on navbar

  // logo.classList.contains('logo-transparent') ? ;

  let logochange =
    logo.src == `http://localhost:3000/src/images/logo.png`
      ? changeLogo('logo-dark')
      : changeLogo('logo');
});

// change logo
function changeLogo(logopath) {
  logo.src = `http://localhost:3000/src/images/${logopath}.png`;
}

// // remove current logo
console.log('hello');
