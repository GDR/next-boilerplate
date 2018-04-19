module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./hocs/withTheme.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/gdr/Git/GDR/next-boilerplate/src/hocs/withTheme.jsx';

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactJss = __webpack_require__("react-jss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withTheme = function withTheme(Component) {
  return function () {
    return _react2.default.createElement(
      _reactJss.ThemeProvider,
      { theme: null, __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      _react2.default.createElement(Component, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      })
    );
  };
};

exports.default = withTheme;

/***/ }),

/***/ "./lib/configureStore.dev.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__("redux");

var _reduxDevtoolsExtension = __webpack_require__("redux-devtools-extension");

var _reducers = __webpack_require__("./reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)());
}

/***/ }),

/***/ "./lib/configureStore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = __webpack_require__("./lib/configureStore.dev.js");
}

/***/ }),

/***/ "./pages/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/gdr/Git/GDR/next-boilerplate/src/pages/index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__("next-redux-wrapper");

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _configureStore = __webpack_require__("./lib/configureStore.js");

var _configureStore2 = _interopRequireDefault(_configureStore);

var _withTheme = __webpack_require__("./hocs/withTheme.jsx");

var _withTheme2 = _interopRequireDefault(_withTheme);

__webpack_require__("./styles/global.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    _classCallCheck(this, IndexPage);

    return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
  }

  _createClass(IndexPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        'Hello, world!',
        _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          'asd'
        )
      );
    }
  }]);

  return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__("redux");

var _reduxForm = __webpack_require__("redux-form");

var reducers = (0, _redux.combineReducers)({
  form: _reduxForm.reducer
});

exports.default = reducers;

/***/ }),

/***/ "./styles/global.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.jsx");


/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-jss":
/***/ (function(module, exports) {

module.exports = require("react-jss");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-form":
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map