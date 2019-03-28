webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home/index.js":
/*!**********************************!*\
  !*** ./components/home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _indexUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./indexUI */ "./components/home/indexUI.js");





var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/home/index.js";



var noticeList = [{
  cont: "React.js+Next.js搭建SSR博客系统",
  createTime: "03-16"
}, {
  cont: "React.js+Next.js搭建SSR博客系统",
  createTime: "03-16"
}, {
  cont: "React.js+Next.js搭建SSR博客系统",
  createTime: "03-16"
}, {
  cont: "React.js+Next.js搭建SSR博客系统",
  createTime: "03-16"
}];
var recentArticlesList = [{
  title: "next+React搭建SSR博客系统"
}, {
  title: "Nuxt+Vue搭建SSR博客系统"
}, {
  title: "Linux服务器搭建"
}, {
  title: "小程序引入多个e-Charts图标"
}];

var Home =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _PureComponent);

  function Home() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_indexUI__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      });
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    swiperList: state.home.get('swiperList').toJS()
  };
};

var mapDispathToProps = function mapDispathToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispathToProps)(Home));

/***/ }),

/***/ "./components/home/indexUI.js":
/*!************************************!*\
  !*** ./components/home/indexUI.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/default */ "./layouts/default.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-server/dynamic */ "./node_modules/next-server/dynamic.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/home/indexUI.js";





var Swiper = next_server_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../commons/swiper */ "./components/commons/swiper/index.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, "Loading...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../commons/swiper */ "./components/commons/swiper/index.js")];
    },
    modules: ['../commons/swiper']
  }
});
var AslideNotice = next_server_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ./aslideNotice */ "./components/home/aslideNotice.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Loading...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./aslideNotice */ "./components/home/aslideNotice.js")];
    },
    modules: ['./aslideNotice']
  }
});
var RecentArticles = next_server_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./recentArticles */ "./components/home/recentArticles.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Loading...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./recentArticles */ "./components/home/recentArticles.js")];
    },
    modules: ['./recentArticles']
  }
});
var MusicPlay = next_server_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./musicPlay */ "./components/home/musicPlay.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Loading...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./musicPlay */ "./components/home/musicPlay.js")];
    },
    modules: ['./musicPlay']
  }
});
var ArticleList = next_server_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./articleList */ "./components/home/articleList.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Loading...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./articleList */ "./components/home/articleList.js")];
    },
    modules: ['./articleList']
  }
});
var noticeList = [{
  cont: "React.js+Next.js搭建SSR博客系统",
  createTime: "03-16"
}, {
  cont: "React.js+Next.js搭建SSR博客系统",
  createTime: "03-16"
}, {
  cont: "React.js+Next.js搭建SSR博客系统",
  createTime: "03-16"
}, {
  cont: "React.js+Next.js搭建SSR博客系统",
  createTime: "03-16"
}];
var recentArticlesList = [{
  title: "next+React搭建SSR博客系统"
}, {
  title: "Nuxt+Vue搭建SSR博客系统"
}, {
  title: "Linux服务器搭建"
}, {
  title: "小程序引入多个e-Charts图标"
}];

var HomeUI = function HomeUI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2842865638" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2842865638" + " " + "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2842865638" + " " + "swiper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Swiper, {
    slides: props.swiperList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2842865638" + " " + "hd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\u6700\u65B0\u53D1\u5E03"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ArticleList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2842865638" + " " + "aslide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AslideNotice, {
    noticeList: noticeList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RecentArticles, {
    recentArticlesList: recentArticlesList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MusicPlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2842865638",
    __self: this
  }, ".container.jsx-2842865638{box-sizing:border-box;padding:20px 100px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;}.article.jsx-2842865638{width:860px;}.swiper.jsx-2842865638{width:100%;height:160px;}.aslide.jsx-2842865638{width:360px;}.article.jsx-2842865638 .hd.jsx-2842865638{line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9ob21lL2luZGV4VUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RnQixBQUcrQixBQU9WLEFBR0QsQUFJQyxBQUdLLFdBTkosQ0FIZixBQU9BLEtBR0EsS0FqQnVCLEVBV3ZCLG1CQVZlLDBFQUNpQixtSEFDZCxnQkFDbEIiLCJmaWxlIjoiL1ZvbHVtZXMvQk9PVENBTVAvTmV4dCtSZWFjdC9jb21wb25lbnRzL2hvbWUvaW5kZXhVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0cy9kZWZhdWx0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IFN3aXBlciA9IGR5bmFtaWMoaW1wb3J0KCcuLi9jb21tb25zL3N3aXBlcicpLHtcbiAgbG9hZGluZzogKCkgPT4gPHA+TG9hZGluZy4uLjwvcD5cbn0pXG5jb25zdCBBc2xpZGVOb3RpY2UgPSBkeW5hbWljKGltcG9ydCgnLi9hc2xpZGVOb3RpY2UnKSx7XG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcuLi48L3A+XG59KVxuY29uc3QgUmVjZW50QXJ0aWNsZXMgPSBkeW5hbWljKGltcG9ydCgnLi9yZWNlbnRBcnRpY2xlcycpLHtcbiAgbG9hZGluZzogKCkgPT4gPHA+TG9hZGluZy4uLjwvcD5cbn0pXG5jb25zdCBNdXNpY1BsYXkgPSBkeW5hbWljKGltcG9ydCgnLi9tdXNpY1BsYXknKSx7XG4gIGxvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcuLi48L3A+XG59KVxuY29uc3QgQXJ0aWNsZUxpc3QgPSBkeW5hbWljKGltcG9ydCgnLi9hcnRpY2xlTGlzdCcpLHtcbiAgbG9hZGluZzogKCkgPT4gPHA+TG9hZGluZy4uLjwvcD5cbn0pXG5cbmNvbnN0IG5vdGljZUxpc3QgPSBbXG4gIHtjb250OlwiUmVhY3QuanMrTmV4dC5qc+aQreW7ulNTUuWNmuWuouezu+e7n1wiLGNyZWF0ZVRpbWU6XCIwMy0xNlwifSxcbiAge2NvbnQ6XCJSZWFjdC5qcytOZXh0Lmpz5pCt5bu6U1NS5Y2a5a6i57O757ufXCIsY3JlYXRlVGltZTpcIjAzLTE2XCJ9LFxuICB7Y29udDpcIlJlYWN0LmpzK05leHQuanPmkK3lu7pTU1LljZrlrqLns7vnu59cIixjcmVhdGVUaW1lOlwiMDMtMTZcIn0sXG4gIHtjb250OlwiUmVhY3QuanMrTmV4dC5qc+aQreW7ulNTUuWNmuWuouezu+e7n1wiLGNyZWF0ZVRpbWU6XCIwMy0xNlwifVxuXVxuXG5jb25zdCByZWNlbnRBcnRpY2xlc0xpc3QgPSBbXG4gIHt0aXRsZTpcIm5leHQrUmVhY3TmkK3lu7pTU1LljZrlrqLns7vnu59cIn0sXG4gIHt0aXRsZTpcIk51eHQrVnVl5pCt5bu6U1NS5Y2a5a6i57O757ufXCJ9LFxuICB7dGl0bGU6XCJMaW51eOacjeWKoeWZqOaQreW7ulwifSxcbiAge3RpdGxlOlwi5bCP56iL5bqP5byV5YWl5aSa5LiqZS1DaGFydHPlm77moIdcIn0sXG5dXG5cbmNvbnN0IEhvbWVVSSA9IChwcm9wcykgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZXJcIj5cbiAgICAgICAgICA8U3dpcGVyIHNsaWRlcz17cHJvcHMuc3dpcGVyTGlzdH0gLz5cbiAgICAgICAgPC9kaXY+IFxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGRcIj7mnIDmlrDlj5HluIM8L2gzPlxuICAgICAgICA8QXJ0aWNsZUxpc3QgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2xpZGVcIj5cbiAgICAgICAgPEFzbGlkZU5vdGljZSBub3RpY2VMaXN0PXtub3RpY2VMaXN0fSAvPlxuICAgICAgICA8UmVjZW50QXJ0aWNsZXMgcmVjZW50QXJ0aWNsZXNMaXN0PXtyZWNlbnRBcnRpY2xlc0xpc3R9IC8+XG4gICAgICAgIDxNdXNpY1BsYXkgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDEwMHB4IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlIHtcbiAgICAgICAgd2lkdGg6IDg2MHB4O1xuICAgICAgfVxuICAgICAgLnN3aXBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgfVxuICAgICAgLmFzbGlkZSB7XG4gICAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlIC5oZCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pXG5cbi8vIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIHN3aXBlckxpc3Q6IHN0YXRlLmhvbWUuZ2V0KCdzd2lwZXJMaXN0JykudG9KUygpXG4vLyAgIH1cbi8vIH1cblxuLy8gY29uc3QgbWFwRGlzcGF0aFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbi8vICAgcmV0dXJuIHtcbi8vICAgfVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBIb21lVUk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGhUb1Byb3BzKShIb21lKTtcbiJdfQ== */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/home/indexUI.js */"));
}; // const mapStateToProps = (state) => {
//   return {
//     swiperList: state.home.get('swiperList').toJS()
//   }
// }
// const mapDispathToProps = (dispatch) => {
//   return {
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (HomeUI); // export default connect(mapStateToProps,mapDispathToProps)(Home);

/***/ }),

/***/ "./layouts/default.js":
/*!****************************!*\
  !*** ./layouts/default.js ***!
  \****************************/
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
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/layouts/default.js";




var Header = next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/commons/header */ "./components/commons/header/index.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, "\u6B63\u5728\u52A0\u8F7D\u7EC4\u4EF6...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/commons/header */ "./components/commons/header/index.js")];
    },
    modules: ['../components/commons/header']
  }
});
var Footer = next_server_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../components/commons/footer */ "./components/commons/footer/index.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "\u7EC4\u4EF6\u52A0\u8F7D\u4E2D...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/commons/footer */ "./components/commons/footer/index.js")];
    },
    modules: ['../components/commons/footer']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3919198601",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3919198601",
    __self: this
  }, "div.jsx-3919198601{-webkit-flex:1;-ms-flex:1;flex:1;overflow-y:auto;overflow-x:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvbGF5b3V0cy9kZWZhdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNrQixBQUdrQixpQ0FDUyxnQkFDRSxrQkFDcEIiLCJmaWxlIjoiL1ZvbHVtZXMvQk9PVENBTVAvTmV4dCtSZWFjdC9sYXlvdXRzL2RlZmF1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBIZWFkZXIgPSBkeW5hbWljKGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21tb25zL2hlYWRlcicpLHtcbiAgbG9hZGluZzogKCkgPT4gPHA+5q2j5Zyo5Yqg6L2957uE5Lu2Li4uPC9wPlxufSk7XG5jb25zdCBGb290ZXIgPSBkeW5hbWljKGltcG9ydCgnLi4vY29tcG9uZW50cy9jb21tb25zL2Zvb3RlcicpLHtcbiAgbG9hZGluZzogKCkgPT4gPHA+57uE5Lu25Yqg6L295LitLi4uPC9wPlxufSlcblxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBkaXYge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICA8Rm9vdGVyIC8+XG4gIDwvRnJhZ21lbnQ+XG4pIl19 */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/layouts/default.js */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
});

/***/ }),

/***/ "./node_modules/next-server/dist/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next-server/dist/lib/dynamic.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_1 = __importDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next-server/dist/lib/loadable.js"));

var isServerSide = typeof window === 'undefined';

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  } // This will only be rendered on the server side


  return function () {
    return react_1.default.createElement(loadableOptions.loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

exports.noSSR = noSSR;

function DefaultLoading() {
  return react_1.default.createElement("p", null, "loading...");
}

function dynamic(dynamicOptions, options) {
  var loadableFn = loadable_1.default;
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading;

      if (true) {
        if (isLoading) {
          return react_1.default.createElement(DefaultLoading, null);
        }

        if (error) {
          return react_1.default.createElement("p", null, error.message, react_1.default.createElement("br", null), error.stack);
        }
      }

      return react_1.default.createElement(DefaultLoading, null);
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (typeof dynamicOptions.then === 'function') {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if ((0, _typeof2.default)(dynamicOptions) === 'object') {
    loadableOptions = (0, _assign.default)({}, loadableOptions, dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = (0, _assign.default)({}, loadableOptions, options); // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })

  if (dynamicOptions.render) {
    loadableOptions.render = function (loaded, props) {
      return dynamicOptions.render(props, loaded);
    };
  } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


  if (dynamicOptions.modules) {
    loadableFn = loadable_1.default.Map;
    var loadModules = {};
    var modules = dynamicOptions.modules();
    (0, _keys.default)(modules).forEach(function (key) {
      var value = modules[key];

      if (typeof value.then === 'function') {
        loadModules[key] = function () {
          return value.then(function (mod) {
            return mod.default || mod;
          });
        };

        return;
      }

      loadModules[key] = value;
    });
    loadableOptions.loader = loadModules;
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = (0, _assign.default)({}, loadableOptions, loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

exports.default = dynamic;

/***/ }),

/***/ "./node_modules/next-server/dynamic.js":
/*!*********************************************!*\
  !*** ./node_modules/next-server/dynamic.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/lib/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/home */ "./components/home/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_components_home__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

})
//# sourceMappingURL=index.js.a745c92cf444f3f4800b.hot-update.js.map