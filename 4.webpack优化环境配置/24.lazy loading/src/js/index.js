/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 12:58:41
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 13:07:39
 * @FilePath: \vue-martd:\webpack\wbk-test\24.lazy loading\src\js\index.js
 */


console.log('index.js文件被加载了');

// import { mul } from './test'

document.getElementById('btn').onclick = function () {
  import(/*webpackChunkName:'test',webpackPrefetch:true*/'./test').then(({ mul }) => {
    console.log(mul(4, 5));
  })
}