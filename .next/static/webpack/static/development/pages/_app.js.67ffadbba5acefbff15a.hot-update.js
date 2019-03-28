webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/home/store/reducer.js":
/*!******************************************!*\
  !*** ./components/home/store/reducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  swiperList: [{
    city: 'Vue.js',
    country: 'Vue project',
    img: '/static/bg1.jpg'
  }, {
    city: 'React.js',
    img: '/static/bg2.jpg'
  }, {
    city: 'Node.js',
    img: '/static/bg3.jpg'
  }],
  focused: true,
  noticeList: [{
    cont: "React.js+Next.js搭建SSR博客系统",
    createTime: "03-16"
  }, {
    cont: "React.js+Next.js搭建SSR博客系统",
    createTime: "03-16"
  }, {
    cont: "React.js+Next.js搭建SSR博客系统",
    createTime: "03-16"
  }, {
    cont: "React.js+Next.js搭建SSR博客系统",
    createTime: "03-16"
  }],
  recentArticlesList: [{
    title: "next+React搭建SSR博客系统"
  }, {
    title: "Nuxt+Vue搭建SSR博客系统"
  }, {
    title: "Linux服务器搭建"
  }, {
    title: "小程序引入多个e-Charts图标"
  }]
}); // reducer 可以接受state，但是绝不能修改state

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
});

/***/ })

})
//# sourceMappingURL=_app.js.67ffadbba5acefbff15a.hot-update.js.map