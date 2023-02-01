---
icon: vue
date: 2023-01-19
star: 19
category:
  - 前端
  - Vue
tag:
  - 函数式组件
  - Vue3
  - 学习笔记
---

# Vue3函数式组件（不使用模板）

为什么需要用到函数式组件？其实绝大部分场景是用不到的，用vue模板的形式足够使用了。

由于我长期使用vue模板的形式来创建组件，所以每次使用组件的时候很容易形成一个习惯，自然而然的以为使用组件的流程一定是：
- 1.使用`.vue`文件定义一个组件
- 2.在其它`.vue`文件的`template`模板中使用该组件

但是在某一些特殊的场景，例如在封装的`ajax`请求的过程中，请求失败时需要弹出一个弹窗，此时是没有`template`模板给我们使用这个组件的。
此时如何实现组件的渲染就成了很大的问题。

再例如，封装了一个hook，在hook中需要生成组件，也需要用到函数式组件，普通的vue模板的形式很难做到。


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
这种方式比较好理解，也是比较常见的方法，一般开发用这种方法对我来说是最舒服的。

首先按照正常的方式定义一个vue组件：

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
    // const vnode = createVNode(SayHi，{msg});
    const vnode = h(SayHiVue,{msg});
    render(vnode,document.body)
} 
```
可以根据自己业务场景的不同给h函数传入参数。

在需要用到的地方调用函数即可生效，生成的组件其实不在当前组建上，而是挂载到了`body`上。

比如说`App.vue`中
```vue
<script setup lang="ts">
import SayHi from './say-hi/index'
SayHi('im app button')
</script>

```



### Function类型

定义一个Function类型的函数,关于函数式组件的说明，官网是这样定义的：

>函数式组件是一种定义自身没有任何状态的组件的方式。它们很像纯函数：接收 props，返回 vnodes。函数式组件在渲染过程中不会创建组件实例 (也就是说，没有 this)，也不会触发常规的组件生命周期钩子。
>我们用一个普通的函数而不是一个选项对象来创建函数式组件。该函数实际上就是该组件的渲染函数。
>函数式组件的签名与 setup() 钩子相同



```ts
export default function SayHiTs(props:any,{emit,slot,attr}:any){
  return h('div',{
    onClick:() => {
      emit('SayHi','im SayHiTs click!!!!!')
    }
  },props.msg)
}
//声明父组件可以监听的事件
SayHiTs.emits = ['SayHi']
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
:::tip
`onSayHi`相当于定义了一个自定义事件，以`onXXX`的形式来定义一个事件
:::

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