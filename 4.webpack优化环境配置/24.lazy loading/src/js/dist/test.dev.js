"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul = mul;
exports.count = count;

/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 12:21:07
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 13:00:23
 * @FilePath: \vue-martd:\webpack\wbk-test\24.lazy loading\src\js\test.js
 */
console.log('test.js文件被加载了');

function mul(x, y) {
  return x * y;
}

function count(x, y) {
  return x - y;
}