---
icon: css
date: 2023-03-18
category:
  - 前端
  - CSS
tag:
  - BFC
  - 学习笔记
---

# CSS选择器

## 基本选择器

### 通配选择器

选择所有元素。可以将其限制为特定的名称空间或所有名称空间。

>配合其他简单选择器的时候，省略掉通配选择器会有同样的效果。比如，*.warning 和.warning 的效果完全相同。

>ns|* - 会匹配ns命名空间下的所有元素
解释一下，在`xml`中：
```xml
<root xmlns:ns="http://example.com/ns">
  <ns:element1>some text</ns:element1>
  <ns:element2>some more text</ns:element2>
  <otherElement>some other text</otherElement>
</root>
```
`xmlns:ns`中的`ns`表示命名空间，`ns|*`的意思就是选中该命名空间下面的所有元素

`*[lang^=en]{color:green;}`，中的`[lang^=en]`表示选择有`lang`属性的标签，且该属性的值以`en`开头，`^`和正则里面表达的意思类似

### 元素选择器

选择所有对应的标签元素

### 类素选择器

```css
/* 所有含有 class="spacious" 类的元素 */
.spacious {
  margin: 2em;
}

/* 所有含有 class="spacious" 类的 <li> 元素 */
li.spacious {
  margin: 2em;
}

/* 所有同时含有“spacious”和“elegant”类的 <li> 元素 */
/* 例如 class="elegant retro spacious" */
li.spacious.elegant {
  margin: 2em;
}

```

### ID 选择器

语法：`#id 属性值 { 样式声明 }`

与`[id~=id名] { 样式声明 }`等价，但是优先级不等价，id选择器的优先级较高

### 属性选择器

```css
/* 选择具有title属性的所有a标签 */
a[title] {
  color: purple;
}

/* 选择具有href属性，且href属性值是https://example.org的所有a标签 */
a[href="https://example.org"] {
  color: green;
}

/* 选择具有href属性，且href属性值中存在example字符串的所有a标签*/
a[href*="example"] {
  font-size: 2em;
}

/* 选择具有href属性，且href属性的值是以https开始的所有a标签 */
a[href^="https"] {
  font-style: italic;
}

/* 选择具有href属性，且href属性的值是以.org结尾的所有a标签 */
a[href$=".org"] {
  font-style: italic;
}

/* 选择具有href属性，且href属性的值是haha或者以haha-开头的所有a标签 */
a[href|="haha"] {
  font-style: italic;
}

/* 存在 class 属性并且属性值包含单词"logo"的<a>元素*/
a[class~="logo"] {
  padding: 2px;
}

```

重点说一下`a[href*="example"]`和`a[class~="logo"]`这两个

1.`a[href*="example"]`选择的是，只要有`example`就行。

比如说下面两种写法都会被该选择器选中：

```html
<a href="http://www.example.com"></a>
<a href="http://www.example.com/test.html"></a>
```

2.`a[class~="logo"]`选择的是，包含单独单词的`logo`属性

比如说：

```html
<a class="my-logo your-logo his-logo"></a>
```

是不能被选择到的，因为没有包含单独的单词`logo`

而是需要这样才能选择到：

```html
<a class="logo other-class"></a>
```

MDN是这样说的：

> 表示带有以 *attr* 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 *value*。

## 分组选择器

CSS **选择器列表**（`,`）选择所有匹配的节点。选择器列表是以逗号分隔的多个选择器所组成的列表。

#### 无效的选择器列表

> 使用选择器列表的一个缺点是选择器列表中的单个不受支持的选择器会使整个规则无效化。

看第一段代码：

```css
h1 {
  font-family: sans-serif;
}
h2:invalid-pseudo {
  font-family: sans-serif;
}
h3 {
  font-family: sans-serif;
}

```

将他们使用分组选择器整合成一起后：

```css
h1, h2:invalid-pseudo, h3 {
  font-family: sans-serif;
}
```

其中的`:invalid-pseudo`用来代表一个不存在的或者输入错误的伪类选择器。

如果使用分组选择器将这三个样式进行整合的话，由于出现了错误的伪类选择器，那么这整个选择器设置的样式都将失效。也就是说第一段和第二段代码是不等效的。上面的第二段代码中的选择器也叫`无效的选择器列表`

#### 可容错选择器列表

如何解决无效的选择器列表呢？

第一种方法是使用`:is()`或者`:where()`伪类选择器

- `:is()`

> 将选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。

```css
/* 选择 header、main、footer 里的任意一个悬浮状态的段落 */
:is(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* 以上内容相当于以下内容 */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}

```

<span style="color:red;font-weight:800">伪元素在 `:is()` 的选择器列表中无效。</span>

使用该伪类选择器的特性来解决容错问题

- `:where()`

和`:is()`在语法上没有区别

> :where() 和 :is() 的不同之处在于，:where() 的优先级总是为 0，但是 :is() 的优先级是由它的选择器列表中优先级最高的选择器决定的。


## 组合选择器

### 后代组合器

> **后代组合器**（通常用单个空格（" "）字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。利用后代组合器的选择器称为*后代选择器*。

### 子组合器

> **子组合器**（`>`）被放在两个 CSS 选择器之间。它只匹配那些被第二个选择器匹配的元素，这些元素是被第一个选择器匹配的元素的直接子元素。

和后代组合器相比，子组合器更加严格，它只能是第一层级的子元素。而后代选择器会选择所有子元素

### 通用兄弟选择器

> **通用兄弟选择器**（`~`）将两个选择器分开，并匹配第二个选择器的*所有迭代元素*，位置无须紧邻于第一个元素，只须有相同的父级[元素](https://developer.mozilla.org/zh-CN/docs/Glossary/Element)。

语法：

```css
/* 在任意图像后的兄弟段落 */
img ~ p {
  color: red;
}
```

需要注意的是，两个元素需要拥有同一个父元素；且出现在`~`之后的选择器在html结构上也需要在`~`之前的选择器前面的元素之后（拿语法中的例子来说，之后再img标签之后的p元素才能被选中，在img标签之前的p元素不会被选中）

### 紧邻兄弟组合器

> **相邻兄弟选择器** (`+`) 介于两个选择器之间，当第二个元素*紧跟在*第一个元素之后，并且两个元素都是属于同一个父 [`element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) 的子元素，则第二个元素将被选中。

```css
/* 图片后面紧跟着的段落将被选中 */
img + p {
  font-weight: bold;
}

```



## 伪选择器

### 伪类

> [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) ***伪类***是添加到选择器的关键字，用于指定所选元素的特殊状态。例如，伪类 [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 可以用于选择一个按钮，当用户的指针悬停在按钮上时，设置此按钮的样式。

具体见：[伪类 - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes#字母索引)

### 伪元素

> 伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。

具体见：[伪元素 - CSS：层叠样式表 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements#字母索引)