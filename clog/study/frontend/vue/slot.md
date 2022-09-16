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
//User.vue
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

[动态指令参数](https://cn.vuejs.org/guide/essentials/template-syntax.html#dynamic-arguments)在 `v-slot` 上也是有效的

在组件中定义两个新的插槽，插槽名分别为`day1`、`day2`：

```vue
//User.vue
<template>  
	<div class="user">
    <h1>
      <slot>{{title}}</slot>
    </h1>
    <h1>
      <slot name="username"></slot>
    </h1>
    <h1>
      <slot name="day1"></slot>
    </h1>
    <h1>
      <slot name="day2"></slot>
    </h1>
  </div>
</template>
```

在`App.vue`中使用该组件：

```vue
<script setup lang="ts">
  import { ref } from "vue";
  import User from "./components/User.vue";
  const day = ref("day1");
</script>
<template>
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
      <!-- 动态插槽 -->
    <template #[day]>
      {{day}}
    </template>
    <button @click="day='day2'">change day</button>
  </User>
</template>
```

结果：

![image-20220916234530030](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220916234530030.png)

成功的显示在插槽名为`day1`的插槽中了

点击`change day`按钮来改变day的值：

![image-20220916234648206](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220916234648206.png)

## 4.作用域插槽

作用域插槽可以获取子组件域中的数据

在组件中定义一个新的插槽：

```vue
//User.vue

<template>
	//...
	<h1>
      <slot :age="user.age"></slot>
	</h1>
	<h1>
      <slot name="scopeSlot" :salary="user.salary"></slot>
	</h1>
</template>
```

使用该插槽获取`User.vue`中的数据

需要注意的是，默认插槽和具名插槽获取子组件的数据有所区别：

默认插槽：

```vue
//App.vue
//...
<template v-slot="scopeProps">
      <button @click="day='day2'">change day</button>
      {{scopeProps.age}}
</template>
//...
```

具名插槽：

```vue
//App.vue
//...
<template #scopeSlot="scopeProps">
	{{scopeProps.salary}}
</template>
```

![image-20220917000829311](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220917000829311.png)

两种插槽都获取了来自子组件传递的参数
