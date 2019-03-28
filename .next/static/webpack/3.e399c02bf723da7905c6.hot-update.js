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
    className: "jsx-63072934" + " " + "article-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-63072934",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, articleData.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: +new Date() + index,
      className: "jsx-63072934",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-63072934" + " " + "img-hd",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.imgHd,
      className: "jsx-63072934",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-63072934" + " " + "cont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "jsx-63072934",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-63072934" + " " + "tag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, item.tag), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/",
      className: "jsx-63072934" + " " + "tit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, item.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-63072934" + " " + "meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-63072934",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, item.createTime), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-63072934",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\u9605\u8BFB(", item.readNumber, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-63072934",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "\u8BC4\u8BBA(", item.commentNumber, ")"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-63072934",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "\u8D5E(", item.praise, ")")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-63072934" + " " + "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, item.desc)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "63072934",
    __self: this
  }, ".article-wrap.jsx-63072934{margin-top:10px;}.article-wrap.jsx-63072934 ul.jsx-63072934 li.jsx-63072934{border:1px solid #eaeaea;padding:20px;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-backface-visibility:hidden;backface-visibility:hidden;}.article-wrap.jsx-63072934 ul.jsx-63072934 li.jsx-63072934:hover{box-shadow:0 0 10px #ccc;-webkit-animation:proRotate-jsx-63072934 1s;animation:proRotate-jsx-63072934 1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}@-webkit-keyframes proRotate{0%.jsx-63072934{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}25%.jsx-63072934{-webkit-transform:rotateY(15deg);-ms-transform:rotateY(15deg);transform:rotateY(15deg);}50%.jsx-63072934{-webkit-transform:rotateY(30deg);-ms-transform:rotateY(30deg);transform:rotateY(30deg);}75%.jsx-63072934{-webkit-transform:rotateY(15deg);-ms-transform:rotateY(15deg);transform:rotateY(15deg);}100%.jsx-63072934{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}}@-webkit-keyframes proRotate-jsx-63072934{0%{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}25%{-webkit-transform:rotateY(15deg);-ms-transform:rotateY(15deg);transform:rotateY(15deg);}50%{-webkit-transform:rotateY(30deg);-ms-transform:rotateY(30deg);transform:rotateY(30deg);}75%{-webkit-transform:rotateY(15deg);-ms-transform:rotateY(15deg);transform:rotateY(15deg);}100%{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}}@keyframes proRotate-jsx-63072934{0%{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}25%{-webkit-transform:rotateY(15deg);-ms-transform:rotateY(15deg);transform:rotateY(15deg);}50%{-webkit-transform:rotateY(30deg);-ms-transform:rotateY(30deg);transform:rotateY(30deg);}75%{-webkit-transform:rotateY(15deg);-ms-transform:rotateY(15deg);transform:rotateY(15deg);}100%{-webkit-transform:rotateY(0deg);-ms-transform:rotateY(0deg);transform:rotateY(0deg);}}.article-wrap.jsx-63072934 ul.jsx-63072934 li.jsx-63072934{border-bottom:0;}.article-wrap.jsx-63072934 ul.jsx-63072934 li.jsx-63072934:hover{background-color:#f6f6f6;}.article-wrap.jsx-63072934 ul.jsx-63072934 li.jsx-63072934 .img-hd.jsx-63072934{width:220px;height:150px;margin-right:10px;}.article-wrap.jsx-63072934 .cont.jsx-63072934{box-sizing:border-box;width:100%;}.cont.jsx-63072934 header.jsx-63072934 .tag.jsx-63072934{color:#fff;background-color:#45BCF9;padding:3px 6px;font-size:12px;display:inline-block;position:relative;margin-right:6px;-webkit-transition:color 0.25s,background-color 0.25s;transition:color 0.25s,background-color 0.25s;}header.jsx-63072934 .tag.jsx-63072934:hover{opacity:.85;}.header.jsx-63072934 .tag.jsx-63072934:after{content:'';position:absolute;top:50%;margin-top:-4px;right:-4px;display:inline-block;width:0;height:0;vertical-align:middle;border-left:4px solid #45BCF9;border-top:4px solid transparent;border-bottom:4px solid transparent;}header.jsx-63072934 .tit.jsx-63072934{display:inline-block;color:#333333;}header.jsx-63072934 .tit.jsx-63072934:hover{color:#45BCF9;}.cont.jsx-63072934 .meta.jsx-63072934{font-size:12px;color:#999999;margin:16px 0;}.meta.jsx-63072934 span.jsx-63072934{margin-right:14px;}.meta.jsx-63072934 span.jsx-63072934:last-child{float:right;}.desc.jsx-63072934{font-size:12px;color:#999;word-wrap:break-word;line-height:20px;margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9ob21lL2FydGljbGVMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EZ0IsQUFHeUIsQUFHUyxBQU9BLEFBT0MsQUFHQyxBQUdBLEFBR0EsQUFHRCxBQUtBLEFBR0MsQUFHQSxBQUdBLEFBR0QsQUFJVixBQUdTLEFBR2IsQUFLVSxBQUlYLEFBVUMsQUFHRCxBQWNVLEFBSVAsQUFHQyxBQUtHLEFBR04sQUFHRyxXQTVDVSxBQWFQLENBdEJMLEFBbUJmLEFBZ0NBLEVBWEEsQ0FHZ0IsQUFXSCxDQTlHYixBQWtEQSxFQXNEQSxHQVpnQixDQS9CSCxHQTFERSxBQU9VLEFBMkN6QixBQUlvQixDQXNERyxHQWhDYixBQXFCTSxJQXRDaEIsRUErQkEsQ0EzQmtCLENBY0EsQ0E1RUEsS0FzRGxCLEFBMkNBLElBV21CLEtBN0NGLENBY0osQ0E1RUUsVUE2RVEsQUErQkwsR0E3Q0ssYUE4Q3ZCLElBakdFLEFBWUEsQUFLQSxBQVlBLENBcUNRLEVBL0RSLEFBR0EsQUFHQSxBQVdBLEFBR0EsQUFHQSxDQTBCa0IsS0FlVCxTQUNhLEdBMUVZLENBMkRqQixpQkFDOEIsQ0FlakIsSUFoRkgsMEJBaUZNLDZCQTFFbkMsSUEyRXNDLEdBakZ0QyxpQ0FpRUEsQUFpQkEiLCJmaWxlIjoiL1ZvbHVtZXMvQk9PVENBTVAvTmV4dCtSZWFjdC9jb21wb25lbnRzL2hvbWUvYXJ0aWNsZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBhcnRpY2xlRGF0YSA9IFtcbiAge1xuICAgIGltZ0hkOiAnaHR0cHM6Ly8xMDBwaG9uZS5jbi93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wMy8xNDUwMTgyMTQwMS0yMjB4MTUwLnBuZycsXG4gICAgdGFnOiAnTm9kZS5qcycsXG4gICAgdGl0bGU6ICfnqIvluo/lkZjpq5jmlYjnjoflvIDlj5EnLFxuICAgIGNyZWF0ZVRpbWU6ICcyMDE5LTAzLTE1JyxcbiAgICByZWFkTnVtYmVyOiAnMjUnLFxuICAgIGNvbW1lbnROdW1iZXI6ICcwJyxcbiAgICBwcmFpc2U6ICc5OTknLFxuICAgIGRlc2M6ICctUmVkdWNlcnPotJ/otKPpgJrov4dzdG9yZeWBmuWTquS6m+abtOaWsO+8jC1TYWdhc+i0n+i0o+WNj+iwg+mCo+S6m+WkjeadguaIlui1t+atpeeahOaTjeS9nOOAgjEucmVkdXgtc2FnZSBkaXNwYXRjaD5yZWR1eC1zYWdh55qEYWN0aW9u57G75Z6L5LiN6IO95ZKMc2FnZeaPkOS6pOWIsHJlZHVjZXLnmoTliqjkvZznsbvlnovkuIDmoLflkKbliJnlsLHkvJrmiqXplJknXG4gIH0sXG4gIHtcbiAgICBpbWdIZDogJ2h0dHBzOi8vMTAwcGhvbmUuY24vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDMvMTQ1MDE4MjE0MDEtMjIweDE1MC5wbmcnLFxuICAgIHRhZzogJ1Z1ZS5qcycsXG4gICAgdGl0bGU6ICflj4zlkJHnu5HlrprvvIxPYnNlcnZlcixXYXRjaGVyLERlcCcsXG4gICAgY3JlYXRlVGltZTogJzIwMTktMDMtMTUnLFxuICAgIHJlYWROdW1iZXI6ICcyNScsXG4gICAgY29tbWVudE51bWJlcjogJzAnLFxuICAgIHByYWlzZTogJzk5OScsXG4gICAgZGVzYzogJy1SZWR1Y2Vyc+i0n+i0o+mAmui/h3N0b3Jl5YGa5ZOq5Lqb5pu05paw77yMLVNhZ2Fz6LSf6LSj5Y2P6LCD6YKj5Lqb5aSN5p2C5oiW6LW35q2l55qE5pON5L2c44CCMS5yZWR1eC1zYWdlIGRpc3BhdGNoPnJlZHV4LXNhZ2HnmoRhY3Rpb27nsbvlnovkuI3og73lkoxzYWdl5o+Q5Lqk5YiwcmVkdWNlcueahOWKqOS9nOexu+Wei+S4gOagt+WQpuWImeWwseS8muaKpemUmSdcbiAgfSAgXG5dXG5cbmNvbnN0IEFydGljbGVMaXN0ID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS13cmFwXCI+XG4gICAgPHVsPlxuICAgICAge1xuICAgICAgICBhcnRpY2xlRGF0YS5tYXAoKGl0ZW0saW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXsrbmV3IERhdGUoKSArIGluZGV4fT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiaW1nLWhkXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ0hkfSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250XCI+XG4gICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFnXCIgaHJlZj1cIi9cIj57aXRlbS50YWd9PC9hPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRpdFwiIGhyZWY9XCIvXCI+e2l0ZW0udGl0bGV9PC9hPlxuICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmNyZWF0ZVRpbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPumYheivuyh7aXRlbS5yZWFkTnVtYmVyfSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+6K+E6K66KHtpdGVtLmNvbW1lbnROdW1iZXJ9KTwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgPHNwYW4+6LWeKHtpdGVtLnByYWlzZX0pPC9zcGFuPiBcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+e2l0ZW0uZGVzY308L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKVxuICAgICAgfVxuICAgICAgXG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYXJ0aWNsZS13cmFwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGl7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGk6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjO1xuICAgICAgICBhbmltYXRpb246IHByb1JvdGF0ZSAxcztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTtcbiAgICAgICAgLy8gLXdlYmtpdC1hbmltYXRpb246IHByb1JvdGF0ZSAxcyBlYXNlLWluLW91dCA1MDBtcyBhbHRlcm5hdGUgbm9uZSAxO1xuICAgICAgfVxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHByb1JvdGF0ZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMjUlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTVkZWcpO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDMwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICA3NSUge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxNWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHByb1JvdGF0ZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMjUlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTVkZWcpO1xuICAgICAgICB9XG4gICAgICAgIDUwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDMwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICA3NSUge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxNWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGk6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaSAuaW1nLWhkIHtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIC5jb250IHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY29udCBoZWFkZXIgLnRhZyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVCQ0Y5O1xuICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXMsIGJhY2tncm91bmQtY29sb3IgMC4yNXM7XG4gICAgICB9XG4gICAgICBoZWFkZXIgLnRhZzpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IC44NTtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXIgLnRhZzphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgICByaWdodDogLTRweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM0NUJDRjk7XG4gICAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgICAgaGVhZGVyIC50aXQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgfVxuICAgICAgaGVhZGVyIC50aXQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzQ1QkNGOTtcbiAgICAgIH1cbiAgICAgIC5jb250IC5tZXRhIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzk5OTk5OTtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgICB9XG4gICAgICAubWV0YSBzcGFuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgICAgfVxuICAgICAgLm1ldGEgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgfVxuICAgICAgLmRlc2Mge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0OyJdfQ== */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/home/articleList.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=3.e399c02bf723da7905c6.hot-update.js.map