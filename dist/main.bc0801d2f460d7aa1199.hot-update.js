webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Person/Person.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Person/Person.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".Person {\\r\\n\\twidth: 60%;\\r\\n\\tmargin: 16px auto;\\r\\n\\tborder: 1px solid #eee;\\r\\n\\tbox-shadow: 0 2px 3px #ccc;\\r\\n\\tpadding: 16px;\\r\\n\\ttext-align: center;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Person/Person.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Person_Person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Person/Person */ \"./src/Person/Person.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // import UserInput from './UserInput/UserInput';\n// import UserOutput from './UserOutput/UserOutput';\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      persons: [{\n        name: 'Stu',\n        age: 25\n      }, {\n        name: 'Juan',\n        age: 69\n      }, {\n        name: 'Steph',\n        age: 28\n      }],\n      otherState: 'some other value'\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"switchNameHandler\", function (getName) {\n      // DONT DO THIS(directly edit state): this.state.persons[0].name = 'Stuart';\n      _this.setState({\n        persons: [{\n          name: getName,\n          age: 25\n        }, {\n          name: 'Juan',\n          age: 69\n        }, {\n          name: getName,\n          age: 27\n        }]\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"nameChangeHandler\", function (event) {\n      _this.setState({\n        persons: [{\n          name: 'Stuart',\n          age: 25\n        }, {\n          name: event.target.value,\n          age: 69\n        }, {\n          name: 'Stephanie',\n          age: 27\n        }]\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var style = {\n        backgroundColor: 'white',\n        font: 'inherit',\n        border: '1px solid blue',\n        padding: '8px',\n        cursor: 'pointer'\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"App\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello from App, this is a component\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        style: style,\n        onClick: this.switchNameHandler.bind(this, \"Stuart\")\n      }, \"Switch Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Person_Person__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: this.state.persons[0].name,\n        age: this.state.persons[0].age\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Person_Person__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: this.state.persons[1].name,\n        age: this.state.persons[1].age,\n        changed: this.nameChangeHandler\n      }, \" My Hobby is racing \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Person_Person__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        name: this.state.persons[2].name,\n        age: this.state.persons[2].age,\n        click: this.switchNameHandler.bind(this, 'Stephanie')\n      }));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"hot\"])(module)(App)); // state = {\n// \tusers: [\n// \t\t{username: 'jsmith'},\n// \t\t{username: 'shcombs'}\n// \t]\n// }\n// usernameHandler = (event) => {\n// \tthis.setState({\n// \t\tusers: [\n// \t\t\t{username: event.target.value},\n// \t\t\t{username: 'shcombs'}\n// \t\t]\t\t\t\n// \t})\n// }\n// render() {\n// \treturn( \n// \t\t<div className=\"App\">\n// \t\t\t<UserInput currentName={this.state.users[0].username} changed={this.usernameHandler}/>\n// \t\t\t<UserOutput username={this.state.users[0].username} />\n// \t\t\t<UserOutput username={this.state.users[1].username}/>\n// \t\t</div>\n// \t)\n// }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/App.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Person_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Person.css */ \"./src/Person/Person.css\");\n/* harmony import */ var _Person_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Person_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar person = function person(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"Person\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    onClick: props.click\n  }, \"I'm \", props.name, \" and I am \", props.age, \" years old.\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    onChange: props.changed\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (person);\n\n//# sourceURL=webpack:///./src/Person/Person.js?");

/***/ })

})