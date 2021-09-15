'use strict';

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
