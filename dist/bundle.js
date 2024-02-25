/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("// import \"./styles.css\";\r\n\r\nconst answers = [\r\n  \"да\",\r\n  \"нет\",\r\n  \"возможно\",\r\n  \"может быть\",\r\n  \"точно нет\",\r\n  \"точно да\",\r\n  \"конечно\",\r\n  \"сложно ответить\",\r\n  \"вселенная подскажет\",\r\n];\r\n\r\nconst btn = document.querySelector('.btn');\r\nbtn.addEventListener('click', function(){\r\n    const ball = document.querySelector('.ball');\r\n\r\n    const randomIndex = Math.floor(Math.random() * answers.length);\r\n    ball.innerHTML = '';\r\n    ball.insertAdjacentHTML('beforeend', `<p>${answers[randomIndex]}</p>`)\r\n\r\n})\r\n\n\n//# sourceURL=webpack://homework26/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;