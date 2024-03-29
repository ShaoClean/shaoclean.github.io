---
icon: vue
date: 2022-02-09
article: true
sticky: 10
star: 20
description: 这里是一些关于Vue2的笔记
category:
  - 前端
  - Vue
tag:
  - Vue2
  - 学习笔记
---

# Vue2

## vue.config.js 配置文件

使用 vue inspect > output.js 可以查看到 Vue 脚手架的默认配置

使用 vue.config.js 可以对脚手架进行个性化定制

详情见:https://cli.vue.js.org/zh

## ref 属性

1.被用来给元素或子组件注册引用信息（id 的替代者）

2.应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对象（vc）

3.使用方法

a.先打标识：`<h1 ref="XXX">...</h1>` 或 `<School ref="XXX"></School>`

b.随后通过`this.$refs.xxx`获取 dom 元素

## 配置项 props

功能：让组件接受外部传过来的数据

- 1.传递数据：`<Demo name="XXX">`

- 2.接收数据

  - 第一种方式（只接收）：

  ```vue
  export default{ props:['name'] }
  ```

  - 第二种方式(限制类型)：

  ```vue
  export default{ props:{ name:Number } }
  ```

  - 第三种方式（限制类型、限制必要性、制定默认值）：

  ```vue
  export default{ props:{ name:{ type:String,//类型 require:true,//必要性
  default:'老王'//默认值 } } }
  ```

  ::: info 备注
  1.props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告，
  若业务需求需要修改，请复制一份到 data 中，换一个名字，然后写成 this.XXX 的形式。

  2.本身 data 中不存在数据，即通过 props 传递过来的数据，最好不要修改，控制台会报错，

  3.如果同时存在，会优先显示 props 中的数据 （props 中的数据是优先被接受的，是优先被放在 VC 上的）
  所以可以在 data 中写 myAge:this.age，这样就能实现修改传递过来的数据不报错的情况
  :::

## mixin(混入)

    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方法：
        第一步，定义混合，例如：
          ｛
            data(){....},
            methods:{...}
          ｝

        第二步，使用混入，例如：
         (1)全局混入：Vue.mixin(xxx)
         (2)局部混入：mixins:['xxx']

## 插件

```
功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
定义插件：
对象.install=function（Vue,options）｛｝
使用插件：Vue.install
```

## 总结 ToDoList 案例

```
1.组件化编码流程：
	（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
	（2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
			i：一个组件在用：放在组件自身即可
			ii：一些组件在用：放在他们公共的父组件上（状态提升）
    （3）实现交互：从绑定事件开始

2.props适用于：
	（1）父组件==》子组件 通信
	（2）子组件==》父组件 通信（要求父先传给子一个函数）

3.使用v-model时要切记:v-model绑定的值不能是props传过来的值，因为props是不可以修改的

4.props传过来的弱势对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。
```

## webStorage

1.存储内容大小一般支持 5MB 左右（不同浏览器可能还不一样）

2.浏览器端通过 Windows.sessionStorage 和 Windows.localStorage 属性来实现本地存储机制。

3.相关 API：

​ 1.`xxxxStorage.setItem('key','value');`

​ 该方法接受一个值和键作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值

​ 2.`xxxxStorage.getItem(person);`

​ 该方法接受一个键名作为参数，返回键名对应的值

​ 3.`xxxxStorage.removeItem('key');`

​ 该方法接受一个值和键作为参数，并把该键名从存储中删除

​ 4.`xxxxStorage.clearItem();`

​ 该方法会清空存储中的所有数据

4.备注：

​ 1.SessionStorage 存储的内容会随着浏览器串口关闭而消失

​ 2.LocalStorage 存储的内容，需要手动清除才会消失

​ 3.`xxxxStorage.getItem(xxx);`如果 xxx 对应的 value 获取不到，那么 getitem 的返回值是 null

​ 4.`JSON.parse(null)`的结果依然是 null

## 组件的自定义事件

1.一种组件间通信的方式，适用于：子组件==》父组件

2.使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件`（事件的回调在A中）`

3.绑定自定义事件：

​ 1.第一种方式：在父组件中：`<Demo @clean="show"/>"`或`<Demo v-on:clean="show"/>"`

​ 2.第二种方式：在父组件中：

```
<Demo ref="demo"/>
...
mouted(){
this.$refs.xxx.$on('clean',this.show)
}
```

​ 3.若想让事件只触发一次，可以使用 once 修饰符，或者$once 方法

4.触发自定义事件：`this.$emit('clean',需要传递的参数)`

5.解绑自定义事件：`this.$off('clean')`

6.组件上也可以绑定原生 DOM 事件，需要使用`.native`修饰符

7.注意：通过`this.$refs.$emit.('clean',回调)`绑定自定义事件时，回调要么配置在 methods 中,要么用箭头函数，否则 this 指向会出现问题

## 全局事件总线（GlobalEventBus）

​ 1.一种组件间通信的方式，适用于任意组件间通信

​ 2.安装全局事件总线：

```javascript
new Vue({
    .....
    beforeCreate(){
    Vue.prototype.$bus=this//安装全局事件总线,$bus就是当前应用的vm
},
    .....
})
```

3.使用事件总线：

​ 1.接收数据：A 组件想要接收数据，则在 A 组件中给$bus 绑定自定义事件，事件的回调留在 A 组件自身

```javascript
    methods(){
        demo(data){
            ....
        }
    },
    mounted(){
        this.$bus.$on('eventName',callback)
    }
```

​ 2.提供数据：`this.$bus.$emit('eventName',需要传递的数据)`

4.最好在 beforeDestroy 钩子中,用$off 去解绑当前组件所用到的时间

## 消息订阅与发布

安装消息订阅的组件库，安装命令（有好几个消息订阅与发布的组件库，不一定用这个，只是语法不一样）

`npm i pubsub-js`

1.是一种组件间通信的方式，适用于任意组件间通信

2.使用步骤：

​ 1.安装 pubsub:`npm i pubsub-js`

​ 2.引入：`import pubsub from 'pubsub-js'`

​ 3.接受数据：A 组件想接受数据，则在 A 组件中订阅消息，订阅的回调留在 A 组件自身

```js
	methods(){
        demo(data){......}
    }
    ....
    mounted(){
        this.pubId = pubsub.subscribe('xxx',this.demo)//订阅消息
    }
```

​ 4.提供数据：`pubsub.publish('xxx',数据)`

​ 5.最好在 beforeDestroy 钩子中，用`pubsub.unsubscribe(this.pubId)`去<span style='color:red'>取消订阅</span>

## nextTick

1.语法：`this.$nextTick(callback`

2.作用：在下一次 DOM 更新结束后执行其指定的回调

3.什么时候用：当改变数据后，要基于更新后的新 DOM 进行某些操作时，要在 nextTick 所指定的回调函数中执行

## Vue 封装的过渡与动画

1.作用:在插入、更新或移除 DOM 元素时,在合适的时候给元素添加样式类名

2.图示:

<!-- ![image-20220123151308468](C:\Users\n'j\AppData\Roaming\Typora\typora-user-images\image-20220123151308468.png) -->

3.写法:

​ 1.准备好样式:

​ ·元素进入的样式:

​ 1.v-enter:进入的起点

​ 2.v-enter-active:进入的过程中

​ 3.v-enter-to:进入的终点

​ ·元素离开的样式:

​ 1.v-leave:离开的起点

​ 2.v-leave-active：离开过程中

​ 3.v-leave-to：离开的终点

​ 2.使用`<transition>`包裹过渡的元素,并配置 name 属性:

```html
<transition name="hello">
  <h1 v-show="isShow">你好！</h1>
</transition>
```

​ 3.备注:若有多个元素需要过渡,则需要使用`<transition-group>`，且每个元素都要指定 key 值,例如`:key="1"`

## Vue 脚手架配置代理

**方法一**

在 vue.config.js 中添加如下配置

```
devServer:{
proxy:"http://localhost:5000"
}
```

说明：

​ 1.优点：配置简单,请求资源时直接发给前端(8080)即可。

​ 2.缺点:不能配置多个代理,不能灵活的控制请求是否走代理

​ 3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先匹配前端资源）

**方法二**

编写 vue.config.js 配置具体代理规则

```
module.exports = {
  devServer: {
    proxy: {
      '/api1': {//匹配所有以'/api1'开头的请求路径
        target: 'http：//localhost:5000',//代理目标的基础路径
        ws: true,
        changeOrigin: true
        pathRewrite:{'^/api1':''}//重写转发给服务器的资源请求路径，将'/api1'开头的路径改为''(空)
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
/*
	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
	changeOrigin默认值为true
*/
```

说明：

​ 1.优点：可以配置多个大力，且可以灵活的控制请求头是否走代理

​ 2.缺点：配置略微繁琐，求情资源时必须加前缀。

## 插槽

1.作用：让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于父组件====》子组件(组件的使用者)

2.分类：默认插槽、具名插槽、作用域插槽

3.使用方式：

​ 1.默认插槽

```
父组件中：
	<Category>
		<div>html结构</div>
	</Category>

子组件中：
	<template>
		<div>
			<slot>我是默认值,当使用者没有传递数据时，我会显示</slot>
		</div>
	<template>
```

​ 2.具名插槽

```
父组件中：
	<Category>
		<div slot="center">html结构</div>
		<template slot="center" 或 v-slot:center>
			<div>

			</div>
		<template>
	</Category>

子组件中：
	<template>
		<div>
			<slot name="center">我是默认值,当使用者没有传递数据时，我会显示</slot>
		</div>
	<template>

```

​ 3.作用域插槽

​ 1.理解：数据存在于组件自身，但是数据的结构（展现方式）可以根据组件的使用者来定义

```
父组件中：
	<Category>

		<template scope="data">
			{{data}}data接收的是一个对象
			<ul>
				<li v-for="(item,index) in data.xxx" :key="index"></li>
			</ul>
		<template>
	</Category>

子组件中：
<template>
    <div>
        <slot :games="games">我是默认值,当使用者没有传递数据时，我会显示</slot>
    </div>
<template>

<script>
	export default{
		name:"Category",
		data(){
			return{
				games:['CF','LOL','DNF','cs']
			}
		}
	}
</script>
```

## Vuex

**1.概念**

​ 在 vue 中实现集中式状态（数据）管理的一个 vue 插件，对 vue 应用中多个组件的共享状态进行集中式管理（读/写），也是一种组件间的通信方式，且适用于任意组件之间的通信

**2.如何使用**

多个组件需要共享数据时

**3.环境搭建**

​ 1.创建文件：`src/store/index.js`

```
//引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//准备actions，actions用于响应各个组件中的事件
const actions = {}

//准备mutations，mutations用于操作数据的状态
const mutations = {}

//准备state，state用于存储数据
const state = {}

//创建store简写
const store = new Vuex.Store({
  actions,
  mutations,
  state,
})

//导出store
export default store
```

​ 2.在`main.js`中创建 vm 时传入`store`配置项

```
//引入Vue
import Vue from 'vue'
//引入app
import App from './App.vue'

//引入store
import store from './store/index'

new Vue({
  el:'#app',
  render:h=>h(App),
  store,
})
```

**4.基本使用**

​ 1.初始化数据、配置`actions、mutations`，操作文件`store.js`

```
//引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//准备actions，actions用于响应各个组件中的事件
const actions = {
  oddJia(context,value){
    if(context.state.sum % 2){
      context.commit('ODDJIA',value)
    }

  },
  waitJia(context,value){
    setTimeout(()=>{
      context.commit('WAITJIA',value)
    },500)
  }
}

//准备mutations，mutations用于操作数据的状态
const mutations = {
  JIA(state,value){
    state.sum += value
  },
  JIAN(state,value){
    state.sum -= value
  },
  ODDJIA(state,value){
    state.sum += value
  },
  WAITJIA(state,value){
    state.sum += value
  }
}

//准备state，state用于存储数据
const state = {
  sum:0,
}


//创建store简写
const store = new Vuex.Store({
  actions,
  mutations,
  state,
})

//导出store
export default store

```

​ 2.组件中读取 vuex 的数据：`this.$store.state.sum`

​ 3.组件中修改 vuex 的数据：`this.$store.dispatch('actions中的方法名',需要传递的数据)`或`this.$store.commit('mutations中的方法名，需要传递的数据')`

​ **备注：**

​ 若没有网络请求或其他的业务逻辑，组件也可以越过 actions，不用写 dispatch，直接编写 commit

**5.getters 属性**

​ 1.概念：当 state 中的数据需要加工后再使用时，可以使用 getters 加工

​ 2.在`$store.js`中追加`getters`配置

```
...

//准备一个getters，用于加工state中的数据
const getters ={
  bigSum(state){
    return state.sum * 10
  }

 //创建并暴露（导出）store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters

})


```

​ 3.组件中读取`$store.getters.bigSum`

**6.四个 map 方法的使用**

​ 1.`mapState`方法:用于帮助我们映射`state`中的数据为计算属性

```
<script>
import {mapState} from 'vuex'
computed:{
//借助mapState属性生成计算属性sum name subject（对象写法）
  ...mapState({sum:'sum',name:'name',subject:'subject'})

//借助mapState属性生成计算属性sum name subject（数组写法/简写）
  ...mapState(['sum','name','subject']),
}
</script>
```

​

​ 2.`mapGetters`方法：用于帮助我们映射`getters`中的数据为计算属性

```
<script>
import {mapGetters} from 'vuex'
computed:{
//借助mapGetters属性生成计算属性sum name subject（对象写法）
  ...mapGetters({sum:'sum',name:'name',subject:'subject'})

//借助mapGetters属性生成计算属性sum name subject（数组写法/简写）
  ...mapGetters(['sum','name','subject']),
}
</script>

```

​ 3.`mapActions`方法：用于帮助我们生成与`actions`对话的方法，即包含`$store.dispatch(xxx)`的函数

```
<script>
import {mapActions} from 'vuex'
methods:{

//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
  ...mapActions({incrementOdd:'oddJia',incrementWait:'waitJia'}),

//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
// ...mapActions(['oddJia','waitJia'])

}
</script>
```

​ 4.`mapMutations`方法：用于帮助我们生成与`mutations`对话的方法，即包含`$store.commit(xxx)`的函数

```
<script>
import {mapMutations} from 'vuex'
methods:{

  //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
  ...mapMutations({increment:'JIA',decrement:'JIAN'}),
  /* 以上代码生成的代码等同于下面的两个方法，和原本我们写的方法有点区别，这里的value值得注意：
  由于在template模板标签里面写的是@click="increment"，这种写法虽然没有传参，但是默认是传参的且传的参数是eventMouse鼠标事件
  所以想要把传的参数改为我想要的n，就需要在原本的@click="increment"谢成@click="increment（n）"带参数的形式
  */

  //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
  //注意对应的@click事件中的方法名也要改成‘JIA（n）’和‘JIAN（n）’
  // ...mapMutations(['JIA','JIAN']),
}
</script>
```

**备注：**

​ mapActions 与 mapMutations 在传递数据时，需要在模板中调用方法是写好要传递的参数，否则传递的是事件对象

**7.模块化+命名空间**

​ 1.目的：让代码更好维护，让多种数据分类更加明确

​ 2.修改`store.js`

```
const countAbout = {
namespaced:true,//开启命名空间
actions:{},
mutations:{},
state:{},
getters:{}
}

const countAbout = {
namespaced:true,//开启命名空间
actions:{},
mutations:{},
state:{},
getters:{}
}

export default new Vuex.Store{
	modules:{
	countAbout,
	personAbout
	}
}
```

​ 3.开启命名空间后，组件读取 state 中的数据：

```
//方式一：直接自己读取
this.$store.state.personList
//方式二：借助mapState读取
...mapState{'countAbout',['sum','name','subject']}
```

​ 4.开启命名空间后，组件读取 getters 中的数据：

```
//方式一：直接自己读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取
...mapGetters{'countAbout',['bigSum']}
```

​ 5.开启命名空间后，组件调用 dispatch：

```
//方式一：自己直接dispatch
this.$store.dispatch['personAbout/firstPersonName'，person]
//方式二：借助mapActions
...mapActions('countAbout',{incrementOdd:'oddJia',incrementWait:'waitJia'}),
```

​ 6.开启命名空间后，组件调用 commit：

```
//方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',personObj)
//方式二：借助mapMutations
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'})
```

## 路由

**1.基本使用**

​ 1.安装 vue-router，命令：`npm i vue-router`

​ 2.应用插件：`Vue.use(VueRouter)`

​ 3.编写 router 配置项（创建 router 文件夹并在该文件夹下创建 index.js 文件）

```
//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'

//创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }
  ]
})
```

​ 4.实现切换（active-class 可实现展示当前组件时的样式）

```
<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
```

​ 5.指定展示位置（类似于插槽）

```
<router-view></router-view>
```

**2.几个注意点**

​ 1.路由组件通常存放在`pages`文件夹，一般组件通常存放在`computed`文件夹

​ 2.通过切换，“隐藏”的路由组件，默认是被销毁的，需要的时候再去挂载

​ 3.每个组件都有自己的`$route`属性，里面存储这自己的路由信息

​ 3.整个应用只有一个 router，可以通过组件的`$router`属性获取到

**3.多极路由**

​ 1.配置规则，使用 children 配置项

```
//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

//创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[//通过children配置项配置子级路由
        {
          path:'news',//此处一定不要写/news
          component:News
        },
        {
          path:'message',//此处一定不要写/message
          component:Message
        }
      ]
    }
  ]
})
```

​ 2.跳转（要洗完整路径）

```
<router-link to="/home/news">News</router-link>
```

**4.路由的 query 参数**

​ 1.传递参数

```
<!-- 跳转路由并携带Query参数,to的字符串写法 -->
        <!-- <router-link :to="`/home/message/detail?id=${messageList[0].id}&title=${messageList[0].title}`">message002</router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带Query参数,to的对象写法 -->
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }">
          message002
        </router-link>
```

​ 2.接受参数：

```
$route.query.id
$route.query.title
```

**5.命名路由**

​ 1.作用：可以简化路由的跳转

​ 2.如何使用

​ 1.给路由命名：

```
{
      name:'guanyu',
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'xiangqing',
              path:'detail',
              component:Detail
            }
          ]
        }
      ]
    }
```

​ 2.简化跳转

```
<!-- 简化前，需要写完整的路径 -->
<router-link  to="/about/news/detail">About</router-link>

<!-- 简化后，直接通过名字跳转 -->
<router-link  :to="{name:'xiangqing'}">About</router-link>

<!-- 简化写法配合Query参数 -->
<router-link :to="{
          name:'xiangqing',
          query:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }">
          message002
</router-link>
```

**6.路由的 params 参数**

​ 1.配置路由，声明接受 params 参数

```
 {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'xiangqing',
              path:'detail/:id/:title',//:id和:title表示占位符，告诉detail路径后面的两个不是路径而是params参数
              component:Detail
            }
          ]
        }
      ]
    }
```

​ 2.传递参数

```
<!-- 跳转并携带params参数，to的字符串写法 -->
<router-link :to="/home/message/detail/666/nihao">message001</router-link>

<!-- 跳转并携带params参数，to的对象写法 -->
<router-link :to="{
          name:'xiangqing',
          params:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }">
          message002
</router-link>
```

​ **注意：**

​ 路由携带 params 参数是，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置

​ 3.接收参数

```
$route.params.id
$route.params.title
```

**7.路由的 props 配置**

​ 作用：让路由组件更方便的收到参数

```
 name:'xiangqing',
              path:'detail/:id/:title',//:id和:title表示占位符，告诉detail路径后面的两个不是路径而是params参数
              component:Detail,

              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
              // props:{a:1,b:'hello'}

              //props的第二种写法，值为布尔值
              // 若值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
              // props:true

              //props的第三种写法，值为函数
                props($route){
                // return {id:'666',title:'你好啊'}
                return {id:$route.query.id,title:$route.query.title}
              },
              //解构赋值的连续写法
        /*       props({query:{id,title}}){
                return {id,title}
              } */
```

**8.`<router-link>`的 replace 属性**

​ 1.作用：控制路由跳转时操作浏览器历史记录的模式（默认是 push 模式，可以后退）

​ 2.浏览器的历史记录有两种写入方式：分别为`push`和`replace`，push 是追加历史记录，replace 是替换当前记录。路由跳转时候默认为 push

​ 3.开启 replace 模式

```
<router-link :replace="true" >开启replace模式方法一</router-link>
<router-link replace >开启replace模式方法二</router-link>
```

**9.编程式路由导航**

​ 1.作用：不借助`<router-link>`实现路由跳转，让路由跳转更加灵活

​ 2.具体编码：

```
methods:{
  pushShow(){
    this.$router.push({
      name:'xiangqing',
      params:{
        id:this.messageList[0].id,
        title:this.messageList[0].title
      }
    })
  },
  replaceShow(){
    this.$router.replace({
      name:'xiangqing',
      params:{
        id:this.messageList[0].id,
        title:this.messageList[0].title
      }
    })
  }
}

 this.$router.back()//后退一步
 this.$router.forward()//前进一步
 this.$router.go(value)//前进/后退指定步数
```

**10.缓存路由组件**

​ 1.作用：让不展示的路由组件保持挂载，不被销毁

​ 2.具体编码

```
<!-- 可以缓存keep-alive标签中的组件，在include中说明需要缓存的组件，不说明则全部缓存
    include中写的是组件中的name名字     -->
<!--单个组件-->
<keep-alive include="News">
	<router-view></router-view>
</keep-alive>

<!--多个组件-->
<keep-alive :include="['News','Message']">
        <router-view></router-view>
</keep-alive>
```

**11.两个新的生命周期函数**

​ 1.作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态

​ 2.具体名字

​ 1.`activated`路由组件被激活时触发*（该组件从没有出现==》出现在我面前叫激活）*

​ 2.`deactivated`

**12.路由守卫**

​ 1.作用：对路由进行权限控制

​ 2.分类：全局守卫、独享守卫、组件内守卫

​ 3.全局守卫：

```
//全局前置路由守卫
//在每一次路由切换之前都会调用一个函数（例如：从About==》Home算一次切换）
//整套（index.js）规则初始化的时候也会调用
router.beforeEach((to,from,next)=>{

  console.log('前置路由守卫',to,from);
  //判断是否需要鉴定权限
  if(to.meta.isAuth){
    if(localStorage.getItem('name')==='clean'){
      document.title = to.meta.title || 'Clean'
      next()//放行
    }else{
      alert('name不正确！没有权限访问')
    }
  }else{
    document.title = to.meta.title || 'Clean'
    next()//放行
  }

}
)

//后置路由守卫（没有next参数）
//初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
  console.log('前置路由守卫',to,from);
  document.title = to.meta.title || 'Clean'
})
```

​ 4.独享路由守卫

```
 beforeEnter:(to,from,next)=>{
            //判断是否需要鉴定权限
            if(to.meta.isAuth){
              if(localStorage.getItem('name')==='clean'){
                document.title = to.meta.title || 'Clean'
                next()//放行
              }else{
                alert('name不正确！没有权限访问')
              }
            }else{
              document.title = to.meta.title || 'Clean'
              next()//放行
            }
          }
```

​ 5.组件内路由守卫

```
  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to,from,next){
    if(to.meta.isAuth){
    if(localStorage.getItem('name')==='clean'){
      document.title = to.meta.title || 'Clean'
      next()//放行
    }else{
      alert('name不正确！没有权限访问')
    }
  }else{
    document.title = to.meta.title || 'Clean'
    next()//放行
  }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next){

  }
```

**13.路由器的两种工作模式**

​ 1.对于一个 url 来说，什么事 hash 值？————#及其后面的内容就是 hash 值

​ 2.hash 值不会包括在 HTTP 请求中，即 hash 值不会带给服务器

​ 3.hash 模式：

​ 1.地址中永远带着#号，不美观

​ 2.若以后将地址通过第三方手机 app 分享，若 app 校验严格，则地址会标记为不合法

​ 3.兼容性较好

​ 4.history 模式

​ 1.地址干净，美观

​ 2.兼容性和 hash 模式相比略差

​ 3.应用部署上线时需要后端人员支持，解决刷新页面服务端 404 的问题
