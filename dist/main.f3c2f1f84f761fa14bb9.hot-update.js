webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Person/Person.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Person/Person.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".Person {\\r\\n\\twidth: 60%;\\r\\n\\tmargin: 16px auto;\\r\\n\\tborder: 1px solid #eee;\\r\\n\\tbox-shadow: 0 2px 3px #ccc;\\r\\n\\tpadding: 16px;\\r\\n\\ttext-align: center;\\r\\n}\\r\\n\\r\\n/*.togglebutton {\\r\\n\\tbackground-color: 'white';\\r\\n\\tfont: 'inherit';\\r\\n\\tborder: '1px solid blue';\\r\\n\\tpadding: '8px';\\r\\n\\tcursor: 'pointer';\\r\\n}*/\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Person/Person.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Person/Person.css":
/*!*******************************!*\
  !*** ./src/Person/Person.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Person.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Person/Person.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../node_modules/css-loader/dist/cjs.js!./Person.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Person/Person.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Person.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Person/Person.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/Person/Person.css?");

/***/ }),

/***/ "./src/Person/Person.js":
/*!******************************!*\
  !*** ./src/Person/Person.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var radium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! radium */ \"./node_modules/radium/es/index.js\");\n/* harmony import */ var _Person_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Person.css */ \"./src/Person/Person.css\");\n/* harmony import */ var _Person_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Person_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar person = function person(props) {\n  var style = {\n    '@media (min-width: 500px)': {\n      width: '450px'\n    }\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Person\",\n    style: style\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    onClick: props.click\n  }, \"I'm \", props.name, \" and I am \", props.age, \" years old.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: props.changed\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(radium__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(person));\n\n//# sourceURL=webpack:///./src/Person/Person.js?");

/***/ })

})