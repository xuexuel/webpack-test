"use strict";

/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 15:23:02
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 14:46:15
 * @FilePath: \vue-martd:\webpack\wbk-test\28.dll\webpack.config.js
 */
// resolve用来拼接绝对路径的方法
var _require = require('path'),
    resolve = _require.resolve;

var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');

var AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  // plugins的配置
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  }), // 告诉webpack那些库不参与打包，同时使用时的名称也得修改。
  new webpack.DllReferencePlugin({
    manifest: resolve(__dirname, 'dll/manifest.json')
  }), // 将某个文件打包输出去，并在html中自动引入该资源
  new AddAssetHtmlWebpackPlugin({
    filepath: resolve(__dirname, 'dll/jquery.js')
  })],
  mode: 'production' // 开发模式

};