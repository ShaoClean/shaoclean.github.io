---
icon: javascript
date: 2023-02-16
category:
    - JS
tag:
    - 迭代器
	- 可迭代协议
    - 学习笔记
---

# 迭代器与可迭代协议

主要记录一下`for in`循环和`for of`两个循环的区别，并由此深入了解一下迭代器、可迭代协议、生成器。

## for in

1. 遍历数组下标和可枚举属性

```js
let arr = [1, 2, 3];
arr.hello = "im arr!";
Array.prototype.hi = "hi hi hi!";
for (let index in arr) {
	console.log(index); //0 1 2 hello hi
	console.log(typeof index); //string
}

//获取自身属性
for (let index in arr) {
	if (arr.hasOwnProperty(index)) {
		let res = arr[index];
		console.log(res); // 1 2 3 im arr!
	}
}
```

2. for in 循环还可以遍历对象的键

```js
const obj = {
	name: "clean",
	age: 18,
};
for (let key in obj) {
	console.log(key); //name age
}
```

## for of

for of 遍历数组是数组元素中的值，而不能遍历到其身上其它属性的值

```js
const arr = [1, 2, 3];
arr.a = 123;
Array.prototype.a = 123;

for (let value of arr) {
	console.log(value);
}
//1 2 3
```

`for of`适用遍历数/数组对象/字符串/map/set 等拥有迭代器对象（`iterator`）的集合，但是不能遍历对象，因为没有迭代器对象，但如果想遍历对象的属性，可以用`for in`循环或用`Object.keys()`方法

```js
let myObject = {
	a: 1,
	b: 2,
	c: 3,
};
for (var key of Object.keys(myObject)) {
	console.log(key + ": " + myObject[key]);
}
//a:1 b:2 c:3
```

以上是一些基本的知识点，这里主要想说一下迭代器和生成器。迭代器和生成器是 ES6 新增的，使用这两个新特性能够更清晰、高效、方便地实现迭代。

## 迭代器

### 什么是迭代，什么是迭代器？

“迭代”的意思是按照顺序反复多次执行一段程序，通常会有明确的终止条件。迭代会在一个有序集合上进行，集合中的所有项可以按照既定的顺序被遍历到，特别是开始和结束项有明确的定义。

了解了迭代的意思，那么就很容易理解迭代器的含义了。在我看来，迭代器就是一种实现迭代的方法，由它来帮我们实现迭代的过程。

#### 可迭代协议

ES6 规定，如果一个对象具有知名符号属性`Symbol.iterator`，并且属性值是一个迭代器创建函数，则该对象是可迭代的。

**可迭代协议**允许 JavaScript 对象定义或定制它们的迭代行为，实现可迭代协议(`Iterable`接口)要求同时具备两种能力：

-   支持迭代的自我识别能力
-   创建实现`Iterator`接口的对象的能力

在 JS 中，这意味着：

-   必须暴露一个属性作为`默认迭代器`。

    对于这个默认迭代器也有要求：必须引用一个`迭代器工厂函数`,调用这个工厂函数必须返回一个新迭代器。

-   这个属性必须使用`[Symbol.iterator]`作为键

**如何理解上面两点？**

当使用 for of 循环时，会调用`[Symbol.iterator]`属性（也就是上面说的`默认迭代器`)来获取`迭代器`(也就是上面所提到的新迭代器)；然后使用`迭代器`上的方法（通常是`next()`）来获取迭代的值。

转换成代码就是：

```js
const obj = {
	// 有一个知名符号属性Symbol.iterator
	// 属性值是一个迭代器创建函数
	[Symbol.iterator]() {
		// 调用这个工厂函数必须返回一个新迭代器
		return {
			// 使用迭代器上的方法next()方法来获取迭代的值
			next() {
				return {
					value: 1,
					done: false,
				};
			},
		};
	},
};
```

#### 迭代器协议

> **迭代器协议**定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。

意思就是，一个东西需要满足什么条件才能算做是迭代器。那需要满足什么条件呢？

-   迭代器是一个对象，这个对象中有三个方法，分别是：`next()`、`return()`、`throw()`；next 方法必选，其他两个方法可选。
-   这三个方法必须有返回值，返回值是一个`IteratorResult`类型的对象。这个对象包含两个值：
    -   value：调用迭代器方法后返回的值
    -   done：如果迭代器能够生成序列中的下一个值，则返回 `false` 布尔值。

### 判断默认迭代属性?

在 JS 中，检查是否存在`默认迭代器`属性，可以判断是否存在`迭代器工厂函数`：

```js
let num = 1;
let obj = {};
console.log(num[Symbol.iterator]); //undefiend
console.log(obj[Symbol.iterator]); //undefiend
```

以上例子说明变量 num 和 obj 不存在`默认迭代器`。

```js
let str = "abc";
let arr = ["a", "b", "c"];
console.log(str[Symbol.iterator]); //ƒ [Symbol.iterator]() { [native code] }
console.log(arr[Symbol.iterator]); //ƒ values() { [native code] }

console.log(str[Symbol.iterator]()); //ƒ [Symbol.iterator]() { [native code] }
console.log(arr[Symbol.iterator]()); //ƒ values() { [native code] }
```

以上例子说明这些类型都实现了`迭代器工厂函数`，而调用这个工厂函数会生成一个`迭代器`。

个人理解：

> 当使用能接收可迭代对象的原生语言特性时，会自动帮我们调用迭代器，来完成它内部实现的迭代操作

接收可迭代对象的原生语言特性包括：

-   for of
-   数组结构
-   扩展操作符
-   Array.from()
-   创建集合、映射
-   Promise.all()、Promise.race()接收由期约组成的可迭代对象
-   yield\*操作符，在生成器中使用

### 实现迭代（显示实现和原生实现）

```js
//显示实现
class Foo {
	[Symbol.iterator]() {
		let count = 0;
		return {
			next() {
				if (count <= 20) {
					count++;
					return { done: false, value: "foo" + count };
				} else {
					return { done: true, value: undefined };
				}
			},
			return() {
				console.log("提前终止迭代器");
				return { done: true };
			},
		};
	}
}
let foo = new Foo();
console.log(foo[Symbol.iterator]());

for (let f of foo) {
	if (f === "foo18") {
		console.log("break value", f); //foo18
		break;
	}
	console.log(f); //foo1 ... foo17
}

//原生实现
let a = new Array();
console.log(a[Symbol.iterator]()); //Array Iterator
```

如果使用 break、continue、return、throw 等关键字时，来关闭迭代器执行。如果存在还没有被消费的值时，会触发迭代器工厂函数中的`return()`方法。

### 思维发散

其实也可以借助迭代器的思想，实现一些比较复杂的计算。

相比于数组来说，迭代器不需要一开始就知道有多少个元素，而对于数组来说并不是。

举一个斐波那契的例子：

```js
function createFbncIterator() {
	let pre1 = 1,
		pre2 = 1;

	return {
		next() {
			const currentValue = pre1 + pre2;
			pre1 = pre2;
			pre2 = currentValue;
			return {
				value: currentValue,
				done: false,
			};
		},
	};
}

const fbncIterator = createFbncIterator();

const value = fbncIterator.next();

console.log(value);
```

### 小结

js 允许我们自定义对象的迭代方式，但定义它的迭代方式需要遵循它的规则（可迭代协议）；

这个规则（可迭代协议）规定，对象如果自定义迭代行为需要包含一个[Symbol.iterator]属性，并且调用这个属性之后需要返回一个迭代器。这个迭代器是一个对象，实现迭代器也需要遵循它的规则（迭代器协议）；

这个规则（迭代器协议）规定需要包含一个 next 方法，调用 next 方法后需要返回一个对象，来表示下一次迭代后的状态。对象中包含两个可选的值（done 和 value），value 表示下一次迭代后的值，done 表示迭代是否结束。在调用 return 和 throw 方法时，他们会告诉迭代器迭代迭代结束了。

## 生成器

JavaScript 中的生成器函数（Generator Function）是一种特殊的函数，它可以在需要的时候生成多个值，而不是像普通函数一样只返回一个值。生成器函数可以通过使用`yield`关键字来暂停函数的执行，并在需要时恢复执行状态。当生成器函数执行时，它会返回一个生成器对象，该对象可以用于逐个获取生成的值。

> 调用一个**生成器函数**并不会马上执行它里面的语句，而是返回一个这个生成器的 **迭代器** **（ [iterator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator) ）对象**。当这个迭代器的 `next()` 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现[`yield`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield)的位置为止，[`yield`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield) 后紧跟迭代器要返回的值。或者如果用的是 [`yield*`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*)（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。
>
> `next()`方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 `yield` 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 `yield` 语句，即生成器函数是否已经执行完毕并返回。

```js
function* foo() {
	yield "end1";
	yield "end2";
	yield "end3";
}

const generator = foo();
console.log(generator); //foo 的生成器

let g1 = generator.next();
console.log(g1); //{done:false,value:end1}

let g2 = generator.next();
console.log(g2); //{value: 'end2', done: false}

let gg = generator.return("early ending");
console.log(gg); //{value: 'early ending', done: true}

let g3 = generator.next();
console.log(g3); //{value: undefined, done: true}

let g4 = generator.next();
console.log(g4); //{value: undefined, done: true}
```
