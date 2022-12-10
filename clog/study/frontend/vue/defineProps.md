---
icon: vue
date: 2022-09-27
category:
  - 前端
  - Vue
tag:
  - defineProps
  - withDefaults
  - 学习笔记
---

# defineProps

在`<script setup lang="ts"></script>`中接收父组件传递过来的数据需要使用`defineProps`

## 传递参数

定义一个组件(my-info)：
```vue
<script setup lang="ts">
  const props = defineProps(["info","salary"])
</script>
<template>
  <h1>{{props.info.name}}</h1>
  <h1>{{props.info.age}}</h1>
  <h1>{{props.info.sex}}</h1>
  <h1>{{props.salary}}</h1>
</template>
```

在`App.vue`中使用该组件：
```vue
<script setup lang="ts">
  import my-info from "./my-info.vue"
  const info = {
    name:"clean",
    age:18,
    sex:"男"
  }
</script>
<template>
	<my-info :info="info" salary="30k"></my-info>
 <!--<my-info :name="'clean'" age="18" sex="男"></my-info>-->
</template>
```

结果如图：

![image-20220927220117849](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927220117849.png)

:::warning 注意

传递props的方式不一定需要和例子中的相同

`:name`是动态传值的方式，此处为了显示有这样的情况，如不需要动态传值，只需要使用`name="clean"`即可

:::

## 类型检验

对于以对象形式声明中的每个属性，key 是 prop 的名称，而值则是该 prop 预期类型的构造函数。比如，如果要求一个 prop 的值是 `number` 类型，则可使用 `Number` 构造函数作为其声明的值。

没有传入`info时`的结果：

![image-20220927221040749](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927221040749.png)

```vue
<script setup lang="ts">
  // const props = defineProps(["info","salary"]);
  const props = defineProps({
    //对salary做类型校验，且该类型为Number（数值类型）。多个类型使用数组表示，如：[Number,String]
    salary:Number,
    // 对象或数组的默认值
    info:{
      type:Object,
      default(props){
        console.log(props)
        return{
          name:"scz",
          age:16,
          sex:"boy"
        }
      }
    }
  })
</script>
```

:::tip

给对象或数组设置默认值时

必须从一个工厂函数返回。

该函数接收组件所接收到的原始 prop 作为参数。

但是需要注意的是，当这个对象被作为props传入的时候，就不会调用这个`default()`函数

具体见下面的例子

:::

- 没有传入`info`时：

```vue
//App.vue
<my-info  salary="30k" ></my-info>
```

控制台输出：

![image-20220927222457007](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927222457007.png)

- 传入`info`时（不调用`default`函数）

```vue
<script setup lang="ts">
import myInfo from './table/my-info.vue';

const info = {
  name:"clean",
  age:18,
  sex:"男"
}
</script>

<template>
  <my-info  salary="30k" :info="info"></my-info>
</template>
```

控制台无输出：

![image-20220927222649356](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927222649356.png)

## 使用TS定义类型

引入ts后，做类型校验就比较方便了：

```vue
<script>
  const props = defineProps<{
    salary:string,
    info:{
      name:string,
      age:number,
      sex:string
    }
  }>()
</script>
```

:::warning 注意

在使用ts的方式来声明props类型的时候，要么使用运行时声明，要么使用类型声明。同时使用两种声明方式会导致编译报错。

:::

这种方式虽然比较方便，但是并不能设定默认值，需要使用`withDefault`函数来设定默认值。

来看一下官网给出的案例：

```ts
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})

```

按照上面的案例修改之前的类型检验

```vue
<script>
const props = withDefaults(
  defineProps<{
    salary: string;
    info: {
      name: string;
      age: number;
      sex: string;
    };
  }>(),
  {
    salary: "50k",
    info: () => {
      return {
        name: "scz",
        age: 16,
        sex: "boy",
      };
    },
  }
);
</script>
```

传入`salary`和`info`两个值时的结果如图：

![image-20220927233825270](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927233825270.png)



没有传入时的结果：

![image-20220927234225945](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927234225945.png)

:::warning 注意

需要注意的是，如果给对象或者是数组设定默认值的时候，需要通过函数返回值的形式来设定。（具体原因暂时不详，后续知道了补上）

:::