"use strict";

var _test = require("./test");

require("../css/index.css");

/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-22 13:37:41
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 13:53:50
 * @FilePath: \vue-martd:\webpack\wbk-test\25.PWA\src\js\index.js
 */
function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (p, c) {
    return p + c;
  }, 0);
} // eslint-disable-next-line


console.log((0, _test.mul)(2, 3)); // eslint-disable-next-line

console.log(sum(1, 2, 3, 4, 5)); // 注册serviceWorker
// 处理兼容性问题

if ('serviceWorker' in navigator) {
  // eslint-disable-next-line
  console.log('serviceWorker in navigator');
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').then(function () {
      // eslint-disable-next-line
      console.log('serviceWorker注册成功了');
    })["catch"](function () {
      // eslint-disable-next-line
      console.log('serviceWorker注册失败了');
    });
  });
} else {
  // eslint-disable-next-line
  console.log('serviceWorker not in navigator');
}