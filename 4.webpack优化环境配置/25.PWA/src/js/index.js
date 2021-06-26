/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-22 13:37:41
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 13:53:50
 * @FilePath: \vue-martd:\webpack\wbk-test\25.PWA\src\js\index.js
 */
import { mul } from './test';
import '../css/index.css';

function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
// eslint-disable-next-line
console.log(mul(2, 3));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5));

// 注册serviceWorker
// 处理兼容性问题
if ('serviceWorker' in navigator) {
  // eslint-disable-next-line
  console.log('serviceWorker in navigator');
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(() => {
        // eslint-disable-next-line
        console.log('serviceWorker注册成功了');
      }).catch(() => {
        // eslint-disable-next-line
        console.log('serviceWorker注册失败了');
      });
  });
} else {
  // eslint-disable-next-line
  console.log('serviceWorker not in navigator');
}
