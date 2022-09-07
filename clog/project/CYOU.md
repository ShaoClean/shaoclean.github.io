---
icon: javascript
date: 2022-07-18
star: 9
category:
  - 前端
  - 项目文档
tag:
  - CYou
---
# CYou

## 核心功能

- 生成组件⭐⭐⭐

  ​	-拖拽生成

  ​	-双击组件弹出对话框，编辑参数生成

- 组件推拽⭐⭐⭐

  ​	-选中多个组件

  ​	-多个组件一起拖拽

- 编辑组件⭐⭐⭐

  ​	-单机组件，使组件处于编辑状态，并在侧边显示组件详情

  ​	-鼠标改变组件的大小

- 生成代码⭐⭐⭐

## 扩展功能

- 保存编辑状态⭐⭐⭐
- 账号登录⭐
- 自定义工作台样式⭐

## 后续功能

- 图片上传❗
- 协同办公❗❗❗
- 配置服务器❗❗❗
- 一键生成网站❗❗❗

## 流程

1.工作面板可以任意拖动

2.生成组件

3.组件可以任意拖动

4.组件可以任意缩放

5.鼠标样式

6.组合

7.

# 使用说明

## 1.Point组件

**说明：**该组件用于给其它power添加定位点，用于二次封装。接收一个默认插槽(#default)。建议插槽内的根标签宽高不要超过`defaultStyle`属性中的宽高

使用样例：

```vue
//使用Point二次封装一个Div power
<script lang="ts" setup>
const props = defineProps<{
  custonStyle: { width: number; height: number };
}>();

</script>

<template>
  <Point
    :defaultStyle="props.custonStyle"
  >
    <template #default>
      <slot></slot>
    </template>
  </Point>
</template>
```

| 参数        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| customStyle | width、height必填，power默认样式，包含width，height，backgroundColor，border。 |
| powerEditor | 必填，当前power的编辑状态，用于判断当前power是否被选中，与data-index属性一起使用，默认为false |
|             |                                                              |

## 2.CleanDiv

**说明：**生成一个自定义矩形容器。

使用样例：

```vue
<template>
  <CleanDiv :custonStyle="style" >
    <template #default>
      <div class="my">
        <span v-for="(item,index) in list">
          {{item.name}}
        </span>
      </div>
    </template>
  </CleanDiv>
</template>
<script setup>
const style = reactive({
  width: 500,
  height: 100,
});
const list = reactive([
  {name:'c',age:'15'},
  {name:'l',age:'16'},
  {name:'e',age:'17'},
  {name:'a',age:'18'},
  {name:'n',age:'19'},
])
</script>
```



| 参数        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| customStyle | width、height必填，power默认样式，包含width，height，backgroundColor，border。 |
| data-index  | 必填，poewr在powerlist中的索引值，同时也是data-index属性的属性值，用来确定当前power |
| powerEditor | 必填，当前power的编辑状态，用于判断当前power是否被选中，与data-index属性一起使用，默认为false |