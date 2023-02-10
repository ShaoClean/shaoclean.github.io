---
icon: javascript
date: 2023-02-10
category:
  - 前端
  - JS
tag:
  - 事件模型
  - 学习笔记
---

# 事件模型

## 事件

在说事件模型之前先需要了解什么是事件，事件可以理解为在浏览器或者 HTML 中发生的一种交互操作，使得网页具备互动性，最常见的就是点击事件、键盘事件等。

## 事件流

我们知道多层嵌套的 DOM 是一个树形结构。那么在一个多层嵌套的 DOM 结构中，给最里面的一个 DOM 元素绑定了一个事件，此时最外层的元素也有一个事件。如果点击了最里面的一个元素，那么该如何确定这个事件的执行顺序？怎么就可以确定我想点击的是整个元素而不是内部的元素呢？

所以就涉及到了事件的执行顺序问题，从而引出事件流的概念。

事件流都会经历三个阶段：

- 事件捕获阶段
  事件捕获与事件冒泡相反，事件最开始由不太具体的节点最早接受事件, 而最具体的节点（触发节点）最后接受事件
- 事件执行阶段
- 事件冒泡阶段
  事件冒泡是一种从下往上的传播方式，由最具体的元素（触发节点）然后逐渐向上传播到最不具体的那个节点，也就是 DOM 中最高层的父节点

## 事件模型

事件模型可以分为三种：

- 原始事件模型（DOM0 级）
- 标准事件模型（DOM2 级）
- IE 事件模型

### 原始事件模型

绑定方式有两种：

1.直接在元素上绑定事件

```html
<input type="button" onclick="fun()" />
```

2.添加元素的 onXXX 属性

```js
var btn = document.getElementById(".btn");
btn.onclick = fun;
```

:::tip 小结
原始事件模型特性：

- 绑定速度快
  > DOM0 级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定速度太快，可能页面还未完全加载出来，以至于事件可能无法正常运行
- 只支持事件冒泡阶段

- 存在事件覆盖现象
  当希望为同一个元素绑定多个同类型事件的时候；如绑定方式 1，再以绑定方式二的形式给 input 绑定事件，绑定方式 2 会覆盖绑定方式 1 中的事件

:::

### 标准事件模型

标准事件模型可以理解为用`addEventListener`绑定的事件，它遵循事件流的三个过程，

- 事件捕获阶段：事件从 document 一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
- 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数
- 事件冒泡阶段：事件从目标元素冒泡到 document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

可以用`addEventListener`绑定事件

```js
addEventListener(eventType, handler, useCapture);
```

可以用`removeEventListener`解除绑定的事件

```js
removeEventListener(eventType, handler, useCapture);
```

例：

```js
var btn = document.getElementById(".btn");
btn.addEventListener("click", showMessage, false);
btn.removeEventListener("click", showMessage, false);
```

:::tip 小结
标准事件模型特性：

- 可以绑定多个相同的事件，并且不会冲突
- 自定义执行阶段
  当第三个参数(useCapture)设置为 true 就在捕获过程中执行，反之在冒泡过程中执行处理函数

- 存在事件覆盖现象

:::

### IE 事件模型

IE 事件模型有两个执行阶段：

- 事件处理阶段
- 事件冒泡阶段

事件绑定监听函数的方式如下:

```js
attachEvent(eventType, handler);
```

事件移除监听函数的方式如下:

```js
detachEvent(eventType, handler);
```

举个例子：

```js
var btn = document.getElementById(".btn");
btn.attachEvent("onclick", showMessage);
btn.detachEvent("onclick", showMessage);
```

## 事件级别

可以分为 DOM0、DOM1、DOM2 级别的事件

### DOM0 级

DOM0 级具有很好的跨浏览器优势，会以最快的速度绑定。
无论用 html 还是 js，都是把一个函数赋值给文档元素，在事件监听函数被调用时候它是作为产生事件的元素的放法调用的，所以 this 引用的是那个目标元素

### DOM1 级

其实就是 DOM0 的规范版本，官方解释就是： DOM1 级规范成为 W3C 的推荐标准，为基本的文档结构及查询提供了接口。
DOM1 一般只有设计规范没有具体实现，所以一般跳过。

### DOM2 级

在 2 级 DOM 中除了定义了一些 DOM 相关的操作之外还定义了一个**<sapn style="color:red">事件模型</sapn>** ，这个标准下的事件模型就是我们所说的 2 级 DOM 事件模型

可以简单的理解为通过`addEventListener`、`attachEvent`添加的事件

### DOM3 级

也就是 DOM2 的扩展版本,对 DOM2 增加了内容模型和文档验证
举例：

- UI 事件
  load、scroll

- 焦点事件
  blur、focus

- 鼠标事件
  dbclick、mouseup

- 滚轮事件
  mousewheel

- 文本事件
  textInput

- 键盘事件
  keydown、keypress

- 合成事件
  compositionstart

- 变动事件
  DOMsubtreeModified
