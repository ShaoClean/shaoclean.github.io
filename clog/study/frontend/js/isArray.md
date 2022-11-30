---
icon: javascript
date: 2022-09-28
category:
  - 前端
  - JS
tag:
  - isArray
  - 学习笔记
---
# 判断是否为数组的方式


```js
const arr = [1,2,3];

// 1.通过调用数组的`isArray`方法
Array.isArray(arr);//true

// 2.判断对象的原型对象是否是数组的原型对象
arr.__proto__ ===  Array.prototype;//true

// 3.判断对象的原型对象的构造方法是否是Array
arr.__proto__.constructor === Array;//true

// 4.同2（判断对象的原型对象是否是数组的原型对象）
arr instanceof Array;//true

// 5.
Object.prototype.toString.call(arr) === '[object Array]'l//true
```