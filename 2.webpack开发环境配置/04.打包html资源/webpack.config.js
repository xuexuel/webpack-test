/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-21 15:23:02
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-21 16:18:38
 * @FilePath: \vue-martd:\webpack\wbk-test\04.打包html资源\webpack.config.js
 */

 // resolve用来拼接绝对路径的方法
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    // webpack配置
    // 入口起点
    entry:'./src/index.js',
    // 输出
    output:{
        // 输出文件名
        filename:'built.js',
        // 输出路径
        // __dirname node.js的变量，代表当前文件的目录绝对路径
        path:resolve(__dirname,'build')
    },
    // loader配置
    module:{
        rules:[
            // 详细loader配置
            {
                // 匹配那些文件
                test:/\.css$/,
                // 使用哪些loader进行处理
                use:[
                    // use数组中loader执行顺序，从右到左，从下到上，依次执行
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载到js中，里面内容时样式字符串
                    'css-loader'
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css文件
                    // 需要下载less-loader和less
                    'less-loader'
                ]
            }
        ]
    },
    // plugins的配置
    plugins:[
        // 详细plugins的配置
        // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（js/css）
        // 需求：需要有结构的HTML文件
        new HtmlWebpackPlugin({
            // 复制 './src/index.html'文件
            template:'./src/index.html'
        })
    ],
    // 模式
    mode:'development',  // 开发模式
    // mode:'production'
}