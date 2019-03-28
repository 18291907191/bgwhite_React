webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/commons/header/store/reducer.js":
/*!****************************************************!*\
  !*** ./components/commons/header/store/reducer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./components/commons/header/store/actionTypes.js");


var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  navList: [],
  focused: 0,
  goodSentences: "没有人因为水的平淡而厌倦水，所以我们也不要因为生活的平淡而摒弃生活!"
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["INIT_NAV_LIST"]:
      return state.set('navList', action.data);

    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["SELECT_NAV_ITEM"]:
      return state.set('focused', action.data);

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.82296c085f473af79e71.hot-update.js.map