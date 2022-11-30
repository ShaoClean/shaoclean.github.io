---
icon: typescript
date: 2022-11-30
category:
  - 前端
  - Ts
tag:
  - 学习笔记
---

# 元素隐式具有 "any" 类型，因为类型为 "any" 的表达式不能用于索引类型 xxx

在写 CRM2.0 项目的过程中，使用`[]`来动态的读取对象中的值时 ts 报了这个错误。代码如下：

```ts
const onClickTab = ({ title }: any) => {
  let url = "";
  const params = {};
  const map = {
    基本信息: () => getBasic(),
    客户信息: () => getCustomer(),
  };
  // 元素隐式具有 "any" 类型，因为类型为 "any" 的表达式不能用于索引类型 "{ 基本信息: () => void; 客户信息: () => void; }"。
  if (map[title]) {
  }
};
```

原因是：key 值的类型不是 string，在 javascript 中是默认给你转好的，而在 Typescript 中则不是

解决方案一：
在 tsconfig.json 中 compilerOptions 里面新增忽略的代码，如下所示，添加后则不会报错

```
"suppressImplicitAnyIndexErrors": true
```

解决方案二：

```ts
export interface ENABLE_KEY<T> {
  [key: string]: T;
}

const onClickTab = ({ title }: any) => {
  let url = "";
  const params = {};
  const map: ENABLE_KEY<Function> = {
    基本信息: () => getBasic(),
    客户信息: () => getCustomer(),
  };
  //可以正常读取
  if (map[title]) {
  }
};
```

方案三：对其使用 keyof 进行判断

```ts
export function map(
  key: string | number | symbol,
  object: object
): key is keyof typeof object {
  return key in object;
}
```
