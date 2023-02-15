---
icon: javascript
date: 2023-02-15
category:
  - 前端
  - JS
tag:
  - bind
  - 学习笔记
---

# 手写 bind

```js
Function.prototype.myBind = function (context, ...args) {
  const fn = this;
  return function (...args2) {
    fn.apply(context, args.concat(args2));
  };
};

function say(message, other) {
  console.log(this.name, message, other);
}
const obj = {
  name: "clean",
};
//  直接调用
say("hello ", "hi ");

// myBind调用
let saytoclean = say.myBind(obj, "hello");
saytoclean("ya~~ ");
```

1.往 Function 的原型对象上添加了一个 myBind 方法，以便所有的函数可以访问的到。

2.myBind 方法接收需要绑定的 this 指向，以及参数参数列表

3.myBind 方法中的 this 指向当前调用该方法的函数

4.返回一个新的函数，该函数可以接收额外的参数列表

5.将两个参数列表通过 concat 方法连接起来

6.调用该函数后实现
