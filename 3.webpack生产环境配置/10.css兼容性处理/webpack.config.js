/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 15:23:02
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-22 15:29:21
 * @FilePath: \vue-martd:\webpack\wbk-test\10.css兼容性处理\webpack.config.js
 */

// resolve用来拼接绝对路径的方法
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 设置nodejs环境变量
process.env.NODE_ENV = 'development'

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                    // {
                    //     loader:'postcss-loader',
                    //     options:{
                    //         ident:'postcss',
                    //         plugins:()=>[
                    //             // postcss的插件
                    //             require('postcss-preset-env')()
                    //         ]
                    //     }
                    // }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件进行重命名
            filename:'css/built.css'
        })
    ],
    mode: 'development',  // 开发模式
    // devServer: {
    //     contentBase: resolve(__dirname, 'build'),
    //     compress: true,
    //     port: 3000,
    //     open: true
    // }
}




