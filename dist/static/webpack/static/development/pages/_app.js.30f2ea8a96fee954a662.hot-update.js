webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constans_ConstTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constans/ConstTypes */ "./constans/ConstTypes.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store */ "./store/index.js");
/* harmony import */ var _components_commons_layout_default__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/commons/layout/default */ "./components/commons/layout/default.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_16__);


















var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router,
          navList = _this$props.navList;
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-1739159435"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-1739159435"
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("title", {
        className: "jsx-1739159435"
      }, _constans_ConstTypes__WEBPACK_IMPORTED_MODULE_12__["RouterTitle"][router.pathname]), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon.ico",
        type: "image/ico",
        className: "jsx-1739159435"
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_9__["Container"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"], {
        store: _store__WEBPACK_IMPORTED_MODULE_14__["default"]
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_commons_layout_default__WEBPACK_IMPORTED_MODULE_15__["default"], {
        navList: navList
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        router: router,
        className: "jsx-1739159435" + " " + (pageProps.className != null && pageProps.className || "")
      }))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "1739159435"
      }, "@font-face{font-family:'iconfont';src:url('//at.alicdn.com/t/font_1112247_aprz252dcgn.eot');src:url('//at.alicdn.com/t/font_1112247_aprz252dcgn.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1112247_aprz252dcgn.woff2') format('woff2'), url('//at.alicdn.com/t/font_1112247_aprz252dcgn.woff') format('woff'), url('//at.alicdn.com/t/font_1112247_aprz252dcgn.ttf') format('truetype'), url('//at.alicdn.com/t/font_1112247_aprz252dcgn.svg#iconfont') format('svg');}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}html,body,#root{height:100%;}a{-webkit-text-decoration:none;text-decoration:none;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;color:#333333;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}#__next{height:100%;}.iconfont{font-family:\"iconfont\" !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRDJCLEFBZXNCLEFBU0csQUFHUyxBQUlQLEFBR0EsQUFJRSxBQUdKLEFBSUQsQUFJYyxBQUliLEFBR1csQUFTVyxTQWpEeEIsRUE4QkcsQ0FyQmYsQUFpQkEsQUFZQSxFQXRCQSxBQUdnQixFQUloQixHQXRCVyxJQXdDaUQsQ0FWNUQsQ0FHbUIsR0FoQ0YsQUFrQmpCLE1BOEJpQixRQWZqQixDQWhDZSxNQWdESyxDQXZDcEIsTUFSMEIsV0FnRFcsYUEvQ3JDLENBeUM4RSxxQkFPMUMsa0NBQ3BDLDhVQVBBIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAsIHtDb250YWluZXJ9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUm91dGVyVGl0bGUgfSBmcm9tICcuLi9jb25zdGFucy9Db25zdFR5cGVzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb25zL2xheW91dC9kZWZhdWx0JztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoeyBDb21wb25lbnQsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9XG4gICAgY29uc3QgbmF2TGlzdCA9IGF3YWl0IEF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAyL25hdl9saXN0JylcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5kYXRhLnJlc3VsdFxuICAgIH0sZXJyID0+IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH0pXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnMjQnLG5hdkxpc3QpO1xuICAgIHJldHVybiB7cGFnZVByb3BzLG5hdkxpc3R9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtDb21wb25lbnQsIHBhZ2VQcm9wcyxyb3V0ZXIsbmF2TGlzdH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICAgIDx0aXRsZT57Um91dGVyVGl0bGVbcm91dGVyLnBhdGhuYW1lXX08L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD0nc2hvcnRjdXQgaWNvbicgaHJlZj0nL3N0YXRpYy9mYXZpY29uLmljbycgdHlwZT0naW1hZ2UvaWNvJy8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8Q29udGFpbmVyPlxuXG4gICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG5cbiAgICAgICAgICAgIDxMYXlvdXQgbmF2TGlzdD17bmF2TGlzdH0+XG5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSByb3V0ZXI9e3JvdXRlcn0gLz5cblxuICAgICAgICAgICAgPC9MYXlvdXQ+XG5cbiAgICAgICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgICAgIDwvQ29udGFpbmVyPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbiAgICAgICAgICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG4gICAgICAgICAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuICAgICAgICAgIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG4gICAgICAgICAgYiwgdSwgaSwgY2VudGVyLFxuICAgICAgICAgIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG4gICAgICAgICAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG4gICAgICAgICAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG4gICAgICAgICAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuICAgICAgICAgIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG4gICAgICAgICAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG4gICAgICAgICAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG4gICAgICAgICAgaHRtbCxib2R5LCNyb290IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuICAgICAgICAgIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvbCwgdWwge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYmxvY2txdW90ZSwgcSB7XG4gICAgICAgICAgICBxdW90ZXM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxuICAgICAgICAgIHE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ2ljb25mb250JzsgIC8qIHByb2plY3QgaWQgMTExMjI0NyAqL1xuICAgICAgICAgICAgc3JjOiB1cmwoJy8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTExMjI0N19hcHJ6MjUyZGNnbi5lb3QnKTtcbiAgICAgICAgICAgIHNyYzogdXJsKCcvL2F0LmFsaWNkbi5jb20vdC9mb250XzExMTIyNDdfYXByejI1MmRjZ24uZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgICAgICAgICAgIHVybCgnLy9hdC5hbGljZG4uY29tL3QvZm9udF8xMTEyMjQ3X2FwcnoyNTJkY2duLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgICAgICAgdXJsKCcvL2F0LmFsaWNkbi5jb20vdC9mb250XzExMTIyNDdfYXByejI1MmRjZ24ud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgICAgICAgICAgdXJsKCcvL2F0LmFsaWNkbi5jb20vdC9mb250XzExMTIyNDdfYXByejI1MmRjZ24udHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICAgICAgICAgICAgdXJsKCcvL2F0LmFsaWNkbi5jb20vdC9mb250XzExMTIyNDdfYXByejI1MmRjZ24uc3ZnI2ljb25mb250JykgZm9ybWF0KCdzdmcnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmljb25mb250IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcImljb25mb250XCIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/pages/_app.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, navList;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};
                _context.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_16___default.a.get('http://localhost:3002/nav_list').then(function (res) {
                  return res.data.result;
                }, function (err) {
                  throw new Error(err);
                });

              case 4:
                navList = _context.sent;

                if (!Component.getInitialProps) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return Component.getInitialProps(ctx);

              case 8:
                pageProps = _context.sent;

              case 9:
                console.log('24', navList);
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  navList: navList
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.30f2ea8a96fee954a662.hot-update.js.map