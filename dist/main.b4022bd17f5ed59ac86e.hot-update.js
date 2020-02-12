webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Person_Person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Person/Person */ \"./src/Person/Person.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // import UserInput from './UserInput/UserInput';\n// import UserOutput from './UserOutput/UserOutput';\n// import CharacterCard from './CharacterCard/CharacterCard';\n// import Validation from './Validation/Validation';\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, App);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_this), \"state\", {\n      persons: [{\n        id: 'vasdf1',\n        name: 'Stu',\n        age: 25\n      }, {\n        id: 'asdf11',\n        name: 'Juan',\n        age: 69\n      }, {\n        id: 'ahre12',\n        name: 'Steph',\n        age: 28\n      }],\n      otherState: 'some other value',\n      showPersons: false\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"switchNameHandler\", function (getName) {\n      // DONT DO THIS(directly edit state): this.state.persons[0].name = 'Stuart';\n      _this.setState({\n        persons: [{\n          name: getName,\n          age: 25\n        }, {\n          name: 'Juan',\n          age: 69\n        }, {\n          name: getName,\n          age: 27\n        }]\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"nameChangeHandler\", function (event, id) {\n      var personIndex = _this.state.persons.findIndex(function (p) {\n        return p.id === id;\n      });\n\n      var person = _objectSpread({}, _this.state.persons[personIndex]); // const person = Object.assign({}, this.state.persons[personIndex]);\n\n\n      person.name = event.target.value;\n\n      var persons = _toConsumableArray(_this.state.persons);\n\n      persons[personIndex] = person;\n\n      _this.setState({\n        persons: persons\n      });\n\n      _this.setState({\n        persons: [{\n          name: 'Stuart',\n          age: 25\n        }, {\n          name: event.target.value,\n          age: 69\n        }, {\n          name: 'Stephanie',\n          age: 27\n        }]\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"togglePersonsHandler\", function () {\n      var doesShow = _this.state.showPersons;\n\n      _this.setState({\n        showPersons: !doesShow\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"deletePersonsHandler\", function (personIndex) {\n      var persons = _toConsumableArray(_this.state.persons);\n\n      persons.splice(personIndex, 1);\n\n      _this.setState({\n        persons: persons\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      var style = {\n        backgroundColor: 'white',\n        font: 'inherit',\n        border: '1px solid blue',\n        padding: '8px',\n        cursor: 'pointer'\n      };\n      var persons = null;\n\n      if (this.state.showPersons) {\n        persons = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.state.persons.map(function (person, index) {}));\n      } else {\n        persons = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"No Results found\"));\n      }\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"App\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello from App, this is a component\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        style: style,\n        onClick: this.togglePersonsHandler\n      }, \"Toggle Persons\"), persons);\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"hot\"])(module)(App)); //Assignment 2\n// state = {\n// \tcurrentText: ''\n// }\n// changeCurrentTextHandler = (event) => {\n// \tthis.setState({\n// \t\tcurrentText: event.target.value\n// \t});\n// }\n// removeCharHandler = (characterIndex) => {\n// \tconst text = this.state.currentText.split('');\n// \ttext.splice(characterIndex, 1);\n// \tconst updatedText = text.join('');\n// \tthis.setState({currentText: updatedText});\n// }\n// render(){\n// \tconst characters = this.state.currentText.split('').map((ch, index) => {\n// \t\treturn <CharacterCard character={ch} key={index} click={() => this.removeCharHandler(index)}/>; \n// \t});\n// \treturn(\n// \t\t<div className=\"App\">\n// \t\t\tEnter Text: <input type='text' value={this.state.currentText} onChange={this.changeCurrentTextHandler.bind(this)}/>\n// \t\t\t<p>Word length: {this.state.currentText.length}</p>\n// \t\t\t<Validation textlength={this.state.currentText.length} />\n// \t\t\t{characters}\n// \t\t</div> \n// \t);\n// }\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

})