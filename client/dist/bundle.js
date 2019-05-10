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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.jsx */ \"./client/src/components/board.jsx\");\n/* harmony import */ var _message_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.jsx */ \"./client/src/components/message.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      player1: true,\n      winner: '',\n      currentPlays: {\n        0: [],\n        1: [],\n        2: [],\n        3: [],\n        4: [],\n        5: [],\n        6: []\n      }\n    };\n    _this.playPiece = _this.playPiece.bind(_assertThisInitialized(_this));\n    _this.checkForWin = _this.checkForWin.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(_message_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        winner: this.state.winner\n      }), React.createElement(_board_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        playPiece: this.playPiece,\n        columns: this.state.currentPlays\n      }));\n    }\n  }, {\n    key: \"playPiece\",\n    value: function playPiece(e) {\n      var column = e.target.attributes.x.value;\n      var playsArray = Object.create(this.state.currentPlays);\n      var player1 = this.state.player1;\n      playsArray[column].push(player1 ? 'X' : 'O');\n      this.setState({\n        currentPlays: playsArray,\n        player1: !player1\n      });\n      this.checkForWin(player1, column);\n    }\n  }, {\n    key: \"checkForWin\",\n    value: function checkForWin(player1, column) {\n      var piece = player1 ? 'X' : 'O';\n      var pieceCount;\n      var playsArray = Object.create(this.state.currentPlays); //check columns\n\n      pieceCount = 0;\n\n      for (var i = 0; i < playsArray[column].length; i++) {\n        if (playsArray[column][i] === piece) {\n          pieceCount++;\n        } else {\n          pieceCount = 0;\n        }\n\n        if (pieceCount >= 4) {\n          this.setState({\n            winner: piece\n          });\n        }\n      } //check rows\n\n\n      pieceCount = 0;\n      var row = playsArray[column].length - 1;\n\n      for (var j = 0; j < 7; j++) {\n        if (playsArray[j][row] && playsArray[j][row] === piece) {\n          pieceCount++;\n        } else {\n          pieceCount = 0;\n        }\n\n        if (pieceCount >= 4) {\n          this.setState({\n            winner: piece\n          });\n        }\n      } //check major diags\n\n\n      pieceCount = 0;\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4P2I2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQuanN4JztcbmltcG9ydCBNZXNzYWdlIGZyb20gJy4vbWVzc2FnZS5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxheWVyMTogdHJ1ZSxcbiAgICAgIHdpbm5lcjogJycsXG4gICAgICBjdXJyZW50UGxheXM6IHtcbiAgICAgICAgMDogW10sXG4gICAgICAgIDE6IFtdLFxuICAgICAgICAyOiBbXSxcbiAgICAgICAgMzogW10sXG4gICAgICAgIDQ6IFtdLFxuICAgICAgICA1OiBbXSxcbiAgICAgICAgNjogW11cbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMucGxheVBpZWNlID0gdGhpcy5wbGF5UGllY2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoZWNrRm9yV2luID0gdGhpcy5jaGVja0Zvcldpbi5iaW5kKHRoaXMpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE1lc3NhZ2Ugd2lubmVyPXt0aGlzLnN0YXRlLndpbm5lcn0vPlxuICAgICAgICA8Qm9hcmQgcGxheVBpZWNlPXt0aGlzLnBsYXlQaWVjZX0gY29sdW1ucz17dGhpcy5zdGF0ZS5jdXJyZW50UGxheXN9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBwbGF5UGllY2UoZSkge1xuICAgIGNvbnN0IGNvbHVtbiA9IGUudGFyZ2V0LmF0dHJpYnV0ZXMueC52YWx1ZTtcbiAgICBjb25zdCBwbGF5c0FycmF5ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLnN0YXRlLmN1cnJlbnRQbGF5cyk7XG4gICAgY29uc3QgcGxheWVyMSA9IHRoaXMuc3RhdGUucGxheWVyMTtcbiAgICBwbGF5c0FycmF5W2NvbHVtbl0ucHVzaChwbGF5ZXIxID8gJ1gnIDogJ08nKTtcbiAgICB0aGlzLnNldFN0YXRlKCB7Y3VycmVudFBsYXlzOiBwbGF5c0FycmF5LCBwbGF5ZXIxOiAhcGxheWVyMX0gKTtcbiAgICB0aGlzLmNoZWNrRm9yV2luKHBsYXllcjEsIGNvbHVtbik7XG4gIH1cbiAgY2hlY2tGb3JXaW4ocGxheWVyMSwgY29sdW1uKSB7XG4gICAgY29uc3QgcGllY2UgPSBwbGF5ZXIxID8gJ1gnOiAnTyc7XG4gICAgbGV0IHBpZWNlQ291bnQ7XG4gICAgY29uc3QgcGxheXNBcnJheSA9IE9iamVjdC5jcmVhdGUodGhpcy5zdGF0ZS5jdXJyZW50UGxheXMpO1xuICAgIC8vY2hlY2sgY29sdW1uc1xuICAgIHBpZWNlQ291bnQgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheXNBcnJheVtjb2x1bW5dLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocGxheXNBcnJheVtjb2x1bW5dW2ldID09PSBwaWVjZSkge1xuICAgICAgICBwaWVjZUNvdW50KytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpZWNlQ291bnQgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHBpZWNlQ291bnQgPj0gNCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCB7d2lubmVyOiBwaWVjZX0gKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9jaGVjayByb3dzXG4gICAgcGllY2VDb3VudCA9IDA7XG4gICAgY29uc3Qgcm93ID0gcGxheXNBcnJheVtjb2x1bW5dLmxlbmd0aCAtIDE7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcbiAgICAgIGlmIChwbGF5c0FycmF5W2pdW3Jvd10gJiYgcGxheXNBcnJheVtqXVtyb3ddID09PSBwaWVjZSkge1xuICAgICAgICBwaWVjZUNvdW50Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwaWVjZUNvdW50ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChwaWVjZUNvdW50ID49IDQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpbm5lcjogcGllY2UgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vY2hlY2sgbWFqb3IgZGlhZ3NcbiAgICBwaWVjZUNvdW50ID0gMDtcbiAgICBcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBSEE7QUFhQTtBQUNBO0FBaEJBO0FBaUJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7OztBQW5FQTtBQUNBO0FBbUVBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/app.jsx\n");

/***/ }),

/***/ "./client/src/components/board.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/board.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _columns_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./columns.jsx */ \"./client/src/components/columns.jsx\");\n// import _ from 'underscore';\n\n\nvar Board = function Board(_ref) {\n  var playPiece = _ref.playPiece,\n      columns = _ref.columns;\n  return React.createElement(\"div\", null, _.map(_.range(7), function (i) {\n    return React.createElement(_columns_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: i,\n      x: i,\n      playPiece: playPiece,\n      column: columns[i]\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL2JvYXJkLmpzeD83MzViIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IENvbHVtbiBmcm9tICcuL2NvbHVtbnMuanN4JztcblxuY29uc3QgQm9hcmQgPSAoIHtwbGF5UGllY2UsIGNvbHVtbnN9ICkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Xy5tYXAoIF8ucmFuZ2UoNyksIChpKSA9PiAoXG4gICAgICAgIDxDb2x1bW4ga2V5PXtpfSB4PXtpfSBwbGF5UGllY2U9e3BsYXlQaWVjZX0gY29sdW1uPXtjb2x1bW5zW2ldfS8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUtBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/board.jsx\n");

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

/***/ "./client/src/components/message.jsx":
/*!*******************************************!*\
  !*** ./client/src/components/message.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Message = function Message(_ref) {\n  var winner = _ref.winner;\n\n  if (winner !== '') {\n    return React.createElement(\"h2\", null, \"Player \", winner, \" has crushed player \", winner === 'X' ? 'O' : 'X');\n  }\n\n  return React.createElement(\"h2\", null);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Message);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbWVzc2FnZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbWVzc2FnZS5qc3g/ZTIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNZXNzYWdlID0gKCB7d2lubmVyfSApID0+IHtcbiAgaWYgKHdpbm5lciAhPT0gJycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgyPlBsYXllciB7d2lubmVyfSBoYXMgY3J1c2hlZCBwbGF5ZXIge3dpbm5lciA9PT0gJ1gnID8gJ08nOidYJ308L2gyPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxoMj48L2gyPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/message.jsx\n");

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