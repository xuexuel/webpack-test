/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-22 15:58:06
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-22 17:06:43
 * @FilePath: \vue-martd:\webpack\wbk-test\13.js兼容性处理\src\js\index.js
 */
import '@babel/polyfill'

const add = (x, y) => {
  return x + y
}
console.log(add(2, 5));

const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log('定时器执行完了');
    resolve();
  }, 1000);
})

console.log(promise);
