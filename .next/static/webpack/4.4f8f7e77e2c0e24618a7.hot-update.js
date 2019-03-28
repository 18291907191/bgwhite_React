webpackHotUpdate(4,{

/***/ "./components/home/aslideNotice.js":
/*!*****************************************!*\
  !*** ./components/home/aslideNotice.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/home/aslideNotice.js";


/**
 * @description 侧边栏 网站公告
 * @param {*} data
 * @return {Object} Dom 
 */

var AslideNotice = function AslideNotice(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aslide-model",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "hd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u7F51\u7AD9\u516C\u544A")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "aslide-model-cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.noticeList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: +new Date() + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.cont)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, item.createTime));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\n      .aslide-model {\n        border: 1px solid #eaeaea;\n        min-height: 160px;\n        _height: 160px;\n        margin-bottom: 20px;\n        transition: .5s;\n      }\n      .aslide-model:hover {\n        box-shadow: 0 0 10px #ccc;\n        transform: transLateY(5px);\n      }\n      .aslide-model .hd {\n        height: 30px;\n        line-height: 30px;\n        border-bottom: 1px solid #eaeaea;\n        background-color: #fbfbfb;\n      }\n      .aslide-model .hd span {\n        display: inline-block;\n        height: 100%;\n        padding: 0 20px 0 10px;\n        background-color: #ffffff;\n        border-right: 1px solid #eaeaea;\n        border-bottom: 1px solid #ffffff;\n      }\n      .aslide-model-cont {\n        padding: 5px 10px;\n      }\n      .aslide-model-cont li {\n        font-size: 14px;\n        display: flex;\n        justify-content: space-between;\n        align-item: center;\n        line-height: 30px;\n      }\n      .aslide-model-cont li a:hover {\n        color: #45BCF9;\n      }\n      .aslide-model-cont li a {\n        color: #333333;\n        display: block;\n        width: 280px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        text-shadow: 0px 0px 2px #ffffff;\n      }\n      .aslide-model-cont li span {\n        float: right;\n      }\n    "));
};

/* harmony default export */ __webpack_exports__["default"] = (AslideNotice);

/***/ })

})
//# sourceMappingURL=4.4f8f7e77e2c0e24618a7.hot-update.js.map