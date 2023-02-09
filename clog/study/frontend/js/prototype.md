---
icon: javascript
date: 2023-02-09
category:
  - 前端
  - JS
tag:
  - 原型
  - 学习笔记
---

# 原型

js 是一门基于原型的语言，也就是说每一个对象（除了 null）都有原型。

当一个对象尝试访问自身的属性时，先会在自身上查找是否存在该属性；如果不存在，则会往该对象的原型对象上找是否存在；如果还是不存在，则会继续往该原型对象的原型对象上继续找，直到找到该属性或者到达原型链的顶端才结束查找。

现在有两个基本结论：

- 每一个函数都有一个属性：`prototype`，也就是原型对象
- 每一个实例都有一个属性：`__proto__`,该属性指向该实例的构造函数的原型对象

有下面一段代码：

```js
function Person(name) {
  this.name = name;
  this.age = 18;
  this.sayName = function () {
    console.log(this.name);
  };
}
// 第二步 创建实例
const person = new Person("person");
```

> 每一个实例都有一个属性：`__proto__`,该属性指向该实例的构造函数的原型对象

```js
person.__proto__ === Person.prototype; //true
```

> 构造函数是一个函数对象，是通过 Function 构造器产生的

```js
Person.__proto__ === Function.prototype; //true
```

> 原型对象本身是一个普通对象，而普通对象的构造函数都是 Object

```js
Person.prototype.__proto__ === Object.prototype; //true
```

> 所有的构造器都是函数对象，函数对象都是 Function 构造产生的
> 同理可得，Function 的构造函数，也是由 Function 产生的

```js
Object.__proto__ === Function.prototype; //true
Function.__proto__ === Function.prototype;
```

> Object 的原型对象也有**proto**属性指向 null，null 是原型链的顶端

```js
Object.prototype.__proto__ === null; //true
```

