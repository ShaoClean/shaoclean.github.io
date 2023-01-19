---
icon: vue
date: 2023-01-19
category:
  - 前端
  - Vue
tag:
  - 函数式组件
  - Vue3
  - 学习笔记
---

# Vue3函数式组件（不使用模板）

## 1.核心思路

使用纯js生成组件核心思路其实就只有两步：

- 1.创建虚拟dom（vnode）
- 2.渲染成真实节点（render）

实现这这两步需要用到两个核心函数:
- `h()函数`：

    `h()`函数用于生成一个虚拟dom（vnode），详情见[h()函数](./h.md)

- `render()函数`：

    `render()`函数用于渲染虚拟dom，将虚拟dom变成真实dom放置到页面指定节点。它接收两个参数：

    - 第一个参数：vnode ｜ component，虚拟节点或`.vue`文件
    - 第二个参数：需要挂载的节点

## 2.代码实现

由于`h()`函数第一个参数可以接收多种不同类型，主要来讲一下`Component`类型(.vue组件)和`Function`类型(函数组件)的两种情况

### Component类型
这种方式比较好理解，首先按照正常的方式定义一个vue组件

```vue
<script lang="ts" setup>
//SayHi.vue
const props = defineProps<{
    msg:string
}>()
function say(){
    console.log(props.msg);
} 
</script>

<template>
<div>
    <button @click="say">clike me say hi</button>
</div>
</template>
```
在`index.ts`中引入：
```ts
import { h,render} from "vue";
import SayHiVue from './SayHi.vue';

// 1.vue模板实现
export default (msg:string)=>{
    // createVNode 和 h 函数相同，只是h函数使用起来比较方便；可以创建vnode
    // const vnode = createVNode(SayHi);
    const vnode = h(SayHiVue,{msg});
    render(vnode,document.body)
} 
```

在需要用到的地方使用，
比如说`App.vue`中
```vue
<script setup lang="ts">
import SayHi from './say-hi/index'
SayHi('im app button')
</script>

```

### Function类型

定义一个Function类型的函数

```ts
export default function SayHiTs(props,{emit,slot,attr}){
    emit('SayHi','im say hi ts');
    return h('div',props.msg)
}
```

在`index.ts`中引入：
```ts
export default (msg?:any,fn?:Function)=>{
    const vnode = h(SayHiTs,{
        msg,
        onSayHi(data:any){
            fn!()
            console.log('pass data:',data);
        }
    });
    render(vnode,document.body)
} 
```

在需要用到的地方使用，
比如说`App.vue`中
```vue
<script setup lang="ts">
import SayHiTs from './say-hi/index'
SayHiTs('im app',()=>{
  console.log('hi im app')
})
</script>

```