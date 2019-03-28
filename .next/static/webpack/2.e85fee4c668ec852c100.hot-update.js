webpackHotUpdate(2,{

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
  }, "\u6700\u8FD1\u6587\u7AE0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
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
  }, "\n      .aslide-recent-articles {\n        border: 1px solid #eaeaea;\n        min-height: 160px;\n        _height: 160px;\n        margin-bottom: 20px;\n      }\n      .aslide-recent-articles:hover {\n        box-shadow: 0 0 10px #ccc;\n      }\n      .aslide-recent-articles .hd {\n        height: 30px;\n        line-height: 30px;\n        border-bottom: 1px solid #eaeaea;\n        background-color: #fbfbfb;\n      }\n      .aslide-recent-articles .hd span {\n        display: inline-block;\n        height: 100%;\n        padding: 0 20px 0 10px;\n        background-color: #ffffff;\n        border-right: 1px solid #eaeaea;\n        border-bottom: 1px solid #ffffff;\n      }\n      .recent-articles-cont li {\n        box-sizing: border-box;\n        padding: 5px 10px;\n        font-size: 14px;\n        display: flex;\n        justify-content: space-between;\n        align-item: center;\n        line-height: 30px;\n        border-bottom: 1px solid #f0f0f0;\n      }\n      .recent-articles-cont li:last-child {\n        border-bottom: 0;\n      }\n      .recent-articles-cont li a:hover {\n        color: #45BCF9;\n      }\n      .recent-articles-cont li a {\n        color: #333333;\n        display: block;\n        width: 330px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        text-shadow: 0px 0px 2px #ffffff;\n      }\n    "));
};

/* harmony default export */ __webpack_exports__["default"] = (RecentArticles);

/***/ })

})
//# sourceMappingURL=2.e85fee4c668ec852c100.hot-update.js.map