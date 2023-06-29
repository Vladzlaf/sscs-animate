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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/style.scss */ \"./src/assets/style.scss\");\n/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sort */ \"./src/app/sort.js\");\n\r\n\r\n\r\nlet position = 0;\r\nlet direction = 2;\r\nfunction animateSquare() {\r\n  const frame = document.querySelector('.wrap__request-frame');\r\n  const brick = document.querySelector('.wrap__path-request');\r\n  position += direction;\r\n  brick.style.left = position + 'px';\r\n  if (position >= frame.getBoundingClientRect().width - brick.getBoundingClientRect().width || position <= 0) {\r\n    direction *= -1;\r\n  }\r\n  requestAnimationFrame(animateSquare);\r\n}\r\nanimateSquare();\r\n\r\nlet containerWidth = document.querySelector('.wrap__timeout').getBoundingClientRect().width;\r\nfunction animateSquareWithSetTimeout() {\r\n  const btick = document.querySelector('.wrap__path__timeout-brick');\r\n  const btickWidth = btick.getBoundingClientRect().width;\r\n  position += direction;\r\n  btick.style.left = position + 'px';\r\n  if ( position >= containerWidth - btickWidth || position <= 0) {\r\n    direction *= -1;\r\n  }\r\n  setTimeout(animateSquareWithSetTimeout, 20);\r\n}\r\nanimateSquareWithSetTimeout();\r\n\r\nconst button = document.querySelector('.warp__button').addEventListener(\"click\", () => (0,_sort__WEBPACK_IMPORTED_MODULE_1__.sort)(array));\r\nlet array = [...Array(100000)].map(()=>{return Math.floor(Math.random()*20)})\r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://css-interexy/./src/app/index.js?");

/***/ }),

/***/ "./src/app/sort.js":
/*!*************************!*\
  !*** ./src/app/sort.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sort: () => (/* binding */ sort)\n/* harmony export */ });\nasync function sort(arr) { \r\n    const bubble = await bubbleSort(arr)\r\n    const selection = await selectionSort(arr)\r\n \r\n    console.log(123)\r\n \r\n    return {bubble: bubble, selection: selection}\r\n }\r\n \r\n\r\nconst bubbleSort = arr => {\r\n  for (let i = 0, endI = arr.length - 1; i < endI; i++) {\r\n      let wasSwap = false;\r\n      for (let j = 0, endJ = endI - i; j < endJ; j++) {\r\n          if (arr[j] > arr[j + 1]) {\r\n              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\r\n              wasSwap = true;\r\n          }\r\n      }\r\n      if (!wasSwap) break;\r\n  }\r\n  return arr;\r\n};\r\n\r\nconst selectionSort = arr => {\r\n  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {\r\n      let indexMin = i;\r\n      for (let j = i + 1; j < l; j++) {\r\n          if (arr[indexMin] > arr[j]) {\r\n              indexMin = j;\r\n          }\r\n      }\r\n      if (indexMin !== i) {\r\n          [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];\r\n      }\r\n  }\r\n  return arr;\r\n};\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://css-interexy/./src/app/sort.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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