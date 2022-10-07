---
icon: nodeJS
date: 2022-09-30
star: 10
category:
  - 后端
  - Node
tag:
  - set-cookie
  - 学习笔记
---

# set-cookie时出现的问题

1.如果正常请求，没有出现跨域的情况下，是可以实现正常的set-cookie的

2.在本地调试的时候，vue项目的服务器在5173端口。Node后端的服务器在4000端口，这个时候发起请求就会出现跨域的情况，导致cookie默认无法写入到本地中

  那么解决这个跨域的方式就是在后端服务器中使用cors中间件

- 1.安装`npm i cors`
- 2.使用 cors解决跨域`app.use(cors());`

3.此时虽然解决了跨域的问题，前端在请求的时候不会报跨域问题的错误，但是又出现新的问题，那就是无法正常的设置cookie。

  前端请求后端服务用的是axios，可以使用`axios.defaults.withCredentials = true`

  意思是允许携带身份信息，用来设置是否支持发送cookie凭证信息的字段。

  设置完毕之后会发现有报错了：

![image-20220928233734655](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220928233734655.png)

  可以理解为这是一条http协议或者CORS的规则。

  就是当request中设置了withCredentials : true,也就是请求携带了验证身份信息时

  response的Access-Control-Allow-Origin : *,（而是应该有请求身份过滤）  否则的话，请求会失败。

  这个报错看上去类似于是跨域的问题，但并不是。说白了就是后端没允许cookie过去…

  另外，Access-Control-Allow-Origin设置为*时cookie不会出现在http的请求头里，所以报错里说Access-Control-Allow-Origin不能是*也是有道理的。



> 此外还有一个问题，OPTIONS请求无法通过。
>
> 我们知道，OPTIONS请求是因为前端发送了“非简单请求”，比如Content-Type: 'application/json'
>
> 如果后端失误（或者根本不知道有OPTIONS这种请求），就有可能把OPTIONS挡住，导致无法通过。
>
> 在不修改后端的情况下，也是有办法解决这个问题的，就是调整Content-Type: 'application/x-www-form-urlencoded'
>
> 同时将传输的JSON进行一次序列化（可以用querystring进行转换），这样也能解决问题。

  后端需要配置的关键地方：

```js
app.all('*', function(req, res, next){
		// 配置请求源
    res.header('Access-Control-Allow-Origin',  'http://localhost:5173');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, ');
    // 允许携带验证信息
    res.header('Access-Control-Allow-Credentials',"true");
  	// 允许请求方法
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method === 'OPTIONS'){
        res.send(200);
    }
    else{
        next();
    }
});
```



# 2022.10.5新增

**设置session时出现的问题**

在设置session时出现了同样的报错信息，暂时无法解决，苦苦百度了一晚上无法解决，找不到适合的解决方案，非常的痛苦。

无论我怎么修改`app.all()`中的`Access-Control-Allow-Origin`配置，它都显示为`*`

# 2022.10.6新增

**解决设置session时跨域的问题**

昨天晚上苦苦思索的问题终于解决了，依旧出现跨域的原因是，将`app.use(cors())`放在了`app.all()`之后。

我是这么理解的：

`app.all()`中是配置请求头中的一些信息，其中就包括了允许跨域的信息。在这里面将`Access-Control-Allow-Origin`的值设置成指定的origin，即`http://localhost:5173`

而`app.use(cors())`也就是默认的将`Access-Control-Allow-Origin`的值设置成了通配符`*`。

所以在前端发送请求的时候，无论我怎么修改`app.all()`中的`Access-Control-Allow-Origin`配置，它都将显示为`*`。

所以解决方案是将`app.use(cors())`放在了`app.all()`之前。


**验证session出现undefined的问题**

虽然解决了跨域的问题，但是在使用`/check`接口验证session的时候，一直出现验证不通过的返回提示。

打印了一下后端的接口日志，发现根本取不到session中的值，他的值一直是undefined。

原因是前端在第一次发送请求的时候，没有设置允许携带身份信息。

看一下我之前写的：
```vue {13}
<script  setup>
import axios from "axios"
import { reactive } from 'vue';

axios.defaults.withCredentials = true;

  const logininfo = reactive({
    account:"",
    psw:""
  })

  function login(){
    //这里如果想要真正使用，需要删去withCredentials或改为true
    axios.post("http://localhost:4000/login",logininfo,{withCredentials:false})
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log('err',err)
    })
  }

  function checkSesstion(){
    axios.get("http://localhost:4000/check")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log('err',err)
    })
  }
</script>
<template>
  account:<input type="text" v-model="logininfo.account" ><br>
  psw:<input type="password" v-model="logininfo.psw"><br>
  <button @click="login">login</button>
  <button @click="checkSesstion">check session</button>
</template>
```

我在解决上一个问题的时候，虽然设置了`axios.defaults.withCredentials = true;`

但是在`/login`这个请求中单独设置了，`{withCredentials : false}`

当我把这个删除之后，就可以了

具体代码见：
 - [**一个简单的可用session代码**](../../../demo/session-demo.md)



