---
icon: css
date: 2022-12-10
category:
  - 前端
  - CSS
tag:
  - 自定义虚线
  - 学习笔记
---

# 自定义虚线

background-image中，linear-gradient的第三个参数可以调整虚线每一段的长度显示百分比，结合background-size的第二个值（可设置虚线每一段总长度）使用。两者结合就可以调整虚线每一段之间的间距大小。
background-size的第一个值可以调整虚线的宽度。（可以设为100%，直接继承元素的宽度width）

```css

.border {
    width: 90%;
    height: 1px;
    background-image: linear-gradient(to right, black 0%, black 50%, transparent 50%);
    background-size: 8px 1px;
    background-repeat: repeat-x;
    margin: 0 auto;
 }

```