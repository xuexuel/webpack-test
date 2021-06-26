/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-20 21:23:07
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-21 15:55:20
 */

/*
    index.js:webpack入口起点文件
    1.运行指令：
    开发环境：webpack ./src/index.js -o ./build/built.js  --mode=development
    webpack会以 ./src/index.js 为入口文件开始打包 ，打包后输出到 ./build/built.js
    整体打包环境，是开发环境
    生产环境：webpack ./src/index.js -o ./build/built.js  --mode=production
    webpack会以 ./src/index.js 为入口文件开始打包 ，打包后输出到 ./build/built.js
    整体打包环境，是生产环境
    2.
*/
// 引入样式
import './index.css'
import './index.less'