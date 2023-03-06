---
icon: javascript
date: 2023-03-06
category:
    - 前端
    - JS
tag:
    - 学习笔记
---

# 数据类型转换规则

## 原始数据类型 + 对象类型

需要把对象类型转换成原始数据类型：

## 对象类型 + 对象类型

需要把两个对象类型转换成原始数据类型

## 原始数据类型 == 比较时

-   string number boolean 三者两两比较时全部转换为 number 类型再比较

-   null undefined 其中之一 和 string number boolean 其中之一比较时 返回 false

-   null 和 undefined 比较时返回 true

## 原始数据类型和对象 == 比较时

先调用对象数据类型的 `[Symbol.toPrimitive]` 方法

如果没定义，则先调用对象的 `valueOf()`方法

如果调用 `valueOf()`方法后返回对象类型，则继续调用 `toString()`方法

<p style="color:red;">显式类型转换到 string 类型，是先 toString() 然后 `valueOf()`, 转换到 number 类型是先 `valueOf()` 然后 `toString()`, 隐式类型转换 to primitive 总是先 `valueOf()`, 然后 `toString()`</p>

## 显示类型转换

即调用 `Number()`、`String()`、`Boolean()`函数时

-   转换成 string 类型 先调用 `toString()`方法 后调用 `valueOf()`方法

-   转换成 number 类型 先调用 `valueOf()`方法 后调用 `toString()`方法

-   对象类型转换成原始数据类型,先调用对象类型的`valueOf()`方法，如果`valueOf()`方法返回原始数据类型就结束转换并返回该值；

如果`valueOf()`方法返回引用数据类型则调用`toString()`方法

```js
let arr = [];

arr.toString = function () {
	console.log("toString");
	return "";
};

arr.valueOf = function () {
	console.log("valueOf");
	return arr;
};

console.log("res", +arr);
//valueOf
//toString
//res 0
```

注意:

调用`toString()`方法并不是对`valueOf()`方法的返回值调用，而是一开始的原始数据类型

```js
let arr = [];

// arr.toString = function () {
// 	console.log("toString");
// 	return "";
// };

arr.valueOf = function () {
	console.log("valueOf");
	return arr;
};

console.log("res", +arr);
//valueOf
//res 0
```

## 举例

例子 1：

```js
let exp = ([][[]] + [])[+!![]] + ([] + {})[+!![] + +!![]];
```

1.`([][]]+[])`部分
先去除掉括号变成 ==》 `[][[]]+[]`

再看这一部分：`[][[]]`

本质上是从一个空数组中取出指定下标元素的值；

而`[[]]`部分，分为外层的`[]`和内层的`[]`;

在取数组中的值时，外面的`[]`要求它里面为一个数值；

所以里面的一对`[]`会进行隐式类型转换，`[]`先调用`valueOf()`方法，返回值为`[]`，继续调用`toString()`方法，返回值为 `''`;`''`转换成数值为`0`

所以`[][[]]`这一部分就变成了`[][0]`,那么空数组的下标为 `0` 的元素并没有定义，返回 `undefined`

然后`[][]]+[]`变成 `undefined + []`

这时候用上规则：原始数据类型 + 对象数据类型 =》对象数据类型转换成原始数据类型

`[]`转成原始数据类型先调用`valueOf()`方法，返回值为`[]`，继续调用`toString()`方法，返回值为 `''`

也就是`undefined + ''`

最后这一部分的值为 `'undefined'`

2.`[+!![]]`部分

这一部分相对比较好理解

`!![]`将`[]`转换成布偶类型，而对象的布偶值为`true`,也就是`+true`

`+true`就是将布偶值转换成数值类型，也就是 1

3.`([] + {})`部分

触发规则：对象类型 + 对象类型 =》 把两个对象类型的数据转换成原始数据类型

`[]`先调用`valueOf()`方法，返回`[]`，继续调用`toString()`方法返回`''`;

`{}`调用`toString()`方法变成`[object Object]`;

所以这一部分的结果是`[object Object]`

需要注意的是:

这一部分不能忽略掉`()`的存在，只有`()`在才算是一个表达式;否则会出现不同的结果

`[] + {}`的值依然是`[object Object]`

但是`{} + []`的值是`0`,由于没有括号的存在,`{}`被当成了一个语句块，而这个语句块没有任何代码;

`+[]`的结果是`0`;

所以结合上面 3 步，表达式变成了:

```js
exp = "undefined"[1] + "[object Object]"[2];
exp = "n" + "b";
exp = "nb";
```

例子 2：

```js
console.log(0 == ""); //true
console.log(0 == "0"); //true
console.log(2 == true); //false
console.log(2 == false); //false
console.log(false == "false"); //false
console.log(false == "0"); //true
console.log(false == undefined); //false
console.log(false == null); //true wrong!  结果为false  null或者undefined和string number boolean比较都是false
console.log(null == undefined); //true
console.log(" \t\r\n " == 0); //true
```

例子 3：

变量`a`为何值时输出`true`?

```js
let a;
console.log(a == 1 && a == 2 && a == 3); //true
```

很显然 a 不为原始数据类型，只能为对象类型的数据时发生类型转换才能实现

```js
a = {
	value: 1,
	valueOf() {
		return this.value++;
	},
};
```
