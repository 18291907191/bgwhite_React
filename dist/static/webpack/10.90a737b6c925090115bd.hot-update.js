webpackHotUpdate(10,{

/***/ "./components/commons/backTop/index.js":
/*!*********************************************!*\
  !*** ./components/commons/backTop/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var BackTop =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BackTop, _PureComponent);

  function BackTop(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BackTop);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BackTop).call(this, props));
    _this.state = {
      show: false
    };
    _this.isShow = _this.isShow.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.backTop = _this.backTop.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BackTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.isShow);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState = function (state, callback) {
        return;
      };
    } // 点击图片回到顶部方法，加计时器是为了过渡顺滑

  }, {
    key: "backTop",
    value: function backTop() {
      var that = this;
      var timer = setInterval(function () {
        var ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;

        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    } // 为了计算距离顶部的高度，当高度大于280显示回顶部图标，小于60则隐藏

  }, {
    key: "isShow",
    value: function isShow() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = scrollTop;

      if (this.scrollTop > 280) {
        this.setState({
          show: true
        });
      } else {
        this.setState({
          show: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.backTop,
        className: "jsx-51699398" + " " + (["backtop ".concat(this.state.show ? 'show' : '')] || false)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "jsx-51699398" + " " + "iconfont"
      }, "\uE606"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "51699398"
      }, ".backtop.jsx-51699398{position:fixed;right:50px;bottom:50px;-webkit-transition:.5s;transition:.5s;-webkit-transform:transLateY(100px);-ms-transform:transLateY(100px);transform:transLateY(100px);padding:0px 10px;background-color:#45BCF9;color:#ffffff;cursor:pointer;}.backtop.jsx-51699398 i.jsx-51699398{font-size:30px;}.show.jsx-51699398{-webkit-transform:transLateY(-150px);-ms-transform:transLateY(-150px);transform:transLateY(-150px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2JhY2tUb3AvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUcwQixBQVdBLEFBR2MsZUFibEIsQUFXYixXQVZjLFlBQ0csc0NBQ2EsdUJBVzlCLHlFQVZvQixpQkFDTyx5QkFDWCxjQUNDLGVBQ2pCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2JhY2tUb3AvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQmFja1RvcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzaG93OiBmYWxzZX07XG4gICAgdGhpcy5pc1Nob3cgPSB0aGlzLmlzU2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmFja1RvcCA9IHRoaXMuYmFja1RvcC5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLHRoaXMuaXNTaG93KTtcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlID0gKHN0YXRlLGNhbGxiYWNrKSA9PiB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgfVxuICAvLyDngrnlh7vlm77niYflm57liLDpobbpg6jmlrnms5XvvIzliqDorqHml7blmajmmK/kuLrkuobov4fmuKHpobrmu5FcbiAgYmFja1RvcCAoKSB7XG4gICAgbGV0IHRoYXQgPSB0aGlzXG4gICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbGV0IGlzcGVlZCA9IE1hdGguZmxvb3IoLXRoYXQuc2Nyb2xsVG9wIC8gNSlcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHRoYXQuc2Nyb2xsVG9wICsgaXNwZWVkXG4gICAgICBpZiAodGhhdC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgIH1cbiAgICB9LCAxNilcbiAgfVxuXG4gIC8vIOS4uuS6huiuoeeul+i3neemu+mhtumDqOeahOmrmOW6pu+8jOW9k+mrmOW6puWkp+S6jjI4MOaYvuekuuWbnumhtumDqOWbvuagh++8jOWwj+S6jjYw5YiZ6ZqQ6JePXG4gIGlzU2hvdyAoKSB7XG4gICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wXG4gICAgdGhpcy5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgICBpZiAodGhpcy5zY3JvbGxUb3AgPiAyODApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93OiB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1tgYmFja3RvcCAke3RoaXMuc3RhdGUuc2hvdz8nc2hvdyc6Jyd9YF19IG9uQ2xpY2s9e3RoaXMuYmFja1RvcH0+XG4gICAgICA8aSBjbGFzc05hbWU9XCJpY29uZm9udFwiPiYjeGU2MDY7PC9pPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuYmFja3RvcCB7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAuNXM7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc0xhdGVZKDEwMHB4KTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1QkNGOTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmJhY2t0b3AgaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zaG93IHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zTGF0ZVkoLTE1MHB4KTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tUb3A7XG5cbiJdfQ== */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/backTop/index.js */"));
    }
  }]);

  return BackTop;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (BackTop);

/***/ })

})
//# sourceMappingURL=10.90a737b6c925090115bd.hot-update.js.map