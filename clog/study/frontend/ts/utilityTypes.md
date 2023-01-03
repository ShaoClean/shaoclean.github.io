---
icon: typescript
date: 2023-01-03
category:
  - 前端
  - Ts
tag:
  - utilityTypes
  - 学习笔记
---

# 实用类型

## Record类型
```ts
type Props = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const color: Record<Props, RGB | string> = {
  red: [255, 0, 0],
  green: 'green',
  blue: 'blue'
}

```

## Partial类型和Omit类型一起使用

```ts
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
}

function badUpdateProduct(
  id: Product["id"],
  productInfo: Product
) {}

// 此时的productInfo参数，更新产品时不需要传入所有信息，只需要传入想要修改的东西
// 做法如下
function goodUpdateProduct(
  id: Product["id"],
  productInfo: Partial<Omit<Product,"id">>
) {}

// 以上类型等价于：
// interface Product {
//   title?: string;
//   description?: string;
//   price?: number;
//   rating?: number;
// }

```
