---
icon: edit
date: 2022-10-08
article: true
category:
  - demo
tag:
  - upload
star: 10
---
# （单/多）文件上传demo

使用之前需要安装的依赖：

- npm i express
- npm i express-session
- npm i body-parser
- npm i cors
- npm i fs
- npm i multer


# 上传单文件
## 后端代码

```js
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require("express-session");
const login_handle = require("./loginController/login");
const fs = require('fs');


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
            maxAge:20000,
            // secure:true
        },
        //在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)
        rolling:true
    }
));
app.all('*', function(req, res, next){
    // 配置请求源
    res.header('Access-Control-Allow-Origin',  'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    // 允许携带验证信息
    res.header('Access-Control-Allow-Credentials',"true");
    // 允许请求方法
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS'){
        res.sendStatus(200)
    }
    else{
        next();
    }
});

//引入body-parser,否则不能获取用户端传递过来的数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(login_handle.checkSession)
//不用自己手动创建该文件夹，在请求的时候会自动创建
const upload = multer({dest: './assets/'});

app.get('/', (req, res) => {

});
app.get('/get-info', (req, res) => {
    res.send({
        code:1,
        info:{
            age:18,
            name:"clean",
            money:"199w"
        },
    });
});
app.get('/check', (req, res) => {
    console.log('im check')
    if(req.session.loginStatus === "success"){
        res.send({
            code:1,
            info:"check pass!",
        });
    } else {
        res.send({
            code:0,
            info:"error session!",
        })
    }
});

app.post('/login',(req,res)=>{
    const {account,psw} = req.body;
    if(account === "1" && psw === "1"){
        req.session["loginStatus"] = "success"
        res.send({
            code:1,
            info:"login success!"
        });
    }else{
        res.send({
            code:0,
            info:"error info!",
        })
    }
})

app.post('/upload',upload.single('avatar'),(req,res)=>{
    const {body,file} = req;
    console.log("file",body,'\n',file)
    //判断文件是否存在
    if(file.size){
        // 获取文件类型
        const fileNameArr = file.originalname.split('.');
        const fileType = fileNameArr[1];
        // rename的参数1: 原文件的路径和文件名(没有后缀名无法显示)
        // 		 参数2: 修改后的文件路径和文件名(有后缀名可以显示)
        // 		 参数3: 回调函数
        fs.rename("./assets/" + file.filename,"./assets/" + file.filename + "." + fileType,(err)=>{
            if (err) throw err;
            res.send({
                code:1,
                info:"upload success!",
            })
        })
    }

})


app.listen(4000,()=>{
    console.log('listening on *:4000');
})

```

## 前端代码

```vue
<script setup lang="ts">
  import axios from "axios";
  const formData = new FormData();
  axios.defaults.withCredentials = true;

  function getfile(event:any) {
    let file = event.target.files[0] || event.dataTransfer.files[0];
    console.log(file);
    formData.append("avatar",file);
    formData.append("username", "username");
    formData.append("id", "id");
    formData.append("type", "type");
  }
  function upload(){
    console.log('formData',formData)
    axios.post("http://localhost:4000/upload",formData,{
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((res) => {
      console.log('res',res)
    })
    .catch((err) => {
      console.log('err',err)
    })
  }
</script>
<template>
  <input type="file"  value=""  @change="getfile" /><br />
  <button @click="upload">上传文件</button><br/>
</template>
```

# 上传多个文件
## 后端代码
```js
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const session = require("express-session");
const login_handle = require("./loginController/login");
const fs = require('fs');


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
            maxAge:20000,
            // secure:true
        },
        //在每次请求时强行设置 cookie，这将重置 cookie 过期时间(默认:false)
        rolling:true
    }
));
app.all('*', function(req, res, next){
    // 配置请求源
    res.header('Access-Control-Allow-Origin',  'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    // 允许携带验证信息
    res.header('Access-Control-Allow-Credentials',"true");
    // 允许请求方法
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS'){
        res.sendStatus(200)
    }
    else{
        next();
    }
});

//引入body-parser,否则不能获取用户端传递过来的数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(login_handle.checkSession)

const upload = multer({dest: './assets/'});

app.get('/', (req, res) => {

});
app.get('/get-info', (req, res) => {
    res.send({
        code:1,
        info:{
            age:18,
            name:"clean",
            money:"199w"
        },
    });
});
app.get('/check', (req, res) => {
    console.log('im check')
    if(req.session.loginStatus === "success"){
        res.send({
            code:1,
            info:"check pass!",
        });
    } else {
        res.send({
            code:0,
            info:"error session!",
        })
    }
});

app.post('/login',(req,res)=>{
    const {account,psw} = req.body;
    if(account === "1" && psw === "1"){
        req.session["loginStatus"] = "success"
        res.send({
            code:1,
            info:"login success!"
        });
    }else{
        res.send({
            code:0,
            info:"error info!",
        })
    }
})

app.post('/upload',upload.single('avatar'),(req,res)=>{
    const {body,file} = req;
    console.log("file",body,'\n',file)
    //判断文件是否存在
    if(file.size){
        // 获取文件类型
        const fileNameArr = file.originalname.split('.');
        const fileType = fileNameArr[1];
        // rename的参数1: 原文件的路径和文件名(没有后缀名无法显示)
        // 		 参数2: 修改后的文件路径和文件名(有后缀名可以显示)
        // 		 参数3: 回调函数
        fs.rename("./assets/" + file.filename,"./assets/" + file.filename + "." + fileType,(err)=>{
            if (err) throw err;
            res.send({
                code:1,
                info:"upload success!",
            })
        })
    }

})
app.post('/uploads',upload.array('avatars',10),(req,res)=>{
    const {body,files} = req;
    console.log("file",body,'\n',files)
    //判断文件是否存在
    for(let file of files){
        if(file.size){
            // 获取文件类型
            const fileNameArr = file.originalname.split('.');
            const fileType = fileNameArr[1];
            // rename的参数1: 原文件的路径和文件名(没有后缀名无法显示)
            // 		 参数2: 修改后的文件路径和文件名(有后缀名可以显示)
            // 		 参数3: 回调函数
            fs.rename("./assets/" + file.filename,"./assets/" + file.filename + "." + fileType,(err)=>{
                if (err) throw err;

            })
        }
    }
    res.send({
        code:1,
        info:"upload success!",
    })
})


app.listen(4000,()=>{
    console.log('listening on *:4000');
})

```

## 前端代码
```vue
<script setup lang="ts">
  import axios from "axios";
  import {ref} from 'vue'
  const formData = new FormData();
  axios.defaults.withCredentials = true;

  const num = ref(0)
  function getfile(event:any) {
    let files = event.target.files
    for(let file of files){
      formData.append(files.length === 1 ? "avatar" : "avatars",file);
    }
    num.value = files.length
  }
  function upload(){
    console.log('formData',formData)
    axios.post("http://localhost:4000/" + (num.value === 1 ? "upload" : "uploads"),formData,{
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    .then((res) => {
      console.log('res',res)
    })
    .catch((err) => {
      console.log('err',err)
    })

    
  }
</script>
<template>
  {{num}}
  <input type="file"  value=""  @change="getfile" multiple /><br />
  <button @click="upload" >上传文件</button><br/>
</template>
```