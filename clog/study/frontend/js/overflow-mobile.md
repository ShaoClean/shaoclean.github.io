---
icon: javascript
date: 2022-11-21
category:
  - 前端
  - CSS
tag:
  - 移动端
  - 学习笔记
---

# 移动端overflow:scroll无效问题

父元素设置了flex布局，在移动端的情况下无法实现`overflow:scroll`出现滚动条

网上找了挺多的解决方案，大多数是说移除`touchmove`的默认事件。

```js
document.querySelector('.element').addEventListener('touchmove', stopScroll, false);
function onScroll(e: Event) {
  e.preventDefault();
}
//vue在onMounted中使用
onMounted(() => {
  main.value.addEventListener('touchmove', onScroll, false);
  main.value.addEventListener('touchstart', onScroll, false);
});
```