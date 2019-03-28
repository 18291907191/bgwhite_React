webpackHotUpdate(1,{

/***/ "./components/commons/header/index.js":
/*!********************************************!*\
  !*** ./components/commons/header/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _indexUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexUI */ "./components/commons/header/indexUI.js");
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/index.js";




var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_indexUI__WEBPACK_IMPORTED_MODULE_2__["default"], {
    marquee: props.goodSentences,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    goodSentences: state.header.get('goodSentences')
  };
};

var mapDispathToProps = function mapDispathToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispathToProps)(Header));

/***/ })

})
//# sourceMappingURL=1.190726e82110f51db2b2.hot-update.js.map