webpackHotUpdate(10,{

/***/ "./components/commons/header/menu.js":
/*!*******************************************!*\
  !*** ./components/commons/header/menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js";






var Menu = function Menu(props) {
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3760775780",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.navList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: +new Date() + index,
      href: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: props.handleNav(index),
      className: "jsx-3760775780" + " " + ((props.focused == index ? 'focused' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, item.name));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3760775780",
    __self: this
  }, "a.jsx-3760775780{color:#333333;text-shadow:0px 0px 2px #ffffff;padding:10px 10px;position:relative;}a.jsx-3760775780::before{content:\"\";position:absolute;top:0;left:100%;width:0;height:100%;border-bottom:2px solid #45BCF9;-webkit-transition:.2s all linear;transition:.2s all linear;}a.jsx-3760775780:hover{color:#ffffff;text-shadow:0px 0px 2px #45BCF9;}a.jsx-3760775780:hover.jsx-3760775780::before{width:100%;left:0;}a.jsx-3760775780:hover~a.jsx-3760775780::before{left:0;}.focused.jsx-3760775780{text-shadow:0px 0px 2px #45BCF9;border-bottom:2px solid #45BCF9;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ca0IsQUFHeUIsQUFNSCxBQVVHLEFBSUgsQUFJSixBQUd5QixPQUZsQyxJQWxCb0IsQUFjWCxHQXBCeUIsQUFnQkEsSUFLbEMsV0FkUSxHQW9CMEIsR0FuQnRCLFVBQ0YsQ0FSVSxBQWdCcEIsT0FQYyxXQVJNLEFBMEJKLENBakJrQixhQWtCbEMsSUExQkEsZUFTNEIsNERBQzVCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcbiAgY29uc29sZS5sb2cocHJvcHMpO1xuICByZXR1cm4gKFxuICAgIDxuYXY+XG4gICAgICB7XG4gICAgICAgIHByb3BzLm5hdkxpc3QubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgPExpbmsga2V5PXsrbmV3IERhdGUoKSArIGluZGV4fSBocmVmPXtpdGVtLnVybH0+XG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5mb2N1c2VkPT1pbmRleD8nZm9jdXNlZCc6Jyd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZU5hdihpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZmZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIGE6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDVCQ0Y5O1xuICAgICAgICAgIHRyYW5zaXRpb246IC4ycyBhbGwgbGluZWFyO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjNDVCQ0Y5O1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIH4gYTo6YmVmb3JlIHtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5mb2N1c2VkIHtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzQ1QkNGOTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ1QkNGOTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il19 */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=10.b96f37b1908484613e6a.hot-update.js.map