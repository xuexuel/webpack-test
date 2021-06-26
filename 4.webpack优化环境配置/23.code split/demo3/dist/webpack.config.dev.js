"use strict";

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
 * @LastEditTime: 2020-12-23 12:43:22
 * @FilePath: \vue-martd:\webpack\wbk-test\23.code split\demo2\webpack.config.js
 */
// resolve用来拼接绝对路径的方法
var _require = require('path'),
    resolve = _require.resolve;

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    // [name]:取文件名
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
      // 移除空格
      collapseWhitespace: true,
      // 移除注释
      removeComments: true
    }
  })],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production'
};