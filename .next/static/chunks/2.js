(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/home/recentArticles.js":
/*!*******************************************!*\
  !*** ./components/home/recentArticles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var terser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! terser */ "./node_modules/terser/dist/bundle.min.js");
/* harmony import */ var terser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(terser__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/home/recentArticles.js";



/**
 * @description 侧边栏 最近文章
 * @param {*} data
 * @return {Object} Dom 
 */

var RecentArticles = function RecentArticles(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aslide-recent-articles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "hd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "\u63A8\u8350\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "recent-articles-cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.recentArticlesList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: +new Date() + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, item.title)));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\n      .aslide-recent-articles {\n        border: 1px solid #eaeaea;\n        min-height: 160px;\n        _height: 160px;\n        margin-bottom: 20px;\n        transition: .5s;\n      }\n      .aslide-recent-articles:hover {\n        box-shadow: 0 0 10px #ccc;\n        transform: transLateY(-5px);\n      }\n      .aslide-recent-articles .hd {\n        height: 30px;\n        line-height: 30px;\n        border-bottom: 1px solid #eaeaea;\n        background-color: #fbfbfb;\n      }\n      .aslide-recent-articles .hd span {\n        display: inline-block;\n        height: 100%;\n        padding: 0 20px 0 10px;\n        background-color: #ffffff;\n        border-right: 1px solid #eaeaea;\n        border-bottom: 1px solid #ffffff;\n      }\n      .recent-articles-cont li {\n        box-sizing: border-box;\n        padding: 5px 10px;\n        font-size: 14px;\n        display: flex;\n        justify-content: space-between;\n        align-item: center;\n        line-height: 30px;\n        border-bottom: 1px solid #f0f0f0;\n      }\n      .recent-articles-cont li:last-child {\n        border-bottom: 0;\n      }\n      .recent-articles-cont li a:hover {\n        color: #45BCF9;\n      }\n      .recent-articles-cont li a {\n        color: #333333;\n        display: block;\n        width: 330px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        text-shadow: 0px 0px 2px #ffffff;\n      }\n    "));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentArticles);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "./node_modules/core-js/library/fn/reflect/construct.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/set.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/set.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/set */ "./node_modules/core-js/library/fn/set.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/reflect/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/fn/reflect/construct.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.reflect.construct */ "./node_modules/core-js/library/modules/es6.reflect.construct.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Reflect.construct;


/***/ }),

/***/ "./node_modules/core-js/library/fn/set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/library/fn/set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.set */ "./node_modules/core-js/library/modules/es6.set.js");
__webpack_require__(/*! ../modules/es7.set.to-json */ "./node_modules/core-js/library/modules/es7.set.to-json.js");
__webpack_require__(/*! ../modules/es7.set.of */ "./node_modules/core-js/library/modules/es7.set.of.js");
__webpack_require__(/*! ../modules/es7.set.from */ "./node_modules/core-js/library/modules/es7.set.from.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Set;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-from-iterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-from-iterable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-methods.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-methods.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/library/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-constructor.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-constructor.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-species-create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-species-create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/library/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_bind.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_bind.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/library/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-strong.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-strong.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/library/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection-to-json.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection-to-json.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var from = __webpack_require__(/*! ./_array-from-iterable */ "./node_modules/core-js/library/modules/_array-from-iterable.js");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_collection.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_collection.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/library/modules/_redefine-all.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/library/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var each = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/library/modules/_array-methods.js")(0);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/library/modules/_for-of.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-collection-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-collection-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_validate-collection.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_validate-collection.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.reflect.construct.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.reflect.construct.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var bind = __webpack_require__(/*! ./_bind */ "./node_modules/core-js/library/modules/_bind.js");
var rConstruct = (__webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.set.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.set.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/library/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/library/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.from.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.from.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(/*! ./_set-collection-from */ "./node_modules/core-js/library/modules/_set-collection-from.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(/*! ./_set-collection-of */ "./node_modules/core-js/library/modules/_set-collection-of.js")('Set');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.set.to-json.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.set.to-json.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(/*! ./_collection-to-json */ "./node_modules/core-js/library/modules/_collection-to-json.js")('Set') });


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/next-server/dist/lib/mitt.js":
/*!***************************************************!*\
  !*** ./node_modules/next-server/dist/lib/mitt.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _create = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = (0, _create.default)(null);
  return {
    on: function on(type, handler) {
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/router.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _set = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next-server/dist/lib/mitt.js"));

var shallow_equals_1 = __importDefault(__webpack_require__(/*! ./shallow-equals */ "./node_modules/next-server/dist/lib/router/shallow-equals.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next-server/dist/lib/utils.js");

var Router =
/*#__PURE__*/
function () {
  function Router(pathname, query, as) {
    var _this = this;

    var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        Component = _ref.Component,
        err = _ref.err;

    (0, _classCallCheck2.default)(this, Router);

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (!_this._beforePopState(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.subscriptions = new _set.default();
    this.componentLoadCancel = null;

    this._beforePopState = function () {
      return true;
    };

    if (typeof window !== 'undefined') {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  }

  (0, _createClass2.default)(Router, [{
    key: "update",
    value: function update(route, Component) {
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = (0, _assign.default)({}, data, {
        Component: Component
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function () {
      var _reload = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(route) {
        var pathname, query, url, as, routeInfo, error;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                delete this.components[route];
                this.pageLoader.clearCache(route);

                if (!(route !== this.route)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                pathname = this.pathname, query = this.query;
                url = window.location.href; // This makes sure we only use pathname + query + hash, to mirror `asPath` coming from the server.

                as = window.location.pathname + window.location.search + window.location.hash;
                Router.events.emit('routeChangeStart', url);
                _context.next = 10;
                return this.getRouteInfo(route, pathname, query, as);

              case 10:
                routeInfo = _context.sent;
                error = routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.notify(routeInfo);

                if (!error) {
                  _context.next = 18;
                  break;
                }

                Router.events.emit('routeChangeError', error, url);
                throw error;

              case 18:
                Router.events.emit('routeChangeComplete', url);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function reload(_x) {
        return _reload.apply(this, arguments);
      }

      return reload;
    }()
  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(method, _url, _as, options) {
        var url, as, _url_1$parse, pathname, query, route, _options$shallow, shallow, routeInfo, _routeInfo, error, hash;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // If url and as provided as an object representation,
                // we'll format them into the string version here.
                url = (0, _typeof2.default)(_url) === 'object' ? utils_1.formatWithValidation(_url) : _url;
                as = (0, _typeof2.default)(_as) === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
                // "<page>/index.html" directly for the SSR page.

                if (__NEXT_DATA__.nextExport) {
                  as = Router._rewriteUrlForNextExport(as);
                }

                this.abortComponentLoad(as); // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.

                if (!this.onlyAHashChange(as)) {
                  _context2.next = 10;
                  break;
                }

                Router.events.emit('hashChangeStart', as);
                this.changeState(method, url, as);
                this.scrollToHash(as);
                Router.events.emit('hashChangeComplete', as);
                return _context2.abrupt("return", true);

              case 10:
                _url_1$parse = url_1.parse(url, true), pathname = _url_1$parse.pathname, query = _url_1$parse.query; // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url

                if (!this.urlIsNew(as)) {
                  method = 'replaceState';
                }

                route = toRoute(pathname);
                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeInfo = null;
                Router.events.emit('routeChangeStart', as); // If shallow === false and other conditions met, we reuse the
                // existing routeInfo for this route.
                // Because of this, getInitialProps would not run.

                if (!(shallow && this.isShallowRoutingPossible(route))) {
                  _context2.next = 20;
                  break;
                }

                routeInfo = this.components[route];
                _context2.next = 23;
                break;

              case 20:
                _context2.next = 22;
                return this.getRouteInfo(route, pathname, query, as);

              case 22:
                routeInfo = _context2.sent;

              case 23:
                _routeInfo = routeInfo, error = _routeInfo.error;

                if (!(error && error.cancelled)) {
                  _context2.next = 26;
                  break;
                }

                return _context2.abrupt("return", false);

              case 26:
                Router.events.emit('beforeHistoryChange', as);
                this.changeState(method, url, as, options);
                hash = window.location.hash.substring(1);
                this.set(route, pathname, query, as, (0, _assign.default)({}, routeInfo, {
                  hash: hash
                }));

                if (!error) {
                  _context2.next = 33;
                  break;
                }

                Router.events.emit('routeChangeError', error, as);
                throw error;

              case 33:
                Router.events.emit('routeChangeComplete', as);
                return _context2.abrupt("return", true);

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function change(_x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, null, as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(route, pathname, query, as) {
        var routeInfo, _routeInfo2, Component, _require, isValidElementType, ctx, _Component, _ctx;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                routeInfo = null;
                _context3.prev = 1;
                routeInfo = this.components[route];

                if (routeInfo) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 6;
                return this.fetchComponent(route, as);

              case 6:
                _context3.t0 = _context3.sent;
                routeInfo = {
                  Component: _context3.t0
                };

              case 8:
                _routeInfo2 = routeInfo, Component = _routeInfo2.Component;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 13;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 13:
                ctx = {
                  pathname: pathname,
                  query: query,
                  asPath: as
                };
                _context3.next = 16;
                return this.getInitialProps(Component, ctx);

              case 16:
                routeInfo.props = _context3.sent;
                this.components[route] = routeInfo;
                _context3.next = 44;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t1 = _context3["catch"](1);

                if (!(_context3.t1.code === 'PAGE_LOAD_ERROR')) {
                  _context3.next = 26;
                  break;
                }

                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So, we need to mark it as a cancelled error and stop the routing logic.

                _context3.t1.cancelled = true;
                return _context3.abrupt("return", {
                  error: _context3.t1
                });

              case 26:
                if (!_context3.t1.cancelled) {
                  _context3.next = 28;
                  break;
                }

                return _context3.abrupt("return", {
                  error: _context3.t1
                });

              case 28:
                _context3.next = 30;
                return this.fetchComponent('/_error');

              case 30:
                _Component = _context3.sent;
                routeInfo = {
                  Component: _Component,
                  err: _context3.t1
                };
                _ctx = {
                  err: _context3.t1,
                  pathname: pathname,
                  query: query
                };
                _context3.prev = 33;
                _context3.next = 36;
                return this.getInitialProps(_Component, _ctx);

              case 36:
                routeInfo.props = _context3.sent;
                _context3.next = 43;
                break;

              case 39:
                _context3.prev = 39;
                _context3.t2 = _context3["catch"](33);
                console.error('Error in error page `getInitialProps`: ', _context3.t2);
                routeInfo.props = {};

              case 43:
                routeInfo.error = _context3.t1;

              case 44:
                return _context3.abrupt("return", routeInfo);

              case 45:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 20], [33, 39]]);
      }));

      function getRouteInfo(_x6, _x7, _x8, _x9) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._beforePopState = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = (0, _slicedToArray2.default)(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = (0, _slicedToArray2.default)(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = (0, _slicedToArray2.default)(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      var _url_1$parse2 = url_1.parse(asPath, true),
          pathname = _url_1$parse2.pathname,
          query = _url_1$parse2.query;

      var _url_1$parse3 = url_1.parse(this.asPath, true),
          curPathname = _url_1$parse3.pathname;

      return curPathname !== pathname || !shallow_equals_1.default(query, this.query);
    }
  }, {
    key: "isShallowRoutingPossible",
    value: function isShallowRoutingPossible(route) {
      return (// If there's cached routeInfo for the route.
        Boolean(this.components[route]) && // If the route is already rendered on the screen.
        this.route === route
      );
    }
  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(url) {
        var _url_1$parse4, pathname, route;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (false) {}

                return _context4.abrupt("return");

              case 2:
                _url_1$parse4 = url_1.parse(url), pathname = _url_1$parse4.pathname;
                route = toRoute(pathname);
                return _context4.abrupt("return", this.pageLoader.prefetch(route));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x10) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee5(route, as) {
        var cancelled, cancel, Component, error;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.componentLoadCancel = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.fetchRoute(route);

              case 4:
                Component = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                return _context5.abrupt("return", Component);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x11, _x12) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee6(Component, ctx) {
        var cancelled, cancel, App, props, err;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                cancelled = false;

                cancel = function cancel() {
                  cancelled = true;
                };

                this.componentLoadCancel = cancel;
                App = this.components['/_app'].Component;
                _context6.next = 6;
                return utils_1.loadGetInitialProps(App, {
                  Component: Component,
                  router: this,
                  ctx: ctx
                });

              case 6:
                props = _context6.sent;

                if (cancel === this.componentLoadCancel) {
                  this.componentLoadCancel = null;
                }

                if (!cancelled) {
                  _context6.next = 12;
                  break;
                }

                err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;

              case 12:
                return _context6.abrupt("return", props);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getInitialProps(_x13, _x14) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }, {
    key: "fetchRoute",
    value: function () {
      var _fetchRoute = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee7(route) {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.pageLoader.loadPage(route));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function fetchRoute(_x15) {
        return _fetchRoute.apply(this, arguments);
      }

      return fetchRoute;
    }()
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.componentLoadCancel) {
        Router.events.emit('routeChangeError', new Error('Route Cancelled'), as);
        this.componentLoadCancel();
        this.componentLoadCancel = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      var App = this.components['/_app'].Component;
      this.subscriptions.forEach(function (fn) {
        return fn((0, _assign.default)({}, data, {
          App: App
        }));
      });
    }
  }, {
    key: "subscribe",
    value: function subscribe(fn) {
      var _this2 = this;

      this.subscriptions.add(fn);
      return function () {
        return _this2.subscriptions.delete(fn);
      };
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      var _url$split = url.split('#'),
          _url$split2 = (0, _slicedToArray2.default)(_url$split, 2),
          hash = _url$split2[1];

      url = url.replace(/#.*/, '');

      var _url$split3 = url.split('?'),
          _url$split4 = (0, _slicedToArray2.default)(_url$split3, 2),
          path = _url$split4[0],
          qs = _url$split4[1];

      path = path.replace(/\/$/, '');
      var newPath = path; // Append a trailing slash if this path does not have an extension

      if (!/\.[^/]+\/?$/.test(path)) {
        newPath = "".concat(path, "/");
      }

      if (qs) {
        newPath = "".concat(newPath, "?").concat(qs);
      }

      if (hash) {
        newPath = "".concat(newPath, "#").concat(hash);
      }

      return newPath;
    }
  }]);
  return Router;
}();

Router.events = mitt_1.default();
exports.default = Router;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

/***/ }),

/***/ "./node_modules/next-server/dist/lib/router/shallow-equals.js":
/*!********************************************************************!*\
  !*** ./node_modules/next-server/dist/lib/router/shallow-equals.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function shallowEquals(a, b) {
  for (var i in a) {
    if (b[i] !== a[i]) return false;
  }

  for (var _i in b) {
    if (b[_i] !== a[_i]) return false;
  }

  return true;
}

exports.default = shallowEquals;

/***/ }),

/***/ "./node_modules/next-server/dist/lib/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/next-server/dist/lib/utils.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

function execOnce(fn) {
  var _this = this;

  var used = false;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      fn.apply(_this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  return Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(Component, ctx) {
    var message, props, _message;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!(Component.prototype && Component.prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            if (Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {});

          case 6:
            _context.next = 8;
            return Component.getInitialProps(ctx);

          case 8:
            props = _context.sent;

            if (!(ctx.res && isResSent(ctx.res))) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", props);

          case 11:
            if (props) {
              _context.next = 14;
              break;
            }

            _message = "\"".concat(getDisplayName(Component), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 14:
            return _context.abrupt("return", props);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && (0, _typeof2.default)(url) === 'object') {
      (0, _keys.default)(url).forEach(function (key) {
        if (!exports.urlObjectKeys.includes(key)) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "./node_modules/next-server/dist/lib/router/router.js"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/checkPropTypes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/next/node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/source-map/lib/array-set.js":
/*!**************************************************!*\
  !*** ./node_modules/source-map/lib/array-set.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "./node_modules/source-map/lib/base64-vlq.js":
/*!***************************************************!*\
  !*** ./node_modules/source-map/lib/base64-vlq.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "./node_modules/source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "./node_modules/source-map/lib/base64.js":
/*!***********************************************!*\
  !*** ./node_modules/source-map/lib/base64.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "./node_modules/source-map/lib/binary-search.js":
/*!******************************************************!*\
  !*** ./node_modules/source-map/lib/binary-search.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "./node_modules/source-map/lib/mapping-list.js":
/*!*****************************************************!*\
  !*** ./node_modules/source-map/lib/mapping-list.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "./node_modules/source-map/lib/quick-sort.js":
/*!***************************************************!*\
  !*** ./node_modules/source-map/lib/quick-sort.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "./node_modules/source-map/lib/source-map-consumer.js":
/*!************************************************************!*\
  !*** ./node_modules/source-map/lib/source-map-consumer.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "./node_modules/source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "./node_modules/source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "./node_modules/source-map/lib/source-map-generator.js":
/*!*************************************************************!*\
  !*** ./node_modules/source-map/lib/source-map-generator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "./node_modules/source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "./node_modules/source-map/lib/array-set.js").ArraySet;
var MappingList = __webpack_require__(/*! ./mapping-list */ "./node_modules/source-map/lib/mapping-list.js").MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "./node_modules/source-map/lib/source-node.js":
/*!****************************************************!*\
  !*** ./node_modules/source-map/lib/source-node.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "./node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
var util = __webpack_require__(/*! ./util */ "./node_modules/source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "./node_modules/source-map/lib/util.js":
/*!*********************************************!*\
  !*** ./node_modules/source-map/lib/util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ "./node_modules/source-map/source-map.js":
/*!***********************************************!*\
  !*** ./node_modules/source-map/source-map.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "./node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "./node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "./node_modules/source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "./node_modules/terser/dist/bundle.min.js":
/*!************************************************!*\
  !*** ./node_modules/terser/dist/bundle.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer) {!function(e,t){ true?t(exports,__webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js")):undefined}(this,function(e,t){"use strict";function n(e){return e.split("")}function i(e,t){return t.indexOf(e)>=0}function r(e,t){for(var n=0,i=t.length;n<i;++n)if(e(t[n]))return t[n]}function o(e){Object.defineProperty(e.prototype,"stack",{get:function(){var e=new Error(this.message);e.name=this.name;try{throw e}catch(e){return e.stack}}})}function a(e,t){this.message=e,this.defs=t}function s(e,t,n){!0===e&&(e={});var i=e||{};if(n)for(var r in i)v(i,r)&&!v(t,r)&&a.croak("`"+r+"` is not a supported option",t);for(var r in t)v(t,r)&&(i[r]=e&&v(e,r)?e[r]:t[r]);return i}function u(e,t){var n=0;for(var i in t)v(t,i)&&(e[i]=t[i],n++);return n}function c(){}function l(){return!1}function f(){return!0}function p(){return this}function _(){return null}t=t&&t.hasOwnProperty("default")?t.default:t,a.prototype=Object.create(Error.prototype),a.prototype.constructor=a,a.prototype.name="DefaultsError",o(a),a.croak=function(e,t){throw new a(e,t)};var d=function(){function e(e,o,a){var s,u=[],c=[];function l(){var l=o(e[s],s),f=l instanceof r;return f&&(l=l.v),l instanceof n?(l=l.v)instanceof i?c.push.apply(c,a?l.v.slice().reverse():l.v):c.push(l):l!==t&&(l instanceof i?u.push.apply(u,a?l.v.slice().reverse():l.v):u.push(l)),f}if(e instanceof Array)if(a){for(s=e.length;--s>=0&&!l(););u.reverse(),c.reverse()}else for(s=0;s<e.length&&!l();++s);else for(s in e)if(v(e,s)&&l())break;return c.concat(u)}e.at_top=function(e){return new n(e)},e.splice=function(e){return new i(e)},e.last=function(e){return new r(e)};var t=e.skip={};function n(e){this.v=e}function i(e){this.v=e}function r(e){this.v=e}return e}();function m(e,t){e.indexOf(t)<0&&e.push(t)}function E(e,t){return e.replace(/{(.+?)}/g,function(e,n){return t&&t[n]})}function h(e,t){for(var n=e.length;--n>=0;)e[n]===t&&e.splice(n,1)}function D(e,t){if(e.length<2)return e.slice();return function e(n){if(n.length<=1)return n;var i=Math.floor(n.length/2),r=n.slice(0,i),o=n.slice(i);return function(e,n){for(var i=[],r=0,o=0,a=0;r<e.length&&o<n.length;)t(e[r],n[o])<=0?i[a++]=e[r++]:i[a++]=n[o++];return r<e.length&&i.push.apply(i,e.slice(r)),o<n.length&&i.push.apply(i,n.slice(o)),i}(r=e(r),o=e(o))}(e)}function g(e){e instanceof Array||(e=e.split(" "));var t="",n=[];e:for(var i=0;i<e.length;++i){for(var r=0;r<n.length;++r)if(n[r][0].length==e[i].length){n[r].push(e[i]);continue e}n.push([e[i]])}function o(e){return JSON.stringify(e).replace(/[\u2028\u2029]/g,function(e){switch(e){case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}return e})}function a(e){if(1==e.length)return t+="return str === "+o(e[0])+";";t+="switch(str){";for(var n=0;n<e.length;++n)t+="case "+o(e[n])+":";t+="return true}return false;"}if(n.length>3){n.sort(function(e,t){return t.length-e.length}),t+="switch(str.length){";for(i=0;i<n.length;++i){var s=n[i];t+="case "+s[0].length+":",a(s)}t+="}"}else a(e);return new Function("str",t)}function S(e,t){for(var n=e.length;--n>=0;)if(!t(e[n]))return!1;return!0}function A(){this._values=Object.create(null),this._size=0}function v(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function T(e){for(var t,n=e.parent(-1),i=0;t=e.parent(i);i++){if(t instanceof fe&&t.body===n)return!0;if(!(t instanceof _t&&t.expressions[0]===n||"Call"==t.TYPE&&t.expression===n||t instanceof mt&&t.expression===n||t instanceof Et&&t.expression===n||t instanceof At&&t.condition===n||t instanceof St&&t.left===n||t instanceof gt&&t.expression===n))return!1;n=t}}function b(e,t){return!0===e||e instanceof RegExp&&e.test(t)}A.prototype={set:function(e,t){return this.has(e)||++this._size,this._values["$"+e]=t,this},add:function(e,t){return this.has(e)?this.get(e).push(t):this.set(e,[t]),this},get:function(e){return this._values["$"+e]},del:function(e){return this.has(e)&&(--this._size,delete this._values["$"+e]),this},has:function(e){return"$"+e in this._values},each:function(e){for(var t in this._values)e(this._values[t],t.substr(1))},size:function(){return this._size},map:function(e){var t=[];for(var n in this._values)t.push(e(this._values[n],n.substr(1)));return t},clone:function(){var e=new A;for(var t in this._values)e._values[t]=this._values[t];return e._size=this._size,e},toObject:function(){return this._values}},A.fromObject=function(e){var t=new A;return t._size=u(t._values,e),t};var y="break case catch class const continue debugger default delete do else export extends finally for function if in instanceof let new return switch throw try typeof var void while with",C="false null true",O="enum implements import interface package private protected public static super this "+C+" "+y,F="return new delete throw else case yield await";y=g(y),O=g(O),F=g(F),C=g(C);var R=g(n("+-*&%=<>!?|~^")),M=/[0-9a-f]/i,N=/^0x[0-9a-f]+$/i,w=/^0[0-7]+$/,x=/^0o[0-7]+$/i,k=/^0b[01]+$/i,I=/^\d*\.?\d*(?:e[+-]?\d*(?:\d\.?|\.?\d)\d*)?$/i,L=g(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","**","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","**=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),V=g(n("  \n\r\t\f\v​           \u2028\u2029  　\ufeff")),P=g(n("\n\r\u2028\u2029")),B=g(n(";]),:")),K=g(n("[{(,;:")),U=g(n("[]{}(),;:")),G={ID_Start:/[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/};function H(e,t){var n=e.charAt(t);if(X(n)){var i=e.charAt(t+1);if(z(i))return n+i}if(z(n)){var r=e.charAt(t-1);if(X(r))return r+n}return n}function X(e){return"string"==typeof e&&(e=e.charCodeAt(0)),e>=55296&&e<=56319}function z(e){return"string"==typeof e&&(e=e.charCodeAt(0)),e>=56320&&e<=57343}function W(e){return e>=48&&e<=57}function Y(e){return"string"==typeof e&&!O(e)}function q(e){var t=e.charCodeAt(0);return G.ID_Start.test(e)||36==t||95==t}function $(e){var t=e.charCodeAt(0);return G.ID_Continue.test(e)||36==t||95==t||8204==t||8205==t}function j(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)}function Z(e,t,n,i,r){this.message=e,this.filename=t,this.line=n,this.col=i,this.pos=r}function Q(e,t,n,i,r){throw new Z(e,t,n,i,r)}function J(e,t,n){return e.type==t&&(null==n||e.value==n)}Z.prototype=Object.create(Error.prototype),Z.prototype.constructor=Z,Z.prototype.name="SyntaxError",o(Z);var ee={};function te(e,t,n,i){var r={text:e,filename:t,pos:0,tokpos:0,line:1,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,brace_counter:0,template_braces:[],comments_before:[],directives:{},directive_stack:[]};function o(){return H(r.text,r.pos)}function a(e,t){var n=H(r.text,r.pos++);if(e&&!n)throw ee;return P(n)?(r.newline_before=r.newline_before||!t,++r.line,r.col=0,t||"\r"!=n||"\n"!=o()||(++r.pos,n="\n")):(n.length>1&&(++r.pos,++r.col),++r.col),n}function s(e){for(;e-- >0;)a()}function u(e){return r.text.substr(r.pos,e.length)==e}function c(e,t){var n=r.text.indexOf(e,r.pos);if(t&&-1==n)throw ee;return n}function l(){r.tokline=r.line,r.tokcol=r.col,r.tokpos=r.pos}var f=!1,p=null;function _(n,i,o){r.regex_allowed="operator"==n&&!ie(i)||"keyword"==n&&F(i)||"punc"==n&&K(i)||"arrow"==n,"punc"==n&&"."==i?f=!0:o||(f=!1);var a={type:n,value:i,line:r.tokline,col:r.tokcol,pos:r.tokpos,endline:r.line,endcol:r.col,endpos:r.pos,nlb:r.newline_before,file:t};return/^(?:num|string|regexp)$/i.test(n)&&(a.raw=e.substring(a.pos,a.endpos)),o||(a.comments_before=r.comments_before,a.comments_after=r.comments_before=[]),r.newline_before=!1,a=new ce(a),o||(p=a),a}function d(){for(;V(o());)a()}function m(e){Q(e,t,r.tokline,r.tokcol,r.tokpos)}function E(e){var t=!1,n=!1,i=!1,r="."==e,s=function(e){for(var t,n="",i=0;(t=o())&&e(t,i++);)n+=a();return n}(function(o,a){switch(o.charCodeAt(0)){case 98:case 66:return i=!0;case 111:case 79:case 120:case 88:return!i&&(i=!0);case 101:case 69:return!!i||!t&&(t=n=!0);case 45:return n||0==a&&!e;case 43:return n;case n=!1,46:return!(r||i||t)&&(r=!0)}return M.test(o)});e&&(s=e+s),w.test(s)&&j.has_directive("use strict")&&m("Legacy octal literals are not allowed in strict mode");var u=function(e){if(N.test(e))return parseInt(e.substr(2),16);if(w.test(e))return parseInt(e.substr(1),8);if(x.test(e))return parseInt(e.substr(2),8);if(k.test(e))return parseInt(e.substr(2),2);if(I.test(e))return parseFloat(e);var t=parseFloat(e);return t==e?t:void 0}(s);if(!isNaN(u))return _("num",u);m("Invalid syntax: "+s)}function h(e,t,n){var i,s=a(!0,e);switch(s.charCodeAt(0)){case 110:return"\n";case 114:return"\r";case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 120:return String.fromCharCode(D(2,t));case 117:if("{"==o()){for(a(!0),"}"===o()&&m("Expecting hex-character between {}");"0"==o();)a(!0);var u,l=c("}",!0)-r.pos;return(l>6||(u=D(l,t))>1114111)&&m("Unicode reference out of bounds"),a(!0),(i=u)>65535?(i-=65536,String.fromCharCode(55296+(i>>10))+String.fromCharCode(i%1024+56320)):String.fromCharCode(i)}return String.fromCharCode(D(4,t));case 10:return"";case 13:if("\n"==o())return a(!0,e),""}return s>="0"&&s<="7"?(n&&t&&m("Octal escape sequences are not allowed in template strings"),function(e,t){var n=o();n>="0"&&n<="7"&&(e+=a(!0))[0]<="3"&&(n=o())>="0"&&n<="7"&&(e+=a(!0));if("0"===e)return"\0";e.length>0&&j.has_directive("use strict")&&t&&m("Legacy octal escape sequences are not allowed in strict mode");return String.fromCharCode(parseInt(e,8))}(s,t)):s}function D(e,t){for(var n=0;e>0;--e){if(!t&&isNaN(parseInt(o(),16)))return parseInt(n,16)||"";var i=a(!0);isNaN(parseInt(i,16))&&m("Invalid hex-character pattern in string"),n+=i}return parseInt(n,16)}var g=Y("Unterminated string constant",function(e){for(var t=a(),n="";;){var i=a(!0,!0);if("\\"==i)i=h(!0,!0);else if(P(i))m("Unterminated string constant");else if(i==t)break;n+=i}var r=_("string",n);return r.quote=e,r}),S=Y("Unterminated template",function(e){e&&r.template_braces.push(r.brace_counter);var t,n,i="",s="";for(a(!0,!0);"`"!=(t=a(!0,!0));){if("\r"==t)"\n"==o()&&++r.pos,t="\n";else if("$"==t&&"{"==o())return a(!0,!0),r.brace_counter++,(n=_(e?"template_head":"template_substitution",i)).begin=e,n.raw=s,n.end=!1,n;if(s+=t,"\\"==t){var u=r.pos;t=h(!0,!(p&&("name"===p.type||"punc"===p.type&&(")"===p.value||"]"===p.value))),!0),s+=r.text.substr(u,r.pos-u)}i+=t}return r.template_braces.pop(),(n=_(e?"template_head":"template_substitution",i)).begin=e,n.raw=s,n.end=!0,n});function A(e){var t,n=r.regex_allowed,i=function(){for(var e=r.text,t=r.pos,n=r.text.length;t<n;++t){var i=e[t];if(P(i))return t}return-1}();return-1==i?(t=r.text.substr(r.pos),r.pos=r.text.length):(t=r.text.substring(r.pos,i),r.pos=i),r.col=r.tokcol+(r.pos-r.tokpos),r.comments_before.push(_(e,t,!0)),r.regex_allowed=n,j}var v=Y("Unterminated multiline comment",function(){var e=r.regex_allowed,t=c("*/",!0),n=r.text.substring(r.pos,t).replace(/\r\n|\r|\u2028|\u2029/g,"\n");return s(function(e){for(var t=0,n=0;n<e.length;n++)X(e.charCodeAt(n))&&z(e.charCodeAt(n+1))&&(t++,n++);return e.length-t}(n)+2),r.comments_before.push(_("comment2",n,!0)),r.newline_before=r.newline_before||n.indexOf("\n")>=0,r.regex_allowed=e,j}),T=Y("Unterminated identifier name",function(){var e,t="",n=!1,i=function(){return n=!0,a(),"u"!==o()&&m("Expecting UnicodeEscapeSequence -- uXXXX or u{XXXX}"),h(!1,!0)};if("\\"===(t=o()))q(t=i())||m("First identifier char is an invalid identifier char");else{if(!q(t))return"";a()}for(;null!=(e=o());){if("\\"===(e=o()))$(e=i())||m("Invalid escaped identifier char");else{if(!$(e))break;a()}t+=e}return O(t)&&n&&m("Escaped characters are not allowed in keywords"),t}),b=Y("Unterminated regular expression",function(e){for(var t,n=!1,i=!1;t=a(!0);)if(P(t))m("Unexpected line terminator");else if(n)e+="\\"+t,n=!1;else if("["==t)i=!0,e+=t;else if("]"==t&&i)i=!1,e+=t;else{if("/"==t&&!i)break;"\\"==t?n=!0:e+=t}var r=T();try{var o=new RegExp(e,r);return o.raw_source="/"+e+"/"+r,_("regexp",o)}catch(e){m(e.message)}});function B(e){return _("operator",function e(t){if(!o())return t;var n=t+o();return L(n)?(a(),e(n)):t}(e||a()))}function G(){switch(a(),o()){case"/":return a(),A("comment1");case"*":return a(),v()}return r.regex_allowed?b(""):B("/")}function Y(e,t){return function(n){try{return t(n)}catch(t){if(t!==ee)throw t;m(e)}}}function j(e){if(null!=e)return b(e);for(i&&0==r.pos&&u("#!")&&(l(),s(2),A("comment5"));;){if(d(),l(),n){if(u("\x3c!--")){s(4),A("comment3");continue}if(u("--\x3e")&&r.newline_before){s(3),A("comment4");continue}}var t=o();if(!t)return _("eof");var c=t.charCodeAt(0);switch(c){case 34:case 39:return g(t);case 46:return a(),W(o().charCodeAt(0))?E("."):"."===o()?(a(),a(),_("expand","...")):_("punc",".");case 47:var p=G();if(p===j)continue;return p;case 61:return a(),">"===o()?(a(),_("arrow","=>")):B("=");case 96:return S(!0);case 123:r.brace_counter++;break;case 125:if(r.brace_counter--,r.template_braces.length>0&&r.template_braces[r.template_braces.length-1]===r.brace_counter)return S(!1)}if(W(c))return E();if(U(t))return _("punc",a());if(R(t))return B();if(92==c||q(t))return h=void 0,h=T(),f?_("name",h):C(h)?_("atom",h):y(h)?L(h)?_("operator",h):_("keyword",h):_("name",h);break}var h;m("Unexpected character '"+t+"'")}return j.next=a,j.peek=o,j.context=function(e){return e&&(r=e),r},j.add_directive=function(e){r.directive_stack[r.directive_stack.length-1].push(e),void 0===r.directives[e]?r.directives[e]=1:r.directives[e]++},j.push_directives_stack=function(){r.directive_stack.push([])},j.pop_directives_stack=function(){for(var e=r.directive_stack[r.directive_stack.length-1],t=0;t<e.length;t++)r.directives[e[t]]--;r.directive_stack.pop()},j.has_directive=function(e){return r.directives[e]>0},j}var ne=g(["typeof","void","delete","--","++","!","~","-","+"]),ie=g(["--","++"]),re=g(["=","+=","-=","/=","*=","**=","%=",">>=","<<=",">>>=","|=","^=","&="]),oe=function(e,t){for(var n=0;n<e.length;++n)for(var i=e[n],r=0;r<i.length;++r)t[i[r]]=n+1;return t}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"],["**"]],{}),ae=g(["atom","num","string","regexp","name"]);function se(e,t){t=s(t,{bare_returns:!1,ecma:8,expression:!1,filename:null,html5_comments:!0,module:!1,shebang:!0,strict:!1,toplevel:null},!0);var n={input:"string"==typeof e?te(e,t.filename,t.html5_comments,t.shebang):e,token:null,prev:null,peeked:null,in_function:0,in_async:-1,in_generator:-1,in_directives:!0,in_loop:0,labels:[]};function i(e,t){return J(n.token,e,t)}function o(){return n.peeked||(n.peeked=n.input())}function a(){return n.prev=n.token,n.peeked||o(),n.token=n.peeked,n.peeked=null,n.in_directives=n.in_directives&&("string"==n.token.type||i("punc",";")),n.token}function u(){return n.prev}function c(e,t,i,r){var o=n.input.context();Q(e,o.filename,null!=t?t:o.tokline,null!=i?i:o.tokcol,null!=r?r:o.tokpos)}function l(e,t){c(t,e.line,e.col)}function f(e){null==e&&(e=n.token),l(e,"Unexpected token: "+e.type+" ("+e.value+")")}function p(e,t){if(i(e,t))return a();l(n.token,"Unexpected token "+n.token.type+" «"+n.token.value+"», expected "+e+" «"+t+"»")}function _(e){return p("punc",e)}function d(e){return e.nlb||!S(e.comments_before,function(e){return!e.nlb})}function m(){return!t.strict&&(i("eof")||i("punc","}")||d(n.token))}function E(){return n.in_generator===n.in_function}function h(){return n.in_async===n.in_function}function D(e){i("punc",";")?a():e||m()||f()}function g(){_("(");var e=Nt(!0);return _(")"),e}function A(e){return function(){var t=n.token,i=e.apply(null,arguments),r=u();return i.start=t,i.end=r,i}}function T(){(i("operator","/")||i("operator","/="))&&(n.peeked=null,n.token=n.input(n.token.value.substr(1)))}n.token=a();var b=A(function(e,s,E){switch(T(),n.token.type){case"string":if(n.in_directives){var S=o();-1==n.token.raw.indexOf("\\")&&(J(S,"punc",";")||J(S,"punc","}")||d(S)||J(S,"eof"))?n.input.add_directive(n.token.value):n.in_directives=!1}var A=n.in_directives,v=y();return A&&v.body instanceof on?new _e(v.body):v;case"template_head":case"num":case"regexp":case"operator":case"atom":return y();case"name":if("async"==n.token.value&&J(o(),"keyword","function"))return a(),a(),s&&c("functions are not allowed as the body of a loop"),R(Ve,!1,!0,e);if("import"==n.token.value&&!J(o(),"punc","(")){a();var O=function(){var e,t,r=u();i("name")&&(e=me(qt));i("punc",",")&&a();((t=se(!0))||e)&&p("name","from");var o=n.token;"string"!==o.type&&f();return a(),new ut({start:r,imported_name:e,imported_names:t,module_name:new on({start:o,value:o.value,quote:o.quote,end:o}),end:n.token})}();return D(),O}return J(o(),"punc",":")?function(){var e=me(jt);"await"===e.name&&h()&&l(n.prev,"await cannot be used as label inside async function");r(function(t){return t.name==e.name},n.labels)&&c("Label "+e.name+" defined twice");_(":"),n.labels.push(e);var t=b();n.labels.pop(),t instanceof ve||e.references.forEach(function(t){t instanceof qe&&(t=t.label.start,c("Continue label `"+e.name+"` refers to non-IterationStatement.",t.line,t.col,t.pos))});return new Ae({body:t,label:e})}():y();case"punc":switch(n.token.value){case"{":return new De({start:n.token,body:k(),end:u()});case"[":case"(":return y();case";":return n.in_directives=!1,a(),new ge;default:f()}case"keyword":switch(n.token.value){case"break":return a(),C(Ye);case"continue":return a(),C(qe);case"debugger":return a(),D(),new pe;case"do":a();var F=kt(b);p("keyword","while");var M=g();return D(!0),new be({body:F,condition:M});case"while":return a(),new ye({condition:g(),body:kt(function(){return b(!1,!0)})});case"for":return a(),function(){var e="`for await` invalid in this context",t=n.token;"name"==t.type&&"await"==t.value?(h()||l(t,e),a()):t=!1;_("(");var r=null;if(i("punc",";"))t&&l(t,e);else{r=i("keyword","var")?(a(),V(!0)):i("keyword","let")?(a(),P(!0)):i("keyword","const")?(a(),K(!0)):Nt(!0,!0);var o=i("operator","in"),s=i("name","of");if(t&&!s&&l(t,e),o||s)return r instanceof it?r.definitions.length>1&&l(r.start,"Only one variable declaration allowed in for..in loop"):We(r)||(r=Ze(r))instanceof Pe||l(r.start,"Invalid left-hand side in for..in loop"),a(),o?function(e){var t=Nt(!0);return _(")"),new Oe({init:e,object:t,body:kt(function(){return b(!1,!0)})})}(r):function(e,t){var n=e instanceof it?e.definitions[0].name:null,i=Nt(!0);return _(")"),new Fe({await:t,init:e,name:n,object:i,body:kt(function(){return b(!1,!0)})})}(r,!!t)}return function(e){_(";");var t=i("punc",";")?null:Nt(!0);_(";");var n=i("punc",")")?null:Nt(!0);return _(")"),new Ce({init:e,condition:t,step:n,body:kt(function(){return b(!1,!0)})})}(r)}();case"class":return a(),s&&c("classes are not allowed as the body of a loop"),E&&c("classes are not allowed as the body of an if"),$(wt);case"function":return a(),s&&c("functions are not allowed as the body of a loop"),R(Ve,!1,!1,e);case"if":return a(),function(){var e=g(),t=b(!1,!1,!0),n=null;i("keyword","else")&&(a(),n=b(!1,!1,!0));return new $e({condition:e,body:t,alternative:n})}();case"return":0!=n.in_function||t.bare_returns||c("'return' outside of function"),a();var w=null;return i("punc",";")?a():m()||(w=Nt(!0),D()),new Xe({value:w});case"switch":return a(),new je({expression:g(),body:kt(I)});case"throw":a(),d(n.token)&&c("Illegal newline after 'throw'");w=Nt(!0);return D(),new ze({value:w});case"try":return a(),function(){var e=k(),t=null,r=null;if(i("keyword","catch")){var o=n.token;if(a(),i("punc","{"))var s=null;else{_("(");var s=N(void 0,Yt);_(")")}t=new tt({start:o,argname:s,body:k(),end:u()})}if(i("keyword","finally")){var o=n.token;a(),r=new nt({start:o,body:k(),end:u()})}t||r||c("Missing catch/finally blocks");return new et({body:e,bcatch:t,bfinally:r})}();case"var":a();O=V();return D(),O;case"let":a();O=P();return D(),O;case"const":a();O=K();return D(),O;case"with":return n.input.has_directive("use strict")&&c("Strict mode may not include a with statement"),a(),new Re({expression:g(),body:b()});case"export":if(!J(o(),"punc","(")){a();O=function(){var e,t,r,s,c,l=n.token;if(i("keyword","default"))e=!0,a();else if(t=se(!1)){if(i("name","from")){a();var p=n.token;return"string"!==p.type&&f(),a(),new ct({start:l,is_default:e,exported_names:t,module_name:new on({start:p,value:p.value,quote:p.quote,end:p}),end:u()})}return new ct({start:l,is_default:e,exported_names:t,end:u()})}i("punc","{")||e&&(i("keyword","class")||i("keyword","function"))&&J(o(),"punc")?(s=Nt(!1),D()):(r=b(e))instanceof it&&e?f(r.start):r instanceof it||r instanceof xe||r instanceof wt?c=r:r instanceof de?s=r.body:f(r.start);return new ct({start:l,is_default:e,exported_value:s,exported_definition:c,end:u()})}();return i("punc",";")&&D(),O}}}f()});function y(e){return new de({body:(e=Nt(!0),D(),e)})}function C(e){var t,i=null;m()||(i=me(en,!0)),null!=i?((t=r(function(e){return e.name==i.name},n.labels))||c("Undefined label "+i.name),i.thedef=t):0==n.in_loop&&c(e.TYPE+" not inside a loop or switch"),D();var o=new e({label:i});return t&&t.references.push(o),o}var F=function(e,t,r){d(n.token)&&c("Unexpected newline before arrow (=>)"),p("arrow","=>");var o=x(i("punc","{"),!1,r),a=o instanceof Array&&o.length?o[o.length-1].end:o instanceof Array?e:o.end;return new Le({start:e,end:a,async:r,argnames:t,body:o})},R=function(e,t,n,r){var o=e===Ve,s=i("operator","*");s&&a();var c=i("name")?me(o?Gt:Xt):null;o&&!c&&(r?e=Ie:f()),!c||e===ke||c instanceof Lt||f(u());var l=[],p=x(!0,s||t,n,c,l);return new e({start:l.start,end:p.end,is_generator:s,async:n,name:c,argnames:l,body:p})};function M(e,t){var n={},i=!1,r=!1,o=!1,a=!!t,s={add_parameter:function(t){if(void 0!==n["$"+t.value])!1===i&&(i=t),s.check_strict();else if(n["$"+t.value]=!0,e)switch(t.value){case"arguments":case"eval":case"yield":a&&l(t,"Unexpected "+t.value+" identifier as parameter inside strict mode");break;default:O(t.value)&&f()}},mark_default_assignment:function(e){!1===r&&(r=e)},mark_spread:function(e){!1===o&&(o=e)},mark_strict_mode:function(){a=!0},is_strict:function(){return!1!==r||!1!==o||a},check_strict:function(){s.is_strict()&&!1!==i&&l(i,"Parameter "+i.value+" was used already")}};return s}function N(e,t){var r,o=!1;return void 0===e&&(e=M(!0,n.input.has_directive("use strict"))),i("expand","...")&&(o=n.token,e.mark_spread(n.token),a()),r=w(e,t),i("operator","=")&&!1===o&&(e.mark_default_assignment(n.token),a(),r=new Tt({start:r.start,left:r,operator:"=",right:Nt(!1),end:n.token})),!1!==o&&(i("punc",")")||f(),r=new we({start:o,expression:r,end:o})),e.check_strict(),r}function w(e,t){var r,s=[],l=!0,p=!1,d=n.token;if(void 0===e&&(e=M(!1,n.input.has_directive("use strict"))),t=void 0===t?Ut:t,i("punc","[")){for(a();!i("punc","]");){if(l?l=!1:_(","),i("expand","...")&&(p=!0,r=n.token,e.mark_spread(n.token),a()),i("punc"))switch(n.token.value){case",":s.push(new pn({start:n.token,end:n.token}));continue;case"]":break;case"[":case"{":s.push(w(e,t));break;default:f()}else i("name")?(e.add_parameter(n.token),s.push(me(t))):c("Invalid function parameter");i("operator","=")&&!1===p&&(e.mark_default_assignment(n.token),a(),s[s.length-1]=new Tt({start:s[s.length-1].start,left:s[s.length-1],operator:"=",right:Nt(!1),end:n.token})),p&&(i("punc","]")||c("Rest element must be last element"),s[s.length-1]=new we({start:r,expression:s[s.length-1],end:r}))}return _("]"),e.check_strict(),new Pe({start:d,names:s,is_array:!0,end:u()})}if(i("punc","{")){for(a();!i("punc","}");){if(l?l=!1:_(","),i("expand","...")&&(p=!0,r=n.token,e.mark_spread(n.token),a()),i("name")&&(J(o(),"punc")||J(o(),"operator"))&&-1!==[",","}","="].indexOf(o().value)){e.add_parameter(n.token);var m=u(),E=me(t);p?s.push(new we({start:r,expression:E,end:E.end})):s.push(new Ot({start:m,key:E.name,value:E,end:E.end}))}else{if(i("punc","}"))continue;var h=n.token,D=ue();null===D?f(u()):"name"!==u().type||i("punc",":")?(_(":"),s.push(new Ot({start:h,quote:h.quote,key:D,value:w(e,t),end:u()}))):s.push(new Ot({start:u(),key:D,value:new t({start:u(),name:D,end:u()}),end:u()}))}p?i("punc","}")||c("Rest element must be last element"):i("operator","=")&&(e.mark_default_assignment(n.token),a(),s[s.length-1].value=new Tt({start:s[s.length-1].value.start,left:s[s.length-1].value,operator:"=",right:Nt(!1),end:n.token}))}return _("}"),e.check_strict(),new Pe({start:d,names:s,is_array:!1,end:u()})}if(i("name"))return e.add_parameter(n.token),me(t);c("Invalid function parameter")}function x(e,r,o,s,u){var c=n.in_loop,l=n.labels,p=n.in_generator,d=n.in_async;if(++n.in_function,r&&(n.in_generator=n.in_function),o&&(n.in_async=n.in_function),u&&function(e){var r=M(!0,n.input.has_directive("use strict"));for(_("(");!i("punc",")");){var o=N(r);if(e.push(o),i("punc",")")||(_(","),i("punc",")")&&t.ecma<8&&f()),o instanceof we)break}a()}(u),e&&(n.in_directives=!0),n.in_loop=0,n.labels=[],e){n.input.push_directives_stack();var m=k();s&&fe(s),u&&u.forEach(fe),n.input.pop_directives_stack()}else m=Nt(!1);return--n.in_function,n.in_loop=c,n.labels=l,n.in_generator=p,n.in_async=d,m}function k(){_("{");for(var e=[];!i("punc","}");)i("eof")&&f(),e.push(b());return a(),e}function I(){_("{");for(var e,t=[],r=null,o=null;!i("punc","}");)i("eof")&&f(),i("keyword","case")?(o&&(o.end=u()),r=[],o=new Je({start:(e=n.token,a(),e),expression:Nt(!0),body:r}),t.push(o),_(":")):i("keyword","default")?(o&&(o.end=u()),r=[],o=new Qe({start:(e=n.token,a(),_(":"),e),body:r}),t.push(o)):(r||f(),r.push(b()));return o&&(o.end=u()),a(),t}function L(e,t){for(var r,o=[];;){var s="var"===t?Vt:"const"===t?Bt:"let"===t?Kt:null;if(i("punc","{")||i("punc","[")?r=new lt({start:n.token,name:w(void 0,s),value:i("operator","=")?(p("operator","="),Nt(!1,e)):null,end:u()}):"import"==(r=new lt({start:n.token,name:me(s),value:i("operator","=")?(a(),Nt(!1,e)):e||"const"!==t?null:c("Missing initializer in const declaration"),end:u()})).name.name&&c("Unexpected token: import"),o.push(r),!i("punc",","))break;a()}return o}var V=function(e){return new rt({start:u(),definitions:L(e,"var"),end:u()})},P=function(e){return new ot({start:u(),definitions:L(e,"let"),end:u()})},K=function(e){return new at({start:u(),definitions:L(e,"const"),end:u()})};function U(){var e,t=n.token;switch(t.type){case"name":e=ce(Zt);break;case"num":e=new an({start:t,end:t,value:t.value});break;case"string":e=new on({start:t,end:t,value:t.value,quote:t.quote});break;case"regexp":e=new sn({start:t,end:t,value:t.value});break;case"atom":switch(t.value){case"false":e=new mn({start:t,end:t});break;case"true":e=new En({start:t,end:t});break;case"null":e=new cn({start:t,end:t})}}return a(),e}function G(e,t,n,i){var r=function(e,t){return t?new Tt({start:e.start,left:e,operator:"=",right:t,end:t.end}):e};return e instanceof yt?r(new Pe({start:e.start,end:e.end,is_array:!1,names:e.properties.map(G)}),i):e instanceof Ot?(e.value=G(e.value,0,[e.key]),r(e,i)):e instanceof pn?e:e instanceof Pe?(e.names=e.names.map(G),r(e,i)):e instanceof Zt?r(new Ut({name:e.name,start:e.start,end:e.end}),i):e instanceof we?(e.expression=G(e.expression),r(e,i)):e instanceof bt?r(new Pe({start:e.start,end:e.end,is_array:!0,names:e.elements.map(G)}),i):e instanceof vt?r(G(e.left,void 0,void 0,e.right),i):e instanceof Tt?(e.left=G(e.left,0,[e.left]),e):void c("Invalid function parameter",e.start.line,e.start.col)}var H=function(e,r){if(i("operator","new"))return function(e){var r=n.token;if(p("operator","new"),i("punc","."))return a(),p("name","target"),he(new It({start:r,end:u()}),e);var o,s=H(!1);i("punc","(")?(a(),o=z(")",t.ecma>=8)):o=[];var c=new pt({start:r,expression:s,args:o,end:u()});return Ee(c),he(c,e)}(e);var s,c=n.token,l=i("name","async")&&"["!=(s=o()).value&&"arrow"!=s.type&&U();if(i("punc")){switch(n.token.value){case"(":if(l&&!e)break;var d=function(e,r){var o,s,c,l=[];for(_("(");!i("punc",")");)o&&f(o),i("expand","...")?(o=n.token,r&&(s=n.token),a(),l.push(new we({start:u(),expression:Nt(),end:n.token}))):l.push(Nt()),i("punc",")")||(_(","),i("punc",")")&&(t.ecma<8&&f(),c=u(),r&&(s=c)));return _(")"),e&&i("arrow","=>")?o&&c&&f(c):s&&f(s),l}(r,!l);if(r&&i("arrow","=>"))return F(c,d.map(G),!!l);var m=l?new ft({expression:l,args:d}):1==d.length?d[0]:new _t({expressions:d});if(m.start){var E=c.comments_before.length;if([].unshift.apply(m.start.comments_before,c.comments_before),c.comments_before=m.start.comments_before,c.comments_before_length=E,0==E&&c.comments_before.length>0){var h=c.comments_before[0];h.nlb||(h.nlb=c.nlb,c.nlb=!1)}c.comments_after=m.start.comments_after}m.start=c;var D=u();return m.end&&(D.comments_before=m.end.comments_before,[].push.apply(m.end.comments_after,D.comments_after),D.comments_after=m.end.comments_after),m.end=D,m instanceof ft&&Ee(m),he(m,e);case"[":return he(W(),e);case"{":return he(q(),e)}l||f()}if(r&&i("name")&&J(o(),"arrow")){var g=new Ut({name:n.token.value,start:c,end:c});return a(),F(c,[g],!!l)}if(i("keyword","function")){a();var S=R(Ie,!1,!!l);return S.start=c,S.end=u(),he(S,e)}if(l)return he(l,e);if(i("keyword","class")){a();var A=$(xt);return A.start=c,A.end=u(),he(A,e)}return i("template_head")?he(X(!1),e):ae(n.token.type)?he(U(),e):void f()};function X(e){var t=[],i=n.token;for(t.push(new Ue({start:n.token,raw:n.token.raw,value:n.token.value,end:n.token}));!1===n.token.end;)a(),T(),t.push(Nt(!0)),J("template_substitution")||f(),t.push(new Ue({start:n.token,raw:n.token.raw,value:n.token.value,end:n.token}));return a(),new Ke({start:i,segments:t,end:n.token})}function z(e,t,r){for(var o=!0,s=[];!i("punc",e)&&(o?o=!1:_(","),!t||!i("punc",e));)i("punc",",")&&r?s.push(new pn({start:n.token,end:n.token})):i("expand","...")?(a(),s.push(new we({start:u(),expression:Nt(),end:n.token}))):s.push(Nt(!1));return a(),s}var W=A(function(){return _("["),new bt({elements:z("]",!t.strict,!0)})}),Y=A(function(e,t){return R(ke,e,t)}),q=A(function(){var e=n.token,r=!0,o=[];for(_("{");!i("punc","}")&&(r?r=!1:_(","),t.strict||!i("punc","}"));)if("expand"!=(e=n.token).type){var s,c=ue();if(i("punc",":"))null===c?f(u()):(a(),s=Nt(!1));else{var l=j(c,e);if(l){o.push(l);continue}s=new Zt({start:u(),name:c,end:u()})}i("operator","=")&&(a(),s=new vt({start:e,left:s,operator:"=",right:Nt(!1),end:u()})),o.push(new Ot({start:e,quote:e.quote,key:c instanceof le?c:""+c,value:s,end:u()}))}else a(),o.push(new we({start:e,expression:Nt(!1),end:u()}));return a(),new yt({properties:o})});function $(e){var t,r,o,s,c=[];for(n.input.push_directives_stack(),n.input.add_directive("use strict"),"name"==n.token.type&&"extends"!=n.token.value&&(o=me(e===wt?zt:Wt)),e!==wt||o||f(),"extends"==n.token.value&&(a(),s=Nt(!0)),_("{"),i("punc",";")&&a();!i("punc","}");)t=n.token,(r=j(ue(),t,!0))||f(),c.push(r),i("punc",";")&&a();return n.input.pop_directives_stack(),a(),new e({start:t,name:o,extends:s,properties:c,end:u()})}function j(e,t,r){var o=function(e,t){return"string"==typeof e||"number"==typeof e?new Ht({start:t,name:""+e,end:u()}):(null===e&&f(),e)},a=!1,s=!1,c=!1,l=t;if(r&&"static"===e&&!i("punc","(")&&(s=!0,l=n.token,e=ue()),"async"!==e||i("punc","(")||i("punc",",")||i("punc","}")||(a=!0,l=n.token,e=ue()),null===e&&(c=!0,l=n.token,null===(e=ue())&&f()),i("punc","("))return e=o(e,t),new Mt({start:t,static:s,is_generator:c,async:a,key:e,quote:e instanceof Ht?l.quote:void 0,value:Y(c,a),end:u()});if(l=n.token,"get"==e){if(!i("punc")||i("punc","["))return e=o(ue(),t),new Rt({start:t,static:s,key:e,quote:e instanceof Ht?l.quote:void 0,value:Y(),end:u()})}else if("set"==e&&(!i("punc")||i("punc","[")))return e=o(ue(),t),new Ft({start:t,static:s,key:e,quote:e instanceof Ht?l.quote:void 0,value:Y(),end:u()})}function Z(e){function t(e){return new e({name:ue(),start:u(),end:u()})}var r,o,s=e?$t:Jt,c=e?qt:Qt,l=n.token;return e?r=t(s):o=t(c),i("name","as")?(a(),e?o=t(c):r=t(s)):e?o=new c(r):r=new s(o),new st({start:l,foreign_name:r,name:o,end:u()})}function ee(e,t){var i,r=e?$t:Jt,o=e?qt:Qt,a=n.token,s=u();return t=t||new o({name:"*",start:a,end:s}),i=new r({name:"*",start:a,end:s}),new st({start:a,foreign_name:i,name:t,end:s})}function se(e){var t;if(i("punc","{")){for(a(),t=[];!i("punc","}");)t.push(Z(e)),i("punc",",")&&a();a()}else if(i("operator","*")){var n;a(),e&&i("name","as")&&(a(),n=me(e?qt:Jt)),t=[ee(e,n)]}return t}function ue(){var e=n.token;switch(e.type){case"punc":if("["===e.value){a();var t=Nt(!1);return _("]"),t}f(e);case"operator":if("*"===e.value)return a(),null;-1===["delete","in","instanceof","new","typeof","void"].indexOf(e.value)&&f(e);case"name":"yield"==e.value&&(E()?l(e,"Yield cannot be used as identifier inside generators"):J(o(),"punc",":")||J(o(),"punc","(")||!n.input.has_directive("use strict")||l(e,"Unexpected yield identifier inside strict mode"));case"string":case"num":case"keyword":case"atom":return a(),e.value;default:f(e)}}function ce(e){var t=n.token.value;return new("this"==t?tn:"super"==t?nn:e)({name:String(t),start:n.token,end:n.token})}function fe(e){var t=e.name;E()&&"yield"==t&&l(e.start,"Yield cannot be used as identifier inside generators"),n.input.has_directive("use strict")&&("yield"==t&&l(e.start,"Unexpected yield identifier inside strict mode"),e instanceof Lt&&("arguments"==t||"eval"==t)&&l(e.start,"Unexpected "+t+" in strict mode"))}function me(e,t){if(!i("name"))return t||c("Name expected"),null;var n=ce(e);return fe(n),a(),n}function Ee(e){for(var t=e.start,n=t.comments_before,i=v(t,"comments_before_length")?t.comments_before_length:n.length;--i>=0;){var r=n[i];if(/[@#]__PURE__/.test(r.value)){e.pure=r;break}}}var he=function(e,t){var r,o=e.start;if(i("punc","."))return a(),he(new mt({start:o,expression:e,property:(r=n.token,"name"!=r.type&&f(),a(),r.value),end:u()}),t);if(i("punc","[")){a();var s=Nt(!0);return _("]"),he(new Et({start:o,expression:e,property:s,end:u()}),t)}if(t&&i("punc","(")){a();var c=new ft({start:o,expression:e,args:Se(),end:u()});return Ee(c),he(c,!0)}return i("template_head")?he(new Be({start:o,prefix:e,template_string:X(),end:u()}),t):e},Se=A(function(){for(var e=[];!i("punc",")");)i("expand","...")?(a(),e.push(new we({start:u(),expression:Nt(!1),end:u()}))):e.push(Nt(!1)),i("punc",")")||(_(","),i("punc",")")&&t.ecma<8&&f());return a(),e}),Te=function(e,t){var r=n.token;if("name"==r.type&&"await"==r.value){if(h())return a(),h()||c("Unexpected await expression outside async function",n.prev.line,n.prev.col,n.prev.pos),new hn({start:u(),end:n.token,expression:Te(!0)});n.input.has_directive("use strict")&&l(n.token,"Unexpected await identifier inside strict mode")}if(i("operator")&&ne(r.value)){a(),T();var o=Me(Dt,r,Te(e));return o.start=r,o.end=u(),o}for(var s=H(e,t);i("operator")&&ie(n.token.value)&&!d(n.token);)s instanceof Le&&f(),(s=Me(gt,n.token,s)).start=r,s.end=n.token,a();return s};function Me(e,t,i){var r=t.value;switch(r){case"++":case"--":We(i)||c("Invalid use of "+r+" operator",t.line,t.col,t.pos);break;case"delete":i instanceof Zt&&n.input.has_directive("use strict")&&c("Calling delete on expression not allowed in strict mode",i.start.line,i.start.col,i.start.pos)}return new e({operator:r,expression:i})}var Ge=function(e,t,r){var o=i("operator")?n.token.value:null;"in"==o&&r&&(o=null),"**"==o&&e instanceof Dt&&!J(e.start,"punc","(")&&"--"!==e.operator&&"++"!==e.operator&&f(e.start);var s=null!=o?oe[o]:null;if(null!=s&&(s>t||"**"===o&&t===s)){a();var u=Ge(Te(!0),s,r);return Ge(new St({start:e.start,left:e,operator:o,right:u,end:u.end}),t,r)}return e};var He=function(e){var t=n.token,r=function(e){return Ge(Te(!0,!0),0,e)}(e);if(i("operator","?")){a();var o=Nt(!1);return _(":"),new At({start:t,condition:r,consequent:o,alternative:Nt(!1,e),end:u()})}return r};function We(e){return e instanceof dt||e instanceof Zt}function Ze(e){if(e instanceof yt)e=new Pe({start:e.start,names:e.properties.map(Ze),is_array:!1,end:e.end});else if(e instanceof bt){for(var t=[],n=0;n<e.elements.length;n++)e.elements[n]instanceof we&&(n+1!==e.elements.length&&l(e.elements[n].start,"Spread must the be last element in destructuring array"),e.elements[n].expression=Ze(e.elements[n].expression)),t.push(Ze(e.elements[n]));e=new Pe({start:e.start,names:t,is_array:!0,end:e.end})}else e instanceof Ct?e.value=Ze(e.value):e instanceof vt&&(e=new Tt({start:e.start,left:e.left,operator:"=",right:e.right,end:e.end}));return e}var ht=function(e){T();var t=n.token;if("name"==t.type&&"yield"==t.value){if(E())return a(),function(){E()||c("Unexpected yield expression outside generator function",n.prev.line,n.prev.col,n.prev.pos);var e=n.token,t=!1,r=!0;return m()||i("punc")&&B(n.token.value)?r=!1:i("operator","*")&&(t=!0,a()),new Dn({start:e,is_star:t,expression:r?Nt():null,end:u()})}();n.input.has_directive("use strict")&&l(n.token,"Unexpected yield identifier inside strict mode")}var r=He(e),o=n.token.value;if(i("operator")&&re(o)){if(We(r)||(r=Ze(r))instanceof Pe)return a(),new vt({start:t,left:r,operator:o,right:ht(e),end:u()});c("Invalid assignment")}return r},Nt=function(e,t){for(var r=n.token,s=[];s.push(ht(t)),e&&i("punc",",");)a(),e=!0;return 1==s.length?s[0]:new _t({start:r,expressions:s,end:o()})};function kt(e){++n.in_loop;var t=e();return--n.in_loop,t}return t.expression?Nt(!0):function(){var e=n.token,r=[];for(n.input.push_directives_stack(),t.module&&n.input.add_directive("use strict");!i("eof");)r.push(b());n.input.pop_directives_stack();var o=u(),a=t.toplevel;return a?(a.body=a.body.concat(r),a.end=o):a=new Ne({start:e,body:r,end:o}),a}()}function ue(e,t,n,i){arguments.length<4&&(i=le);var r=t=t?t.split(/\s+/):[];i&&i.PROPS&&(t=t.concat(i.PROPS));for(var o="return function AST_"+e+"(props){ if (props) { ",a=t.length;--a>=0;)o+="this."+t[a]+" = props."+t[a]+";";var s=i&&new i;(s&&s.initialize||n&&n.initialize)&&(o+="this.initialize();"),o+="}}";var u=new Function(o)();if(s&&(u.prototype=s,u.BASE=i),i&&i.SUBCLASSES.push(u),u.prototype.CTOR=u,u.PROPS=t||null,u.SELF_PROPS=r,u.SUBCLASSES=[],e&&(u.prototype.TYPE=u.TYPE=e),n)for(a in n)v(n,a)&&(/^\$/.test(a)?u[a.substr(1)]=n[a]:u.prototype[a]=n[a]);return u.DEFMETHOD=function(e,t){this.prototype[e]=t},u}var ce=ue("Token","type value line col pos endline endcol endpos nlb comments_before comments_after file raw",{},null),le=ue("Node","start end",{_clone:function(e){if(e){var t=this.clone();return t.transform(new Sn(function(e){if(e!==t)return e.clone(!0)}))}return new this.CTOR(this)},clone:function(e){return this._clone(e)},$documentation:"Base class of all AST nodes",$propdoc:{start:"[AST_Token] The first token of this node",end:"[AST_Token] The last token of this node"},_walk:function(e){return e._visit(this)},walk:function(e){return this._walk(e)}},null);le.warn_function=null,le.warn=function(e,t){le.warn_function&&le.warn_function(E(e,t))};var fe=ue("Statement",null,{$documentation:"Base class of all statements"}),pe=ue("Debugger",null,{$documentation:"Represents a debugger statement"},fe),_e=ue("Directive","value quote",{$documentation:'Represents a directive, like "use strict";',$propdoc:{value:"[string] The value of this directive as a plain string (it's not an AST_String!)",quote:"[string] the original quote character"}},fe),de=ue("SimpleStatement","body",{$documentation:"A statement consisting of an expression, i.e. a = 1 + 2",$propdoc:{body:"[AST_Node] an expression node (should not be instanceof AST_Statement)"},_walk:function(e){return e._visit(this,function(){this.body._walk(e)})}},fe);function me(e,t){var n=e.body;if(n instanceof le)n._walk(t);else for(var i=0,r=n.length;i<r;i++)n[i]._walk(t)}function Ee(e){var t=this._clone(e);return this.block_scope&&(t.block_scope=this.block_scope.clone()),t}var he=ue("Block","body block_scope",{$documentation:"A body of statements (usually braced)",$propdoc:{body:"[AST_Statement*] an array of statements",block_scope:"[AST_Scope] the block scope"},_walk:function(e){return e._visit(this,function(){me(this,e)})},clone:Ee},fe),De=ue("BlockStatement",null,{$documentation:"A block statement"},he),ge=ue("EmptyStatement",null,{$documentation:"The empty statement (empty block or simply a semicolon)"},fe),Se=ue("StatementWithBody","body",{$documentation:"Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",$propdoc:{body:"[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"}},fe),Ae=ue("LabeledStatement","label",{$documentation:"Statement with a label",$propdoc:{label:"[AST_Label] a label definition"},_walk:function(e){return e._visit(this,function(){this.label._walk(e),this.body._walk(e)})},clone:function(e){var t=this._clone(e);if(e){var n=t.label,i=this.label;t.walk(new gn(function(e){e instanceof We&&e.label&&e.label.thedef===i&&(e.label.thedef=n,n.references.push(e))}))}return t}},Se),ve=ue("IterationStatement","block_scope",{$documentation:"Internal class.  All loops inherit from it.",$propdoc:{block_scope:"[AST_Scope] the block scope for this iteration statement."},clone:Ee},Se),Te=ue("DWLoop","condition",{$documentation:"Base class for do/while statements",$propdoc:{condition:"[AST_Node] the loop condition.  Should not be instanceof AST_Statement"}},ve),be=ue("Do",null,{$documentation:"A `do` statement",_walk:function(e){return e._visit(this,function(){this.body._walk(e),this.condition._walk(e)})}},Te),ye=ue("While",null,{$documentation:"A `while` statement",_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.body._walk(e)})}},Te),Ce=ue("For","init condition step",{$documentation:"A `for` statement",$propdoc:{init:"[AST_Node?] the `for` initialization code, or null if empty",condition:"[AST_Node?] the `for` termination clause, or null if empty",step:"[AST_Node?] the `for` update clause, or null if empty"},_walk:function(e){return e._visit(this,function(){this.init&&this.init._walk(e),this.condition&&this.condition._walk(e),this.step&&this.step._walk(e),this.body._walk(e)})}},ve),Oe=ue("ForIn","init object",{$documentation:"A `for ... in` statement",$propdoc:{init:"[AST_Node] the `for/in` initialization code",object:"[AST_Node] the object that we're looping through"},_walk:function(e){return e._visit(this,function(){this.init._walk(e),this.object._walk(e),this.body._walk(e)})}},ve),Fe=ue("ForOf","await",{$documentation:"A `for ... of` statement"},Oe),Re=ue("With","expression",{$documentation:"A `with` statement",$propdoc:{expression:"[AST_Node] the `with` expression"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.body._walk(e)})}},Se),Me=ue("Scope","variables functions uses_with uses_eval parent_scope enclosed cname",{$documentation:"Base class for all statements introducing a lexical scope",$propdoc:{variables:"[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",functions:"[Object/S] like `variables`, but only lists function declarations",uses_with:"[boolean/S] tells whether this scope uses the `with` statement",uses_eval:"[boolean/S] tells whether this scope contains a direct call to the global `eval`",parent_scope:"[AST_Scope?/S] link to the parent scope",enclosed:"[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",cname:"[integer/S] current index for mangling variables (used internally by the mangler)"},get_defun_scope:function(){for(var e=this;e.is_block_scope();)e=e.parent_scope;return e},clone:function(e){var t=this._clone(e);return this.variables&&(t.variables=this.variables.clone()),this.functions&&(t.functions=this.functions.clone()),this.enclosed&&(t.enclosed=this.enclosed.slice()),t},pinned:function(){return this.uses_eval||this.uses_with}},he),Ne=ue("Toplevel","globals",{$documentation:"The toplevel scope",$propdoc:{globals:"[Object/S] a map of name -> SymbolDef for all undeclared names"},wrap_commonjs:function(e){var t=this.body,n="(function(exports){'$ORIG';})(typeof "+e+"=='undefined'?("+e+"={}):"+e+");";return n=(n=se(n)).transform(new Sn(function(e){if(e instanceof _e&&"$ORIG"==e.value)return d.splice(t)}))},wrap_enclose:function(e){"string"!=typeof e&&(e="");var t=e.indexOf(":");t<0&&(t=e.length);var n=this.body;return se(["(function(",e.slice(0,t),'){"$ORIG"})(',e.slice(t+1),")"].join("")).transform(new Sn(function(e){if(e instanceof _e&&"$ORIG"==e.value)return d.splice(n)}))}},Me),we=ue("Expansion","expression",{$documentation:"An expandible argument, such as ...rest, a splat, such as [1,2,...all], or an expansion in a variable declaration, such as var [first, ...rest] = list",$propdoc:{expression:"[AST_Node] the thing to be expanded"},_walk:function(e){var t=this;return e._visit(this,function(){t.expression.walk(e)})}}),xe=ue("Lambda","name argnames uses_arguments is_generator async",{$documentation:"Base class for functions",$propdoc:{name:"[AST_SymbolDeclaration?] the name of this function",argnames:"[AST_SymbolFunarg|AST_Destructuring|AST_Expansion|AST_DefaultAssign*] array of function arguments, destructurings, or expanding arguments",uses_arguments:"[boolean/S] tells whether this function accesses the arguments array",is_generator:"[boolean] is this a generator method",async:"[boolean] is this method async"},args_as_names:function(){for(var e=[],t=0;t<this.argnames.length;t++)this.argnames[t]instanceof Pe?e=e.concat(this.argnames[t].all_symbols()):e.push(this.argnames[t]);return e},_walk:function(e){return e._visit(this,function(){this.name&&this.name._walk(e);for(var t=this.argnames,n=0,i=t.length;n<i;n++)t[n]._walk(e);me(this,e)})}},Me),ke=ue("Accessor",null,{$documentation:"A setter/getter function.  The `name` property is always null."},xe),Ie=ue("Function","inlined",{$documentation:"A function expression"},xe),Le=ue("Arrow","inlined",{$documentation:"An ES6 Arrow function ((a) => b)"},xe),Ve=ue("Defun","inlined",{$documentation:"A function definition"},xe),Pe=ue("Destructuring","names is_array",{$documentation:"A destructuring of several names. Used in destructuring assignment and with destructuring function argument names",$propdoc:{names:"[AST_Node*] Array of properties or elements",is_array:"[Boolean] Whether the destructuring represents an object or array"},_walk:function(e){return e._visit(this,function(){this.names.forEach(function(t){t._walk(e)})})},all_symbols:function(){var e=[];return this.walk(new gn(function(t){t instanceof kt&&e.push(t),t instanceof we&&e.push(t.expression)})),e}}),Be=ue("PrefixedTemplateString","template_string prefix",{$documentation:"A templatestring with a prefix, such as String.raw`foobarbaz`",$propdoc:{template_string:"[AST_TemplateString] The template string",prefix:"[AST_SymbolRef|AST_PropAccess] The prefix, which can be a symbol such as `foo` or a dotted expression such as `String.raw`."},_walk:function(e){this.prefix._walk(e),this.template_string._walk(e)}}),Ke=ue("TemplateString","segments",{$documentation:"A template string literal",$propdoc:{segments:"[AST_Node*] One or more segments, starting with AST_TemplateSegment. AST_Node may follow AST_TemplateSegment, but each AST_Node must be followed by AST_TemplateSegment."},_walk:function(e){return e._visit(this,function(){this.segments.forEach(function(t){t._walk(e)})})}}),Ue=ue("TemplateSegment","value raw",{$documentation:"A segment of a template string literal",$propdoc:{value:"Content of the segment",raw:"Raw content of the segment"}}),Ge=ue("Jump",null,{$documentation:"Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"},fe),He=ue("Exit","value",{$documentation:"Base class for “exits” (`return` and `throw`)",$propdoc:{value:"[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},_walk:function(e){return e._visit(this,this.value&&function(){this.value._walk(e)})}},Ge),Xe=ue("Return",null,{$documentation:"A `return` statement"},He),ze=ue("Throw",null,{$documentation:"A `throw` statement"},He),We=ue("LoopControl","label",{$documentation:"Base class for loop control statements (`break` and `continue`)",$propdoc:{label:"[AST_LabelRef?] the label, or null if none"},_walk:function(e){return e._visit(this,this.label&&function(){this.label._walk(e)})}},Ge),Ye=ue("Break",null,{$documentation:"A `break` statement"},We),qe=ue("Continue",null,{$documentation:"A `continue` statement"},We),$e=ue("If","condition alternative",{$documentation:"A `if` statement",$propdoc:{condition:"[AST_Node] the `if` condition",alternative:"[AST_Statement?] the `else` part, or null if not present"},_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.body._walk(e),this.alternative&&this.alternative._walk(e)})}},Se),je=ue("Switch","expression",{$documentation:"A `switch` statement",$propdoc:{expression:"[AST_Node] the `switch` “discriminant”"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),me(this,e)})}},he),Ze=ue("SwitchBranch",null,{$documentation:"Base class for `switch` branches"},he),Qe=ue("Default",null,{$documentation:"A `default` switch branch"},Ze),Je=ue("Case","expression",{$documentation:"A `case` switch branch",$propdoc:{expression:"[AST_Node] the `case` expression"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e),me(this,e)})}},Ze),et=ue("Try","bcatch bfinally",{$documentation:"A `try` statement",$propdoc:{bcatch:"[AST_Catch?] the catch block, or null if not present",bfinally:"[AST_Finally?] the finally block, or null if not present"},_walk:function(e){return e._visit(this,function(){me(this,e),this.bcatch&&this.bcatch._walk(e),this.bfinally&&this.bfinally._walk(e)})}},he),tt=ue("Catch","argname",{$documentation:"A `catch` node; only makes sense as part of a `try` statement",$propdoc:{argname:"[AST_SymbolCatch|AST_Destructuring|AST_Expansion|AST_DefaultAssign] symbol for the exception"},_walk:function(e){return e._visit(this,function(){this.argname&&this.argname._walk(e),me(this,e)})}},he),nt=ue("Finally",null,{$documentation:"A `finally` node; only makes sense as part of a `try` statement"},he),it=ue("Definitions","definitions",{$documentation:"Base class for `var` or `const` nodes (variable declarations/initializations)",$propdoc:{definitions:"[AST_VarDef*] array of variable definitions"},_walk:function(e){return e._visit(this,function(){for(var t=this.definitions,n=0,i=t.length;n<i;n++)t[n]._walk(e)})}},fe),rt=ue("Var",null,{$documentation:"A `var` statement"},it),ot=ue("Let",null,{$documentation:"A `let` statement"},it),at=ue("Const",null,{$documentation:"A `const` statement"},it),st=ue("NameMapping","foreign_name name",{$documentation:"The part of the export/import statement that declare names from a module.",$propdoc:{foreign_name:"[AST_SymbolExportForeign|AST_SymbolImportForeign] The name being exported/imported (as specified in the module)",name:"[AST_SymbolExport|AST_SymbolImport] The name as it is visible to this module."},_walk:function(e){return e._visit(this,function(){this.foreign_name._walk(e),this.name._walk(e)})}}),ut=ue("Import","imported_name imported_names module_name",{$documentation:"An `import` statement",$propdoc:{imported_name:"[AST_SymbolImport] The name of the variable holding the module's default export.",imported_names:"[AST_NameMapping*] The names of non-default imported variables",module_name:"[AST_String] String literal describing where this module came from"},_walk:function(e){return e._visit(this,function(){this.imported_name&&this.imported_name._walk(e),this.imported_names&&this.imported_names.forEach(function(t){t._walk(e)}),this.module_name._walk(e)})}}),ct=ue("Export","exported_definition exported_value is_default exported_names module_name",{$documentation:"An `export` statement",$propdoc:{exported_definition:"[AST_Defun|AST_Definitions|AST_DefClass?] An exported definition",exported_value:"[AST_Node?] An exported value",exported_names:"[AST_NameMapping*?] List of exported names",module_name:"[AST_String?] Name of the file to load exports from",is_default:"[Boolean] Whether this is the default exported value of this module"},_walk:function(e){e._visit(this,function(){this.exported_definition&&this.exported_definition._walk(e),this.exported_value&&this.exported_value._walk(e),this.exported_names&&this.exported_names.forEach(function(t){t._walk(e)}),this.module_name&&this.module_name._walk(e)})}},fe),lt=ue("VarDef","name value",{$documentation:"A variable declaration; only appears in a AST_Definitions node",$propdoc:{name:"[AST_Destructuring|AST_SymbolConst|AST_SymbolLet|AST_SymbolVar] name of the variable",value:"[AST_Node?] initializer, or null of there's no initializer"},_walk:function(e){return e._visit(this,function(){this.name._walk(e),this.value&&this.value._walk(e)})}}),ft=ue("Call","expression args",{$documentation:"A function call expression",$propdoc:{expression:"[AST_Node] expression to invoke as function",args:"[AST_Node*] array of arguments"},_walk:function(e){return e._visit(this,function(){for(var t=this.args,n=0,i=t.length;n<i;n++)t[n]._walk(e);this.expression._walk(e)})}}),pt=ue("New",null,{$documentation:"An object instantiation.  Derives from a function call since it has exactly the same properties"},ft),_t=ue("Sequence","expressions",{$documentation:"A sequence expression (comma-separated expressions)",$propdoc:{expressions:"[AST_Node*] array of expressions (at least two)"},_walk:function(e){return e._visit(this,function(){this.expressions.forEach(function(t){t._walk(e)})})}}),dt=ue("PropAccess","expression property",{$documentation:'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',$propdoc:{expression:"[AST_Node] the “container” expression",property:"[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"}}),mt=ue("Dot",null,{$documentation:"A dotted property access expression",_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}},dt),Et=ue("Sub",null,{$documentation:'Index-style property access, i.e. `a["foo"]`',_walk:function(e){return e._visit(this,function(){this.expression._walk(e),this.property._walk(e)})}},dt),ht=ue("Unary","operator expression",{$documentation:"Base class for unary expressions",$propdoc:{operator:"[string] the operator",expression:"[AST_Node] expression that this unary operator applies to"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}}),Dt=ue("UnaryPrefix",null,{$documentation:"Unary prefix expression, i.e. `typeof i` or `++i`"},ht),gt=ue("UnaryPostfix",null,{$documentation:"Unary postfix expression, i.e. `i++`"},ht),St=ue("Binary","operator left right",{$documentation:"Binary expression, i.e. `a + b`",$propdoc:{left:"[AST_Node] left-hand side expression",operator:"[string] the operator",right:"[AST_Node] right-hand side expression"},_walk:function(e){return e._visit(this,function(){this.left._walk(e),this.right._walk(e)})}}),At=ue("Conditional","condition consequent alternative",{$documentation:"Conditional expression using the ternary operator, i.e. `a ? b : c`",$propdoc:{condition:"[AST_Node]",consequent:"[AST_Node]",alternative:"[AST_Node]"},_walk:function(e){return e._visit(this,function(){this.condition._walk(e),this.consequent._walk(e),this.alternative._walk(e)})}}),vt=ue("Assign",null,{$documentation:"An assignment expression — `a = b + 5`"},St),Tt=ue("DefaultAssign",null,{$documentation:"A default assignment expression like in `(a = 3) => a`"},St),bt=ue("Array","elements",{$documentation:"An array literal",$propdoc:{elements:"[AST_Node*] array of elements"},_walk:function(e){return e._visit(this,function(){for(var t=this.elements,n=0,i=t.length;n<i;n++)t[n]._walk(e)})}}),yt=ue("Object","properties",{$documentation:"An object literal",$propdoc:{properties:"[AST_ObjectProperty*] array of properties"},_walk:function(e){return e._visit(this,function(){for(var t=this.properties,n=0,i=t.length;n<i;n++)t[n]._walk(e)})}}),Ct=ue("ObjectProperty","key value",{$documentation:"Base class for literal object properties",$propdoc:{key:"[string|AST_Node] property name. For ObjectKeyVal this is a string. For getters, setters and computed property this is an AST_Node.",value:"[AST_Node] property value.  For getters and setters this is an AST_Accessor."},_walk:function(e){return e._visit(this,function(){this.key instanceof le&&this.key._walk(e),this.value._walk(e)})}}),Ot=ue("ObjectKeyVal","quote",{$documentation:"A key: value object property",$propdoc:{quote:"[string] the original quote character"}},Ct),Ft=ue("ObjectSetter","quote static",{$propdoc:{quote:"[string|undefined] the original quote character, if any",static:"[boolean] whether this is a static setter (classes only)"},$documentation:"An object setter property"},Ct),Rt=ue("ObjectGetter","quote static",{$propdoc:{quote:"[string|undefined] the original quote character, if any",static:"[boolean] whether this is a static getter (classes only)"},$documentation:"An object getter property"},Ct),Mt=ue("ConciseMethod","quote static is_generator async",{$propdoc:{quote:"[string|undefined] the original quote character, if any",static:"[boolean] is this method static (classes only)",is_generator:"[boolean] is this a generator method",async:"[boolean] is this method async"},$documentation:"An ES6 concise method inside an object or class"},Ct),Nt=ue("Class","name extends properties inlined",{$propdoc:{name:"[AST_SymbolClass|AST_SymbolDefClass?] optional class name.",extends:"[AST_Node]? optional parent class",properties:"[AST_ObjectProperty*] array of properties"},$documentation:"An ES6 class",_walk:function(e){return e._visit(this,function(){this.name&&this.name._walk(e),this.extends&&this.extends._walk(e),this.properties.forEach(function(t){t._walk(e)})})}},Me),wt=ue("DefClass",null,{$documentation:"A class definition"},Nt),xt=ue("ClassExpression",null,{$documentation:"A class expression."},Nt),kt=ue("Symbol","scope name thedef",{$propdoc:{name:"[string] name of this symbol",scope:"[AST_Scope/S] the current scope (not necessarily the definition scope)",thedef:"[SymbolDef/S] the definition of this symbol"},$documentation:"Base class for all symbols"}),It=ue("NewTarget",null,{$documentation:"A reference to new.target"}),Lt=ue("SymbolDeclaration","init",{$documentation:"A declaration symbol (symbol in var/const, function name or argument, symbol in catch)"},kt),Vt=ue("SymbolVar",null,{$documentation:"Symbol defining a variable"},Lt),Pt=ue("SymbolBlockDeclaration",null,{$documentation:"Base class for block-scoped declaration symbols"},Lt),Bt=ue("SymbolConst",null,{$documentation:"A constant declaration"},Pt),Kt=ue("SymbolLet",null,{$documentation:"A block-scoped `let` declaration"},Pt),Ut=ue("SymbolFunarg",null,{$documentation:"Symbol naming a function argument"},Vt),Gt=ue("SymbolDefun",null,{$documentation:"Symbol defining a function"},Lt),Ht=ue("SymbolMethod",null,{$documentation:"Symbol in an object defining a method"},kt),Xt=ue("SymbolLambda",null,{$documentation:"Symbol naming a function expression"},Lt),zt=ue("SymbolDefClass",null,{$documentation:"Symbol naming a class's name in a class declaration. Lexically scoped to its containing scope, and accessible within the class."},Pt),Wt=ue("SymbolClass",null,{$documentation:"Symbol naming a class's name. Lexically scoped to the class."},Lt),Yt=ue("SymbolCatch",null,{$documentation:"Symbol naming the exception in catch"},Pt),qt=ue("SymbolImport",null,{$documentation:"Symbol referring to an imported name"},Pt),$t=ue("SymbolImportForeign",null,{$documentation:"A symbol imported from a module, but it is defined in the other module, and its real name is irrelevant for this module's purposes"},kt),jt=ue("Label","references",{$documentation:"Symbol naming a label (declaration)",$propdoc:{references:"[AST_LoopControl*] a list of nodes referring to this label"},initialize:function(){this.references=[],this.thedef=this}},kt),Zt=ue("SymbolRef",null,{$documentation:"Reference to some symbol (not definition/declaration)"},kt),Qt=ue("SymbolExport",null,{$documentation:"Symbol referring to a name to export"},Zt),Jt=ue("SymbolExportForeign",null,{$documentation:"A symbol exported from this module, but it is used in the other module, and its real name is irrelevant for this module's purposes"},kt),en=ue("LabelRef",null,{$documentation:"Reference to a label symbol"},kt),tn=ue("This",null,{$documentation:"The `this` symbol"},kt),nn=ue("Super",null,{$documentation:"The `super` symbol"},tn),rn=ue("Constant",null,{$documentation:"Base class for all constants",getValue:function(){return this.value}}),on=ue("String","value quote",{$documentation:"A string literal",$propdoc:{value:"[string] the contents of this string",quote:"[string] the original quote character"}},rn),an=ue("Number","value literal",{$documentation:"A number literal",$propdoc:{value:"[number] the numeric value",literal:"[string] numeric value as string (optional)"}},rn),sn=ue("RegExp","value",{$documentation:"A regexp literal",$propdoc:{value:"[RegExp] the actual regexp"}},rn),un=ue("Atom",null,{$documentation:"Base class for atoms"},rn),cn=ue("Null",null,{$documentation:"The `null` atom",value:null},un),ln=ue("NaN",null,{$documentation:"The impossible value",value:NaN},un),fn=ue("Undefined",null,{$documentation:"The `undefined` value",value:void 0},un),pn=ue("Hole",null,{$documentation:"A hole in an array",value:void 0},un),_n=ue("Infinity",null,{$documentation:"The `Infinity` value",value:1/0},un),dn=ue("Boolean",null,{$documentation:"Base class for booleans"},un),mn=ue("False",null,{$documentation:"The `false` atom",value:!1},dn),En=ue("True",null,{$documentation:"The `true` atom",value:!0},dn),hn=ue("Await","expression",{$documentation:"An `await` statement",$propdoc:{expression:"[AST_Node] the mandatory expression being awaited"},_walk:function(e){return e._visit(this,function(){this.expression._walk(e)})}}),Dn=ue("Yield","expression is_star",{$documentation:"A `yield` statement",$propdoc:{expression:"[AST_Node?] the value returned or thrown by this statement; could be null (representing undefined) but only when is_star is set to false",is_star:"[Boolean] Whether this is a yield or yield* statement"},_walk:function(e){return e._visit(this,this.expression&&function(){this.expression._walk(e)})}});function gn(e){this.visit=e,this.stack=[],this.directives=Object.create(null)}function Sn(e,t){gn.call(this),this.before=e,this.after=t}gn.prototype={_visit:function(e,t){this.push(e);var n=this.visit(e,t?function(){t.call(e)}:c);return!n&&t&&t.call(e),this.pop(),n},parent:function(e){return this.stack[this.stack.length-2-(e||0)]},push:function(e){e instanceof xe?this.directives=Object.create(this.directives):e instanceof _e&&!this.directives[e.value]?this.directives[e.value]=e:e instanceof Nt&&(this.directives=Object.create(this.directives),this.directives["use strict"]||(this.directives["use strict"]=e)),this.stack.push(e)},pop:function(){var e=this.stack.pop();(e instanceof xe||e instanceof Nt)&&(this.directives=Object.getPrototypeOf(this.directives))},self:function(){return this.stack[this.stack.length-1]},find_parent:function(e){for(var t=this.stack,n=t.length;--n>=0;){var i=t[n];if(i instanceof e)return i}},has_directive:function(e){var t=this.directives[e];if(t)return t;var n=this.stack[this.stack.length-1];if(n instanceof Me&&n.body)for(var i=0;i<n.body.length;++i){var r=n.body[i];if(!(r instanceof _e))break;if(r.value==e)return r}},loopcontrol_target:function(e){var t=this.stack;if(e.label)for(var n=t.length;--n>=0;){if((i=t[n])instanceof Ae&&i.label.name==e.label.name)return i.body}else for(n=t.length;--n>=0;){var i;if((i=t[n])instanceof ve||e instanceof Ye&&i instanceof je)return i}}},Sn.prototype=new gn;var An=Object.freeze({AST_Accessor:ke,AST_Array:bt,AST_Arrow:Le,AST_Assign:vt,AST_Atom:un,AST_Await:hn,AST_Binary:St,AST_Block:he,AST_BlockStatement:De,AST_Boolean:dn,AST_Break:Ye,AST_Call:ft,AST_Case:Je,AST_Catch:tt,AST_Class:Nt,AST_ClassExpression:xt,AST_ConciseMethod:Mt,AST_Conditional:At,AST_Const:at,AST_Constant:rn,AST_Continue:qe,AST_Debugger:pe,AST_Default:Qe,AST_DefaultAssign:Tt,AST_DefClass:wt,AST_Definitions:it,AST_Defun:Ve,AST_Destructuring:Pe,AST_Directive:_e,AST_Do:be,AST_Dot:mt,AST_DWLoop:Te,AST_EmptyStatement:ge,AST_Exit:He,AST_Expansion:we,AST_Export:ct,AST_False:mn,AST_Finally:nt,AST_For:Ce,AST_ForIn:Oe,AST_ForOf:Fe,AST_Function:Ie,AST_Hole:pn,AST_If:$e,AST_Import:ut,AST_Infinity:_n,AST_IterationStatement:ve,AST_Jump:Ge,AST_Label:jt,AST_LabeledStatement:Ae,AST_LabelRef:en,AST_Lambda:xe,AST_Let:ot,AST_LoopControl:We,AST_NameMapping:st,AST_NaN:ln,AST_New:pt,AST_NewTarget:It,AST_Node:le,AST_Null:cn,AST_Number:an,AST_Object:yt,AST_ObjectGetter:Rt,AST_ObjectKeyVal:Ot,AST_ObjectProperty:Ct,AST_ObjectSetter:Ft,AST_PrefixedTemplateString:Be,AST_PropAccess:dt,AST_RegExp:sn,AST_Return:Xe,AST_Scope:Me,AST_Sequence:_t,AST_SimpleStatement:de,AST_Statement:fe,AST_StatementWithBody:Se,AST_String:on,AST_Sub:Et,AST_Super:nn,AST_Switch:je,AST_SwitchBranch:Ze,AST_Symbol:kt,AST_SymbolBlockDeclaration:Pt,AST_SymbolCatch:Yt,AST_SymbolClass:Wt,AST_SymbolConst:Bt,AST_SymbolDeclaration:Lt,AST_SymbolDefClass:zt,AST_SymbolDefun:Gt,AST_SymbolExport:Qt,AST_SymbolExportForeign:Jt,AST_SymbolFunarg:Ut,AST_SymbolImport:qt,AST_SymbolImportForeign:$t,AST_SymbolLambda:Xt,AST_SymbolLet:Kt,AST_SymbolMethod:Ht,AST_SymbolRef:Zt,AST_SymbolVar:Vt,AST_TemplateSegment:Ue,AST_TemplateString:Ke,AST_This:tn,AST_Throw:ze,AST_Token:ce,AST_Toplevel:Ne,AST_True:En,AST_Try:et,AST_Unary:ht,AST_UnaryPostfix:gt,AST_UnaryPrefix:Dt,AST_Undefined:fn,AST_Var:rt,AST_VarDef:lt,AST_While:ye,AST_With:Re,AST_Yield:Dn,TreeTransformer:Sn,TreeWalker:gn,walk_body:me});!function(e){function t(t,n){t.DEFMETHOD("transform",function(t,i){var r,o;return t.push(this),t.before&&(r=t.before(this,n,i)),r===e&&(n(r=this,t),t.after&&(o=t.after(r,i))!==e&&(r=o)),t.pop(),r})}function n(e,t){return d(e,function(e){return e.transform(t,!0)})}t(le,c),t(Ae,function(e,t){e.label=e.label.transform(t),e.body=e.body.transform(t)}),t(de,function(e,t){e.body=e.body.transform(t)}),t(he,function(e,t){e.body=n(e.body,t)}),t(be,function(e,t){e.body=e.body.transform(t),e.condition=e.condition.transform(t)}),t(ye,function(e,t){e.condition=e.condition.transform(t),e.body=e.body.transform(t)}),t(Ce,function(e,t){e.init&&(e.init=e.init.transform(t)),e.condition&&(e.condition=e.condition.transform(t)),e.step&&(e.step=e.step.transform(t)),e.body=e.body.transform(t)}),t(Oe,function(e,t){e.init=e.init.transform(t),e.object=e.object.transform(t),e.body=e.body.transform(t)}),t(Re,function(e,t){e.expression=e.expression.transform(t),e.body=e.body.transform(t)}),t(He,function(e,t){e.value&&(e.value=e.value.transform(t))}),t(We,function(e,t){e.label&&(e.label=e.label.transform(t))}),t($e,function(e,t){e.condition=e.condition.transform(t),e.body=e.body.transform(t),e.alternative&&(e.alternative=e.alternative.transform(t))}),t(je,function(e,t){e.expression=e.expression.transform(t),e.body=n(e.body,t)}),t(Je,function(e,t){e.expression=e.expression.transform(t),e.body=n(e.body,t)}),t(et,function(e,t){e.body=n(e.body,t),e.bcatch&&(e.bcatch=e.bcatch.transform(t)),e.bfinally&&(e.bfinally=e.bfinally.transform(t))}),t(tt,function(e,t){e.argname&&(e.argname=e.argname.transform(t)),e.body=n(e.body,t)}),t(it,function(e,t){e.definitions=n(e.definitions,t)}),t(lt,function(e,t){e.name=e.name.transform(t),e.value&&(e.value=e.value.transform(t))}),t(Pe,function(e,t){e.names=n(e.names,t)}),t(xe,function(e,t){e.name&&(e.name=e.name.transform(t)),e.argnames=n(e.argnames,t),e.body instanceof le?e.body=e.body.transform(t):e.body=n(e.body,t)}),t(ft,function(e,t){e.expression=e.expression.transform(t),e.args=n(e.args,t)}),t(_t,function(e,t){e.expressions=n(e.expressions,t)}),t(mt,function(e,t){e.expression=e.expression.transform(t)}),t(Et,function(e,t){e.expression=e.expression.transform(t),e.property=e.property.transform(t)}),t(Dn,function(e,t){e.expression&&(e.expression=e.expression.transform(t))}),t(hn,function(e,t){e.expression=e.expression.transform(t)}),t(ht,function(e,t){e.expression=e.expression.transform(t)}),t(St,function(e,t){e.left=e.left.transform(t),e.right=e.right.transform(t)}),t(At,function(e,t){e.condition=e.condition.transform(t),e.consequent=e.consequent.transform(t),e.alternative=e.alternative.transform(t)}),t(bt,function(e,t){e.elements=n(e.elements,t)}),t(yt,function(e,t){e.properties=n(e.properties,t)}),t(Ct,function(e,t){e.key instanceof le&&(e.key=e.key.transform(t)),e.value=e.value.transform(t)}),t(Nt,function(e,t){e.name&&(e.name=e.name.transform(t)),e.extends&&(e.extends=e.extends.transform(t)),e.properties=n(e.properties,t)}),t(we,function(e,t){e.expression=e.expression.transform(t)}),t(st,function(e,t){e.foreign_name=e.foreign_name.transform(t),e.name=e.name.transform(t)}),t(ut,function(e,t){e.imported_name&&(e.imported_name=e.imported_name.transform(t)),e.imported_names&&n(e.imported_names,t),e.module_name=e.module_name.transform(t)}),t(ct,function(e,t){e.exported_definition&&(e.exported_definition=e.exported_definition.transform(t)),e.exported_value&&(e.exported_value=e.exported_value.transform(t)),e.exported_names&&n(e.exported_names,t),e.module_name&&(e.module_name=e.module_name.transform(t))}),t(Ke,function(e,t){e.segments=n(e.segments,t)}),t(Be,function(e,t){e.prefix=e.prefix.transform(t),e.template_string=e.template_string.transform(t)})}();var vn=/^$|[;{][\s\n]*$/;function Tn(e){return"comment2"==e.type&&/@preserve|@license|@cc_on/i.test(e.value)}function bn(e){var t=!e;void 0===(e=s(e,{ascii_only:!1,beautify:!1,braces:!1,comments:!1,ecma:5,ie8:!1,indent_level:4,indent_start:0,inline_script:!0,keep_quoted_props:!1,max_line_len:!1,preamble:null,quote_keys:!1,quote_style:0,safari10:!1,semicolons:!0,shebang:!0,shorthand:void 0,source_map:null,webkit:!1,width:80,wrap_iife:!1},!0)).shorthand&&(e.shorthand=e.ecma>5);var n=l;if(e.comments){var i=e.comments;if("string"==typeof e.comments&&/^\/.*\/[a-zA-Z]*$/.test(e.comments)){var r=e.comments.lastIndexOf("/");i=new RegExp(e.comments.substr(1,r-1),e.comments.substr(r+1))}n=i instanceof RegExp?function(e){return"comment5"!=e.type&&i.test(e.value)}:"function"==typeof i?function(e){return"comment5"!=e.type&&i(this,e)}:"some"===i?Tn:f}var o=0,a=0,u=1,p=0,_="",d=e.ascii_only?function(t,n){return e.ecma>=6&&(t=t.replace(/[\ud800-\udbff][\udc00-\udfff]/g,function(e){var t,n;return"\\u{"+(t=e,n=0,X(t.charAt(n))?65536+(t.charCodeAt(n)-55296<<10)+t.charCodeAt(n+1)-56320:t.charCodeAt(n)).toString(16)+"}"})),t.replace(/[\u0000-\u001f\u007f-\uffff]/g,function(e){var t=e.charCodeAt(0).toString(16);if(t.length<=2&&!n){for(;t.length<2;)t="0"+t;return"\\x"+t}for(;t.length<4;)t="0"+t;return"\\u"+t})}:function(e){for(var t="",n=0,i=e.length;n<i;n++)X(e[n])&&!z(e[n+1])||z(e[n])&&!X(e[n-1])?t+="\\u"+e.charCodeAt(n).toString(16):t+=e[n];return t};function m(t,n){var i=function(t,n){var i=0,r=0;function o(){return"'"+t.replace(/\x27/g,"\\'")+"'"}function a(){return'"'+t.replace(/\x22/g,'\\"')+'"'}if(t=t.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,function(n,o){switch(n){case'"':return++i,'"';case"'":return++r,"'";case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\v":return e.ie8?"\\x0B":"\\v";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";case"\ufeff":return"\\ufeff";case"\0":return/[0-9]/.test(H(t,o+1))?"\\x00":"\\0"}return n}),t=d(t),"`"===n)return"`"+t.replace(/`/g,"\\`")+"`";switch(e.quote_style){case 1:return o();case 2:return a();case 3:return"'"==n?o():a();default:return i>r?o():a()}}(t,n);return e.inline_script&&(i=(i=(i=i.replace(/<\x2f(script)([>\/\t\n\f\r ])/gi,"<\\/$1$2")).replace(/\x3c!--/g,"\\x3c!--")).replace(/--\x3e/g,"--\\x3e")),i}function E(t){return function e(t,n){if(n<=0)return"";if(1==n)return t;var i=e(t,n>>1);return i+=i,1&n&&(i+=t),i}(" ",e.indent_start+o-t*e.indent_level)}var h,D,A=!1,v=!1,T=!1,b=0,y=!1,C=!1,O=-1,F="",R=e.source_map&&[],M=R?function(){R.forEach(function(t){try{e.source_map.add(t.token.file,t.line,t.col,t.token.line,t.token.col,t.name||"name"!=t.token.type?t.name:t.token.value)}catch(e){null!=t.token.file&&le.warn("Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]",{file:t.token.file,line:t.token.line,col:t.token.col,cline:t.line,ccol:t.col,name:t.name||""})}}),R=[]}:c,N=e.max_line_len?function(){if(a>e.max_line_len){if(b){var t=_.slice(0,b),n=_.slice(b);if(R){var i=n.length-a;R.forEach(function(e){e.line++,e.col+=i})}_=t+"\n"+n,u++,p++,a=n.length}a>e.max_line_len&&le.warn("Output exceeds {max_line_len} characters",e)}b&&(b=0,M())}:c,w=g("( [ + * / - , . `");function x(t){var n=H(t=String(t),0),i=H(F,F.length-1);y&&n&&(y=!1,"\n"!=n&&(x("\n"),I())),C&&n&&(C=!1,/[\s;})]/.test(n)||k()),O=-1;i=F.charAt(F.length-1);T&&(T=!1,(":"==i&&"}"==n||(!n||";}".indexOf(n)<0)&&";"!=i)&&(e.semicolons||w(n)?(_+=";",a++,p++):(N(),_+="\n",p++,u++,a=0,/^\s+$/.test(t)&&(T=!0)),e.beautify||(v=!1))),v&&(($(i)&&($(n)||"\\"==n)||"/"==n&&n==i||("+"==n||"-"==n)&&n==F)&&(_+=" ",a++,p++),v=!1),h&&(R.push({token:h,name:D,line:u,col:a}),h=!1,b||M()),_+=t,A="("==t[t.length-1],p+=t.length;var r=t.split(/\r?\n/),o=r.length-1;u+=o,a+=r[0].length,o>0&&(N(),a=r[o].length),F=t}var k=e.beautify?function(){x(" ")}:function(){v=!0},I=e.beautify?function(t){e.beautify&&x(E(t?.5:0))}:c,L=e.beautify?function(e,t){!0===e&&(e=K());var n=o;o=e;var i=t();return o=n,i}:function(e,t){return t()},V=e.beautify?function(){if(O<0)return x("\n");"\n"!=_[O]&&(_=_.slice(0,O)+"\n"+_.slice(O),p++,u++),O++}:e.max_line_len?function(){N(),b=_.length}:c,P=e.beautify?function(){x(";")}:function(){T=!0};function B(){T=!1,x(";")}function K(){return o+e.indent_level}function U(){return b&&N(),_}function G(){var e=_.lastIndexOf("\n");return/^ *$/.test(_.slice(e+1))}var W=[];return{get:U,toString:U,indent:I,indentation:function(){return o},current_width:function(){return a-o},should_break:function(){return e.width&&this.current_width()>=e.width},has_parens:function(){return A},newline:V,print:x,star:function(){x("*")},space:k,comma:function(){x(","),k()},colon:function(){x(":"),k()},last:function(){return F},semicolon:P,force_semicolon:B,to_utf8:d,print_name:function(e){x(function(e){return e=e.toString(),e=d(e,!0)}(e))},print_string:function(e,t,n){var i=m(e,t);!0===n&&-1===i.indexOf("\\")&&(vn.test(_)||B(),B()),x(i)},print_template_string_chars:function(e){var t=m(e,"`").replace(/\${/g,"\\${");return x(t.substr(1,t.length-2))},encode_string:m,next_indent:K,with_indent:L,with_block:function(e){var t;return x("{"),V(),L(K(),function(){t=e()}),I(),x("}"),t},with_parens:function(e){x("(");var t=e();return x(")"),t},with_square:function(e){x("[");var t=e();return x("]"),t},add_mapping:R?function(e,t){h=e,D=t}:c,option:function(t){return e[t]},prepend_comments:t?c:function(t){var i=this,r=t.start;if(r&&(!r.comments_before||r.comments_before._dumped!==i)){var o=r.comments_before;if(o||(o=r.comments_before=[]),o._dumped=i,t instanceof He&&t.value){var a=new gn(function(e){var t=a.parent();if(!(t instanceof He||t instanceof St&&t.left===e||"Call"==t.TYPE&&t.expression===e||t instanceof At&&t.condition===e||t instanceof mt&&t.expression===e||t instanceof _t&&t.expressions[0]===e||t instanceof Et&&t.expression===e||t instanceof gt))return!0;if(e.start){var n=e.start.comments_before;n&&n._dumped!==i&&(n._dumped=i,o=o.concat(n))}});a.push(t),t.value.walk(a)}if(0==p){o.length>0&&e.shebang&&"comment5"==o[0].type&&(x("#!"+o.shift().value+"\n"),I());var s=e.preamble;s&&x(s.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g,"\n"))}if(0!=(o=o.filter(n,t)).length){var u=G();o.forEach(function(e,t){u||(e.nlb?(x("\n"),I(),u=!0):t>0&&k()),/comment[134]/.test(e.type)?(x("//"+e.value.replace(/[@#]__PURE__/g," ")+"\n"),I(),u=!0):"comment2"==e.type&&(x("/*"+e.value.replace(/[@#]__PURE__/g," ")+"*/"),u=!1)}),u||(r.nlb?(x("\n"),I()):k())}}},append_comments:t||n===l?c:function(e,t){var i=e.end;if(i){var r=i[t?"comments_before":"comments_after"];if(r&&r._dumped!==this&&(e instanceof fe||S(r,function(e){return!/comment[134]/.test(e.type)}))){r._dumped=this;var o=_.length;r.filter(n,e).forEach(function(e,n){C=!1,y?(x("\n"),I(),y=!1):e.nlb&&(n>0||!G())?(x("\n"),I()):(n>0||!t)&&k(),/comment[134]/.test(e.type)?(x("//"+e.value.replace(/[@#]__PURE__/g," ")),y=!0):"comment2"==e.type&&(x("/*"+e.value.replace(/[@#]__PURE__/g," ")+"*/"),C=!0)}),_.length>o&&(O=o)}}},line:function(){return u},col:function(){return a},pos:function(){return p},push_node:function(e){W.push(e)},pop_node:function(){return W.pop()},parent:function(e){return W[W.length-2-(e||0)]}}}function yn(e,t,n){this.name=t.name,this.orig=[t],this.init=n,this.eliminated=0,this.scope=e,this.references=[],this.replaced=0,this.global=!1,this.export=!1,this.mangled_name=null,this.undeclared=!1,this.id=yn.next_id++}!function(){function e(e,t){e.DEFMETHOD("_codegen",t)}var t=!1,n=null,i=null;function r(e,t){Array.isArray(e)?e.forEach(function(e){r(e,t)}):e.DEFMETHOD("needs_parens",t)}function o(e,n,i,r){var o=e.length-1;t=r,e.forEach(function(e,r){!0!==t||e instanceof _e||e instanceof ge||e instanceof de&&e.body instanceof on||(t=!1),e instanceof ge||(i.indent(),e.print(i),r==o&&n||(i.newline(),n&&i.newline())),!0===t&&e instanceof de&&e.body instanceof on&&(t=!1)}),t=!1}function a(e,t){t.print("{"),t.with_indent(t.next_indent(),function(){t.append_comments(e,!0)}),t.print("}")}function s(e,t,n){e.body.length>0?t.with_block(function(){o(e.body,!1,t,n)}):a(e,t)}function u(e,t,n){var i=!1;n&&e.walk(new gn(function(e){return!!(i||e instanceof Me)||(e instanceof St&&"in"==e.operator?(i=!0,!0):void 0)})),e.print(t,i)}function f(e,t,n){n.option("quote_keys")?n.print_string(e):""+ +e==e&&e>=0?n.print(d(e)):(O(e)?!n.option("ie8"):j(e))?t&&n.option("keep_quoted_props")?n.print_string(e,t):n.print_name(e):n.print_string(e,t)}function p(e,t){t.option("braces")?m(e,t):!e||e instanceof ge?t.force_semicolon():e.print(t)}function _(e,t){return e.args.length>0||t.option("beautify")}function d(e){var t,n=e.toString(10),i=[n.replace(/^0\./,".").replace("e+","e")];return Math.floor(e)===e?(e>=0?i.push("0x"+e.toString(16).toLowerCase(),"0"+e.toString(8)):i.push("-0x"+(-e).toString(16).toLowerCase(),"-0"+(-e).toString(8)),(t=/^(.*?)(0+)$/.exec(e))&&i.push(t[1]+"e"+t[2].length)):(t=/^0?\.(0+)(.*)$/.exec(e))&&i.push(t[2]+"e-"+(t[1].length+t[2].length),n.substr(n.indexOf("."))),function(e){for(var t=e[0],n=t.length,i=1;i<e.length;++i)e[i].length<n&&(n=(t=e[i]).length);return t}(i)}function m(e,t){!e||e instanceof ge?t.print("{}"):e instanceof De?e.print(t):t.with_block(function(){t.indent(),e.print(t),t.newline()})}function E(e,t){e.forEach(function(e){e.DEFMETHOD("add_source_map",t)})}le.DEFMETHOD("print",function(e,t){var r=this,o=r._codegen;function a(){e.prepend_comments(r),r.add_source_map(e),o(r,e),e.append_comments(r)}r instanceof Me?n=r:!i&&r instanceof _e&&"use asm"==r.value&&(i=n),e.push_node(r),t||r.needs_parens(e)?e.with_parens(a):a(),e.pop_node(),r===i&&(i=null)}),le.DEFMETHOD("_print",le.prototype.print),le.DEFMETHOD("print_to_string",function(e){var t=bn(e);return this.print(t),t.get()}),r(le,l),r(Ie,function(e){if(!e.has_parens()&&T(e))return!0;var t;if(e.option("webkit")&&((t=e.parent())instanceof dt&&t.expression===this))return!0;return!!e.option("wrap_iife")&&((t=e.parent())instanceof ft&&t.expression===this)}),r(Le,function(e){var t=e.parent();return t instanceof dt&&t.expression===this}),r(yt,function(e){return!e.has_parens()&&T(e)}),r(xt,T),r(ht,function(e){var t=e.parent();return t instanceof dt&&t.expression===this||t instanceof ft&&t.expression===this||t instanceof St&&"**"===t.operator&&this instanceof Dt&&t.left===this&&"++"!==this.operator&&"--"!==this.operator}),r(hn,function(e){var t=e.parent();return t instanceof dt&&t.expression===this||t instanceof ft&&t.expression===this||e.option("safari10")&&t instanceof Dt}),r(_t,function(e){var t=e.parent();return t instanceof ft||t instanceof ht||t instanceof St||t instanceof lt||t instanceof dt||t instanceof bt||t instanceof Ct||t instanceof At||t instanceof Le||t instanceof Tt||t instanceof we||t instanceof Fe&&this===t.object||t instanceof Dn||t instanceof ct}),r(St,function(e){var t=e.parent();if(t instanceof ft&&t.expression===this)return!0;if(t instanceof ht)return!0;if(t instanceof dt&&t.expression===this)return!0;if(t instanceof St){var n=t.operator,i=oe[n],r=this.operator,o=oe[r];if(i>o||i==o&&(this===t.right||"**"==n))return!0}}),r(Dn,function(e){var t=e.parent();return t instanceof St&&"="!==t.operator||(t instanceof ft&&t.expression===this||(t instanceof At&&t.condition===this||(t instanceof ht||(t instanceof dt&&t.expression===this||void 0))))}),r(dt,function(e){var t=e.parent();if(t instanceof pt&&t.expression===this){var n=!1;return this.walk(new gn(function(e){return!!(n||e instanceof Me)||(e instanceof ft?(n=!0,!0):void 0)})),n}}),r(ft,function(e){var t,n=e.parent();return!!(n instanceof pt&&n.expression===this||n instanceof ct&&n.is_default&&this.expression instanceof Ie)||this.expression instanceof Ie&&n instanceof dt&&n.expression===this&&(t=e.parent(1))instanceof vt&&t.left===n}),r(pt,function(e){var t=e.parent();if(!_(this,e)&&(t instanceof dt||t instanceof ft&&t.expression===this))return!0}),r(an,function(e){var t=e.parent();if(t instanceof dt&&t.expression===this){var n=this.getValue();if(n<0||/^0/.test(d(n)))return!0}}),r([vt,At],function(e){var t=e.parent();return t instanceof ht||(t instanceof St&&!(t instanceof vt)||(t instanceof ft&&t.expression===this||(t instanceof At&&t.condition===this||(t instanceof dt&&t.expression===this||(this instanceof vt&&this.left instanceof Pe&&!1===this.left.is_array||void 0)))))}),e(_e,function(e,t){t.print_string(e.value,e.quote),t.semicolon()}),e(we,function(e,t){t.print("..."),e.expression.print(t)}),e(Pe,function(e,t){t.print(e.is_array?"[":"{");var n=e.names.length;e.names.forEach(function(e,i){i>0&&t.comma(),e.print(t),i==n-1&&e instanceof pn&&t.comma()}),t.print(e.is_array?"]":"}")}),e(pe,function(e,t){t.print("debugger"),t.semicolon()}),Se.DEFMETHOD("_do_print_body",function(e){p(this.body,e)}),e(fe,function(e,t){e.body.print(t),t.semicolon()}),e(Ne,function(e,t){o(e.body,!0,t,!0),t.print("")}),e(Ae,function(e,t){e.label.print(t),t.colon(),e.body.print(t)}),e(de,function(e,t){e.body.print(t),t.semicolon()}),e(De,function(e,t){s(e,t)}),e(ge,function(e,t){t.semicolon()}),e(be,function(e,t){t.print("do"),t.space(),m(e.body,t),t.space(),t.print("while"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.semicolon()}),e(ye,function(e,t){t.print("while"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.space(),e._do_print_body(t)}),e(Ce,function(e,t){t.print("for"),t.space(),t.with_parens(function(){e.init?(e.init instanceof it?e.init.print(t):u(e.init,t,!0),t.print(";"),t.space()):t.print(";"),e.condition?(e.condition.print(t),t.print(";"),t.space()):t.print(";"),e.step&&e.step.print(t)}),t.space(),e._do_print_body(t)}),e(Oe,function(e,t){t.print("for"),e.await&&(t.space(),t.print("await")),t.space(),t.with_parens(function(){e.init.print(t),t.space(),t.print(e instanceof Fe?"of":"in"),t.space(),e.object.print(t)}),t.space(),e._do_print_body(t)}),e(Re,function(e,t){t.print("with"),t.space(),t.with_parens(function(){e.expression.print(t)}),t.space(),e._do_print_body(t)}),xe.DEFMETHOD("_do_print",function(e,t){var n=this;t||(n.async&&(e.print("async"),e.space()),e.print("function"),n.is_generator&&e.star(),n.name&&e.space()),n.name instanceof kt?n.name.print(e):t&&n.name instanceof le&&e.with_square(function(){n.name.print(e)}),e.with_parens(function(){n.argnames.forEach(function(t,n){n&&e.comma(),t.print(e)})}),e.space(),s(n,e,!0)}),e(xe,function(e,t){e._do_print(t)}),e(Be,function(e,t){var n=e.prefix,i=n instanceof Le||n instanceof St||n instanceof At||n instanceof _t||n instanceof ht;i&&t.print("("),e.prefix.print(t),i&&t.print(")"),e.template_string.print(t)}),e(Ke,function(e,t){var n=t.parent()instanceof Be;t.print("`");for(var i=0;i<e.segments.length;i++)e.segments[i]instanceof Ue?n?t.print(e.segments[i].raw):t.print_template_string_chars(e.segments[i].value):(t.print("${"),e.segments[i].print(t),t.print("}"));t.print("`")}),Le.DEFMETHOD("_do_print",function(e){var t=this,n=e.parent(),i=n instanceof St||n instanceof ht||n instanceof ft&&t===n.expression;i&&e.print("("),t.async&&(e.print("async"),e.space()),1===t.argnames.length&&t.argnames[0]instanceof kt?t.argnames[0].print(e):e.with_parens(function(){t.argnames.forEach(function(t,n){n&&e.comma(),t.print(e)})}),e.space(),e.print("=>"),e.space(),t.body instanceof le?t.body.print(e):s(t,e),i&&e.print(")")}),He.DEFMETHOD("_do_print",function(e,t){e.print(t),this.value&&(e.space(),this.value.print(e)),e.semicolon()}),e(Xe,function(e,t){e._do_print(t,"return")}),e(ze,function(e,t){e._do_print(t,"throw")}),e(Dn,function(e,t){var n=e.is_star?"*":"";t.print("yield"+n),e.expression&&(t.space(),e.expression.print(t))}),e(hn,function(e,t){t.print("await"),t.space();var n=e.expression,i=!(n instanceof ft||n instanceof Zt||n instanceof dt||n instanceof ht||n instanceof rn);i&&t.print("("),e.expression.print(t),i&&t.print(")")}),We.DEFMETHOD("_do_print",function(e,t){e.print(t),this.label&&(e.space(),this.label.print(e)),e.semicolon()}),e(Ye,function(e,t){e._do_print(t,"break")}),e(qe,function(e,t){e._do_print(t,"continue")}),e($e,function(e,t){t.print("if"),t.space(),t.with_parens(function(){e.condition.print(t)}),t.space(),e.alternative?(!function(e,t){var n=e.body;if(t.option("braces")||t.option("ie8")&&n instanceof be)return m(n,t);if(!n)return t.force_semicolon();for(;;)if(n instanceof $e){if(!n.alternative)return void m(e.body,t);n=n.alternative}else{if(!(n instanceof Se))break;n=n.body}p(e.body,t)}(e,t),t.space(),t.print("else"),t.space(),e.alternative instanceof $e?e.alternative.print(t):p(e.alternative,t)):e._do_print_body(t)}),e(je,function(e,t){t.print("switch"),t.space(),t.with_parens(function(){e.expression.print(t)}),t.space();var n=e.body.length-1;n<0?a(e,t):t.with_block(function(){e.body.forEach(function(e,i){t.indent(!0),e.print(t),i<n&&e.body.length>0&&t.newline()})})}),Ze.DEFMETHOD("_do_print_body",function(e){e.newline(),this.body.forEach(function(t){e.indent(),t.print(e),e.newline()})}),e(Qe,function(e,t){t.print("default:"),e._do_print_body(t)}),e(Je,function(e,t){t.print("case"),t.space(),e.expression.print(t),t.print(":"),e._do_print_body(t)}),e(et,function(e,t){t.print("try"),t.space(),s(e,t),e.bcatch&&(t.space(),e.bcatch.print(t)),e.bfinally&&(t.space(),e.bfinally.print(t))}),e(tt,function(e,t){t.print("catch"),e.argname&&(t.space(),t.with_parens(function(){e.argname.print(t)})),t.space(),s(e,t)}),e(nt,function(e,t){t.print("finally"),t.space(),s(e,t)}),it.DEFMETHOD("_do_print",function(e,t){e.print(t),e.space(),this.definitions.forEach(function(t,n){n&&e.comma(),t.print(e)});var n=e.parent();(!(n instanceof Ce||n instanceof Oe)||n&&n.init!==this)&&e.semicolon()}),e(ot,function(e,t){e._do_print(t,"let")}),e(rt,function(e,t){e._do_print(t,"var")}),e(at,function(e,t){e._do_print(t,"const")}),e(ut,function(e,t){t.print("import"),t.space(),e.imported_name&&e.imported_name.print(t),e.imported_name&&e.imported_names&&(t.print(","),t.space()),e.imported_names&&(1===e.imported_names.length&&"*"===e.imported_names[0].foreign_name.name?e.imported_names[0].print(t):(t.print("{"),e.imported_names.forEach(function(n,i){t.space(),n.print(t),i<e.imported_names.length-1&&t.print(",")}),t.space(),t.print("}"))),(e.imported_name||e.imported_names)&&(t.space(),t.print("from"),t.space()),e.module_name.print(t),t.semicolon()}),e(st,function(e,t){var n=t.parent()instanceof ut,i=e.name.definition();(i&&i.mangled_name||e.name.name)!==e.foreign_name.name?(n?t.print(e.foreign_name.name):e.name.print(t),t.space(),t.print("as"),t.space(),n?e.name.print(t):t.print(e.foreign_name.name)):e.name.print(t)}),e(ct,function(e,t){if(t.print("export"),t.space(),e.is_default&&(t.print("default"),t.space()),e.exported_names)1===e.exported_names.length&&"*"===e.exported_names[0].name.name?e.exported_names[0].print(t):(t.print("{"),e.exported_names.forEach(function(n,i){t.space(),n.print(t),i<e.exported_names.length-1&&t.print(",")}),t.space(),t.print("}"));else if(e.exported_value)e.exported_value.print(t);else if(e.exported_definition&&(e.exported_definition.print(t),e.exported_definition instanceof it))return;e.module_name&&(t.space(),t.print("from"),t.space(),e.module_name.print(t)),(e.exported_value&&!(e.exported_value instanceof Ve||e.exported_value instanceof Ie||e.exported_value instanceof Nt)||e.module_name||e.exported_names)&&t.semicolon()}),e(lt,function(e,t){if(e.name.print(t),e.value){t.space(),t.print("="),t.space();var n=t.parent(1),i=n instanceof Ce||n instanceof Oe;u(e.value,t,i)}}),e(ft,function(e,t){e.expression.print(t),e instanceof pt&&!_(e,t)||((e.expression instanceof ft||e.expression instanceof xe)&&t.add_mapping(e.start),t.with_parens(function(){e.args.forEach(function(e,n){n&&t.comma(),e.print(t)})}))}),e(pt,function(e,t){t.print("new"),t.space(),ft.prototype._codegen(e,t)}),_t.DEFMETHOD("_do_print",function(e){this.expressions.forEach(function(t,n){n>0&&(e.comma(),e.should_break()&&(e.newline(),e.indent())),t.print(e)})}),e(_t,function(e,t){e._do_print(t)}),e(mt,function(e,t){var n=e.expression;n.print(t);var i=e.property;t.option("ie8")&&O(i)?(t.print("["),t.add_mapping(e.end),t.print_string(i),t.print("]")):(n instanceof an&&n.getValue()>=0&&(/[xa-f.)]/i.test(t.last())||t.print(".")),t.print("."),t.add_mapping(e.end),t.print_name(i))}),e(Et,function(e,t){e.expression.print(t),t.print("["),e.property.print(t),t.print("]")}),e(Dt,function(e,t){var n=e.operator;t.print(n),(/^[a-z]/i.test(n)||/[+-]$/.test(n)&&e.expression instanceof Dt&&/^[+-]/.test(e.expression.operator))&&t.space(),e.expression.print(t)}),e(gt,function(e,t){e.expression.print(t),t.print(e.operator)}),e(St,function(e,t){var n=e.operator;e.left.print(t),">"==n[0]&&e.left instanceof gt&&"--"==e.left.operator?t.print(" "):t.space(),t.print(n),("<"==n||"<<"==n)&&e.right instanceof Dt&&"!"==e.right.operator&&e.right.expression instanceof Dt&&"--"==e.right.expression.operator?t.print(" "):t.space(),e.right.print(t)}),e(At,function(e,t){e.condition.print(t),t.space(),t.print("?"),t.space(),e.consequent.print(t),t.space(),t.colon(),e.alternative.print(t)}),e(bt,function(e,t){t.with_square(function(){var n=e.elements,i=n.length;i>0&&t.space(),n.forEach(function(e,n){n&&t.comma(),e.print(t),n===i-1&&e instanceof pn&&t.comma()}),i>0&&t.space()})}),e(yt,function(e,t){e.properties.length>0?t.with_block(function(){e.properties.forEach(function(e,n){n&&(t.print(","),t.newline()),t.indent(),e.print(t)}),t.newline()}):a(e,t)}),e(Nt,function(e,t){if(t.print("class"),t.space(),e.name&&(e.name.print(t),t.space()),e.extends){var n=!(e.extends instanceof Zt||e.extends instanceof dt||e.extends instanceof xt||e.extends instanceof Ie);t.print("extends"),n?t.print("("):t.space(),e.extends.print(t),n?t.print(")"):t.space()}e.properties.length>0?t.with_block(function(){e.properties.forEach(function(e,n){n&&t.newline(),t.indent(),e.print(t)}),t.newline()}):t.print("{}")}),e(It,function(e,t){t.print("new.target")}),e(Ot,function(e,t){function n(e){var t=e.definition();return t?t.mangled_name||t.name:e.name}var i=t.option("shorthand");i&&e.value instanceof kt&&j(e.key)&&n(e.value)===e.key&&Y(e.key)?f(e.key,e.quote,t):i&&e.value instanceof Tt&&e.value.left instanceof kt&&j(e.key)&&n(e.value.left)===e.key?(f(e.key,e.quote,t),t.space(),t.print("="),t.space(),e.value.right.print(t)):(e.key instanceof le?t.with_square(function(){e.key.print(t)}):f(e.key,e.quote,t),t.colon(),e.value.print(t))}),Ct.DEFMETHOD("_print_getter_setter",function(e,t){var n=this;n.static&&(t.print("static"),t.space()),e&&(t.print(e),t.space()),n.key instanceof Ht?f(n.key.name,n.quote,t):t.with_square(function(){n.key.print(t)}),n.value._do_print(t,!0)}),e(Ft,function(e,t){e._print_getter_setter("set",t)}),e(Rt,function(e,t){e._print_getter_setter("get",t)}),e(Mt,function(e,t){var n;e.is_generator&&e.async?n="async*":e.is_generator?n="*":e.async&&(n="async"),e._print_getter_setter(n,t)}),kt.DEFMETHOD("_do_print",function(e){var t=this.definition();e.print_name(t?t.mangled_name||t.name:this.name)}),e(kt,function(e,t){e._do_print(t)}),e(pn,c),e(tn,function(e,t){t.print("this")}),e(nn,function(e,t){t.print("super")}),e(rn,function(e,t){t.print(e.getValue())}),e(on,function(e,n){n.print_string(e.getValue(),e.quote,t)}),e(an,function(e,t){i&&e.start&&null!=e.start.raw?t.print(e.start.raw):t.print(d(e.getValue()))}),e(sn,function(e,t){var n=e.getValue().toString();n=t.to_utf8(n),t.print(n);var i=t.parent();i instanceof St&&/^in/.test(i.operator)&&i.left===e&&t.print(" ")}),E([le,Ae,Ne],c),E([bt,De,tt,Nt,rn,pe,it,_e,nt,Ge,xe,pt,yt,Se,kt,je,Ze,et],function(e){e.add_mapping(this.start)}),E([Rt,Ft],function(e){e.add_mapping(this.start,this.key.name)}),E([Ct],function(e){e.add_mapping(this.start,this.key)})}(),yn.next_id=1;var Cn=1,On=2;function Fn(e,t){var n=e.enclosed;e:for(;;){var r=Rn(++e.cname);if(Y(r)&&!i(r,t.reserved)){for(var o=n.length;--o>=0;){var a=n[o];if(r==(a.mangled_name||a.unmangleable(t)&&a.name))continue e}return r}}}yn.prototype={unmangleable:function(e){return e||(e={}),this.global&&!e.toplevel||this.export&Cn||this.undeclared||!e.eval&&this.scope.pinned()||(this.orig[0]instanceof Xt||this.orig[0]instanceof Gt)&&b(e.keep_fnames,this.orig[0].name)||this.orig[0]instanceof Ht||(this.orig[0]instanceof Wt||this.orig[0]instanceof zt)&&b(e.keep_classnames,this.orig[0].name)},mangle:function(e){var t=e.cache&&e.cache.props;if(this.global&&t&&t.has(this.name))this.mangled_name=t.get(this.name);else if(!this.mangled_name&&!this.unmangleable(e)){var n,i=this.scope,r=this.orig[0];e.ie8&&r instanceof Xt&&(i=i.parent_scope),(n=this.redefined())?this.mangled_name=n.mangled_name||n.name:this.mangled_name=i.next_mangled(e,this),this.global&&t&&t.set(this.name,this.mangled_name)}},redefined:function(){return this.defun&&this.defun.variables.get(this.name)}},Ne.DEFMETHOD("figure_out_scope",function(e){e=s(e,{cache:null,ie8:!1,safari10:!1});var t=this,n=t.parent_scope=null,i=new A,r=null,o=null,a=[],u=new gn(function(t,s){if(t.is_block_scope()){var c=n;return t.block_scope=n=new Me(t),n.init_scope_vars(c),t instanceof Me||(n.uses_with=c.uses_with,n.uses_eval=c.uses_eval,n.directives=c.directives),e.safari10&&(t instanceof Ce||t instanceof Oe)&&a.push(n),s(),n=c,!0}if(t instanceof Pe)return o=t,s(),o=null,!0;if(t instanceof Me){t.init_scope_vars(n);c=n;var l=r,f=i;return r=n=t,i=new A,s(),n=c,r=l,i=f,!0}if(t instanceof Ae){var p=t.label;if(i.has(p.name))throw new Error(E("Label {name} defined twice",p));return i.set(p.name,p),s(),i.del(p.name),!0}if(t instanceof Re)for(var _=n;_;_=_.parent_scope)_.uses_with=!0;else{if(t instanceof kt&&(t.scope=n),t instanceof jt&&(t.thedef=t,t.references=[]),t instanceof Xt)r.def_function(t,"arguments"==t.name?void 0:r);else if(t instanceof Gt)h((t.scope=r.parent_scope.get_defun_scope()).def_function(t,r),1);else if(t instanceof Wt)h(r.def_variable(t,r),1);else if(t instanceof qt)n.def_variable(t);else if(t instanceof zt)h((t.scope=r.parent_scope).def_function(t,r),1);else if(t instanceof Vt||t instanceof Kt||t instanceof Bt){if(S((d=t instanceof Pt?n.def_variable(t,null):r.def_variable(t,"SymbolVar"==t.TYPE?null:void 0)).orig,function(e){return e===t||(t instanceof Pt?e instanceof Xt:!(e instanceof Kt||e instanceof Bt))})||Q(t.name+" redeclared",t.start.file,t.start.line,t.start.col,t.start.pos),t instanceof Ut||h(d,2),d.destructuring=o,r!==n){t.mark_enclosed(e);var d=n.find_variable(t);t.thedef!==d&&(t.thedef=d,t.reference(e))}}else if(t instanceof Yt)n.def_variable(t).defun=r;else if(t instanceof en){var m=i.get(t.name);if(!m)throw new Error(E("Undefined label {name} [{line},{col}]",{name:t.name,line:t.start.line,col:t.start.col}));t.thedef=m}n instanceof Ne||!(t instanceof ct||t instanceof ut)||Q(t.TYPE+" statement may only appear at top level",t.start.file,t.start.line,t.start.col,t.start.pos)}function h(e,t){if(o){var n=0;do{t++}while(u.parent(n++)!==o)}var i=u.parent(t);if(e.export=i instanceof ct&&Cn){var r=i.exported_definition;(r instanceof Ve||r instanceof wt)&&i.is_default&&(e.export=On)}}});t.walk(u),t.globals=new A;u=new gn(function(n,i){if(n instanceof We&&n.label)return n.label.thedef.references.push(n),!0;if(n instanceof Zt){var r,o=n.name;if("eval"==o&&u.parent()instanceof ft)for(var a=n.scope;a&&!a.uses_eval;a=a.parent_scope)a.uses_eval=!0;return u.parent()instanceof st&&u.parent(1).module_name||!(r=n.scope.find_variable(o))?(r=t.def_global(n),n instanceof Qt&&(r.export=Cn)):r.scope instanceof xe&&"arguments"==o&&(r.scope.uses_arguments=!0),n.thedef=r,n.reference(e),!n.scope.is_block_scope()||r.orig[0]instanceof Pt||(n.scope=n.scope.get_defun_scope()),!0}var s;if(n instanceof Yt&&(s=n.definition().redefined()))for(a=n.scope;a&&(m(a.enclosed,s),a!==s.scope);)a=a.parent_scope});if(t.walk(u),(e.ie8||e.safari10)&&t.walk(new gn(function(n,i){if(n instanceof Yt){var r=n.name,o=n.thedef.references,a=n.thedef.defun,s=a.find_variable(r)||t.globals.get(r)||a.def_variable(n);return o.forEach(function(t){t.thedef=s,t.reference(e)}),n.thedef=s,n.reference(e),!0}})),e.safari10)for(var c=0;c<a.length;c++){(n=a[c]).parent_scope.variables.each(function(e){m(n.enclosed,e)})}}),Ne.DEFMETHOD("def_global",function(e){var t=this.globals,n=e.name;if(t.has(n))return t.get(n);var i=new yn(this,e);return i.undeclared=!0,i.global=!0,t.set(n,i),i}),Me.DEFMETHOD("init_scope_vars",function(e){this.variables=new A,this.functions=new A,this.uses_with=!1,this.uses_eval=!1,this.parent_scope=e,this.enclosed=[],this.cname=-1}),le.DEFMETHOD("is_block_scope",l),Nt.DEFMETHOD("is_block_scope",l),xe.DEFMETHOD("is_block_scope",l),Ne.DEFMETHOD("is_block_scope",l),Ze.DEFMETHOD("is_block_scope",l),he.DEFMETHOD("is_block_scope",f),ve.DEFMETHOD("is_block_scope",f),xe.DEFMETHOD("init_scope_vars",function(){Me.prototype.init_scope_vars.apply(this,arguments),this.uses_arguments=!1,this.def_variable(new Ut({name:"arguments",start:this.start,end:this.end}))}),Le.DEFMETHOD("init_scope_vars",function(){Me.prototype.init_scope_vars.apply(this,arguments),this.uses_arguments=!1}),kt.DEFMETHOD("mark_enclosed",function(e){for(var t=this.definition(),n=this.scope;n&&(m(n.enclosed,t),e.keep_fnames&&n.functions.each(function(n){b(e.keep_fnames,n.name)&&m(t.scope.enclosed,n)}),n!==t.scope);)n=n.parent_scope}),kt.DEFMETHOD("reference",function(e){this.definition().references.push(this),this.mark_enclosed(e)}),Me.DEFMETHOD("find_variable",function(e){return e instanceof kt&&(e=e.name),this.variables.get(e)||this.parent_scope&&this.parent_scope.find_variable(e)}),Me.DEFMETHOD("def_function",function(e,t){var n=this.def_variable(e,t);return(!n.init||n.init instanceof Ve)&&(n.init=t),this.functions.set(e.name,n),n}),Me.DEFMETHOD("def_variable",function(e,t){var n=this.variables.get(e.name);return n?(n.orig.push(e),n.init&&(n.scope!==e.scope||n.init instanceof Ie)&&(n.init=t)):(n=new yn(this,e,t),this.variables.set(e.name,n),n.global=!this.parent_scope),e.thedef=n}),Me.DEFMETHOD("next_mangled",function(e){return Fn(this,e)}),Ne.DEFMETHOD("next_mangled",function(e){var t;do{t=Fn(this,e)}while(i(t,this.mangled_names));return t}),Ie.DEFMETHOD("next_mangled",function(e,t){for(var n=t.orig[0]instanceof Ut&&this.name&&this.name.definition(),i=n?n.mangled_name||n.name:null;;){var r=Fn(this,e);if(!i||i!=r)return r}}),kt.DEFMETHOD("unmangleable",function(e){var t=this.definition();return!t||t.unmangleable(e)}),jt.DEFMETHOD("unmangleable",l),kt.DEFMETHOD("unreferenced",function(){return!this.definition().references.length&&!this.scope.pinned()}),kt.DEFMETHOD("definition",function(){return this.thedef}),kt.DEFMETHOD("global",function(){return this.definition().global}),Ne.DEFMETHOD("_default_mangler_options",function(e){return(e=s(e,{eval:!1,ie8:!1,keep_classnames:!1,keep_fnames:!1,module:!1,reserved:[],toplevel:!1})).module&&(e.toplevel=!0),Array.isArray(e.reserved)||(e.reserved=[]),m(e.reserved,"arguments"),e}),Ne.DEFMETHOD("mangle_names",function(e){e=this._default_mangler_options(e);var t=-1,n=[],r=this.mangled_names=[];e.cache&&(this.globals.each(a),e.cache.props&&e.cache.props.each(function(e){m(r,e)}));var o=new gn(function(i,r){if(i instanceof Ae){var o=t;return r(),t=o,!0}if(i instanceof Me)i.variables.each(a);else if(i.is_block_scope())i.block_scope.variables.each(a);else{if(i instanceof jt){var s;do{s=Rn(++t)}while(!Y(s));return i.mangled_name=s,!0}!e.ie8&&!e.safari10&&i instanceof Yt&&n.push(i.definition())}});function a(t){i(t.name,e.reserved)||t.export&Cn||n.push(t)}this.walk(o),n.forEach(function(t){t.mangle(e)})}),Ne.DEFMETHOD("find_colliding_names",function(e){var t=e.cache&&e.cache.props,n=Object.create(null);return e.reserved.forEach(i),this.globals.each(r),this.walk(new gn(function(e){e instanceof Me&&e.variables.each(r),e instanceof Yt&&r(e.definition())})),n;function i(e){n[e]=!0}function r(n){var r=n.name;if(n.global&&t&&t.has(r))r=t.get(r);else if(!n.unmangleable(e))return;i(r)}}),Ne.DEFMETHOD("expand_names",function(e){Rn.reset(),Rn.sort(),e=this._default_mangler_options(e);var t=this.find_colliding_names(e),n=0;function r(r){if(!(r.global&&e.cache||r.unmangleable(e)||i(r.name,e.reserved))){var o=r.redefined();r.name=o?o.name:function(){var e;do{e=Rn(n++)}while(t[e]||!Y(e));return e}(),r.orig.forEach(function(e){e.name=r.name}),r.references.forEach(function(e){e.name=r.name})}}this.globals.each(r),this.walk(new gn(function(e){e instanceof Me&&e.variables.each(r),e instanceof Yt&&r(e.definition())}))}),le.DEFMETHOD("tail_node",p),_t.DEFMETHOD("tail_node",function(){return this.expressions[this.expressions.length-1]}),Ne.DEFMETHOD("compute_char_frequency",function(e){e=this._default_mangler_options(e);try{le.prototype.print=function(t,n){this._print(t,n),this instanceof kt&&!this.unmangleable(e)?Rn.consider(this.name,-1):e.properties&&(this instanceof mt?Rn.consider(this.property,-1):this instanceof Et&&function e(t){t instanceof on?Rn.consider(t.value,-1):t instanceof At?(e(t.consequent),e(t.alternative)):t instanceof _t&&e(t.tail_node())}(this.property))},Rn.consider(this.print_to_string(),1)}finally{le.prototype.print=le.prototype._print}Rn.sort()});var Rn=function(){var e,t,n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_".split(""),i="0123456789".split("");function r(){t=Object.create(null),n.forEach(function(e){t[e]=0}),i.forEach(function(e){t[e]=0})}function o(e,n){return t[n]-t[e]}function a(t){var n="",i=54;t++;do{n+=e[--t%i],t=Math.floor(t/i),i=64}while(t>0);return n}return a.consider=function(e,n){for(var i=e.length;--i>=0;)t[e[i]]+=n},a.sort=function(){e=D(n,o).concat(D(i,o))},a.reset=r,r(),a}();function Mn(e,t){if(!(this instanceof Mn))return new Mn(e,t);Sn.call(this,this.before,this.after),void 0===e.defaults||e.defaults||(t=!0),this.options=s(e,{arguments:!1,arrows:!t,booleans:!t,booleans_as_integers:!1,collapse_vars:!t,comparisons:!t,computed_props:!t,conditionals:!t,dead_code:!t,defaults:!0,directives:!t,drop_console:!1,drop_debugger:!t,ecma:5,evaluate:!t,expression:!1,global_defs:!1,hoist_funs:!1,hoist_props:!t,hoist_vars:!1,ie8:!1,if_return:!t,inline:!t,join_vars:!t,keep_classnames:!1,keep_fargs:!0,keep_fnames:!1,keep_infinity:!1,loops:!t,module:!1,negate_iife:!t,passes:1,properties:!t,pure_getters:!t&&"strict",pure_funcs:null,reduce_funcs:!t,reduce_vars:!t,sequences:!t,side_effects:!t,switches:!t,top_retain:null,toplevel:!(!e||!e.top_retain),typeofs:!t,unsafe:!1,unsafe_arrows:!1,unsafe_comps:!1,unsafe_Function:!1,unsafe_math:!1,unsafe_methods:!1,unsafe_proto:!1,unsafe_regexp:!1,unsafe_undefined:!1,unused:!t,warnings:!1},!0);var n=this.options.global_defs;if("object"==typeof n)for(var i in n)/^@/.test(i)&&v(n,i)&&(n[i.slice(1)]=se(n[i],{expression:!0}));!0===this.options.inline&&(this.options.inline=3);var r=this.options.pure_funcs;this.pure_funcs="function"==typeof r?r:r?function(e){return r.indexOf(e.expression.print_to_string())<0}:f;var o=this.options.top_retain;o instanceof RegExp?this.top_retain=function(e){return o.test(e.name)}:"function"==typeof o?this.top_retain=o:o&&("string"==typeof o&&(o=o.split(/,/)),this.top_retain=function(e){return o.indexOf(e.name)>=0}),this.options.module&&(this.directives["use strict"]=!0,this.options.toplevel=!0);var a=this.options.toplevel;this.toplevel="string"==typeof a?{funcs:/funcs/.test(a),vars:/vars/.test(a)}:{funcs:a,vars:a};var u=this.options.sequences;this.sequences_limit=1==u?800:0|u,this.warnings_produced={}}Mn.prototype=new Sn,u(Mn.prototype,{option:function(e){return this.options[e]},exposed:function(e){if(e.export)return!0;if(e.global)for(var t=0,n=e.orig.length;t<n;t++)if(!this.toplevel[e.orig[t]instanceof Gt?"funcs":"vars"])return!0;return!1},in_boolean_context:function(){if(!this.option("booleans"))return!1;for(var e,t=this.self(),n=0;e=this.parent(n);n++){if(e instanceof de||e instanceof At&&e.condition===t||e instanceof Te&&e.condition===t||e instanceof Ce&&e.condition===t||e instanceof $e&&e.condition===t||e instanceof Dt&&"!"==e.operator&&e.expression===t)return!0;if(!(e instanceof St&&("&&"==e.operator||"||"==e.operator)||e instanceof At||e.tail_node()===t))return!1;t=e}},compress:function(e){e=e.resolve_defines(this),this.option("expression")&&e.process_expression(!0);for(var t=+this.options.passes||1,n=1/0,i=!1,r={ie8:this.option("ie8")},o=0;o<t;o++)if(e.figure_out_scope(r),0===o&&this.option("drop_console")&&(e=e.drop_console()),(o>0||this.option("reduce_vars"))&&e.reset_opt_flags(this),e=e.transform(this),t>1){var a=0;if(e.walk(new gn(function(){a++})),this.info("pass "+o+": last_count: "+n+", count: "+a),a<n)n=a,i=!1;else{if(i)break;i=!0}}return this.option("expression")&&e.process_expression(!1),e},info:function(){"verbose"==this.options.warnings&&le.warn.apply(le,arguments)},warn:function(e,t){if(this.options.warnings){var n=E(e,t);n in this.warnings_produced||(this.warnings_produced[n]=!0,le.warn.apply(le,arguments))}},clear_warnings:function(){this.warnings_produced={}},before:function(e,t,n){if(e._squeezed)return e;var i=!1;e instanceof Me&&(e=(e=e.hoist_properties(this)).hoist_declarations(this),i=!0),t(e,this),t(e,this);var r=e.optimize(this);return i&&r instanceof Me&&(r.drop_unused(this),t(r,this)),r===e&&(r._squeezed=!0),r}}),function(){function e(e,t){e.DEFMETHOD("optimize",function(e){if(this._optimized)return this;if(e.has_directive("use asm"))return this;var n=t(this,e);return n._optimized=!0,n})}function t(e,t){if(!((t=G(t))instanceof le)){var n;if(e instanceof bt){var i=e.elements;if("length"==t)return y(i.length,e);"number"==typeof t&&t in i&&(n=i[t])}else if(e instanceof yt){t=""+t;for(var r=e.properties,o=r.length;--o>=0;){if(!(r[o]instanceof Ot))return;n||r[o].key!==t||(n=r[o].value)}}return n instanceof Zt&&n.fixed_value()||n}}function n(e,i,r,o,a,s){var u=i.parent(a),c=W(r,u);if(c)return c;if(!s&&u instanceof ft&&u.expression===r&&!(o instanceof Le)&&!(o instanceof Nt)&&!u.is_expr_pure(e)&&(!(o instanceof Ie)||!(u instanceof pt)&&o.contains_this()))return!0;if(u instanceof bt)return n(e,i,u,u,a+1);if(u instanceof Ot&&r===u.value){var l=i.parent(a+1);return n(e,i,l,l,a+2)}if(u instanceof dt&&u.expression===r){var f=t(o,u.property);return!s&&n(e,i,u,f,a+1)}}function o(e){return e instanceof Le||e instanceof Ie}function a(e){if(e instanceof tn)return!0;if(e instanceof Zt)return e.definition().orig[0]instanceof Xt;if(e instanceof dt){if((e=e.expression)instanceof Zt){if(e.is_immutable())return!1;e=e.fixed_value()}return!e||!(e instanceof sn)&&(e instanceof rn||a(e))}return!1}function s(e,t){if(!(e instanceof Zt))return!1;for(var n=e.definition().orig,i=n.length;--i>=0;)if(n[i]instanceof t)return!0}function u(e,t){for(var n,i=0;(n=e.parent(i++))&&!(n instanceof Me);)if(n instanceof tt&&n.argname){n=n.argname.definition().scope;break}return n.find_variable(t)}function m(e,t,n){return n||(n={}),t&&(n.start||(n.start=t.start),n.end||(n.end=t.end)),new e(n)}function D(e,t){return 1==t.length?t[0]:m(_t,e,{expressions:t.reduce(O,[])})}function y(e,t){switch(typeof e){case"string":return m(on,t,{value:e});case"number":return isNaN(e)?m(ln,t):isFinite(e)?1/e<0?m(Dt,t,{operator:"-",expression:m(an,t,{value:-e})}):m(an,t,{value:e}):e<0?m(Dt,t,{operator:"-",expression:m(_n,t)}):m(_n,t);case"boolean":return m(e?En:mn,t);case"undefined":return m(fn,t);default:if(null===e)return m(cn,t,{value:null});if(e instanceof RegExp)return m(sn,t,{value:e});throw new Error(E("Can't handle constant of type: {type}",{type:typeof e}))}}function C(e,t,n){return e instanceof Dt&&"delete"==e.operator||e instanceof ft&&e.expression===t&&(n instanceof dt||n instanceof Zt&&"eval"==n.name)?D(t,[m(an,t,{value:0}),n]):n}function O(e,t){return t instanceof _t?e.push.apply(e,t.expressions):e.push(t),e}function F(e){if(null===e)return[];if(e instanceof De)return e.body;if(e instanceof ge)return[];if(e instanceof fe)return[e];throw new Error("Can't convert thing to statement array")}function R(e){return null===e||(e instanceof ge||e instanceof De&&0==e.body.length)}function M(e){return!(e instanceof wt||e instanceof Ve||e instanceof ot||e instanceof at||e instanceof ct||e instanceof ut)}function N(e){return e instanceof ve&&e.body instanceof De?e.body:e}function w(e){return"Call"==e.TYPE&&(e.expression instanceof Ie||w(e.expression))}function x(e){return e instanceof Zt&&e.definition().undeclared}e(le,function(e,t){return e}),Ne.DEFMETHOD("drop_console",function(){return this.transform(new Sn(function(e){if("Call"==e.TYPE){var t=e.expression;if(t instanceof dt){for(var n=t.expression;n.expression;)n=n.expression;if(x(n)&&"console"==n.name)return m(fn,e)}}}))}),le.DEFMETHOD("equivalent_to",function(e){return this.TYPE==e.TYPE&&this.print_to_string()==e.print_to_string()}),Me.DEFMETHOD("process_expression",function(e,t){var n=this,i=new Sn(function(r){if(e&&r instanceof de)return m(Xe,r,{value:r.body});if(!e&&r instanceof Xe){if(t){var o=r.value&&r.value.drop_side_effect_free(t,!0);return o?m(de,r,{body:o}):m(ge,r)}return m(de,r,{body:r.value||m(Dt,r,{operator:"void",expression:m(an,r,{value:0})})})}if(r instanceof Nt||r instanceof xe&&r!==n)return r;if(r instanceof he){var a=r.body.length-1;a>=0&&(r.body[a]=r.body[a].transform(i))}else r instanceof $e?(r.body=r.body.transform(i),r.alternative&&(r.alternative=r.alternative.transform(i))):r instanceof Re&&(r.body=r.body.transform(i));return r});n.transform(i)}),function(e){function i(e,t){t.assignments=0,t.chained=!1,t.direct_access=!1,t.escaped=!1,t.scope.pinned()?t.fixed=!1:t.orig[0]instanceof Bt||!e.exposed(t)?t.fixed=t.init:t.fixed=!1,t.recursive_refs=0,t.references=[],t.should_replace=void 0,t.single_use=void 0}function r(e,t,n){n.variables.each(function(n){i(t,n),null===n.fixed?(n.safe_ids=e.safe_ids,u(e,n,!0)):n.fixed&&(e.loop_ids[n.id]=e.in_loop,u(e,n,!0))})}function o(e,t){t.block_scope&&t.block_scope.variables.each(function(t){i(e,t)})}function a(e){e.safe_ids=Object.create(e.safe_ids)}function s(e){e.safe_ids=Object.getPrototypeOf(e.safe_ids)}function u(e,t,n){e.safe_ids[t.id]=n}function l(e,t){if("m"==t.single_use)return!1;if(e.safe_ids[t.id]){if(null==t.fixed){var n=t.orig[0];if(n instanceof Ut||"arguments"==n.name)return!1;t.fixed=m(fn,n)}return!0}return t.fixed instanceof Ve}function f(e,t,n){return void 0===t.fixed||(null===t.fixed&&t.safe_ids?(t.safe_ids[t.id]=!1,delete t.safe_ids,!0):!!v(e.safe_ids,t.id)&&(!!l(e,t)&&(!1!==t.fixed&&(!(null!=t.fixed&&(!n||t.references.length>t.assignments))&&S(t.orig,function(e){return!(e instanceof Bt||e instanceof Gt||e instanceof Xt)})))))}function p(e,n,i,r,o,a,s){var u=e.parent(a);if(o){if(o.is_constant())return;if(o instanceof xt)return}if(u instanceof vt&&"="==u.operator&&r===u.right||u instanceof ft&&(r!==u.expression||u instanceof pt)||u instanceof He&&r===u.value&&r.scope!==n.scope||u instanceof lt&&r===u.value||u instanceof Dn&&r===u.value&&r.scope!==n.scope)return!(s>1)||o&&o.is_constant_expression(i)||(s=1),void((!n.escaped||n.escaped>s)&&(n.escaped=s));if(u instanceof bt||u instanceof hn||u instanceof St&&X(u.operator)||u instanceof At&&r!==u.condition||u instanceof we||u instanceof _t&&r===u.tail_node())p(e,n,i,u,u,a+1,s);else if(u instanceof Ot&&r===u.value){var c=e.parent(a+1);p(e,n,i,c,c,a+2,s)}else if(u instanceof dt&&r===u.expression&&(p(e,n,i,u,o=t(o,u.property),a+1,s+1),o))return;a>0||u instanceof _t&&r!==u.tail_node()||u instanceof de||(n.direct_access=!0)}e(le,c);var _=new gn(function(e){if(e instanceof kt){var t=e.definition();t&&(e instanceof Zt&&t.references.push(e),t.fixed=!1)}});function d(e,t,n){this.inlined=!1;var i=e.safe_ids;return e.safe_ids=Object.create(null),r(e,n,this),t(),e.safe_ids=i,!0}function E(e,t,n){var i,o=this;return o.inlined=!1,a(e),r(e,n,o),!o.name&&(i=e.parent())instanceof ft&&i.expression===o&&o.argnames.forEach(function(t,n){if(t.definition){var r=t.definition();void 0!==r.fixed||o.uses_arguments&&!e.has_directive("use strict")?r.fixed=!1:(r.fixed=function(){return i.args[n]||m(fn,i)},e.loop_ids[r.id]=e.in_loop,u(e,r,!0))}}),t(),s(e),!0}e(ke,function(e,t,n){return a(e),r(e,n,this),t(),s(e),!0}),e(Le,E),e(vt,function(e,t,i){var r=this;if(r.left instanceof Pe)r.left.walk(_);else{var o=r.left;if(o instanceof Zt){var a=o.definition(),s=f(e,a,o.scope,r.right);if(a.assignments++,s){var c=a.fixed;if(c||"="==r.operator){var l="="==r.operator,d=l?r.right:r;if(!n(i,e,r,d,0))return a.references.push(o),l||(a.chained=!0),a.fixed=l?function(){return r.right}:function(){return m(St,r,{operator:r.operator.slice(0,-1),left:c instanceof le?c:c(),right:r.right})},u(e,a,!1),r.right.walk(e),u(e,a,!0),p(e,a,o.scope,r,d,0,1),!0}}}}}),e(St,function(e){if(X(this.operator))return this.left.walk(e),a(e),this.right.walk(e),s(e),!0}),e(he,function(e,t,n){o(n,this)}),e(Je,function(e){return a(e),this.expression.walk(e),s(e),a(e),me(this,e),s(e),!0}),e(xt,function(e,t){return this.inlined=!1,a(e),t(),s(e),!0}),e(At,function(e){return this.condition.walk(e),a(e),this.consequent.walk(e),s(e),a(e),this.alternative.walk(e),s(e),!0}),e(Qe,function(e,t){return a(e),t(),s(e),!0}),e(wt,d),e(Ve,d),e(be,function(e,t,n){o(n,this);var i=e.in_loop;return e.in_loop=this,a(e),this.body.walk(e),ue(this)&&(s(e),a(e)),this.condition.walk(e),s(e),e.in_loop=i,!0}),e(Ce,function(e,t,n){o(n,this),this.init&&this.init.walk(e);var i=e.in_loop;return e.in_loop=this,a(e),this.condition&&this.condition.walk(e),this.body.walk(e),this.step&&(ue(this)&&(s(e),a(e)),this.step.walk(e)),s(e),e.in_loop=i,!0}),e(Oe,function(e,t,n){o(n,this),this.init.walk(_),this.object.walk(e);var i=e.in_loop;return e.in_loop=this,a(e),this.body.walk(e),s(e),e.in_loop=i,!0}),e(Ie,E),e($e,function(e){return this.condition.walk(e),a(e),this.body.walk(e),s(e),this.alternative&&(a(e),this.alternative.walk(e),s(e)),!0}),e(Ae,function(e){return a(e),this.body.walk(e),s(e),!0}),e(Yt,function(){this.definition().fixed=!1}),e(Zt,function(e,t,i){var r,o=this.definition();o.references.push(this),1==o.references.length&&!o.fixed&&o.orig[0]instanceof Gt&&(e.loop_ids[o.id]=e.in_loop),void 0!==o.fixed&&l(e,o)?o.fixed&&((r=this.fixed_value())instanceof xe&&Se(e,o)?o.recursive_refs++:r&&!i.exposed(o)&&function(e,t,n){return t.option("unused")&&!n.scope.pinned()&&n.references.length-n.recursive_refs==1&&e.loop_ids[n.id]===e.in_loop}(e,i,o)?o.single_use=r instanceof xe&&!r.pinned()||r instanceof Nt||o.scope===this.scope&&r.is_constant_expression():o.single_use=!1,n(i,e,this,r,0,function(e){return!!e&&(e.is_constant()||e instanceof xe||e instanceof tn)}(r))&&(o.single_use?o.single_use="m":o.fixed=!1)):o.fixed=!1,p(e,o,this.scope,this,r,0,1)}),e(Ne,function(e,t,n){this.globals.each(function(e){i(n,e)}),r(e,n,this)}),e(et,function(e,t,n){return o(n,this),a(e),me(this,e),s(e),this.bcatch&&(a(e),this.bcatch.walk(e),s(e)),this.bfinally&&this.bfinally.walk(e),!0}),e(ht,function(e,t){var n=this;if("++"==n.operator||"--"==n.operator){var i=n.expression;if(i instanceof Zt){var r=i.definition(),o=f(e,r,!0);if(r.assignments++,o){var a=r.fixed;if(a)return r.references.push(i),r.chained=!0,r.fixed=function(){return m(St,n,{operator:n.operator.slice(0,-1),left:m(Dt,n,{operator:"+",expression:a instanceof le?a:a()}),right:m(an,n,{value:1})})},u(e,r,!0),!0}}}}),e(lt,function(e,t){var n=this;if(n.name instanceof Pe)n.name.walk(_);else{var i=n.name.definition();if(n.value){if(f(e,i,n.value))return i.fixed=function(){return n.value},e.loop_ids[i.id]=e.in_loop,u(e,i,!1),t(),u(e,i,!0),!0;i.fixed=!1}}}),e(ye,function(e,t,n){o(n,this);var i=e.in_loop;return e.in_loop=this,a(e),t(),s(e),e.in_loop=i,!0})}(function(e,t){e.DEFMETHOD("reduce_vars",t)}),Ne.DEFMETHOD("reset_opt_flags",function(e){var t=this,n=e.option("reduce_vars"),i=new gn(function(r,o){if(r._squeezed=!1,r._optimized=!1,n)return e.top_retain&&(i.parent()===t?r._top=!0:delete r._top),r.reduce_vars(i,o,e)});i.safe_ids=Object.create(null),i.in_loop=null,i.loop_ids=Object.create(null),t.walk(i)}),kt.DEFMETHOD("fixed_value",function(){var e=this.definition().fixed;return!e||e instanceof le?e:e()}),Zt.DEFMETHOD("is_immutable",function(){var e=this.definition().orig;return 1==e.length&&e[0]instanceof Xt});var k=g("Array Boolean clearInterval clearTimeout console Date decodeURI decodeURIComponent encodeURI encodeURIComponent Error escape eval EvalError Function isFinite isNaN JSON Math Number parseFloat parseInt RangeError ReferenceError RegExp Object setInterval setTimeout String SyntaxError TypeError unescape URIError");Zt.DEFMETHOD("is_declared",function(e){return!this.definition().undeclared||e.option("unsafe")&&k(this.name)});var I,L,V,P=g("Infinity NaN undefined");function B(e){return e instanceof _n||e instanceof ln||e instanceof fn}function K(e,t){var r,u,c=t.find_parent(Me).get_defun_scope();!function(){var e=t.self(),n=0;do{if(e instanceof tt||e instanceof nt)n++;else if(e instanceof ve)r=!0;else{if(e instanceof Me){c=e;break}e instanceof et&&(u=!0)}}while(e=t.parent(n++))}();var l,f=10;do{l=!1,_(e),t.option("dead_code")&&g(e,t),t.option("if_return")&&E(e,t),t.sequences_limit>0&&(v(e,t),b(e,t)),t.option("join_vars")&&R(e),t.option("collapse_vars")&&p(e,t)}while(l&&f-- >0);function p(e,t){if(c.pinned())return e;for(var f,p=[],_=e.length,E=new Sn(function(e,n){if(k)return e;if(!x)return e!==D[g]?e:++g<D.length?U(e):(x=!0,(T=function e(t,n,i){var r=E.parent(n);if(r instanceof vt)return i&&!(r.left instanceof dt||r.left.name in O)?e(r,n+1,i):t;if(r instanceof St)return!i||X(r.operator)&&r.left!==t?t:e(r,n+1,i);if(r instanceof ft)return t;if(r instanceof Je)return t;if(r instanceof At)return i&&r.condition===t?e(r,n+1,i):t;if(r instanceof it)return e(r,n+1,!0);if(r instanceof He)return i?e(r,n+1,i):t;if(r instanceof $e)return i&&r.condition===t?e(r,n+1,i):t;if(r instanceof ve)return t;if(r instanceof _t)return e(r,n+1,r.tail_node()!==t);if(r instanceof de)return e(r,n+1,!0);if(r instanceof je)return t;if(r instanceof lt)return t;return null}(e,0))===e&&(k=!0),e);var i,r=E.parent();if(e instanceof vt&&"="!=e.operator&&y.equivalent_to(e.left)||e instanceof hn||e instanceof ft&&y instanceof dt&&y.equivalent_to(e.expression)||e instanceof pe||e instanceof Pe||e instanceof we&&e.expression instanceof kt&&e.expression.definition().references.length>1||e instanceof ve&&!(e instanceof Ce)||e instanceof We||e instanceof et||e instanceof Re||e instanceof Dn||r instanceof Ce&&e!==r.init||!M&&e instanceof Zt&&!e.is_declared(t))return k=!0,e;if(b||F&&M||!(r instanceof St&&X(r.operator)&&r.left!==e||r instanceof At&&r.condition!==e||r instanceof $e&&r.condition!==e)||(b=r),L&&!(e instanceof Lt)&&y.equivalent_to(e)){if(b)return k=!0,e;if(W(e,r))return v&&I++,e;if(l=k=!0,I++,t.info("Collapsing {name} [{file}:{line},{col}]",{name:e.print_to_string(),file:e.start.file,line:e.start.line,col:e.start.col}),A instanceof gt)return m(Dt,A,A);if(A instanceof lt){if(v)return k=!1,e;var o=A.name.definition(),a=A.value;return o.references.length-o.replaced!=1||t.exposed(o)?m(vt,A,{operator:"=",left:m(Zt,A.name,A.name),right:a}):(o.replaced++,w&&B(a)?a.transform(t):C(r,e,a))}return A.write_only=!1,A}return(e instanceof ft||e instanceof He&&(R||y instanceof dt||ee(y))||e instanceof dt&&(R||e.expression.may_throw_on_access(t))||e instanceof Zt&&(O[e.name]||R&&ee(e))||e instanceof lt&&e.value&&(e.name.name in O||R&&ee(e.name))||(i=W(e.left,e))&&(i instanceof dt||i.name in O)||N&&(u?e.has_side_effects(t):function e(t,n){if(t instanceof vt)return e(t.left,!0);if(t instanceof ht)return e(t.expression,!0);if(t instanceof lt)return t.value&&e(t.value);if(n){if(t instanceof mt)return e(t.expression,!0);if(t instanceof Et)return e(t.expression,!0);if(t instanceof Zt)return t.definition().scope!==c}return!1}(e)))&&(T=e,e instanceof Me&&(k=!0)),U(e)},function(e){k||(T===e&&(k=!0),b===e&&(b=null))}),h=new Sn(function(e){if(k)return e;if(!x){if(e!==D[g])return e;if(++g<D.length)return;return x=!0,e}return e instanceof Zt&&e.name==K.name?(--I||(k=!0),W(e,h.parent())?e:(K.replaced++,v.replaced--,A.value)):e instanceof Qe||e instanceof Me?e:void 0});--_>=0;){0==_&&t.option("unused")&&H();var D=[];for(z(e[_]);p.length>0;){D=p.pop();var g=0,A=D[D.length-1],v=null,T=null,b=null,y=Y(A);if(y&&!a(y)&&!y.has_side_effects(t)){var O=$(A),F=Z(y);y instanceof Zt&&(O[y.name]=!1);var R=Q(A),M=J(),N=A.may_throw(t),w=A.name instanceof Ut,x=w,k=!1,I=0,L=!f||!x;if(!L){for(var V=t.self().argnames.lastIndexOf(A.name)+1;!k&&V<f.length;V++)f[V].transform(E);L=!0}for(var P=_;!k&&P<e.length;P++)e[P].transform(E);if(v){var K=A.name.definition();if(k&&K.references.length-K.replaced>I)I=!1;else{k=!1,g=0,x=w;for(P=_;!k&&P<e.length;P++)e[P].transform(h);v.single_use=!1}}I&&!j(A)&&e.splice(_,1)}}}function U(e){if(e instanceof Me)return e;if(e instanceof je){e.expression=e.expression.transform(E);for(var t=0,n=e.body.length;!k&&t<n;t++){var i=e.body[t];if(i instanceof Je){if(!x){if(i!==D[g])continue;g++}if(i.expression=i.expression.transform(E),!M)break}}return k=!0,e}}function G(e,t,n){var i=!1,r=!(e instanceof Le);return t.walk(new gn(function(t,o){if(i)return!0;if(t instanceof Zt&&e.variables.has(t.name)){var a=t.definition().scope;if(a!==c)for(;a=a.parent_scope;)if(a===c)return!0;return i=!0}if((n||r)&&t instanceof tn)return i=!0;if(t instanceof Me&&!(t instanceof Le)){var s=r;return r=!1,o(),r=s,!0}})),i}function H(){var e,n=t.self();if(o(n)&&!n.name&&!n.uses_arguments&&!n.pinned()&&(e=t.parent())instanceof ft&&e.expression===n&&S(e.args,function(e){return!(e instanceof we)})){var r=t.has_directive("use strict");r&&!i(r,n.body)&&(r=!1);var a=n.argnames.length;f=e.args.slice(a);for(var s=Object.create(null),u=a;--u>=0;){var c=n.argnames[u],l=e.args[u];if(f.unshift(m(lt,c,{name:c,value:l})),!(c.name in s))if(s[c.name]=!0,c instanceof we){var _=e.args.slice(u);S(_,function(e){return!G(n,e,r)})&&p.unshift([m(lt,c,{name:c.expression,value:m(bt,e,{elements:_})})])}else l?(l instanceof xe&&l.pinned()||G(n,l,r))&&(l=null):l=m(fn,c).transform(t),l&&p.unshift([m(lt,c,{name:c,value:l})])}}}function z(e){if(D.push(e),e instanceof vt)e.left.has_side_effects(t)||p.push(D.slice()),z(e.right);else if(e instanceof St)z(e.left),z(e.right);else if(e instanceof ft)z(e.expression),e.args.forEach(z);else if(e instanceof Je)z(e.expression);else if(e instanceof At)z(e.condition),z(e.consequent),z(e.alternative);else if(!(e instanceof it)||!t.option("unused")&&e instanceof at)e instanceof Te?(z(e.condition),e.body instanceof he||z(e.body)):e instanceof He?e.value&&z(e.value):e instanceof Ce?(e.init&&z(e.init),e.condition&&z(e.condition),e.step&&z(e.step),e.body instanceof he||z(e.body)):e instanceof Oe?(z(e.object),e.body instanceof he||z(e.body)):e instanceof $e?(z(e.condition),e.body instanceof he||z(e.body),!e.alternative||e.alternative instanceof he||z(e.alternative)):e instanceof _t?e.expressions.forEach(z):e instanceof de?z(e.body):e instanceof je?(z(e.expression),e.body.forEach(z)):e instanceof ht?"++"!=e.operator&&"--"!=e.operator||p.push(D.slice()):e instanceof lt&&e.value&&(p.push(D.slice()),z(e.value));else{var n=e.definitions.length,i=n-200;for(i<0&&(i=0);i<n;i++)z(e.definitions[i])}D.pop()}function Y(e){if(!(e instanceof lt&&e.name instanceof Lt)){var n=e[e instanceof vt?"left":"expression"];return!s(n,Bt)&&n}var r=e.name.definition();if(i(e.name,r.orig)){var o=r.references.length-r.replaced;if(o)return r.orig.length-r.eliminated>1&&!(e.name instanceof Ut)||(o>1?function(e){var t=e.value;if(t instanceof Zt&&"arguments"!=t.name){var n=t.definition();if(!n.undeclared)return v=n}}(e):!t.exposed(r))?m(Zt,e.name,e.name):void 0}}function q(e){return e[e instanceof vt?"right":"value"]}function $(e){var i=Object.create(null);if(e instanceof ht)return i;var r=new gn(function(e,o){for(var a=e;a instanceof dt;)a=a.expression;(a instanceof Zt||a instanceof tn)&&(i[a.name]=i[a.name]||n(t,r,e,e,0))});return q(e).walk(r),i}function j(n){if(n.name instanceof Ut){var i=t.parent(),r=t.self().argnames,o=r.indexOf(n.name);if(o<0)i.args.length=Math.min(i.args.length,r.length-1);else{var a=i.args;a[o]&&(a[o]=m(an,a[o],{value:0}))}return!0}var s=!1;return e[_].transform(new Sn(function(e,t,i){return s?e:e===n||e.body===n?(s=!0,e instanceof lt?(e.value=null,e):i?d.skip:null):void 0},function(e){if(e instanceof _t)switch(e.expressions.length){case 0:return null;case 1:return e.expressions[0]}}))}function Z(e){for(;e instanceof dt;)e=e.expression;return e instanceof Zt&&e.definition().scope===c&&!(r&&(e.name in O||A instanceof ht||A instanceof vt&&"="!=A.operator))}function Q(e){return!(e instanceof ht)&&q(e).has_side_effects(t)}function J(){if(R)return!1;if(v)return!0;if(y instanceof Zt){var e=y.definition();if(e.references.length-e.replaced==(A instanceof lt?1:2))return!0}return!1}function ee(e){if(!e.definition)return!0;var t=e.definition();return!(1==t.orig.length&&t.orig[0]instanceof Gt)&&(t.scope.get_defun_scope()!==c||!S(t.references,function(e){var t=e.scope.get_defun_scope();return"Scope"==t.TYPE&&(t=t.parent_scope),t===c}))}}function _(e){for(var t=[],n=0;n<e.length;){var i=e[n];i instanceof De&&S(i.body,M)?(l=!0,_(i.body),[].splice.apply(e,[n,1].concat(i.body)),n+=i.body.length):i instanceof ge?(l=!0,e.splice(n,1)):i instanceof _e?t.indexOf(i.value)<0?(n++,t.push(i.value)):(l=!0,e.splice(n,1)):n++}}function E(e,t){for(var n=t.self(),i=function(e){for(var t=0,n=e.length;--n>=0;){var i=e[n];if(i instanceof $e&&i.body instanceof Xe&&++t>1)return!0}return!1}(e),r=n instanceof xe,o=e.length;--o>=0;){var a=e[o],s=g(o),u=e[s];if(r&&!u&&a instanceof Xe){if(!a.value){l=!0,e.splice(o,1);continue}if(a.value instanceof Dt&&"void"==a.value.operator){l=!0,e[o]=m(de,a,{body:a.value.expression});continue}}if(a instanceof $e){var c;if(d(c=ne(a.body))){c.label&&h(c.label.thedef.references,c),l=!0,(a=a.clone()).condition=a.condition.negate(t);var f=D(a.body,c);a.body=m(De,a,{body:F(a.alternative).concat(E())}),a.alternative=m(De,a,{body:f}),e[o]=a.transform(t);continue}if(d(c=ne(a.alternative))){c.label&&h(c.label.thedef.references,c),l=!0,(a=a.clone()).body=m(De,a.body,{body:F(a.body).concat(E())});f=D(a.alternative,c);a.alternative=m(De,a.alternative,{body:f}),e[o]=a.transform(t);continue}}if(a instanceof $e&&a.body instanceof Xe){var p=a.body.value;if(!p&&!a.alternative&&(r&&!u||u instanceof Xe&&!u.value)){l=!0,e[o]=m(de,a.condition,{body:a.condition});continue}if(p&&!a.alternative&&u instanceof Xe&&u.value){l=!0,(a=a.clone()).alternative=u,e.splice(o,1,a.transform(t)),e.splice(s,1);continue}if(p&&!a.alternative&&(!u&&r&&i||u instanceof Xe)){l=!0,(a=a.clone()).alternative=u||m(Xe,a,{value:null}),e.splice(o,1,a.transform(t)),u&&e.splice(s,1);continue}var _=e[S(o)];if(t.option("sequences")&&r&&!a.alternative&&_ instanceof $e&&_.body instanceof Xe&&g(s)==e.length&&u instanceof de){l=!0,(a=a.clone()).alternative=m(De,u,{body:[u,m(Xe,u,{value:null})]}),e.splice(o,1,a.transform(t)),e.splice(s,1);continue}}}function d(i){if(!i)return!1;for(var a=o+1,s=e.length;a<s;a++){var u=e[a];if(u instanceof at||u instanceof ot)return!1}var c,l=i instanceof We?t.loopcontrol_target(i):null;return i instanceof Xe&&r&&(!(c=i.value)||c instanceof Dt&&"void"==c.operator)||i instanceof qe&&n===N(l)||i instanceof Ye&&l instanceof De&&n===l}function E(){var t=e.slice(o+1);return e.length=o+1,t.filter(function(t){return!(t instanceof Ve)||(e.push(t),!1)})}function D(e,t){var n=F(e).slice(0,-1);return t.value&&n.push(m(de,t.value,{body:t.value.expression})),n}function g(t){for(var n=t+1,i=e.length;n<i;n++){var r=e[n];if(!(r instanceof rt&&A(r)))break}return n}function S(t){for(var n=t;--n>=0;){var i=e[n];if(!(i instanceof rt&&A(i)))break}return n}}function g(e,t){for(var n,i=t.self(),r=0,o=0,a=e.length;r<a;r++){var s=e[r];if(s instanceof We){var u=t.loopcontrol_target(s);s instanceof Ye&&!(u instanceof ve)&&N(u)===i||s instanceof qe&&N(u)===i?s.label&&h(s.label.thedef.references,s):e[o++]=s}else e[o++]=s;if(ne(s)){n=e.slice(r+1);break}}e.length=o,l=o!=a,n&&n.forEach(function(n){U(t,n,e)})}function A(e){return S(e.definitions,function(e){return!e.value})}function v(e,t){if(!(e.length<2)){for(var n=[],i=0,r=0,o=e.length;r<o;r++){var a=e[r];if(a instanceof de){n.length>=t.sequences_limit&&u();var s=a.body;n.length>0&&(s=s.drop_side_effect_free(t)),s&&O(n,s)}else a instanceof it&&A(a)||a instanceof Ve?e[i++]=a:(u(),e[i++]=a)}u(),e.length=i,i!=o&&(l=!0)}function u(){if(n.length){var t=D(n[0],n);e[i++]=m(de,t,{body:t}),n=[]}}}function T(e,t){if(!(e instanceof De))return e;for(var n=null,i=0,r=e.body.length;i<r;i++){var o=e.body[i];if(o instanceof rt&&A(o))t.push(o);else{if(n)return!1;n=o}}return n}function b(e,t){function n(e){r--,l=!0;var n=i.body;return D(n,[n,e]).transform(t)}for(var i,r=0,o=0;o<e.length;o++){var a=e[o];if(i)if(a instanceof He)a.value=n(a.value||m(fn,a).transform(t));else if(a instanceof Ce){if(!(a.init instanceof it)){var s=!1;i.body.walk(new gn(function(e){return!!(s||e instanceof Me)||(e instanceof St&&"in"==e.operator?(s=!0,!0):void 0)})),s||(a.init?a.init=n(a.init):(a.init=i.body,r--,l=!0))}}else a instanceof Oe?a.init instanceof at||a.init instanceof ot||(a.object=n(a.object)):a instanceof $e?a.condition=n(a.condition):a instanceof je?a.expression=n(a.expression):a instanceof Re&&(a.expression=n(a.expression));if(t.option("conditionals")&&a instanceof $e){var u=[],c=T(a.body,u),f=T(a.alternative,u);if(!1!==c&&!1!==f&&u.length>0){var p=u.length;u.push(m($e,a,{condition:a.condition,body:c||m(ge,a.body),alternative:f})),u.unshift(r,1),[].splice.apply(e,u),o+=p,r+=p+1,i=null,l=!0;continue}}e[r++]=a,i=a instanceof de?a:null}e.length=r}function y(e,n){if(e instanceof it){var i,r=e.definitions[e.definitions.length-1];if(r.value instanceof yt)if(n instanceof vt?i=[n]:n instanceof _t&&(i=n.expressions.slice()),i){var o=!1;do{var a=i[0];if(!(a instanceof vt))break;if("="!=a.operator)break;if(!(a.left instanceof dt))break;var s=a.left.expression;if(!(s instanceof Zt))break;if(r.name.name!=s.name)break;if(!a.right.is_constant_expression(c))break;var u=a.left.property;if(u instanceof le&&(u=u.evaluate(t)),u instanceof le)break;u=""+u;var l=t.option("ecma")<6&&t.has_directive("use strict")?function(e){return e.key!=u&&e.key.name!=u}:function(e){return e.key.name!=u};if(!S(r.value.properties,l))break;var f=r.value.properties.filter(function(e){return e.key===u})[0];f?f.value=new _t({start:f.start,expressions:[f.value.clone(),a.right.clone()],end:f.end}):r.value.properties.push(m(Ot,a,{key:u,value:a.right})),i.shift(),o=!0}while(i.length);return o&&i}}}function R(e){for(var t,n=0,i=-1,r=e.length;n<r;n++){var o=e[n],a=e[i];if(o instanceof it)a&&a.TYPE==o.TYPE?(a.definitions=a.definitions.concat(o.definitions),l=!0):t&&t.TYPE==o.TYPE&&A(o)?(t.definitions=t.definitions.concat(o.definitions),l=!0):(e[++i]=o,t=o);else if(o instanceof He)o.value=u(o.value);else if(o instanceof Ce){(s=y(a,o.init))?(l=!0,o.init=s.length?D(o.init,s):null,e[++i]=o):a instanceof rt&&(!o.init||o.init.TYPE==a.TYPE)?(o.init&&(a.definitions=a.definitions.concat(o.init.definitions)),o.init=a,e[i]=o,l=!0):t&&o.init&&t.TYPE==o.init.TYPE&&A(o.init)?(t.definitions=t.definitions.concat(o.init.definitions),o.init=null,e[++i]=o,l=!0):e[++i]=o}else if(o instanceof Oe)o.object=u(o.object);else if(o instanceof $e)o.condition=u(o.condition);else if(o instanceof de){var s;if(s=y(a,o.body)){if(l=!0,!s.length)continue;o.body=D(o.body,s)}e[++i]=o}else o instanceof je?o.expression=u(o.expression):o instanceof Re?o.expression=u(o.expression):e[++i]=o}function u(t){e[++i]=o;var n=y(a,t);return n?(l=!0,n.length?D(t,n):t instanceof _t?t.tail_node().left:t.left):t}e.length=i+1}}function U(e,t,n){t instanceof Ve||e.warn("Dropping unreachable code [{file}:{line},{col}]",t.start),t.walk(new gn(function(i){return i instanceof rt?(e.warn("Declarations in unreachable code! [{file}:{line},{col}]",i.start),i.remove_initializers(),n.push(i),!0):i instanceof Ve&&(i===t||!e.has_directive("use strict"))?(n.push(i===t?i:m(rt,i,{definitions:[m(lt,i,{name:m(Vt,i.name,i.name),value:null})]})),!0):i instanceof Me||void 0}))}function G(e){return e instanceof rn?e.getValue():e instanceof Dt&&"void"==e.operator&&e.expression instanceof rn?void 0:e}function H(e,t){return e.is_undefined||e instanceof fn||e instanceof Dt&&"void"==e.operator&&!e.expression.has_side_effects(t)}!function(e){function t(e){return/strict/.test(e.option("pure_getters"))}le.DEFMETHOD("may_throw_on_access",function(e){return!e.option("pure_getters")||this._dot_throw(e)}),e(le,t),e(cn,f),e(fn,f),e(rn,l),e(bt,l),e(yt,function(e){if(!t(e))return!1;for(var n=this.properties.length;--n>=0;)if(this.properties[n]._dot_throw(e))return!0;return!1}),e(Ct,l),e(Rt,f),e(we,function(e){return this.expression._dot_throw(e)}),e(Ie,l),e(Le,l),e(gt,l),e(Dt,function(){return"void"==this.operator}),e(St,function(e){return("&&"==this.operator||"||"==this.operator)&&(this.left._dot_throw(e)||this.right._dot_throw(e))}),e(vt,function(e){return"="==this.operator&&this.right._dot_throw(e)}),e(At,function(e){return this.consequent._dot_throw(e)||this.alternative._dot_throw(e)}),e(mt,function(e){return!!t(e)&&!(this.expression instanceof Ie&&"prototype"==this.property)}),e(_t,function(e){return this.tail_node()._dot_throw(e)}),e(Zt,function(e){if(this.is_undefined)return!0;if(!t(e))return!1;if(x(this)&&this.is_declared(e))return!1;if(this.is_immutable())return!1;var n=this.fixed_value();return!n||n._dot_throw(e)})}(function(e,t){e.DEFMETHOD("_dot_throw",t)}),L=["!","delete"],V=["in","instanceof","==","!=","===","!==","<","<=",">=",">"],(I=function(e,t){e.DEFMETHOD("is_boolean",t)})(le,l),I(Dt,function(){return i(this.operator,L)}),I(St,function(){return i(this.operator,V)||X(this.operator)&&this.left.is_boolean()&&this.right.is_boolean()}),I(At,function(){return this.consequent.is_boolean()&&this.alternative.is_boolean()}),I(vt,function(){return"="==this.operator&&this.right.is_boolean()}),I(_t,function(){return this.tail_node().is_boolean()}),I(En,f),I(mn,f),function(e){e(le,l),e(an,f);var t=g("+ - ~ ++ --");e(ht,function(){return t(this.operator)});var n=g("- * / % & | ^ << >> >>>");e(St,function(e){return n(this.operator)||"+"==this.operator&&this.left.is_number(e)&&this.right.is_number(e)}),e(vt,function(e){return n(this.operator.slice(0,-1))||"="==this.operator&&this.right.is_number(e)}),e(_t,function(e){return this.tail_node().is_number(e)}),e(At,function(e){return this.consequent.is_number(e)&&this.alternative.is_number(e)})}(function(e,t){e.DEFMETHOD("is_number",t)}),function(e){e(le,l),e(on,f),e(Ke,function(){return 1===this.segments.length}),e(Dt,function(){return"typeof"==this.operator}),e(St,function(e){return"+"==this.operator&&(this.left.is_string(e)||this.right.is_string(e))}),e(vt,function(e){return("="==this.operator||"+="==this.operator)&&this.right.is_string(e)}),e(_t,function(e){return this.tail_node().is_string(e)}),e(At,function(e){return this.consequent.is_string(e)&&this.alternative.is_string(e)})}(function(e,t){e.DEFMETHOD("is_string",t)});var X=g("&& ||"),z=g("delete ++ --");function W(e,t){return t instanceof ht&&z(t.operator)?t.expression:t instanceof vt&&t.left===e?e:void 0}function Y(e,t){return e.print_to_string().length>t.print_to_string().length?t:e}function q(e,t,n){return(T(e)?function(e,t){return Y(m(de,e,{body:e}),m(de,t,{body:t})).body}:Y)(t,n)}function $(e){for(var t in e)e[t]=g(e[t])}!function(e){function t(e,t){e.warn("global_defs "+t.print_to_string()+" redefined [{file}:{line},{col}]",t.start)}Ne.DEFMETHOD("resolve_defines",function(e){return e.option("global_defs")?(this.figure_out_scope({ie8:e.option("ie8")}),this.transform(new Sn(function(n){var i=n._find_defs(e,"");if(i){for(var r,o=0,a=n;(r=this.parent(o++))&&r instanceof dt&&r.expression===a;)a=r;if(!W(a,r))return i;t(e,n)}}))):this}),e(le,c),e(mt,function(e,t){return this.expression._find_defs(e,"."+this.property+t)}),e(Lt,function(e){this.global()&&v(e.option("global_defs"),this.name)&&t(e,this)}),e(Zt,function(e,t){if(this.global()){var n=e.option("global_defs"),i=this.name+t;return v(n,i)?function e(t,n){if(t instanceof le)return m(t.CTOR,n,t);if(Array.isArray(t))return m(bt,n,{elements:t.map(function(t){return e(t,n)})});if(t&&"object"==typeof t){var i=[];for(var r in t)v(t,r)&&i.push(m(Ot,n,{key:r,value:e(t[r],n)}));return m(yt,n,{properties:i})}return y(t,n)}(n[i],this):void 0}})}(function(e,t){e.DEFMETHOD("_find_defs",t)});var Q=["constructor","toString","valueOf"],J={Array:["indexOf","join","lastIndexOf","slice"].concat(Q),Boolean:Q,Function:Q,Number:["toExponential","toFixed","toPrecision"].concat(Q),Object:Q,RegExp:["test"].concat(Q),String:["charAt","charCodeAt","concat","indexOf","italics","lastIndexOf","match","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase","trim"].concat(Q)};$(J);var ee={Array:["isArray"],Math:["abs","acos","asin","atan","ceil","cos","exp","floor","log","round","sin","sqrt","tan","atan2","pow","max","min"],Number:["isFinite","isNaN"],Object:["create","getOwnPropertyDescriptor","getOwnPropertyNames","getPrototypeOf","isExtensible","isFrozen","isSealed","keys"],String:["fromCharCode"]};$(ee),function(e){le.DEFMETHOD("evaluate",function(e){if(!e.option("evaluate"))return this;var t=this._eval(e,1);return!t||t instanceof RegExp?t:"function"==typeof t||"object"==typeof t?this:t});var t=g("! ~ - + void");le.DEFMETHOD("is_constant",function(){return this instanceof rn?!(this instanceof sn):this instanceof Dt&&this.expression instanceof rn&&t(this.operator)}),e(fe,function(){throw new Error(E("Cannot evaluate a statement [{file}:{line},{col}]",this.start))}),e(xe,p),e(Nt,p),e(le,p),e(rn,function(){return this.getValue()}),e(Ke,function(){return 1!==this.segments.length?this:this.segments[0].value}),e(Ie,function(e){if(e.option("unsafe")){var t=function(){};return t.node=this,t.toString=function(){return this.node.print_to_string()},t}return this}),e(bt,function(e,t){if(e.option("unsafe")){for(var n=[],i=0,r=this.elements.length;i<r;i++){var o=this.elements[i],a=o._eval(e,t);if(o===a)return this;n.push(a)}return n}return this}),e(yt,function(e,t){if(e.option("unsafe")){for(var n={},i=0,r=this.properties.length;i<r;i++){var o=this.properties[i];if(o instanceof we)return this;var a=o.key;if(a instanceof kt)a=a.name;else if(a instanceof le&&(a=a._eval(e,t))===o.key)return this;if("function"==typeof Object.prototype[a])return this;if(!(o.value instanceof Ie)&&(n[a]=o.value._eval(e,t),n[a]===o.value))return this}return n}return this});var n=g("! typeof void");e(Dt,function(e,t){var i=this.expression;if(e.option("typeofs")&&"typeof"==this.operator&&(i instanceof xe||i instanceof Zt&&i.fixed_value()instanceof xe))return"function";if(n(this.operator)||t++,(i=i._eval(e,t))===this.expression)return this;switch(this.operator){case"!":return!i;case"typeof":return i instanceof RegExp?this:typeof i;case"void":return;case"~":return~i;case"-":return-i;case"+":return+i}return this});var i=g("&& || === !==");e(St,function(e,t){i(this.operator)||t++;var n=this.left._eval(e,t);if(n===this.left)return this;var r,o=this.right._eval(e,t);if(o===this.right)return this;switch(this.operator){case"&&":r=n&&o;break;case"||":r=n||o;break;case"|":r=n|o;break;case"&":r=n&o;break;case"^":r=n^o;break;case"+":r=n+o;break;case"*":r=n*o;break;case"**":r=Math.pow(n,o);break;case"/":r=n/o;break;case"%":r=n%o;break;case"-":r=n-o;break;case"<<":r=n<<o;break;case">>":r=n>>o;break;case">>>":r=n>>>o;break;case"==":r=n==o;break;case"===":r=n===o;break;case"!=":r=n!=o;break;case"!==":r=n!==o;break;case"<":r=n<o;break;case"<=":r=n<=o;break;case">":r=n>o;break;case">=":r=n>=o;break;default:return this}return isNaN(r)&&e.find_parent(Re)?this:r}),e(At,function(e,t){var n=this.condition._eval(e,t);if(n===this.condition)return this;var i=n?this.consequent:this.alternative,r=i._eval(e,t);return r===i?this:r}),e(Zt,function(e,t){var n,i=this.fixed_value();if(!i)return this;if(v(i,"_eval"))n=i._eval();else{if(this._eval=p,n=i._eval(e,t),delete this._eval,n===i)return this;i._eval=function(){return n}}if(n&&"object"==typeof n){var r=this.definition().escaped;if(r&&t>r)return this}return n});var r={Array:Array,Math:Math,Number:Number,Object:Object,String:String},o={Math:["E","LN10","LN2","LOG2E","LOG10E","PI","SQRT1_2","SQRT2"],Number:["MAX_VALUE","MIN_VALUE","NaN","NEGATIVE_INFINITY","POSITIVE_INFINITY"]};$(o),e(dt,function(e,t){if(e.option("unsafe")){var n=this.property;if(n instanceof le&&(n=n._eval(e,t))===this.property)return this;var i,a=this.expression;if(x(a)){var s,u="hasOwnProperty"===a.name&&"call"===n&&(s=e.parent()&&e.parent().args)&&s&&s[0]&&s[0].evaluate(e);if(null==u||u.thedef&&u.thedef.undeclared)return this.clone();if(!(o[a.name]||l)(n))return this;i=r[a.name]}else{if(!(i=a._eval(e,t+1))||i===a||!v(i,n))return this;if("function"==typeof i)switch(n){case"name":return i.node.name?i.node.name.name:"";case"length":return i.node.argnames.length;default:return this}}return i[n]}return this}),e(ft,function(e,t){var n=this.expression;if(e.option("unsafe")&&n instanceof dt){var i,o=n.property;if(o instanceof le&&(o=o._eval(e,t))===n.property)return this;var a=n.expression;if(x(a)){var s="hasOwnProperty"===a.name&&"call"===o&&this.args[0]&&this.args[0].evaluate(e);if(null==s||s.thedef&&s.thedef.undeclared)return this.clone();if(!(ee[a.name]||l)(o))return this;i=r[a.name]}else if((i=a._eval(e,t+1))===a||!(i&&J[i.constructor.name]||l)(o))return this;for(var u=[],c=0,f=this.args.length;c<f;c++){var p=this.args[c],_=p._eval(e,t);if(p===_)return this;u.push(_)}try{return i[o].apply(i,u)}catch(t){e.warn("Error evaluating {code} [{file}:{line},{col}]",{code:this.print_to_string(),file:this.start.file,line:this.start.line,col:this.start.col})}}return this}),e(pt,p)}(function(e,t){e.DEFMETHOD("_eval",t)}),function(e){function t(e){return m(Dt,e,{operator:"!",expression:e})}function n(e,n,i){var r=t(e);if(i){var o=m(de,n,{body:n});return Y(r,o)===o?n:r}return Y(r,n)}e(le,function(){return t(this)}),e(fe,function(){throw new Error("Cannot negate a statement")}),e(Ie,function(){return t(this)}),e(Le,function(){return t(this)}),e(Dt,function(){return"!"==this.operator?this.expression:t(this)}),e(_t,function(e){var t=this.expressions.slice();return t.push(t.pop().negate(e)),D(this,t)}),e(At,function(e,t){var i=this.clone();return i.consequent=i.consequent.negate(e),i.alternative=i.alternative.negate(e),n(this,i,t)}),e(St,function(e,i){var r=this.clone(),o=this.operator;if(e.option("unsafe_comps"))switch(o){case"<=":return r.operator=">",r;case"<":return r.operator=">=",r;case">=":return r.operator="<",r;case">":return r.operator="<=",r}switch(o){case"==":return r.operator="!=",r;case"!=":return r.operator="==",r;case"===":return r.operator="!==",r;case"!==":return r.operator="===",r;case"&&":return r.operator="||",r.left=r.left.negate(e,i),r.right=r.right.negate(e),n(this,r,i);case"||":return r.operator="&&",r.left=r.left.negate(e,i),r.right=r.right.negate(e),n(this,r,i)}return t(this)})}(function(e,t){e.DEFMETHOD("negate",function(e,n){return t.call(this,e,n)})});var te=g("Boolean decodeURI decodeURIComponent Date encodeURI encodeURIComponent Error escape EvalError isFinite isNaN Number Object parseFloat parseInt RangeError ReferenceError String SyntaxError TypeError unescape URIError");function ne(e){return e&&e.aborts()}ft.DEFMETHOD("is_expr_pure",function(e){if(e.option("unsafe")){var t=this.expression,n=this.args&&this.args[0]&&this.args[0].evaluate(e);if(t.expression&&"hasOwnProperty"===t.expression.name&&(null==n||n.thedef&&n.thedef.undeclared))return!1;if(x(t)&&te(t.name))return!0;if(t instanceof mt&&x(t.expression)&&(ee[t.expression.name]||l)(t.property))return!0}return this.pure||!e.pure_funcs(this)}),le.DEFMETHOD("is_call_pure",l),mt.DEFMETHOD("is_call_pure",function(e){if(e.option("unsafe")){var t=this.expression,n=l;return t instanceof bt?n=J.Array:t.is_boolean()?n=J.Boolean:t.is_number(e)?n=J.Number:t instanceof sn?n=J.RegExp:t.is_string(e)?n=J.String:this.may_throw_on_access(e)||(n=J.Object),n(this.property)}}),function(e){function t(e,t){for(var n=e.length;--n>=0;)if(e[n].has_side_effects(t))return!0;return!1}e(le,f),e(ge,l),e(rn,l),e(tn,l),e(he,function(e){return t(this.body,e)}),e(ft,function(e){return!(this.is_expr_pure(e)||this.expression.is_call_pure(e)&&!this.expression.has_side_effects(e))||t(this.args,e)}),e(je,function(e){return this.expression.has_side_effects(e)||t(this.body,e)}),e(Je,function(e){return this.expression.has_side_effects(e)||t(this.body,e)}),e(et,function(e){return t(this.body,e)||this.bcatch&&this.bcatch.has_side_effects(e)||this.bfinally&&this.bfinally.has_side_effects(e)}),e($e,function(e){return this.condition.has_side_effects(e)||this.body&&this.body.has_side_effects(e)||this.alternative&&this.alternative.has_side_effects(e)}),e(Ae,function(e){return this.body.has_side_effects(e)}),e(de,function(e){return this.body.has_side_effects(e)}),e(xe,l),e(Nt,l),e(wt,f),e(St,function(e){return this.left.has_side_effects(e)||this.right.has_side_effects(e)}),e(vt,f),e(At,function(e){return this.condition.has_side_effects(e)||this.consequent.has_side_effects(e)||this.alternative.has_side_effects(e)}),e(ht,function(e){return z(this.operator)||this.expression.has_side_effects(e)}),e(Zt,function(e){return!this.is_declared(e)}),e(Lt,l),e(yt,function(e){return t(this.properties,e)}),e(Ct,function(e){return!!(this.key instanceof Ot&&this.key.has_side_effects(e))||this.value.has_side_effects(e)}),e(bt,function(e){return t(this.elements,e)}),e(mt,function(e){return this.expression.may_throw_on_access(e)||this.expression.has_side_effects(e)}),e(Et,function(e){return this.expression.may_throw_on_access(e)||this.expression.has_side_effects(e)||this.property.has_side_effects(e)}),e(_t,function(e){return t(this.expressions,e)}),e(it,function(e){return t(this.definitions,e)}),e(lt,function(e){return this.value}),e(Ue,l),e(Ke,function(e){return t(this.segments,e)})}(function(e,t){e.DEFMETHOD("has_side_effects",t)}),function(e){function t(e,t){for(var n=e.length;--n>=0;)if(e[n].may_throw(t))return!0;return!1}e(le,f),e(Nt,l),e(rn,l),e(ge,l),e(xe,l),e(Lt,l),e(tn,l),e(bt,function(e){return t(this.elements,e)}),e(vt,function(e){return!!this.right.may_throw(e)||!(!e.has_directive("use strict")&&"="==this.operator&&this.left instanceof Zt)&&this.left.may_throw(e)}),e(St,function(e){return this.left.may_throw(e)||this.right.may_throw(e)}),e(he,function(e){return t(this.body,e)}),e(ft,function(e){return!!t(this.args,e)||!this.is_expr_pure(e)&&(!!this.expression.may_throw(e)||(!(this.expression instanceof xe)||t(this.expression.body,e)))}),e(Je,function(e){return this.expression.may_throw(e)||t(this.body,e)}),e(At,function(e){return this.condition.may_throw(e)||this.consequent.may_throw(e)||this.alternative.may_throw(e)}),e(it,function(e){return t(this.definitions,e)}),e(mt,function(e){return this.expression.may_throw_on_access(e)||this.expression.may_throw(e)}),e($e,function(e){return this.condition.may_throw(e)||this.body&&this.body.may_throw(e)||this.alternative&&this.alternative.may_throw(e)}),e(Ae,function(e){return this.body.may_throw(e)}),e(yt,function(e){return t(this.properties,e)}),e(Ct,function(e){return this.value.may_throw(e)}),e(Xe,function(e){return this.value&&this.value.may_throw(e)}),e(_t,function(e){return t(this.expressions,e)}),e(de,function(e){return this.body.may_throw(e)}),e(Et,function(e){return this.expression.may_throw_on_access(e)||this.expression.may_throw(e)||this.property.may_throw(e)}),e(je,function(e){return this.expression.may_throw(e)||t(this.body,e)}),e(Zt,function(e){return!this.is_declared(e)}),e(et,function(e){return this.bcatch?this.bcatch.may_throw(e):t(this.body,e)||this.bfinally&&this.bfinally.may_throw(e)}),e(ht,function(e){return!("typeof"==this.operator&&this.expression instanceof Zt)&&this.expression.may_throw(e)}),e(lt,function(e){return!!this.value&&this.value.may_throw(e)})}(function(e,t){e.DEFMETHOD("may_throw",t)}),function(e){function t(e){for(var t=e.length;--t>=0;)if(!e[t].is_constant_expression())return!1;return!0}function n(e){var t=this,n=!0;return t.walk(new gn(function(r){if(!n)return!0;if(r instanceof Zt){if(t.inlined)return n=!1,!0;var o=r.definition();if(i(o,t.enclosed)&&!t.variables.has(o.name)){if(e){var a=e.find_variable(r);if(o.undeclared?!a:a===o)return n="f",!0}n=!1}return!0}return r instanceof tn&&t instanceof Le?(n=!1,!0):void 0})),n}e(le,l),e(rn,f),e(Nt,function(e){return!(this.extends&&!this.extends.is_constant_expression(e))&&n.call(this,e)}),e(xe,n),e(ht,function(){return this.expression.is_constant_expression()}),e(St,function(){return this.left.is_constant_expression()&&this.right.is_constant_expression()}),e(bt,function(){return t(this.elements)}),e(yt,function(){return t(this.properties)}),e(Ct,function(){return!(this.key instanceof le)&&this.value.is_constant_expression()})}(function(e,t){e.DEFMETHOD("is_constant_expression",t)}),function(e){function t(){for(var e=0;e<this.body.length;e++)if(ne(this.body[e]))return this.body[e];return null}e(fe,_),e(Ge,p),e(ut,function(){return null}),e(De,t),e(Ze,t),e($e,function(){return this.alternative&&ne(this.body)&&ne(this.alternative)&&this})}(function(e,t){e.DEFMETHOD("aborts",t)});var ie=["use asm","use strict"];function re(e,t){return K(e.body,t),t.option("side_effects")&&1==e.body.length&&e.body[0]===t.has_directive("use strict")&&(e.body.length=0),e}e(_e,function(e,t){return!t.option("directives")||i(e.value,ie)&&t.has_directive(e.value)===e?e:m(ge,e)}),e(pe,function(e,t){return t.option("drop_debugger")?m(ge,e):e}),e(Ae,function(e,t){return e.body instanceof Ye&&t.loopcontrol_target(e.body)===e.body?m(ge,e):0==e.label.references.length?e.body:e}),e(he,function(e,t){return K(e.body,t),e}),e(De,function(e,t){switch(K(e.body,t),e.body.length){case 1:if(!t.has_directive("use strict")&&t.parent()instanceof $e&&!((n=e.body[0])instanceof at||n instanceof ot||n instanceof Nt)||M(e.body[0]))return e.body[0];break;case 0:return m(ge,e)}var n;return e}),e(xe,re),Me.DEFMETHOD("drop_unused",function(e){if(e.option("unused")&&!e.has_directive("use asm")){var t=this;if(!t.pinned()){var n=!(t instanceof Ne)||e.toplevel.funcs,i=!(t instanceof Ne)||e.toplevel.vars,r=/keep_assign/.test(e.option("unused"))?l:function(e){return e instanceof vt&&(e.write_only||"="==e.operator)?e.left:e instanceof ht&&e.write_only?e.expression:void 0},o=[],a=Object.create(null),u=Object.create(null);t instanceof Ne&&e.top_retain&&t.variables.each(function(t){!e.top_retain(t)||t.id in a||(a[t.id]=!0,o.push(t))});var c=new A,f=new A,p=null,_=this,E=new gn(function(r,s){if(r instanceof xe&&r.uses_arguments&&!E.has_directive("use strict")&&r.argnames.forEach(function(e){if(e instanceof Lt){var t=e.definition();t.id in a||(a[t.id]=!0,o.push(t))}}),r!==t){if(r instanceof Ve||r instanceof wt){var l=r.name.definition();return((d=E.parent()instanceof ct)||!n&&_===t)&&(!l.global||l.id in a||(a[l.id]=!0,o.push(l))),f.add(l.id,r),!0}if(r instanceof Ut&&_===t&&c.add(r.definition().id,r),r instanceof it&&_===t){var d=E.parent()instanceof ct;return r.definitions.forEach(function(t){if(t.name instanceof Vt&&c.add(t.name.definition().id,t),!d&&i||t.name.walk(new gn(function(e){if(e instanceof Lt){var t=e.definition();!d&&!t.global||t.id in a||(a[t.id]=!0,o.push(t))}})),t.value){if(t.name instanceof Pe){var n=p;p=t.value,t.walk(E),p=n}else{var r=t.name.definition();f.add(r.id,t.value),r.chained||t.name.fixed_value()!==t.value||(u[r.id]=t)}t.value.has_side_effects(e)&&t.value.walk(E)}}),!0}return r.destructuring&&p&&f.add(r.name,p),y(r,s)}});t.walk(E),E=new gn(y);for(var g=0;g<o.length;g++){var v=f.get(o[g].id);v&&v.forEach(function(e){e.walk(E)})}var T=new Sn(function(o,s,l){var f=T.parent();if(i&&(y=r(o))instanceof Zt){var p=(E=y.definition()).id in a;if(o instanceof vt){if(!p||E.id in u&&u[E.id]!==o)return C(f,o,o.right.transform(T))}else if(!p)return m(an,o,{value:0})}if(_===t){var E;if(o.name&&(o instanceof xt&&!b(e.option("keep_classnames"),(E=o.name.definition()).name)||o instanceof Ie&&!b(e.option("keep_fnames"),(E=o.name.definition()).name))&&(E.id in a&&!(E.orig.length>1)||(o.name=null)),o instanceof xe&&!(o instanceof ke))for(var g=!e.option("keep_fargs"),A=o.argnames,v=A.length;--v>=0;){var y;(y=A[v])instanceof we&&(y=y.expression),y instanceof Tt&&(y=y.left),y instanceof Pe||y.definition().id in a?g=!1:(y.__unused=!0,g&&(A.pop(),e[y.unreferenced()?"warn":"info"]("Dropping unused function argument {name} [{file}:{line},{col}]",L(y))))}if((o instanceof Ve||o instanceof wt)&&o!==t)if(!((E=o.name.definition()).id in a||!n&&E.global))return e[o.name.unreferenced()?"warn":"info"]("Dropping unused function {name} [{file}:{line},{col}]",L(o.name)),E.eliminated++,m(ge,o);if(o instanceof it&&!(f instanceof Oe&&f.init===o)){var O=!(f instanceof Ne||o instanceof rt),F=[],N=[],w=[],x=[];switch(o.definitions.forEach(function(t){t.value&&(t.value=t.value.transform(T));var n=t.name instanceof Pe,r=n?new yn(null,{name:"<destructure>"}):t.name.definition();if(O&&r.global)return w.push(t);if(!i&&!O||n&&(t.name.names.length||t.name.is_array||1!=e.option("pure_getters"))||r.id in a){if(t.value&&r.id in u&&u[r.id]!==t&&(t.value=t.value.drop_side_effect_free(e)),t.name instanceof Vt){var s=c.get(r.id);if(s.length>1&&(!t.value||r.orig.indexOf(t.name)>r.eliminated)){if(e.warn("Dropping duplicated definition of variable {name} [{file}:{line},{col}]",L(t.name)),t.value){var l=m(Zt,t.name,t.name);r.references.push(l);var f=m(vt,t,{operator:"=",left:l,right:t.value});u[r.id]===t&&(u[r.id]=f),x.push(f.transform(T))}return h(s,t),void r.eliminated++}}t.value?(x.length>0&&(w.length>0?(x.push(t.value),t.value=D(t.value,x)):F.push(m(de,o,{body:D(o,x)})),x=[]),w.push(t)):N.push(t)}else if(r.orig[0]instanceof Yt){(p=t.value&&t.value.drop_side_effect_free(e))&&x.push(p),t.value=null,N.push(t)}else{var p;(p=t.value&&t.value.drop_side_effect_free(e))?(n||e.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]",L(t.name)),x.push(p)):n||e[t.name.unreferenced()?"warn":"info"]("Dropping unused variable {name} [{file}:{line},{col}]",L(t.name)),r.eliminated++}}),(N.length>0||w.length>0)&&(o.definitions=N.concat(w),F.push(o)),x.length>0&&F.push(m(de,o,{body:D(o,x)})),F.length){case 0:return l?d.skip:m(ge,o);case 1:return F[0];default:return l?d.splice(F):m(De,o,{body:F})}}if(o instanceof Ce)return s(o,this),o.init instanceof De&&(k=o.init,o.init=k.body.pop(),k.body.push(o)),o.init instanceof de?o.init=o.init.body:R(o.init)&&(o.init=null),k?l?d.splice(k.body):k:o;if(o instanceof Ae&&o.body instanceof Ce){if(s(o,this),o.body instanceof De){var k=o.body;return o.body=k.body.pop(),k.body.push(o),l?d.splice(k.body):k}return o}if(o instanceof De)return s(o,this),l&&S(o.body,M)?d.splice(o.body):o;if(o instanceof Me){var I=_;return _=o,s(o,this),_=I,o}}function L(e){return{name:e.name,file:e.start.file,line:e.start.line,col:e.start.col}}});t.transform(T)}}function y(e,n){var i,c=r(e);if(c instanceof Zt&&!s(e.left,Pt)&&t.variables.get(c.name)===(i=c.definition()))return e instanceof vt&&(e.right.walk(E),i.chained||e.left.fixed_value()!==e.right||(u[i.id]=e)),!0;if(e instanceof Zt)return(i=e.definition()).id in a||(a[i.id]=!0,o.push(i),(i=i.redefined())&&(a[i.id]=!0,o.push(i))),!0;if(e instanceof Me){var l=_;return _=e,n(),_=l,!0}}}),Me.DEFMETHOD("hoist_declarations",function(e){var t=this;if(e.has_directive("use asm"))return t;if(!Array.isArray(t.body))return t;var n=e.option("hoist_funs"),i=e.option("hoist_vars");if(n||i){var o=[],a=[],s=new A,u=0,c=0;t.walk(new gn(function(e){return e instanceof Me&&e!==t||(e instanceof rt?(++c,!0):void 0)})),i=i&&c>1;var l=new Sn(function(r){if(r!==t){if(r instanceof _e)return o.push(r),m(ge,r);if(n&&r instanceof Ve&&!(l.parent()instanceof ct)&&l.parent()===t)return a.push(r),m(ge,r);if(i&&r instanceof rt){r.definitions.forEach(function(e){e.name instanceof Pe||(s.set(e.name.name,e),++u)});var c=r.to_assignments(e),f=l.parent();if(f instanceof Oe&&f.init===r){if(null==c){var p=r.definitions[0].name;return m(Zt,p,p)}return c}return f instanceof Ce&&f.init===r?c:c?m(de,r,{body:c}):m(ge,r)}if(r instanceof Me)return r}});if(t=t.transform(l),u>0){var f=[];if(s.each(function(e,n){t instanceof xe&&r(function(t){return t.name==e.name.name},t.args_as_names())?s.del(n):((e=e.clone()).value=null,f.push(e),s.set(n,e))}),f.length>0){for(var p=0;p<t.body.length;){if(t.body[p]instanceof de){var _,d,E=t.body[p].body;if(E instanceof vt&&"="==E.operator&&(_=E.left)instanceof kt&&s.has(_.name)){if((g=s.get(_.name)).value)break;g.value=E.right,h(f,g),f.push(g),t.body.splice(p,1);continue}if(E instanceof _t&&(d=E.expressions[0])instanceof vt&&"="==d.operator&&(_=d.left)instanceof kt&&s.has(_.name)){var g;if((g=s.get(_.name)).value)break;g.value=d.right,h(f,g),f.push(g),t.body[p].body=D(E,E.expressions.slice(1));continue}}if(t.body[p]instanceof ge)t.body.splice(p,1);else{if(!(t.body[p]instanceof De))break;var S=[p,1].concat(t.body[p].body);t.body.splice.apply(t.body,S)}}f=m(rt,t,{definitions:f}),a.push(f)}}t.body=o.concat(a,t.body)}return t}),Me.DEFMETHOD("var_names",function(){var e=this._var_names;return e||(this._var_names=e=Object.create(null),this.enclosed.forEach(function(t){e[t.name]=!0}),this.variables.each(function(t,n){e[n]=!0})),e}),Me.DEFMETHOD("make_var_name",function(e){for(var t=this.var_names(),n=e=e.replace(/(?:^[^a-z_$]|[^a-z0-9_$])/gi,"_"),i=0;t[n];i++)n=e+"$"+i;return t[n]=!0,n}),Me.DEFMETHOD("hoist_properties",function(e){var t=this;if(!e.option("hoist_props")||e.has_directive("use asm"))return t;var n=t instanceof Ne&&e.top_retain||l,i=Object.create(null),r=new Sn(function(o,a){if(o instanceof it&&r.parent()instanceof ct)return o;var s;if(o instanceof lt&&((l=o.name).scope===t&&1!=(f=l.definition()).escaped&&!f.assignments&&!f.direct_access&&!f.single_use&&!e.exposed(f)&&!n(f)&&(s=l.fixed_value())===o.value&&s instanceof yt)){a(o,this);var u=new A,c=[];return s.properties.forEach(function(e){c.push(m(lt,o,{name:p(e.key),value:e.value}))}),i[f.id]=u,d.splice(c)}if(o instanceof dt&&o.expression instanceof Zt&&(u=i[o.expression.definition().id])){var l,f=u.get(G(o.property));return(l=m(Zt,o,{name:f.name,scope:o.expression.scope,thedef:f})).reference({}),l}function p(e){var n=m(l.CTOR,l,{name:t.make_var_name(l.name+"_"+e),scope:t}),i=t.def_variable(n);return u.set(e,i),t.enclosed.push(i),n}});return t.transform(r)}),function(e){function t(e,t,n){var i=e.length;if(!i)return null;for(var r=[],o=!1,a=0;a<i;a++){var s=e[a].drop_side_effect_free(t,n);o|=s!==e[a],s&&(r.push(s),n=!1)}return o?r.length?r:null:e}e(le,p),e(rn,_),e(tn,_),e(ft,function(e,n){if(!this.is_expr_pure(e)){if(this.expression.is_call_pure(e)){var i=this.args.slice();return i.unshift(this.expression.expression),(i=t(i,e,n))&&D(this,i)}if(o(this.expression)&&(!this.expression.name||!this.expression.name.definition().references.length)){var r=this.clone();return r.expression.process_expression(!1,e),r}return this}this.pure&&e.warn("Dropping __PURE__ call [{file}:{line},{col}]",this.start);var a=t(this.args,e,n);return a&&D(this,a)}),e(ke,_),e(Ie,_),e(Le,_),e(xt,_),e(St,function(e,t){var n=this.right.drop_side_effect_free(e);if(!n)return this.left.drop_side_effect_free(e,t);if(X(this.operator)){if(n===this.right)return this;var i=this.clone();return i.right=n,i}var r=this.left.drop_side_effect_free(e,t);return r?D(this,[r,n]):this.right.drop_side_effect_free(e,t)}),e(vt,function(e){var t=this.left;if(t.has_side_effects(e)||e.has_directive("use strict")&&t instanceof dt&&t.expression.is_constant())return this;for(this.write_only=!0;t instanceof dt;)t=t.expression;return t.is_constant_expression(e.find_parent(Me))?this.right.drop_side_effect_free(e):this}),e(At,function(e){var t=this.consequent.drop_side_effect_free(e),n=this.alternative.drop_side_effect_free(e);if(t===this.consequent&&n===this.alternative)return this;if(!t)return n?m(St,this,{operator:"||",left:this.condition,right:n}):this.condition.drop_side_effect_free(e);if(!n)return m(St,this,{operator:"&&",left:this.condition,right:t});var i=this.clone();return i.consequent=t,i.alternative=n,i}),e(ht,function(e,t){if(z(this.operator))return this.write_only=!this.expression.has_side_effects(e),this;if("typeof"==this.operator&&this.expression instanceof Zt)return null;var n=this.expression.drop_side_effect_free(e,t);return t&&n&&w(n)?n===this.expression&&"!"==this.operator?this:n.negate(e,t):n}),e(Zt,function(e){return this.is_declared(e)?null:this}),e(yt,function(e,n){var i=t(this.properties,e,n);return i&&D(this,i)}),e(Ct,function(e,t){return this.value.drop_side_effect_free(e,t)}),e(bt,function(e,n){var i=t(this.elements,e,n);return i&&D(this,i)}),e(mt,function(e,t){return this.expression.may_throw_on_access(e)?this:this.expression.drop_side_effect_free(e,t)}),e(Et,function(e,t){if(this.expression.may_throw_on_access(e))return this;var n=this.expression.drop_side_effect_free(e,t);if(!n)return this.property.drop_side_effect_free(e,t);var i=this.property.drop_side_effect_free(e);return i?D(this,[n,i]):n}),e(_t,function(e){var t=this.tail_node(),n=t.drop_side_effect_free(e);if(n===t)return this;var i=this.expressions.slice(0,-1);return n&&i.push(n),D(this,i)}),e(we,function(e,t){return this.expression.drop_side_effect_free(e,t)}),e(Ue,_),e(Ke,function(e){var n=t(this.segments,e,T);return n&&D(this,n)})}(function(e,t){e.DEFMETHOD("drop_side_effect_free",t)});var ae=["Number","String","Array","Object","Function","Promise","global","window","document","location"];function ue(e,t){var n=!1,i=new gn(function(t){return!!(n||t instanceof Me)||(t instanceof We&&i.loopcontrol_target(t)===e?n=!0:void 0)});return t instanceof Ae&&i.push(t),i.push(e),e.body.walk(i),n}function ce(e,t){return t.top_retain&&e instanceof Ve&&e._top&&e.name&&t.top_retain(e.name)}e(de,function(e,t){if(e.body instanceof Zt&&-1!==ae.indexOf(e.body.name))return m(ge,e);if(t.option("side_effects")){var n=e.body,i=n.drop_side_effect_free(t,!0);if(!i)return t.warn("Dropping side-effect-free statement [{file}:{line},{col}]",e.start),m(ge,e);if(i!==n)return m(de,e,{body:i})}return e}),e(ye,function(e,t){return t.option("loops")?m(Ce,e,e).optimize(t):e}),e(be,function(e,t){if(!t.option("loops"))return e;var n=e.condition.tail_node().evaluate(t);if(!(n instanceof le)){if(n)return m(Ce,e,{body:m(De,e.body,{body:[e.body,m(de,e.condition,{body:e.condition})]})}).optimize(t);if(!ue(e,t.parent()))return m(De,e.body,{body:[e.body,m(de,e.condition,{body:e.condition})]}).optimize(t)}return e}),e(Ce,function(e,t){if(!t.option("loops"))return e;if(t.option("side_effects")&&e.init&&(e.init=e.init.drop_side_effect_free(t)),e.condition){var n=e.condition.evaluate(t);if(!(n instanceof le))if(n)e.condition=null;else if(!t.option("dead_code")){var i=e.condition;e.condition=y(n,e.condition),e.condition=Y(e.condition.transform(t),i)}if(t.option("dead_code")&&(n instanceof le&&(n=e.condition.tail_node().evaluate(t)),!n)){var r=[];return U(t,e.body,r),e.init instanceof fe?r.push(e.init):e.init&&r.push(m(de,e.init,{body:e.init})),r.push(m(de,e.condition,{body:e.condition})),m(De,e,{body:r}).optimize(t)}}return function e(t,n){var i=t.body instanceof De?t.body.body[0]:t.body;if(n.option("dead_code")&&o(i)){var r=[];return t.init instanceof fe?r.push(t.init):t.init&&r.push(m(de,t.init,{body:t.init})),t.condition&&r.push(m(de,t.condition,{body:t.condition})),U(n,t.body,r),m(De,t,{body:r})}return i instanceof $e&&(o(i.body)?(t.condition?t.condition=m(St,t.condition,{left:t.condition,operator:"&&",right:i.condition.negate(n)}):t.condition=i.condition.negate(n),a(i.alternative)):o(i.alternative)&&(t.condition?t.condition=m(St,t.condition,{left:t.condition,operator:"&&",right:i.condition}):t.condition=i.condition,a(i.body))),t;function o(e){return e instanceof Ye&&n.loopcontrol_target(e)===n.self()}function a(i){i=F(i),t.body instanceof De?(t.body=t.body.clone(),t.body.body=i.concat(t.body.body.slice(1)),t.body=t.body.transform(n)):t.body=m(De,t.body,{body:i}).transform(n),t=e(t,n)}}(e,t)}),e($e,function(e,t){if(R(e.alternative)&&(e.alternative=null),!t.option("conditionals"))return e;var n=e.condition.evaluate(t);if(!(t.option("dead_code")||n instanceof le)){var i=e.condition;e.condition=y(n,i),e.condition=Y(e.condition.transform(t),i)}if(t.option("dead_code")){if(n instanceof le&&(n=e.condition.tail_node().evaluate(t)),!n){t.warn("Condition always false [{file}:{line},{col}]",e.condition.start);var r=[];return U(t,e.body,r),r.push(m(de,e.condition,{body:e.condition})),e.alternative&&r.push(e.alternative),m(De,e,{body:r}).optimize(t)}if(!(n instanceof le)){t.warn("Condition always true [{file}:{line},{col}]",e.condition.start);r=[];return e.alternative&&U(t,e.alternative,r),r.push(m(de,e.condition,{body:e.condition})),r.push(e.body),m(De,e,{body:r}).optimize(t)}}var o=e.condition.negate(t),a=e.condition.print_to_string().length,s=o.print_to_string().length,u=s<a;if(e.alternative&&u){u=!1,e.condition=o;var c=e.body;e.body=e.alternative||m(ge,e),e.alternative=c}if(R(e.body)&&R(e.alternative))return m(de,e.condition,{body:e.condition.clone()}).optimize(t);if(e.body instanceof de&&e.alternative instanceof de)return m(de,e,{body:m(At,e,{condition:e.condition,consequent:e.body.body,alternative:e.alternative.body})}).optimize(t);if(R(e.alternative)&&e.body instanceof de)return a===s&&!u&&e.condition instanceof St&&"||"==e.condition.operator&&(u=!0),u?m(de,e,{body:m(St,e,{operator:"||",left:o,right:e.body.body})}).optimize(t):m(de,e,{body:m(St,e,{operator:"&&",left:e.condition,right:e.body.body})}).optimize(t);if(e.body instanceof ge&&e.alternative instanceof de)return m(de,e,{body:m(St,e,{operator:"||",left:e.condition,right:e.alternative.body})}).optimize(t);if(e.body instanceof He&&e.alternative instanceof He&&e.body.TYPE==e.alternative.TYPE)return m(e.body.CTOR,e,{value:m(At,e,{condition:e.condition,consequent:e.body.value||m(fn,e.body),alternative:e.alternative.value||m(fn,e.alternative)}).transform(t)}).optimize(t);if(e.body instanceof $e&&!e.body.alternative&&!e.alternative&&(e=m($e,e,{condition:m(St,e.condition,{operator:"&&",left:e.condition,right:e.body.condition}),body:e.body.body,alternative:null})),ne(e.body)&&e.alternative){var l=e.alternative;return e.alternative=null,m(De,e,{body:[e,l]}).optimize(t)}if(ne(e.alternative)){r=e.body;return e.body=e.alternative,e.condition=u?o:e.condition.negate(t),e.alternative=null,m(De,e,{body:[e,r]}).optimize(t)}return e}),e(je,function(e,t){if(!t.option("switches"))return e;var n,i=e.expression.evaluate(t);if(!(i instanceof le)){var r=e.expression;e.expression=y(i,r),e.expression=Y(e.expression.transform(t),r)}if(!t.option("dead_code"))return e;i instanceof le&&(i=e.expression.tail_node().evaluate(t));for(var o,a,s=[],u=[],c=0,l=e.body.length;c<l&&!a;c++){if((n=e.body[c])instanceof Qe)o?g(n,u[u.length-1]):o=n;else if(!(i instanceof le)){if(!((h=n.expression.evaluate(t))instanceof le)&&h!==i){g(n,u[u.length-1]);continue}if(h instanceof le&&(h=n.expression.tail_node().evaluate(t)),h===i&&(a=n,o)){var f=u.indexOf(o);u.splice(f,1),g(o,u[f-1]),o=null}}if(ne(n)){var p=u[u.length-1];ne(p)&&p.body.length==n.body.length&&m(De,p,p).equivalent_to(m(De,n,n))&&(p.body=[])}u.push(n)}for(;c<l;)g(e.body[c++],u[u.length-1]);for(u.length>0&&(u[0].body=s.concat(u[0].body)),e.body=u;n=u[u.length-1];){var _=n.body[n.body.length-1];if(_ instanceof Ye&&t.loopcontrol_target(_)===e&&n.body.pop(),n.body.length||n instanceof Je&&(o||n.expression.has_side_effects(t)))break;u.pop()===o&&(o=null)}if(0==u.length)return m(De,e,{body:s.concat(m(de,e.expression,{body:e.expression}))}).optimize(t);if(1==u.length&&(u[0]===a||u[0]===o)){var d=!1,E=new gn(function(t){if(d||t instanceof xe||t instanceof de)return!0;t instanceof Ye&&E.loopcontrol_target(t)===e&&(d=!0)});if(e.walk(E),!d){var h,D=u[0].body.slice();return(h=u[0].expression)&&D.unshift(m(de,h,{body:h})),D.unshift(m(de,e.expression,{body:e.expression})),m(De,e,{body:D}).optimize(t)}}return e;function g(e,n){n&&!ne(n)?n.body=n.body.concat(e.body):U(t,e,s)}}),e(et,function(e,t){if(K(e.body,t),e.bcatch&&e.bfinally&&S(e.bfinally.body,R)&&(e.bfinally=null),t.option("dead_code")&&S(e.body,R)){var n=[];return e.bcatch&&(U(t,e.bcatch,n),n.forEach(function(e){e instanceof it&&e.definitions.forEach(function(e){var t=e.name.definition().redefined();t&&(e.name=e.name.clone(),e.name.thedef=t)})})),e.bfinally&&(n=n.concat(e.bfinally.body)),m(De,e,{body:n}).optimize(t)}return e}),it.DEFMETHOD("remove_initializers",function(){var e=[];this.definitions.forEach(function(t){t.name instanceof Lt?(t.value=null,e.push(t)):t.name.walk(new gn(function(n){n instanceof Lt&&e.push(m(lt,t,{name:n,value:null}))}))}),this.definitions=e}),it.DEFMETHOD("to_assignments",function(e){var t=e.option("reduce_vars"),n=this.definitions.reduce(function(e,n){if(!n.value||n.name instanceof Pe){if(n.value){var i=m(lt,n,{name:n.name,value:n.value}),r=m(rt,n,{definitions:[i]});e.push(r)}}else{var o=m(Zt,n.name,n.name);e.push(m(vt,n,{operator:"=",left:o,right:n.value})),t&&(o.definition().fixed=!1)}return(n=n.name.definition()).eliminated++,n.replaced--,e},[]);return 0==n.length?null:D(this,n)}),e(it,function(e,t){return 0==e.definitions.length?m(ge,e):e}),e(ut,function(e,t){return e}),e(ft,function(e,t){var n=e.expression,i=n;zt(e,t,e.args);var r=S(e.args,function(e){return!(e instanceof we)});t.option("reduce_vars")&&i instanceof Zt&&ce(i=i.fixed_value(),t)&&(i=n);var a=i instanceof xe;if(t.option("unused")&&r&&a&&!i.uses_arguments&&!i.pinned()){for(var s=0,u=0,c=0,l=e.args.length;c<l;c++){if(i.argnames[c]instanceof we){if(i.argnames[c].expression.__unused)for(;c<l;){(A=e.args[c++].drop_side_effect_free(t))&&(e.args[s++]=A)}else for(;c<l;)e.args[s++]=e.args[c++];u=s;break}var f=c>=i.argnames.length;if(f||i.argnames[c].__unused){if(A=e.args[c].drop_side_effect_free(t))e.args[s++]=A;else if(!f){e.args[s++]=m(an,e.args[c],{value:0});continue}}else e.args[s++]=e.args[c];u=s}e.args.length=u}if(t.option("unsafe"))if(x(n))switch(n.name){case"Array":if(1!=e.args.length)return m(bt,e,{elements:e.args}).optimize(t);break;case"Object":if(0==e.args.length)return m(yt,e,{properties:[]});break;case"String":if(0==e.args.length)return m(on,e,{value:""});if(e.args.length<=1)return m(St,e,{left:e.args[0],operator:"+",right:m(on,e,{value:""})}).optimize(t);break;case"Number":if(0==e.args.length)return m(an,e,{value:0});if(1==e.args.length)return m(Dt,e,{expression:e.args[0],operator:"+"}).optimize(t);case"Boolean":if(0==e.args.length)return m(mn,e);if(1==e.args.length)return m(Dt,e,{expression:m(Dt,e,{expression:e.args[0],operator:"!"}),operator:"!"}).optimize(t);break;case"RegExp":var p=[];if(S(e.args,function(e){var n=e.evaluate(t);return p.unshift(n),e!==n}))try{return q(t,e,m(sn,e,{value:RegExp.apply(RegExp,p)}))}catch(n){t.warn("Error converting {expr} [{file}:{line},{col}]",{expr:e.print_to_string(),file:e.start.file,line:e.start.line,col:e.start.col})}}else if(n instanceof mt)switch(n.property){case"toString":if(0==e.args.length&&!n.expression.may_throw_on_access(t))return m(St,e,{left:m(on,e,{value:""}),operator:"+",right:n.expression}).optimize(t);break;case"join":if(n.expression instanceof bt)e:{var _;if(!(e.args.length>0&&(_=e.args[0].evaluate(t))===e.args[0])){var d,E=[],h=[];for(c=0,l=n.expression.elements.length;c<l;c++){var g=n.expression.elements[c];if(g instanceof we)break e;(K=g.evaluate(t))!==g?h.push(K):(h.length>0&&(E.push(m(on,e,{value:h.join(_)})),h.length=0),E.push(g))}return h.length>0&&E.push(m(on,e,{value:h.join(_)})),0==E.length?m(on,e,{value:""}):1==E.length?E[0].is_string(t)?E[0]:m(St,E[0],{operator:"+",left:m(on,e,{value:""}),right:E[0]}):""==_?(d=E[0].is_string(t)||E[1].is_string(t)?E.shift():m(on,e,{value:""}),E.reduce(function(e,t){return m(St,t,{operator:"+",left:e,right:t})},d).optimize(t)):((A=e.clone()).expression=A.expression.clone(),A.expression.expression=A.expression.expression.clone(),A.expression.expression.elements=E,q(t,e,A));var A}}break;case"charAt":if(n.expression.is_string(t)){var v=e.args[0],T=v?v.evaluate(t):0;if(T!==v)return m(Et,n,{expression:n.expression,property:y(0|T,v||n)}).optimize(t)}break;case"apply":if(2==e.args.length&&e.args[1]instanceof bt)return(V=e.args[1].elements.slice()).unshift(e.args[0]),m(ft,e,{expression:m(mt,n,{expression:n.expression,property:"call"}),args:V}).optimize(t);break;case"call":var b=n.expression;if(b instanceof Zt&&(b=b.fixed_value()),b instanceof xe&&!b.contains_this())return(e.args.length?D(this,[e.args[0],m(ft,e,{expression:n.expression,args:e.args.slice(1)})]):m(ft,e,{expression:n.expression,args:[]})).optimize(t)}if(t.option("unsafe_Function")&&x(n)&&"Function"==n.name){if(0==e.args.length)return m(Ie,e,{argnames:[],body:[]}).optimize(t);if(S(e.args,function(e){return e instanceof on}))try{var C=se(N="n(function("+e.args.slice(0,-1).map(function(e){return e.value}).join(",")+"){"+e.args[e.args.length-1].value+"})"),O={ie8:t.option("ie8")};C.figure_out_scope(O);var F,M=new Mn(t.options);(C=C.transform(M)).figure_out_scope(O),Rn.reset(),C.compute_char_frequency(O),C.mangle_names(O),C.walk(new gn(function(e){return!!F||(o(e)?(F=e,!0):void 0)})),F.body instanceof le&&(F.body=[m(Xe,F.body,{value:F.body})]);var N=bn();return De.prototype._codegen.call(F,F,N),e.args=[m(on,e,{value:F.argnames.map(function(e){return e.print_to_string()}).join(",")}),m(on,e.args[e.args.length-1],{value:N.get().replace(/^{|}$/g,"")})],e}catch(n){if(!(n instanceof Z))throw n;t.warn("Error parsing code passed to new Function [{file}:{line},{col}]",e.args[e.args.length-1].start),t.warn(n.toString())}}var k=a&&i.body;k instanceof le?k=m(Xe,k,{value:k}):k&&(k=k[0]);var I=a&&!i.is_generator&&!i.async,L=t.option("inline")&&!e.is_expr_pure(t);if(L&&k instanceof Xe&&I&&(!(K=k.value)||K.is_constant_expression())){K=K?K.clone(!0):m(fn,e);var V=e.args.concat(K);return D(e,V).optimize(t)}if(I){var B,K,U,G,H=-1;if(L&&r&&!i.uses_arguments&&!i.pinned()&&!(t.parent()instanceof Nt)&&!(i.name&&i instanceof Ie)&&(!(t.find_parent(xe)instanceof Le)||0==i.argnames.length&&(i.body instanceof le||1==i.body.length))&&(K=function(e){var n=i.body instanceof le?[i.body]:i.body,r=n.length;if(t.option("inline")<3)return 1==r&&z(e);e=null;for(var o=0;o<r;o++){var a=n[o];if(a instanceof rt){if(e&&!S(a.definitions,function(e){return!e.value}))return!1}else{if(e)return!1;e=a}}return z(e)}(k))&&(n===i||t.option("unused")&&1==(B=n.definition()).references.length&&!Se(t,B)&&i.is_constant_expression(n.scope))&&!e.pure&&!i.contains_this()&&function(){var e=Object.create(null);do{if(!(U=t.parent(++H)).is_block_scope()||t.parent(H-1)instanceof Me||U.block_scope&&U.block_scope.variables.each(function(t){e[t.name]=!0}),U instanceof tt)U.argname&&(e[U.argname.name]=!0);else if(U instanceof ve)G=[];else if(U instanceof Zt&&U.fixed_value()instanceof Me)return!1}while(!(U instanceof Me)||U instanceof Le);var n=!(U instanceof Ne)||t.toplevel.vars,r=t.option("inline");return!(!function(e,t){for(var n=i.body.length,r=0;r<n;r++){var o=i.body[r];if(o instanceof rt){if(!t)return!1;for(var a=o.definitions.length;--a>=0;){var s=o.definitions[a].name;if(s instanceof Pe||e[s.name]||P(s.name)||U.var_names()[s.name])return!1;G&&G.push(s.definition())}}}return!0}(e,r>=3&&n)||!function(e,t){for(var n=0,r=i.argnames.length;n<r;n++){var o=i.argnames[n];if(o instanceof Tt){if(o.left.__unused)continue;return!1}if(o instanceof Pe)return!1;if(o instanceof we){if(o.expression.__unused)continue;return!1}if(!o.__unused){if(!t||e[o.name]||P(o.name)||U.var_names()[o.name])return!1;G&&G.push(o.definition())}}return!0}(e,r>=2&&n)||G&&0!=G.length&&ze(i,G))}()&&!(U instanceof Nt))return i._squeezed=!0,D(e,function(){var n=[],r=[];(function(t,n){for(var r=i.argnames.length,o=e.args.length;--o>=r;)n.push(e.args[o]);for(o=r;--o>=0;){var a=i.argnames[o],s=e.args[o];if(a.__unused||!a.name||U.var_names()[a.name])s&&n.push(s);else{var u=m(Vt,a,a);a.definition().orig.push(u),!s&&G&&(s=m(fn,e)),W(t,n,u,s)}}t.reverse(),n.reverse()})(n,r),function(e,t){for(var n=t.length,r=0,o=i.body.length;r<o;r++){var a=i.body[r];if(a instanceof rt)for(var s=0,u=a.definitions.length;s<u;s++){var c=a.definitions[s],l=c.name;if(W(e,t,l,c.value),G&&S(i.argnames,function(e){return e.name!=l.name})){var f=i.variables.get(l.name),p=m(Zt,l,l);f.references.push(p),t.splice(n++,0,m(vt,c,{operator:"=",left:p,right:m(fn,l)}))}}}}(n,r),r.push(K),n.length&&(c=U.body.indexOf(t.parent(H-1))+1,U.body.splice(c,0,m(rt,i,{definitions:n})));return r}()).optimize(t);if(t.option("side_effects")&&!(i.body instanceof le)&&S(i.body,R)){V=e.args.concat(m(fn,e));return D(e,V).optimize(t)}}if(t.option("negate_iife")&&t.parent()instanceof de&&w(e))return e.negate(t,!0);var X=e.evaluate(t);return X!==e?(X=y(X,e).optimize(t),q(t,X,e)):e;function z(t){return t?t instanceof Xe?t.value?t.value.clone(!0):m(fn,e):t instanceof de?m(Dt,t,{operator:"void",expression:t.body.clone(!0)}):void 0:m(fn,e)}function W(t,n,i,r){var o=i.definition();U.variables.set(i.name,o),U.enclosed.push(o),U.var_names()[i.name]||(U.var_names()[i.name]=!0,t.push(m(lt,i,{name:i,value:null})));var a=m(Zt,i,i);o.references.push(a),r&&n.push(m(vt,e,{operator:"=",left:a,right:r.clone()}))}}),e(pt,function(e,t){if(t.option("unsafe")){var n=e.expression;if(x(n))switch(n.name){case"Object":case"RegExp":case"Function":case"Error":case"Array":return m(ft,e,e).transform(t)}}return e}),e(_t,function(e,t){if(!t.option("side_effects"))return e;var n,i,r=[];n=T(t),i=e.expressions.length-1,e.expressions.forEach(function(e,o){o<i&&(e=e.drop_side_effect_free(t,n)),e&&(O(r,e),n=!1)});var o=r.length-1;return function(){for(;o>0&&H(r[o],t);)o--;o<r.length-1&&(r[o]=m(Dt,e,{operator:"void",expression:r[o]}),r.length=o+1)}(),0==o?((e=C(t.parent(),t.self(),r[0]))instanceof _t||(e=e.optimize(t)),e):(e.expressions=r,e)}),ht.DEFMETHOD("lift_sequences",function(e){if(e.option("sequences")&&this.expression instanceof _t){var t=this.expression.expressions.slice(),n=this.clone();return n.expression=t.pop(),t.push(n),D(this,t).optimize(e)}return this}),e(gt,function(e,t){return e.lift_sequences(t)}),e(Dt,function(e,t){var n=e.expression;if("delete"==e.operator&&!(n instanceof Zt||n instanceof dt||B(n)))return n instanceof _t?((n=n.expressions.slice()).push(m(En,e)),D(e,n).optimize(t)):D(e,[n,m(En,e)]).optimize(t);var i=e.lift_sequences(t);if(i!==e)return i;if(t.option("side_effects")&&"void"==e.operator)return(n=n.drop_side_effect_free(t))?(e.expression=n,e):m(fn,e).optimize(t);if(t.in_boolean_context())switch(e.operator){case"!":if(n instanceof Dt&&"!"==n.operator)return n.expression;n instanceof St&&(e=q(t,e,n.negate(t,T(t))));break;case"typeof":return t.warn("Boolean expression always true [{file}:{line},{col}]",e.start),(n instanceof Zt?m(En,e):D(e,[n,m(En,e)])).optimize(t)}if("-"==e.operator&&n instanceof _n&&(n=n.transform(t)),n instanceof St&&("+"==e.operator||"-"==e.operator)&&("*"==n.operator||"/"==n.operator||"%"==n.operator))return m(St,e,{operator:n.operator,left:m(Dt,n.left,{operator:e.operator,expression:n.left}),right:n.right});if("-"!=e.operator||!(n instanceof an||n instanceof _n)){var r=e.evaluate(t);if(r!==e)return q(t,r=y(r,e).optimize(t),e)}return e}),St.DEFMETHOD("lift_sequences",function(e){if(e.option("sequences")){if(this.left instanceof _t){var t=this.left.expressions.slice();return(n=this.clone()).left=t.pop(),t.push(n),D(this,t).optimize(e)}if(this.right instanceof _t&&!this.left.has_side_effects(e)){for(var n,i="="==this.operator&&this.left instanceof Zt,r=(t=this.right.expressions).length-1,o=0;o<r&&(i||!t[o].has_side_effects(e));o++);if(o==r)return t=t.slice(),(n=this.clone()).right=t.pop(),t.push(n),D(this,t).optimize(e);if(o>0)return(n=this.clone()).right=D(this.right,t.slice(o)),(t=t.slice(0,o)).push(n),D(this,t).optimize(e)}}return this});var Ee=g("== === != !== * & | ^");function Se(e,t){for(var n,i=0;n=e.parent(i);i++)if(n instanceof xe){var r=n.name;if(r&&r.definition()===t)break}return n}function Fe(e,t){return e instanceof Zt||e.TYPE===t.TYPE}function ze(e,t){var n=!1,r=new gn(function(e){return!!n||(e instanceof Zt&&i(e.definition(),t)?n=!0:void 0)}),o=new gn(function(t){if(n)return!0;if(t instanceof Me&&t!==e){var i=o.parent();if(i instanceof ft&&i.expression===t)return;return t.walk(r),!0}});return e.walk(o),n}e(St,function(e,t){function n(){return e.left.is_constant()||e.right.is_constant()||!e.left.has_side_effects(t)&&!e.right.has_side_effects(t)}function i(t){if(n()){t&&(e.operator=t);var i=e.left;e.left=e.right,e.right=i}}if(Ee(e.operator)&&e.right.is_constant()&&!e.left.is_constant()&&(e.left instanceof St&&oe[e.left.operator]>=oe[e.operator]||i()),e=e.lift_sequences(t),t.option("comparisons"))switch(e.operator){case"===":case"!==":var r=!0;(e.left.is_string(t)&&e.right.is_string(t)||e.left.is_number(t)&&e.right.is_number(t)||e.left.is_boolean()&&e.right.is_boolean()||e.left.equivalent_to(e.right))&&(e.operator=e.operator.substr(0,2));case"==":case"!=":if(!r&&H(e.left,t))e.left=m(cn,e.left);else if(t.option("typeofs")&&e.left instanceof on&&"undefined"==e.left.value&&e.right instanceof Dt&&"typeof"==e.right.operator){var o=e.right.expression;(o instanceof Zt?!o.is_declared(t):o instanceof dt&&t.option("ie8"))||(e.right=o,e.left=m(fn,e.left).optimize(t),2==e.operator.length&&(e.operator+="="))}else if(e.left instanceof Zt&&e.right instanceof Zt&&e.left.definition()===e.right.definition()&&((u=e.left.fixed_value())instanceof bt||u instanceof xe||u instanceof yt||u instanceof Nt))return m("="==e.operator[0]?En:mn,e);break;case"&&":case"||":var a=e.left;if(a.operator==e.operator&&(a=a.right),a instanceof St&&a.operator==("&&"==e.operator?"!==":"===")&&e.right instanceof St&&a.operator==e.right.operator&&(H(a.left,t)&&e.right.left instanceof cn||a.left instanceof cn&&H(e.right.left,t))&&!a.right.has_side_effects(t)&&a.right.equivalent_to(e.right.right)){var s=m(St,e,{operator:a.operator.slice(0,-1),left:m(cn,e),right:a.right});return a!==e.left&&(s=m(St,e,{operator:e.operator,left:e.left.left,right:s})),s}}var u;if("+"==e.operator&&t.in_boolean_context()){var c=e.left.evaluate(t),l=e.right.evaluate(t);if(c&&"string"==typeof c)return t.warn("+ in boolean context always true [{file}:{line},{col}]",e.start),D(e,[e.right,m(En,e)]).optimize(t);if(l&&"string"==typeof l)return t.warn("+ in boolean context always true [{file}:{line},{col}]",e.start),D(e,[e.left,m(En,e)]).optimize(t)}if(t.option("comparisons")&&e.is_boolean()){if(!(t.parent()instanceof St)||t.parent()instanceof vt){var f=m(Dt,e,{operator:"!",expression:e.negate(t,T(t))});e=q(t,e,f)}if(t.option("unsafe_comps"))switch(e.operator){case"<":i(">");break;case"<=":i(">=")}}if("+"==e.operator){if(e.right instanceof on&&""==e.right.getValue()&&e.left.is_string(t))return e.left;if(e.left instanceof on&&""==e.left.getValue()&&e.right.is_string(t))return e.right;if(e.left instanceof St&&"+"==e.left.operator&&e.left.left instanceof on&&""==e.left.left.getValue()&&e.right.is_string(t))return e.left=e.left.right,e.transform(t)}if(t.option("evaluate")){switch(e.operator){case"&&":if(!(c=!!e.left.truthy||!e.left.falsy&&e.left.evaluate(t)))return t.warn("Condition left of && always false [{file}:{line},{col}]",e.start),C(t.parent(),t.self(),e.left).optimize(t);if(!(c instanceof le))return t.warn("Condition left of && always true [{file}:{line},{col}]",e.start),D(e,[e.left,e.right]).optimize(t);if(l=e.right.evaluate(t)){if(!(l instanceof le)){if("&&"==(p=t.parent()).operator&&p.left===t.self()||t.in_boolean_context())return t.warn("Dropping side-effect-free && [{file}:{line},{col}]",e.start),e.left.optimize(t)}}else{if(t.in_boolean_context())return t.warn("Boolean && always false [{file}:{line},{col}]",e.start),D(e,[e.left,m(mn,e)]).optimize(t);e.falsy=!0}if("||"==e.left.operator)if(!(_=e.left.right.evaluate(t)))return m(At,e,{condition:e.left.left,consequent:e.right,alternative:e.left.right}).optimize(t);break;case"||":var p,_;if(!(c=!!e.left.truthy||!e.left.falsy&&e.left.evaluate(t)))return t.warn("Condition left of || always false [{file}:{line},{col}]",e.start),D(e,[e.left,e.right]).optimize(t);if(!(c instanceof le))return t.warn("Condition left of || always true [{file}:{line},{col}]",e.start),C(t.parent(),t.self(),e.left).optimize(t);if(l=e.right.evaluate(t)){if(!(l instanceof le)){if(t.in_boolean_context())return t.warn("Boolean || always true [{file}:{line},{col}]",e.start),D(e,[e.left,m(En,e)]).optimize(t);e.truthy=!0}}else if("||"==(p=t.parent()).operator&&p.left===t.self()||t.in_boolean_context())return t.warn("Dropping side-effect-free || [{file}:{line},{col}]",e.start),e.left.optimize(t);if("&&"==e.left.operator)if((_=e.left.right.evaluate(t))&&!(_ instanceof le))return m(At,e,{condition:e.left.left,consequent:e.left.right,alternative:e.right}).optimize(t)}var d=!0;switch(e.operator){case"+":if(e.left instanceof rn&&e.right instanceof St&&"+"==e.right.operator&&e.right.left instanceof rn&&e.right.is_string(t)&&(e=m(St,e,{operator:"+",left:m(on,e.left,{value:""+e.left.getValue()+e.right.left.getValue(),start:e.left.start,end:e.right.left.end}),right:e.right.right})),e.right instanceof rn&&e.left instanceof St&&"+"==e.left.operator&&e.left.right instanceof rn&&e.left.is_string(t)&&(e=m(St,e,{operator:"+",left:e.left.left,right:m(on,e.right,{value:""+e.left.right.getValue()+e.right.getValue(),start:e.left.right.start,end:e.right.end})})),e.left instanceof St&&"+"==e.left.operator&&e.left.is_string(t)&&e.left.right instanceof rn&&e.right instanceof St&&"+"==e.right.operator&&e.right.left instanceof rn&&e.right.is_string(t)&&(e=m(St,e,{operator:"+",left:m(St,e.left,{operator:"+",left:e.left.left,right:m(on,e.left.right,{value:""+e.left.right.getValue()+e.right.left.getValue(),start:e.left.right.start,end:e.right.left.end})}),right:e.right.right})),e.right instanceof Dt&&"-"==e.right.operator&&e.left.is_number(t)){e=m(St,e,{operator:"-",left:e.left,right:e.right.expression});break}if(e.left instanceof Dt&&"-"==e.left.operator&&n()&&e.right.is_number(t)){e=m(St,e,{operator:"-",left:e.right,right:e.left.expression});break}case"*":d=t.option("unsafe_math");case"&":case"|":case"^":if(e.left.is_number(t)&&e.right.is_number(t)&&n()&&!(e.left instanceof St&&e.left.operator!=e.operator&&oe[e.left.operator]>=oe[e.operator])){var E=m(St,e,{operator:e.operator,left:e.right,right:e.left});e=e.right instanceof rn&&!(e.left instanceof rn)?q(t,E,e):q(t,e,E)}d&&e.is_number(t)&&(e.right instanceof St&&e.right.operator==e.operator&&(e=m(St,e,{operator:e.operator,left:m(St,e.left,{operator:e.operator,left:e.left,right:e.right.left,start:e.left.start,end:e.right.left.end}),right:e.right.right})),e.right instanceof rn&&e.left instanceof St&&e.left.operator==e.operator&&(e.left.left instanceof rn?e=m(St,e,{operator:e.operator,left:m(St,e.left,{operator:e.operator,left:e.left.left,right:e.right,start:e.left.left.start,end:e.right.end}),right:e.left.right}):e.left.right instanceof rn&&(e=m(St,e,{operator:e.operator,left:m(St,e.left,{operator:e.operator,left:e.left.right,right:e.right,start:e.left.right.start,end:e.right.end}),right:e.left.left}))),e.left instanceof St&&e.left.operator==e.operator&&e.left.right instanceof rn&&e.right instanceof St&&e.right.operator==e.operator&&e.right.left instanceof rn&&(e=m(St,e,{operator:e.operator,left:m(St,e.left,{operator:e.operator,left:m(St,e.left.left,{operator:e.operator,left:e.left.right,right:e.right.left,start:e.left.right.start,end:e.right.left.end}),right:e.left.left}),right:e.right.right})))}}if(e.right instanceof St&&e.right.operator==e.operator&&(X(e.operator)||"+"==e.operator&&(e.right.left.is_string(t)||e.left.is_string(t)&&e.right.right.is_string(t))))return e.left=m(St,e.left,{operator:e.operator,left:e.left,right:e.right.left}),e.right=e.right.right,e.transform(t);var h=e.evaluate(t);return h!==e?(h=y(h,e).optimize(t),q(t,h,e)):e}),e(Qt,function(e,t){return e}),e(Zt,function(e,t){if(!t.option("ie8")&&x(e)&&(!e.scope.uses_with||!t.find_parent(Re)))switch(e.name){case"undefined":return m(fn,e).optimize(t);case"NaN":return m(ln,e).optimize(t);case"Infinity":return m(_n,e).optimize(t)}var n=t.parent();if(t.option("reduce_vars")&&W(e,n)!==e){var i=e.definition();if(t.top_retain&&i.global&&t.top_retain(i))return i.fixed=!1,i.should_replace=!1,i.single_use=!1,e;var r=e.fixed_value(),a=i.single_use&&!(n instanceof ft&&n.is_expr_pure(t));if(a&&(r instanceof xe||r instanceof Nt))if(ce(r,t))a=!1;else if(i.scope!==e.scope&&(!t.option("reduce_funcs")&&r instanceof xe||1==i.escaped||r.inlined||function(e){for(var t,n=0;t=e.parent(n++);){if(t instanceof fe)return!1;if(t instanceof bt||t instanceof Ot||t instanceof yt)return!0}return!1}(t)))a=!1;else if(Se(t,i))a=!1;else if((i.scope!==e.scope||i.orig[0]instanceof Ut)&&"f"==(a=r.is_constant_expression(e.scope))){var s=e.scope;do{(s instanceof Ve||o(s))&&(s.inlined=!0)}while(s=s.parent_scope)}if(a&&r){var u;if(r instanceof wt&&(r=m(xt,r,r)),r instanceof Ve&&(r._squeezed=!0,r=m(Ie,r,r)),i.recursive_refs>0&&r.name instanceof Gt){var c=(u=r.clone(!0)).name.definition(),l=u.variables.get(u.name.name),f=l&&l.orig[0];f instanceof Xt||((f=m(Xt,u.name,u.name)).scope=u,u.name=f,l=u.def_function(f)),u.walk(new gn(function(e){e instanceof Zt&&e.definition()===c&&(e.thedef=l,l.references.push(e))}))}else(u=r.optimize(t))===r&&(u=r.clone(!0));return u}if(r&&void 0===i.should_replace){var p;if(r instanceof tn)i.orig[0]instanceof Ut||!S(i.references,function(e){return i.scope===e.scope})||(p=r);else{var _=r.evaluate(t);_===r||!t.option("unsafe_regexp")&&_ instanceof RegExp||(p=y(_,r))}if(p){var d,E=p.optimize(t).print_to_string().length;!function(e){var t;return e.walk(new gn(function(e){if(e instanceof Zt&&(t=!0),t)return!0})),t}(r)?(E=Math.min(E,r.print_to_string().length),d=function(){var e=Y(p.optimize(t),r);return e===p||e===r?e.clone(!0):e}):d=function(){var e=p.optimize(t);return e===p?e.clone(!0):e};var h=i.name.length,D=0;t.option("unused")&&!t.exposed(i)&&(D=(h+2+E)/(i.references.length-i.assignments)),i.should_replace=E<=h+D&&d}else i.should_replace=!1}if(i.should_replace)return i.should_replace()}return e}),e(fn,function(e,t){if(t.option("unsafe_undefined")){var n=u(t,"undefined");if(n){var i=m(Zt,e,{name:"undefined",scope:n.scope,thedef:n});return i.is_undefined=!0,i}}var r=W(t.self(),t.parent());return r&&Fe(r,e)?e:m(Dt,e,{operator:"void",expression:m(an,e,{value:0})})}),e(_n,function(e,t){var n=W(t.self(),t.parent());return n&&Fe(n,e)?e:!t.option("keep_infinity")||n&&!Fe(n,e)||u(t,"Infinity")?m(St,e,{operator:"/",left:m(an,e,{value:1}),right:m(an,e,{value:0})}):e}),e(ln,function(e,t){var n=W(t.self(),t.parent());return n&&!Fe(n,e)||u(t,"NaN")?m(St,e,{operator:"/",left:m(an,e,{value:0}),right:m(an,e,{value:0})}):e});var st=["+","-","/","*","%",">>","<<",">>>","|","^","&"],Ft=["*","|","^","&"];function It(e,t){return e instanceof Zt&&(e=e.fixed_value()),!!e&&(!(e instanceof xe||e instanceof Nt)||t.parent()instanceof pt||!e.contains_this())}function Kt(e,t){return t.in_boolean_context()?q(t,e,D(e,[e,m(En,e)]).optimize(t)):e}function zt(e,t,n){for(var i=0;i<n.length;i++){var r=n[i];if(r instanceof we){var o=r.expression;o instanceof bt&&(n.splice.apply(n,[i,1].concat(o.elements)),i--)}}return e}function Wt(e,t){if(!t.option("computed_props"))return e;if(!(e.key instanceof rn))return e;if(e.key instanceof on||e.key instanceof an){if("__proto__"===e.key.value)return e;if("constructor"==e.key.value&&t.parent()instanceof Nt)return e;e.key=e instanceof Ot?e.key.value:m(Ht,e.key,{name:e.key.value})}return e}e(vt,function(e,t){var n;if(t.option("dead_code")&&e.left instanceof Zt&&(n=e.left.definition()).scope===t.find_parent(xe)){var r,o=0,a=e;do{if(r=a,(a=t.parent(o++))instanceof He){if(s(o,a))break;if(ze(n.scope,[n]))break;return"="==e.operator?e.right:(n.fixed=!1,m(St,e,{operator:e.operator.slice(0,-1),left:e.left,right:e.right}).optimize(t))}}while(a instanceof St&&a.right===r||a instanceof _t&&a.tail_node()===r)}return"="==(e=e.lift_sequences(t)).operator&&e.left instanceof Zt&&e.right instanceof St&&(e.right.left instanceof Zt&&e.right.left.name==e.left.name&&i(e.right.operator,st)?(e.operator=e.right.operator+"=",e.right=e.right.right):e.right.right instanceof Zt&&e.right.right.name==e.left.name&&i(e.right.operator,Ft)&&!e.right.left.has_side_effects(t)&&(e.operator=e.right.operator+"=",e.right=e.right.left)),e;function s(n,i){var r=e.right;e.right=m(cn,r);var o=i.may_throw(t);e.right=r;for(var a,s=e.left.definition().scope;(a=t.parent(n++))!==s;)if(a instanceof et){if(a.bfinally)return!0;if(o&&a.bcatch)return!0}}}),e(Tt,function(e,t){if(!t.option("evaluate"))return e;var n=e.right.evaluate(t);return void 0===n?e=e.left:n!==e.right&&(n=y(n,e.right),e.right=Y(n,e.right)),e}),e(At,function(e,t){if(!t.option("conditionals"))return e;if(e.condition instanceof _t){var n=e.condition.expressions.slice();return e.condition=n.pop(),n.push(e),D(e,n)}var i=e.condition.evaluate(t);if(i!==e.condition)return i?(t.warn("Condition always true [{file}:{line},{col}]",e.start),C(t.parent(),t.self(),e.consequent)):(t.warn("Condition always false [{file}:{line},{col}]",e.start),C(t.parent(),t.self(),e.alternative));var r=i.negate(t,T(t));q(t,i,r)===r&&(e=m(At,e,{condition:r,consequent:e.alternative,alternative:e.consequent}));var o,a=e.condition,s=e.consequent,u=e.alternative;if(a instanceof Zt&&s instanceof Zt&&a.definition()===s.definition())return m(St,e,{operator:"||",left:a,right:u});if(s instanceof vt&&u instanceof vt&&s.operator==u.operator&&s.left.equivalent_to(u.left)&&(!e.condition.has_side_effects(t)||"="==s.operator&&!s.left.has_side_effects(t)))return m(vt,e,{operator:s.operator,left:s.left,right:m(At,e,{condition:e.condition,consequent:s.right,alternative:u.right})});if(s instanceof ft&&u.TYPE===s.TYPE&&s.args.length>0&&s.args.length==u.args.length&&s.expression.equivalent_to(u.expression)&&!e.condition.has_side_effects(t)&&!s.expression.has_side_effects(t)&&"number"==typeof(o=function(){for(var e=s.args,t=u.args,n=0,i=e.length;n<i;n++){if(e[n]instanceof we)return;if(!e[n].equivalent_to(t[n])){if(t[n]instanceof we)return;for(var r=n+1;r<i;r++){if(e[r]instanceof we)return;if(!e[r].equivalent_to(t[r]))return}return n}}}())){var c=s.clone();return c.args[o]=m(At,e,{condition:e.condition,consequent:s.args[o],alternative:u.args[o]}),c}if(s instanceof At&&s.alternative.equivalent_to(u))return m(At,e,{condition:m(St,e,{left:e.condition,operator:"&&",right:s.condition}),consequent:s.consequent,alternative:u});if(s.equivalent_to(u))return D(e,[e.condition,s]).optimize(t);if(s instanceof St&&"||"==s.operator&&s.right.equivalent_to(u))return m(St,e,{operator:"||",left:m(St,e,{operator:"&&",left:e.condition,right:s.left}),right:u}).optimize(t);var l=t.in_boolean_context();return p(e.consequent)?_(e.alternative)?f(e.condition):m(St,e,{operator:"||",left:f(e.condition),right:e.alternative}):_(e.consequent)?p(e.alternative)?f(e.condition.negate(t)):m(St,e,{operator:"&&",left:f(e.condition.negate(t)),right:e.alternative}):p(e.alternative)?m(St,e,{operator:"||",left:f(e.condition.negate(t)),right:e.consequent}):_(e.alternative)?m(St,e,{operator:"&&",left:f(e.condition),right:e.consequent}):e;function f(e){return e.is_boolean()?e:m(Dt,e,{operator:"!",expression:e.negate(t)})}function p(e){return e instanceof En||l&&e instanceof rn&&e.getValue()||e instanceof Dt&&"!"==e.operator&&e.expression instanceof rn&&!e.expression.getValue()}function _(e){return e instanceof mn||l&&e instanceof rn&&!e.getValue()||e instanceof Dt&&"!"==e.operator&&e.expression instanceof rn&&e.expression.getValue()}}),e(dn,function(e,t){if(t.in_boolean_context())return m(an,e,{value:+e.value});var n=t.parent();return t.option("booleans_as_integers")?(n instanceof St&&("==="==n.operator||"!=="==n.operator)&&(n.operator=n.operator.replace(/=$/,"")),m(an,e,{value:+e.value})):t.option("booleans")?n instanceof St&&("=="==n.operator||"!="==n.operator)?(t.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]",{operator:n.operator,value:e.value,file:n.start.file,line:n.start.line,col:n.start.col}),m(an,e,{value:+e.value})):m(Dt,e,{operator:"!",expression:m(an,e,{value:1-e.value})}):e}),e(Et,function(e,t){var n,i=e.expression,r=e.property;if(t.option("properties")){var o=r.evaluate(t);if(o!==r){if("string"==typeof o)if("undefined"==o)o=void 0;else(T=parseFloat(o)).toString()==o&&(o=T);r=e.property=Y(r,y(o,r).transform(t));var a=""+o;if(j(a)&&a.length<=r.print_to_string().length+1)return m(mt,e,{expression:i,property:a}).optimize(t)}}e:if(t.option("arguments")&&i instanceof Zt&&"arguments"==i.name&&1==i.definition().orig.length&&(n=i.scope)instanceof xe&&n.uses_arguments&&!(n instanceof Le)&&r instanceof an){for(var s=r.getValue(),u=Object.create(null),c=n.argnames,l=0;l<c.length;l++){if(!(c[l]instanceof Ut))break e;var f=c[l].name;if(f in u)break e;u[f]=!0}var p=n.argnames[s];if(p&&t.has_directive("use strict")){var _=p.definition();(!t.option("reduce_vars")||_.assignments||_.orig.length>1)&&(p=null)}else if(!p&&!t.option("keep_fargs")&&s<n.argnames.length+5)for(;s>=n.argnames.length;)p=m(Ut,n,{name:n.make_var_name("argument_"+n.argnames.length),scope:n}),n.argnames.push(p),n.enclosed.push(n.def_variable(p));if(p){var d=m(Zt,e,p);return d.reference({}),delete p.__unused,d}}if(W(e,t.parent()))return e;if(o!==r){var E=e.flatten_object(a,t);E&&(i=e.expression=E.expression,r=e.property=E.property)}if(t.option("properties")&&t.option("side_effects")&&r instanceof an&&i instanceof bt){s=r.getValue();var h=i.elements,g=h[s];e:if(It(g,t)){for(var S=!0,A=[],v=h.length;--v>s;){(T=h[v].drop_side_effect_free(t))&&(A.unshift(T),S&&T.has_side_effects(t)&&(S=!1))}if(g instanceof we)break e;for(g=g instanceof pn?m(fn,g):g,S||A.unshift(g);--v>=0;){var T;if((T=h[v])instanceof we)break e;(T=T.drop_side_effect_free(t))?A.unshift(T):s--}return S?(A.push(g),D(e,A).optimize(t)):m(Et,e,{expression:m(bt,i,{elements:A}),property:m(an,r,{value:s})})}}var b=e.evaluate(t);return b!==e?q(t,b=y(b,e).optimize(t),e):e}),xe.DEFMETHOD("contains_this",function(){var e,t=this;return t.walk(new gn(function(n){return!!e||(n instanceof tn?e=!0:n!==t&&n instanceof Me&&!(n instanceof Le)||void 0)})),e}),dt.DEFMETHOD("flatten_object",function(e,t){if(t.option("properties")){var n=t.option("unsafe_arrows")&&t.option("ecma")>=6,i=this.expression;if(i instanceof yt)for(var r=i.properties,o=r.length;--o>=0;){var a=r[o];if(""+(a instanceof Mt?a.key.name:a.key)==e){if(!S(r,function(e){return e instanceof Ot||n&&e instanceof Mt&&!e.is_generator}))break;if(!It(a.value,t))break;return m(Et,this,{expression:m(bt,i,{elements:r.map(function(e){var t=e.value;t instanceof ke&&(t=m(Ie,t,t));var n=e.key;return n instanceof le&&!(n instanceof Ht)?D(e,[n,t]):t})}),property:m(an,this,{value:o})})}}}}),e(mt,function(e,t){if("arguments"!=e.property&&"caller"!=e.property||t.warn("Function.prototype.{prop} not supported [{file}:{line},{col}]",{prop:e.property,file:e.start.file,line:e.start.line,col:e.start.col}),W(e,t.parent()))return e;if(t.option("unsafe_proto")&&e.expression instanceof mt&&"prototype"==e.expression.property){var n=e.expression.expression;if(x(n))switch(n.name){case"Array":e.expression=m(bt,e.expression,{elements:[]});break;case"Function":e.expression=m(Ie,e.expression,{argnames:[],body:[]});break;case"Number":e.expression=m(an,e.expression,{value:0});break;case"Object":e.expression=m(yt,e.expression,{properties:[]});break;case"RegExp":e.expression=m(sn,e.expression,{value:/t/});break;case"String":e.expression=m(on,e.expression,{value:""})}}var i=e.flatten_object(e.property,t);if(i)return i.optimize(t);var r=e.evaluate(t);return r!==e?q(t,r=y(r,e).optimize(t),e):e}),e(bt,function(e,t){var n=Kt(e,t);return n!==e?n:zt(e,0,e.elements)}),e(yt,function(e,t){var n=Kt(e,t);if(n!==e)return n;for(var i=e.properties,r=0;r<i.length;r++){var o=i[r];if(o instanceof we){var a=o.expression;a instanceof yt?(i.splice.apply(i,[r,1].concat(o.expression.properties)),r--):a instanceof rn&&!(a instanceof on)&&i.splice(r,1)}}return e}),e(sn,Kt),e(Xe,function(e,t){return e.value&&H(e.value,t)&&(e.value=null),e}),e(Le,function(e,t){if(e.body instanceof le||(e=re(e,t)),t.option("arrows")&&1==e.body.length&&e.body[0]instanceof Xe){var n=e.body[0].value;e.body=n||[]}return e}),e(Ie,function(e,t){if(e=re(e,t),t.option("unsafe_arrows")&&t.option("ecma")>=6&&!e.name&&!e.is_generator&&!e.uses_arguments&&!e.pinned()){var n=!1;if(e.walk(new gn(function(e){return!!n||(e instanceof tn?(n=!0,!0):void 0)})),!n)return m(Le,e,e).optimize(t)}return e}),e(Nt,function(e,t){return e}),e(Dn,function(e,t){return e.expression&&!e.is_star&&H(e.expression,t)&&(e.expression=null),e}),e(Ke,function(e,t){if(!t.option("evaluate")||t.parent()instanceof Be)return e;for(var n=[],i=0;i<e.segments.length;i++){var r=e.segments[i];if(r instanceof le){var o=r.evaluate(t);if(o!==r&&(o+"").length<=r.print_to_string().length+"${}".length){n[n.length-1].value=n[n.length-1].value+o+e.segments[++i].value;continue}}n.push(r)}return e.segments=n,1==n.length?m(on,e,n[0]):e}),e(Be,function(e,t){return e}),e(Ct,Wt),e(Mt,function(e,t){if(Wt(e,t),t.option("arrows")&&t.parent()instanceof yt&&!e.is_generator&&!e.value.uses_arguments&&!e.value.pinned()&&1==e.value.body.length&&e.value.body[0]instanceof Xe&&e.value.body[0].value&&!e.value.contains_this()){var n=m(Le,e.value,e.value);return n.async=e.async,n.is_generator=e.is_generator,m(Ot,e,{key:e.key instanceof Ht?e.key.name:e.key,value:n,quote:e.quote})}return e}),e(Ot,function(e,t){Wt(e,t);var n=t.option("unsafe_methods");if(n&&t.option("ecma")>=6&&(!(n instanceof RegExp)||n.test(e.key+""))){var i=e.key,r=e.value;if((r instanceof Le&&Array.isArray(r.body)&&!r.contains_this()||r instanceof Ie)&&!r.name)return m(Mt,e,{async:r.async,is_generator:r.is_generator,key:i instanceof le?i:m(Ht,e,{name:i}),value:m(ke,r,r),quote:e.quote})}return e}),e(Pe,function(e,t){if(1==t.option("pure_getters")&&t.option("unused")&&!e.is_array&&Array.isArray(e.names)&&!function(e){for(var t=[/^VarDef$/,/^(Const|Let|Var)$/,/^Export$/],n=0,i=0,r=t.length;n<r;i++){var o=e.parent(i);if(!o)return!1;if(0!==n||"Destructuring"!=o.TYPE){if(!t[n].test(o.TYPE))return!1;n++}}return!0}(t)){for(var n=[],i=0;i<e.names.length;i++){var r=e.names[i];r instanceof Ot&&"string"==typeof r.key&&r.value instanceof Lt&&!o(t,r.value.definition())||n.push(r)}n.length!=e.names.length&&(e.names=n)}return e;function o(e,t){return!!t.references.length||!!t.global&&(!e.toplevel.vars||!!e.top_retain&&e.top_retain(t))}})}();var Nn=["$&","$'","$*","$+","$1","$2","$3","$4","$5","$6","$7","$8","$9","$_","$`","$input","@@iterator","ABORT_ERR","ACTIVE","ACTIVE_ATTRIBUTES","ACTIVE_TEXTURE","ACTIVE_UNIFORMS","ADDITION","ALIASED_LINE_WIDTH_RANGE","ALIASED_POINT_SIZE_RANGE","ALLOW_KEYBOARD_INPUT","ALLPASS","ALPHA","ALPHA_BITS","ALT_MASK","ALWAYS","ANY_TYPE","ANY_UNORDERED_NODE_TYPE","ARRAY_BUFFER","ARRAY_BUFFER_BINDING","ATTACHED_SHADERS","ATTRIBUTE_NODE","AT_TARGET","AddSearchProvider","AnalyserNode","AnimationEvent","AnonXMLHttpRequest","ApplicationCache","ApplicationCacheErrorEvent","Array","ArrayBuffer","Attr","Audio","AudioBuffer","AudioBufferSourceNode","AudioContext","AudioDestinationNode","AudioListener","AudioNode","AudioParam","AudioProcessingEvent","AudioStreamTrack","AutocompleteErrorEvent","BACK","BAD_BOUNDARYPOINTS_ERR","BANDPASS","BLEND","BLEND_COLOR","BLEND_DST_ALPHA","BLEND_DST_RGB","BLEND_EQUATION","BLEND_EQUATION_ALPHA","BLEND_EQUATION_RGB","BLEND_SRC_ALPHA","BLEND_SRC_RGB","BLUE_BITS","BLUR","BOOL","BOOLEAN_TYPE","BOOL_VEC2","BOOL_VEC3","BOOL_VEC4","BOTH","BROWSER_DEFAULT_WEBGL","BUBBLING_PHASE","BUFFER_SIZE","BUFFER_USAGE","BYTE","BYTES_PER_ELEMENT","BarProp","BaseHref","BatteryManager","BeforeLoadEvent","BeforeUnloadEvent","BiquadFilterNode","Blob","BlobEvent","Boolean","CAPTURING_PHASE","CCW","CDATASection","CDATA_SECTION_NODE","CHANGE","CHARSET_RULE","CHECKING","CLAMP_TO_EDGE","CLICK","CLOSED","CLOSING","COLOR_ATTACHMENT0","COLOR_BUFFER_BIT","COLOR_CLEAR_VALUE","COLOR_WRITEMASK","COMMENT_NODE","COMPILE_STATUS","COMPRESSED_RGBA_S3TC_DXT1_EXT","COMPRESSED_RGBA_S3TC_DXT3_EXT","COMPRESSED_RGBA_S3TC_DXT5_EXT","COMPRESSED_RGB_S3TC_DXT1_EXT","COMPRESSED_TEXTURE_FORMATS","CONNECTING","CONSTANT_ALPHA","CONSTANT_COLOR","CONSTRAINT_ERR","CONTEXT_LOST_WEBGL","CONTROL_MASK","COUNTER_STYLE_RULE","CSS","CSS2Properties","CSSCharsetRule","CSSConditionRule","CSSCounterStyleRule","CSSFontFaceRule","CSSFontFeatureValuesRule","CSSGroupingRule","CSSImportRule","CSSKeyframeRule","CSSKeyframesRule","CSSMediaRule","CSSMozDocumentRule","CSSNameSpaceRule","CSSPageRule","CSSPrimitiveValue","CSSRule","CSSRuleList","CSSStyleDeclaration","CSSStyleRule","CSSStyleSheet","CSSSupportsRule","CSSUnknownRule","CSSValue","CSSValueList","CSSVariablesDeclaration","CSSVariablesRule","CSSViewportRule","CSS_ATTR","CSS_CM","CSS_COUNTER","CSS_CUSTOM","CSS_DEG","CSS_DIMENSION","CSS_EMS","CSS_EXS","CSS_FILTER_BLUR","CSS_FILTER_BRIGHTNESS","CSS_FILTER_CONTRAST","CSS_FILTER_CUSTOM","CSS_FILTER_DROP_SHADOW","CSS_FILTER_GRAYSCALE","CSS_FILTER_HUE_ROTATE","CSS_FILTER_INVERT","CSS_FILTER_OPACITY","CSS_FILTER_REFERENCE","CSS_FILTER_SATURATE","CSS_FILTER_SEPIA","CSS_GRAD","CSS_HZ","CSS_IDENT","CSS_IN","CSS_INHERIT","CSS_KHZ","CSS_MATRIX","CSS_MATRIX3D","CSS_MM","CSS_MS","CSS_NUMBER","CSS_PC","CSS_PERCENTAGE","CSS_PERSPECTIVE","CSS_PRIMITIVE_VALUE","CSS_PT","CSS_PX","CSS_RAD","CSS_RECT","CSS_RGBCOLOR","CSS_ROTATE","CSS_ROTATE3D","CSS_ROTATEX","CSS_ROTATEY","CSS_ROTATEZ","CSS_S","CSS_SCALE","CSS_SCALE3D","CSS_SCALEX","CSS_SCALEY","CSS_SCALEZ","CSS_SKEW","CSS_SKEWX","CSS_SKEWY","CSS_STRING","CSS_TRANSLATE","CSS_TRANSLATE3D","CSS_TRANSLATEX","CSS_TRANSLATEY","CSS_TRANSLATEZ","CSS_UNKNOWN","CSS_URI","CSS_VALUE_LIST","CSS_VH","CSS_VMAX","CSS_VMIN","CSS_VW","CULL_FACE","CULL_FACE_MODE","CURRENT_PROGRAM","CURRENT_VERTEX_ATTRIB","CUSTOM","CW","CanvasGradient","CanvasPattern","CanvasRenderingContext2D","CaretPosition","ChannelMergerNode","ChannelSplitterNode","CharacterData","ClientRect","ClientRectList","Clipboard","ClipboardEvent","CloseEvent","Collator","CommandEvent","Comment","CompositionEvent","Console","Controllers","ConvolverNode","Counter","Crypto","CryptoKey","CustomEvent","DATABASE_ERR","DATA_CLONE_ERR","DATA_ERR","DBLCLICK","DECR","DECR_WRAP","DELETE_STATUS","DEPTH_ATTACHMENT","DEPTH_BITS","DEPTH_BUFFER_BIT","DEPTH_CLEAR_VALUE","DEPTH_COMPONENT","DEPTH_COMPONENT16","DEPTH_FUNC","DEPTH_RANGE","DEPTH_STENCIL","DEPTH_STENCIL_ATTACHMENT","DEPTH_TEST","DEPTH_WRITEMASK","DIRECTION_DOWN","DIRECTION_LEFT","DIRECTION_RIGHT","DIRECTION_UP","DISABLED","DISPATCH_REQUEST_ERR","DITHER","DOCUMENT_FRAGMENT_NODE","DOCUMENT_NODE","DOCUMENT_POSITION_CONTAINED_BY","DOCUMENT_POSITION_CONTAINS","DOCUMENT_POSITION_DISCONNECTED","DOCUMENT_POSITION_FOLLOWING","DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC","DOCUMENT_POSITION_PRECEDING","DOCUMENT_TYPE_NODE","DOMCursor","DOMError","DOMException","DOMImplementation","DOMImplementationLS","DOMMatrix","DOMMatrixReadOnly","DOMParser","DOMPoint","DOMPointReadOnly","DOMQuad","DOMRect","DOMRectList","DOMRectReadOnly","DOMRequest","DOMSTRING_SIZE_ERR","DOMSettableTokenList","DOMStringList","DOMStringMap","DOMTokenList","DOMTransactionEvent","DOM_DELTA_LINE","DOM_DELTA_PAGE","DOM_DELTA_PIXEL","DOM_INPUT_METHOD_DROP","DOM_INPUT_METHOD_HANDWRITING","DOM_INPUT_METHOD_IME","DOM_INPUT_METHOD_KEYBOARD","DOM_INPUT_METHOD_MULTIMODAL","DOM_INPUT_METHOD_OPTION","DOM_INPUT_METHOD_PASTE","DOM_INPUT_METHOD_SCRIPT","DOM_INPUT_METHOD_UNKNOWN","DOM_INPUT_METHOD_VOICE","DOM_KEY_LOCATION_JOYSTICK","DOM_KEY_LOCATION_LEFT","DOM_KEY_LOCATION_MOBILE","DOM_KEY_LOCATION_NUMPAD","DOM_KEY_LOCATION_RIGHT","DOM_KEY_LOCATION_STANDARD","DOM_VK_0","DOM_VK_1","DOM_VK_2","DOM_VK_3","DOM_VK_4","DOM_VK_5","DOM_VK_6","DOM_VK_7","DOM_VK_8","DOM_VK_9","DOM_VK_A","DOM_VK_ACCEPT","DOM_VK_ADD","DOM_VK_ALT","DOM_VK_ALTGR","DOM_VK_AMPERSAND","DOM_VK_ASTERISK","DOM_VK_AT","DOM_VK_ATTN","DOM_VK_B","DOM_VK_BACKSPACE","DOM_VK_BACK_QUOTE","DOM_VK_BACK_SLASH","DOM_VK_BACK_SPACE","DOM_VK_C","DOM_VK_CANCEL","DOM_VK_CAPS_LOCK","DOM_VK_CIRCUMFLEX","DOM_VK_CLEAR","DOM_VK_CLOSE_BRACKET","DOM_VK_CLOSE_CURLY_BRACKET","DOM_VK_CLOSE_PAREN","DOM_VK_COLON","DOM_VK_COMMA","DOM_VK_CONTEXT_MENU","DOM_VK_CONTROL","DOM_VK_CONVERT","DOM_VK_CRSEL","DOM_VK_CTRL","DOM_VK_D","DOM_VK_DECIMAL","DOM_VK_DELETE","DOM_VK_DIVIDE","DOM_VK_DOLLAR","DOM_VK_DOUBLE_QUOTE","DOM_VK_DOWN","DOM_VK_E","DOM_VK_EISU","DOM_VK_END","DOM_VK_ENTER","DOM_VK_EQUALS","DOM_VK_EREOF","DOM_VK_ESCAPE","DOM_VK_EXCLAMATION","DOM_VK_EXECUTE","DOM_VK_EXSEL","DOM_VK_F","DOM_VK_F1","DOM_VK_F10","DOM_VK_F11","DOM_VK_F12","DOM_VK_F13","DOM_VK_F14","DOM_VK_F15","DOM_VK_F16","DOM_VK_F17","DOM_VK_F18","DOM_VK_F19","DOM_VK_F2","DOM_VK_F20","DOM_VK_F21","DOM_VK_F22","DOM_VK_F23","DOM_VK_F24","DOM_VK_F25","DOM_VK_F26","DOM_VK_F27","DOM_VK_F28","DOM_VK_F29","DOM_VK_F3","DOM_VK_F30","DOM_VK_F31","DOM_VK_F32","DOM_VK_F33","DOM_VK_F34","DOM_VK_F35","DOM_VK_F36","DOM_VK_F4","DOM_VK_F5","DOM_VK_F6","DOM_VK_F7","DOM_VK_F8","DOM_VK_F9","DOM_VK_FINAL","DOM_VK_FRONT","DOM_VK_G","DOM_VK_GREATER_THAN","DOM_VK_H","DOM_VK_HANGUL","DOM_VK_HANJA","DOM_VK_HASH","DOM_VK_HELP","DOM_VK_HK_TOGGLE","DOM_VK_HOME","DOM_VK_HYPHEN_MINUS","DOM_VK_I","DOM_VK_INSERT","DOM_VK_J","DOM_VK_JUNJA","DOM_VK_K","DOM_VK_KANA","DOM_VK_KANJI","DOM_VK_L","DOM_VK_LEFT","DOM_VK_LEFT_TAB","DOM_VK_LESS_THAN","DOM_VK_M","DOM_VK_META","DOM_VK_MODECHANGE","DOM_VK_MULTIPLY","DOM_VK_N","DOM_VK_NONCONVERT","DOM_VK_NUMPAD0","DOM_VK_NUMPAD1","DOM_VK_NUMPAD2","DOM_VK_NUMPAD3","DOM_VK_NUMPAD4","DOM_VK_NUMPAD5","DOM_VK_NUMPAD6","DOM_VK_NUMPAD7","DOM_VK_NUMPAD8","DOM_VK_NUMPAD9","DOM_VK_NUM_LOCK","DOM_VK_O","DOM_VK_OEM_1","DOM_VK_OEM_102","DOM_VK_OEM_2","DOM_VK_OEM_3","DOM_VK_OEM_4","DOM_VK_OEM_5","DOM_VK_OEM_6","DOM_VK_OEM_7","DOM_VK_OEM_8","DOM_VK_OEM_COMMA","DOM_VK_OEM_MINUS","DOM_VK_OEM_PERIOD","DOM_VK_OEM_PLUS","DOM_VK_OPEN_BRACKET","DOM_VK_OPEN_CURLY_BRACKET","DOM_VK_OPEN_PAREN","DOM_VK_P","DOM_VK_PA1","DOM_VK_PAGEDOWN","DOM_VK_PAGEUP","DOM_VK_PAGE_DOWN","DOM_VK_PAGE_UP","DOM_VK_PAUSE","DOM_VK_PERCENT","DOM_VK_PERIOD","DOM_VK_PIPE","DOM_VK_PLAY","DOM_VK_PLUS","DOM_VK_PRINT","DOM_VK_PRINTSCREEN","DOM_VK_PROCESSKEY","DOM_VK_PROPERITES","DOM_VK_Q","DOM_VK_QUESTION_MARK","DOM_VK_QUOTE","DOM_VK_R","DOM_VK_REDO","DOM_VK_RETURN","DOM_VK_RIGHT","DOM_VK_S","DOM_VK_SCROLL_LOCK","DOM_VK_SELECT","DOM_VK_SEMICOLON","DOM_VK_SEPARATOR","DOM_VK_SHIFT","DOM_VK_SLASH","DOM_VK_SLEEP","DOM_VK_SPACE","DOM_VK_SUBTRACT","DOM_VK_T","DOM_VK_TAB","DOM_VK_TILDE","DOM_VK_U","DOM_VK_UNDERSCORE","DOM_VK_UNDO","DOM_VK_UNICODE","DOM_VK_UP","DOM_VK_V","DOM_VK_VOLUME_DOWN","DOM_VK_VOLUME_MUTE","DOM_VK_VOLUME_UP","DOM_VK_W","DOM_VK_WIN","DOM_VK_WINDOW","DOM_VK_WIN_ICO_00","DOM_VK_WIN_ICO_CLEAR","DOM_VK_WIN_ICO_HELP","DOM_VK_WIN_OEM_ATTN","DOM_VK_WIN_OEM_AUTO","DOM_VK_WIN_OEM_BACKTAB","DOM_VK_WIN_OEM_CLEAR","DOM_VK_WIN_OEM_COPY","DOM_VK_WIN_OEM_CUSEL","DOM_VK_WIN_OEM_ENLW","DOM_VK_WIN_OEM_FINISH","DOM_VK_WIN_OEM_FJ_JISHO","DOM_VK_WIN_OEM_FJ_LOYA","DOM_VK_WIN_OEM_FJ_MASSHOU","DOM_VK_WIN_OEM_FJ_ROYA","DOM_VK_WIN_OEM_FJ_TOUROKU","DOM_VK_WIN_OEM_JUMP","DOM_VK_WIN_OEM_PA1","DOM_VK_WIN_OEM_PA2","DOM_VK_WIN_OEM_PA3","DOM_VK_WIN_OEM_RESET","DOM_VK_WIN_OEM_WSCTRL","DOM_VK_X","DOM_VK_XF86XK_ADD_FAVORITE","DOM_VK_XF86XK_APPLICATION_LEFT","DOM_VK_XF86XK_APPLICATION_RIGHT","DOM_VK_XF86XK_AUDIO_CYCLE_TRACK","DOM_VK_XF86XK_AUDIO_FORWARD","DOM_VK_XF86XK_AUDIO_LOWER_VOLUME","DOM_VK_XF86XK_AUDIO_MEDIA","DOM_VK_XF86XK_AUDIO_MUTE","DOM_VK_XF86XK_AUDIO_NEXT","DOM_VK_XF86XK_AUDIO_PAUSE","DOM_VK_XF86XK_AUDIO_PLAY","DOM_VK_XF86XK_AUDIO_PREV","DOM_VK_XF86XK_AUDIO_RAISE_VOLUME","DOM_VK_XF86XK_AUDIO_RANDOM_PLAY","DOM_VK_XF86XK_AUDIO_RECORD","DOM_VK_XF86XK_AUDIO_REPEAT","DOM_VK_XF86XK_AUDIO_REWIND","DOM_VK_XF86XK_AUDIO_STOP","DOM_VK_XF86XK_AWAY","DOM_VK_XF86XK_BACK","DOM_VK_XF86XK_BACK_FORWARD","DOM_VK_XF86XK_BATTERY","DOM_VK_XF86XK_BLUE","DOM_VK_XF86XK_BLUETOOTH","DOM_VK_XF86XK_BOOK","DOM_VK_XF86XK_BRIGHTNESS_ADJUST","DOM_VK_XF86XK_CALCULATOR","DOM_VK_XF86XK_CALENDAR","DOM_VK_XF86XK_CD","DOM_VK_XF86XK_CLOSE","DOM_VK_XF86XK_COMMUNITY","DOM_VK_XF86XK_CONTRAST_ADJUST","DOM_VK_XF86XK_COPY","DOM_VK_XF86XK_CUT","DOM_VK_XF86XK_CYCLE_ANGLE","DOM_VK_XF86XK_DISPLAY","DOM_VK_XF86XK_DOCUMENTS","DOM_VK_XF86XK_DOS","DOM_VK_XF86XK_EJECT","DOM_VK_XF86XK_EXCEL","DOM_VK_XF86XK_EXPLORER","DOM_VK_XF86XK_FAVORITES","DOM_VK_XF86XK_FINANCE","DOM_VK_XF86XK_FORWARD","DOM_VK_XF86XK_FRAME_BACK","DOM_VK_XF86XK_FRAME_FORWARD","DOM_VK_XF86XK_GAME","DOM_VK_XF86XK_GO","DOM_VK_XF86XK_GREEN","DOM_VK_XF86XK_HIBERNATE","DOM_VK_XF86XK_HISTORY","DOM_VK_XF86XK_HOME_PAGE","DOM_VK_XF86XK_HOT_LINKS","DOM_VK_XF86XK_I_TOUCH","DOM_VK_XF86XK_KBD_BRIGHTNESS_DOWN","DOM_VK_XF86XK_KBD_BRIGHTNESS_UP","DOM_VK_XF86XK_KBD_LIGHT_ON_OFF","DOM_VK_XF86XK_LAUNCH0","DOM_VK_XF86XK_LAUNCH1","DOM_VK_XF86XK_LAUNCH2","DOM_VK_XF86XK_LAUNCH3","DOM_VK_XF86XK_LAUNCH4","DOM_VK_XF86XK_LAUNCH5","DOM_VK_XF86XK_LAUNCH6","DOM_VK_XF86XK_LAUNCH7","DOM_VK_XF86XK_LAUNCH8","DOM_VK_XF86XK_LAUNCH9","DOM_VK_XF86XK_LAUNCH_A","DOM_VK_XF86XK_LAUNCH_B","DOM_VK_XF86XK_LAUNCH_C","DOM_VK_XF86XK_LAUNCH_D","DOM_VK_XF86XK_LAUNCH_E","DOM_VK_XF86XK_LAUNCH_F","DOM_VK_XF86XK_LIGHT_BULB","DOM_VK_XF86XK_LOG_OFF","DOM_VK_XF86XK_MAIL","DOM_VK_XF86XK_MAIL_FORWARD","DOM_VK_XF86XK_MARKET","DOM_VK_XF86XK_MEETING","DOM_VK_XF86XK_MEMO","DOM_VK_XF86XK_MENU_KB","DOM_VK_XF86XK_MENU_PB","DOM_VK_XF86XK_MESSENGER","DOM_VK_XF86XK_MON_BRIGHTNESS_DOWN","DOM_VK_XF86XK_MON_BRIGHTNESS_UP","DOM_VK_XF86XK_MUSIC","DOM_VK_XF86XK_MY_COMPUTER","DOM_VK_XF86XK_MY_SITES","DOM_VK_XF86XK_NEW","DOM_VK_XF86XK_NEWS","DOM_VK_XF86XK_OFFICE_HOME","DOM_VK_XF86XK_OPEN","DOM_VK_XF86XK_OPEN_URL","DOM_VK_XF86XK_OPTION","DOM_VK_XF86XK_PASTE","DOM_VK_XF86XK_PHONE","DOM_VK_XF86XK_PICTURES","DOM_VK_XF86XK_POWER_DOWN","DOM_VK_XF86XK_POWER_OFF","DOM_VK_XF86XK_RED","DOM_VK_XF86XK_REFRESH","DOM_VK_XF86XK_RELOAD","DOM_VK_XF86XK_REPLY","DOM_VK_XF86XK_ROCKER_DOWN","DOM_VK_XF86XK_ROCKER_ENTER","DOM_VK_XF86XK_ROCKER_UP","DOM_VK_XF86XK_ROTATE_WINDOWS","DOM_VK_XF86XK_ROTATION_KB","DOM_VK_XF86XK_ROTATION_PB","DOM_VK_XF86XK_SAVE","DOM_VK_XF86XK_SCREEN_SAVER","DOM_VK_XF86XK_SCROLL_CLICK","DOM_VK_XF86XK_SCROLL_DOWN","DOM_VK_XF86XK_SCROLL_UP","DOM_VK_XF86XK_SEARCH","DOM_VK_XF86XK_SEND","DOM_VK_XF86XK_SHOP","DOM_VK_XF86XK_SPELL","DOM_VK_XF86XK_SPLIT_SCREEN","DOM_VK_XF86XK_STANDBY","DOM_VK_XF86XK_START","DOM_VK_XF86XK_STOP","DOM_VK_XF86XK_SUBTITLE","DOM_VK_XF86XK_SUPPORT","DOM_VK_XF86XK_SUSPEND","DOM_VK_XF86XK_TASK_PANE","DOM_VK_XF86XK_TERMINAL","DOM_VK_XF86XK_TIME","DOM_VK_XF86XK_TOOLS","DOM_VK_XF86XK_TOP_MENU","DOM_VK_XF86XK_TO_DO_LIST","DOM_VK_XF86XK_TRAVEL","DOM_VK_XF86XK_USER1KB","DOM_VK_XF86XK_USER2KB","DOM_VK_XF86XK_USER_PB","DOM_VK_XF86XK_UWB","DOM_VK_XF86XK_VENDOR_HOME","DOM_VK_XF86XK_VIDEO","DOM_VK_XF86XK_VIEW","DOM_VK_XF86XK_WAKE_UP","DOM_VK_XF86XK_WEB_CAM","DOM_VK_XF86XK_WHEEL_BUTTON","DOM_VK_XF86XK_WLAN","DOM_VK_XF86XK_WORD","DOM_VK_XF86XK_WWW","DOM_VK_XF86XK_XFER","DOM_VK_XF86XK_YELLOW","DOM_VK_XF86XK_ZOOM_IN","DOM_VK_XF86XK_ZOOM_OUT","DOM_VK_Y","DOM_VK_Z","DOM_VK_ZOOM","DONE","DONT_CARE","DOWNLOADING","DRAGDROP","DST_ALPHA","DST_COLOR","DYNAMIC_DRAW","DataChannel","DataTransfer","DataTransferItem","DataTransferItemList","DataView","Date","DateTimeFormat","DelayNode","DesktopNotification","DesktopNotificationCenter","DeviceLightEvent","DeviceMotionEvent","DeviceOrientationEvent","DeviceProximityEvent","DeviceStorage","DeviceStorageChangeEvent","Document","DocumentFragment","DocumentType","DragEvent","DynamicsCompressorNode","E","ELEMENT_ARRAY_BUFFER","ELEMENT_ARRAY_BUFFER_BINDING","ELEMENT_NODE","EMPTY","ENCODING_ERR","ENDED","END_TO_END","END_TO_START","ENTITY_NODE","ENTITY_REFERENCE_NODE","EPSILON","EQUAL","EQUALPOWER","ERROR","EXPONENTIAL_DISTANCE","Element","ElementQuery","Entity","EntityReference","Error","ErrorEvent","EvalError","Event","EventException","EventSource","EventTarget","External","FASTEST","FIDOSDK","FILTER_ACCEPT","FILTER_INTERRUPT","FILTER_REJECT","FILTER_SKIP","FINISHED_STATE","FIRST_ORDERED_NODE_TYPE","FLOAT","FLOAT_MAT2","FLOAT_MAT3","FLOAT_MAT4","FLOAT_VEC2","FLOAT_VEC3","FLOAT_VEC4","FOCUS","FONT_FACE_RULE","FONT_FEATURE_VALUES_RULE","FRAGMENT_SHADER","FRAGMENT_SHADER_DERIVATIVE_HINT_OES","FRAMEBUFFER","FRAMEBUFFER_ATTACHMENT_OBJECT_NAME","FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE","FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE","FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL","FRAMEBUFFER_BINDING","FRAMEBUFFER_COMPLETE","FRAMEBUFFER_INCOMPLETE_ATTACHMENT","FRAMEBUFFER_INCOMPLETE_DIMENSIONS","FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT","FRAMEBUFFER_UNSUPPORTED","FRONT","FRONT_AND_BACK","FRONT_FACE","FUNC_ADD","FUNC_REVERSE_SUBTRACT","FUNC_SUBTRACT","Feed","FeedEntry","File","FileError","FileList","FileReader","FindInPage","Float32Array","Float64Array","FocusEvent","FontFace","FormData","Function","GENERATE_MIPMAP_HINT","GEQUAL","GREATER","GREEN_BITS","GainNode","Gamepad","GamepadButton","GamepadEvent","GestureEvent","HAVE_CURRENT_DATA","HAVE_ENOUGH_DATA","HAVE_FUTURE_DATA","HAVE_METADATA","HAVE_NOTHING","HEADERS_RECEIVED","HIDDEN","HIERARCHY_REQUEST_ERR","HIGHPASS","HIGHSHELF","HIGH_FLOAT","HIGH_INT","HORIZONTAL","HORIZONTAL_AXIS","HRTF","HTMLAllCollection","HTMLAnchorElement","HTMLAppletElement","HTMLAreaElement","HTMLAudioElement","HTMLBRElement","HTMLBaseElement","HTMLBaseFontElement","HTMLBlockquoteElement","HTMLBodyElement","HTMLButtonElement","HTMLCanvasElement","HTMLCollection","HTMLCommandElement","HTMLContentElement","HTMLDListElement","HTMLDataElement","HTMLDataListElement","HTMLDetailsElement","HTMLDialogElement","HTMLDirectoryElement","HTMLDivElement","HTMLDocument","HTMLElement","HTMLEmbedElement","HTMLFieldSetElement","HTMLFontElement","HTMLFormControlsCollection","HTMLFormElement","HTMLFrameElement","HTMLFrameSetElement","HTMLHRElement","HTMLHeadElement","HTMLHeadingElement","HTMLHtmlElement","HTMLIFrameElement","HTMLImageElement","HTMLInputElement","HTMLIsIndexElement","HTMLKeygenElement","HTMLLIElement","HTMLLabelElement","HTMLLegendElement","HTMLLinkElement","HTMLMapElement","HTMLMarqueeElement","HTMLMediaElement","HTMLMenuElement","HTMLMenuItemElement","HTMLMetaElement","HTMLMeterElement","HTMLModElement","HTMLOListElement","HTMLObjectElement","HTMLOptGroupElement","HTMLOptionElement","HTMLOptionsCollection","HTMLOutputElement","HTMLParagraphElement","HTMLParamElement","HTMLPictureElement","HTMLPreElement","HTMLProgressElement","HTMLPropertiesCollection","HTMLQuoteElement","HTMLScriptElement","HTMLSelectElement","HTMLShadowElement","HTMLSourceElement","HTMLSpanElement","HTMLStyleElement","HTMLTableCaptionElement","HTMLTableCellElement","HTMLTableColElement","HTMLTableElement","HTMLTableRowElement","HTMLTableSectionElement","HTMLTemplateElement","HTMLTextAreaElement","HTMLTimeElement","HTMLTitleElement","HTMLTrackElement","HTMLUListElement","HTMLUnknownElement","HTMLVideoElement","HashChangeEvent","Headers","History","ICE_CHECKING","ICE_CLOSED","ICE_COMPLETED","ICE_CONNECTED","ICE_FAILED","ICE_GATHERING","ICE_WAITING","IDBCursor","IDBCursorWithValue","IDBDatabase","IDBDatabaseException","IDBFactory","IDBFileHandle","IDBFileRequest","IDBIndex","IDBKeyRange","IDBMutableFile","IDBObjectStore","IDBOpenDBRequest","IDBRequest","IDBTransaction","IDBVersionChangeEvent","IDLE","IMPLEMENTATION_COLOR_READ_FORMAT","IMPLEMENTATION_COLOR_READ_TYPE","IMPORT_RULE","INCR","INCR_WRAP","INDEX_SIZE_ERR","INT","INT_VEC2","INT_VEC3","INT_VEC4","INUSE_ATTRIBUTE_ERR","INVALID_ACCESS_ERR","INVALID_CHARACTER_ERR","INVALID_ENUM","INVALID_EXPRESSION_ERR","INVALID_FRAMEBUFFER_OPERATION","INVALID_MODIFICATION_ERR","INVALID_NODE_TYPE_ERR","INVALID_OPERATION","INVALID_STATE_ERR","INVALID_VALUE","INVERSE_DISTANCE","INVERT","IceCandidate","Image","ImageBitmap","ImageData","Infinity","InputEvent","InputMethodContext","InstallTrigger","Int16Array","Int32Array","Int8Array","Intent","InternalError","Intl","IsSearchProviderInstalled","Iterator","JSON","KEEP","KEYDOWN","KEYFRAMES_RULE","KEYFRAME_RULE","KEYPRESS","KEYUP","KeyEvent","KeyboardEvent","LENGTHADJUST_SPACING","LENGTHADJUST_SPACINGANDGLYPHS","LENGTHADJUST_UNKNOWN","LEQUAL","LESS","LINEAR","LINEAR_DISTANCE","LINEAR_MIPMAP_LINEAR","LINEAR_MIPMAP_NEAREST","LINES","LINE_LOOP","LINE_STRIP","LINE_WIDTH","LINK_STATUS","LIVE","LN10","LN2","LOADED","LOADING","LOG10E","LOG2E","LOWPASS","LOWSHELF","LOW_FLOAT","LOW_INT","LSException","LSParserFilter","LUMINANCE","LUMINANCE_ALPHA","LocalMediaStream","Location","MAX_COMBINED_TEXTURE_IMAGE_UNITS","MAX_CUBE_MAP_TEXTURE_SIZE","MAX_FRAGMENT_UNIFORM_VECTORS","MAX_RENDERBUFFER_SIZE","MAX_SAFE_INTEGER","MAX_TEXTURE_IMAGE_UNITS","MAX_TEXTURE_MAX_ANISOTROPY_EXT","MAX_TEXTURE_SIZE","MAX_VALUE","MAX_VARYING_VECTORS","MAX_VERTEX_ATTRIBS","MAX_VERTEX_TEXTURE_IMAGE_UNITS","MAX_VERTEX_UNIFORM_VECTORS","MAX_VIEWPORT_DIMS","MEDIA_ERR_ABORTED","MEDIA_ERR_DECODE","MEDIA_ERR_ENCRYPTED","MEDIA_ERR_NETWORK","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_KEYERR_CLIENT","MEDIA_KEYERR_DOMAIN","MEDIA_KEYERR_HARDWARECHANGE","MEDIA_KEYERR_OUTPUT","MEDIA_KEYERR_SERVICE","MEDIA_KEYERR_UNKNOWN","MEDIA_RULE","MEDIUM_FLOAT","MEDIUM_INT","META_MASK","MIN_SAFE_INTEGER","MIN_VALUE","MIRRORED_REPEAT","MODE_ASYNCHRONOUS","MODE_SYNCHRONOUS","MODIFICATION","MOUSEDOWN","MOUSEDRAG","MOUSEMOVE","MOUSEOUT","MOUSEOVER","MOUSEUP","MOZ_KEYFRAMES_RULE","MOZ_KEYFRAME_RULE","MOZ_SOURCE_CURSOR","MOZ_SOURCE_ERASER","MOZ_SOURCE_KEYBOARD","MOZ_SOURCE_MOUSE","MOZ_SOURCE_PEN","MOZ_SOURCE_TOUCH","MOZ_SOURCE_UNKNOWN","MSGESTURE_FLAG_BEGIN","MSGESTURE_FLAG_CANCEL","MSGESTURE_FLAG_END","MSGESTURE_FLAG_INERTIA","MSGESTURE_FLAG_NONE","MSPOINTER_TYPE_MOUSE","MSPOINTER_TYPE_PEN","MSPOINTER_TYPE_TOUCH","MS_ASYNC_CALLBACK_STATUS_ASSIGN_DELEGATE","MS_ASYNC_CALLBACK_STATUS_CANCEL","MS_ASYNC_CALLBACK_STATUS_CHOOSEANY","MS_ASYNC_CALLBACK_STATUS_ERROR","MS_ASYNC_CALLBACK_STATUS_JOIN","MS_ASYNC_OP_STATUS_CANCELED","MS_ASYNC_OP_STATUS_ERROR","MS_ASYNC_OP_STATUS_SUCCESS","MS_MANIPULATION_STATE_ACTIVE","MS_MANIPULATION_STATE_CANCELLED","MS_MANIPULATION_STATE_COMMITTED","MS_MANIPULATION_STATE_DRAGGING","MS_MANIPULATION_STATE_INERTIA","MS_MANIPULATION_STATE_PRESELECT","MS_MANIPULATION_STATE_SELECTING","MS_MANIPULATION_STATE_STOPPED","MS_MEDIA_ERR_ENCRYPTED","MS_MEDIA_KEYERR_CLIENT","MS_MEDIA_KEYERR_DOMAIN","MS_MEDIA_KEYERR_HARDWARECHANGE","MS_MEDIA_KEYERR_OUTPUT","MS_MEDIA_KEYERR_SERVICE","MS_MEDIA_KEYERR_UNKNOWN","Map","Math","MediaController","MediaDevices","MediaElementAudioSourceNode","MediaEncryptedEvent","MediaError","MediaKeyError","MediaKeyEvent","MediaKeyMessageEvent","MediaKeyNeededEvent","MediaKeySession","MediaKeyStatusMap","MediaKeySystemAccess","MediaKeys","MediaList","MediaQueryList","MediaQueryListEvent","MediaRecorder","MediaSource","MediaStream","MediaStreamAudioDestinationNode","MediaStreamAudioSourceNode","MediaStreamEvent","MediaStreamTrack","MediaStreamTrackEvent","MessageChannel","MessageEvent","MessagePort","Methods","MimeType","MimeTypeArray","MouseEvent","MouseScrollEvent","MozAnimation","MozAnimationDelay","MozAnimationDirection","MozAnimationDuration","MozAnimationFillMode","MozAnimationIterationCount","MozAnimationName","MozAnimationPlayState","MozAnimationTimingFunction","MozAppearance","MozBackfaceVisibility","MozBinding","MozBorderBottomColors","MozBorderEnd","MozBorderEndColor","MozBorderEndStyle","MozBorderEndWidth","MozBorderImage","MozBorderLeftColors","MozBorderRightColors","MozBorderStart","MozBorderStartColor","MozBorderStartStyle","MozBorderStartWidth","MozBorderTopColors","MozBoxAlign","MozBoxDirection","MozBoxFlex","MozBoxOrdinalGroup","MozBoxOrient","MozBoxPack","MozBoxSizing","MozCSSKeyframeRule","MozCSSKeyframesRule","MozColumnCount","MozColumnFill","MozColumnGap","MozColumnRule","MozColumnRuleColor","MozColumnRuleStyle","MozColumnRuleWidth","MozColumnWidth","MozColumns","MozContactChangeEvent","MozFloatEdge","MozFontFeatureSettings","MozFontLanguageOverride","MozForceBrokenImageIcon","MozHyphens","MozImageRegion","MozMarginEnd","MozMarginStart","MozMmsEvent","MozMmsMessage","MozMobileMessageThread","MozOSXFontSmoothing","MozOrient","MozOutlineRadius","MozOutlineRadiusBottomleft","MozOutlineRadiusBottomright","MozOutlineRadiusTopleft","MozOutlineRadiusTopright","MozPaddingEnd","MozPaddingStart","MozPerspective","MozPerspectiveOrigin","MozPowerManager","MozSettingsEvent","MozSmsEvent","MozSmsMessage","MozStackSizing","MozTabSize","MozTextAlignLast","MozTextDecorationColor","MozTextDecorationLine","MozTextDecorationStyle","MozTextSizeAdjust","MozTransform","MozTransformOrigin","MozTransformStyle","MozTransition","MozTransitionDelay","MozTransitionDuration","MozTransitionProperty","MozTransitionTimingFunction","MozUserFocus","MozUserInput","MozUserModify","MozUserSelect","MozWindowDragging","MozWindowShadow","MutationEvent","MutationObserver","MutationRecord","NAMESPACE_ERR","NAMESPACE_RULE","NEAREST","NEAREST_MIPMAP_LINEAR","NEAREST_MIPMAP_NEAREST","NEGATIVE_INFINITY","NETWORK_EMPTY","NETWORK_ERR","NETWORK_IDLE","NETWORK_LOADED","NETWORK_LOADING","NETWORK_NO_SOURCE","NEVER","NEW","NEXT","NEXT_NO_DUPLICATE","NICEST","NODE_AFTER","NODE_BEFORE","NODE_BEFORE_AND_AFTER","NODE_INSIDE","NONE","NON_TRANSIENT_ERR","NOTATION_NODE","NOTCH","NOTEQUAL","NOT_ALLOWED_ERR","NOT_FOUND_ERR","NOT_READABLE_ERR","NOT_SUPPORTED_ERR","NO_DATA_ALLOWED_ERR","NO_ERR","NO_ERROR","NO_MODIFICATION_ALLOWED_ERR","NUMBER_TYPE","NUM_COMPRESSED_TEXTURE_FORMATS","NaN","NamedNodeMap","Navigator","NearbyLinks","NetworkInformation","Node","NodeFilter","NodeIterator","NodeList","Notation","Notification","NotifyPaintEvent","Number","NumberFormat","OBSOLETE","ONE","ONE_MINUS_CONSTANT_ALPHA","ONE_MINUS_CONSTANT_COLOR","ONE_MINUS_DST_ALPHA","ONE_MINUS_DST_COLOR","ONE_MINUS_SRC_ALPHA","ONE_MINUS_SRC_COLOR","OPEN","OPENED","OPENING","ORDERED_NODE_ITERATOR_TYPE","ORDERED_NODE_SNAPSHOT_TYPE","OUT_OF_MEMORY","Object","OfflineAudioCompletionEvent","OfflineAudioContext","OfflineResourceList","Option","OscillatorNode","OverflowEvent","PACK_ALIGNMENT","PAGE_RULE","PARSE_ERR","PATHSEG_ARC_ABS","PATHSEG_ARC_REL","PATHSEG_CLOSEPATH","PATHSEG_CURVETO_CUBIC_ABS","PATHSEG_CURVETO_CUBIC_REL","PATHSEG_CURVETO_CUBIC_SMOOTH_ABS","PATHSEG_CURVETO_CUBIC_SMOOTH_REL","PATHSEG_CURVETO_QUADRATIC_ABS","PATHSEG_CURVETO_QUADRATIC_REL","PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS","PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL","PATHSEG_LINETO_ABS","PATHSEG_LINETO_HORIZONTAL_ABS","PATHSEG_LINETO_HORIZONTAL_REL","PATHSEG_LINETO_REL","PATHSEG_LINETO_VERTICAL_ABS","PATHSEG_LINETO_VERTICAL_REL","PATHSEG_MOVETO_ABS","PATHSEG_MOVETO_REL","PATHSEG_UNKNOWN","PATH_EXISTS_ERR","PEAKING","PERMISSION_DENIED","PERSISTENT","PI","PLAYING_STATE","POINTS","POLYGON_OFFSET_FACTOR","POLYGON_OFFSET_FILL","POLYGON_OFFSET_UNITS","POSITION_UNAVAILABLE","POSITIVE_INFINITY","PREV","PREV_NO_DUPLICATE","PROCESSING_INSTRUCTION_NODE","PageChangeEvent","PageTransitionEvent","PaintRequest","PaintRequestList","PannerNode","Path2D","Performance","PerformanceEntry","PerformanceMark","PerformanceMeasure","PerformanceNavigation","PerformanceResourceTiming","PerformanceTiming","PeriodicWave","Plugin","PluginArray","PopStateEvent","PopupBlockedEvent","ProcessingInstruction","ProgressEvent","Promise","PropertyNodeList","Proxy","PushManager","PushSubscription","Q","QUOTA_ERR","QUOTA_EXCEEDED_ERR","QueryInterface","READ_ONLY","READ_ONLY_ERR","READ_WRITE","RED_BITS","REMOVAL","RENDERBUFFER","RENDERBUFFER_ALPHA_SIZE","RENDERBUFFER_BINDING","RENDERBUFFER_BLUE_SIZE","RENDERBUFFER_DEPTH_SIZE","RENDERBUFFER_GREEN_SIZE","RENDERBUFFER_HEIGHT","RENDERBUFFER_INTERNAL_FORMAT","RENDERBUFFER_RED_SIZE","RENDERBUFFER_STENCIL_SIZE","RENDERBUFFER_WIDTH","RENDERER","RENDERING_INTENT_ABSOLUTE_COLORIMETRIC","RENDERING_INTENT_AUTO","RENDERING_INTENT_PERCEPTUAL","RENDERING_INTENT_RELATIVE_COLORIMETRIC","RENDERING_INTENT_SATURATION","RENDERING_INTENT_UNKNOWN","REPEAT","REPLACE","RGB","RGB565","RGB5_A1","RGBA","RGBA4","RGBColor","ROTATION_CLOCKWISE","ROTATION_COUNTERCLOCKWISE","RTCDataChannelEvent","RTCIceCandidate","RTCPeerConnectionIceEvent","RTCRtpReceiver","RTCRtpSender","RTCSessionDescription","RTCStatsReport","RadioNodeList","Range","RangeError","RangeException","RecordErrorEvent","Rect","ReferenceError","RegExp","Request","Response","SAMPLER_2D","SAMPLER_CUBE","SAMPLES","SAMPLE_ALPHA_TO_COVERAGE","SAMPLE_BUFFERS","SAMPLE_COVERAGE","SAMPLE_COVERAGE_INVERT","SAMPLE_COVERAGE_VALUE","SAWTOOTH","SCHEDULED_STATE","SCISSOR_BOX","SCISSOR_TEST","SCROLL_PAGE_DOWN","SCROLL_PAGE_UP","SDP_ANSWER","SDP_OFFER","SDP_PRANSWER","SECURITY_ERR","SELECT","SERIALIZE_ERR","SEVERITY_ERROR","SEVERITY_FATAL_ERROR","SEVERITY_WARNING","SHADER_COMPILER","SHADER_TYPE","SHADING_LANGUAGE_VERSION","SHIFT_MASK","SHORT","SHOWING","SHOW_ALL","SHOW_ATTRIBUTE","SHOW_CDATA_SECTION","SHOW_COMMENT","SHOW_DOCUMENT","SHOW_DOCUMENT_FRAGMENT","SHOW_DOCUMENT_TYPE","SHOW_ELEMENT","SHOW_ENTITY","SHOW_ENTITY_REFERENCE","SHOW_NOTATION","SHOW_PROCESSING_INSTRUCTION","SHOW_TEXT","SINE","SOUNDFIELD","SQLException","SQRT1_2","SQRT2","SQUARE","SRC_ALPHA","SRC_ALPHA_SATURATE","SRC_COLOR","START_TO_END","START_TO_START","STATIC_DRAW","STENCIL_ATTACHMENT","STENCIL_BACK_FAIL","STENCIL_BACK_FUNC","STENCIL_BACK_PASS_DEPTH_FAIL","STENCIL_BACK_PASS_DEPTH_PASS","STENCIL_BACK_REF","STENCIL_BACK_VALUE_MASK","STENCIL_BACK_WRITEMASK","STENCIL_BITS","STENCIL_BUFFER_BIT","STENCIL_CLEAR_VALUE","STENCIL_FAIL","STENCIL_FUNC","STENCIL_INDEX","STENCIL_INDEX8","STENCIL_PASS_DEPTH_FAIL","STENCIL_PASS_DEPTH_PASS","STENCIL_REF","STENCIL_TEST","STENCIL_VALUE_MASK","STENCIL_WRITEMASK","STREAM_DRAW","STRING_TYPE","STYLE_RULE","SUBPIXEL_BITS","SUPPORTS_RULE","SVGAElement","SVGAltGlyphDefElement","SVGAltGlyphElement","SVGAltGlyphItemElement","SVGAngle","SVGAnimateColorElement","SVGAnimateElement","SVGAnimateMotionElement","SVGAnimateTransformElement","SVGAnimatedAngle","SVGAnimatedBoolean","SVGAnimatedEnumeration","SVGAnimatedInteger","SVGAnimatedLength","SVGAnimatedLengthList","SVGAnimatedNumber","SVGAnimatedNumberList","SVGAnimatedPreserveAspectRatio","SVGAnimatedRect","SVGAnimatedString","SVGAnimatedTransformList","SVGAnimationElement","SVGCircleElement","SVGClipPathElement","SVGColor","SVGComponentTransferFunctionElement","SVGCursorElement","SVGDefsElement","SVGDescElement","SVGDiscardElement","SVGDocument","SVGElement","SVGElementInstance","SVGElementInstanceList","SVGEllipseElement","SVGException","SVGFEBlendElement","SVGFEColorMatrixElement","SVGFEComponentTransferElement","SVGFECompositeElement","SVGFEConvolveMatrixElement","SVGFEDiffuseLightingElement","SVGFEDisplacementMapElement","SVGFEDistantLightElement","SVGFEDropShadowElement","SVGFEFloodElement","SVGFEFuncAElement","SVGFEFuncBElement","SVGFEFuncGElement","SVGFEFuncRElement","SVGFEGaussianBlurElement","SVGFEImageElement","SVGFEMergeElement","SVGFEMergeNodeElement","SVGFEMorphologyElement","SVGFEOffsetElement","SVGFEPointLightElement","SVGFESpecularLightingElement","SVGFESpotLightElement","SVGFETileElement","SVGFETurbulenceElement","SVGFilterElement","SVGFontElement","SVGFontFaceElement","SVGFontFaceFormatElement","SVGFontFaceNameElement","SVGFontFaceSrcElement","SVGFontFaceUriElement","SVGForeignObjectElement","SVGGElement","SVGGeometryElement","SVGGlyphElement","SVGGlyphRefElement","SVGGradientElement","SVGGraphicsElement","SVGHKernElement","SVGImageElement","SVGLength","SVGLengthList","SVGLineElement","SVGLinearGradientElement","SVGMPathElement","SVGMarkerElement","SVGMaskElement","SVGMatrix","SVGMetadataElement","SVGMissingGlyphElement","SVGNumber","SVGNumberList","SVGPaint","SVGPathElement","SVGPathSeg","SVGPathSegArcAbs","SVGPathSegArcRel","SVGPathSegClosePath","SVGPathSegCurvetoCubicAbs","SVGPathSegCurvetoCubicRel","SVGPathSegCurvetoCubicSmoothAbs","SVGPathSegCurvetoCubicSmoothRel","SVGPathSegCurvetoQuadraticAbs","SVGPathSegCurvetoQuadraticRel","SVGPathSegCurvetoQuadraticSmoothAbs","SVGPathSegCurvetoQuadraticSmoothRel","SVGPathSegLinetoAbs","SVGPathSegLinetoHorizontalAbs","SVGPathSegLinetoHorizontalRel","SVGPathSegLinetoRel","SVGPathSegLinetoVerticalAbs","SVGPathSegLinetoVerticalRel","SVGPathSegList","SVGPathSegMovetoAbs","SVGPathSegMovetoRel","SVGPatternElement","SVGPoint","SVGPointList","SVGPolygonElement","SVGPolylineElement","SVGPreserveAspectRatio","SVGRadialGradientElement","SVGRect","SVGRectElement","SVGRenderingIntent","SVGSVGElement","SVGScriptElement","SVGSetElement","SVGStopElement","SVGStringList","SVGStyleElement","SVGSwitchElement","SVGSymbolElement","SVGTRefElement","SVGTSpanElement","SVGTextContentElement","SVGTextElement","SVGTextPathElement","SVGTextPositioningElement","SVGTitleElement","SVGTransform","SVGTransformList","SVGUnitTypes","SVGUseElement","SVGVKernElement","SVGViewElement","SVGViewSpec","SVGZoomAndPan","SVGZoomEvent","SVG_ANGLETYPE_DEG","SVG_ANGLETYPE_GRAD","SVG_ANGLETYPE_RAD","SVG_ANGLETYPE_UNKNOWN","SVG_ANGLETYPE_UNSPECIFIED","SVG_CHANNEL_A","SVG_CHANNEL_B","SVG_CHANNEL_G","SVG_CHANNEL_R","SVG_CHANNEL_UNKNOWN","SVG_COLORTYPE_CURRENTCOLOR","SVG_COLORTYPE_RGBCOLOR","SVG_COLORTYPE_RGBCOLOR_ICCCOLOR","SVG_COLORTYPE_UNKNOWN","SVG_EDGEMODE_DUPLICATE","SVG_EDGEMODE_NONE","SVG_EDGEMODE_UNKNOWN","SVG_EDGEMODE_WRAP","SVG_FEBLEND_MODE_COLOR","SVG_FEBLEND_MODE_COLOR_BURN","SVG_FEBLEND_MODE_COLOR_DODGE","SVG_FEBLEND_MODE_DARKEN","SVG_FEBLEND_MODE_DIFFERENCE","SVG_FEBLEND_MODE_EXCLUSION","SVG_FEBLEND_MODE_HARD_LIGHT","SVG_FEBLEND_MODE_HUE","SVG_FEBLEND_MODE_LIGHTEN","SVG_FEBLEND_MODE_LUMINOSITY","SVG_FEBLEND_MODE_MULTIPLY","SVG_FEBLEND_MODE_NORMAL","SVG_FEBLEND_MODE_OVERLAY","SVG_FEBLEND_MODE_SATURATION","SVG_FEBLEND_MODE_SCREEN","SVG_FEBLEND_MODE_SOFT_LIGHT","SVG_FEBLEND_MODE_UNKNOWN","SVG_FECOLORMATRIX_TYPE_HUEROTATE","SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA","SVG_FECOLORMATRIX_TYPE_MATRIX","SVG_FECOLORMATRIX_TYPE_SATURATE","SVG_FECOLORMATRIX_TYPE_UNKNOWN","SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE","SVG_FECOMPONENTTRANSFER_TYPE_GAMMA","SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY","SVG_FECOMPONENTTRANSFER_TYPE_LINEAR","SVG_FECOMPONENTTRANSFER_TYPE_TABLE","SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN","SVG_FECOMPOSITE_OPERATOR_ARITHMETIC","SVG_FECOMPOSITE_OPERATOR_ATOP","SVG_FECOMPOSITE_OPERATOR_IN","SVG_FECOMPOSITE_OPERATOR_OUT","SVG_FECOMPOSITE_OPERATOR_OVER","SVG_FECOMPOSITE_OPERATOR_UNKNOWN","SVG_FECOMPOSITE_OPERATOR_XOR","SVG_INVALID_VALUE_ERR","SVG_LENGTHTYPE_CM","SVG_LENGTHTYPE_EMS","SVG_LENGTHTYPE_EXS","SVG_LENGTHTYPE_IN","SVG_LENGTHTYPE_MM","SVG_LENGTHTYPE_NUMBER","SVG_LENGTHTYPE_PC","SVG_LENGTHTYPE_PERCENTAGE","SVG_LENGTHTYPE_PT","SVG_LENGTHTYPE_PX","SVG_LENGTHTYPE_UNKNOWN","SVG_MARKERUNITS_STROKEWIDTH","SVG_MARKERUNITS_UNKNOWN","SVG_MARKERUNITS_USERSPACEONUSE","SVG_MARKER_ORIENT_ANGLE","SVG_MARKER_ORIENT_AUTO","SVG_MARKER_ORIENT_UNKNOWN","SVG_MASKTYPE_ALPHA","SVG_MASKTYPE_LUMINANCE","SVG_MATRIX_NOT_INVERTABLE","SVG_MEETORSLICE_MEET","SVG_MEETORSLICE_SLICE","SVG_MEETORSLICE_UNKNOWN","SVG_MORPHOLOGY_OPERATOR_DILATE","SVG_MORPHOLOGY_OPERATOR_ERODE","SVG_MORPHOLOGY_OPERATOR_UNKNOWN","SVG_PAINTTYPE_CURRENTCOLOR","SVG_PAINTTYPE_NONE","SVG_PAINTTYPE_RGBCOLOR","SVG_PAINTTYPE_RGBCOLOR_ICCCOLOR","SVG_PAINTTYPE_UNKNOWN","SVG_PAINTTYPE_URI","SVG_PAINTTYPE_URI_CURRENTCOLOR","SVG_PAINTTYPE_URI_NONE","SVG_PAINTTYPE_URI_RGBCOLOR","SVG_PAINTTYPE_URI_RGBCOLOR_ICCCOLOR","SVG_PRESERVEASPECTRATIO_NONE","SVG_PRESERVEASPECTRATIO_UNKNOWN","SVG_PRESERVEASPECTRATIO_XMAXYMAX","SVG_PRESERVEASPECTRATIO_XMAXYMID","SVG_PRESERVEASPECTRATIO_XMAXYMIN","SVG_PRESERVEASPECTRATIO_XMIDYMAX","SVG_PRESERVEASPECTRATIO_XMIDYMID","SVG_PRESERVEASPECTRATIO_XMIDYMIN","SVG_PRESERVEASPECTRATIO_XMINYMAX","SVG_PRESERVEASPECTRATIO_XMINYMID","SVG_PRESERVEASPECTRATIO_XMINYMIN","SVG_SPREADMETHOD_PAD","SVG_SPREADMETHOD_REFLECT","SVG_SPREADMETHOD_REPEAT","SVG_SPREADMETHOD_UNKNOWN","SVG_STITCHTYPE_NOSTITCH","SVG_STITCHTYPE_STITCH","SVG_STITCHTYPE_UNKNOWN","SVG_TRANSFORM_MATRIX","SVG_TRANSFORM_ROTATE","SVG_TRANSFORM_SCALE","SVG_TRANSFORM_SKEWX","SVG_TRANSFORM_SKEWY","SVG_TRANSFORM_TRANSLATE","SVG_TRANSFORM_UNKNOWN","SVG_TURBULENCE_TYPE_FRACTALNOISE","SVG_TURBULENCE_TYPE_TURBULENCE","SVG_TURBULENCE_TYPE_UNKNOWN","SVG_UNIT_TYPE_OBJECTBOUNDINGBOX","SVG_UNIT_TYPE_UNKNOWN","SVG_UNIT_TYPE_USERSPACEONUSE","SVG_WRONG_TYPE_ERR","SVG_ZOOMANDPAN_DISABLE","SVG_ZOOMANDPAN_MAGNIFY","SVG_ZOOMANDPAN_UNKNOWN","SYNTAX_ERR","SavedPages","Screen","ScreenOrientation","Script","ScriptProcessorNode","ScrollAreaEvent","SecurityPolicyViolationEvent","Selection","ServiceWorker","ServiceWorkerContainer","ServiceWorkerRegistration","SessionDescription","Set","ShadowRoot","SharedWorker","SimpleGestureEvent","SpeechSynthesisEvent","SpeechSynthesisUtterance","StopIteration","Storage","StorageEvent","String","StyleSheet","StyleSheetList","SubtleCrypto","Symbol","SyntaxError","TEMPORARY","TEXTPATH_METHODTYPE_ALIGN","TEXTPATH_METHODTYPE_STRETCH","TEXTPATH_METHODTYPE_UNKNOWN","TEXTPATH_SPACINGTYPE_AUTO","TEXTPATH_SPACINGTYPE_EXACT","TEXTPATH_SPACINGTYPE_UNKNOWN","TEXTURE","TEXTURE0","TEXTURE1","TEXTURE10","TEXTURE11","TEXTURE12","TEXTURE13","TEXTURE14","TEXTURE15","TEXTURE16","TEXTURE17","TEXTURE18","TEXTURE19","TEXTURE2","TEXTURE20","TEXTURE21","TEXTURE22","TEXTURE23","TEXTURE24","TEXTURE25","TEXTURE26","TEXTURE27","TEXTURE28","TEXTURE29","TEXTURE3","TEXTURE30","TEXTURE31","TEXTURE4","TEXTURE5","TEXTURE6","TEXTURE7","TEXTURE8","TEXTURE9","TEXTURE_2D","TEXTURE_BINDING_2D","TEXTURE_BINDING_CUBE_MAP","TEXTURE_CUBE_MAP","TEXTURE_CUBE_MAP_NEGATIVE_X","TEXTURE_CUBE_MAP_NEGATIVE_Y","TEXTURE_CUBE_MAP_NEGATIVE_Z","TEXTURE_CUBE_MAP_POSITIVE_X","TEXTURE_CUBE_MAP_POSITIVE_Y","TEXTURE_CUBE_MAP_POSITIVE_Z","TEXTURE_MAG_FILTER","TEXTURE_MAX_ANISOTROPY_EXT","TEXTURE_MIN_FILTER","TEXTURE_WRAP_S","TEXTURE_WRAP_T","TEXT_NODE","TIMEOUT","TIMEOUT_ERR","TOO_LARGE_ERR","TRANSACTION_INACTIVE_ERR","TRIANGLE","TRIANGLES","TRIANGLE_FAN","TRIANGLE_STRIP","TYPE_BACK_FORWARD","TYPE_ERR","TYPE_MISMATCH_ERR","TYPE_NAVIGATE","TYPE_RELOAD","TYPE_RESERVED","Text","TextDecoder","TextEncoder","TextEvent","TextMetrics","TextTrack","TextTrackCue","TextTrackCueList","TextTrackList","TimeEvent","TimeRanges","Touch","TouchEvent","TouchList","TrackEvent","TransitionEvent","TreeWalker","TypeError","UIEvent","UNCACHED","UNKNOWN_ERR","UNKNOWN_RULE","UNMASKED_RENDERER_WEBGL","UNMASKED_VENDOR_WEBGL","UNORDERED_NODE_ITERATOR_TYPE","UNORDERED_NODE_SNAPSHOT_TYPE","UNPACK_ALIGNMENT","UNPACK_COLORSPACE_CONVERSION_WEBGL","UNPACK_FLIP_Y_WEBGL","UNPACK_PREMULTIPLY_ALPHA_WEBGL","UNSCHEDULED_STATE","UNSENT","UNSIGNED_BYTE","UNSIGNED_INT","UNSIGNED_SHORT","UNSIGNED_SHORT_4_4_4_4","UNSIGNED_SHORT_5_5_5_1","UNSIGNED_SHORT_5_6_5","UNSPECIFIED_EVENT_TYPE_ERR","UPDATEREADY","URIError","URL","URLSearchParams","URLUnencoded","URL_MISMATCH_ERR","UTC","Uint16Array","Uint32Array","Uint8Array","Uint8ClampedArray","UserMessageHandler","UserMessageHandlersNamespace","UserProximityEvent","VALIDATE_STATUS","VALIDATION_ERR","VARIABLES_RULE","VENDOR","VERSION","VERSION_CHANGE","VERSION_ERR","VERTEX_ATTRIB_ARRAY_BUFFER_BINDING","VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE","VERTEX_ATTRIB_ARRAY_ENABLED","VERTEX_ATTRIB_ARRAY_NORMALIZED","VERTEX_ATTRIB_ARRAY_POINTER","VERTEX_ATTRIB_ARRAY_SIZE","VERTEX_ATTRIB_ARRAY_STRIDE","VERTEX_ATTRIB_ARRAY_TYPE","VERTEX_SHADER","VERTICAL","VERTICAL_AXIS","VER_ERR","VIEWPORT","VIEWPORT_RULE","VTTCue","VTTRegion","ValidityState","VideoStreamTrack","WEBKIT_FILTER_RULE","WEBKIT_KEYFRAMES_RULE","WEBKIT_KEYFRAME_RULE","WEBKIT_REGION_RULE","WRONG_DOCUMENT_ERR","WaveShaperNode","WeakMap","WeakSet","WebGLActiveInfo","WebGLBuffer","WebGLContextEvent","WebGLFramebuffer","WebGLProgram","WebGLRenderbuffer","WebGLRenderingContext","WebGLShader","WebGLShaderPrecisionFormat","WebGLTexture","WebGLUniformLocation","WebGLVertexArray","WebKitAnimationEvent","WebKitBlobBuilder","WebKitCSSFilterRule","WebKitCSSFilterValue","WebKitCSSKeyframeRule","WebKitCSSKeyframesRule","WebKitCSSMatrix","WebKitCSSRegionRule","WebKitCSSTransformValue","WebKitDataCue","WebKitGamepad","WebKitMediaKeyError","WebKitMediaKeyMessageEvent","WebKitMediaKeySession","WebKitMediaKeys","WebKitMediaSource","WebKitMutationObserver","WebKitNamespace","WebKitPlaybackTargetAvailabilityEvent","WebKitPoint","WebKitShadowRoot","WebKitSourceBuffer","WebKitSourceBufferList","WebKitTransitionEvent","WebSocket","WheelEvent","Window","Worker","XMLDocument","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestException","XMLHttpRequestProgressEvent","XMLHttpRequestUpload","XMLSerializer","XMLStylesheetProcessingInstruction","XPathEvaluator","XPathException","XPathExpression","XPathNSResolver","XPathResult","XSLTProcessor","ZERO","_XD0M_","_YD0M_","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","__opera","__proto__","_browserjsran","a","aLink","abbr","abort","abs","absolute","acceleration","accelerationIncludingGravity","accelerator","accept","acceptCharset","acceptNode","accessKey","accessKeyLabel","accuracy","acos","acosh","action","actionURL","active","activeCues","activeElement","activeSourceBuffers","activeSourceCount","activeTexture","add","addBehavior","addCandidate","addColorStop","addCue","addElement","addEventListener","addFilter","addFromString","addFromUri","addIceCandidate","addImport","addListener","addNamed","addPageRule","addPath","addPointer","addRange","addRegion","addRule","addSearchEngine","addSourceBuffer","addStream","addTextTrack","addTrack","addWakeLockListener","addedNodes","additionalName","additiveSymbols","addons","adoptNode","adr","advance","alert","algorithm","align","align-content","align-items","align-self","alignContent","alignItems","alignSelf","alignmentBaseline","alinkColor","all","allowFullscreen","allowedDirections","alpha","alt","altGraphKey","altHtml","altKey","altLeft","altitude","altitudeAccuracy","amplitude","ancestorOrigins","anchor","anchorNode","anchorOffset","anchors","angle","animVal","animate","animatedInstanceRoot","animatedNormalizedPathSegList","animatedPathSegList","animatedPoints","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationStartTime","animationTimingFunction","animationsPaused","anniversary","app","appCodeName","appMinorVersion","appName","appNotifications","appVersion","append","appendBuffer","appendChild","appendData","appendItem","appendMedium","appendNamed","appendRule","appendStream","appendWindowEnd","appendWindowStart","applets","applicationCache","apply","applyElement","arc","arcTo","archive","areas","arguments","arrayBuffer","asin","asinh","assert","assign","async","atEnd","atan","atan2","atanh","atob","attachEvent","attachShader","attachments","attack","attrChange","attrName","attributeName","attributeNamespace","attributes","audioTracks","autoIncrement","autobuffer","autocapitalize","autocomplete","autocorrect","autofocus","autoplay","availHeight","availLeft","availTop","availWidth","availability","available","aversion","axes","axis","azimuth","b","back","backface-visibility","backfaceVisibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","backgroundAttachment","backgroundBlendMode","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize","badInput","balance","baseFrequencyX","baseFrequencyY","baseNode","baseOffset","baseURI","baseVal","baselineShift","battery","bday","beginElement","beginElementAt","beginPath","behavior","behaviorCookie","behaviorPart","behaviorUrns","beta","bezierCurveTo","bgColor","bgProperties","bias","big","binaryType","bind","bindAttribLocation","bindBuffer","bindFramebuffer","bindRenderbuffer","bindTexture","blendColor","blendEquation","blendEquationSeparate","blendFunc","blendFuncSeparate","blink","blob","blockDirection","blue","blur","body","bodyUsed","bold","bookmarks","booleanValue","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","borderBottom","borderBottomColor","borderBottomLeftRadius","borderBottomRightRadius","borderBottomStyle","borderBottomWidth","borderCollapse","borderColor","borderColorDark","borderColorLight","borderImage","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeft","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRadius","borderRight","borderRightColor","borderRightStyle","borderRightWidth","borderSpacing","borderStyle","borderTop","borderTopColor","borderTopLeftRadius","borderTopRightRadius","borderTopStyle","borderTopWidth","borderWidth","bottom","bottomMargin","bound","boundElements","boundingClientRect","boundingHeight","boundingLeft","boundingTop","boundingWidth","bounds","box-decoration-break","box-shadow","box-sizing","boxDecorationBreak","boxShadow","boxSizing","breakAfter","breakBefore","breakInside","browserLanguage","btoa","bubbles","buffer","bufferData","bufferDepth","bufferSize","bufferSubData","buffered","bufferedAmount","buildID","buildNumber","button","buttonID","buttons","byteLength","byteOffset","c","call","caller","canBeFormatted","canBeMounted","canBeShared","canHaveChildren","canHaveHTML","canPlayType","cancel","cancelAnimationFrame","cancelBubble","cancelScheduledValues","cancelable","candidate","canvas","caption","caption-side","captionSide","captureEvents","captureStackTrace","caretPositionFromPoint","caretRangeFromPoint","cast","catch","category","cbrt","cd","ceil","cellIndex","cellPadding","cellSpacing","cells","ch","chOff","chain","challenge","changedTouches","channel","channelCount","channelCountMode","channelInterpretation","char","charAt","charCode","charCodeAt","charIndex","characterSet","charging","chargingTime","charset","checkEnclosure","checkFramebufferStatus","checkIntersection","checkValidity","checked","childElementCount","childNodes","children","chrome","ciphertext","cite","classList","className","classid","clear","clearAttributes","clearColor","clearData","clearDepth","clearImmediate","clearInterval","clearMarks","clearMeasures","clearParameters","clearRect","clearResourceTimings","clearShadow","clearStencil","clearTimeout","clearWatch","click","clickCount","clientHeight","clientInformation","clientLeft","clientRect","clientRects","clientTop","clientWidth","clientX","clientY","clip","clip-path","clip-rule","clipBottom","clipLeft","clipPath","clipPathUnits","clipRight","clipRule","clipTop","clipboardData","clone","cloneContents","cloneNode","cloneRange","close","closePath","closed","closest","clz","clz32","cmp","code","codeBase","codePointAt","codeType","colSpan","collapse","collapseToEnd","collapseToStart","collapsed","collect","colno","color","color-interpolation","color-interpolation-filters","colorDepth","colorInterpolation","colorInterpolationFilters","colorMask","colorType","cols","columnCount","columnFill","columnGap","columnNumber","columnRule","columnRuleColor","columnRuleStyle","columnRuleWidth","columnSpan","columnWidth","columns","command","commitPreferences","commonAncestorContainer","compact","compareBoundaryPoints","compareDocumentPosition","compareEndPoints","compareNode","comparePoint","compatMode","compatible","compile","compileShader","complete","componentFromPoint","compositionEndOffset","compositionStartOffset","compressedTexImage2D","compressedTexSubImage2D","concat","conditionText","coneInnerAngle","coneOuterAngle","coneOuterGain","confirm","confirmComposition","confirmSiteSpecificTrackingException","confirmWebWideTrackingException","connect","connectEnd","connectStart","connected","connection","connectionSpeed","console","consolidate","constrictionActive","constructor","contactID","contains","containsNode","content","contentDocument","contentEditable","contentOverflow","contentScriptType","contentStyleType","contentType","contentWindow","context","contextMenu","contextmenu","continue","continuous","control","controller","controls","convertToSpecifiedUnits","cookie","cookieEnabled","coords","copyFromChannel","copyTexImage2D","copyTexSubImage2D","copyToChannel","copyWithin","correspondingElement","correspondingUseElement","cos","cosh","count","counter-increment","counter-reset","counterIncrement","counterReset","cpuClass","cpuSleepAllowed","create","createAnalyser","createAnswer","createAttribute","createAttributeNS","createBiquadFilter","createBuffer","createBufferSource","createCDATASection","createCSSStyleSheet","createCaption","createChannelMerger","createChannelSplitter","createComment","createContextualFragment","createControlRange","createConvolver","createDTMFSender","createDataChannel","createDelay","createDelayNode","createDocument","createDocumentFragment","createDocumentType","createDynamicsCompressor","createElement","createElementNS","createEntityReference","createEvent","createEventObject","createExpression","createFramebuffer","createFunction","createGain","createGainNode","createHTMLDocument","createImageBitmap","createImageData","createIndex","createJavaScriptNode","createLinearGradient","createMediaElementSource","createMediaKeys","createMediaStreamDestination","createMediaStreamSource","createMutableFile","createNSResolver","createNodeIterator","createNotification","createObjectStore","createObjectURL","createOffer","createOscillator","createPanner","createPattern","createPeriodicWave","createPopup","createProcessingInstruction","createProgram","createRadialGradient","createRange","createRangeCollection","createRenderbuffer","createSVGAngle","createSVGLength","createSVGMatrix","createSVGNumber","createSVGPathSegArcAbs","createSVGPathSegArcRel","createSVGPathSegClosePath","createSVGPathSegCurvetoCubicAbs","createSVGPathSegCurvetoCubicRel","createSVGPathSegCurvetoCubicSmoothAbs","createSVGPathSegCurvetoCubicSmoothRel","createSVGPathSegCurvetoQuadraticAbs","createSVGPathSegCurvetoQuadraticRel","createSVGPathSegCurvetoQuadraticSmoothAbs","createSVGPathSegCurvetoQuadraticSmoothRel","createSVGPathSegLinetoAbs","createSVGPathSegLinetoHorizontalAbs","createSVGPathSegLinetoHorizontalRel","createSVGPathSegLinetoRel","createSVGPathSegLinetoVerticalAbs","createSVGPathSegLinetoVerticalRel","createSVGPathSegMovetoAbs","createSVGPathSegMovetoRel","createSVGPoint","createSVGRect","createSVGTransform","createSVGTransformFromMatrix","createScriptProcessor","createSession","createShader","createShadowRoot","createStereoPanner","createStyleSheet","createTBody","createTFoot","createTHead","createTextNode","createTextRange","createTexture","createTouch","createTouchList","createTreeWalker","createWaveShaper","creationTime","crossOrigin","crypto","csi","cssFloat","cssRules","cssText","cssValueType","ctrlKey","ctrlLeft","cues","cullFace","currentNode","currentPage","currentScale","currentScript","currentSrc","currentState","currentStyle","currentTarget","currentTime","currentTranslate","currentView","cursor","curve","customError","cx","cy","d","data","dataFld","dataFormatAs","dataPageSize","dataSrc","dataTransfer","database","dataset","dateTime","db","debug","debuggerEnabled","declare","decode","decodeAudioData","decodeURI","decodeURIComponent","decrypt","default","defaultCharset","defaultChecked","defaultMuted","defaultPlaybackRate","defaultPrevented","defaultSelected","defaultStatus","defaultURL","defaultValue","defaultView","defaultstatus","defer","defineMagicFunction","defineMagicVariable","defineProperties","defineProperty","delayTime","delete","deleteBuffer","deleteCaption","deleteCell","deleteContents","deleteData","deleteDatabase","deleteFramebuffer","deleteFromDocument","deleteIndex","deleteMedium","deleteObjectStore","deleteProgram","deleteRenderbuffer","deleteRow","deleteRule","deleteShader","deleteTFoot","deleteTHead","deleteTexture","deliverChangeRecords","delivery","deliveryInfo","deliveryStatus","deliveryTimestamp","delta","deltaMode","deltaX","deltaY","deltaZ","depthFunc","depthMask","depthRange","deriveBits","deriveKey","description","deselectAll","designMode","destination","destinationURL","detach","detachEvent","detachShader","detail","detune","devicePixelRatio","deviceXDPI","deviceYDPI","diffuseConstant","digest","dimensions","dir","dirName","direction","dirxml","disable","disableVertexAttribArray","disabled","dischargingTime","disconnect","dispatchEvent","display","distanceModel","divisor","djsapi","djsproxy","doImport","doNotTrack","doScroll","doctype","document","documentElement","documentMode","documentURI","dolphin","dolphinGameCenter","dolphininfo","dolphinmeta","domComplete","domContentLoadedEventEnd","domContentLoadedEventStart","domInteractive","domLoading","domain","domainLookupEnd","domainLookupStart","dominant-baseline","dominantBaseline","done","dopplerFactor","download","dragDrop","draggable","drawArrays","drawArraysInstancedANGLE","drawCustomFocusRing","drawElements","drawElementsInstancedANGLE","drawFocusIfNeeded","drawImage","drawImageFromRect","drawSystemFocusRing","drawingBufferHeight","drawingBufferWidth","dropEffect","droppedVideoFrames","dropzone","dump","duplicate","duration","dvname","dvnum","dx","dy","dynsrc","e","edgeMode","effectAllowed","elapsedTime","elementFromPoint","elements","elevation","ellipse","email","embeds","empty","empty-cells","emptyCells","enable","enableBackground","enableStyleSheetsForSet","enableVertexAttribArray","enabled","enabledPlugin","encode","encodeURI","encodeURIComponent","encoding","encrypt","enctype","end","endContainer","endElement","endElementAt","endOfStream","endOffset","endTime","ended","endsWith","entities","entries","entryType","enumerate","enumerateEditable","error","errorCode","escape","eval","evaluate","event","eventPhase","every","exception","exec","execCommand","execCommandShowHelp","execScript","exitFullscreen","exitPointerLock","exp","expand","expandEntityReferences","expando","expansion","expiryDate","explicitOriginalTarget","expm1","exponent","exponentialRampToValueAtTime","exportKey","extend","extensions","extentNode","extentOffset","external","externalResourcesRequired","extractContents","extractable","f","face","factoryReset","fallback","familyName","farthestViewportElement","fastSeek","fatal","fetch","fetchStart","fftSize","fgColor","fileCreatedDate","fileHandle","fileModifiedDate","fileName","fileSize","fileUpdatedDate","filename","files","fill","fill-opacity","fill-rule","fillOpacity","fillRect","fillRule","fillStyle","fillText","filter","filterResX","filterResY","filterUnits","filters","find","findIndex","findRule","findText","finish","fireEvent","firstChild","firstElementChild","firstPage","fixed","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","flexBasis","flexDirection","flexFlow","flexGrow","flexShrink","flexWrap","flipX","flipY","float","flood-color","flood-opacity","floodColor","floodOpacity","floor","flush","focus","focusNode","focusOffset","font","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontSmoothingEnabled","fontStretch","fontStyle","fontSynthesis","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","fontcolor","fonts","fontsize","for","forEach","forceRedraw","form","formAction","formEnctype","formMethod","formNoValidate","formTarget","format","forms","forward","fr","frame","frameBorder","frameElement","frameSpacing","framebufferRenderbuffer","framebufferTexture2D","frames","freeSpace","freeze","frequency","frequencyBinCount","from","fromCharCode","fromCodePoint","fromElement","frontFace","fround","fullScreen","fullscreenElement","fullscreenEnabled","fx","fy","gain","gamepad","gamma","genderIdentity","generateKey","generateMipmap","generateRequest","geolocation","gestureObject","get","getActiveAttrib","getActiveUniform","getAdjacentText","getAll","getAllResponseHeaders","getAsFile","getAsString","getAttachedShaders","getAttribLocation","getAttribute","getAttributeNS","getAttributeNode","getAttributeNodeNS","getAudioTracks","getBBox","getBattery","getBlob","getBookmark","getBoundingClientRect","getBufferParameter","getByteFrequencyData","getByteTimeDomainData","getCSSCanvasContext","getCTM","getCandidateWindowClientRect","getChannelData","getCharNumAtPosition","getClientRect","getClientRects","getCompositionAlternatives","getComputedStyle","getComputedTextLength","getConfiguration","getContext","getContextAttributes","getCounterValue","getCueAsHTML","getCueById","getCurrentPosition","getCurrentTime","getData","getDatabaseNames","getDate","getDay","getDefaultComputedStyle","getDestinationInsertionPoints","getDistributedNodes","getEditable","getElementById","getElementsByClassName","getElementsByName","getElementsByTagName","getElementsByTagNameNS","getEnclosureList","getEndPositionOfChar","getEntries","getEntriesByName","getEntriesByType","getError","getExtension","getExtentOfChar","getFeature","getFile","getFloat32","getFloat64","getFloatFrequencyData","getFloatTimeDomainData","getFloatValue","getFramebufferAttachmentParameter","getFrequencyResponse","getFullYear","getGamepads","getHours","getImageData","getInt16","getInt32","getInt8","getIntersectionList","getItem","getItems","getKey","getLineDash","getLocalStreams","getMarks","getMatchedCSSRules","getMeasures","getMetadata","getMilliseconds","getMinutes","getModifierState","getMonth","getNamedItem","getNamedItemNS","getNotifier","getNumberOfChars","getOverrideHistoryNavigationMode","getOverrideStyle","getOwnPropertyDescriptor","getOwnPropertyNames","getOwnPropertySymbols","getParameter","getPathSegAtLength","getPointAtLength","getPreference","getPreferenceDefault","getPresentationAttribute","getPreventDefault","getProgramInfoLog","getProgramParameter","getPropertyCSSValue","getPropertyPriority","getPropertyShorthand","getPropertyValue","getPrototypeOf","getRGBColorValue","getRandomValues","getRangeAt","getReceivers","getRectValue","getRegistration","getRemoteStreams","getRenderbufferParameter","getResponseHeader","getRoot","getRotationOfChar","getSVGDocument","getScreenCTM","getSeconds","getSelection","getSenders","getShaderInfoLog","getShaderParameter","getShaderPrecisionFormat","getShaderSource","getSimpleDuration","getSiteIcons","getSources","getSpeculativeParserUrls","getStartPositionOfChar","getStartTime","getStats","getStorageUpdates","getStreamById","getStringValue","getSubStringLength","getSubscription","getSupportedExtensions","getTexParameter","getTime","getTimezoneOffset","getTotalLength","getTrackById","getTracks","getTransformToElement","getUTCDate","getUTCDay","getUTCFullYear","getUTCHours","getUTCMilliseconds","getUTCMinutes","getUTCMonth","getUTCSeconds","getUint16","getUint32","getUint8","getUniform","getUniformLocation","getUserMedia","getValues","getVarDate","getVariableValue","getVertexAttrib","getVertexAttribOffset","getVideoPlaybackQuality","getVideoTracks","getWakeLockState","getYear","givenName","global","globalAlpha","globalCompositeOperation","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","go","gradientTransform","gradientUnits","grammars","green","group","groupCollapsed","groupEnd","hardwareConcurrency","has","hasAttribute","hasAttributeNS","hasAttributes","hasChildNodes","hasComposition","hasExtension","hasFeature","hasFocus","hasLayout","hasOwnProperty","hash","head","headers","heading","height","hidden","hide","hideFocus","high","hint","history","honorificPrefix","honorificSuffix","horizontalOverflow","host","hostname","href","hreflang","hspace","html5TagCheckInerface","htmlFor","htmlText","httpEquiv","hwTimestamp","hypot","iccId","iceConnectionState","iceGatheringState","icon","id","identifier","identity","ignoreBOM","ignoreCase","image-orientation","image-rendering","imageOrientation","imageRendering","images","ime-mode","imeMode","implementation","importKey","importNode","importStylesheet","imports","impp","imul","in1","in2","inBandMetadataTrackDispatchType","inRange","includes","incremental","indeterminate","index","indexNames","indexOf","indexedDB","inertiaDestinationX","inertiaDestinationY","info","init","initAnimationEvent","initBeforeLoadEvent","initClipboardEvent","initCloseEvent","initCommandEvent","initCompositionEvent","initCustomEvent","initData","initDeviceMotionEvent","initDeviceOrientationEvent","initDragEvent","initErrorEvent","initEvent","initFocusEvent","initGestureEvent","initHashChangeEvent","initKeyEvent","initKeyboardEvent","initMSManipulationEvent","initMessageEvent","initMouseEvent","initMouseScrollEvent","initMouseWheelEvent","initMutationEvent","initNSMouseEvent","initOverflowEvent","initPageEvent","initPageTransitionEvent","initPointerEvent","initPopStateEvent","initProgressEvent","initScrollAreaEvent","initSimpleGestureEvent","initStorageEvent","initTextEvent","initTimeEvent","initTouchEvent","initTransitionEvent","initUIEvent","initWebKitAnimationEvent","initWebKitTransitionEvent","initWebKitWheelEvent","initWheelEvent","initialTime","initialize","initiatorType","inner","innerHTML","innerHeight","innerText","innerWidth","input","inputBuffer","inputEncoding","inputMethod","insertAdjacentElement","insertAdjacentHTML","insertAdjacentText","insertBefore","insertCell","insertData","insertItemBefore","insertNode","insertRow","insertRule","instanceRoot","intercept","interimResults","internalSubset","intersectsNode","interval","invalidIteratorState","inverse","invertSelf","is","is2D","isAlternate","isArray","isBingCurrentSearchDefault","isBuffer","isCandidateWindowVisible","isChar","isCollapsed","isComposing","isContentEditable","isContentHandlerRegistered","isContextLost","isDefaultNamespace","isDisabled","isEnabled","isEqual","isEqualNode","isExtensible","isFinite","isFramebuffer","isFrozen","isGenerator","isId","isInjected","isInteger","isMap","isMultiLine","isNaN","isOpen","isPointInFill","isPointInPath","isPointInRange","isPointInStroke","isPrefAlternate","isPrimary","isProgram","isPropertyImplicit","isProtocolHandlerRegistered","isPrototypeOf","isRenderbuffer","isSafeInteger","isSameNode","isSealed","isShader","isSupported","isTextEdit","isTexture","isTrusted","isTypeSupported","isView","isolation","italics","item","itemId","itemProp","itemRef","itemScope","itemType","itemValue","iterateNext","iterator","javaEnabled","jobTitle","join","json","justify-content","justifyContent","k1","k2","k3","k4","kernelMatrix","kernelUnitLengthX","kernelUnitLengthY","kerning","key","keyCode","keyFor","keyIdentifier","keyLightEnabled","keyLocation","keyPath","keySystem","keyText","keyUsage","keys","keytype","kind","knee","label","labels","lang","language","languages","largeArcFlag","lastChild","lastElementChild","lastEventId","lastIndex","lastIndexOf","lastMatch","lastMessageSubject","lastMessageType","lastModified","lastModifiedDate","lastPage","lastParen","lastState","lastStyleSheetSet","latitude","layerX","layerY","layoutFlow","layoutGrid","layoutGridChar","layoutGridLine","layoutGridMode","layoutGridType","lbound","left","leftContext","leftMargin","length","lengthAdjust","lengthComputable","letter-spacing","letterSpacing","level","lighting-color","lightingColor","limitingConeAngle","line","line-height","lineAlign","lineBreak","lineCap","lineDashOffset","lineHeight","lineJoin","lineNumber","lineTo","lineWidth","linearRampToValueAtTime","lineno","link","linkColor","linkProgram","links","list","list-style","list-style-image","list-style-position","list-style-type","listStyle","listStyleImage","listStylePosition","listStyleType","listener","load","loadEventEnd","loadEventStart","loadTimes","loaded","localDescription","localName","localStorage","locale","localeCompare","location","locationbar","lock","lockedFile","log","log10","log1p","log2","logicalXDPI","logicalYDPI","longDesc","longitude","lookupNamespaceURI","lookupPrefix","loop","loopEnd","loopStart","looping","low","lower","lowerBound","lowerOpen","lowsrc","m11","m12","m13","m14","m21","m22","m23","m24","m31","m32","m33","m34","m41","m42","m43","m44","manifest","map","mapping","margin","margin-bottom","margin-left","margin-right","margin-top","marginBottom","marginHeight","marginLeft","marginRight","marginTop","marginWidth","mark","marker","marker-end","marker-mid","marker-offset","marker-start","markerEnd","markerHeight","markerMid","markerOffset","markerStart","markerUnits","markerWidth","marks","mask","mask-type","maskContentUnits","maskType","maskUnits","match","matchMedia","matchMedium","matches","matrix","matrixTransform","max","max-height","max-width","maxAlternatives","maxChannelCount","maxConnectionsPerServer","maxDecibels","maxDistance","maxHeight","maxLength","maxTouchPoints","maxValue","maxWidth","measure","measureText","media","mediaDevices","mediaElement","mediaGroup","mediaKeys","mediaText","meetOrSlice","memory","menubar","mergeAttributes","message","messageClass","messageHandlers","metaKey","method","mimeType","mimeTypes","min","min-height","min-width","minDecibels","minHeight","minValue","minWidth","miterLimit","mix-blend-mode","mixBlendMode","mode","modify","mount","move","moveBy","moveEnd","moveFirst","moveFocusDown","moveFocusLeft","moveFocusRight","moveFocusUp","moveNext","moveRow","moveStart","moveTo","moveToBookmark","moveToElementText","moveToPoint","mozAdd","mozAnimationStartTime","mozAnon","mozApps","mozAudioCaptured","mozAudioChannelType","mozAutoplayEnabled","mozCancelAnimationFrame","mozCancelFullScreen","mozCancelRequestAnimationFrame","mozCaptureStream","mozCaptureStreamUntilEnded","mozClearDataAt","mozContact","mozContacts","mozCreateFileHandle","mozCurrentTransform","mozCurrentTransformInverse","mozCursor","mozDash","mozDashOffset","mozDecodedFrames","mozExitPointerLock","mozFillRule","mozFragmentEnd","mozFrameDelay","mozFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozGetAll","mozGetAllKeys","mozGetAsFile","mozGetDataAt","mozGetMetadata","mozGetUserMedia","mozHasAudio","mozHasItem","mozHidden","mozImageSmoothingEnabled","mozIndexedDB","mozInnerScreenX","mozInnerScreenY","mozInputSource","mozIsTextField","mozItem","mozItemCount","mozItems","mozLength","mozLockOrientation","mozMatchesSelector","mozMovementX","mozMovementY","mozOpaque","mozOrientation","mozPaintCount","mozPaintedFrames","mozParsedFrames","mozPay","mozPointerLockElement","mozPresentedFrames","mozPreservesPitch","mozPressure","mozPrintCallback","mozRTCIceCandidate","mozRTCPeerConnection","mozRTCSessionDescription","mozRemove","mozRequestAnimationFrame","mozRequestFullScreen","mozRequestPointerLock","mozSetDataAt","mozSetImageElement","mozSourceNode","mozSrcObject","mozSystem","mozTCPSocket","mozTextStyle","mozTypesAt","mozUnlockOrientation","mozUserCancelled","mozVisibilityState","msAnimation","msAnimationDelay","msAnimationDirection","msAnimationDuration","msAnimationFillMode","msAnimationIterationCount","msAnimationName","msAnimationPlayState","msAnimationStartTime","msAnimationTimingFunction","msBackfaceVisibility","msBlockProgression","msCSSOMElementFloatMetrics","msCaching","msCachingEnabled","msCancelRequestAnimationFrame","msCapsLockWarningOff","msClearImmediate","msClose","msContentZoomChaining","msContentZoomFactor","msContentZoomLimit","msContentZoomLimitMax","msContentZoomLimitMin","msContentZoomSnap","msContentZoomSnapPoints","msContentZoomSnapType","msContentZooming","msConvertURL","msCrypto","msDoNotTrack","msElementsFromPoint","msElementsFromRect","msExitFullscreen","msExtendedCode","msFillRule","msFirstPaint","msFlex","msFlexAlign","msFlexDirection","msFlexFlow","msFlexItemAlign","msFlexLinePack","msFlexNegative","msFlexOrder","msFlexPack","msFlexPositive","msFlexPreferredSize","msFlexWrap","msFlowFrom","msFlowInto","msFontFeatureSettings","msFullscreenElement","msFullscreenEnabled","msGetInputContext","msGetRegionContent","msGetUntransformedBounds","msGraphicsTrustStatus","msGridColumn","msGridColumnAlign","msGridColumnSpan","msGridColumns","msGridRow","msGridRowAlign","msGridRowSpan","msGridRows","msHidden","msHighContrastAdjust","msHyphenateLimitChars","msHyphenateLimitLines","msHyphenateLimitZone","msHyphens","msImageSmoothingEnabled","msImeAlign","msIndexedDB","msInterpolationMode","msIsStaticHTML","msKeySystem","msKeys","msLaunchUri","msLockOrientation","msManipulationViewsEnabled","msMatchMedia","msMatchesSelector","msMaxTouchPoints","msOrientation","msOverflowStyle","msPerspective","msPerspectiveOrigin","msPlayToDisabled","msPlayToPreferredSourceUri","msPlayToPrimary","msPointerEnabled","msRegionOverflow","msReleasePointerCapture","msRequestAnimationFrame","msRequestFullscreen","msSaveBlob","msSaveOrOpenBlob","msScrollChaining","msScrollLimit","msScrollLimitXMax","msScrollLimitXMin","msScrollLimitYMax","msScrollLimitYMin","msScrollRails","msScrollSnapPointsX","msScrollSnapPointsY","msScrollSnapType","msScrollSnapX","msScrollSnapY","msScrollTranslation","msSetImmediate","msSetMediaKeys","msSetPointerCapture","msTextCombineHorizontal","msTextSizeAdjust","msToBlob","msTouchAction","msTouchSelect","msTraceAsyncCallbackCompleted","msTraceAsyncCallbackStarting","msTraceAsyncOperationCompleted","msTraceAsyncOperationStarting","msTransform","msTransformOrigin","msTransformStyle","msTransition","msTransitionDelay","msTransitionDuration","msTransitionProperty","msTransitionTimingFunction","msUnlockOrientation","msUpdateAsyncCallbackRelation","msUserSelect","msVisibilityState","msWrapFlow","msWrapMargin","msWrapThrough","msWriteProfilerMark","msZoom","msZoomTo","mt","multiEntry","multiSelectionObj","multiline","multiple","multiply","multiplySelf","mutableFile","muted","n","name","nameProp","namedItem","namedRecordset","names","namespaceURI","namespaces","naturalHeight","naturalWidth","navigate","navigation","navigationMode","navigationStart","navigator","near","nearestViewportElement","negative","netscape","networkState","newScale","newTranslate","newURL","newValue","newValueSpecifiedUnits","newVersion","newhome","next","nextElementSibling","nextNode","nextPage","nextSibling","nickname","noHref","noResize","noShade","noValidate","noWrap","nodeName","nodeType","nodeValue","normalize","normalizedPathSegList","notationName","notations","note","noteGrainOn","noteOff","noteOn","now","numOctaves","number","numberOfChannels","numberOfInputs","numberOfItems","numberOfOutputs","numberValue","oMatchesSelector","object","object-fit","object-position","objectFit","objectPosition","objectStore","objectStoreNames","observe","of","offscreenBuffering","offset","offsetHeight","offsetLeft","offsetNode","offsetParent","offsetTop","offsetWidth","offsetX","offsetY","ok","oldURL","oldValue","oldVersion","olderShadowRoot","onLine","onabort","onactivate","onactive","onaddstream","onaddtrack","onafterprint","onafterscriptexecute","onafterupdate","onaudioend","onaudioprocess","onaudiostart","onautocomplete","onautocompleteerror","onbeforeactivate","onbeforecopy","onbeforecut","onbeforedeactivate","onbeforeeditfocus","onbeforepaste","onbeforeprint","onbeforescriptexecute","onbeforeunload","onbeforeupdate","onblocked","onblur","onbounce","onboundary","oncached","oncancel","oncandidatewindowhide","oncandidatewindowshow","oncandidatewindowupdate","oncanplay","oncanplaythrough","oncellchange","onchange","onchargingchange","onchargingtimechange","onchecking","onclick","onclose","oncompassneedscalibration","oncomplete","oncontextmenu","oncontrolselect","oncopy","oncuechange","oncut","ondataavailable","ondatachannel","ondatasetchanged","ondatasetcomplete","ondblclick","ondeactivate","ondevicelight","ondevicemotion","ondeviceorientation","ondeviceproximity","ondischargingtimechange","ondisplay","ondownloading","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onencrypted","onend","onended","onenter","onerror","onerrorupdate","onexit","onfilterchange","onfinish","onfocus","onfocusin","onfocusout","onfullscreenchange","onfullscreenerror","ongesturechange","ongestureend","ongesturestart","ongotpointercapture","onhashchange","onhelp","onicecandidate","oniceconnectionstatechange","oninactive","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onlanguagechange","onlayoutcomplete","onlevelchange","onload","onloadeddata","onloadedmetadata","onloadend","onloadstart","onlosecapture","onlostpointercapture","only","onmark","onmessage","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onmove","onmoveend","onmovestart","onmozfullscreenchange","onmozfullscreenerror","onmozorientationchange","onmozpointerlockchange","onmozpointerlockerror","onmscontentzoom","onmsfullscreenchange","onmsfullscreenerror","onmsgesturechange","onmsgesturedoubletap","onmsgestureend","onmsgesturehold","onmsgesturestart","onmsgesturetap","onmsgotpointercapture","onmsinertiastart","onmslostpointercapture","onmsmanipulationstatechanged","onmsneedkey","onmsorientationchange","onmspointercancel","onmspointerdown","onmspointerenter","onmspointerhover","onmspointerleave","onmspointermove","onmspointerout","onmspointerover","onmspointerup","onmssitemodejumplistitemremoved","onmsthumbnailclick","onnegotiationneeded","onnomatch","onnoupdate","onobsolete","onoffline","ononline","onopen","onorientationchange","onpagechange","onpagehide","onpageshow","onpaste","onpause","onplay","onplaying","onpluginstreamstart","onpointercancel","onpointerdown","onpointerenter","onpointerleave","onpointerlockchange","onpointerlockerror","onpointermove","onpointerout","onpointerover","onpointerup","onpopstate","onprogress","onpropertychange","onratechange","onreadystatechange","onremovestream","onremovetrack","onreset","onresize","onresizeend","onresizestart","onresourcetimingbufferfull","onresult","onresume","onrowenter","onrowexit","onrowsdelete","onrowsinserted","onscroll","onsearch","onseeked","onseeking","onselect","onselectionchange","onselectstart","onshow","onsignalingstatechange","onsoundend","onsoundstart","onspeechend","onspeechstart","onstalled","onstart","onstatechange","onstop","onstorage","onstoragecommit","onsubmit","onsuccess","onsuspend","ontextinput","ontimeout","ontimeupdate","ontoggle","ontouchcancel","ontouchend","ontouchmove","ontouchstart","ontransitionend","onunload","onupdateready","onupgradeneeded","onuserproximity","onversionchange","onvoiceschanged","onvolumechange","onwaiting","onwarning","onwebkitanimationend","onwebkitanimationiteration","onwebkitanimationstart","onwebkitcurrentplaybacktargetiswirelesschanged","onwebkitfullscreenchange","onwebkitfullscreenerror","onwebkitkeyadded","onwebkitkeyerror","onwebkitkeymessage","onwebkitneedkey","onwebkitorientationchange","onwebkitplaybacktargetavailabilitychanged","onwebkitpointerlockchange","onwebkitpointerlockerror","onwebkitresourcetimingbufferfull","onwebkittransitionend","onwheel","onzoom","opacity","open","openCursor","openDatabase","openKeyCursor","opener","opera","operationType","operator","opr","optimum","options","order","orderX","orderY","ordered","org","orient","orientAngle","orientType","orientation","origin","originalTarget","orphans","oscpu","outerHTML","outerHeight","outerText","outerWidth","outline","outline-color","outline-offset","outline-style","outline-width","outlineColor","outlineOffset","outlineStyle","outlineWidth","outputBuffer","overflow","overflow-x","overflow-y","overflowX","overflowY","overrideMimeType","oversample","ownerDocument","ownerElement","ownerNode","ownerRule","ownerSVGElement","owningElement","p1","p2","p3","p4","pad","padding","padding-bottom","padding-left","padding-right","padding-top","paddingBottom","paddingLeft","paddingRight","paddingTop","page","page-break-after","page-break-before","page-break-inside","pageBreakAfter","pageBreakBefore","pageBreakInside","pageCount","pageX","pageXOffset","pageY","pageYOffset","pages","paint-order","paintOrder","paintRequests","paintType","palette","panningModel","parent","parentElement","parentNode","parentRule","parentStyleSheet","parentTextEdit","parentWindow","parse","parseFloat","parseFromString","parseInt","participants","password","pasteHTML","path","pathLength","pathSegList","pathSegType","pathSegTypeAsLetter","pathname","pattern","patternContentUnits","patternMismatch","patternTransform","patternUnits","pause","pauseAnimations","pauseOnExit","paused","pending","performance","permission","persisted","personalbar","perspective","perspective-origin","perspectiveOrigin","phoneticFamilyName","phoneticGivenName","photo","ping","pitch","pixelBottom","pixelDepth","pixelHeight","pixelLeft","pixelRight","pixelStorei","pixelTop","pixelUnitToMillimeterX","pixelUnitToMillimeterY","pixelWidth","placeholder","platform","play","playbackRate","playbackState","playbackTime","played","plugins","pluginspage","pname","pointer-events","pointerBeforeReferenceNode","pointerEnabled","pointerEvents","pointerId","pointerLockElement","pointerType","points","pointsAtX","pointsAtY","pointsAtZ","polygonOffset","pop","popupWindowFeatures","popupWindowName","popupWindowURI","port","port1","port2","ports","posBottom","posHeight","posLeft","posRight","posTop","posWidth","position","positionAlign","postError","postMessage","poster","pow","powerOff","preMultiplySelf","precision","preferredStyleSheetSet","preferredStylesheetSet","prefix","preload","preserveAlpha","preserveAspectRatio","preserveAspectRatioString","pressed","pressure","prevValue","preventDefault","preventExtensions","previousElementSibling","previousNode","previousPage","previousScale","previousSibling","previousTranslate","primaryKey","primitiveType","primitiveUnits","principals","print","privateKey","probablySupportsContext","process","processIceMessage","product","productSub","profile","profileEnd","profiles","prompt","properties","propertyIsEnumerable","propertyName","protocol","protocolLong","prototype","pseudoClass","pseudoElement","publicId","publicKey","published","push","pushNotification","pushState","put","putImageData","quadraticCurveTo","qualifier","queryCommandEnabled","queryCommandIndeterm","queryCommandState","queryCommandSupported","queryCommandText","queryCommandValue","querySelector","querySelectorAll","quote","quotes","r","r1","r2","race","radiogroup","radiusX","radiusY","random","range","rangeCount","rangeMax","rangeMin","rangeOffset","rangeOverflow","rangeParent","rangeUnderflow","rate","ratio","raw","read","readAsArrayBuffer","readAsBinaryString","readAsBlob","readAsDataURL","readAsText","readOnly","readPixels","readReportRequested","readyState","reason","reboot","receiver","receivers","recordNumber","recordset","rect","red","redirectCount","redirectEnd","redirectStart","reduce","reduceRight","reduction","refDistance","refX","refY","referenceNode","referrer","refresh","region","regionAnchorX","regionAnchorY","regionId","regions","register","registerContentHandler","registerElement","registerProtocolHandler","reject","rel","relList","relatedNode","relatedTarget","release","releaseCapture","releaseEvents","releasePointerCapture","releaseShaderCompiler","reliable","reload","remainingSpace","remoteDescription","remove","removeAllRanges","removeAttribute","removeAttributeNS","removeAttributeNode","removeBehavior","removeChild","removeCue","removeEventListener","removeFilter","removeImport","removeItem","removeListener","removeNamedItem","removeNamedItemNS","removeNode","removeParameter","removeProperty","removeRange","removeRegion","removeRule","removeSiteSpecificTrackingException","removeSourceBuffer","removeStream","removeTrack","removeVariable","removeWakeLockListener","removeWebWideTrackingException","removedNodes","renderbufferStorage","renderedBuffer","renderingMode","repeat","replace","replaceAdjacentText","replaceChild","replaceData","replaceId","replaceItem","replaceNode","replaceState","replaceTrack","replaceWholeText","reportValidity","requestAnimationFrame","requestAutocomplete","requestData","requestFullscreen","requestMediaKeySystemAccess","requestPermission","requestPointerLock","requestStart","requestingWindow","required","requiredExtensions","requiredFeatures","reset","resetTransform","resize","resizeBy","resizeTo","resolve","response","responseBody","responseEnd","responseStart","responseText","responseType","responseURL","responseXML","restore","result","resultType","resume","returnValue","rev","reverse","reversed","revocable","revokeObjectURL","rgbColor","right","rightContext","rightMargin","rolloffFactor","root","rootElement","rotate","rotateAxisAngle","rotateAxisAngleSelf","rotateFromVector","rotateFromVectorSelf","rotateSelf","rotation","rotationRate","round","rowIndex","rowSpan","rows","rubyAlign","rubyOverhang","rubyPosition","rules","runtime","runtimeStyle","rx","ry","safari","sampleCoverage","sampleRate","sandbox","save","scale","scale3d","scale3dSelf","scaleNonUniform","scaleNonUniformSelf","scaleSelf","scheme","scissor","scope","scopeName","scoped","screen","screenBrightness","screenEnabled","screenLeft","screenPixelToMillimeterX","screenPixelToMillimeterY","screenTop","screenX","screenY","scripts","scroll","scroll-behavior","scrollAmount","scrollBehavior","scrollBy","scrollByLines","scrollByPages","scrollDelay","scrollHeight","scrollIntoView","scrollIntoViewIfNeeded","scrollLeft","scrollLeftMax","scrollMaxX","scrollMaxY","scrollTo","scrollTop","scrollTopMax","scrollWidth","scrollX","scrollY","scrollbar3dLightColor","scrollbarArrowColor","scrollbarBaseColor","scrollbarDarkShadowColor","scrollbarFaceColor","scrollbarHighlightColor","scrollbarShadowColor","scrollbarTrackColor","scrollbars","scrolling","sdp","sdpMLineIndex","sdpMid","seal","search","searchBox","searchBoxJavaBridge_","searchParams","sectionRowIndex","secureConnectionStart","security","seed","seekable","seeking","select","selectAllChildren","selectNode","selectNodeContents","selectNodes","selectSingleNode","selectSubString","selected","selectedIndex","selectedOptions","selectedStyleSheetSet","selectedStylesheetSet","selection","selectionDirection","selectionEnd","selectionStart","selector","selectorText","self","send","sendAsBinary","sendBeacon","sender","sentTimestamp","separator","serializeToString","serviceWorker","sessionId","sessionStorage","set","setActive","setAlpha","setAttribute","setAttributeNS","setAttributeNode","setAttributeNodeNS","setBaseAndExtent","setBingCurrentSearchDefault","setCapture","setColor","setCompositeOperation","setCurrentTime","setCustomValidity","setData","setDate","setDragImage","setEnd","setEndAfter","setEndBefore","setEndPoint","setFillColor","setFilterRes","setFloat32","setFloat64","setFloatValue","setFullYear","setHours","setImmediate","setInt16","setInt32","setInt8","setInterval","setItem","setLineCap","setLineDash","setLineJoin","setLineWidth","setLocalDescription","setMatrix","setMatrixValue","setMediaKeys","setMilliseconds","setMinutes","setMiterLimit","setMonth","setNamedItem","setNamedItemNS","setNonUserCodeExceptions","setOrientToAngle","setOrientToAuto","setOrientation","setOverrideHistoryNavigationMode","setPaint","setParameter","setPeriodicWave","setPointerCapture","setPosition","setPreference","setProperty","setPrototypeOf","setRGBColor","setRGBColorICCColor","setRadius","setRangeText","setRemoteDescription","setRequestHeader","setResizable","setResourceTimingBufferSize","setRotate","setScale","setSeconds","setSelectionRange","setServerCertificate","setShadow","setSkewX","setSkewY","setStart","setStartAfter","setStartBefore","setStdDeviation","setStringValue","setStrokeColor","setSuggestResult","setTargetAtTime","setTargetValueAtTime","setTime","setTimeout","setTransform","setTranslate","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setUint16","setUint32","setUint8","setUri","setValueAtTime","setValueCurveAtTime","setVariable","setVelocity","setVersion","setYear","settingName","settingValue","sex","shaderSource","shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY","shadowRoot","shape","shape-rendering","shapeRendering","sheet","shift","shiftKey","shiftLeft","show","showHelp","showModal","showModalDialog","showModelessDialog","showNotification","sidebar","sign","signalingState","sin","singleNodeValue","sinh","size","sizeToContent","sizes","skewX","skewXSelf","skewY","skewYSelf","slice","slope","small","smil","smoothingTimeConstant","snapToLines","snapshotItem","snapshotLength","some","sort","source","sourceBuffer","sourceBuffers","sourceIndex","spacing","span","speakAs","speaking","specified","specularConstant","specularExponent","speechSynthesis","speed","speedOfSound","spellcheck","splice","split","splitText","spreadMethod","sqrt","src","srcElement","srcFilter","srcUrn","srcdoc","srclang","srcset","stack","stackTraceLimit","stacktrace","standalone","standby","start","startContainer","startIce","startOffset","startRendering","startTime","startsWith","state","status","statusMessage","statusText","statusbar","stdDeviationX","stdDeviationY","stencilFunc","stencilFuncSeparate","stencilMask","stencilMaskSeparate","stencilOp","stencilOpSeparate","step","stepDown","stepMismatch","stepUp","sticky","stitchTiles","stop","stop-color","stop-opacity","stopColor","stopImmediatePropagation","stopOpacity","stopPropagation","storageArea","storageName","storageStatus","storeSiteSpecificTrackingException","storeWebWideTrackingException","stpVersion","stream","strike","stringValue","stringify","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeRect","strokeStyle","strokeText","strokeWidth","style","styleFloat","styleMedia","styleSheet","styleSheetSets","styleSheets","sub","subarray","subject","submit","subscribe","substr","substring","substringData","subtle","suffix","suffixes","summary","sup","supports","surfaceScale","surroundContents","suspend","suspendRedraw","swapCache","swapNode","sweepFlag","symbols","system","systemCode","systemId","systemLanguage","systemXDPI","systemYDPI","tBodies","tFoot","tHead","tabIndex","table","table-layout","tableLayout","tableValues","tag","tagName","tagUrn","tags","taintEnabled","takeRecords","tan","tanh","target","targetElement","targetTouches","targetX","targetY","tel","terminate","test","texImage2D","texParameterf","texParameteri","texSubImage2D","text","text-align","text-anchor","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","textAlign","textAlignLast","textAnchor","textAutospace","textBaseline","textContent","textDecoration","textDecorationBlink","textDecorationColor","textDecorationLine","textDecorationLineThrough","textDecorationNone","textDecorationOverline","textDecorationStyle","textDecorationUnderline","textIndent","textJustify","textJustifyTrim","textKashida","textKashidaSpace","textLength","textOverflow","textRendering","textShadow","textTracks","textTransform","textUnderlinePosition","then","threadId","threshold","tiltX","tiltY","time","timeEnd","timeStamp","timeout","timestamp","timestampOffset","timing","title","toArray","toBlob","toDataURL","toDateString","toElement","toExponential","toFixed","toFloat32Array","toFloat64Array","toGMTString","toISOString","toJSON","toLocaleDateString","toLocaleFormat","toLocaleLowerCase","toLocaleString","toLocaleTimeString","toLocaleUpperCase","toLowerCase","toMethod","toPrecision","toSdp","toSource","toStaticHTML","toString","toStringTag","toTimeString","toUTCString","toUpperCase","toggle","toggleLongPressEnabled","tooLong","toolbar","top","topMargin","total","totalFrameDelay","totalVideoFrames","touchAction","touches","trace","track","transaction","transactions","transform","transform-origin","transform-style","transformOrigin","transformPoint","transformString","transformStyle","transformToDocument","transformToFragment","transition","transition-delay","transition-duration","transition-property","transition-timing-function","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction","translate","translateSelf","translationX","translationY","trim","trimLeft","trimRight","trueSpeed","trunc","truncate","type","typeDetail","typeMismatch","typeMustMatch","types","ubound","undefined","unescape","uneval","unicode-bidi","unicodeBidi","uniform1f","uniform1fv","uniform1i","uniform1iv","uniform2f","uniform2fv","uniform2i","uniform2iv","uniform3f","uniform3fv","uniform3i","uniform3iv","uniform4f","uniform4fv","uniform4i","uniform4iv","uniformMatrix2fv","uniformMatrix3fv","uniformMatrix4fv","unique","uniqueID","uniqueNumber","unitType","units","unloadEventEnd","unloadEventStart","unlock","unmount","unobserve","unpause","unpauseAnimations","unreadCount","unregister","unregisterContentHandler","unregisterProtocolHandler","unscopables","unselectable","unshift","unsubscribe","unsuspendRedraw","unsuspendRedrawAll","unwatch","unwrapKey","update","updateCommands","updateIce","updateInterval","updateSettings","updated","updating","upload","upper","upperBound","upperOpen","uri","url","urn","urns","usages","useCurrentView","useMap","useProgram","usedSpace","userAgent","userLanguage","username","v8BreakIterator","vAlign","vLink","valid","validateProgram","validationMessage","validity","value","valueAsDate","valueAsNumber","valueAsString","valueInSpecifiedUnits","valueMissing","valueOf","valueText","valueType","values","vector-effect","vectorEffect","velocityAngular","velocityExpansion","velocityX","velocityY","vendor","vendorSub","verify","version","vertexAttrib1f","vertexAttrib1fv","vertexAttrib2f","vertexAttrib2fv","vertexAttrib3f","vertexAttrib3fv","vertexAttrib4f","vertexAttrib4fv","vertexAttribDivisorANGLE","vertexAttribPointer","vertical","vertical-align","verticalAlign","verticalOverflow","vibrate","videoHeight","videoTracks","videoWidth","view","viewBox","viewBoxString","viewTarget","viewTargetString","viewport","viewportAnchorX","viewportAnchorY","viewportElement","visibility","visibilityState","visible","vlinkColor","voice","volume","vrml","vspace","w","wand","warn","wasClean","watch","watchPosition","webdriver","webkitAddKey","webkitAnimation","webkitAnimationDelay","webkitAnimationDirection","webkitAnimationDuration","webkitAnimationFillMode","webkitAnimationIterationCount","webkitAnimationName","webkitAnimationPlayState","webkitAnimationTimingFunction","webkitAppearance","webkitAudioContext","webkitAudioDecodedByteCount","webkitAudioPannerNode","webkitBackfaceVisibility","webkitBackground","webkitBackgroundAttachment","webkitBackgroundClip","webkitBackgroundColor","webkitBackgroundImage","webkitBackgroundOrigin","webkitBackgroundPosition","webkitBackgroundPositionX","webkitBackgroundPositionY","webkitBackgroundRepeat","webkitBackgroundSize","webkitBackingStorePixelRatio","webkitBorderImage","webkitBorderImageOutset","webkitBorderImageRepeat","webkitBorderImageSlice","webkitBorderImageSource","webkitBorderImageWidth","webkitBoxAlign","webkitBoxDirection","webkitBoxFlex","webkitBoxOrdinalGroup","webkitBoxOrient","webkitBoxPack","webkitBoxSizing","webkitCancelAnimationFrame","webkitCancelFullScreen","webkitCancelKeyRequest","webkitCancelRequestAnimationFrame","webkitClearResourceTimings","webkitClosedCaptionsVisible","webkitConvertPointFromNodeToPage","webkitConvertPointFromPageToNode","webkitCreateShadowRoot","webkitCurrentFullScreenElement","webkitCurrentPlaybackTargetIsWireless","webkitDirectionInvertedFromDevice","webkitDisplayingFullscreen","webkitEnterFullScreen","webkitEnterFullscreen","webkitExitFullScreen","webkitExitFullscreen","webkitExitPointerLock","webkitFullScreenKeyboardInputAllowed","webkitFullscreenElement","webkitFullscreenEnabled","webkitGenerateKeyRequest","webkitGetAsEntry","webkitGetDatabaseNames","webkitGetEntries","webkitGetEntriesByName","webkitGetEntriesByType","webkitGetFlowByName","webkitGetGamepads","webkitGetImageDataHD","webkitGetNamedFlows","webkitGetRegionFlowRanges","webkitGetUserMedia","webkitHasClosedCaptions","webkitHidden","webkitIDBCursor","webkitIDBDatabase","webkitIDBDatabaseError","webkitIDBDatabaseException","webkitIDBFactory","webkitIDBIndex","webkitIDBKeyRange","webkitIDBObjectStore","webkitIDBRequest","webkitIDBTransaction","webkitImageSmoothingEnabled","webkitIndexedDB","webkitInitMessageEvent","webkitIsFullScreen","webkitKeys","webkitLineDashOffset","webkitLockOrientation","webkitMatchesSelector","webkitMediaStream","webkitNotifications","webkitOfflineAudioContext","webkitOrientation","webkitPeerConnection00","webkitPersistentStorage","webkitPointerLockElement","webkitPostMessage","webkitPreservesPitch","webkitPutImageDataHD","webkitRTCPeerConnection","webkitRegionOverset","webkitRequestAnimationFrame","webkitRequestFileSystem","webkitRequestFullScreen","webkitRequestFullscreen","webkitRequestPointerLock","webkitResolveLocalFileSystemURL","webkitSetMediaKeys","webkitSetResourceTimingBufferSize","webkitShadowRoot","webkitShowPlaybackTargetPicker","webkitSlice","webkitSpeechGrammar","webkitSpeechGrammarList","webkitSpeechRecognition","webkitSpeechRecognitionError","webkitSpeechRecognitionEvent","webkitStorageInfo","webkitSupportsFullscreen","webkitTemporaryStorage","webkitTextSizeAdjust","webkitTransform","webkitTransformOrigin","webkitTransition","webkitTransitionDelay","webkitTransitionDuration","webkitTransitionProperty","webkitTransitionTimingFunction","webkitURL","webkitUnlockOrientation","webkitUserSelect","webkitVideoDecodedByteCount","webkitVisibilityState","webkitWirelessVideoPlaybackDisabled","webkitdropzone","webstore","weight","whatToShow","wheelDelta","wheelDeltaX","wheelDeltaY","which","white-space","whiteSpace","wholeText","widows","width","will-change","willChange","willValidate","window","withCredentials","word-break","word-spacing","word-wrap","wordBreak","wordSpacing","wordWrap","wrap","wrapKey","write","writeln","writingMode","x","x1","x2","xChannelSelector","xmlEncoding","xmlStandalone","xmlVersion","xmlbase","xmllang","xmlspace","y","y1","y2","yChannelSelector","yandex","z","z-index","zIndex","zoom","zoomAndPan","zoomRectScreen"];function wn(e,t){function n(e){m(t,e)}e.walk(new gn(function(e){e instanceof Ot&&e.quote?n(e.key):e instanceof Ct&&e.quote?n(e.key.name):e instanceof Et&&xn(e.property,n)}))}function xn(e,t){e.walk(new gn(function(e){return e instanceof _t?xn(e.tail_node(),t):e instanceof on?t(e.value):e instanceof At&&(xn(e.consequent,t),xn(e.alternative,t)),!0}))}function kn(e,t){var n=(t=s(t,{builtins:!1,cache:null,debug:!1,keep_quoted:!1,only_cache:!1,regex:null,reserved:null},!0)).reserved;Array.isArray(n)||(n=[n]),t.builtins||function(e){e.push.apply(e,Nn);var t={},n="object"==typeof global?global:self;function i(t){m(e,t)}["Symbol","Map","Promise","Proxy","Reflect","Set","WeakMap","WeakSet"].forEach(function(e){t[e]=n[e]||new Function}),["null","true","false","Infinity","-Infinity","undefined"].forEach(i),[Object,Array,Function,Number,String,Boolean,Error,Math,Date,RegExp,t.Symbol,ArrayBuffer,DataView,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,eval,EvalError,Float32Array,Float64Array,Int8Array,Int16Array,Int32Array,isFinite,isNaN,JSON,t.Map,parseFloat,parseInt,t.Promise,t.Proxy,RangeError,ReferenceError,t.Reflect,t.Set,SyntaxError,TypeError,Uint8Array,Uint8ClampedArray,Uint16Array,Uint32Array,URIError,t.WeakMap,t.WeakSet].forEach(function(e){Object.getOwnPropertyNames(e).map(i),e.prototype&&Object.getOwnPropertyNames(e.prototype).map(i)})}(n);var i,r=-1;t.cache?(i=t.cache.props).each(function(e){m(n,e)}):i=new A;var o,a=t.regex,u=!1!==t.debug;u&&(o=!0===t.debug?"":t.debug);var c=[],l=[];return e.walk(new gn(function(e){if(e instanceof Ot)"string"==typeof e.key&&_(e.key);else if(e instanceof Ct)_(e.key.name);else if(e instanceof mt){for(var t=e;t.expression;)t=t.expression;t.thedef&&t.thedef.undeclared||_(e.property)}else e instanceof Et?xn(e.property,_):e instanceof ft&&"Object.defineProperty"==e.expression.print_to_string()&&xn(e.args[1],_)})),e.transform(new Sn(function(e){e instanceof Ot?"string"==typeof e.key&&(e.key=d(e.key)):e instanceof Ct?e.key.name=d(e.key.name):e instanceof mt?e.property=d(e.property):!t.keep_quoted&&e instanceof Et?e.property=E(e.property):e instanceof ft&&"Object.defineProperty"==e.expression.print_to_string()&&(e.args[1]=E(e.args[1]))}));function f(e){return!(l.indexOf(e)>=0)&&(!(n.indexOf(e)>=0)&&(t.only_cache?i.has(e):!/^-?[0-9]+(\.[0-9]+)?(e[+-][0-9]+)?$/.test(e)))}function p(e){return!(a&&!a.test(e))&&(!(n.indexOf(e)>=0)&&(i.has(e)||c.indexOf(e)>=0))}function _(e){f(e)&&m(c,e),p(e)||m(l,e)}function d(e){if(!p(e))return e;var t=i.get(e);if(!t){if(u){var n="_$"+e+"$"+o+"_";f(n)&&(t=n)}if(!t)do{t=Rn(++r)}while(!f(t));i.set(e,t)}return t}function E(e){return e.transform(new Sn(function(e){if(e instanceof _t){var t=e.expressions.length-1;e.expressions[t]=E(e.expressions[t])}else e instanceof on?e.value=d(e.value):e instanceof At&&(e.consequent=E(e.consequent),e.alternative=E(e.alternative));return e}))}}var In="undefined"==typeof atob?function(e){return Buffer.from(e,"base64").toString()}:atob,Ln="undefined"==typeof btoa?function(e){return Buffer.from(e).toString("base64")}:btoa;function Vn(e,t,n){t[e]&&n.forEach(function(n){t[n]&&("object"!=typeof t[n]&&(t[n]={}),e in t[n]||(t[n][e]=t[e]))})}function Pn(e){e&&("props"in e?e.props instanceof A||(e.props=A.fromObject(e.props)):e.props=new A)}function Bn(e){return{props:e.props.toObject()}}!function(){var e=function(e){for(var t=!0,n=0;n<e.length;n++)t&&e[n]instanceof fe&&e[n].body instanceof on?e[n]=new _e({start:e[n].start,end:e[n].end,value:e[n].body.value}):!t||e[n]instanceof fe&&e[n].body instanceof on||(t=!1);return e},t={Program:function(t){return new Ne({start:i(t),end:r(t),body:e(t.body.map(s))})},ArrayPattern:function(e){return new Pe({start:i(e),end:r(e),names:e.elements.map(function(e){return null===e?new pn:s(e)}),is_array:!0})},ObjectPattern:function(e){return new Pe({start:i(e),end:r(e),names:e.properties.map(s),is_array:!1})},AssignmentPattern:function(e){return new St({start:i(e),end:r(e),left:s(e.left),operator:"=",right:s(e.right)})},SpreadElement:function(e){return new we({start:i(e),end:r(e),expression:s(e.argument)})},RestElement:function(e){return new we({start:i(e),end:r(e),expression:s(e.argument)})},TemplateElement:function(e){return new Ue({start:i(e),end:r(e),value:e.value.cooked,raw:e.value.raw})},TemplateLiteral:function(e){for(var t=[],n=0;n<e.quasis.length;n++)t.push(s(e.quasis[n])),e.expressions[n]&&t.push(s(e.expressions[n]));return new Ke({start:i(e),end:r(e),segments:t})},TaggedTemplateExpression:function(e){return new Be({start:i(e),end:r(e),template_string:s(e.quasi),prefix:s(e.tag)})},FunctionDeclaration:function(t){return new Ve({start:i(t),end:r(t),name:s(t.id),argnames:t.params.map(s),is_generator:t.generator,async:t.async,body:e(s(t.body).body)})},FunctionExpression:function(t){return new Ie({start:i(t),end:r(t),name:s(t.id),argnames:t.params.map(s),is_generator:t.generator,async:t.async,body:e(s(t.body).body)})},ArrowFunctionExpression:function(e){return new Le({start:i(e),end:r(e),argnames:e.params.map(s),body:s(e.body),async:e.async})},ExpressionStatement:function(e){return new de({start:i(e),end:r(e),body:s(e.expression)})},TryStatement:function(e){var t=e.handlers||[e.handler];if(t.length>1||e.guardedHandlers&&e.guardedHandlers.length)throw new Error("Multiple catch clauses are not supported.");return new et({start:i(e),end:r(e),body:s(e.block).body,bcatch:s(t[0]),bfinally:e.finalizer?new nt(s(e.finalizer)):null})},Property:function(e){var t=e.key,n={start:i(t||e.value),end:r(e.value),key:"Identifier"==t.type?t.name:t.value,value:s(e.value)};return e.computed&&(n.key=s(e.key)),e.method?(n.is_generator=e.value.generator,n.async=e.value.async,e.computed?n.key=s(e.key):n.key=new Ht({name:n.key}),new Mt(n)):"init"==e.kind?("Identifier"!=t.type&&"Literal"!=t.type&&(n.key=s(t)),new Ot(n)):("string"!=typeof n.key&&"number"!=typeof n.key||(n.key=new Ht({name:n.key})),n.value=new ke(n.value),"get"==e.kind?new Rt(n):"set"==e.kind?new Ft(n):"method"==e.kind?(n.async=e.value.async,n.is_generator=e.value.generator,n.quote=e.computed?'"':null,new Mt(n)):void 0)},MethodDefinition:function(e){var t={start:i(e),end:r(e),key:e.computed?s(e.key):new Ht({name:e.key.name||e.key.value}),value:s(e.value),static:e.static};return"get"==e.kind?new Rt(t):"set"==e.kind?new Ft(t):(t.is_generator=e.value.generator,t.async=e.value.async,new Mt(t))},ArrayExpression:function(e){return new bt({start:i(e),end:r(e),elements:e.elements.map(function(e){return null===e?new pn:s(e)})})},ObjectExpression:function(e){return new yt({start:i(e),end:r(e),properties:e.properties.map(function(e){return"SpreadElement"===e.type?s(e):(e.type="Property",s(e))})})},SequenceExpression:function(e){return new _t({start:i(e),end:r(e),expressions:e.expressions.map(s)})},MemberExpression:function(e){return new(e.computed?Et:mt)({start:i(e),end:r(e),property:e.computed?s(e.property):e.property.name,expression:s(e.object)})},SwitchCase:function(e){return new(e.test?Je:Qe)({start:i(e),end:r(e),expression:s(e.test),body:e.consequent.map(s)})},VariableDeclaration:function(e){return new("const"===e.kind?at:"let"===e.kind?ot:rt)({start:i(e),end:r(e),definitions:e.declarations.map(s)})},ImportDeclaration:function(e){var t=null,n=null;return e.specifiers.forEach(function(e){"ImportSpecifier"===e.type?(n||(n=[]),n.push(new st({start:i(e),end:r(e),foreign_name:s(e.imported),name:s(e.local)}))):"ImportDefaultSpecifier"===e.type?t=s(e.local):"ImportNamespaceSpecifier"===e.type&&(n||(n=[]),n.push(new st({start:i(e),end:r(e),foreign_name:new $t({name:"*"}),name:s(e.local)})))}),new ut({start:i(e),end:r(e),imported_name:t,imported_names:n,module_name:s(e.source)})},ExportAllDeclaration:function(e){return new ct({start:i(e),end:r(e),exported_names:[new st({name:new Jt({name:"*"}),foreign_name:new Jt({name:"*"})})],module_name:s(e.source)})},ExportNamedDeclaration:function(e){return new ct({start:i(e),end:r(e),exported_definition:s(e.declaration),exported_names:e.specifiers&&e.specifiers.length?e.specifiers.map(function(e){return new st({foreign_name:s(e.exported),name:s(e.local)})}):null,module_name:s(e.source)})},ExportDefaultDeclaration:function(e){return new ct({start:i(e),end:r(e),exported_value:s(e.declaration),is_default:!0})},Literal:function(e){var t=e.value,n={start:i(e),end:r(e)};if(null===t)return new cn(n);var o=e.regex;if(o&&o.pattern){n.value=new RegExp(o.pattern,o.flags);var a=n.value.toString();return n.value.raw_source=o.flags?a.substring(0,a.length-o.flags.length)+o.flags:a,new sn(n)}if(o)return n.value=e.regex&&e.raw?e.raw:t,new sn(n);switch(typeof t){case"string":return n.value=t,new on(n);case"number":return n.value=t,new an(n);case"boolean":return new(t?En:mn)(n)}},MetaProperty:function(e){if("new"===e.meta.name&&"target"===e.property.name)return new It({start:i(e),end:r(e)})},Identifier:function(e){var t=a[a.length-2];return new("LabeledStatement"==t.type?jt:"VariableDeclarator"==t.type&&t.id===e?"const"==t.kind?Bt:"let"==t.kind?Kt:Vt:/Import.*Specifier/.test(t.type)?t.local===e?qt:$t:"ExportSpecifier"==t.type?t.local===e?Qt:Jt:"FunctionExpression"==t.type?t.id===e?Xt:Ut:"FunctionDeclaration"==t.type?t.id===e?Gt:Ut:"ArrowFunctionExpression"==t.type?-1!==t.params.indexOf(e)?Ut:Zt:"ClassExpression"==t.type?t.id===e?Wt:Zt:"Property"==t.type?t.key===e&&t.computed||t.value===e?Zt:Ht:"ClassDeclaration"==t.type?t.id===e?zt:Zt:"MethodDefinition"==t.type?t.computed?Zt:Ht:"CatchClause"==t.type?Yt:"BreakStatement"==t.type||"ContinueStatement"==t.type?en:Zt)({start:i(e),end:r(e),name:e.name})}};function n(e){if("Literal"==e.type)return null!=e.raw?e.raw:e.value+""}function i(e){var t=e.loc,i=t&&t.start,r=e.range;return new ce({file:t&&t.source,line:i&&i.line,col:i&&i.column,pos:r?r[0]:e.start,endline:i&&i.line,endcol:i&&i.column,endpos:r?r[0]:e.start,raw:n(e)})}function r(e){var t=e.loc,i=t&&t.end,r=e.range;return new ce({file:t&&t.source,line:i&&i.line,col:i&&i.column,pos:r?r[1]:e.end,endline:i&&i.line,endcol:i&&i.column,endpos:r?r[1]:e.end,raw:n(e)})}function o(e,n,o){var a="function From_Moz_"+e+"(M){\n";a+="return new U2."+n.name+"({\nstart: my_start_token(M),\nend: my_end_token(M)";var c="function To_Moz_"+e+"(M){\n";c+="return {\ntype: "+JSON.stringify(e),o&&o.split(/\s*,\s*/).forEach(function(e){var t=/([a-z0-9$_]+)([=@>%])([a-z0-9$_]+)/i.exec(e);if(!t)throw new Error("Can't understand property map: "+e);var n=t[1],i=t[2],r=t[3];switch(a+=",\n"+r+": ",c+=",\n"+n+": ",i){case"@":a+="M."+n+".map(from_moz)",c+="M."+r+".map(to_moz)";break;case">":a+="from_moz(M."+n+")",c+="to_moz(M."+r+")";break;case"=":a+="M."+n,c+="M."+r;break;case"%":a+="from_moz(M."+n+").body",c+="to_moz_block(M)";break;default:throw new Error("Can't understand operator in propmap: "+e)}}),a+="\n})\n}",c+="\n}\n}",a=new Function("U2","my_start_token","my_end_token","from_moz","return("+a+")")(An,i,r,s),c=new Function("to_moz","to_moz_block","to_moz_scope","return("+c+")")(l,p,_),t[e]=a,u(n,c)}t.UpdateExpression=t.UnaryExpression=function(e){return new(("prefix"in e?e.prefix:"UnaryExpression"==e.type)?Dt:gt)({start:i(e),end:r(e),operator:e.operator,expression:s(e.argument)})},t.ClassDeclaration=t.ClassExpression=function(e){return new("ClassDeclaration"===e.type?wt:xt)({start:i(e),end:r(e),name:s(e.id),extends:s(e.superClass),properties:e.body.body.map(s)})},o("EmptyStatement",ge),o("BlockStatement",De,"body@body"),o("IfStatement",$e,"test>condition, consequent>body, alternate>alternative"),o("LabeledStatement",Ae,"label>label, body>body"),o("BreakStatement",Ye,"label>label"),o("ContinueStatement",qe,"label>label"),o("WithStatement",Re,"object>expression, body>body"),o("SwitchStatement",je,"discriminant>expression, cases@body"),o("ReturnStatement",Xe,"argument>value"),o("ThrowStatement",ze,"argument>value"),o("WhileStatement",ye,"test>condition, body>body"),o("DoWhileStatement",be,"test>condition, body>body"),o("ForStatement",Ce,"init>init, test>condition, update>step, body>body"),o("ForInStatement",Oe,"left>init, right>object, body>body"),o("ForOfStatement",Fe,"left>init, right>object, body>body, await=await"),o("AwaitExpression",hn,"argument>expression"),o("YieldExpression",Dn,"argument>expression, delegate=is_star"),o("DebuggerStatement",pe),o("VariableDeclarator",lt,"id>name, init>value"),o("CatchClause",tt,"param>argname, body%body"),o("ThisExpression",tn),o("Super",nn),o("BinaryExpression",St,"operator=operator, left>left, right>right"),o("LogicalExpression",St,"operator=operator, left>left, right>right"),o("AssignmentExpression",vt,"operator=operator, left>left, right>right"),o("ConditionalExpression",At,"test>condition, consequent>consequent, alternate>alternative"),o("NewExpression",pt,"callee>expression, arguments@args"),o("CallExpression",ft,"callee>expression, arguments@args"),u(Ne,function(e){return _("Program",e)}),u(we,function(e,t){return{type:f()?"RestElement":"SpreadElement",argument:l(e.expression)}}),u(Be,function(e){return{type:"TaggedTemplateExpression",tag:l(e.prefix),quasi:l(e.template_string)}}),u(Ke,function(e){for(var t=[],n=[],i=0;i<e.segments.length;i++)i%2!=0?n.push(l(e.segments[i])):t.push({type:"TemplateElement",value:{raw:e.segments[i].raw,cooked:e.segments[i].value},tail:i===e.segments.length-1});return{type:"TemplateLiteral",quasis:t,expressions:n}}),u(Ve,function(e){return{type:"FunctionDeclaration",id:l(e.name),params:e.argnames.map(l),generator:e.is_generator,async:e.async,body:_("BlockStatement",e)}}),u(Ie,function(e,t){var n=void 0!==t.is_generator?t.is_generator:e.is_generator;return{type:"FunctionExpression",id:l(e.name),params:e.argnames.map(l),generator:n,async:e.async,body:_("BlockStatement",e)}}),u(Le,function(e){var t=e.body instanceof Array?{type:"BlockStatement",body:e.body.map(l)}:l(e.body);return{type:"ArrowFunctionExpression",params:e.argnames.map(l),async:e.async,body:t}}),u(Pe,function(e){return e.is_array?{type:"ArrayPattern",elements:e.names.map(l)}:{type:"ObjectPattern",properties:e.names.map(l)}}),u(_e,function(e){return{type:"ExpressionStatement",expression:{type:"Literal",value:e.value}}}),u(de,function(e){return{type:"ExpressionStatement",expression:l(e.body)}}),u(Ze,function(e){return{type:"SwitchCase",test:l(e.expression),consequent:e.body.map(l)}}),u(et,function(e){return{type:"TryStatement",block:p(e),handler:l(e.bcatch),guardedHandlers:[],finalizer:l(e.bfinally)}}),u(tt,function(e){return{type:"CatchClause",param:l(e.argname),guard:null,body:p(e)}}),u(it,function(e){return{type:"VariableDeclaration",kind:e instanceof at?"const":e instanceof ot?"let":"var",declarations:e.definitions.map(l)}}),u(ct,function(e){return e.exported_names?"*"===e.exported_names[0].name.name?{type:"ExportAllDeclaration",source:l(e.module_name)}:{type:"ExportNamedDeclaration",specifiers:e.exported_names.map(function(e){return{type:"ExportSpecifier",exported:l(e.foreign_name),local:l(e.name)}}),declaration:l(e.exported_definition),source:l(e.module_name)}:{type:e.is_default?"ExportDefaultDeclaration":"ExportNamedDeclaration",declaration:l(e.exported_value||e.exported_definition)}}),u(ut,function(e){var t=[];return e.imported_name&&t.push({type:"ImportDefaultSpecifier",local:l(e.imported_name)}),e.imported_names&&"*"===e.imported_names[0].foreign_name.name?t.push({type:"ImportNamespaceSpecifier",local:l(e.imported_names[0].name)}):e.imported_names&&e.imported_names.forEach(function(e){t.push({type:"ImportSpecifier",local:l(e.name),imported:l(e.foreign_name)})}),{type:"ImportDeclaration",specifiers:t,source:l(e.module_name)}}),u(_t,function(e){return{type:"SequenceExpression",expressions:e.expressions.map(l)}}),u(dt,function(e){var t=e instanceof Et;return{type:"MemberExpression",object:l(e.expression),computed:t,property:t?l(e.property):{type:"Identifier",name:e.property}}}),u(ht,function(e){return{type:"++"==e.operator||"--"==e.operator?"UpdateExpression":"UnaryExpression",operator:e.operator,prefix:e instanceof Dt,argument:l(e.expression)}}),u(St,function(e){return"="==e.operator&&f()?{type:"AssignmentPattern",left:l(e.left),right:l(e.right)}:{type:"&&"==e.operator||"||"==e.operator?"LogicalExpression":"BinaryExpression",left:l(e.left),operator:e.operator,right:l(e.right)}}),u(bt,function(e){return{type:"ArrayExpression",elements:e.elements.map(l)}}),u(yt,function(e){return{type:"ObjectExpression",properties:e.properties.map(l)}}),u(Ct,function(e,t){var n,i=e.key instanceof le?l(e.key):{type:"Identifier",value:e.key};"number"==typeof e.key&&(i={type:"Literal",value:Number(e.key)}),"string"==typeof e.key&&(i={type:"Identifier",name:e.key});var r="string"==typeof e.key||"number"==typeof e.key,o=!r&&(!(e.key instanceof kt)||e.key instanceof Zt);return e instanceof Ot?(n="init",o=!r):e instanceof Rt?n="get":e instanceof Ft&&(n="set"),t instanceof Nt?{type:"MethodDefinition",computed:o,kind:n,static:e.static,key:l(e.key),value:l(e.value)}:{type:"Property",computed:o,kind:n,key:i,value:l(e.value)}}),u(Mt,function(e,t){return t instanceof yt?{type:"Property",computed:!(e.key instanceof kt)||e.key instanceof Zt,kind:"init",method:!0,shorthand:!1,key:l(e.key),value:l(e.value)}:{type:"MethodDefinition",computed:!(e.key instanceof kt)||e.key instanceof Zt,kind:"constructor"===e.key?"constructor":"method",static:e.static,key:l(e.key),value:l(e.value)}}),u(Nt,function(e){return{type:e instanceof xt?"ClassExpression":"ClassDeclaration",superClass:l(e.extends),id:e.name?l(e.name):null,body:{type:"ClassBody",body:e.properties.map(l)}}}),u(It,function(e){return{type:"MetaProperty",meta:{type:"Identifier",name:"new"},property:{type:"Identifier",name:"target"}}}),u(kt,function(e,t){if(e instanceof Ht&&t.quote)return{type:"Literal",value:e.name};var n=e.definition();return{type:"Identifier",name:n?n.mangled_name||n.name:e.name}}),u(sn,function(e){var t=e.value.source,n=e.value.toString().match(/[gimuys]*$/)[0];return{type:"Literal",value:new RegExp(t,n),raw:e.value.raw_source,regex:{pattern:t,flags:n}}}),u(rn,function(e){var t=e.value;return"number"==typeof t&&(t<0||0===t&&1/t<0)?{type:"UnaryExpression",operator:"-",prefix:!0,argument:{type:"Literal",value:-t,raw:e.start.raw}}:{type:"Literal",value:t,raw:e.start.raw}}),u(un,function(e){return{type:"Identifier",name:String(e.value)}}),dn.DEFMETHOD("to_mozilla_ast",rn.prototype.to_mozilla_ast),cn.DEFMETHOD("to_mozilla_ast",rn.prototype.to_mozilla_ast),pn.DEFMETHOD("to_mozilla_ast",function(){return null}),he.DEFMETHOD("to_mozilla_ast",De.prototype.to_mozilla_ast),xe.DEFMETHOD("to_mozilla_ast",Ie.prototype.to_mozilla_ast);var a=null;function s(e){a.push(e);var n=null!=e?t[e.type](e):null;return a.pop(),n}function u(e,t){e.DEFMETHOD("to_mozilla_ast",function(e){return n=this,i=t(this,e),r=n.start,o=n.end,null!=r.pos&&null!=o.endpos&&(i.range=[r.pos,o.endpos]),r.line&&(i.loc={start:{line:r.line,column:r.col},end:o.endline?{line:o.endline,column:o.endcol}:null},r.file&&(i.loc.source=r.file)),i;var n,i,r,o})}le.from_mozilla_ast=function(e){var t=a;a=[];var n=s(e);return a=t,n};var c=null;function l(e){null===c&&(c=[]),c.push(e);var t=null!=e?e.to_mozilla_ast(c[c.length-2]):null;return c.pop(),0===c.length&&(c=null),t}function f(){for(var e=c.length;e--;)if(c[e]instanceof Pe)return!0;return!1}function p(e){return{type:"BlockStatement",body:e.body.map(l)}}function _(e,t){var n=t.body.map(l);return t.body[0]instanceof de&&t.body[0].body instanceof on&&n.unshift(l(new ge(t.body[0]))),{type:e,body:n}}}(),e.minify=function(e,n){var i,r,o=le.warn_function;try{var a,u=(n=s(n,{compress:{},ecma:void 0,enclose:!1,ie8:!1,keep_classnames:void 0,keep_fnames:!1,mangle:{},module:!1,nameCache:null,output:{},parse:{},rename:void 0,safari10:!1,sourceMap:!1,timings:!1,toplevel:!1,warnings:!1,wrap:!1},!0)).timings&&{start:Date.now()};void 0===n.keep_classnames&&(n.keep_classnames=n.keep_fnames),void 0===n.rename&&(n.rename=n.compress&&n.mangle),Vn("ecma",n,["parse","compress","output"]),Vn("ie8",n,["compress","mangle","output"]),Vn("keep_classnames",n,["compress","mangle"]),Vn("keep_fnames",n,["compress","mangle"]),Vn("module",n,["parse","compress","mangle"]),Vn("safari10",n,["mangle","output"]),Vn("toplevel",n,["compress","mangle"]),Vn("warnings",n,["compress"]),n.mangle&&(n.mangle=s(n.mangle,{cache:n.nameCache&&(n.nameCache.vars||{}),eval:!1,ie8:!1,keep_classnames:!1,keep_fnames:!1,module:!1,properties:!1,reserved:[],safari10:!1,toplevel:!1},!0),n.mangle.properties&&("object"!=typeof n.mangle.properties&&(n.mangle.properties={}),n.mangle.properties.keep_quoted&&(a=n.mangle.properties.reserved,Array.isArray(a)||(a=[]),n.mangle.properties.reserved=a),!n.nameCache||"cache"in n.mangle.properties||(n.mangle.properties.cache=n.nameCache.props||{})),Pn(n.mangle.cache),Pn(n.mangle.properties.cache)),n.sourceMap&&(n.sourceMap=s(n.sourceMap,{content:null,filename:null,includeSources:!1,root:null,url:null},!0));var c,l=[];if(n.warnings&&!le.warn_function&&(le.warn_function=function(e){l.push(e)}),u&&(u.parse=Date.now()),e instanceof Ne)c=e;else{for(var f in"string"==typeof e&&(e=[e]),n.parse=n.parse||{},n.parse.toplevel=null,e)if(v(e,f)&&(n.parse.filename=f,n.parse.toplevel=se(e[f],n.parse),n.sourceMap&&"inline"==n.sourceMap.content)){if(Object.keys(e).length>1)throw new Error("inline source map only works with singular input");n.sourceMap.content=(i=e[f],r=void 0,(r=/(?:^|[^.])\/\/# sourceMappingURL=data:application\/json(;[\w=-]*)?;base64,([+\/0-9A-Za-z]*=*)\s*$/.exec(i))?In(r[2]):(le.warn("inline source map not found"),null))}c=n.parse.toplevel}a&&wn(c,a),n.wrap&&(c=c.wrap_commonjs(n.wrap)),n.enclose&&(c=c.wrap_enclose(n.enclose)),u&&(u.rename=Date.now()),u&&(u.compress=Date.now()),n.compress&&(c=new Mn(n.compress).compress(c)),u&&(u.scope=Date.now()),n.mangle&&c.figure_out_scope(n.mangle),u&&(u.mangle=Date.now()),n.mangle&&(Rn.reset(),c.compute_char_frequency(n.mangle),c.mangle_names(n.mangle)),u&&(u.properties=Date.now()),n.mangle&&n.mangle.properties&&(c=kn(c,n.mangle.properties)),u&&(u.output=Date.now());var p={};if(n.output.ast&&(p.ast=c),!v(n.output,"code")||n.output.code){if(n.sourceMap&&("string"==typeof n.sourceMap.content&&(n.sourceMap.content=JSON.parse(n.sourceMap.content)),n.output.source_map=function(e){e=s(e,{file:null,root:null,orig:null,orig_line_diff:0,dest_line_diff:0});var n=new t.SourceMapGenerator({file:e.file,sourceRoot:e.root}),i=e.orig&&new t.SourceMapConsumer(e.orig);return i&&i.sources.forEach(function(e){var t=i.sourceContentFor(e,!0);t&&n.setSourceContent(e,t)}),{add:function(t,r,o,a,s,u){if(i){var c=i.originalPositionFor({line:a,column:s});if(null===c.source)return;t=c.source,a=c.line,s=c.column,u=c.name||u}n.addMapping({generated:{line:r+e.dest_line_diff,column:o},original:{line:a+e.orig_line_diff,column:s},source:t,name:u})},get:function(){return n},toString:function(){return JSON.stringify(n.toJSON())}}}({file:n.sourceMap.filename,orig:n.sourceMap.content,root:n.sourceMap.root}),n.sourceMap.includeSources)){if(e instanceof Ne)throw new Error("original source content unavailable");for(var f in e)v(e,f)&&n.output.source_map.get().setSourceContent(f,e[f])}delete n.output.ast,delete n.output.code;var _=bn(n.output);c.print(_),p.code=_.get(),n.sourceMap&&(p.map=n.output.source_map.toString(),"inline"==n.sourceMap.url?p.code+="\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,"+Ln(p.map):n.sourceMap.url&&(p.code+="\n//# sourceMappingURL="+n.sourceMap.url))}return n.nameCache&&n.mangle&&(n.mangle.cache&&(n.nameCache.vars=Bn(n.mangle.cache)),n.mangle.properties&&n.mangle.properties.cache&&(n.nameCache.props=Bn(n.mangle.properties.cache))),u&&(u.end=Date.now(),p.timings={parse:.001*(u.rename-u.parse),rename:.001*(u.compress-u.rename),compress:.001*(u.scope-u.compress),scope:.001*(u.mangle-u.scope),mangle:.001*(u.properties-u.mangle),properties:.001*(u.output-u.properties),output:.001*(u.end-u.output),total:.001*(u.end-u.start)}),l.length&&(p.warnings=l),p}catch(e){return{error:e}}finally{le.warn_function=o}},e.AST_Array=bt,e.AST_Assign=vt,e.AST_Constant=rn,e.AST_Node=le,e.AST_PropAccess=dt,e.AST_Sequence=_t,e.AST_Symbol=kt,e.AST_Token=ce,e.TreeTransformer=Sn,e.TreeWalker=gn,e.defaults=s,e.Dictionary=A,e.push_uniq=m,e.string_template=E,e.base54=Rn,e.Compressor=Mn,e.OutputStream=bn,e.parse=se,e.mangle_properties=kn,e.reserve_quoted_keys=wn,e.JS_Parse_Error=Z,e.tokenizer=te,e.to_ascii=In,e.AST_Accessor=ke,e.AST_Arrow=Le,e.AST_Atom=un,e.AST_Await=hn,e.AST_Binary=St,e.AST_Block=he,e.AST_BlockStatement=De,e.AST_Boolean=dn,e.AST_Break=Ye,e.AST_Call=ft,e.AST_Case=Je,e.AST_Catch=tt,e.AST_Class=Nt,e.AST_ClassExpression=xt,e.AST_ConciseMethod=Mt,e.AST_Conditional=At,e.AST_Const=at,e.AST_Continue=qe,e.AST_Debugger=pe,e.AST_Default=Qe,e.AST_DefaultAssign=Tt,e.AST_DefClass=wt,e.AST_Definitions=it,e.AST_Defun=Ve,e.AST_Destructuring=Pe,e.AST_Directive=_e,e.AST_Do=be,e.AST_Dot=mt,e.AST_DWLoop=Te,e.AST_EmptyStatement=ge,e.AST_Exit=He,e.AST_Expansion=we,e.AST_Export=ct,e.AST_False=mn,e.AST_Finally=nt,e.AST_For=Ce,e.AST_ForIn=Oe,e.AST_ForOf=Fe,e.AST_Function=Ie,e.AST_Hole=pn,e.AST_If=$e,e.AST_Import=ut,e.AST_Infinity=_n,e.AST_IterationStatement=ve,e.AST_Jump=Ge,e.AST_Label=jt,e.AST_LabeledStatement=Ae,e.AST_LabelRef=en,e.AST_Lambda=xe,e.AST_Let=ot,e.AST_LoopControl=We,e.AST_NameMapping=st,e.AST_NaN=ln,e.AST_New=pt,e.AST_NewTarget=It,e.AST_Null=cn,e.AST_Number=an,e.AST_Object=yt,e.AST_ObjectGetter=Rt,e.AST_ObjectKeyVal=Ot,e.AST_ObjectProperty=Ct,e.AST_ObjectSetter=Ft,e.AST_PrefixedTemplateString=Be,e.AST_RegExp=sn,e.AST_Return=Xe,e.AST_Scope=Me,e.AST_SimpleStatement=de,e.AST_Statement=fe,e.AST_StatementWithBody=Se,e.AST_String=on,e.AST_Sub=Et,e.AST_Super=nn,e.AST_Switch=je,e.AST_SwitchBranch=Ze,e.AST_SymbolBlockDeclaration=Pt,e.AST_SymbolCatch=Yt,e.AST_SymbolClass=Wt,e.AST_SymbolConst=Bt,e.AST_SymbolDeclaration=Lt,e.AST_SymbolDefClass=zt,e.AST_SymbolDefun=Gt,e.AST_SymbolExport=Qt,e.AST_SymbolExportForeign=Jt,e.AST_SymbolFunarg=Ut,e.AST_SymbolImport=qt,e.AST_SymbolImportForeign=$t,e.AST_SymbolLambda=Xt,e.AST_SymbolLet=Kt,e.AST_SymbolMethod=Ht,e.AST_SymbolRef=Zt,e.AST_SymbolVar=Vt,e.AST_TemplateSegment=Ue,e.AST_TemplateString=Ke,e.AST_This=tn,e.AST_Throw=ze,e.AST_Toplevel=Ne,e.AST_True=En,e.AST_Try=et,e.AST_Unary=ht,e.AST_UnaryPostfix=gt,e.AST_UnaryPrefix=Dt,e.AST_Undefined=fn,e.AST_Var=rt,e.AST_VarDef=lt,e.AST_While=ye,e.AST_With=Re,e.AST_Yield=Dn,e.walk_body=me});
//# sourceMappingURL=bundle.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=2.js.map