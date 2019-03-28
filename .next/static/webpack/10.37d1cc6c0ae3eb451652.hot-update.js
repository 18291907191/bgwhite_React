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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js";





var Menu = function Menu(props) {
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3760775780",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.navList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      key: +new Date() + index,
      href: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      onClick: props.handleNav(index),
      className: "jsx-3760775780" + " " + ((props.focused == index ? 'focused' : '') || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, item.name));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3760775780",
    __self: this
  }, "a.jsx-3760775780{color:#333333;text-shadow:0px 0px 2px #ffffff;padding:10px 10px;position:relative;}a.jsx-3760775780::before{content:\"\";position:absolute;top:0;left:100%;width:0;height:100%;border-bottom:2px solid #45BCF9;-webkit-transition:.2s all linear;transition:.2s all linear;}a.jsx-3760775780:hover{color:#ffffff;text-shadow:0px 0px 2px #45BCF9;}a.jsx-3760775780:hover.jsx-3760775780::before{width:100%;left:0;}a.jsx-3760775780:hover~a.jsx-3760775780::before{left:0;}.focused.jsx-3760775780{text-shadow:0px 0px 2px #45BCF9;border-bottom:2px solid #45BCF9;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IsQUFHeUIsQUFNSCxBQVVHLEFBSUgsQUFJSixBQUd5QixPQUZsQyxJQWxCb0IsQUFjWCxHQXBCeUIsQUFnQkEsSUFLbEMsV0FkUSxHQW9CMEIsR0FuQnRCLFVBQ0YsQ0FSVSxBQWdCcEIsT0FQYyxXQVJNLEFBMEJKLENBakJrQixhQWtCbEMsSUExQkEsZUFTNEIsNERBQzVCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMubmF2TGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICA8TGluayBrZXk9eytuZXcgRGF0ZSgpICsgaW5kZXh9IGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmZvY3VzZWQ9PWluZGV4Pydmb2N1c2VkJzonJ31cbiAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlTmF2KGluZGV4KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjZmZmZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICAgICAgYTo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NUJDRjk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogLjJzIGFsbCBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICM0NUJDRjk7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIgfiBhOjpiZWZvcmUge1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZvY3VzZWQge1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjNDVCQ0Y5O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDVCQ0Y5O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXX0= */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=10.37d1cc6c0ae3eb451652.hot-update.js.map