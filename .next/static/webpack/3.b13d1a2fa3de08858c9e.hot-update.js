webpackHotUpdate(3,{

/***/ "./components/home/articleList.js":
/*!****************************************!*\
  !*** ./components/home/articleList.js ***!
  \****************************************/
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
var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/home/articleList.js";



var articleData = [{
  imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
  tag: 'Node.js',
  title: '程序员高效率开发',
  createTime: '2019-03-15',
  readNumber: '25',
  commentNumber: '0',
  praise: '999',
  desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
}, {
  imgHd: 'https://100phone.cn/wp-content/uploads/2019/03/14501821401-220x150.png',
  tag: 'Vue.js',
  title: '双向绑定，Observer,Watcher,Dep',
  createTime: '2019-03-15',
  readNumber: '25',
  commentNumber: '0',
  praise: '999',
  desc: '-Reducers负责通过store做哪些更新，-Sagas负责协调那些复杂或起步的操作。1.redux-sage dispatch>redux-saga的action类型不能和sage提交到reducer的动作类型一样否则就会报错'
}];

var ArticleList = function ArticleList(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4059618667" + " " + "article-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-4059618667",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, articleData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: +new Date() + index,
      className: "jsx-4059618667",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "jsx-4059618667" + " " + "iconfont recent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "\uE673"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-4059618667" + " " + "img-hd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.imgHd,
      className: "jsx-4059618667",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-4059618667" + " " + "cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-4059618667",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-4059618667" + " " + "tag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item.tag), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-4059618667" + " " + "tit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4059618667" + " " + "meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4059618667",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, item.createTime), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4059618667",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "\u9605\u8BFB(", item.readNumber, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4059618667",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "\u8BC4\u8BBA(", item.commentNumber, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-4059618667",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "\u8D5E(", item.praise, ")")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-4059618667" + " " + "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, item.desc)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4059618667",
    __self: this
  }, ".article-wrap.jsx-4059618667 ul.jsx-4059618667 li.jsx-4059618667{border:1px solid #eaeaea;padding:20px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.5s;transition:.5s;position:relative;}.article-wrap.jsx-4059618667 ul.jsx-4059618667 li.jsx-4059618667:hover{box-shadow:0 0 10px #f0f0f0;}.article-wrap.jsx-4059618667 ul.jsx-4059618667 li.jsx-4059618667{border-bottom:0;}.article-wrap.jsx-4059618667 ul.jsx-4059618667 li.jsx-4059618667 .recent.jsx-4059618667{position:absolute;left:0;top:0;font-size:38px;color:#45BCF9;}.article-wrap.jsx-4059618667 ul.jsx-4059618667 li.jsx-4059618667:hover{background-color:#f6f6f6;}.article-wrap.jsx-4059618667 ul.jsx-4059618667 li.jsx-4059618667 .img-hd.jsx-4059618667{width:220px;height:150px;margin-right:10px;}.article-wrap.jsx-4059618667 .cont.jsx-4059618667{box-sizing:border-box;width:100%;}.cont.jsx-4059618667 header.jsx-4059618667 .tag.jsx-4059618667{color:#fff;background-color:#45BCF9;padding:3px 6px;font-size:12px;display:inline-block;position:relative;margin-right:6px;-webkit-transition:color 0.25s,background-color 0.25s;transition:color 0.25s,background-color 0.25s;}header.jsx-4059618667 .tag.jsx-4059618667:hover{opacity:.85;}.header.jsx-4059618667 .tag.jsx-4059618667:after{content:'';position:absolute;top:50%;margin-top:-4px;right:-4px;display:inline-block;width:0;height:0;vertical-align:middle;border-left:4px solid #45BCF9;border-top:4px solid transparent;border-bottom:4px solid transparent;}header.jsx-4059618667 .tit.jsx-4059618667{display:inline-block;color:#333333;}header.jsx-4059618667 .tit.jsx-4059618667:hover{color:#45BCF9;}.cont.jsx-4059618667 .meta.jsx-4059618667{font-size:12px;color:#999999;margin:16px 0;}.meta.jsx-4059618667 span.jsx-4059618667{margin-right:14px;}.meta.jsx-4059618667 span.jsx-4059618667:last-child{float:right;}.desc.jsx-4059618667{font-size:12px;color:#999;word-wrap:break-word;line-height:20px;margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9ob21lL2FydGljbGVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEZ0IsQUFHa0MsQUFTRyxBQUdaLEFBR0UsQUFPTyxBQUdiLEFBS1UsQUFJWCxBQVVDLEFBR0QsQUFjVSxBQUlQLEFBR0MsQUFLRyxBQUdOLEFBR0csV0E1Q1UsQUFhUCxDQXRCTCxBQW1CZixBQWdDQSxFQVhBLENBR2dCLEFBV0gsQ0FuRWIsRUFHUyxBQTBEVCxHQVpnQixDQS9CSCxHQTlCRSxBQWdCUCxBQU1SLEFBSW9CLENBc0RHLEVBdkV2QixDQXVDVSxBQXFCTSxFQXBEQyxFQWNqQixFQStCQSxDQTNCa0IsQ0FjQSxDQWhEQSxLQTBCbEIsQUEyQ0EsR0FwRGdCLENBK0RHLEtBN0NGLENBY0osQ0FoREUsTUFpQmYsSUFnQ3VCLEFBK0JMLEdBN0NLLGFBOEN2QixLQS9CVSxHQWRVLEtBZVQsU0FDYSxJQWZMLGlCQUM4QixDQWVqQixJQXBESCwwQkFxRE0saUNBQ0csR0FyRHJCLGlDQXFDakIsQUFpQkEsS0FyRG9CLGtCQUNwQiIsImZpbGUiOiIvVm9sdW1lcy9CT09UQ0FNUC9OZXh0K1JlYWN0L2NvbXBvbmVudHMvaG9tZS9hcnRpY2xlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IGFydGljbGVEYXRhID0gW1xuICB7XG4gICAgaW1nSGQ6ICdodHRwczovLzEwMHBob25lLmNuL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAzLzE0NTAxODIxNDAxLTIyMHgxNTAucG5nJyxcbiAgICB0YWc6ICdOb2RlLmpzJyxcbiAgICB0aXRsZTogJ+eoi+W6j+WRmOmrmOaViOeOh+W8gOWPkScsXG4gICAgY3JlYXRlVGltZTogJzIwMTktMDMtMTUnLFxuICAgIHJlYWROdW1iZXI6ICcyNScsXG4gICAgY29tbWVudE51bWJlcjogJzAnLFxuICAgIHByYWlzZTogJzk5OScsXG4gICAgZGVzYzogJy1SZWR1Y2Vyc+i0n+i0o+mAmui/h3N0b3Jl5YGa5ZOq5Lqb5pu05paw77yMLVNhZ2Fz6LSf6LSj5Y2P6LCD6YKj5Lqb5aSN5p2C5oiW6LW35q2l55qE5pON5L2c44CCMS5yZWR1eC1zYWdlIGRpc3BhdGNoPnJlZHV4LXNhZ2HnmoRhY3Rpb27nsbvlnovkuI3og73lkoxzYWdl5o+Q5Lqk5YiwcmVkdWNlcueahOWKqOS9nOexu+Wei+S4gOagt+WQpuWImeWwseS8muaKpemUmSdcbiAgfSxcbiAge1xuICAgIGltZ0hkOiAnaHR0cHM6Ly8xMDBwaG9uZS5jbi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy8xNDUwMTgyMTQwMS0yMjB4MTUwLnBuZycsXG4gICAgdGFnOiAnVnVlLmpzJyxcbiAgICB0aXRsZTogJ+WPjOWQkee7keWumu+8jE9ic2VydmVyLFdhdGNoZXIsRGVwJyxcbiAgICBjcmVhdGVUaW1lOiAnMjAxOS0wMy0xNScsXG4gICAgcmVhZE51bWJlcjogJzI1JyxcbiAgICBjb21tZW50TnVtYmVyOiAnMCcsXG4gICAgcHJhaXNlOiAnOTk5JyxcbiAgICBkZXNjOiAnLVJlZHVjZXJz6LSf6LSj6YCa6L+Hc3RvcmXlgZrlk6rkupvmm7TmlrDvvIwtU2FnYXPotJ/otKPljY/osIPpgqPkupvlpI3mnYLmiJbotbfmraXnmoTmk43kvZzjgIIxLnJlZHV4LXNhZ2UgZGlzcGF0Y2g+cmVkdXgtc2FnYeeahGFjdGlvbuexu+Wei+S4jeiDveWSjHNhZ2Xmj5DkuqTliLByZWR1Y2Vy55qE5Yqo5L2c57G75Z6L5LiA5qC35ZCm5YiZ5bCx5Lya5oql6ZSZJ1xuICB9ICBcbl1cblxuY29uc3QgQXJ0aWNsZUxpc3QgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXdyYXBcIj5cbiAgICA8dWw+XG4gICAgICB7XG4gICAgICAgIGFydGljbGVEYXRhLm1hcCgoaXRlbSxpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9eytuZXcgRGF0ZSgpICsgaW5kZXh9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbmZvbnQgcmVjZW50XCI+JiN4ZTY3Mzs8L2k+XG4gICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImltZy1oZFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWdIZH0gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiIGhyZWY9XCIvXCI+e2l0ZW0udGFnfTwvYT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRcIiBocmVmPVwiL1wiPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5jcmVhdGVUaW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7pmIXor7soe2l0ZW0ucmVhZE51bWJlcn0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPuivhOiuuih7aXRlbS5jb21tZW50TnVtYmVyfSk8L3NwYW4+IFxuICAgICAgICAgICAgICAgIDxzcGFuPui1nih7aXRlbS5wcmFpc2V9KTwvc3Bhbj4gXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPntpdGVtLmRlc2N9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIFxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGk6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjZjBmMGYwO1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpIC5yZWNlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICBjb2xvcjogIzQ1QkNGOTtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGk6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaSAuaW1nLWhkIHtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIC5jb250IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY29udCBoZWFkZXIgLnRhZyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVCQ0Y5O1xuICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMsIGJhY2tncm91bmQtY29sb3IgMC4yNXM7XG4gICAgICB9XG4gICAgICBoZWFkZXIgLnRhZzpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IC44NTtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXIgLnRhZzphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgICByaWdodDogLTRweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM0NUJDRjk7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgaGVhZGVyIC50aXQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgfVxuICAgICAgaGVhZGVyIC50aXQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzQ1QkNGOTtcbiAgICAgIH1cbiAgICAgIC5jb250IC5tZXRhIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICB9XG4gICAgICAubWV0YSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgICAgfVxuICAgICAgLm1ldGEgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLmRlc2Mge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0OyJdfQ== */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/home/articleList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=3.b13d1a2fa3de08858c9e.hot-update.js.map