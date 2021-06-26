/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 15:23:02
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-22 17:26:18
 * @FilePath: \vue-martd:\webpack\wbk-test\14.js压缩\webpack.config.js
 */

// resolve用来拼接绝对路径的方法
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // 移除空格
            collapseWhitespace: true,
            // 移除注释
            removeComments: true
        }),
    ],
    mode: 'production', // 开发模式
};
