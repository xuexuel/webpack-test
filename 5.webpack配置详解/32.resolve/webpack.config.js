
/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 15:23:02
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-24 12:25:54
 * @FilePath: \vue-martd:\webpack\wbk-test\5.webpack配置详解\32.resolve\webpack.config.js
 */

// resolve用来拼接绝对路径的方法
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// 设置nodejs环境变量
process.env.NODE_ENV = 'development'

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build'),
        publicPath:'/',
       
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 还需要在package.json中定义browserslist
                    'postcss-loader'
                ]
            },
        ]
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
    mode: 'development',
    // 解析模块的规则
    resolve:{
        // 配置解析模块路径别名：优化简写路径 缺点路径没有提示
        alias:{
            $css:resolve(__dirname,'src/css'),
        },
        // 配置省略文件路径的后缀名
        extensions:['.js','.json','.jsx','.css'],
        // 高速webpack解析模块是去找哪个目录
        modules:[resolve(__dirname,'../../node_modules'),'node_modules']
    }
}

