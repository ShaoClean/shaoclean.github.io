---
icon: eye
date: 2023-08-31
article: true
category:
    - demo
tag:
    - reg
---

# 字符串中带有斜杠的路径

今天工作中遇到的问题.

具体场景是：
通过消息队列获取到算法返回的数据，返回的数据是一个带有路径的字符串，这个字符串还有别的字符。

需要匹配这个字符串中的路径最后一位是否是数字。

之前一直陷入了一个误区：认为字符串中带有的反斜杠一定是转译用的。今天在浏览器的控制台打印了一下，实际上非也。

字符串中用于转译用途的只有反斜杠，没有其它字符：`'\'`这种用法。

其余的类似：

```js
const str = 'a ba a ba \a ba`
```

就是表示反斜杠的意思

然后记录一下我是如何解决的：

```js
const returnData = '"Aready save in path D:\\\\workspace\\\\model\\\\1123"';
const fullPath = '"Aready save in path D:\\workspace\\model\\';

// 这里正则中的两个反斜杠（`\\`） 中的的第一个 \ 表示转译，第二个才是真正的表示反斜杠
const newFullPath = fullPath.replace(/\\/g, "\\\\\\\\");

console.log(newFullPath); // "Aready save in path D:\\\\workspace\\\\model\\\\

const reg = new RegExp(`${newFullPath}\\d+"`);

console.log(reg); // /"Aready save in path D:\\\\workspace\\\\model\\\\\d+"/

const res = reg.test(returnData);

console.log(res); // true
```
