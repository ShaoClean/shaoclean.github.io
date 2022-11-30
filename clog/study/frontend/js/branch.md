---
icon: javascript
date: 2022-10-30
star: 20
category:
  - 前端
  - JS
tag:
  - 分支优化
  - 学习笔记
---

# 分支优化

```js
//原本复杂结构
function cry(type){
  if(type === "牛"){
    console.log("牛会哞哞叫");
  }else if(type === "狗"){
    console.log("狗会汪汪叫");
  }else if(type === "猫"){
    console.log("猫会喵喵叫");
  }else{
    console.log("我也不知道怎么叫");
  }
}

//改造1，判断的条件比较单一，当所有分支做的事情是类似时
function cry(type){
  const map = {
    牛:"牛会哞哞叫",
    狗:"狗会汪汪叫",
    猫:"猫会喵喵叫",
  }

  if(map[type]){
    console.log(map[type]);
  }else{
    console.log("我也不知道怎么叫");
  }
}

//改造2，判断的条件比较单一，当分支做的事情有自己的逻辑需要处理
function cry(type){
  const map = {
    牛:()=>{
      console.log("牛在哞哞叫");
    },
    狗:() => {
      console.log("狗去跑去了");
    },
    猫:() => {
      console.log("猫在吃鱼");
    },
  }

  if(map[type]){
    map[type]()//如果存在对应的映射关系，则执行相关的函数
  }else{
    console.log("我也不知道怎么叫");
  }
}

//改造3，判断的条件比较复杂，分支做的事情有自己的逻辑需要处理
function cry(type){
  //定义一个数组，数组中每一项数组包含两项内容。
  //数组第一个表示传入的参数符合哪一项的复杂条件。数组第二项表示符合第一项条件需要做的业务逻辑
  const map = [
    [
      ()=>type.includes("牛"),
      ()=>console.log("牛在哞哞叫") 
    ],
    [
      ()=>type.endsWith("虎"),
      ()=>console.log("虎要吃小动物") 
    ],
    [
      ()=>type.endsWith("猫") && type.length <= 2,
      ()=>console.log("猫出去玩了") 
    ]
  ]
  //传入的参数符合条件的一项
  const target = map.find( m => m[0]())

  if(target){
    target[1]()//如果存在符合的，则执行相关的函数
  }else{
    console.log("我也不知道怎么叫");
  }
}

cry("狗");
```

