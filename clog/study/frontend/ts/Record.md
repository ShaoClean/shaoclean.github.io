---
icon: typescript
date: 2022-09-11
star: 20
description: 这是一篇关于Record类型的文章
category:
  - 前端
  - Ts
tag:
  - Record
  - 学习笔记
---

# Record类型

`Record`类型用于定义一个对象的键值对类型

它接收两个泛型参数：

- key type
- value type

例如：

```ts
type Person = Record<string,number>;
const p:Person = {
  age:18,
  salary:"20k"//wrong,不能将类型“string”分配给类型“number”
} 
```



扩展：Partial 、 Required 、 Readonly、 Pick 、 Exclude 、 Extract 、 Omit类型，[点我查看详情](https://blog.csdn.net/qq_43869822/article/details/121664818)