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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/*! exports provided: controlHeaderBurger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"controlHeaderBurger\", function() { return controlHeaderBurger; });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/assets/js/constants.js\");\n/* harmony import */ var _helpers_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/index.js */ \"./src/assets/js/helpers/index.js\");\n\n\nconst burgerBtn = document.querySelector('#burger-button');\n\nfunction toggleBurger() {\n  burgerBtn.addEventListener('click', function () {\n    _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].body.classList.toggle(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].scrollHidden);\n    _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].header.classList.toggle(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].open);\n    this.classList.toggle(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].active);\n  });\n}\n\nfunction closeBurger() {\n  if (_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].header.classList.contains(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].open)) {\n    _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].body.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].scrollHidden);\n    _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].header.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].open);\n    burgerBtn.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].active);\n  }\n\n  _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].header.classList.remove(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].fixed);\n}\n\nfunction closeBurgerOnMedia() {\n  if (!Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__[\"isMediaBreakpoint\"])()) closeBurger();\n}\n\nfunction lockHeaderOnScroll() {\n  if (Object(_helpers_index_js__WEBPACK_IMPORTED_MODULE_1__[\"isMediaBreakpoint\"])()) {\n    _constants_js__WEBPACK_IMPORTED_MODULE_0__[\"DOM\"].header.classList.toggle(_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"CLASSES\"].fixed, window.scrollY > 50);\n  }\n}\n\nfunction controlHeaderBurger() {\n  toggleBurger();\n  lockHeaderOnScroll();\n  window.addEventListener('scroll', lockHeaderOnScroll);\n  window.addEventListener('resize', closeBurgerOnMedia);\n}\n\n//# sourceURL=webpack:///./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/constants.js":
/*!************************************!*\
  !*** ./src/assets/js/constants.js ***!
  \************************************/
/*! exports provided: CLASSES, DOM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLASSES\", function() { return CLASSES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOM\", function() { return DOM; });\nconst CLASSES = {\n  active: 'active',\n  loading: 'loading',\n  scrollHidden: 'scroll-hidden',\n  fixed: 'fixed',\n  open: 'open'\n};\nconst DOM = {\n  body: document.querySelector('body'),\n  header: document.querySelector('#header')\n};\n\n//# sourceURL=webpack:///./src/assets/js/constants.js?");

/***/ }),

/***/ "./src/assets/js/helpers/index.js":
/*!****************************************!*\
  !*** ./src/assets/js/helpers/index.js ***!
  \****************************************/
/*! exports provided: isMediaBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_media_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-media.js */ \"./src/assets/js/helpers/is-media.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isMediaBreakpoint\", function() { return _is_media_js__WEBPACK_IMPORTED_MODULE_0__[\"isMediaBreakpoint\"]; });\n\n\n\n//# sourceURL=webpack:///./src/assets/js/helpers/index.js?");

/***/ }),

/***/ "./src/assets/js/helpers/is-media.js":
/*!*******************************************!*\
  !*** ./src/assets/js/helpers/is-media.js ***!
  \*******************************************/
/*! exports provided: isMediaBreakpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMediaBreakpoint\", function() { return isMediaBreakpoint; });\nfunction isMediaBreakpoint(breakpoint = 1023.98) {\n  const mediaBreakpoint = breakpoint;\n\n  if (document.documentElement.clientWidth > mediaBreakpoint) {\n    return false;\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack:///./src/assets/js/helpers/is-media.js?");

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.js */ \"./src/assets/js/burger.js\");\n\nAOS.init({\n  once: true,\n  disable: 'mobile'\n});\nObject(_burger_js__WEBPACK_IMPORTED_MODULE_0__[\"controlHeaderBurger\"])();\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ })

/******/ });