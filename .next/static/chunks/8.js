(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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






var _jsxFileName = "/Volumes/BOOTCAMP/Next+React/components/commons/backTop/index.js";



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
        className: "jsx-2030924801" + " " + (["backtop ".concat(this.state.show ? 'show' : '')] || false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "jsx-2030924801" + " " + "iconfont",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\uE606"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2030924801",
        __self: this
      }, ".backtop.jsx-2030924801{position:fixed;right:50px;bottom:30px;-webkit-transition:.5s;transition:.5s;-webkit-transform:transLateY(100px);-ms-transform:transLateY(100px);transform:transLateY(100px);padding:0px 10px;background-color:#45BCF9;color:#ffffff;cursor:pointer;}.backtop.jsx-2030924801 i.jsx-2030924801{font-size:30px;}.show.jsx-2030924801{-webkit-transform:transLateY(-150px);-ms-transform:transLateY(-150px);transform:transLateY(-150px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2JhY2tUb3AvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNrQixBQUcwQixBQVdBLEFBR2MsZUFibEIsQUFXYixXQVZjLFlBQ0csc0NBQ2EsdUJBVzlCLHlFQVZvQixpQkFDTyx5QkFDWCxjQUNDLGVBQ2pCIiwiZmlsZSI6Ii9Wb2x1bWVzL0JPT1RDQU1QL05leHQrUmVhY3QvY29tcG9uZW50cy9jb21tb25zL2JhY2tUb3AvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgQmFja1RvcCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBzaG93OiBmYWxzZX07XG4gICAgdGhpcy5pc1Nob3cgPSB0aGlzLmlzU2hvdy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmFja1RvcCA9IHRoaXMuYmFja1RvcC5iaW5kKHRoaXMpO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLHRoaXMuaXNTaG93KTtcbiAgfVxuXG4gIC8vIOeCueWHu+WbvueJh+WbnuWIsOmhtumDqOaWueazle+8jOWKoOiuoeaXtuWZqOaYr+S4uuS6hui/h+a4oemhuua7kVxuICBiYWNrVG9wICgpIHtcbiAgICBsZXQgdGhhdCA9IHRoaXNcbiAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBsZXQgaXNwZWVkID0gTWF0aC5mbG9vcigtdGhhdC5zY3JvbGxUb3AgLyA1KVxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gdGhhdC5zY3JvbGxUb3AgKyBpc3BlZWRcbiAgICAgIGlmICh0aGF0LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgfVxuICAgIH0sIDE2KVxuICB9XG5cbiAgLy8g5Li65LqG6K6h566X6Led56a76aG26YOo55qE6auY5bqm77yM5b2T6auY5bqm5aSn5LqOMjgw5pi+56S65Zue6aG26YOo5Zu+5qCH77yM5bCP5LqONjDliJnpmpDol49cbiAgaXNTaG93ICgpIHtcbiAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3BcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHNjcm9sbFRvcFxuICAgIGlmICh0aGlzLnNjcm9sbFRvcCA+IDI4MCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3c6IHRydWVcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17W2BiYWNrdG9wICR7dGhpcy5zdGF0ZS5zaG93PydzaG93JzonJ31gXX0gb25DbGljaz17dGhpcy5iYWNrVG9wfT5cbiAgICAgIDxpIGNsYXNzTmFtZT1cImljb25mb250XCI+JiN4ZTYwNjs8L2k+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5iYWNrdG9wIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgYm90dG9tOiAzMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IC41cztcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zTGF0ZVkoMTAwcHgpO1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVCQ0Y5O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYmFja3RvcCBpIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNob3cge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNMYXRlWSgtMTUwcHgpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja1RvcDtcblxuIl19 */\n/*@ sourceURL=/Volumes/BOOTCAMP/Next+React/components/commons/backTop/index.js */"));
    }
  }]);

  return BackTop;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (BackTop);

/***/ })

}]);
//# sourceMappingURL=8.js.map