/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-22 13:37:41
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-24 12:08:07
 * @FilePath: \vue-martd:\webpack\wbk-test\5.webpack配置详解\30.output\src\js\index.js
 */


// import add from './add'
import count from './count'

console.log('index.js文件加载了');

import('./add').then(({default:add})=>{
    console.log(add(1,2));
})

console.log(count(3,2));
