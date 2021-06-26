"use strict";

/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 15:23:02
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 14:05:08
 * @FilePath: \vue-martd:\webpack\wbk-test\26.多进程打包\webpack.config.js
 */
// resolve用来拼接绝对路径的方法
var _require = require('path'),
    resolve = _require.resolve;

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

var WorkboxWebpackPlugin = require('workbox-webpack-plugin'); // 设置nodejs环境变量


process.env.NODE_ENV = 'development';
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [// 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：先执行eslint在执行babel
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
      oneOf: [{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', // 还需要在package.json中定义browserslist
        'postcss-loader']
      }, {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [// 开启多进程打包
        {
          loader: 'thread-loader',
          options: {
            workers: 2 // 进程2个

          }
        }, {
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
            }]],
            // 开启babel缓存
            // 第二次构建时，会读取之前的缓存
            cacheDirectory: true
          }
        }]
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
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    // 对输出的css文件进行重命名
    filename: 'css/built.[contenthash:10].css'
  }), new OptimizeCssAssetsWebpackPlugin(), new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
      // 移除空格
      collapseWhitespace: true,
      // 移除注释
      removeComments: true
    }
  }), new WorkboxWebpackPlugin.GenerateSW({
    // 帮助serviceworker快速启动
    // 删除旧的serviceworker
    // 生成一个serviceworker配置文件
    clientsClaim: true,
    skipWaiting: true
  })],
  mode: 'production',
  devtool: 'source-map'
};