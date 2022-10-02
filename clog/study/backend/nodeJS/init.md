---
icon: nodeJS
date: 2022-09-28
star: 10
category:
  - 后端
  - Node
tag:
  - 初始化框架
  - 学习笔记
---

# 初始化一个最基础的后端接口

1.安装express框架

`npm i express`

2.index.js文件（入口文件）
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('示例应用正在监听 3000 端口 !');
});
```