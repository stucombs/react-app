webpackHotUpdate("main",{

/***/ "./src/Person/Person.js":
/*!******************************!*\
  !*** ./src/Person/Person.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"width: 60%;\\n\\t\\t\\t\\tmargin: 16px auto;\\n\\t\\t\\t\\tborder: 3px solid #red;\\n\\t\\t\\t\\tbox-shadow: 0 2px 3px #ccc;\\n\\t\\t\\t\\tpadding: 16px;\\n\\t\\t\\t\\ttext-align: center;\\n\\t\\t\\t\\t\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n // import Radium from 'radium';\n\n // import './Person.css';\n\nvar StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\n\nvar person = function person(props) {\n  return (// <div className='Person' style={style}>\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDiv, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n      onClick: props.click\n    }, \"I'm \", props.name, \" and I am \", props.age, \" years old.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      onChange: props.changed\n    }))\n  );\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (person);\n\n//# sourceURL=webpack:///./src/Person/Person.js?");

/***/ })

})