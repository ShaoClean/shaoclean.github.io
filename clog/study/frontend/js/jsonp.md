---
icon: javascript
date: 2022-12-22
category:
  - 前端
  - JS
tag:
  - jsonp
  - 学习笔记
---

# JSONP解决跨域

JSONP(JSON with Padding)是继绝跨域问题的古老方案。同源策略中，对标签的跨域请求限制较小。JSONP利用了这一点。

步骤：

- 准备一个回调函数
- 服务器响应时返回的是执行该函数的js代码，将需要返回的数据作为该函数的参数

跨域情况下发起AJAX请求：

前端服务在5000端口：

```html
  <button type="" onclick="request()">get</button>
  <script>
    function callback(data) {
      console.log(data);
    }

    function request() {
      fetch('http://localhost:8000/data').then((res) => {
        console.log(res);
      })
    }
  </script>
```

后端服务在8000端口：

```js
const http = require("http");


const server = http.createServer(function(req,res){

});

server.on('request',function(req,res){

	const url = req.url;
	const data = [{
	  name:'shao',
	  age:18},
	  {
	   name:'clean',
	  age:20}
	];
	if(url === '/'){
		res.end('hello world');
	}
	
	if(url === '/data'){
    //返回一个函数，函数的参数是需要传递的数据
		res.end(`callback(${JSON.stringify(data)})`); 
	}

})

server.listen(8000,function(){
  console.log("服务器运行在8000端口")
})
```

会报跨域的错误。

使用JSONP方式解决：

```html
<button type="" onclick="request()">get</button>
<script>
  function callback(data) {
    console.log(data);
  }

  function request() {
    const script = document.createElement('script');
    script.src = 'http://localhost:8000/data';
    document.body.appendChild(script);
  }
</script>
```



成功解决了之前的跨域报错，获取到数据

![image-20221222144237536](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20221222144237536.png)