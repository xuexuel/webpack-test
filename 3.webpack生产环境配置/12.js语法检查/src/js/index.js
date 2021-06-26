/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-22 15:58:06
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-22 16:21:08
 * @FilePath: \vue-martd:\webpack\wbk-test\12.js语法检查\src\js\index.js
 */
function add(x, y) {
  return x + y;
}

// 下一行eslint所有规则都失效（下一行不进行eslint检查）
// eslint-disable-next-line
console.log(add(2, 5));
