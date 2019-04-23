webpackHotUpdate(6,{

/***/ "./components/home/components/articleList.js":
/*!***************************************************!*\
  !*** ./components/home/components/articleList.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






var ArticleList = function ArticleList(_ref) {
  var articleList = _ref.articleList;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3386616868" + " " + "article-wrap"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-3386616868"
  }, articleList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: +new Date() + index,
      className: "jsx-3386616868" + " " + ((articleList.toJS().length == 1 ? 'bot' : '') || "")
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
      className: "jsx-3386616868" + " " + "iconfont recent"
    }, "\uE673"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "/detail/?id=".concat(index),
      as: "/detail/".concat(index),
      className: "jsx-3386616868" + " " + "img-hd"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: item.get('imgHd'),
      className: "jsx-3386616868"
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-3386616868" + " " + "cont"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("header", {
      className: "jsx-3386616868"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "/detail",
      className: "jsx-3386616868" + " " + "tag"
    }, item.get('tag')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "/detail",
      className: "jsx-3386616868" + " " + "tit"
    }, item.get('title'))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3386616868" + " " + "meta"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-3386616868"
    }, item.get('createTime')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-3386616868"
    }, "\u9605\u8BFB(", item.get('readNumber'), ")"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-3386616868"
    }, "\u8BC4\u8BBA(", item.get('commentNumber'), ")"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-3386616868"
    }, "\u8D5E(", item.get('praise'), ")")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3386616868" + " " + "desc"
    }, item.get('desc'))));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3386616868"
  }, ".article-wrap.jsx-3386616868{min-height:280px;_height:280px;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868{padding:20px;border:1px solid #f0f0f0;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.5s;transition:.5s;position:relative;border-bottom:0;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868:hover{box-shadow:0 0 10px #f0f0f0;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.bot.jsx-3386616868{border-bottom:1px solid #f0f0f0;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868 .recent.jsx-3386616868{position:absolute;left:0;top:0;font-size:38px;color:#45BCF9;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868:hover .img-hd.jsx-3386616868 img.jsx-3386616868{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868:hover{background-color:#f6f6f6;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868 .img-hd.jsx-3386616868 img.jsx-3386616868{-webkit-transition:all .5s;transition:all .5s;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868 .img-hd.jsx-3386616868{width:220px;height:150px;margin-right:10px;}.article-wrap.jsx-3386616868 .cont.jsx-3386616868{box-sizing:border-box;width:100%;}.cont.jsx-3386616868 header.jsx-3386616868 .tag.jsx-3386616868{color:#fff;background-color:#45BCF9;padding:3px 6px;font-size:12px;display:inline-block;position:relative;margin-right:6px;-webkit-transition:color 0.25s,background-color 0.25s;transition:color 0.25s,background-color 0.25s;}header.jsx-3386616868 .tag.jsx-3386616868:hover{opacity:.85;}.header.jsx-3386616868 .tag.jsx-3386616868:after{content:'';position:absolute;top:50%;margin-top:-4px;right:-4px;display:inline-block;width:0;height:0;vertical-align:middle;border-left:4px solid #45BCF9;border-top:4px solid transparent;border-bottom:4px solid transparent;}header.jsx-3386616868 .tit.jsx-3386616868{display:inline-block;color:#333333;}header.jsx-3386616868 .tit.jsx-3386616868:hover{color:#45BCF9;}.cont.jsx-3386616868 .meta.jsx-3386616868{font-size:12px;color:#999999;margin:16px 0;}.meta.jsx-3386616868 span.jsx-3386616868{margin-right:14px;}.meta.jsx-3386616868 span.jsx-3386616868:last-child{float:right;}.desc.jsx-3386616868{font-size:12px;color:#999;word-wrap:break-word;line-height:20px;margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9ob21lL2NvbXBvbmVudHMvYXJ0aWNsZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NnQixBQUcwQixBQUlKLEFBVWUsQUFHSSxBQUdkLEFBT0ksQUFHRyxBQUdOLEFBR1AsQUFLVSxBQUlYLEFBVUMsQUFHRCxBQWNVLEFBSVAsQUFHQyxBQUtHLEFBR04sQUFHRyxXQTVDVSxBQWFQLENBdEJMLEFBbUJmLEFBZ0NBLENBbkYyQixDQXdFM0IsQ0FHZ0IsQUFXSCxFQTFGRyxDQW9CUCxBQWdFVCxHQVpnQixDQS9CSCxHQXBCTCxBQVNSLEFBT29CLENBc0RHLEVBN0V2QixDQTZDVSxBQXFCTSxFQS9FaEIsQUFxQmlCLENBTGpCLENBeUJBLEVBK0JBLENBM0JrQixDQWNBLENBdkRBLEtBaUNsQixBQTJDQSxHQTFEZ0IsQUFVaEIsQ0EyRG1CLEtBN0NGLENBY0osQ0F2REUsTUFrQmYsSUFzQ3VCLEFBK0JMLEdBN0NLLFdBckJ2QixFQW1FQSxLQS9CVSxHQWRVLEtBZVQsU0FDYSxJQWZMLGlCQUM4QixDQWVqQixJQTNESCwwQkE0RE0saUNBQ0csR0E1RHJCLGlDQTRDakIsQUFpQkEsS0E1RG9CLGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVm9sdW1lcy9CT09UQ0FNUC9OZXh0K1JlYWN0L2NvbXBvbmVudHMvaG9tZS9jb21wb25lbnRzL2FydGljbGVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQXJ0aWNsZUxpc3QgPSAoe2FydGljbGVMaXN0fSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtd3JhcFwiPlxuICAgIDx1bD5cbiAgICAgIHtcbiAgICAgICAgYXJ0aWNsZUxpc3QubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17K25ldyBEYXRlKCkgKyBpbmRleH0gY2xhc3NOYW1lPXthcnRpY2xlTGlzdC50b0pTKCkubGVuZ3RoPT0xPydib3QnOicnfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IHJlY2VudFwiPiYjeGU2NzM7PC9pPlxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvZGV0YWlsLz9pZD0ke2luZGV4fWB9IGFzPXtgL2RldGFpbC8ke2luZGV4fWB9PiAqL31cbiAgICAgICAgICAgICAgPGEgaHJlZj17YC9kZXRhaWwvP2lkPSR7aW5kZXh9YH0gYXM9e2AvZGV0YWlsLyR7aW5kZXh9YH0gY2xhc3NOYW1lPVwiaW1nLWhkXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uZ2V0KCdpbWdIZCcpfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhZ1wiIGhyZWY9XCIvZGV0YWlsXCI+e2l0ZW0uZ2V0KCd0YWcnKX08L2E+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGl0XCIgaHJlZj1cIi9kZXRhaWxcIj57aXRlbS5nZXQoJ3RpdGxlJyl9PC9hPlxuICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmdldCgnY3JlYXRlVGltZScpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7pmIXor7soe2l0ZW0uZ2V0KCdyZWFkTnVtYmVyJyl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj7or4Torrooe2l0ZW0uZ2V0KCdjb21tZW50TnVtYmVyJyl9KTwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgPHNwYW4+6LWeKHtpdGVtLmdldCgncHJhaXNlJyl9KTwvc3Bhbj4gXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGVzY1wiPntpdGVtLmdldCgnZGVzYycpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgICBcbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hcnRpY2xlLXdyYXAge1xuICAgICAgICBtaW4taGVpZ2h0OiAyODBweDtcbiAgICAgICAgX2hlaWdodDogMjgwcHg7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpe1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaTpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNmMGYwZjA7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpLmJvdCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaSAucmVjZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICAgICAgY29sb3I6ICM0NUJDRjk7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpOmhvdmVyIC5pbWctaGQgaW1nIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGk6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaSAuaW1nLWhkIGltZyB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpIC5pbWctaGQge1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgLmNvbnQge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jb250IGhlYWRlciAudGFnIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NUJDRjk7XG4gICAgICAgIHBhZGRpbmc6IDNweCA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cywgYmFja2dyb3VuZC1jb2xvciAwLjI1cztcbiAgICAgIH1cbiAgICAgIGhlYWRlciAudGFnOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogLjg1O1xuICAgICAgfVxuICAgICAgLmhlYWRlciAudGFnOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgIHJpZ2h0OiAtNHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzQ1QkNGOTtcbiAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICBoZWFkZXIgLnRpdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB9XG4gICAgICBoZWFkZXIgLnRpdDpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjNDVCQ0Y5O1xuICAgICAgfVxuICAgICAgLmNvbnQgLm1ldGEge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICAgIH1cbiAgICAgIC5tZXRhIHNwYW4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAubWV0YSBzcGFuOmxhc3QtY2hpbGQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICB9XG4gICAgICAuZGVzYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuQXJ0aWNsZUxpc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdhcnRpY2xlTGlzdCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlTGlzdDsiXX0= */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/home/components/articleList.js */"));
};

ArticleList.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('articleList');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ })

})
//# sourceMappingURL=6.d5f1c770d5df72ede9da.hot-update.js.map