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
          target: item.name = 'GitHub' ? '_bank' : undefined,
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
      }, "a.jsx-4272227751{color:#333333;text-shadow:0px 0px 2px #ffffff;padding:10px 10px;position:relative;}a.jsx-4272227751::before{content:\"\";position:absolute;top:0;left:100%;width:0;height:100%;border-bottom:2px solid #45BCF9;-webkit-transition:.2s all linear;transition:.2s all linear;}a.jsx-4272227751:hover{color:#ffffff;text-shadow:0px 0px 2px #45BCF9;}a.jsx-4272227751:hover.jsx-4272227751::before{width:100%;left:0;}a.jsx-4272227751:hover~a.jsx-4272227751::before{left:0;}.focused.jsx-4272227751{text-shadow:0px 0px 2px #45BCF9;border-bottom:2px solid #45BCF9;color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHMkIsQUFNSCxBQVVHLEFBSUgsQUFJSixBQUd5QixPQUZsQyxJQWxCb0IsQUFjWCxHQXBCeUIsQUFnQkEsSUFLbEMsV0FkUSxHQW9CMEIsR0FuQnRCLFVBQ0YsQ0FSVSxBQWdCcEIsT0FQYyxXQVJNLEFBMEJKLENBakJrQixhQWtCbEMsSUExQkEsZUFTNEIsNERBQzVCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSAnLi9zdG9yZS9hY3Rpb25DcmVhdG9ycydcblxuY2xhc3MgTWVudSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXY+XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm5hdkxpc3QubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9eytuZXcgRGF0ZSgpICsgaW5kZXh9IHRhcmdldD17aXRlbS5uYW1lPSdHaXRIdWInPydfYmFuayc6Jyd9IGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZvY3VzZWQ9PWluZGV4Pydmb2N1c2VkJzonJ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiAodGhpcy5wcm9wcy5oYW5kbGVOYXYoaW5kZXgpKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMnB4ICNmZmZmZmY7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6OmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NUJDRjk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnMgYWxsIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjNDVCQ0Y5O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhOmhvdmVyIH4gYTo6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb2N1c2VkIHtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDJweCAjNDVCQ0Y5O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NUJDRjk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuaW5pdE5hdkxpc3QoKTtcbiAgfVxuXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hdkxpc3Q6IHN0YXRlLmhlYWRlci5nZXQoJ25hdkxpc3QnKSxcbiAgICBmb2N1c2VkOiBzdGF0ZS5oZWFkZXIuZ2V0KCdmb2N1c2VkJylcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGluaXROYXZMaXN0KCkge1xuICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDIvbmF2X2xpc3QnKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlcy5kYXRhLnJlc3VsdDtcbiAgICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuaW5pdE5hdkxpc3RBY3Rpb24oZGF0YSkpO1xuICAgICAgfSlcbiAgICB9LFxuICAgIGhhbmRsZU5hdihpbmRleCkge1xuICAgICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuc2VsZWN0TmF2SXRlbUFjdGlvbihpbmRleCkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRoVG9Qcm9wcykoTWVudSk7Il19 */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/header/menu.js */"));
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
//# sourceMappingURL=10.c1633466fcc4dd0819ca.hot-update.js.map