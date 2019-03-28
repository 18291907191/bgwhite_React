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
    className: "jsx-14121156" + " " + "article-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-14121156",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, articleData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: +new Date() + index,
      className: "jsx-14121156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "jsx-14121156" + " " + "iconfont recent",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "\uE673"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-14121156" + " " + "img-hd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.imgHd,
      className: "jsx-14121156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-14121156" + " " + "cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-14121156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-14121156" + " " + "tag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item.tag), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-14121156" + " " + "tit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-14121156" + " " + "meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-14121156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, item.createTime), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-14121156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "\u9605\u8BFB(", item.readNumber, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-14121156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "\u8BC4\u8BBA(", item.commentNumber, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-14121156",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "\u8D5E(", item.praise, ")")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-14121156" + " " + "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, item.desc)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "14121156",
    __self: this
  }, ".article-wrap.jsx-14121156 ul.jsx-14121156 li.jsx-14121156{border:1px solid #eaeaea;padding:20px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.5s;transition:.5s;position:relative;}.article-wrap.jsx-14121156 ul.jsx-14121156 li.jsx-14121156:hover{box-shadow:0 0 10px #ccc;}.article-wrap.jsx-14121156 ul.jsx-14121156 li.jsx-14121156{border-bottom:0;}.article-wrap.jsx-14121156 ul.jsx-14121156 li.jsx-14121156 .recent.jsx-14121156{position:absolute;left:0;top:0;font-size:38px;}.article-wrap.jsx-14121156 ul.jsx-14121156 li.jsx-14121156:hover{background-color:#f6f6f6;}.article-wrap.jsx-14121156 ul.jsx-14121156 li.jsx-14121156 .img-hd.jsx-14121156{width:220px;height:150px;margin-right:10px;}.article-wrap.jsx-14121156 .cont.jsx-14121156{box-sizing:border-box;width:100%;}.cont.jsx-14121156 header.jsx-14121156 .tag.jsx-14121156{color:#fff;background-color:#45BCF9;padding:3px 6px;font-size:12px;display:inline-block;position:relative;margin-right:6px;-webkit-transition:color 0.25s,background-color 0.25s;transition:color 0.25s,background-color 0.25s;}header.jsx-14121156 .tag.jsx-14121156:hover{opacity:.85;}.header.jsx-14121156 .tag.jsx-14121156:after{content:'';position:absolute;top:50%;margin-top:-4px;right:-4px;display:inline-block;width:0;height:0;vertical-align:middle;border-left:4px solid #45BCF9;border-top:4px solid transparent;border-bottom:4px solid transparent;}header.jsx-14121156 .tit.jsx-14121156{display:inline-block;color:#333333;}header.jsx-14121156 .tit.jsx-14121156:hover{color:#45BCF9;}.cont.jsx-14121156 .meta.jsx-14121156{font-size:12px;color:#999999;margin:16px 0;}.meta.jsx-14121156 span.jsx-14121156{margin-right:14px;}.meta.jsx-14121156 span.jsx-14121156:last-child{float:right;}.desc.jsx-14121156{font-size:12px;color:#999;word-wrap:break-word;line-height:20px;margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9ob21lL2FydGljbGVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEZ0IsQUFHa0MsQUFTQSxBQUdULEFBR0UsQUFPTyxBQUdiLEFBS1UsQUFJWCxBQVVDLEFBR0QsQUFjVSxBQUlQLEFBR0MsQUFLRyxBQUdOLEFBR0csV0E1Q1UsQUFhUCxDQXRCTCxBQW1CZixBQWdDQSxFQVhBLENBR2dCLEFBV0gsQ0FuRWIsRUFHUyxBQTBEVCxHQVpnQixDQS9CSCxHQTlCRSxBQVNmLEFBT1EsQUFNUixBQUlvQixDQXNERyxHQWhDYixBQXFCTSxFQXBEQyxFQWNqQixFQStCQSxDQTNCa0IsQ0FjQSxDQWhEQSxLQTBCbEIsQUEyQ0EsR0FuREQsQUFBQyxDQThEbUIsS0E3Q0YsQ0FjSixDQWhERSxVQWlEUSxBQStCTCxHQTdDSyxhQThDdkIsS0EvQlUsR0FkVSxLQWVULFNBQ2EsSUFmTCxpQkFDOEIsQ0FlakIsSUFwREgsMEJBcURNLGlDQUNHLEdBckRyQixpQ0FxQ2pCLEFBaUJBLEtBckRvQixrQkFDcEIiLCJmaWxlIjoiL1ZvbHVtZXMvQk9PVENBTVAvTmV4dCtSZWFjdC9jb21wb25lbnRzL2hvbWUvYXJ0aWNsZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBhcnRpY2xlRGF0YSA9IFtcbiAge1xuICAgIGltZ0hkOiAnaHR0cHM6Ly8xMDBwaG9uZS5jbi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy8xNDUwMTgyMTQwMS0yMjB4MTUwLnBuZycsXG4gICAgdGFnOiAnTm9kZS5qcycsXG4gICAgdGl0bGU6ICfnqIvluo/lkZjpq5jmlYjnjoflvIDlj5EnLFxuICAgIGNyZWF0ZVRpbWU6ICcyMDE5LTAzLTE1JyxcbiAgICByZWFkTnVtYmVyOiAnMjUnLFxuICAgIGNvbW1lbnROdW1iZXI6ICcwJyxcbiAgICBwcmFpc2U6ICc5OTknLFxuICAgIGRlc2M6ICctUmVkdWNlcnPotJ/otKPpgJrov4dzdG9yZeWBmuWTquS6m+abtOaWsO+8jC1TYWdhc+i0n+i0o+WNj+iwg+mCo+S6m+WkjeadguaIlui1t+atpeeahOaTjeS9nOOAgjEucmVkdXgtc2FnZSBkaXNwYXRjaD5yZWR1eC1zYWdh55qEYWN0aW9u57G75Z6L5LiN6IO95ZKMc2FnZeaPkOS6pOWIsHJlZHVjZXLnmoTliqjkvZznsbvlnovkuIDmoLflkKbliJnlsLHkvJrmiqXplJknXG4gIH0sXG4gIHtcbiAgICBpbWdIZDogJ2h0dHBzOi8vMTAwcGhvbmUuY24vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDMvMTQ1MDE4MjE0MDEtMjIweDE1MC5wbmcnLFxuICAgIHRhZzogJ1Z1ZS5qcycsXG4gICAgdGl0bGU6ICflj4zlkJHnu5HlrprvvIxPYnNlcnZlcixXYXRjaGVyLERlcCcsXG4gICAgY3JlYXRlVGltZTogJzIwMTktMDMtMTUnLFxuICAgIHJlYWROdW1iZXI6ICcyNScsXG4gICAgY29tbWVudE51bWJlcjogJzAnLFxuICAgIHByYWlzZTogJzk5OScsXG4gICAgZGVzYzogJy1SZWR1Y2Vyc+i0n+i0o+mAmui/h3N0b3Jl5YGa5ZOq5Lqb5pu05paw77yMLVNhZ2Fz6LSf6LSj5Y2P6LCD6YKj5Lqb5aSN5p2C5oiW6LW35q2l55qE5pON5L2c44CCMS5yZWR1eC1zYWdlIGRpc3BhdGNoPnJlZHV4LXNhZ2HnmoRhY3Rpb27nsbvlnovkuI3og73lkoxzYWdl5o+Q5Lqk5YiwcmVkdWNlcueahOWKqOS9nOexu+Wei+S4gOagt+WQpuWImeWwseS8muaKpemUmSdcbiAgfSAgXG5dXG5cbmNvbnN0IEFydGljbGVMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS13cmFwXCI+XG4gICAgPHVsPlxuICAgICAge1xuICAgICAgICBhcnRpY2xlRGF0YS5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXsrbmV3IERhdGUoKSArIGluZGV4fT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IHJlY2VudFwiPiYjeGU2NzM7PC9pPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJpbWctaGRcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nSGR9IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRcIj5cbiAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIiBocmVmPVwiL1wiPntpdGVtLnRhZ308L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0XCIgaHJlZj1cIi9cIj57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXRhXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uY3JlYXRlVGltZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+6ZiF6K+7KHtpdGVtLnJlYWROdW1iZXJ9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7or4Torrooe2l0ZW0uY29tbWVudE51bWJlcn0pPC9zcGFuPiBcbiAgICAgICAgICAgICAgICA8c3Bhbj7otZ4oe2l0ZW0ucHJhaXNlfSk8L3NwYW4+IFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICBcbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGl7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2NjYztcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGkge1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaSAucmVjZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgY29sb3I6IFxuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpIC5pbWctaGQge1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgLmNvbnQge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jb250IGhlYWRlciAudGFnIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NUJDRjk7XG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cywgYmFja2dyb3VuZC1jb2xvciAwLjI1cztcbiAgICAgIH1cbiAgICAgIGhlYWRlciAudGFnOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogLjg1O1xuICAgICAgfVxuICAgICAgLmhlYWRlciAudGFnOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgIHJpZ2h0OiAtNHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzQ1QkNGOTtcbiAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICBoZWFkZXIgLnRpdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB9XG4gICAgICBoZWFkZXIgLnRpdDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjNDVCQ0Y5O1xuICAgICAgfVxuICAgICAgLmNvbnQgLm1ldGEge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgIH1cbiAgICAgIC5tZXRhIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAubWV0YSBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgICAuZGVzYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZUxpc3Q7Il19 */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/home/articleList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=3.7c0c04fd27e9e715323f.hot-update.js.map