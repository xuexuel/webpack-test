"use strict";

var _output;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * @LastEditTime: 2020-12-24 12:11:37
 * @FilePath: \vue-martd:\webpack\wbk-test\5.webpack配置详解\30.output\webpack.config.js
 */
// resolve用来拼接绝对路径的方法
var _require = require('path'),
    resolve = _require.resolve;

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin'); // 设置nodejs环境变量


process.env.NODE_ENV = 'development';
module.exports = {
  entry: './src/js/index.js',
  output: (_output = {
    // 文件名称（指定名称+目录）
    filename: 'js/built.js',
    // 输出文件目录（将来所有资源输出的公共目录）
    path: resolve(__dirname, 'build'),
    // 所有资源引入公共路径前缀   --> 'images/a.jpg'  --> '/images/a.jpg'
    publicPath: '/',
    // 非入口chunk名称
    chunkFilename: 'js/[name]_chunk.js',
    // 整个库向外暴露的变量名 --> 一般跟dll一起使用
    library: '[name]',
    // 变量名添加到哪个上  browser
    libraryTarget: 'window'
  }, _defineProperty(_output, "libraryTarget", 'global'), _defineProperty(_output, "libraryTarget", 'commonjs'), _output),
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', // 还需要在package.json中定义browserslist
      'postcss-loader']
    }, {
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
    }, // 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：先执行eslint在执行babel
    {
      // 在package.json中eslintConfig  -->  airbnb
      test: /\.js$/,
      exclude: /node_modules/,
      // 优先执行
      enforce: 'pre',
      loader: 'eslint-loader',
      options: {
        // 自动修复eslint错误
        fix: true
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', {
          // 按需加载
          useBuiltIns: 'usage',
          // 指定core-js版本
          corejs: {
            version: 3
          },
          // 指定兼容性做到哪个版本浏览器
          targets: {
            chrome: '60',
            firefox: '60',
            ie: '9',
            safari: '10',
            edge: '17'
          }
        }]]
      }
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 8 * 1024,
        esModule: false,
        outputPath: 'images',
        name: '[hash:10].[ext]'
      }
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      // 处理其他资源
      exclude: /\.(html|js|css|less|jpg|png|gif)/,
      loader: 'file-loader',
      options: {
        name: '[hash:10].[ext]',
        outputPath: 'media'
      }
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    // 对输出的css文件进行重命名
    filename: 'css/built.css'
  }), new OptimizeCssAssetsWebpackPlugin(), new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
      // 移除空格
      collapseWhitespace: true,
      // 移除注释
      removeComments: true
    }
  })],
  mode: 'development'
};