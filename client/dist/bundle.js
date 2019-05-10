/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/app.jsx":
/*!***************************************!*\
  !*** ./client/src/components/app.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.jsx */ \"./client/src/components/board.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      player1: true,\n      currentPlays: {\n        0: [],\n        1: [],\n        2: [],\n        3: [],\n        4: [],\n        5: [],\n        6: []\n      }\n    };\n    _this.playPiece = _this.playPiece.bind(_assertThisInitialized(_this));\n    _this.checkForWin = _this.checkForWin.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(_board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playPiece: this.playPiece,\n        columns: this.state.currentPlays\n      });\n    }\n  }, {\n    key: \"playPiece\",\n    value: function playPiece(e) {\n      var column = e.target.attributes.x.value;\n      var playsArray = Object.create(this.state.currentPlays);\n      var player1 = this.state.player1;\n      playsArray[column].push(player1 ? 'X' : 'O');\n      this.setState({\n        currentPlays: playsArray,\n        player1: !player1\n      });\n      this.checkForWin(player1, column);\n    }\n  }, {\n    key: \"checkForWin\",\n    value: function checkForWin(player1, column) {\n      var piece = player1 ? 'X' : 'O';\n      var pieceCount;\n      var win = false; //check columns\n\n      var playsArray = Object.create(this.state.currentPlays);\n      pieceCount = 0;\n\n      for (var i = 0; i < playsArray[column].length; i++) {\n        if (playsArray[column][i] === piece) {\n          pieceCount++;\n        } else {\n          pieceCount = 0;\n        }\n\n        if (pieceCount >= 4) {\n          alert(\"Player \".concat(piece, \" wins!\"));\n        }\n      }\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4P2I2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQuanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBsYXllcjE6IHRydWUsXG4gICAgICBjdXJyZW50UGxheXM6IHtcbiAgICAgICAgMDogW10sXG4gICAgICAgIDE6IFtdLFxuICAgICAgICAyOiBbXSxcbiAgICAgICAgMzogW10sXG4gICAgICAgIDQ6IFtdLFxuICAgICAgICA1OiBbXSxcbiAgICAgICAgNjogW11cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucGxheVBpZWNlID0gdGhpcy5wbGF5UGllY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrRm9yV2luID0gdGhpcy5jaGVja0Zvcldpbi5iaW5kKHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJvYXJkIHBsYXlQaWVjZT17dGhpcy5wbGF5UGllY2V9IGNvbHVtbnM9e3RoaXMuc3RhdGUuY3VycmVudFBsYXlzfS8+XG4gICAgKVxuICB9XG4gIHBsYXlQaWVjZShlKSB7XG4gICAgY29uc3QgY29sdW1uID0gZS50YXJnZXQuYXR0cmlidXRlcy54LnZhbHVlO1xuICAgIGNvbnN0IHBsYXlzQXJyYXkgPSBPYmplY3QuY3JlYXRlKHRoaXMuc3RhdGUuY3VycmVudFBsYXlzKTtcbiAgICBjb25zdCBwbGF5ZXIxID0gdGhpcy5zdGF0ZS5wbGF5ZXIxO1xuICAgIHBsYXlzQXJyYXlbY29sdW1uXS5wdXNoKHBsYXllcjEgPyAnWCcgOiAnTycpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRQbGF5czogcGxheXNBcnJheSwgcGxheWVyMTogIXBsYXllcjF9KTtcbiAgICB0aGlzLmNoZWNrRm9yV2luKHBsYXllcjEsIGNvbHVtbik7XG4gIH1cbiAgY2hlY2tGb3JXaW4ocGxheWVyMSwgY29sdW1uKSB7XG4gICAgY29uc3QgcGllY2UgPSBwbGF5ZXIxID8gJ1gnOiAnTyc7XG4gICAgbGV0IHBpZWNlQ291bnQ7XG4gICAgbGV0IHdpbiA9IGZhbHNlO1xuICAgIC8vY2hlY2sgY29sdW1uc1xuICAgIGNvbnN0IHBsYXlzQXJyYXkgPSBPYmplY3QuY3JlYXRlKHRoaXMuc3RhdGUuY3VycmVudFBsYXlzKTtcbiAgICBwaWVjZUNvdW50ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXlzQXJyYXlbY29sdW1uXS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBsYXlzQXJyYXlbY29sdW1uXVtpXSA9PT0gcGllY2UpIHtcbiAgICAgICAgcGllY2VDb3VudCsrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwaWVjZUNvdW50ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChwaWVjZUNvdW50ID49IDQpIHtcbiAgICAgICAgYWxlcnQoYFBsYXllciAke3BpZWNlfSB3aW5zIWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUZBO0FBWUE7QUFDQTtBQWZBO0FBZ0JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWhEQTtBQUNBO0FBZ0RBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/app.jsx\n");

/***/ }),

/***/ "./client/src/components/board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _columns_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columns.jsx */ \"./client/src/components/columns.jsx\");\n// import _ from 'underscore';\n\n\nvar Board = function Board(_ref) {\n  var playPiece = _ref.playPiece,\n      columns = _ref.columns;\n  return React.createElement(\"div\", null, _.map(_.range(7), function (i) {\n    return React.createElement(_columns_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: i,\n      x: i,\n      playPiece: playPiece,\n      column: columns[i]\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD83MzViIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbnMuanN4JztcblxuY29uc3QgQm9hcmQgPSAoe3BsYXlQaWVjZSwgY29sdW1uc30pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge18ubWFwKCBfLnJhbmdlKDcpLCAoaSkgPT4gKFxuICAgICAgICA8Q29sdW1uIGtleT17aX0geD17aX0gcGxheVBpZWNlPXtwbGF5UGllY2V9IGNvbHVtbj17Y29sdW1uc1tpXX0vPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFLQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/board.jsx\n");

/***/ }),

/***/ "./client/src/components/boxes.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/boxes.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Box = function Box(_ref) {\n  var x = _ref.x,\n      y = _ref.y,\n      value = _ref.value;\n  return React.createElement(\"div\", {\n    className: \"box\",\n    x: x,\n    y: y\n  }, value ? value : '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Box);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm94ZXMuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2JveGVzLmpzeD81NTQ4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJveCA9ICh7eCwgeSwgdmFsdWV9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiB4PXt4fSB5PXt5fT57dmFsdWUgPyB2YWx1ZTogJyd9PC9kaXY+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/boxes.jsx\n");

/***/ }),

/***/ "./client/src/components/columns.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/columns.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _boxes_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxes.jsx */ \"./client/src/components/boxes.jsx\");\n\n\nvar Column = function Column(_ref) {\n  var playPiece = _ref.playPiece,\n      x = _ref.x,\n      column = _ref.column;\n  return React.createElement(\"div\", {\n    className: \"column\",\n    onClick: playPiece\n  }, _.map(_.range(5, -1, -1), function (i) {\n    return React.createElement(_boxes_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: i,\n      x: x,\n      y: i,\n      value: column[i]\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvY29sdW1ucy5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvY29sdW1ucy5qc3g/Y2Y0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm94IGZyb20gJy4vYm94ZXMuanN4JztcblxuY29uc3QgQ29sdW1uID0gKHtwbGF5UGllY2UsIHgsIGNvbHVtbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiIG9uQ2xpY2s9e3BsYXlQaWVjZX0+XG4gICAgICB7Xy5tYXAoXy5yYW5nZSg1LCAtMSwgLTEpLCAoaSkgPT4gKFxuICAgICAgICA8Qm94IGtleT17aX0geD17eH0geT17aX0gdmFsdWU9e2NvbHVtbltpXX0vPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/columns.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app.jsx */ \"./client/src/components/app.jsx\");\n\nReactDOM.render(React.createElement(_components_app_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwLmpzeCc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });