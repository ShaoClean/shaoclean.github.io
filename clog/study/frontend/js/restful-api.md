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