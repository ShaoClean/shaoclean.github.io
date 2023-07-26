---
icon: nodeJS
date: 2023-07-26
category:
  - 后端
  - Node
tag:
  - 模块化细节
  - 学习笔记
---

# node模块化

## 1.模块的查找

### 绝对路径
require中可以写绝对路径，可以根据绝对路径直接加载模块。
其它写法的路径最终写的相对路径也会转换成绝对路径

### 相对路径
相对路径有两种使用方式

**第一种**： 相对路径是相对于当前模块所在的目录

**第二种**：分为几个步骤
1. 先检查是否是内置模块，如fs、path。
2. 检查当前目录中的node_modules
3. 检查上级目录中的node_modules
4. 转换为绝对路径
5. 加载模块

### 后缀名

导入模块的时候可以不给后缀名，会自动补全，补全的顺序为：
1. js
2. json
3. node
4. mjs

### 文件名
如果仅提供目录，不提供文件名，那么会自动寻找该目录中的index.js

package.json中的main字段：

表示包的默认入口

导入或者执行包时若仅提供目录，啧使用main补全入口

## module对象

记录了当前模块的信息，包括这个模块是被谁引用等

## require

```js
// 当我们调用一个模块的时候，实际上这个模块被一个函数包裹

// 模拟node中的require函数

function require(modulePath) {

// 1.将modulePath转换为绝对路径

// 2.判断是否该模块已有缓存（可以打印一下require 就知道为什么这么判断了）

// if (require.cache[modulePath]){

// // 有缓存直接返回缓存的内容

// return require.cache[modulePath]

// }

  

// 3.读取文件内容

// 4.将文件内容包裹到一个函数中

// 模拟包裹模块的函数

function _temp(module, exports, require, __dirname, __filename) {

// 我们平时写的js文件中的内容

console.log(__dirname, __filename);

exports.c = 3;

module.exports = {

a: 1,

b: 2,

};

this.m = 5;

}

// 5.创建module对象

module.exports = {};

const exports = module.exports;

_temp.call(module.exports, module, exports, require, module.path, module.filename);

  

// 所以 再不做任何改动的前提下

// this === module.exports

// this === exports

}
```
