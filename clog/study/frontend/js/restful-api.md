---
icon: javascript
date: 2022-12-22
category:
  - 前端
  - JS
tag:
  - restful-api
  - 学习笔记
---

# RESTFul API

REST（Representational State Transfer）Ful API  表示性状态转移接口。

它是一套API设计规范：
- 将一切数据视作资源
- 利用HTTP请求方式，描述对资源的操作（增删改查）
- 通过HTTP响应状态码，描述对资源的操作结果

期望达到的效果：

- 看URL知道是什么资源
- 看Method知道要对资源进行什么操作
- 看Response Code知道操作是否成功

Method规范：

- GET用于读取资源
- POST用于创建资源
- PUT用于更新资源
- Patch用于局部更新
- DELETE用于删除资源



Response规范：需要保持统一结构

```json
{
  code://描述状态
  data://返回数据
  message://状态描述
}
```



使用RESTFul API的好处：

- 有效降低沟通成本
- 前后端解耦更彻底
- 前端具有更多业务灵活性，后端更专注于维护一套通用的接口服务

2023-02-26：
最新理解：同一个api接口，只是通过不同的请求方法，实现增删改查
例如：
```
http://www.shaoclean.icu/users
```

使用`Get`方法来获取用户列表：
```js
fetch({
  url:http://www.shaoclean.icu/users,
  method:"GET"
})
```


使用`POST`方法来添加一个用户：
```js
fetch({
  url:http://www.shaoclean.icu/users,
  method:"POST"
})
```

使用`DELETE`方法来删除id为1的用户：
```js
fetch({
  url:http://www.shaoclean.icu/users/1,
  method:"DELETE"
})
```

使用`PATCH`方法来修改用户id为1的用户名（增量更新）：
```js
fetch({
  url:http://www.shaoclean.icu/users/1,
  method:"PATCH",
  body:{
    username:'clean'
  }
})
```
使用`PUT`方法来修改用户id为1的所有信息（全量更新）：
```js
fetch({
  url:http://www.shaoclean.icu/users/1,
  method:"PATCH",
  body:{
    username:'clean'，
    psw:'123123',
    email:'123123@qq.com',
  }
})
```
增量更新（Partial Update）：也称为局部更新或部分更新，指的是仅更新资源的一部分属性或字段。这种更新方式通常使用HTTP PATCH方法，并将仅包含更改的属性或字段的请求体发送到服务器。服务器仅更新请求中提供的属性或字段，并保留未更改的属性或字段的现有值。

全量更新（Full Update）：也称为整体更新或完全更新，指的是更新整个资源的所有属性或字段。这种更新方式通常使用HTTP PUT方法，并将包含整个资源的请求体发送到服务器。服务器用请求体中提供的值替换现有的资源值，这可能会导致任何未在请求体中包含的属性或字段被删除或重置为其默认值。