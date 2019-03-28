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
          href: item.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          target: item.name == 'GitHub' ? '_blank' : '',
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
      }, "a.jsx-4272227751{color:#333333;text-shadow:0px 0px 2px #ffffff;padding:10px 10px;position:relative;}a.jsx-4272227751::before{content:\"\";position:absolute;top:0;left:100%;width:0;height:100%;border-bottom:2px solid #45BCF9;-webkit-transition:.2s all linear;transition:.2s all linear;}a.jsx-4272227751:hover{color:#ffffff;text-shadow:0px 0px 2px #45BCF9;}a.jsx-4272227751:hover.jsx-4272227751::before{width:100%;left:0;}a.jsx-4272227751:hover~a.jsx-4272227751::before{left:0;}.focused.jsx-4272227751{text-shadow:0px 0px 2px #45BCF9;border-bottom:2px solid #45BCF9;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCb0IsQUFHMkIsQUFNSCxBQVVHLEFBSUgsQUFJSixBQUd5QixPQUZsQyxJQWxCb0IsQUFjWCxHQXBCeUIsQUFnQkEsSUFLbEMsV0FkUSxHQW9CMEIsR0FuQnRCLFVBQ0YsQ0FSVSxBQWdCcEIsT0FQYyxXQVJNLEFBMEJKLENBakJrQixhQWtCbEMsSUExQkEsZUFTNEIsNERBQzVCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25DcmVhdG9ycydcblxuY2xhc3MgTWVudSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm5hdkxpc3QubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9eytuZXcgRGF0ZSgpICsgaW5kZXh9IGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgdGFyZ2V0PXtpdGVtLm5hbWU9PSdHaXRIdWInPydfYmxhbmsnOicnfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5mb2N1c2VkPT1pbmRleD8nZm9jdXNlZCc6Jyd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gKHRoaXMucHJvcHMuaGFuZGxlTmF2KGluZGV4KSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjZmZmZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDVCQ0Y5O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzIGFsbCBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzQ1QkNGOTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB+IGE6OmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9jdXNlZCB7XG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzQ1QkNGOTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDVCQ0Y5O1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L25hdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmluaXROYXZMaXN0KCk7XG4gIH1cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYXZMaXN0OiBzdGF0ZS5oZWFkZXIuZ2V0KCduYXZMaXN0JyksXG4gICAgZm9jdXNlZDogc3RhdGUuaGVhZGVyLmdldCgnZm9jdXNlZCcpXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0aFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpbml0TmF2TGlzdCgpIHtcbiAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL25hdl9saXN0JylcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXMuZGF0YS5yZXN1bHQ7XG4gICAgICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLmluaXROYXZMaXN0QWN0aW9uKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoYW5kbGVOYXYoaW5kZXgpIHtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNlbGVjdE5hdkl0ZW1BY3Rpb24oaW5kZXgpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0aFRvUHJvcHMpKE1lbnUpOyJdfQ== */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js */"));
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
//# sourceMappingURL=10.0611cc56822bc32d20ac.hot-update.js.map