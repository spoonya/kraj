import { CLASSES, DOM } from './constants.js';
import { isMediaBreakpoint } from './helpers/index.js';

const burgerBtn = document.querySelector('#burger-button');

function toggleBurger() {
  burgerBtn.addEventListener('click', function () {
    DOM.body.classList.toggle(CLASSES.scrollHidden);
    DOM.header.classList.toggle(CLASSES.open);
    this.classList.toggle(CLASSES.active);
  });
}

function closeBurger() {
  if (DOM.header.classList.contains(CLASSES.open)) {
    DOM.body.classList.remove(CLASSES.scrollHidden);
    DOM.header.classList.remove(CLASSES.open);
    burgerBtn.classList.remove(CLASSES.active);
  }

  DOM.header.classList.remove(CLASSES.fixed);
}

function closeBurgerOnMedia() {
  if (!isMediaBreakpoint()) closeBurger();
}

function lockHeaderOnScroll() {
  if (isMediaBreakpoint()) {
    DOM.header.classList.toggle(CLASSES.fixed, window.scrollY > 50);
  }
}

export function controlHeaderBurger() {
  toggleBurger();
  lockHeaderOnScroll();

  window.addEventListener('scroll', lockHeaderOnScroll);
  window.addEventListener('resize', closeBurgerOnMedia);
}
