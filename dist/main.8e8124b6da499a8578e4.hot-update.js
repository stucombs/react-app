webpackHotUpdate("main",{

/***/ "./src/ValidationComponent/ValidationComponent.js":
/*!********************************************************!*\
  !*** ./src/ValidationComponent/ValidationComponent.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar validationcomponent = function validationcomponent(props) {\n  var output = '';\n\n  if (props.textlength > 6) {\n    output = 'Text long enough';\n  } else {\n    output = 'Text too short';\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, output));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validationcomponent);\n\n//# sourceURL=webpack:///./src/ValidationComponent/ValidationComponent.js?");

/***/ })

})