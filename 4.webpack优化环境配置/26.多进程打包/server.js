/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: liyue
 * @Date: 2020-12-23 11:53:54
 * @LastEditors: liyue
 * @LastEditTime: 2020-12-23 12:01:41
 * @FilePath: \vue-martd:\webpack\wbk-test\21.缓存\server.js
 */


// 服务器代码
// 启动服务器指令：
// nodemon server.js
// node server.js
// 访问服务器地址：http://localhost:3000

const express = require('express')

const app = express();
app.use(express.static('build', { maxAge: 1000 * 3600 }))

app.listen(3000)