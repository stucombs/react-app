webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CharComponent_CharComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CharComponent/CharComponent */ \"./src/CharComponent/CharComponent.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // import Person from './Person/Person';\n// import UserInput from './UserInput/UserInput';\n// import UserOutput from './UserOutput/UserOutput';\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      currentText: null\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"changeCurrentTextHandler\", function (newText) {});\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"App\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        onChange: this.changeCurrentTextHandler(this.value)\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, this.state.currentText));\n    } // \tstate = {\n    // \t\tpersons: [\n    // \t\t\t{ id: 'vasdf1', name: 'Stu',   age: 25},\n    // \t\t\t{ id: 'asdf11', name: 'Juan',  age: 69},\n    // \t\t\t{ id: 'ahre12', name: 'Steph', age: 28}\n    // \t\t],\n    // \t\totherState: 'some other value',\n    // \t\tshowPersons: false\n    // \t}\n    // \tswitchNameHandler = (getName) => {\n    // \t\t// DONT DO THIS(directly edit state): this.state.persons[0].name = 'Stuart';\n    // \t\tthis.setState({\n    // \t\t\tpersons: [\n    // \t\t\t\t{ name: getName, age: 25},\n    // \t\t\t\t{ name: 'Juan',  age: 69},\n    // \t\t\t\t{ name: getName, age: 27}\t\t\t \n    // \t\t\t]\n    // \t\t} );\n    // \t}\n    // \tnameChangeHandler = (event, id) => {\n    // \t\tconst personIndex = this.state.persons.findIndex(p => {\n    // \t\t\treturn p.id === id; \n    // \t\t});\n    // \t\tconst person = {\n    // \t\t\t...this.state.persons[personIndex]\n    // \t\t};\n    // \t\t// const person = Object.assign({}, this.state.persons[personIndex]);\n    // \t\tperson.name = event.target.value;\n    // \t\tconst persons = [...this.state.persons];\n    // \t\tpersons[personIndex] = person;\n    // \t\tthis.setState( { persons: persons});\n    // \t\tthis.setState({\n    // \t\t\tpersons: [\n    // \t\t\t\t{ name: 'Stuart', age: 25},\n    // \t\t\t\t{ name: event.target.value, age: 69},\n    // \t\t\t\t{ name: 'Stephanie', age: 27}\n    // \t\t\t]\n    // \t\t})\n    // \t}\n    // \ttogglePersonsHandler = () => {\n    // \t\tconst doesShow = this.state.showPersons;\n    // \t\tthis.setState({showPersons: !doesShow});\n    // \t}\n    // \tdeletePersonsHandler = (personIndex) => {\n    // \t\tconst persons = [...this.state.persons];\n    // \t\tpersons.splice(personIndex, 1);\n    // \t\tthis.setState({persons: persons});\n    // \t}\n    // \trender() {\n    // \t\tconst style = {\n    // \t\t\tbackgroundColor: 'white',\n    // \t\t\tfont: 'inherit',\n    // \t\t\tborder: '1px solid blue',\n    // \t\t\tpadding: '8px',\n    // \t\t\tcursor: 'pointer'\n    // \t\t};\n    // \t\tlet persons = null;\n    // \t\tif(this.state.showPersons){\n    // \t\t\tpersons = (\n    // \t\t\t\t<div>\n    // \t\t\t\t{this.state.persons.map((person, index) => {\n    // \t\t\t\t})}\n    // \t\t\t\t</div>\n    // \t\t\t);\n    // \t\t}else{\n    // \t\t\tpersons = (\n    // \t\t\t\t<div>\n    // \t\t\t\t\t<h3>No Results found</h3>\n    // \t\t\t\t</div>\n    // \t\t\t);\n    // \t\t}\n    // \t\treturn (\n    // \t\t\t<div className=\"App\">\n    // \t\t\t\t<h1>Hello from App, this is a component</h1>\n    // \t\t\t\t<button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>\n    // \t\t\t{persons}\n    // \t\t\t</div>\n    // \t\t);\n    // \t}\n\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"hot\"])(module)(App));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

})