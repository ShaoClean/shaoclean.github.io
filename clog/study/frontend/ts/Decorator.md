---
icon: typescript
date: 2022-09-17
star: 20
category:
  - 前端
  - Ts
tag:
  - 装饰器
  - Decorator
  - 学习笔记
---
# 装饰器

> 随着TypeScript和ES6里引入了类，在一些场景下我们需要额外的特性来支持标注或修改类及其成员。 装饰器（Decorators）为我们在类的声明及成员上通过元编程语法添加标注提供了一种方式。 Javascript里的装饰器目前处在 [建议征集的第二阶段](https://github.com/tc39/proposal-decorators)，但在TypeScript里已做为一项实验性特性予以支持。

装饰器的本质其实就是一个函数，一种特殊类型的声明，它能够被附加到[类声明](https://www.tslang.cn/docs/handbook/decorators.html#class-decorators)，[方法](https://www.tslang.cn/docs/handbook/decorators.html#method-decorators)， [访问符](https://www.tslang.cn/docs/handbook/decorators.html#accessor-decorators)，[属性](https://www.tslang.cn/docs/handbook/decorators.html#property-decorators)或[参数](https://www.tslang.cn/docs/handbook/decorators.html#parameter-decorators)上。在需要装饰的地方使用`@expression`这样的表达形式。

装饰器只能在类中使用

## 启用装饰器

目前ts的装饰器是一项实验性的特性，默认在ts的项目里面是不支持的，需要在`tsconfig.json`文件中手动开启：

```json
//tsconfig.json
"compilerOptions": {
    "experimentalDecorators": true
 }
```

## 快速上手

例如有一个`decorator`装饰器：

```ts
function decorator(target:any,key:string,describtor:any){
  console.log(target,key,describtor)
}
```

还有一个`Person`类

```ts
class Person{
  age:number = 18
  
  @decorator
  getAge(){
    console.log("getAge function",this.age);
  }
}
```

在没有调用类的情况下看一下控制台的输出：

![image-20220917134238195](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220917134238195.png)

可以看到在没有调用类的情况下这个函数就已经执行了

为了可以接受参数的问题，使用函数柯理化的方式来定义一个装饰器：

```ts
class Person{
  age:number = 18

  @decorator(1)
  getAge(){
    console.log("getAge function",this.age);
  }
}

function decorator(add:number){
  return function(target:any,key:string,describtor:any){
    console.log(target,key,describtor);
    console.log(add);
  }
}

const p = new Person;
p.getAge();

```

再次看一下控制台打印的信息：

![image-20220917140453867](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220917140453867.png)

成功的接收到了参数，顺便可以看一下执行的顺序是从上到下的。	

可以通过重写`describtor.value`重载函数来改变原先类中的一些信息：

```ts
function decorator(add:number){
  return function(target:any,key:string,describtor:any){
    console.log(target,key,describtor);
    console.log(add);
    //保存之前的函数
    const preFun = describtor.value;
    //函数重载
    describtor.value = function(...args:any[]){
      this.age = this.age + add;
      preFun.apply(this,args)
    }
  }
}
```

看一下控制台的打印信息：

![image-20220917141940792](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220917141940792.png)