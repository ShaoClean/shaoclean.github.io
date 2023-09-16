---
icon: javascript
date: 2022-09-09
star: 20
category:
    - 前端
    - JS
tag:
    - 闭包
    - 学习笔记
---

# 闭包

这是 MDN 上的描述：

> 一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

即：

-   闭包是在`函数创建`时创建的，所以`函数创建就会生成闭包`；
-   定义函数不会创建闭包，只有创建/执行函数同时才创建闭包；
-   闭包和其函数在`同一上下文中`
-   闭包包含该作用域下的所有变量/引用地址

## 为什么要使用闭包

首先来说一下局部变量和全局变量的危害： 全局变量容易全局污染，局部变量又无法共享，不能长久保存

## 闭包的作用

既可以共享，长久保存，又不会全局污染，其实是用来保护局部变量的。

## 闭包的缺点

占内存因为变量被内部资源占用，而 JS 的垃圾回收机制不会回收内部函数所占的资源，从而导致内存泄漏

在全局作用域中创建的函数创建闭包，但是由于这些函数是在全局作用域中创建的，所以它们可以访问全局作用域中的所有变量，闭包的概念并不重要。当函数返回函数时，闭包的概念就变得更加重要了。返回的函数可以访问不属于全局作用域的变量，但它们仅存在于其闭包中。

## 简单实现闭包

```js
function outer() {
	let num = 10;
	function inner() {
		console.log(num);
	}
	inner();
}
outer();
```

打开谷歌浏览器的调试工具，如下图：

![image-20220909163427674](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220909163427674.png)

`outer`函数给`inner`函数提供了闭包作用域，那么`inner`函数就是闭包函数

`Closure`指的就是闭包，可以看到在`outer`的闭包作用域中存在一个变量`num`

## 形成闭包的条件

形成闭包的必要条件就是，**闭包函数(被包裹的函数)中必须要使用到外部函数中的变量**。

应用：

1.单例设计模式

2.惰性函数:函数执行的分支只会在函数第一次调用的时候执行，在第一次调用过程中，该函数会被覆盖为另一个按照合适方式执行的函数，下次执行的时候就执行覆盖后的函数

3.函数柯理化

## 2023.2.7 补充

-   闭包不一定有 return

```js
function foo() {
	const name = "clean";
	function bar() {
		console.log(b()); //clean
	}
	bar();
}
foo();
```

-   闭包不一定造成内存泄露
    setTimeOut 并不是直接的把你的回掉函数放进上述的异步队列中去，而是在定时器的时间到了之后，把回掉函数放到执行异步队列中去。
    一般来说，在函数内创建的局部变量，在函数运行结束后，是会被自动销毁的. 例子中每运行一次 test 函数，就会创建一次 data 数据，如果 getData 没有引用上层作用域的 data 变量，data 在 test 函数运行结束后，便会被销毁。getData 在创建的时候，就会随之创建一个特殊的容器，用于保存上层作用域中变量的引用。可以这么说，getData 函数创建的闭包捕获了外部的 data 变量的引用。按理说，getData 这个变量在 test 函数运行结束后，也是会被销毁的。事实也的确如此，如果没有后面的 setTimeout 的话。正因为 setTimeout 一直拿着 getData 这个函数的引用，而 getData 形成的闭包又捕获了 data 变量的引用，因此 data 数据会一直存在，并不会在 test 函数结束之后立马销毁。setTimeout 在 10s 之后会运行 getData 指向的函数，然后会释放掉函数引用，也就是说 10s 后没有变量再引用 getData 指向的函数了，那么 getData 形成的闭包也可以得到销毁，捕获的上层变量也一并得到了释放。所以例子中，getData 形成的闭包是在 10s 后被销毁的。

那为什么会有内存泄漏呢？

试想如果例子中你使用的不是 setTimeout 而是 setInterval, 那么，getData 这个函数一直在 setInterval 中被引用着，getData 形成的闭包以及闭包所捕获的变量都会一直存在，直到你 clearInterval。如果你忘记 clear 了，或者你 错误地起了多个定时器但是并不知道只 clear 了最后一个，那就产生了内存泄漏。

总之，只要没人再保存这个函数的引用了，这个函数和函数所形成的闭包也就会被一并销毁。

```js
function test() {
	var data = new Array(100000);
	var getData = function () {
		return data;
	};
	setTimeout(getData, 10000);
}
```

## 2023.9.16 例子

闭包代码的提取漏洞

```js
const o = (function () {
	const obj = {
		a: 1,
		b: 2,
	};
	return {
		get(k) {
			return obj[k];
		},
	};
})();
// 不改变o中代码的前提下，修改obj对象中的属性
```

**思路解析：**

1. 我们的目的是为了修改 obj 对象中的属性，如何修改 obj 对象中的属性呢？肯定先要拿到 obj 这个对象。

2. 已知条件是，我们可以通过 o.get 方法可以读取 obj 对象中的一个属性。

3. 思考：对象中有什么方法可以获取到对象本身吗？

4. 可以调用对象的 valueOf 方法得到对象本身

5. 所以可以 `o.get('valueOf')` 拿到 valueOf 方法，但是如果直接调用会报错，因为 this 的指向有误。可以分解为如下步骤更好理解：

```js
const v = o.get("valueOf");
v();
```

可以知道此时的 this 其实并不是指向 obj 的（此时 this 指向不明确，因为此刻的 v 只是一个 valueOf 函数）

6. 既然 this 的指向有问题，就要换另外一个思路。这时候可以想到用`Object.defineProperty`，它的 this 指向就是当前访问对象。比如：

```js
const obj = { b: 2 };
Object.defineProperty(obj, "a", {
	get() {
		console.log(this);
	},
});
obj.a; // { b: 2 }
```

7. 我们可以在`Object.prototype`上定义一个`obj`中不存在的属性`abc`，通过`o.get`方法读取`obj`中这个不存在的属性`abc`时，最终会通过原形链访问到定义在`Object.prototype`上的`abc`。并设置读取`abc`时的`getter`方法，返回我们需要的`this.valueOf()`

```js
const o = (function () {
	const obj = {
		a:1,
		b:2
	}
	return {
		get(k) {
			return obj[k];
		},
	};
})();

//在Object的原型对象上定义一个abc属性
Object.defineProperty(Object.prototype, 'abc', {
	get(){
    //实际上不一定适用valueOf，直接返回this也可以
		return this.valueOf()
	}
})
const a = o.get('abc')；
console.log(a);// { a: 1, b: 2 }

a.c = 123
console.log(o.get('c')) // 123
```
