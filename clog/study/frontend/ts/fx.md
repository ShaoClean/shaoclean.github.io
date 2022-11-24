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
function add<T>(x:T,y:T):T{
  return x + y
}
function add(1,2)//3
function add('clean','hi')//cleanhi
```
