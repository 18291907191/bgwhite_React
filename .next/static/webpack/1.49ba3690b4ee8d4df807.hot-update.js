webpackHotUpdate(1,{

/***/ "./components/commons/header/index.js":
/*!********************************************!*\
  !*** ./components/commons/header/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/actionCreators */ "./components/commons/header/store/actionCreators.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _indexUI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indexUI */ "./components/commons/header/indexUI.js");





var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/index.js";







var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_indexUI__WEBPACK_IMPORTED_MODULE_10__["default"], {
        marquee: this.props.goodSentences,
        navList: this.props.navList,
        focused: this.props.focused,
        handleNav: this.props.handleNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.initNavList();
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    navList: state.header.get('navList'),
    goodSentences: state.header.get('goodSentences'),
    focused: state.header.get('focused')
  };
};

var mapDispathToProps = function mapDispathToProps(dispatch) {
  return {
    initNavList: function initNavList() {
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('http://localhost:3002/nav_list').then(function (res) {
        var data = res.data.result;
        dispatch(_store_actionCreators__WEBPACK_IMPORTED_MODULE_8__["initNavListAction"](data));
      });
    },
    handleNav: function handleNav(index) {
      console.log(index);
      dispatch(_store_actionCreators__WEBPACK_IMPORTED_MODULE_8__["selectNavItemAction"](index));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispathToProps)(Header));

/***/ }),

/***/ "./components/commons/header/indexUI.js":
/*!**********************************************!*\
  !*** ./components/commons/header/indexUI.js ***!
  \**********************************************/
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
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/header/indexUI.js";



var Logo = next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ./logo */ "./components/commons/header/logo.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, "Logo\u52A0\u8F7D\u4E2D...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./logo */ "./components/commons/header/logo.js")];
    },
    modules: ['./logo']
  }
});
var Menu = next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./menu */ "./components/commons/header/menu.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Logo\u52A0\u8F7D\u4E2D...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./menu */ "./components/commons/header/menu.js")];
    },
    modules: ['./menu']
  }
});
var MarQuee = next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ./marquee */ "./components/commons/header/marquee.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Logo\u52A0\u8F7D\u4E2D...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./marquee */ "./components/commons/header/marquee.js")];
    },
    modules: ['./marquee']
  }
});

var HeaderUI = function HeaderUI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3587249026",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MarQuee, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3587249026",
    __self: this
  }, "header.jsx-3587249026{padding:20px 20px;background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552887564432&di=934760de81d9f22a78df1267f428faec&imgtype=0&src=http%3A%2F%2Fpic15.nipic.com%2F20110715%2F7943290_155206295348_2.jpg') no-repeat center;background-size:cover;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9pbmRleFVJLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHMkIsa0JBQzBOLDRPQUN0TixzQkFDVCwwRUFDaUIsbUhBQ1gsNkZBQ3JCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2hlYWRlci9pbmRleFVJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgTG9nbyA9IGR5bmFtaWMoaW1wb3J0KCcuL2xvZ28nKSx7XG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvZ2/liqDovb3kuK0uLi48L3A+XG59KVxuY29uc3QgTWVudSA9IGR5bmFtaWMoaW1wb3J0KCcuL21lbnUnKSx7XG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvZ2/liqDovb3kuK0uLi48L3A+XG59KVxuY29uc3QgTWFyUXVlZSA9IGR5bmFtaWMoaW1wb3J0KCcuL21hcnF1ZWUnKSx7XG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvZ2/liqDovb3kuK0uLi48L3A+XG59KVxuXG5jb25zdCBIZWFkZXJVSSA9IChwcm9wcykgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxMb2dvIC8+XG4gICAgPE1hclF1ZWUgLz5cbiAgICA8TWVudSAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NTI4ODc1NjQ0MzImZGk9OTM0NzYwZGU4MWQ5ZjIyYTc4ZGYxMjY3ZjQyOGZhZWMmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMTUubmlwaWMuY29tJTJGMjAxMTA3MTUlMkY3OTQzMjkwXzE1NTIwNjI5NTM0OF8yLmpwZycpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvaGVhZGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJVSTsiXX0= */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/header/indexUI.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderUI);

/***/ })

})
//# sourceMappingURL=1.49ba3690b4ee8d4df807.hot-update.js.map