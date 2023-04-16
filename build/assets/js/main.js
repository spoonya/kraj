/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/assets/js/constants.js
var CLASSES = {
  active: 'active',
  loading: 'loading',
  scrollHidden: 'scroll-hidden',
  fixed: 'fixed',
  open: 'open',
  modal: 'modal'
};
var DOM = {
  body: document.querySelector('body'),
  header: document.querySelector('#header')
};
// CONCATENATED MODULE: ./src/assets/js/helpers/is-media.js
function isMediaBreakpoint() {
  var breakpoint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1023.98;
  var mediaBreakpoint = breakpoint;

  if (document.documentElement.clientWidth > mediaBreakpoint) {
    return false;
  }

  return true;
}
// CONCATENATED MODULE: ./src/assets/js/helpers/index.js

// CONCATENATED MODULE: ./src/assets/js/burger.js


var burgerBtn = document.querySelector('#burger-button');

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

function controlHeaderBurger() {
  toggleBurger();
  lockHeaderOnScroll();
  window.addEventListener('scroll', lockHeaderOnScroll);
  window.addEventListener('resize', closeBurgerOnMedia);
}
// CONCATENATED MODULE: ./src/assets/js/modal.js


function openModal(modal) {
  if (!modal) return;
  DOM.body.classList.add(CLASSES.scrollHidden);
  modal.classList.add(CLASSES.active);
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove(CLASSES.active);
  DOM.body.classList.remove(CLASSES.scrollHidden);
  var video = modal.querySelector('[data-video]');

  if (video) {
    video.setAttribute('src', '');
  }
}

function setVideo(src, modal) {
  var video = modal.querySelector('[data-video]');
  if (!video) return;
  video.setAttribute('src', src);
}

function controlModal() {
  var openModalButtons = document.querySelectorAll('[data-modal-target]');
  var closeModalButtons = document.querySelectorAll('[data-modal-close]');
  var modals = document.querySelectorAll(".".concat(CLASSES.modal));
  openModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var modal = document.getElementById(button.dataset.modalTarget);
      var src = button.dataset.videoSrc;

      if (src) {
        setVideo(src, modal);
      }

      openModal(modal);
    });
  });
  modals.forEach(function (modal) {
    var content = modal.querySelector('[data-modal-content]');
    modal.addEventListener('click', function (e) {
      if (e.target !== content) {
        closeModal(modal);
      }
    });
  });
  closeModalButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var modal = button.closest(".".concat(CLASSES.modal));
      closeModal(modal);
    });
  });
}
// CONCATENATED MODULE: ./src/assets/js/main.js


AOS.init({
  once: true,
  disable: 'mobile'
});
controlHeaderBurger();
controlModal();

/***/ })
/******/ ]);