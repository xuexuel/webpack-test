/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 19:53:19
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-22 19:48:45
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
    // 一旦module.hot为true，说明开启了HMR功能。  -->让HMR功能代码生效
    module.hot.accept('./print.js',function(){
        // 方法会监听print.js文件的变化，一旦发生变化，其他模块不会重新打包构建
        // 会执行后面的回调函数
        print()
    })
}