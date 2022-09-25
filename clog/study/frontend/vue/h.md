---
icon: vue
date: 2022-09-25
star: 20
category:
  - 前端
  - Vue
tag:
  - h
  - 学习笔记
---

# h函数

`h()`函数用于创建虚拟DOM节点（VNode）

使用场景：

- 2022-9-25：用于渲染一个原生的html标签

以下是它的类型：

```ts
// 完整参数签名
function h(
	//说明：可以是原生的元素标签，也可以是一个组件
  type: string | Component,
  props?: object | null,
  children?: Children | Slot | Slots
): VNode

// 省略 props
function h(type: string | Component, children?: Children | Slot): VNode

type Children = string | number | boolean | VNode | null | Children[]

type Slot = () => Children

type Slots = { [name: string]: Slot }

```

:::tip 参数说明
第一个参数既可以是一个字符串 (用于原生元素) 也可以是一个 Vue 组件定义。第二个参数是要传递的 prop，第三个参数是子节点。

当创建一个组件的 vnode 时，子节点必须以插槽函数进行传递。如果组件只有默认槽，可以使用单个插槽函数进行传递。否则，必须以插槽函数的对象形式来传递。

为了方便阅读，当子节点不是插槽对象时，可以省略 prop 参数。
:::

## 使用示例

```vue
<script lang="ts" setup>
import { h } from 'vue';
const sayhello = "hello!"
const MyRender = h("div",{
  class:"my-render",
  onClick:()=>{
    alert(sayhello)
  }
},"Im My Render")
</script>

<template>
  <!-- const所定义的变量名称在模板中当作组件（标签）使用 -->
  <MyRender></MyRender>
</template>

<style>
.my-render{
  display:block;
  width:100px;
  height:100px;
  background-color: aqua;
}
</style>
```

结果如图：

![image-20220925212553624](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220925212553624.png)

点击上图中有颜色的div区域可以正常的跳出弹窗

:::warning 警告
像上面这种示例情况，style标签上不能使用`scoped`，否则无法添加相对应的样式
:::

也可以导入外部的组件当作h函数的第一个参数：

新建一个外部测试组件：
```vue
//render-test.vue
<script lang="ts" setup>
import { h } from 'vue';
const RenderTest = h("div",{class:"render-test"},"Im Render Test!")
</script>
<template>
  <RenderTest/>
</template>
<style  scoped>
.render-test{
  width:100px;
  height: 100px;
  background-color: beige;
}
</style>
```
导入到当前组件中：

```vue
//...
const MyRender = h(renderTestVue,{
  class:"my-render",
  onClick:()=>{
    alert(sayhello)
  }
},"Im My Render")
//...
```

结果如图：

![image-20220925213316656](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220925213316656.png)

## 生成HTML元素

```vue
<script>
  const RenderImg = h("img",{
    style:{
      width:"100px",
      height:"100px",
    },
    src:"https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/header.png"
	})
</script>
<template>
	<RenderImg></RenderImg>
</template>
```

结果如图：

![image-20220925221057508](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220925221057508.png)
