webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Person_Person__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Person/Person */ \"./src/Person/Person.js\");\nvar _this = undefined;\n\nfunction _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar App = function App(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    persons: [{\n      name: 'Stu',\n      age: 25\n    }, {\n      name: 'Juan',\n      age: 69\n    }, {\n      name: 'Steph',\n      age: 28\n    }],\n    otherState: 'some other value'\n  }),\n      _useState2 = _toArray(_useState);\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Hello from App, this is a component\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: _this.switchNameHandler\n  }, \"Switch Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Person_Person__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: _this.state.persons[0].name,\n    age: _this.state.persons[0].age\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Person_Person__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: _this.state.persons[1].name,\n    age: _this.state.persons[1].age\n  }, \" My Hobby is racing \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Person_Person__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: _this.state.persons[2].name,\n    age: _this.state.persons[2].age\n  })); // return React.createElement('div', {className: \"App\"}, React.createElement('h1', null, 'Hello, from inner tag'));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__[\"hot\"])(module)(App));\nstate = {\n  persons: [{\n    name: 'Stu',\n    age: 25\n  }, {\n    name: 'Juan',\n    age: 69\n  }, {\n    name: 'Steph',\n    age: 28\n  }],\n  otherState: 'some other value'\n};\n\nswitchNameHandler = function switchNameHandler() {\n  // DONT DO THIS(directly edit state): this.state.persons[0].name = 'Stuart';\n  _this.setState({\n    persons: [{\n      name: 'Stu',\n      age: 25\n    }, {\n      name: 'Juan',\n      age: 69\n    }, {\n      name: 'Stephanie',\n      age: 28\n    }]\n  });\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

})