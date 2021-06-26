"use strict";

/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 15:23:02
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-24 13:01:16
 * @FilePath: \vue-martd:\webpack\wbk-test\5.webpack配置详解\34.optimization\webpack.config.js
 */
// resolve用来拼接绝对路径的方法
var _require = require('path'),
    resolve = _require.resolve;

var HtmlWebpackPlugin = require('html-webpack-plugin');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

var TerserWebpackPlugin = require('terser-webpack-plugin'); // 设置nodejs环境变量


process.env.NODE_ENV = 'development';
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', // 还需要在package.json中定义browserslist
      'postcss-loader']
    }]
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
  mode: 'development',
  // 解析模块的规则
  resolve: {
    // 配置解析模块路径别名：优化简写路径 缺点路径没有提示
    alias: {
      $css: resolve(__dirname, 'src/css')
    },
    // 配置省略文件路径的后缀名
    extensions: ['.js', '.json', '.jsx', '.css'],
    // 高速webpack解析模块是去找哪个目录
    modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      // 分割的chunk最小为30kb
      // 以下都是默认值，可以不写
      minSize: 30 * 1024,
      // 最大没有限制
      maxSize: 0,
      // 要提取的chunk最少被引用1次
      minChunks: 1,
      // 按需加载时并行加载的文件的最大数量
      maxAsyncRequests: 5,
      // 入口js文件最大并行请求数量
      maxInitialRequests: 3,
      // 名称连接符
      automaticNameDelimiter: '~',
      // 可以使用命名规则
      name: true,
      // 分割chunk的组
      cacheGroups: {
        // node_modules文件会被打包到vendors组的chunk中。--> vendors~xxx.js
        // 满足上面的公共规则，如：大小超过30kb，至少被引用一次
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          // 优先级
          priority: -10
        },
        "default": {
          // 要提取的chunk最少被引用2次
          minChunks: 2,
          // 优先级
          priority: -20,
          // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
          reuseExistingChunk: true
        }
      }
    },
    // 将当前模块的记录其他模块的hash单独打包一个文件 runtime
    // 解决：修改a文件导致b文件的contenthash变化
    runtimeChunk: {
      name: function name(entrypoint) {
        return "runtime-".concat(entrypoint.name);
      }
    },
    minimizer: [// 配置生产环境的压缩方案：js和css
    new TerserWebpackPlugin({
      // 开启缓存
      cache: true,
      // 开启多进程打包
      parallel: true,
      // 启动source-map
      sourceMap: true
    })]
  }
};