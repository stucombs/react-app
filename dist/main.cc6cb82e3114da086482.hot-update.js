webpackHotUpdate("main",{

/***/ "./src/Person/Person.js":
/*!******************************!*\
  !*** ./src/Person/Person.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ \"./node_modules/radium/es/index.js\");\n/* harmony import */ var _Person_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Person.css */ \"./src/Person/Person.css\");\n/* harmony import */ var _Person_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Person_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar person = function person(props) {\n  var style = {\n    '@media (min-wdith: 500px)': {\n      width: '450px'\n    }\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Person\",\n    style: style\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    onClick: props.click\n  }, \"I'm \", props.name, \" and I am \", props.age, \" years old.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: props.changed\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (person);\n\n//# sourceURL=webpack:///./src/Person/Person.js?");

/***/ })

})