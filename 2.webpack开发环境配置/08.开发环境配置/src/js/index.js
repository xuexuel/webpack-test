/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 19:53:19
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-22 19:35:53
 * @FilePath: \vue-martd:\webpack\wbk-test\18.HMR\src\js\index.js
 */


import print from './print'
import '../css/index.less'

print()
function add(x, y) {
    return x + y
}
console.log(add(1,2));

if(module.hot){
    module.hot.accept('./print.js',function(){

    })
}