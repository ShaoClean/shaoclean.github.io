# 路由生命周期



1.导航确认激活

2.beforeRouteLeave

3.beforeEach

4.beforeRouteUpdate

5.beforeEnter

6.解析异步组件

7.beforeRouteEnter

8.beforeResolve

9.afterEach



## 1.beforeRouteLeave

> 在导航离开渲染该组件的对应路由时调用



## 2.beforeEach

> 当一个导航触发时，全局前置守卫按照创建顺序调用。
>
> 守卫是异步解析执行，此时导航在所有守卫resolve完之前一直处于等待中

`全局前置守卫按照创建顺序调用`

一般来说，会在路由创建的文件中定义一个全局前置守卫。如果在某一个页面中也定义了一个全局前置守卫，在第一次进入这个页面不会发生效果，而是执行一个`创建`的操作。当再一次触发导航时，全局前置守卫会`按照创建顺序调用`。

在创建路由的文件中定义全局前置守卫：

```js
const routes = [
  {
    path: "/",
    name: "sayhi",
    component: () =>
      import("../pages/say-hi.vue"),
  },
  {
    path: "/pagetest",
    name: "pagetest",
    component: () =>
      import( "../pages/page-test.vue"),
  },
];
const router = createRouter({routes})
router.beforeEach(()=>{
  console.log('index');
})
```

在page-test.vue文件中定义全职前置守卫：

```js
const router = useRouter()
router.beforeEach(()=>{
  console.log('page-test');
})
```

在say-hi.vue文件中定义全局前置守卫：

```js
const router = useRouter()
router.beforeEach(()=>{
  console.log('say-hi');
})
```

1. 刚开始进来的时候，页面默认进入到`/`路径中，并在控制台输出`index`，会再创建一个全局前置守卫。

2. 当导航跳转到`/page-test`路径时，按创建顺序触发全局前置守卫。

​	输出：

```js
index
say-hi
```

3. 当导航跳转到`/`路径时，又会再创建一个全局前置守卫。然后按创建顺序触发全局前置守卫。

输出:

```js
index
say-hi
page-test
```

## 3.beforeRouteUpdate

> 在当前路由改变，但是该组件被复用时调用

比如当前在的路径是`/user/1`需要跳转到`/user/2`，那么此时调用的是同一个组件，就会触发这个钩子。

## 4.beforeEnter

独享路由配置

## 5.解析异步组件



## 6.beforeRouteEnter



## 7.beforeResolve



## 8.导航被确认



## 9.afterEach



## 10.触发DOM更新