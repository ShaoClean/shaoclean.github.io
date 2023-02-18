---
icon: javascript
date: 2023-02-03
category:
  - 前端
  - JS
tag:
  - 学习笔记
---

## 'false' == false

隐式转换规则：

> - If Type(x) is Number and Type(y) is String,
>       return the result of the comparison x == ToNumber(y).
> - If Type(x) is String and Type(y) is Number,
>       return the result of the comparison ToNumber(x) == y.
> - If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
> - If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).

1.`false` 符合Boolean类型，将它转换成数值类型 : `Number(false) => 0`

经过1后变为：`'false' == 0`

2.`'false'`符合String类型，将它转换成Number类型：`Number('false') => NaN`

经过2后变为：`NaN == 0`

所以最终结果变为`false`