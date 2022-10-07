---
icon: edit
date: 2022-10-07
article: true
category:
  - demo
tag:
  - session
star: 10
---
# session demo

使用之前需要安装的依赖：

- npm i express
- npm i express-session
- npm i body-parser
- npm i cors
# 完整代码
```js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')

const app = express();
app.use(session(
    {
        //一个 String 类型的字符串，作为服务器端生成 session 的签名。
        secret: "Shh, its a secret!",
        //返回客户端的 key 的名称，默认为 connect.sid,也可以自己设置。
        name:"login-status",
        //强制保存 session 即使它并没有变化。默认为 true。建议设置成 false。
        resave: false,
        //强制将未初始化的 session 存储。
        //当新建了一个 session 且未设定属性或值时，它就处于未初始化状态。
        //在设定一个 cookie 前，这对于登陆验证，减轻服务端存储压力，权限控制是有帮助的。(默 认:true)。建议手动添加。
        saveUninitialized: true,
        //设置返回到前端 key 的属性，默认值为{ path: ‘/’, httpOnly: true, secure: false, maxAge: null }。
        cookie:{
            // maxAge:3000,
            // secure:true
        },
        //在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)
        rolling:true
    }));


app.all('*', function(req, res, next){
    // 配置请求源
    res.header('Access-Control-Allow-Origin',  'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    // 允许携带验证信息
    res.header('Access-Control-Allow-Credentials',"true");
    // 允许请求方法
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS'){
        res.sendStatus(200);
    }
    else{
        next();
    }
});

//引入body-parser,否则不能获取用户端传递过来的数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/check', (req, res) => {
    console.log("loginStatus",req.session)
    if(req.session.loginStatus === "success"){
        res.send({
            code:1,
            info:"check pass!",
            session:req.session
        });
    } else {
        res.send({
            code:0,
            info:"error session!",
            session:req.session
        })
    }
});

app.post('/login',(req,res)=>{
    const {account,psw} = req.body;
    if(account === "1" && psw === "1"){
        req.session["loginStatus"] = "success"
        console.log("login success session:",req.session["loginStatus"])
        res.send({
            code:1,
            info:{
                age:18,
                name:"clean",
                money:"199w"
            },
            session:req.session
        });
    }else{
        res.send({
            code:0,
            info:"error info!",
            session:req.session
        })
    }
})

app.listen(4000,()=>{
    console.log('listening on *:4000');
})

```