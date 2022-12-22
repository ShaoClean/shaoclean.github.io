---
icon: javascript
date: 2022-12-22
category:
  - 前端
  - CSS
tag:
  - hidden element
  - 学习笔记
---

# 隐藏元素

```css
.hidden{
  //1.
	display:none;
  //2.
  opacity:0;
  //3.
  visibility:hidden;
  //4.
  transform:scale(0);
  //5.
  width:0;
  //6.
  position:absolute;
  left:-999999999px;
  //7.使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏
  clip-path:circle(0);
    
}
```