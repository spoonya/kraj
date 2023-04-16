import { controlHeaderBurger } from './burger.js';
import { controlModal } from './modal.js';

AOS.init({
  once: true,
  disable: 'mobile'
});

controlHeaderBurger();
controlModal();
