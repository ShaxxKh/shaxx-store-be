/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/getProductById/handler.ts":
/*!*************************************************!*\
  !*** ./src/functions/getProductById/handler.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _productList_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../productList.json */ \"./src/functions/productList.json\");\n\r\n\r\n\r\n\r\nconst getProductById = async (event) => {\r\n    const productId = event.pathParameters.id;\r\n    let message;\r\n    let product = _productList_json__WEBPACK_IMPORTED_MODULE_3__.find((el) => el.id === productId);\r\n    console.log(productId);\r\n    if (product === undefined) {\r\n        message = \"Product not found\";\r\n    }\r\n    else {\r\n        message = \"\";\r\n    }\r\n    console.log(product);\r\n    console.log(event);\r\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\r\n        statusCode: 200,\r\n        headers: {\r\n            \"Access-Control-Allow-Headers\": \"*\",\r\n            \"Access-Control-Allow-Origin\": \"*\",\r\n            \"Access-Control-Allow-Methods\": \"*\",\r\n        },\r\n        body: {\r\n            message,\r\n            data: product || {},\r\n        },\r\n    });\r\n};\r\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(getProductById);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dldFByb2R1Y3RCeUlkL2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LXNlcnZpY2UvLi9zcmMvZnVuY3Rpb25zL2dldFByb2R1Y3RCeUlkL2hhbmRsZXIudHM/YmU0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIjtcblxuaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSBcIkBsaWJzL2FwaUdhdGV3YXlcIjtcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gXCJAbGlicy9hcGlHYXRld2F5XCI7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSBcIkBsaWJzL2xhbWJkYVwiO1xuXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vLi4vcHJvZHVjdExpc3QuanNvblwiO1xuLy8gaW1wb3J0IHNjaGVtYSBmcm9tIFwiLi9zY2hlbWFcIjtcblxuY29uc3QgZ2V0UHJvZHVjdEJ5SWQ6IFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8T2JqZWN0PiA9IGFzeW5jIChcblx0ZXZlbnRcbikgPT4ge1xuXHRjb25zdCBwcm9kdWN0SWQgPSBldmVudC5wYXRoUGFyYW1ldGVycy5pZDtcblx0bGV0IG1lc3NhZ2U6IHN0cmluZztcblx0bGV0IHByb2R1Y3QgPSBwcm9kdWN0TGlzdC5maW5kKChlbCkgPT4gZWwuaWQgPT09IHByb2R1Y3RJZCk7XG5cblx0Y29uc29sZS5sb2cocHJvZHVjdElkKTtcblxuXHRpZiAocHJvZHVjdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0bWVzc2FnZSA9IFwiUHJvZHVjdCBub3QgZm91bmRcIjtcblx0fSBlbHNlIHtcblx0XHRtZXNzYWdlID0gXCJcIjtcblx0fVxuXG5cdGNvbnNvbGUubG9nKHByb2R1Y3QpO1xuXG5cdGNvbnNvbGUubG9nKGV2ZW50KTtcblx0cmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG5cdFx0c3RhdHVzQ29kZTogMjAwLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiOiBcIipcIixcblx0XHRcdFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxuXHRcdFx0XCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiKlwiLFxuXHRcdH0sXG5cdFx0Ym9keToge1xuXHRcdFx0bWVzc2FnZSxcblx0XHRcdGRhdGE6IHByb2R1Y3QgfHwge30sXG5cdFx0fSxcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IG1pZGR5ZnkoZ2V0UHJvZHVjdEJ5SWQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/getProductById/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\r\n    return {\r\n        statusCode: 200,\r\n        headers: {\r\n            \"Access-Control-Allow-Headers\": \"*\",\r\n            \"Access-Control-Allow-Origin\": \"*\",\r\n            \"Access-Control-Allow-Methods\": \"*\",\r\n        },\r\n        body: JSON.stringify(response),\r\n    };\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLy4vc3JjL2xpYnMvYXBpR2F0ZXdheS50cz82MjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcblx0QVBJR2F0ZXdheVByb3h5RXZlbnQsXG5cdEFQSUdhdGV3YXlQcm94eVJlc3VsdCxcblx0SGFuZGxlcixcbn0gZnJvbSBcImF3cy1sYW1iZGFcIjtcbmltcG9ydCB0eXBlIHsgRnJvbVNjaGVtYSB9IGZyb20gXCJqc29uLXNjaGVtYS10by10c1wiO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgXCJib2R5XCI+ICYge1xuXHRib2R5OiBGcm9tU2NoZW1hPFM+O1xufTtcbmV4cG9ydCB0eXBlIFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBIYW5kbGVyPFxuXHRWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPixcblx0QVBJR2F0ZXdheVByb3h5UmVzdWx0XG4+O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHJlc3BvbnNlOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHN0YXR1c0NvZGU6IDIwMCxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIjogXCIqXCIsXG5cdFx0XHRcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcblx0XHRcdFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIipcIixcblx0XHR9LFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSxcblx0fTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\nconst middyfy = (handler) => {\r\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLy4vc3JjL2xpYnMvbGFtYmRhLnRzPzZiMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pZGR5IGZyb20gXCJAbWlkZHkvY29yZVwiXG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tIFwiQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlclwiXG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ }),

/***/ "./src/functions/productList.json":
/*!****************************************!*\
  !*** ./src/functions/productList.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"count":4,"description":"Short Product Description1","id":"7567ec4b-b10c-48c5-9345-fc73c48a80aa","price":2.4,"title":"ProductOne"},{"count":6,"description":"Short Product Description3","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a0","price":10,"title":"ProductNew"},{"count":7,"description":"Short Product Description2","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a2","price":23,"title":"ProductTop"},{"count":12,"description":"Short Product Description7","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a1","price":15,"title":"ProductTitle"},{"count":7,"description":"Short Product Description2","id":"7567ec4b-b10c-48c5-9345-fc73c48a80a3","price":23,"title":"Product"},{"count":8,"description":"Short Product Description4","id":"7567ec4b-b10c-48c5-9345-fc73348a80a1","price":15,"title":"ProductTest"},{"count":2,"description":"Short Product Descriptio1","id":"7567ec4b-b10c-48c5-9445-fc73c48a80a2","price":23,"title":"Product2"},{"count":3,"description":"Short Product Description7","id":"7567ec4b-b10c-45c5-9345-fc73c48a80a1","price":15,"title":"ProductName"}]');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/getProductById/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;