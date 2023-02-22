---
icon: vue
date: 2023-02-22
category:
  - 前端
  - Vue
tag:
  - vue-router
---

# Vue Router 踩坑系列

记录一下在 vue router 中踩得坑

## beforeRouteEnter

在 V3 的 setup 函数中是没有办法使用`beforeRouteEnter`函数的，我之前想用这个函数在组件内实现一个单独的页面是否可以进入。

也是踩了不少坑，找了挺多资料的。

说一下最接近我内心想法的一个解决方案，使用`路由独享守卫`，具体用法如下:

```js
    {
      path: 'list',
      name: 'business-list',
      component: () => import('@/pages/home/business/BusinessList.vue'),
      meta: {
        title: '主页',
      },
      beforeEnter: (to: any, from: any, next: any) => {
        console.log('----beforeEnter----');
        console.log(to);
        console.log(from);
        next()
      }
    },
```

在路由配置里面单独的加一个`beforeEnter`函数，具体用法和`beforeRouteEnter`最接近。

还有一个解决方法就是在全局前置守卫`beforeEach`中控制，用`to`参数做一下判断就可以了
