---
icon: javascript
date: 2023-02-10
category:
  - 前端
  - JS
tag:
  - 继承
  - 学习笔记
---

# JS 实现继承的方式

- 原型链继承
- 构造函数继承
- 组合继承
- 原型式继承
- 寄生式继承
- 寄生组合式继承

## 原型链继承

```js
function Parent() {
  this.name = "parent";
  this.choice = [1, 2, 3];
}

function Child() {
  this.type = "child";
}

console.log("before:", Child.prototype);

Child.prototype = new Parent();

console.log("after:", Child.prototype);

const child = new Child();

console.log("child:", child);
```

结果如图：
![image-20230210140553266](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20230210140553266.png)

原型链继承实际上就是改写了`Child`的原型对象，将`Parent`中的属性实例化到`Child.prototype`上；再将`Child.prototype.constructor`指向`Parent`

但是存在共享原型对象的问题：

```js
const c1 = new Child();
const c2 = new Child();
c1.choice.push(4);
console.log(c2.choice); //[1,2,3,4]
```

分析：
`c1`上不存在属性`choice`，于是往原型对象`Child.prototype`上去找，找到并添加了 4。

`c2`上不存在属性`choice`，于是往原型对象`Child.prototype`上去找，找到并读取`choice`。

是因为`c1`、`c2`使用的原型对象是共享的。

根据原型链的知识有如下解释：

1.`Child`是`child`的构造函数：

```js
child.__proto__ === Child.prototype; //true
```

2.`Function`是`Child`的构造函数：

```js
Child.__proto__ === Function.prototype; //true
```

3.`Parent`是`Child`原型对象的构造函数：

```js
Child.prototype.__proto__ === Parent.prototype; //true
```

所以得出结论：`child`是`Parent`实例的实例:

```js
child.__proto__.__proto__ === Parent.prototype; //true
```

## 构造函数继承

由于原型链继承存在原型对象上状态共享的问题，为了解决这个问题，可以使用`构造函数继承`。

```js
function Parent() {
  this.name = "parent";
  this.choice = [1, 2, 3];
}

function Child() {
  Parent.call(this);
  this.type = "child";
}

const child = new Child();

const c1 = new Child();
const c2 = new Child();
c1.choice.push(4);
console.log(c2.choice); //[1,2,3]
```

但还是存在问题，如果在 Parent 的原型对象上添加方法，child 是获取不到的：

```js
Parent.prototype.getName = function () {
  console.log(this.name);
};

c1.getName(); //c1.getName is not a function
```

为什么？

因为 `Parent` 是在 `Child` 构造函数内部通过 `call` 的方式调用的，虽然 `this` 指向了当前实例对象，但只是将 `Parent` 函数中原本的方法执行了一遍，并没有改变 `Child` 原型对象上的属性。

所以在 `c1` 中尝试读取 `getName` 方法的时候，发现实例本身不存在该属性，于是往该实例的原型对象上（Child.prototype）上找，发现也不存在，再往上也不存在，所以报错了。

相比第一种原型链继承方式，父类的引用属性不会被共享，优化了第一种继承方式的弊端，但是只能继承父类的实例属性和方法，不能继承原型属性或者方法

## 组合继承

结合原型链继承和构造函数继承的优点，实现组合继承。

```js
function Parent(name) {
  this.name = name;
  this.choice = [1, 2, 3];
}

//往原型对象上添加方法
Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child() {
  //构造函数继承，将Parent中的属性方法添加到Child中，不包括原型对象上的
  Parent.call(this);
  this.type = "child";
}

//原型链继承，继承Parent中所有的属性和方法，包括原型对象上的
//当Child的实例读取Parent中的属性和方法时，会先读取通过构造函数继承产生的实例和方法，相当于实现了重写，读取不到时可以通过原型对象读取到Parent原型对象上的属性和方法
Child.prototype = new Parent();

// 重置Child实例构造函数的指向
// 如果不重置会导致实例构造函数指向出现问题
// 错误的指向：c1.constructor === Parent
// 正确的指向：c1.constructor === Child
Child.prototype.constructor = Child;

const c1 = new Child();
const c2 = new Child();
c1.choice.push(4);
console.log(c2.choice); //[1,2,3]

c1.getName(); //parent
```

## 原型式继承

```js
let parent4 = {
  name: "parent4",
  friends: ["p1", "p2", "p3"],
  getName: function () {
    return this.name;
  },
};

let person4 = Object.create(parent4);
person4.name = "tom";
person4.friends.push("jerry");

let person5 = Object.create(parent4);
person5.friends.push("lucy");

console.log(person4.name); // tom
console.log(person4.name === person4.getName()); // true
console.log(person5.name); // parent4
console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]
```

这种继承方式的缺点也很明显，因为 Object.create 方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能

## 寄生式继承

寄生式继承是 JavaScript 中一种非常特殊的继承方式。它通过创建一个仅用于封装继承过程的对象，来实现对另一个对象的继承。

寄生式继承是一种继承方式，它可以创建一个仅用于封装继承过程的函数，该函数在内部以某种方式增强对象，最后再像普通对象一样返回对象。这种方式可以避免使用关键字 prototype 和 constructor。

这种继承方式的优点在于，它可以避免在继承过程中创建多余的对象，从而提高程序的效率。它通过以下步骤实现继承：

- 1.创建一个空对象，该对象继承自父对象
- 2.为这个空对象添加新的属性和方法
- 3.将这个对象赋值给子对象

```js
var superObj = {
  name: "super",
  getName: function () {
    return this.name;
  },
};

var subObj = (function () {
  var obj = Object.create(superObj);
  obj.name = "sub";
  obj.getSuperName = function () {
    return superObj.name;
  };
  return obj;
})();
```

在这个例子中，subObj 继承了 superObj 的所有属性和方法，同时还有了自己的特有属性和方法。这种继承方式通过创建一个匿名函数并立即执行来实现，因此它也称为“匿名函数自执行寄生式继承”。

但是，寄生式继承有一个缺陷：它无法正确地继承对象原型上的方法。因此，需要使用组合式继承来解决这个问题。

## 寄生组合式继承

寄生组合式继承是一种 JavaScript 中的继承模式，它将寄生式继承和组合式继承结合起来，以解决寄生式继承的缺陷。

寄生组合式继承通过调用 inheritPrototype 函数来实现继承。inheritPrototype 函数接收两个参数：子类型和超类型。在函数内部，首先通过调用 Object.create 创建一个对象，其原型为超类型的 prototype。接下来，通过将对象的 constructor 设置为子类型来增强对象，最后再将对象的原型设置为子类型的 prototype。

```js
// 超类型
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

// 寄生组合式继承函数
function inheritPrototype(subType, superType) {
  var prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

// 子类型
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
  console.log(this.age);
};

// 测试代码
var instance = new SubType("Nicholas", 29);
instance.colors.push("black");
console.log(instance.colors); // "red,blue,green,black"
instance.sayName(); // "Nicholas";
instance.sayAge(); // 29
```
