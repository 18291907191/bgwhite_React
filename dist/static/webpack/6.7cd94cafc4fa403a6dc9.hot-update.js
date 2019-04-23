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
    }, "\uE673"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/detail/?id=".concat(index),
      as: "/detail/".concat(index)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-3386616868" + " " + "img-hd"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      src: item.get('imgHd'),
      className: "jsx-3386616868"
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-3386616868" + " " + "cont"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("header", {
      className: "jsx-3386616868"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/detail?id=".concat(index),
      as: "/detail/".concat(index)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-3386616868" + " " + "tag"
    }, item.get('tag'))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/detail?id=".concat(index),
      as: "/detail/".concat(index)
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-3386616868" + " " + "tit"
    }, item.get('title')))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
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
  }, ".article-wrap.jsx-3386616868{min-height:280px;_height:280px;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868{padding:20px;border:1px solid #f0f0f0;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.5s;transition:.5s;position:relative;border-bottom:0;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868:hover{box-shadow:0 0 10px #f0f0f0;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.bot.jsx-3386616868{border-bottom:1px solid #f0f0f0;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868 .recent.jsx-3386616868{position:absolute;left:0;top:0;font-size:38px;color:#45BCF9;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868:hover .img-hd.jsx-3386616868 img.jsx-3386616868{-webkit-transform:scale(1.02);-ms-transform:scale(1.02);transform:scale(1.02);}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868:hover{background-color:#f6f6f6;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868 .img-hd.jsx-3386616868 img.jsx-3386616868{-webkit-transition:all .5s;transition:all .5s;}.article-wrap.jsx-3386616868 ul.jsx-3386616868 li.jsx-3386616868 .img-hd.jsx-3386616868{width:220px;height:150px;margin-right:10px;}.article-wrap.jsx-3386616868 .cont.jsx-3386616868{box-sizing:border-box;width:100%;}.cont.jsx-3386616868 header.jsx-3386616868 .tag.jsx-3386616868{color:#fff;background-color:#45BCF9;padding:3px 6px;font-size:12px;display:inline-block;position:relative;margin-right:6px;-webkit-transition:color 0.25s,background-color 0.25s;transition:color 0.25s,background-color 0.25s;}header.jsx-3386616868 .tag.jsx-3386616868:hover{opacity:.85;}.header.jsx-3386616868 .tag.jsx-3386616868:after{content:'';position:absolute;top:50%;margin-top:-4px;right:-4px;display:inline-block;width:0;height:0;vertical-align:middle;border-left:4px solid #45BCF9;border-top:4px solid transparent;border-bottom:4px solid transparent;}header.jsx-3386616868 .tit.jsx-3386616868{display:inline-block;color:#333333;}header.jsx-3386616868 .tit.jsx-3386616868:hover{color:#45BCF9;}.cont.jsx-3386616868 .meta.jsx-3386616868{font-size:12px;color:#999999;margin:16px 0;}.meta.jsx-3386616868 span.jsx-3386616868{margin-right:14px;}.meta.jsx-3386616868 span.jsx-3386616868:last-child{float:right;}.desc.jsx-3386616868{font-size:12px;color:#999;word-wrap:break-word;line-height:20px;margin-bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9ob21lL2NvbXBvbmVudHMvYXJ0aWNsZUxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NnQixBQUcwQixBQUlKLEFBVWUsQUFHSSxBQUdkLEFBT0ksQUFHRyxBQUdOLEFBR1AsQUFLVSxBQUlYLEFBVUMsQUFHRCxBQWNVLEFBSVAsQUFHQyxBQUtHLEFBR04sQUFHRyxXQTVDVSxBQWFQLENBdEJMLEFBbUJmLEFBZ0NBLENBbkYyQixDQXdFM0IsQ0FHZ0IsQUFXSCxFQTFGRyxDQW9CUCxBQWdFVCxHQVpnQixDQS9CSCxHQXBCTCxBQVNSLEFBT29CLENBc0RHLEVBN0V2QixDQTZDVSxBQXFCTSxFQS9FaEIsQUFxQmlCLENBTGpCLENBeUJBLEVBK0JBLENBM0JrQixDQWNBLENBdkRBLEtBaUNsQixBQTJDQSxHQTFEZ0IsQUFVaEIsQ0EyRG1CLEtBN0NGLENBY0osQ0F2REUsTUFrQmYsSUFzQ3VCLEFBK0JMLEdBN0NLLFdBckJ2QixFQW1FQSxLQS9CVSxHQWRVLEtBZVQsU0FDYSxJQWZMLGlCQUM4QixDQWVqQixJQTNESCwwQkE0RE0saUNBQ0csR0E1RHJCLGlDQTRDakIsQUFpQkEsS0E1RG9CLGtCQUNGLGdCQUNsQiIsImZpbGUiOiIvVm9sdW1lcy9CT09UQ0FNUC9OZXh0K1JlYWN0L2NvbXBvbmVudHMvaG9tZS9jb21wb25lbnRzL2FydGljbGVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgQXJ0aWNsZUxpc3QgPSAoe2FydGljbGVMaXN0fSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtd3JhcFwiPlxuICAgIDx1bD5cbiAgICAgIHtcbiAgICAgICAgYXJ0aWNsZUxpc3QubWFwKChpdGVtLGluZGV4KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17K25ldyBEYXRlKCkgKyBpbmRleH0gY2xhc3NOYW1lPXthcnRpY2xlTGlzdC50b0pTKCkubGVuZ3RoPT0xPydib3QnOicnfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250IHJlY2VudFwiPiYjeGU2NzM7PC9pPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwvP2lkPSR7aW5kZXh9YH0gYXM9e2AvZGV0YWlsLyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxhICBjbGFzc05hbWU9XCJpbWctaGRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5nZXQoJ2ltZ0hkJyl9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udFwiPlxuICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsP2lkPSR7aW5kZXh9YH0gYXM9e2AvZGV0YWlsLyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWdcIiA+e2l0ZW0uZ2V0KCd0YWcnKX08L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZGV0YWlsP2lkPSR7aW5kZXh9YH0gYXM9e2AvZGV0YWlsLyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0aXRcIiA+e2l0ZW0uZ2V0KCd0aXRsZScpfTwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZXRhXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uZ2V0KCdjcmVhdGVUaW1lJyl9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPumYheivuyh7aXRlbS5nZXQoJ3JlYWROdW1iZXInKX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPuivhOiuuih7aXRlbS5nZXQoJ2NvbW1lbnROdW1iZXInKX0pPC9zcGFuPiBcbiAgICAgICAgICAgICAgICA8c3Bhbj7otZ4oe2l0ZW0uZ2V0KCdwcmFpc2UnKX0pPC9zcGFuPiBcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+e2l0ZW0uZ2V0KCdkZXNjJyl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICAgIFxuICAgIDwvdWw+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmFydGljbGUtd3JhcCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICAgICAgICBfaGVpZ2h0OiAyODBweDtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGl7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpOmhvdmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2YwZjBmMDtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGkuYm90IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpIC5yZWNlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgZm9udC1zaXplOiAzOHB4O1xuICAgICAgICBjb2xvcjogIzQ1QkNGOTtcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGk6aG92ZXIgLmltZy1oZCBpbWcge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCB1bCBsaTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gICAgICB9XG4gICAgICAuYXJ0aWNsZS13cmFwIHVsIGxpIC5pbWctaGQgaW1nIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICAgIH1cbiAgICAgIC5hcnRpY2xlLXdyYXAgdWwgbGkgLmltZy1oZCB7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgICAgLmFydGljbGUtd3JhcCAuY29udCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmNvbnQgaGVhZGVyIC50YWcge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1QkNGOTtcbiAgICAgICAgcGFkZGluZzogM3B4IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzO1xuICAgICAgfVxuICAgICAgaGVhZGVyIC50YWc6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAuODU7XG4gICAgICB9XG4gICAgICAuaGVhZGVyIC50YWc6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICAgICAgcmlnaHQ6IC00cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNDVCQ0Y5O1xuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgIGhlYWRlciAudGl0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIH1cbiAgICAgIGhlYWRlciAudGl0OmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICM0NUJDRjk7XG4gICAgICB9XG4gICAgICAuY29udCAubWV0YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM5OTk5OTk7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgfVxuICAgICAgLm1ldGEgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgICAgIH1cbiAgICAgIC5tZXRhIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICAgIC5kZXNjIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5BcnRpY2xlTGlzdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYygpID0+IHtcbiAgY29uc29sZS5sb2coJ2FydGljbGVMaXN0Jyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0OyJdfQ== */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/home/components/articleList.js */"));
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
//# sourceMappingURL=6.7cd94cafc4fa403a6dc9.hot-update.js.map