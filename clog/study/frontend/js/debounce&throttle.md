---
icon: javascript
date: 2023-02-06
category:
  - 前端
  - JS
tag:
  - 防抖节流
  - 学习笔记
---

# 防抖节流

防抖、节流两个技术都是为了防止事件的频繁触发。

- 防抖：间隔指定时间后再触发事件，但在指定时间内该事件不断触发时，重新计时。

```js
function debounce(fn, delay, flag) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    if (!timer && flag) {
      fn.apply(this, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}
```

- 节流：在事件频繁触发的情况下，不论触发的速度有多快，达到指定的时间才会触发。

```js
function throttled(fn, delay) {
  let timer = null;
  let starttime = Date.now();
  return function () {
    let curTime = Date.now(); // 当前时间
    let remaining = delay - (curTime - starttime); // 从上一次到现在，还剩下多少多余时间
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(context, args);
      starttime = Date.now();
    } else {
      timer = setTimeout(fn, remaining);
    }
  };
}
```
