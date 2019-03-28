webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ "./store/reducer.js");

// /redux/store.js


 // import rootSaga from './saga';

var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_2__["default"])();

var bindMiddleware = function bindMiddleware(middleware) {
  if (true) {
    var _require = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js"),
        composeWithDevTools = _require.composeWithDevTools; // 开发模式打印redux信息


    var _require2 = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js"),
        logger = _require2.logger;

    middleware.push(logger);
    return composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(middleware)));
  }

  return redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(middleware));
};

var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_3__["default"], bindMiddleware([sagaMiddleware]));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

})
//# sourceMappingURL=_app.js.0d50b078360b5c037117.hot-update.js.map