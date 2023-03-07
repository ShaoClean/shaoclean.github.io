---
icon: javascript
date: 2023-03-05
category:
    - 前端
    - JS
tag:
    - 学习笔记
---

# 查找数组最后一个元素的方法

暂时想到 9 种：
<!-- more -->
```js
const arr = ["hi", "im", "clean"];
let lastEl;

// 1.
lastEl = arr[arr.length - 1];

// 2.
lastEl = arr.at(-1);

// 3.
lastEl = arr.slice(-1)[0];

// 4.
const copyArr = [...arr];
lastEl = copyArr.splice(-1)[0];
console.log("arr", arr);
console.log("copyArr", copyArr);

// 5.
lastEl = arr[arr.findIndex((value, index) => index === arr.length - 1)];

// 6.
lastEl = arr.find((value, index) => index === arr.length - 1);

// 7.
const copyArr = [...arr];
lastEl = copyArr.pop();
console.log("arr", arr);
console.log("copyArr", copyArr);

// 8.
const copyArr = [...arr];
lastEl = copyArr.reverse().shift();
console.log("arr", arr);
console.log("copyArr", copyArr);

// 9.
lastEl = arr.filter((value, index) => index === arr.length - 1)[0];

console.log(lastEl);
```
