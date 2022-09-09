---
icon: javascript
date: 2022-09-09
star: 10
category:
  - 前端
  - JS
tag:
  - 惰性函数
  - 学习笔记
---
# 惰性函数
函数执行的分支只会在函数第一次调用的时候执行，在第一次调用过程中，该函数会被覆盖为另一个按照合适方式执行的函数，下次执行的时候就执行覆盖后的函数

```js
let a = 6;

function test(arg){
  console.log("==============");
  if(a == 5){
    test = function(arg){
      console.log(arg);
    }
  }else{
    test = function(arg){
      console.log(arg + 1000);
    }
  }
  return test(arg)
}

test(1)
test(1)
test(1)
//==============
//1001
//1001
```

`==============` 只输出了一次，在`test`函数第一次运行的时候就确定了接下来的分支

然后`test`变成了全局的函数，在浏览器关闭的时候才会释放