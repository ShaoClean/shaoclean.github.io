---
icon: vue
date: 2022-09-13
star: 20
description: 默认插槽、具名插槽、作用域插槽
category:
  - 前端
  - Vue
tag:
  - slot
  - 学习笔记
---

# 插槽

插槽分为以下几类：

- 默认插槽
- 具名插槽
- 动态插槽
- 作用域插槽

首先先新建一个组件`User.vue`:

```vue
<script lang="ts" setup>
const title = ref("");

</script>

<template>
  <div class="user">
    <h1>
      <slot>{{title}}</slot>
    </h1>
  </div>
</template>

<style scoped>
  .user{
    width: 600px;
    height: 600px;
    background-color: rgb(89, 190, 226);
    border: 1px #999 solid;
    margin: 0 auto;
  }
  h1{
    border-bottom: 1px solid #333;
  }
</style>
```

在`App.vue`中使用该组件：

```vue
<script setup lang="ts">
import User from "./components/User.vue";

</script>

<template>

  <User></User>
  
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>
```

就得到了一个最基础的框架：

![image-20220913151536073](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220913151536073.png)

下面分别来将这些插槽

## 1.默认插槽

首先先说一下插槽的默认值，即没有使用插槽的情况下显示的默认内容

```vue
<script lang="ts" setup>
const title = ref("我是默认值");

</script>

<template>
  <div class="user">
    <h1>
      <slot>{{title}}</slot>
    </h1>
  </div>
</template>

<style>
//...
</style>
```

效果如下:

![image-20220913152000315](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220913152000315.png)

使用默认插槽，直接在组件标签内写入你需要的内容：

```vue
<template>
  <User>
		默认插槽
	</User>
</template>
```



![image-20220913151209407](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220913151209407.png)

## 2.具名插槽

赋予`<slot><slot>`标签`name`属性，之前的默认插槽`name`的属性值为`default`

定义具名插槽:

给`slot`标签赋予`name`属性即可完成具名插槽的定义

```vue
<template>
  <div class="user">
    <h1>
      <slot>{{title}}</slot>
    </h1>
    <h1>
      <slot name="username"></slot>
    </h1>
  </div>
</template>
```

使用具名插槽:

使用具名插槽时，一定要在`template`便签内使用，并且需要在标签中指定插槽的名称，指定的方式有两种：

- 使用`v-slot`指令
- 使用`#xxx`

```vue
<User>
    默认插槽
    <!-- 具名插槽完整写法 -->
    <template v-slot:username>
      具名插槽
    </template>
    <!-- 具名插槽简写 -->
    <!-- <template #username>
      具名插槽
    </template> -->
</User>
```

结果如下:

![image-20220913165943379](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220913165943379.png)

## 3.动态插槽

