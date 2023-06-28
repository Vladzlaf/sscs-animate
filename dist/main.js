/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/style.scss":
/*!*******************************!*\
  !*** ./src/assets/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://css-interexy/./src/assets/style.scss?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/style.scss */ \"./src/assets/style.scss\");\n\r\n\r\nlet position = 0;\r\nlet direction = 2;\r\nfunction animateSquare() {\r\n  const frame = document.querySelector('.wrap__request-frame');\r\n  const brick = document.querySelector('.wrap__request-frame > .wrap__path-request');\r\n  position += direction;\r\n  brick.style.left = position + 'px';\r\n  if (position >= frame.getBoundingClientRect().width - brick.getBoundingClientRect().width || position <= 0) {\r\n    direction *= -1;\r\n  }\r\n  requestAnimationFrame(animateSquare);\r\n}\r\nanimateSquare();\r\n\r\nlet timePosition = 0;\r\nlet timeDirection = 2;\r\nlet containerWidth = document.querySelector('.wrap__timeout').getBoundingClientRect().width;\r\nfunction animateSquareWithSetTimeout() {\r\n  const btick = document.querySelector('.wrap__timeout > .wrap__path__timeout-brick');\r\n  const btickWidth = btick.getBoundingClientRect().width;\r\n  timePosition += timeDirection;\r\n  btick.style.left = timePosition + 'px';\r\n  if ( timePosition >= containerWidth - btickWidth || timePosition <= 0) {\r\n    timeDirection *= -1;\r\n  }\r\n  setTimeout(animateSquareWithSetTimeout, 20);\r\n}\r\nanimateSquareWithSetTimeout();\n\n//# sourceURL=webpack://css-interexy/./src/app/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;