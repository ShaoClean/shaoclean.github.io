---
icon: javascript
date: 2023-02-07
category:
  - 前端
  - JS
tag:
  - with
  - 学习笔记
---

# with 方法

**在《JavaScript 权威指南》(第五版, David Flanagan, P109)中的解释是:**

> with 语句用于暂时修改作用域链...这一个语句能够有效地将 Object 添加到作用域链的头部，然后执行 statement，再把作用域链恢复到原始状态...
> 虽然有时使用 with 语句比较方便，但是人们反对使用它。使用了 with 语句的 JavaScript 代码很难优化，因此它的运行速度比不使用 with 语句的等价代码要慢得多。
> 而且，在 with 语句中的函数定义和变量初始化可能会产生令人惊讶的、和直觉相抵触的行为(这一行为以及产生的原因非常复杂，在这里我们不做解释)

**MDN 中的解释：**

> 如果在 statement 中有某个未使用命名空间的变量，跟作用域链中的某个属性同名，则这个变量将指向这个属性值。如果沒有同名的属性，则将拋出 ReferenceError 异常。

用自己的话来说就是，将 with 表达式中的东西放到作用域的顶端。

```js
const info = "hello world";
const obj = { info: "hi info", name: "clean" };
function withTest() {
    
  with (obj) {
    console.log(info); //hi info
  }
}
withTest();
```

正常来说，没有`with()`语句时。执行`withTest()`函数读取`info`时，根据作用域链，在本层作用域没有`info`，接着向全局作用域寻找，找到了`info`并输出`hello world`。

但此处使用了`with()`语句，它将`obj`里的状态添加到了它作用域的顶部，因此找到了`info`并输出
