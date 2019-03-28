webpackHotUpdate(10,{

/***/ "./components/commons/header/menu.js":
/*!*******************************************!*\
  !*** ./components/commons/header/menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/actionCreators */ "./components/commons/header/store/actionCreators.js");





var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js";








var Menu =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu, _PureComponent);

  function Menu() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Menu);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Menu).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
        className: "jsx-4272227751",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.navList.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          key: +new Date() + index,
          target: "_bank",
          href: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          onClick: function onClick() {
            return _this.props.handleNav(index);
          },
          className: "jsx-4272227751" + " " + ((_this.props.focused == index ? 'focused' : '') || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, item.name));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "4272227751",
        __self: this
      }, "a.jsx-4272227751{color:#333333;text-shadow:0px 0px 2px #ffffff;padding:10px 10px;position:relative;}a.jsx-4272227751::before{content:\"\";position:absolute;top:0;left:100%;width:0;height:100%;border-bottom:2px solid #45BCF9;-webkit-transition:.2s all linear;transition:.2s all linear;}a.jsx-4272227751:hover{color:#ffffff;text-shadow:0px 0px 2px #45BCF9;}a.jsx-4272227751:hover.jsx-4272227751::before{width:100%;left:0;}a.jsx-4272227751:hover~a.jsx-4272227751::before{left:0;}.focused.jsx-4272227751{text-shadow:0px 0px 2px #45BCF9;border-bottom:2px solid #45BCF9;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHMkIsQUFNSCxBQVVHLEFBSUgsQUFJSixBQUd5QixPQUZsQyxJQWxCb0IsQUFjWCxHQXBCeUIsQUFnQkEsSUFLbEMsV0FkUSxHQW9CMEIsR0FuQnRCLFVBQ0YsQ0FSVSxBQWdCcEIsT0FQYyxXQVJNLEFBMEJKLENBakJrQixhQWtCbEMsSUExQkEsZUFTNEIsNERBQzVCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25DcmVhdG9ycydcblxuY2xhc3MgTWVudSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm5hdkxpc3QubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9eytuZXcgRGF0ZSgpICsgaW5kZXh9IHRhcmdldD1cIl9iYW5rXCIgaHJlZj17aXRlbS51cmx9PlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuZm9jdXNlZD09aW5kZXg/J2ZvY3VzZWQnOicnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+ICh0aGlzLnByb3BzLmhhbmRsZU5hdihpbmRleCkpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggI2ZmZmZmZjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ1QkNGOTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4ycyBhbGwgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICM0NUJDRjk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIgfiBhOjpiZWZvcmUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvY3VzZWQge1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICM0NUJDRjk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ1QkNGOTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5pbml0TmF2TGlzdCgpO1xuICB9XG5cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmF2TGlzdDogc3RhdGUuaGVhZGVyLmdldCgnbmF2TGlzdCcpLFxuICAgIGZvY3VzZWQ6IHN0YXRlLmhlYWRlci5nZXQoJ2ZvY3VzZWQnKVxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGhUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW5pdE5hdkxpc3QoKSB7XG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9uYXZfbGlzdCcpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzLmRhdGEucmVzdWx0O1xuICAgICAgICBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5pbml0TmF2TGlzdEFjdGlvbihkYXRhKSk7XG4gICAgICB9KVxuICAgIH0sXG4gICAgaGFuZGxlTmF2KGluZGV4KSB7XG4gICAgICBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zZWxlY3ROYXZJdGVtQWN0aW9uKGluZGV4KSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGhUb1Byb3BzKShNZW51KTsiXX0= */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js */"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.initNavList();
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    navList: state.header.get('navList'),
    focused: state.header.get('focused')
  };
};

var mapDispathToProps = function mapDispathToProps(dispatch) {
  return {
    initNavList: function initNavList() {
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://localhost:3002/nav_list').then(function (res) {
        var data = res.data.result;
        dispatch(_store_actionCreators__WEBPACK_IMPORTED_MODULE_10__["initNavListAction"](data));
      });
    },
    handleNav: function handleNav(index) {
      dispatch(_store_actionCreators__WEBPACK_IMPORTED_MODULE_10__["selectNavItemAction"](index));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispathToProps)(Menu));

/***/ })

})
//# sourceMappingURL=10.8ab1516c5e6cc13b07d0.hot-update.js.map