---
icon: javascript
date: 2023-02-16
category:
    - JS
tag:
    - for
    - 学习笔记
---

# for 循环

主要记录一下`for in`循环和`for of`两个循环的区别

## for in

1. 遍历数组下标和可枚举属性

```js
let arr = [1, 2, 3];
arr.hello = "im arr!";
Array.prototype.hi = "hi hi hi!";
for (let index in arr) {
	console.log(index); //0 1 2 hello hi
  console.log(typeof index)//string
}

//获取自身属性
for (let index in arr) {
  if (arr.hasOwnProperty(index)) {
    let res = arr[index];
    console.log(res); // 1 2 3 im arr!
  }
}
```

2. for in循环还可以遍历对象的键

```js
const obj ={
  name:"clean",
  age:18
}
for(let key in obj){
  console.log(key);//name age
}
```

## for of

for of遍历数组是数组元素中的值，而不能遍历到其身上其它属性的值

```js
const arr = [1,2,3]
arr.a = 123
Array.prototype.a = 123
    
for (let value of arr) {
  console.log(value)
}
//1 2 3
```

`for of`适用遍历数/数组对象/字符串/map/set等拥有迭代器对象（`iterator`）的集合，但是不能遍历对象，因为没有迭代器对象，但如果想遍历对象的属性，可以用`for in`循环或用`Object.keys()`方法

```js
let myObject={
　　a:1,
　　b:2,
　　c:3
}
for (var key of Object.keys(myObject)) {
  console.log(key + ": " + myObject[key]);
}
//a:1 b:2 c:3
```

以上是一些基本的知识点，这里主要想说一下迭代器和生成器。迭代器和生成器是ES6新增的，使用这两个新特性能够更清晰、高效、方便地实现迭代。

## 迭代器

**什么是迭代，什么是迭代器？**

“迭代”的意思是按照顺序反复多次执行一段程序，通常会有明确的终止条件。迭代会在一个有序集合上进行，集合中的所有项可以按照既定的顺序被遍历到，特别是开始和结束项有明确的定义。

了解了迭代的意思，那么就很容易理解迭代器的含义了。在我看来，迭代器就是一种实现迭代的方法，由它来帮我们实现迭代的过程。

实现`Iterable`接口（可迭代协议）要求同时具备两种能力：

- 支持迭代的自我识别能力
- 创建实现`Iterator`接口的对象的能力

在JS中，这意味着：

- 必须暴露一个属性作为`默认迭代器`。

  对于这个默认迭代器也有要求：必须引用一个`迭代器工厂函数`,调用这个工厂函数必须返回一个新迭代器。

- 这个属性必须使用`[Symbol.iterator]`作为键

**如何判断是否存在默认迭代属性？**

在JS中，检查是否存在`默认迭代器`属性，可以判断是否存在`迭代器工厂函数`：

```js
let num = 1;
let obj = {};
console.log(num[Symbol.iterator])//undefiend
console.log(obj[Symbol.iterator])//undefiend
```

以上例子说明变量num和obj不存在`默认迭代器`。

```js
let str = 'abc';
let arr = ['a','b','c'];
console.log(str[Symbol.iterator]);//ƒ [Symbol.iterator]() { [native code] }
console.log(arr[Symbol.iterator]);//ƒ values() { [native code] }

console.log(str[Symbol.iterator]());//ƒ [Symbol.iterator]() { [native code] }
console.log(arr[Symbol.iterator]());//ƒ values() { [native code] }
```

以上例子说明这些类型都实现了`迭代器工厂函数`，而调用这个工厂函数会生成一个`迭代器`。

个人理解：

>当使用能接收可迭代对象的原生语言特性时，会自动帮我们调用迭代器，来完成它内部实现的迭代操作

接收可迭代对象的原生语言特性包括：

- for of
- 数组结构
- 扩展操作符
- Array.from()
- 创建集合、映射
- Promise.all()、Promise.race()接收由期约组成的可迭代对象
- yield*操作符，在生成器中使用

实现迭代（显示实现和原生实现）：

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
  if(f === 'foo18'){
    console.log('break value',f);//foo18
    break;
  }
  console.log(f);
}

//原生实现
let a = new Array();
console.log(a[Symbol.iterator]())//Array Iterator
```



如果使用break、continue、return、throw等关键字时，来关闭迭代器执行。如果存在还没有被消费的值时，会触发迭代器工厂函数中的`return()`方法。

## 生成器

