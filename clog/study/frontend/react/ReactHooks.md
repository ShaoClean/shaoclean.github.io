---
icon: react
date: 2023-04-06
category:
  - 前端
tag:
  - 学习笔记
  - react-hooks
---

# React Hooks

常见的hooks有

1. useState

2. useEffect

该hook接受两个参数：

- setup（回调函数）
- dependencies（依赖数组） 可选

组件会在初次渲染并执行完组件中的代码时最后调用`useEffect`中的`setup`函数。

如果该回调返回了一个函数，那么这个返回的函数会在该组件销毁的时候调用

其依赖的数据发生变化时，也就是`dependencie`数组中的数据发生变化时，`setup`函数会再一次触发。

**如果组件重新进行了渲染**

此时，如果`setup`函数中有返回一个函数（官方说法叫cleanup函数，cleanup函数中的代码叫clean code）。那么在重新渲染的时候：

1.先执行组件中的同步代码

2.然后执行cleanup函数

3.然后才是执行setup函数

而且`cleanup`函数中的`props`和`state`都是旧的。



3. useRef

4. useContext
5. useCallback

