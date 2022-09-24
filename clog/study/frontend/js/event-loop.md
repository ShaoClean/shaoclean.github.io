---
icon: javascript
date: 2022-09-19
star: 10
category:
  - 前端
  - JS
tag:
  - 事件循环
  - 学习笔记
---

# 事件循环机制

在了解事件循环机制之前，需要了解js在浏览器中的执行机制

## 概述

事件循环机制是html提出的概念，是为了协调事件，用户交互，脚本，渲染，网络等，从整体上告诉了我们所写JS代码的执行顺序。

JS的一大特点就是单线程，并没有专门的异步线程。但它也支持异步操作（暂时理解为又开了一个新的线程），这个异步操作是浏览器提供的，他会放到浏览器的循环队列里面，等待主线程栈发出命令来执行这个队列里面的事件。

在JS代码执行的过程中，通过函数的调用栈来决解函数的执行顺序，当然也存在另外一些特殊的状况，通过任务队列（task queue）来解决另外一些代码的执行。任务队列可以分为`宏任务(macro-task)`和`微任务(micro-task)`

## 宏任务

宏任务包含：script（整体代码）、setTimeout、setInterval、setImmediate、I/O、UI rendering

## 微任务

微任务包含：process.nextTick、Promise、Object.observe

:::warning 注意

Promise和setTimeout等还是同步的代码，称为任务源。而进入任务队列的是他们呢指定的具体所要执行的任务。Promise具体需要执行的任务例如`then`函数是微任务，而setTimeout中携带的任务是宏任务。无论是微任务还是宏任务的执行，都需要借助`函数调用栈`来完成

:::

