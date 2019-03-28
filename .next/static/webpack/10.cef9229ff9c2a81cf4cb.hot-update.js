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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js";




var Menu = function Menu(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3760775780",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.navList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      key: +new Date() + index,
      href: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: function onClick() {
        return props.handleNav(index);
      },
      className: "jsx-3760775780" + " " + ((props.focused == index ? 'focused' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, item.name));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3760775780",
    __self: this
  }, "a.jsx-3760775780{color:#333333;text-shadow:0px 0px 2px #ffffff;padding:10px 10px;position:relative;}a.jsx-3760775780::before{content:\"\";position:absolute;top:0;left:100%;width:0;height:100%;border-bottom:2px solid #45BCF9;-webkit-transition:.2s all linear;transition:.2s all linear;}a.jsx-3760775780:hover{color:#ffffff;text-shadow:0px 0px 2px #45BCF9;}a.jsx-3760775780:hover.jsx-3760775780::before{width:100%;left:0;}a.jsx-3760775780:hover~a.jsx-3760775780::before{left:0;}.focused.jsx-3760775780{text-shadow:0px 0px 2px #45BCF9;border-bottom:2px solid #45BCF9;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCa0IsQUFHeUIsQUFNSCxBQVVHLEFBSUgsQUFJSixBQUd5QixPQUZsQyxJQWxCb0IsQUFjWCxHQXBCeUIsQUFnQkEsSUFLbEMsV0FkUSxHQW9CMEIsR0FuQnRCLFVBQ0YsQ0FSVSxBQWdCcEIsT0FQYyxXQVJNLEFBMEJKLENBakJrQixhQWtCbEMsSUExQkEsZUFTNEIsNERBQzVCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMubmF2TGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICA8TGluayBrZXk9eytuZXcgRGF0ZSgpICsgaW5kZXh9IGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmZvY3VzZWQ9PWluZGV4Pydmb2N1c2VkJzonJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHByb3BzLmhhbmRsZU5hdihpbmRleCkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICNmZmZmZmY7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBhOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ1QkNGOTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuMnMgYWxsIGxpbmVhcjtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzQ1QkNGOTtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB+IGE6OmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9jdXNlZCB7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICM0NUJDRjk7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NUJDRjk7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51OyJdfQ== */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=10.cef9229ff9c2a81cf4cb.hot-update.js.map