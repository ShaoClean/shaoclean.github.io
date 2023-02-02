---
icon: css
date: 2023-02-02
category:
  - 前端
  - CSS
tag:
  - BFC
  - 学习笔记
---

# 块级格式化上下文

块级格式化上下文（Block Formatting Context），简称 BFC。它是页面上的一块渲染区域，并有一套自己的渲染规则：

- 内容的块级盒子会在垂直方向上一块接着一块的排列
- 同一个 BFC 的两个相邻盒子外边距会重叠，使用数值较大的那一个
- BFC 内的每一个元素的左外边距与 BFC 包含块的左边界相接触
- 计算 BFC 的高度时，里面的浮动元素也参与计算
- BFC 的区域不会与非 BFC 内的浮动元素重叠
- BFC 内的子元素不会影响到外面的元素，外面的元素也影响不到 BFC 内的元素

其实可以理解为，CSS 中的作用域

## 触发条件

一下内容来自 [MDN：](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)

> 下列方式会创建块格式化上下文：
>
> - 根元素（`<html>`）
> - 浮动元素（float 值不为 none）
> - 绝对定位元素（position 值为 absolute 或 fixed）
> - 行内块元素（display 值为 inline-block）
> - 表格单元格（display 值为 table-cell，HTML 表格单元格默认值）
> - 表格标题（display 值为 table-caption，HTML 表格标题默认值）
> - 匿名表格单元格元素（display 值为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、tr、tbody、thead、tfoot 的默认值）或 inline-table）
> - overflow 值不为 visible、clip 的块元素
> - display 值为 flow-root 的元素
> - contain 值为 layout、content 或 paint 的元素
> - 弹性元素（display 值为 flex 或 inline-flex 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
> - 网格元素（display 值为 grid 或 inline-grid 元素的直接子元素），如果它们本身既不是 flex、grid 也不是 table 容器
> - 多列容器（column-count 或 column-width (en-US) 值不为 auto，包括 column-count 为 1）
> - column-span 值为 all 的元素始终会创建一个新的 BFC，即使该元素没有包裹在一个多列容器中 (规范变更, Chrome bug)

也总结一下平时开发经常用到的：

- float:不为 none
- display:`inline-block`、`flex`、`inline-flex`、`grid`、`inline-grid`、`flow-root`、
- over-flow:不为`visible`、`clip`的块元素
- position:`absolute`、`fixed`

## 解决问题

根据 BFC 的渲染规则，可以解决一些开发中遇到的问题。

### 边距重叠问题

根据`同一个 BFC 的两个相邻盒子外边距会重叠，使用数值较大的那一个`这一条规则，我们可以在外部再嵌套一个元素并开启 BFC 即可解决

```html
<style>
  .wrap {
    overflow: hidden; // 新的BFC
  }
  p {
    color: #f55;
    background: #fcc;
    width: 200px;
    line-height: 100px;
    text-align: center;
    margin: 100px;
  }
</style>
<body>
  <p>Haha</p>
  <div class="wrap">
    <p>Hehe</p>
  </div>
</body>
```

### 清除内部浮动

```html
<style>
  .par {
    border: 5px solid #fcc;
    width: 300px;
  }

  .child {
    border: 5px solid #f66;
    width: 100px;
    height: 100px;
    float: left;
  }
</style>
<body>
  <div class="par">
    <div class="child"></div>
    <div class="child"></div>
  </div>
</body>
```

此时上述代码产生的效果：

![image-20230202152628308](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20230202152628308.png)

开启 BFC 后：

```css
.par {
  overflow: hidden;
}
```

![image-20230202152721982](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20230202152721982.png)

### 排除外部浮动

```html
<style>
  body {
    width: 300px;
    position: relative;
  }

  .aside {
    width: 100px;
    height: 150px;
    float: left;
    background: #f66;
  }

  .main {
    height: 200px;
    background: #fcc;
  }
</style>
<body>
  <div class="aside"></div>
  <div class="main"></div>
</body>
```

效果如下：

![image-20230202153703803](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20230202153703803.png)

可以利用`BFC 的区域不会与非 BFC 内的浮动元素重叠`这一条渲染规则，将`main`元素开启BFC

```css
.main {
    overflow: hidden;
}
```

这时候，新的`BFC`不会与浮动的`.aside`元素重叠。因此会根据包含块的宽度，和`.aside`的宽度，自动变窄

![image-20230202153943391](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20230202153943391.png)

参考文章：[Vue 面试官系列](https://vue3js.cn/interview/css/BFC.html#%E4%B8%89%E3%80%81%E5%BA%94%E7%94%A8%E5%9C%BA%E6%99%AF)
