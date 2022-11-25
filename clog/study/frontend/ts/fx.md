---
icon: typescript
date: 2022-11-24
star: 20
category:
  - 前端
  - Ts
tag:
  - 泛型
  - 学习笔记
---
# 泛型


声明一个泛型函数,使用的时候可以使用断言，也可以由ts自动推导T的类型
```ts
function test<T>(x:T):T{
  return x
}
test(1)



function getReqObj<T>(arr:any[]):T{
  const obj = {};
  for(let item of arr){
    if(item.key){
      // @ts-ignore
      obj[item.key] = item.value
    }
  }
  return obj as T
}
const params = getReqObj(data)
```
