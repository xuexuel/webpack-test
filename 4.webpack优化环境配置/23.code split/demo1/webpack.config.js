/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 15:23:02
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 12:38:58
 * @FilePath: \vue-martd:\webpack\wbk-test\23.code split\demo1\webpack.config.js
 */

// resolve用来拼接绝对路径的方法
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        // 多入口：有一个入口，最终输出就有一个bundle
        index:'./src/js/index.js',
        test:'./src/js/test.js'
    },
    output: {
        // [name]:取文件名
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }

        }),
    ],
    mode: 'production',
}

