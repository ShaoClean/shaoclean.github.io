# cyou-js使用文档


## 使用
### 1.引入文件

```js
import createCyou from 'cyou-js.js';
import 'style.css';
```

### 2.初始化ctool

::: danger 注意
由于Vue项目解析模板渲染页面机制的特殊性，使用起来可能会有点奇怪<br>
当然这一点我们还在努力的改进中💪
:::

- **在原生JS项目中，需要这样使用：**<br>

1.首先需要创建一个`<div id="app"></div>`（该容器用于放置ctool，可以在此区域内自由的移动ctool）
```html
<body>
    <div id="app"></div>
</body>
```

2.在js中初始化cyou
```js
const ctool = createCyou();
```

- **在Vue项目中，则需要这样使用：**

```js
//App.vue
let ctool;
setTimeout(()=>{
    ctool = createCyou();
})
```
恭喜🎉，至此ctool就会出现在页面上了！<br>
以上是cyou的默认使用方式，不添加任何的配置项。ctool会以页面上**第一个**`<div id="app"></div>`的元素为根元素，
可以自由拖拽此根元素下所有一级子元素。

### 3.自定义根元素

除了[在js中初始化cyou](getting-start.html#_2-初始化ctool)这样默认初始化ctool的使用方式，还可以在初始化的时候指定根元素。
```js
const ctool = createCyou({rootEl:document.querySelector(".myRootEl")});
```

### 4.添加根元素

需要通过`ctool`的`addRootEl()`方法来添加根元素
```js
const ctool = createCyou({rootEl:document.querySelector(".myRootEl")});
ctool.addRootEl(document.querySelector(".otherRootEl"));
```

可以通过各种获取单个元素的方式来传入根元素，比如：
```js
const rootEl = document.getElementById("myRootEl");
```

:::danger 警告
目前传入的根元素不支持数组的形式。<br>
如果坚持这么做，那么ctool的部分功能将无法正常工作。目前已知会受到影响的功能：
- 自由拖拽元素
:::

### 5.使用功能

接下来就可以自由的使用cyou内置的API了！
- [自由拖拽元素(ch)](./cyou-js.md#_1-自由拖拽元素-ch)
- [创建元素(cr)](./cyou-js.md#_2-创建元素-cr)
- [替换元素(re)](./cyou-js.md#_3-替换元素-re)
- [交换元素(ex)](./cyou-js.md#_4-交换元素-ex)

## 内置API
以下内容主要介绍了cyou-js中的内置API，更多API正在持续更新中，敬请期待！

### 1.自由拖拽元素(ch)
使用方式非常的简单，您只需要在ctool中点击`ch`即可自由对元素进行拖拽。

### 2.创建元素(cr)

创建一个新的元素。

#### 点击生成

首先您需要使用`createCyou()`函数来创建`ctool`,

```ts
const ctool = createCyou()
```

在ctool中点击`cr`在弹出的对话框中设置元素相关属性即可生成一个新的元素。<br>
目前您可以自由配置以下属性：

- **width** 元素的宽度
- **height** 元素的高度
- **backgroundColor** 元素的背景颜色

点击查看[源码解析](/code/cr-code.md)

#### 使用js生成

您可以通过调用`ctool`上的`cr`函数来创建一个新的元素到您的页面上。<br>
:::tip 提示
`cr`函数可以不传入参数，此时调用该函数会创建一个默认样式的元素。
:::
**下面介绍两种使用方式：**

- 1.默认创建方式（不带参数）

```js
const ctool = createCyou();
ctool.cr()
```

- 2.自定义元素样式的创建方式（带参数）
  :::tip 提示：您可以根据自己的喜好来创建具有个性化的元素。
  `cr`接收类型为`CrOptions`的参数。<br>
- `style`接收多个style属性
- `classList`接收多个`class`样式的名称。<br>

:::

```ts
type CrOptions = {
    style?:{},
    classList?:string[]
}
```

使用例子：

```css
.my-class1{
    border: 1px solid #333333;
}
.my-class2{
    border-radius: 20px;
}
```

```js {10}
const ctool = createCyou();
const crOptions = {
    style:{
        width:"200px",
        height:"200px",
        backgroundColor:"red"
    },
    classList:["my-class1","my-class2"]
}
ctool.cr(crOptions)
```

### 3.替换元素(re)

将一个元素替换成另一个元素。

#### 点击替换



#### 使用js替换

您可以使用ctool的`re()`函数将页面上已经存在的元素替换为另一个元素。<br>
已经存在的元素将会消失，被新的元素替换。<br>

::: tip 参数说明
`re()`函数接收两个参数：

- `preElement` （必填）需要被替换的元素，类型为`HTMLElement`
- `newElement` （必填）最终呈现的新元素，类型为`HTMLElement`<br>
  *PS：此方法可以在没有根元素`app`的情况下使用。*<br>
  :::

```html
<div class="my-div"></div>
```

```css
.my-div{
    width: 100px;
    height: 50px;
    background-color: red;
}
```

```js {10}
const ctool = createCyou();
const preElement = document.querySelector(".my-div");
const newElement = ctool.cr({
    style:{
        width:"200px",
        height:"200px",
        backgroundColor:"blue"
    }
})
ctool.re(preElement,newElement);
```

### 4.交换元素(ex)

使两个元素互相交换位置。

#### 点击交换

#### js使用

您只需要传入两个需要交换位置的HTML元素即可进行交换。
::: tip 参数说明
`ex()`函数接收两个参数：

- `el1` （必填）需要交换位置的元素1，类型为`HTMLElement`
- `el2` （必填）需要交换位置的元素2，类型为`HTMLElement`<br>
  *PS：此方法可以在没有根元素`app`的情况下使用。*<br>
  :::

```html
<div class="my-div"></div>
```

```js {4}
const ctool = createCyou();
const el1 = document.querySelector(".my-div");
const el2 = ctool.cr();
ctool.ex(el1,el2);
```