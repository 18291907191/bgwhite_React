(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./components/commons/header/components/indexUI.js":
/*!*********************************************************!*\
  !*** ./components/commons/header/components/indexUI.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-server/dynamic */ "./node_modules/next-server/dynamic.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/components/indexUI.js";



var HeaderUI = next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default()({
  modules: function modules() {
    var components = {
      Logo: __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./logo */ "./components/commons/header/components/logo.js")),
      Menu: __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./menu */ "./components/commons/header/components/menu.js")),
      MarQuee: __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./marquee */ "./components/commons/header/components/marquee.js"))
    };
    return components;
  },
  render: function render(props, _ref) {
    var Logo = _ref.Logo,
        Menu = _ref.Menu,
        MarQuee = _ref.MarQuee;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-878331279",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, {
      className: "jsx-878331279",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarQuee, {
      className: "jsx-878331279",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Menu, {
      className: "jsx-878331279",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "878331279",
      __self: this
    }, "header.jsx-878331279{padding:20px 20px;background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552887564432&di=934760de81d9f22a78df1267f428faec&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110715%2F7943290_155206295348_2.jpg') no-repeat center;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9jb21wb25lbnRzL2luZGV4VUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JrQixBQUc2QixrQkFDME4sNE9BQ3ROLHNCQUNULDBFQUNpQixtSEFDWCw2RkFDckIiLCJmaWxlIjoiL1ZvbHVtZXMvQk9PVENBTVAvTmV4dCtSZWFjdC9jb21wb25lbnRzL2NvbW1vbnMvaGVhZGVyL2NvbXBvbmVudHMvaW5kZXhVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IEhlYWRlclVJID0gZHluYW1pYyh7XG4gIG1vZHVsZXM6ICgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xuICAgICAgTG9nbzogaW1wb3J0KCcuL2xvZ28nKSxcbiAgICAgIE1lbnU6IGltcG9ydCgnLi9tZW51JyksXG4gICAgICBNYXJRdWVlOiBpbXBvcnQoJy4vbWFycXVlZScpXG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRzXG4gIH0sXG4gIHJlbmRlcjogKHByb3BzLHtMb2dvLE1lbnUsTWFyUXVlZX0pID0+IFxuICAgIDxoZWFkZXI+XG4gICAgICA8TG9nbyAvPlxuICAgICAgPE1hclF1ZWUgLz5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTUyODg3NTY0NDMyJmRpPTkzNDc2MGRlODFkOWYyMmE3OGRmMTI2N2Y0MjhmYWVjJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYzE1Lm5pcGljLmNvbSUyRjIwMTEwNzE1JTJGNzk0MzI5MF8xNTUyMDYyOTUzNDhfMi5qcGcnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvaGVhZGVyPlxufSlcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVUk7Il19 */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/header/components/indexUI.js */"));
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./logo */ "./components/commons/header/components/logo.js"), /*require.resolve*/(/*! ./menu */ "./components/commons/header/components/menu.js"), /*require.resolve*/(/*! ./marquee */ "./components/commons/header/components/marquee.js")];
    },
    modules: ['./logo', './menu', './marquee']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (HeaderUI);

/***/ }),

/***/ "./components/commons/header/index.js":
/*!********************************************!*\
  !*** ./components/commons/header/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_indexUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/indexUI */ "./components/commons/header/components/indexUI.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/actionCreators */ "./components/commons/header/store/actionCreators.js");






var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/index.js";






var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_indexUI__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.initNavList(this.props.navList);
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapDispathToProps = function mapDispathToProps(dispatch) {
  return {
    initNavList: function initNavList(data) {
      sessionStorage.setItem('navList', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data));
      dispatch(_store_actionCreators__WEBPACK_IMPORTED_MODULE_9__["initNavListAction"](data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(null, mapDispathToProps)(Header));

/***/ }),

/***/ "./components/commons/header/store/actionCreators.js":
/*!***********************************************************!*\
  !*** ./components/commons/header/store/actionCreators.js ***!
  \***********************************************************/
/*! exports provided: initNavListAction, selectNavItemAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNavListAction", function() { return initNavListAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNavItemAction", function() { return selectNavItemAction; });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionTypes */ "./components/commons/header/store/actionTypes.js");

var initNavListAction = function initNavListAction(data) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["INIT_NAV_LIST"],
    data: data
  };
};
var selectNavItemAction = function selectNavItemAction(index) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__["SELECT_NAV_ITEM"],
    data: index
  };
};

/***/ }),

/***/ "./components/commons/header/store/actionTypes.js":
/*!********************************************************!*\
  !*** ./components/commons/header/store/actionTypes.js ***!
  \********************************************************/
/*! exports provided: INIT_NAV_LIST, SELECT_NAV_ITEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_NAV_LIST", function() { return INIT_NAV_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_NAV_ITEM", function() { return SELECT_NAV_ITEM; });
var INIT_NAV_LIST = 'init_nav_list';
var SELECT_NAV_ITEM = 'select_nav_item';

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ })

}]);
//# sourceMappingURL=7.js.map