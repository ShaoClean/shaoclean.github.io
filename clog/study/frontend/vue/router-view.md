---
icon: vue
date: 2023-01-07
category:
  - 前端
  - Vue
tag:
  - router-view
  - 学习笔记
---

# router-view 配合 keep-alive

今天在做项目的过程中遇到一个需求：发布商机页面的模板数据进行缓存。

原本的 Publish 页面结构：

Publish.vue:

```vue
<van-form @submit="onSubmit">
    <van-cell-group>
      <TemplateForm :items="data" />
    </van-cell-group>
    <van-button class="publish" round block type="primary" native-type="submit">
      发布商机
    </van-button>
</van-form>
```

第一反应就是通过 keep-alive 标签嘛，于是二话不说的加上了：
Publish.vue:

```vue
<keep-alive>
  <van-form @submit="onSubmit">
      <van-cell-group>
        <TemplateForm :items="data" />
      </van-cell-group>
      <van-button class="publish" round block type="primary" native-type="submit">
        发布商机
      </van-button>
  </van-form>
</keep-alive>
```

打开控制台，发现切换到这个页面的时候还是会发送 Ajax 请求来获取模板。

然后想到，不能在当前文件使用，需要在外面使用该组件的标签上使用。

于是去了解了一下`keep-alive`标签，并对其进行改进：

路由简化一下是这样的：

router.ts:
```ts
[
  {
    path: '/home',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/publish',
    component: () => import('@/pages/Publish.vue'),
  },
  {
    path: '/mine',
    component: () => import('@/pages/Mine.vue'),
  }
]
```
目的是希望keep-alive标签通过它的`include`属性所指定的标签名字来缓存页面，于是我就写了`Publish`

使用 keep-alive 标签后：

```vue
<KeepAlive include="Publish">
  <router-view></router-view>
</KeepAlive>
```

使用过后还不行啊？切换到这个页面依旧会发送 Ajax 请求模板数据。

后面找到了解决方案：

```vue
<router-view v-slot="{ Component }">
  <keep-alive include="Publish">
    <component :is="Component" />
  </keep-alive>
</router-view>
```

官网是这样描述的：

> `<router-view>` 暴露了一个 v-slot API，主要使用 `<transition>` 和 `<keep-alive>` 组件来包裹你的路由组件。
> - Component: VNodes, 传递给 `<component>`的is prop。
> - route: 解析出的标准化路由地址。

我是这样理解的：
`router-view`标签有一个`v-slot`的作用域插槽，这个属性可以获取到当前页面的`组件(Component)`和`路由地址(route)`。

由于`keep-alive`标签只能用于组件上，于是使用`component`标签来动态的渲染组件。

然后使用获取到的`Component`属性来指定需要渲染的组件