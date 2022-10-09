---
icon: edit
date: 2022-10-09
article: true
category:
  - demo
tag:
  - login_handle
star: 10
---

# session登陆逻辑统一处理函数

```js
//白名单，跳过session校验
const whiteListUrl = [
    "/login"
]
//每次请求前校验session是否正确
exports.checkSession = (req,res,next) =>{
    if(whiteListUrl.indexOf(req.originalUrl) > -1){
        next()
    }else{
        console.log("request info:",req.originalUrl,req.session.loginStatus)
        if(req.session.loginStatus === "success"){
            next()
        } else {
            res.send({
                code:0,
                info:"error session!",
            })
        }
    }
}
```