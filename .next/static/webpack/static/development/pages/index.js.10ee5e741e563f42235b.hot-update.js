webpackHotUpdate("static/development/pages/index.js",{

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
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/home/indexUI.js";




var Swiper = next_server_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../commons/swiper */ "./components/commons/swiper/index.js"));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
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
        lineNumber: 8
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
        lineNumber: 11
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
        lineNumber: 14
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
        lineNumber: 17
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

var HomeUI = function HomeUI(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_default__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4098998477" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4098998477" + " " + "article",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4098998477" + " " + "swiper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Swiper, {
    slides: props.swiperList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-4098998477" + " " + "hd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\u6700\u65B0\u53D1\u5E03"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ArticleList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4098998477" + " " + "aslide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AslideNotice, {
    noticeList: props.noticeList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RecentArticles, {
    recentArticlesList: props.recentArticlesList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MusicPlay, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4098998477",
    __self: this
  }, ".container.jsx-4098998477{box-sizing:border-box;padding:20px 100px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;}.article.jsx-4098998477{width:860px;}.swiper.jsx-4098998477{width:100%;height:160px;}.aslide.jsx-4098998477{width:360px;}.article.jsx-4098998477 .hd.jsx-4098998477{line-height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9ob21lL2luZGV4VUkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNnQixBQUcrQixBQU9WLEFBR0QsQUFJQyxBQUdLLFdBTkosQ0FIZixBQU9BLEtBR0EsS0FqQnVCLEVBV3ZCLG1CQVZlLDBFQUNpQixtSEFDZCxnQkFDbEIiLCJmaWxlIjoiL1ZvbHVtZXMvQk9PVENBTVAvTmV4dCtSZWFjdC9jb21wb25lbnRzL2hvbWUvaW5kZXhVSS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0cy9kZWZhdWx0J1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgU3dpcGVyID0gZHluYW1pYyhpbXBvcnQoJy4uL2NvbW1vbnMvc3dpcGVyJykse1xuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nLi4uPC9wPlxufSlcbmNvbnN0IEFzbGlkZU5vdGljZSA9IGR5bmFtaWMoaW1wb3J0KCcuL2FzbGlkZU5vdGljZScpLHtcbiAgbG9hZGluZzogKCkgPT4gPHA+TG9hZGluZy4uLjwvcD5cbn0pXG5jb25zdCBSZWNlbnRBcnRpY2xlcyA9IGR5bmFtaWMoaW1wb3J0KCcuL3JlY2VudEFydGljbGVzJykse1xuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nLi4uPC9wPlxufSlcbmNvbnN0IE11c2ljUGxheSA9IGR5bmFtaWMoaW1wb3J0KCcuL211c2ljUGxheScpLHtcbiAgbG9hZGluZzogKCkgPT4gPHA+TG9hZGluZy4uLjwvcD5cbn0pXG5jb25zdCBBcnRpY2xlTGlzdCA9IGR5bmFtaWMoaW1wb3J0KCcuL2FydGljbGVMaXN0Jykse1xuICBsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nLi4uPC9wPlxufSlcblxuY29uc3QgSG9tZVVJID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlclwiPlxuICAgICAgICAgIDxTd2lwZXIgc2xpZGVzPXtwcm9wcy5zd2lwZXJMaXN0fSAvPlxuICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZFwiPuacgOaWsOWPkeW4gzwvaDM+XG4gICAgICAgIDxBcnRpY2xlTGlzdCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzbGlkZVwiPlxuICAgICAgICA8QXNsaWRlTm90aWNlIG5vdGljZUxpc3Q9e3Byb3BzLm5vdGljZUxpc3R9IC8+XG4gICAgICAgIDxSZWNlbnRBcnRpY2xlcyByZWNlbnRBcnRpY2xlc0xpc3Q9e3Byb3BzLnJlY2VudEFydGljbGVzTGlzdH0gLz5cbiAgICAgICAgPE11c2ljUGxheSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTAwcHggMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgICAgLmFydGljbGUge1xuICAgICAgICB3aWR0aDogODYwcHg7XG4gICAgICB9XG4gICAgICAuc3dpcGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICB9XG4gICAgICAuYXNsaWRlIHtcbiAgICAgICAgd2lkdGg6IDM2MHB4O1xuICAgICAgfVxuICAgICAgLmFydGljbGUgLmhkIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVVJOyJdfQ== */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/home/indexUI.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeUI);

/***/ })

})
//# sourceMappingURL=index.js.10ee5e741e563f42235b.hot-update.js.map