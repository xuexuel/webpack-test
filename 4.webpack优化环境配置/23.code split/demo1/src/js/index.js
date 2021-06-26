/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-22 13:37:41
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 12:34:01
 * @FilePath: \vue-martd:\webpack\wbk-test\23.code split\demo1\src\js\index.js
 */
import { mul } from './test';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
// eslint-disable-next-line
 console.log(mul(2,3));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5));
