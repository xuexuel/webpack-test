/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 14:17:32
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 14:28:29
 * @FilePath: \vue-martd:\webpack\wbk-test\28.dll\webpack.dll.js
 */
// 使用dll技术，对某些库（第三方库：jquery、react、vue...)进行单独打包
// 当运行webpack时，默认查找webpack.config.js配置文件
// 需求：需要运行webpack.dll.js文件
// --> webpack --config webpack.dll.js
const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        // 最终打包生成的[name] --> jquery
        // ['jquery']  --> 要打包的库是jquery
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        // 打包的库里面向外暴露出去的内容叫什么名字
        library: '[name]_[hash]',
    },
    plugins: [
        // 打包成一个manifest.json  --> 提供和jquery映射
        new webpack.DllPlugin({
            // 映射库的暴露的内容名称
            name: '[name]_[hash]',
            // 输出文件路径
            path: resolve(__dirname, 'dll/manifest.json'),
        })
    ],
    mode: 'production'
}