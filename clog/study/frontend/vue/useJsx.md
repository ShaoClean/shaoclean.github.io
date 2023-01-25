---
icon: vue
date: 2023-01-09
category:
  - 前端
  - Vue
tag:
  - jsx
  - 学习笔记
---

# 在 VUE 模板中使用 JSX 语法

由于 JSX 语法是用于 React 的，所以在 VUE 中使用时需要通过第三方库的支持。

安装`@vitejs/plugin-vue-jsx`这个库

```
npm i @vitejs/plugin-vue-jsx
```

在`vite.config.js`文件中使用该库

```js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJSX()],
});
```

创建 JSX 文件：

```jsx
//SayHi.jsx
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const msgRef = ref("hello");

    function sayHi() {
      msgRef.value = "hello world!";
    }

    return () => {
      const msg = msgRef.value;
      return (
        <>
          <h1>{msg}</h1>
          <button onClick={sayHi}>sai hi</button>
        </>
      );
    };
  },
});
```

在`.vue`文件中导入并使用：

```vue
//App.vue
<script setup>
import SayHi from "./components/SayHi";
</script>

<template>
  <SayHi />
</template>
```

以上便完成了 jsx 文件在 vue 模板中的使用。

重点说一下对`SayHi.jsx`文件的一些理解：

- 关于两个 return

正常来说`setup()`函数中只需要一个 return 一个箭头函数就够了，也就是这样的一种结构：

由于使用的是箭头函数，再加上返回的 jsx 语法只需要一个跟标签，因此可以理解为一个整体，可以将`{}`改为`()`:

```jsx
setup(){
  //...
  return ()=>(
    <>
      <h1>hello</h1>
    </>
  )
}
```

- 关于响应式

但是该代码没有 vue 中的响应式，因此可以通过 vue 中的`ref()`函数赋予其响应式

可是 JSX 语法并不能解析`ref()`函数，所以需要将其转换成 JSX 可以编译的语法。

怎样转换？写在 return 中，所以在一开始的例子中的箭头函数就不能写成如下这种形式了：

```jsx
return ()=>(
  const msg = msgRef.value;//报错，只能有一个语句块
  <>
    <h1>hello</h1>
  </>
)
```

而是需要写成下面这种形式：

```jsx
return () => {
  const msg = msgRef.value;
  return (
    <>
      <h1>hello</h1>
    </>
  );
};
```

- 2023.1.25 新增
  在 vue 的单文件组件中导入时需要注意：

如果使用了`.jsx`的文件，那么下面这种方式是没有问题的

```vue
<script setup>
import SayHi from "./components/SayHi.jsx";
</script>
```

但如果在`script`标签上中指定了`lang`这种情况，则需要将`.jsx`改为`.tsx`，否则会提示类型错误：

```vue
<script setup lang="ts">
import SayHi from "./components/SayHi.tsx";
</script>
```
