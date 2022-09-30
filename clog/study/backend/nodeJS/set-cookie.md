---
icon: nodejs
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













