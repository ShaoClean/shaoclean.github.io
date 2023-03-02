---
icon: javascript
date: 2023-03-02
category:
    - 前端
    - JS
tag:
    - new
    - 学习笔记
---

# new 操作符

使用 new 操作符实例化一个新对象时主要做了以下事情：

1. 创建一个空对象

2. 将空对象的`__proto__`属性指向构造函数的`prototype`（相当于实例对象的**proto**指向构造函数的原型对象）

3. 改变构造函数的 this 指向，指向空对象

4. 返回结果。
   这里需要注意，当构造函数没有返回值或者返回值为基本数据类型时是直接返回第一步中创建的对象的。
   当构造函数返回的是一个引用数据类型的时候，返回值是引用数据类型。

下面是简单实现：
没有考虑构造函数传参的问题

```js
function myNew(Fnc) {
	const obj = {};
	obj.__proto__ = Fnc.prototype;
	let res = Fnc.call(obj);
	if (typeof res === "object" && typeof res !== null) {
		return res;
	} else {
		return obj;
	}
}

function Person() {
	this.name = "clean";
	this.age = 18;
}

let p1 = myNew(Person);
let p2 = myNew(Person);

p1.name = "scz";
p2.age = 20;
console.log("p1", p1); //p1 Person { name: 'scz', age: 18 }
console.log("p2", p2); //p2 Person { name: 'clean', age: 20 }
```
