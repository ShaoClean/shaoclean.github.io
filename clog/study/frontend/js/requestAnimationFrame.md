---
icon: javascript
date: 2023-02-14
category:
  - 前端
  - JS
tag:
  - requestAnimationFrame
  - 学习笔记
---

# requestAnimationFrame 函数

`requestAnimationFrame(callback)`中的回调函数只会调用一次，调用的时机是下一次浏览器重绘之前，调用完毕即销毁。

解决了定时器的时间不精确造成的动画卡顿问题，

假设一台`60HZ`刷新率的电脑，那么`1000ms/60hz = 16.7ms`，也就是每`16.7ms`刷新一次屏幕，这种速度我们肉眼是很难见到的。

如果想用定时器实现类似的效果，需要将它的时间设置为 16.7,但是这个 16.7 并不够精确。

因为定时器是过了 16.7ms 后将回调函数推送到消息队列中，回调函数的执行还需要时间，所以时间存在不精确的问题。

这也就解释了会出现卡顿的现象。

而这个函数不是根据时间来定的，而是下一次屏幕刷新时浏览器重绘之前执行的，这就保证了精度的问题。