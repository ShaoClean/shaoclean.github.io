---
icon: javascript
date: 2023-02-03
category:
  - 前端
  - JS
tag:
  - 数组方法
  - 学习笔记
---

# 数组操作方法

## 添加元素

- push
- unshift
- splice
- concat

```js
const arr = [10, 20, 30, 40];

// 添加到数组尾部
let res1 = arr.push(50);
arr; //[10,20,30,40,50]
res1; //5

// 添加到数组头部
let res2 = arr.unshift(0);
arr; //[0,10,20,30,40,50]
res2; //6

// 添加到指定位置
let res3 = arr.splice(2, 0, 100);
arr; //[0,10,100,20,30,40,50]
res3; //[]

// concat添加
let res0 = arr.concat([5, [6]], [8]);
res0; //[0,10,100,20,30,40,50,5,[6],8]
arr; //[0,10,100,20,30,40,50]
```

## 删除元素

- shift
- pop
- splice

```js
// 删除尾部
let res4 = arr.pop();
arr; //[0,10,100,20,30,40]
res4; //50

// 删除首部
let res5 = arr.shift();
arr; //[10,100,20,30,40]
res5; //0

// 删除指定位置，指定个数
let res6 = arr.splice(1, 2);
arr; //[10,30,40]
res6; //[100,20]
```

## 修改元素

- splice

```js
let res7 = arr.splice(1, 1, 300);
arr; //[10,300,40]
res7; //30
```

## 查找元素

- indexOf
- includes
- find
- findIndex

```js
let res8 = arr.indexOf(300);
res8; //1

// 查找指定的元素是否存在
let res9 = arr.includes(2);
res9; //false

// 根据条件查找元素，返回第一个符合条件的元素
let res10 = arr.find((item, index) => item * 2 === 80);
res10; //40

// 根据条件查找元素，返回第一个符合条件的元素下标
let res11 = arr.findIndex((item, index) => item * 2 === 80);
res11; //2
```

:::tip 小结

- 普通的添加方法`push`、`unshift`会改变原数组，返回结果为新数组的长度
- `splice` 方法给数组添加元素，会改变原数组，返回结果为被删除的元素数组，所以返回一个空数组
- `concat` 方法将两个数组拼接，还可以将字符串拼接。如果传入的参数是数组，会将数组结构

`splice`方法可以接受三个参数，第一个参数是开始的下标索引，第二个参数是要删掉的个数，第三个是需要添加的元素。
`slice`方法可以接受两个参数，第一个参数是开始的下标索引，第二个参数是结束的下标索引；所以实际上在取值的时候，是不会包含在第二个参数的位置的。
:::
