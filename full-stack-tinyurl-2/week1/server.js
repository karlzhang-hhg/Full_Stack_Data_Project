//server.js是主程序的入口
//3种require的方法
var express = require('express');//不注明路径，就会现在node.js的核心库里找，不然就在node_modules里面找
var app = express();//实例化express，这样app就是我们的server，这样我们的server就起来了
var restRouter = require('./routes/rest');//注明路径了，我们就require我自己写的模块
var redirectRouter = require('./routes/redirect')

//Routing是指不同的请求，我用不同的方法来handle你的请求
app.use("/api/v1", restRouter);

//这里有一个:，后面跟的代表一个变量
app.use("/:shortUrl", redirectRouter);

app.listen(3000);