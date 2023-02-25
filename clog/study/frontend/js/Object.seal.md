---
icon: javascript
date: 2023-02-24
category:
  - 前端
  - JS
tag:
  - 学习笔记
---

# Object.seal()
>通常，一个对象是可扩展的（可以添加新的属性）。密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。但属性的值仍然可以修改。尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换成访问器属性，结果会静默失败或抛出TypeError（在严格模式 中最常见的，但不唯一）。

和Object.freeze()的区别就是，Object.seal()能修改属性值，其它都一样

```js
const obj = {
  a:'im a',
  b:'im b',
  c:[1,2,3]
}

//返回之前对象的引用
let sealedObj = Object.seal(obj);

//1.不能添加新的属性
obj.d = 'im d'
console.log(obj);

//2.属性不可配置（不能重新定义访问器）
// Object.defineProperty(obj,'a',{
//   get(){
//     console.log('im changed a!!');
//     return 'changed a'
//   }
// })

//2.属性不可配置（不能删除）
delete obj.a

//里面的数组可以操作
obj.c.push(4)
obj.c.shift();

console.log(obj);

//可以遍历
for(let key in obj){
  console.log(key);
}
```

