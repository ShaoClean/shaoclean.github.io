---
icon: vue
date: 2023-02-04
category:
  - 前端
  - Vue
tag:
  - 响应式原理
  - 学习笔记
---

# 响应式原理

## defineProperty 实现响应式

将一个对象中的属性不断的递归进行数据劫持，实现响应式。

那么会遇到这么一个问题，如果对象属性多、嵌套层次深的情况下，会不断的进行递归，直至将整个对象中的所有属性完成数据响应式的创建。

这个过程会产生性能的问题。

而且监测不到对数组属性的操作，也无法监测到数据被删除时候的情况，而是 Vue 将这些方法进行了重写，从而实现监测。

```js
// 1.定义一个基本的响应式方法
function defineReactive(obj, key, val) {
  // 5.如果存在多层的嵌套，需要递归
  observe(val);
  Object.defineProperty(obj, key, {
    get() {
      console.log(key + " is read");
      return val;
    },
    set(newVal) {
      // 6.如果存在多层的嵌套，需要递归
      observe(newVal);
      console.log(key + " is set as " + newVal);
    },
  });
}

// 2.测试defineReactive方法
// const obj = {}
// const reactiveObj = defineReactive(obj,'a',1)
// obj.a = 2

// 3.对象存在多个key时,自动赋值
function observe(obj) {
  if (typeof obj !== "object" || obj === null) return;
  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, obj[key]);
  });
}
// 4.测试observe方法
const obj = {
  a: 1,
  b: 2,
  cObj: {
    c1: 3,
    c2: 4,
  },
  arr: [1, 2, 3, 4],
};
observe(obj);
obj.a = 3;
obj.cObj.c1;
obj.arr.push(444);
```

重写数组方法：

```js

// 数组重写
const originalProto = Array.prototype
const arrayProto = Object.create(originalProto)
['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort'].forEach(method => {
  arrayProto[method] = function () {
    originalProto[method].apply(this.arguments)
    dep.notice()
  }
});

// set、delete
Vue.set(obj,'bar','newbar')
Vue.delete(obj),'bar')

```

## Proxy 实现响应式

Proxy 可以实现对数组原声操作方法对监听，不用在重写方法。而且 Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等，这是 Object.defineProperty 不具备的

```js
function reactive(obj) {
  if (typeof obj !== "object" && obj != null) {
    return obj;
  }
  // Proxy相当于在对象外层加拦截
  const observed = new Proxy(obj, {
    get(target, key, receiver) {
      // reflect保证this指向
      const res = Reflect.get(target, key, receiver);
      console.log(`获取${key}:${res}`);
        //  处理嵌套情况，身略isObject具体实现，该函数用于判断是否为一个对象
      return isObject(res) ? reactive(res) : res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value, receiver);
      console.log(`设置${key}:${value}`);
      return res;
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(target, key);
      console.log(`删除${key}:${res}`);
      return res;
    },
  });
  return observed;
}

const obj = [1, 2, 3];
const proxtObj = reactive(obj);
obj.push(4); // ok
```

## 关于`Reflect`

这是一个静态方法，它可以在获取对象属性的时候指定 this 指向

```js
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      console.log(key);
      return Reflect.get(target, key);
    },
  });
}

const People = reactive({
  _name: "people",
  get name() {
    return this._name;
  },
});

const Man = {
  _name: "man",
};

Man.__proto__ = People;

// Reflect中没有指定receive时，按照预期正常显示
// Reflect.get(target, key)
let m1 = Man._name;
m1; //man
let m2 = Man.name;
m2; //people

// Reflect中指定receive时，不符合预期
// Reflect.get(target, key，receive)
let m1 = Man._name;
m1; //man
let m2 = Man.name;
m2; //man
```

我们发现，在`Reflect`中指定了`receive`后,`m2`的值超乎了预期，为什么会变成了`man`呢？

是因为传入了`receive`参数，它能够指定当前反射对象的 this 指向，将 this 指向当前的`target`。

因此在`Man`上读取`name`的时候，当前的`target`就是`Man`，this 的指向就是`Man`，所以读到的值就是`man`
