/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-22 13:37:41
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 12:55:54
 * @FilePath: \vue-martd:\webpack\wbk-test\23.code split\demo3\src\js\index.js
 */
// import { mul } from './test';

import(/*webpackChunkName:'test'*/'./test').
  then((result) => {
    // 文件加载成功
    console.log(result);
  })
  .catch(() => {
    console.log('文件加载失败');
  })



function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}



// eslint-disable-next-line
console.log(mul(2, 3));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5));
