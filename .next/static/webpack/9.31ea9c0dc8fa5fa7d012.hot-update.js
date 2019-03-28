webpackHotUpdate(9,{

/***/ "./components/commons/header/marquee.js":
/*!**********************************************!*\
  !*** ./components/commons/header/marquee.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/marquee.js";



var MarQuee = function MarQuee(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "sdfds", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("marquee", {
    behavior: "slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.marquee));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    goodSentences: state.header.get('goodSentences')
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(MarQuee));

/***/ })

})
//# sourceMappingURL=9.31ea9c0dc8fa5fa7d012.hot-update.js.map