---
icon: javascript
date: 2022-03-18
star: 10
category:
  - 前端
  - JS
tag:
  - ES6
---
# ES6

## 1.static类

static用于类（class）中声明静态方法。

不能在类的实例中调用类中的静态方法，而应该通过类本身调用。

这些通常是实用程序方法，例如创建或克隆对象的功能。

静态方法调用同一个类中的其他静态方法，可使用this关键字。如下

```js
class StaticMethodCall {
    static staticMethod() {
        return 'Static method has been called';
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
    }
}
StaticMethodCall.staticMethod();
// 'Static method has been called'
 
StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'
```

类中的非静态方法不可以直接使用this关键字访问或调用静态方法，而需要用类名来调用。

或者用构造函数的属性来调用，如下。

```js
class StaticMethodCall {
    constructor() {
        console.log(StaticMethodCall.staticMethod());
        // 'static method has been called.'
        console.log(this.constructor.staticMethod());
        // 'static method has been called.'
    }
    static staticMethod() {
        return 'static method has been called.';
    }
}
```

## 2.for...of  和 for...in

for of遍历的是值，for in遍历的是索引

```js
let person = ['a','v','c','e']
for(let p in person){
	console.log(p);
}
//0 1  2  3
for(let p of person){
	console.log(p);
}
//a v  c  e
```

## 3.[变量名]

可以将变量对应的值作为对象中的属性名

```js
let a = 'clean'
let b ={
	[a]:'shaochenzhe',
}

console.log(b);//clean: "shaochenzhe"
```



## 4.Symbol

Symbol是ES6新增的基本数据类型，本质上是一种唯一标识符

```js
let identity = {
  student:'student',
  boss:'boss',
  mother:'mother'
}

function createRole (type){
  if(type === identity.boss){
  	console.log('i am boss');
  }else if(type === identity.student){
  	console.log('i am student');
  }else if (type === identity.mother){
  	console.log('i am mother');
  }else{
  	return 'defeat'
  }
}

createRole(identity.student)//i am student
createRole('student')//i am student
```

可以发现，在调用createRole方法时传入的参数不论是student或者是identity.student都能实现同样的效果

所以是不太安全的。

因此可以使用Symbol作为唯一标识符

```js
let identity = {
  student:Symbol(),
  boss:Symbol(),
  mother:Symbol()
}

function createRole (type){
  if(type === identity.boss){
  	console.log('i am boss');
  }else if(type === identity.student){
  	console.log('i am student');
  }else if (type === identity.mother){
  	console.log('i am mother');
  }else{
  	return 'defeat'
  }
}

createRole(identity.student)//i am student
createRole('student')//defeat
```

Symbol 数据类型的另一特点是隐藏性，for···in，object.keys() 不能访问

```js
let id = Symbol("id");
let obj = {
    [id]:'symbol'
};
for(let option in obj){
    console.log(obj[option]); //空
}
```

但是也有能够访问的方法：**Object.getOwnPropertySymbols()**

`Object.getOwnPropertySymbols()`方法会返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

```js
let id = Symbol("id");
let obj = {
    [id]:'symbol'
};

let array = Object.getOwnPropertySymbols(obj);
console.log(array); //[Symbol(id)]
console.log(obj[array[0]]);  //'symbol'
```

虽然这样保证了Symbol的唯一性，但我们不排除希望能够多次使用同一个symbol值的情况。
为此，官方提供了全局注册并登记的方法：Symbol.for()

```js
let name1 = Symbol.for('name'); //检测到未创建后新建
let name2 = Symbol.for('name'); //检测到已创建后返回
console.log(name1 === name2); // true
```

通过这种方法就可以通过参数值获取到全局的symbol对象了，反之，能不能通过symbol对象获取到参数值呢？
是可以的 ，通过Symbol.keyFor()

```js
let name1 = Symbol.for('name');
let name2 = Symbol.for('name');
console.log(Symbol.keyFor(name1));  // 'name'
console.log(Symbol.keyFor(name2)); // 'name'
```

注意：在创建symbol类型数据 时的参数只是作为标识（注释）使用，所以 Symbol() 也是可以的。

## 5.iterator迭代器

遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作；

```js
let group = {
    name:'tingting',
    people:['clean','shao','chen','zhe'],
    [Symbol.iterator](){
        //索引变量
        let index = 0
        //保存this指向
        let _this = this
        return {
            next : function(){
                if(index < _this.people.length){
                    const result ={
                        value:_this.people[index],
                        done:false
                    }
                    index++
                    return result
                }else{
                    return{
                        value:undefined,
                        done:true
                    }
                }
            }
        }
        
    }
    }

    for(let item of group){
        console.log(item);
    }
    //输出 clean shao chen  zhe
```

## 6.XMLHttpRequest和Ajax

XMLHTTPRequest对象，顾名思义：是基于XML的HTTP请求。[XMLHttpRequest](https://link.zhihu.com/?target=http%3A//en.wikipedia.org/wiki/XMLHttpRequest)是一个浏览器接口，使得Javascript可以进行HTTP(S)通信。自从浏览器提供有了XMLHTTPRequest这个接口之后，ajax操作就此诞生。

AJAX = Asynchronous JavaScript and XML，翻译为：异步的 JavaScript 和 XML。ajax就是基于浏览器提供的XMLHttpRequest对象来实现的。

新版本的XMLHttpRequest对象，针对老版本的缺点，做出了大幅改进。

> - 可以**设置HTTP请求的时限**。
> - 可以**使用FormData对象管理表单数据**。
> - 可以**上传文件**。
> - 可以**请求不同域名下的数据（跨域请求）**，CORS。
> - 可以**获取服务器端的二进制数据**。
> - 可以**获得数据传输的进度信息**。

##### ①HTTP请求的时限

```js
xhr.timeout = 3000;
xhr.ontimeout = function(event){
  alert('请求超时！');
}
```

上面的语句，将最长等待时间设为3000毫秒。过了这个时限，就自动停止HTTP请求。与之配套的还有一个timeout事件，用来指定回调函数。

##### ②FormData对象

ajax操作往往用来传递表单数据。为了方便表单处理，HTML 5新增了一个FormData对象，可以**模拟表单**。

```js
//首先，新建一个FormData对象。
var formData = new FormData();

//然后，为它添加表单项。
formData.append('username', '张三');
formData.append('id', 123456);

//最后，直接传送这个FormData对象。这与提交网页表单的效果，完全一样。
xhr.send(formData);
```

FormData对象也可以**用来获取网页表单的值**：

```js
var form = document.getElementById('myform');
var formData = new FormData(form);

formData.append('secret', '123456'); // 添加一个表单项

xhr.open('POST', form.action);
xhr.send(formData);
```

##### ③上传文件

新版XMLHttpRequest对象，不仅可以发送文本信息，还可以**上传文件**。

假定files是一个"选择文件"的表单元素（input[type="file"]），我们将它装入FormData对象。

```js
var formData = new FormData();

for (var i = 0; i < files.length;i++) {
  formData.append('files[]', files[i]);
}

xhr.send(formData);
```

##### ④跨域资源共享（CORS）

新版本的XMLHttpRequest对象，可以向不同域名的服务器发出HTTP请求。这叫做["跨域资源共享"](https://link.zhihu.com/?target=http%3A//en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing)（Cross-origin resource sharing，简称CORS）。

使用"跨域资源共享"的前提，是浏览器必须支持这个功能，而且服务器端必须同意这种"跨域"。如果能够满足上面的条件，则代码的写法与不跨域的请求完全一样。

## 7.Promise

Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，用来封装异步操作 并可以获取其成功或失败的结果；有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。

Promise 也有一些缺点。首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

Promise有三种状态：初始化、成功、失败

##### ①基本使用

首先先实例化对象，Promise类中接受一个函数类型的参数，这个函数有两个参数，一个是成功的参数，另一个是失败的参数。

当调用成功的参数（第一个参数，这里是resolve），那么改变Promise对象的状态为成功

当调用失败的参数（第二个参数，这里是reject），那么改变Promise对象的状态为失败。

实例化对象调用`then`方法来获取Promise对象成功或失败的结果，then方法有两个函数类型的参数，第一个参数调用Promise成功时的状态，第二个参数调用Promise失败时的状态。

```js
a = new Promise(
    (resolve,reject) => {
      let data = [
        {id:1,username:'clean'},
        {id:2,username:'clean2'},
      ]
      // resolve(data)
      reject('出错了')
    }
)
        
a.then(
    res =>{
        console.log(res);
    },
    error =>{
        console.log(error);
    }
)

```

##### ②Promise封装（读取文件案例）

```js
// 1、引入 fs 模块
const fs = require("fs");

// 2、调用方法，读取文件
fs.readFile("resources/text.txt",(err,data)=>{
  // 如果失败则抛出错误
  if(err) throw err;
  // 如果没有出错，则输出内容
  console.log(data.toString());
});

// 3、使用Promise封装
const p = new Promise(function(resolve,data){
  fs.readFile("resources/text.txt",(err,data)=>{
  // 判断如果失败
  if(err) reject(err);
      // 如果成功
      resolve(data);
  });
});

p.then(function(value){
    console.log(value.toString());
},function(reason){
    console.log(reason); // 读取失败
})
```

##### ③封装Ajax请求

```js
// 请求地址：https://api.apiopen.top/getJoke
const p = new Promise(function(resolve,reason){
    // 原生请求
    // 1、创建对象
    const xhr = new XMLHttpRequest();
    // 2、初始化
    xhr.open("GET","https://api.apiopen.top/getJoke");
    // 3、发送
    xhr.send();
    // 4、绑定事件，处理响应结果
    xhr.onreadystatechange = function(){
        // 判断状态
        if(xhr.readyState == 4){
            // 判断响应状态码 200-299
            if(xhr.status>=200 && xhr.status<=299){
                // 成功
                resolve(xhr.response);
            }else{
                // 失败
                reason(xhr.status);
            }
        }
    }
});

p.then(function(value){
  	console.log(value.toString());
},function(reason){
  	console.log(reason); // 读取失败
})
```

##### ④Promise.prototype.then

调用then方法，`.then()`后面可以继续加`.then()`,then方法的返回结果可以是promise对象，如果返回了 promise对象，那么就可以继续加`.then()`。对象的状态由回调函数的结果决定;

```js
let fs = require('fs')

let d  = new Promise(
    (resolve,reject) => {
      fs.readFile("data1.md",(err,res) => {
        resolve(res.toString())
      })
    }
)

d.then(
    (value) => {
      return new Promise(
        (resove,reject) => {
          fs.readFile('data2.md',(err,res) => {
            result = value+'\r\n'+res.toString()
            resove(result)
          })
        }
      )
    }
).then(
    (data) => {
      return new Promise((resolve,reject) => {
        fs.readFile('data3.md',(err,res) => {
          result = data+'\r\n'+res.toString()
          resolve(result)
        })
        
      })
    }
).then(
  (res) => {
    console.log(res);
  }
)
```

##### ⑤catch方法：

```js
// Promise对象catch方法
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // 设置p对象的状态为失败，并设置失败的值
        reject("失败啦~！");
    },1000);
})
// p.then(value=>{
// console.log(value);
// },reason=>{
// console.warn(reason);
// });
p.catch(reason=>{
    console.warn(reason);
});
```



## 8.生成器函数

```js
// 模拟获取: 用户数据 订单数据 商品数据
function getUsers(){
    setTimeout(()=>{
        let data = "用户数据";
        // 第二次调用next，传入参数，作为第一个的返回值
        iterator.next(data); // 这里将data传入
    },1000);
}

function getOrders(){
    setTimeout(()=>{
        let data = "订单数据";
        iterator.next(data); // 这里将data传入
    },1000);
}

function getGoods(){
    setTimeout(()=>{
        let data = "商品数据";
        iterator.next(data); // 这里将data传入
    },1000);
}

function * gen(){
    let users = yield getUsers();
    console.log(users);
    let orders = yield getOrders();
    console.log(orders);
    let goods = yield getGoods();
    console.log(goods); // 这种操作有点秀啊！
}

let iterator = gen();
iterator.next();
```

## 9.Set集合

它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法： 

1. size 返回集合的元素个数；
2. add 增加一个新元素，返回当前集合； 
3. delete 删除元素，返回 boolean 值； 
4. has 检测集合中是否包含某个元素，返回 boolean 值； 
5. clear 清空集合，返回 undefined；

```js
let data = ['data1','data2','data3','data4']
let s = new Set(data)

console.log(s.size);

s.add('data5')
s.add('data5')
s.delete('data5')

console.log(s.has('data5'));
console.log(s);

for(let i of s){
  console.log(i);
}

s.clear()
console.log(s);
```

实践

```js
let arr = [1,2,4,5,3,2,4]
let arr2 = [5,6,7,8,6]

// 去重
console.log([...new Set(arr)]);

// 交集
let result = [...new Set(arr)].filter((item) => {
   return  new Set(arr2).has(item)
})
console.log(result);

// 并集
let result = [...new Set(arr),...new Set(arr2)]  
console.log(result);     

// 差集(差集就是交集的逆运算)
let result = [...new Set(arr)].filter((item) => {
	return  !new Set(arr2).has(item)
})
console.log(result);
```

## 10.Map集合

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类 型的值（包括对象）都可以当作键。Map 也实现了iterator 接口，所以可以使用『扩展运算符』和 『for…of…』进行遍历；

Map 的属性和方法：

1. size 返回 Map 的元素个数；
2. set 增加一个新元素，返回当前 Map； 
3. get 返回键名对象的键值； 
4. has 检测 Map 中是否包含某个元素，返回 boolean 值；
5. clear 清空集合，返回 undefined；

```js
// Map集合
// 创建一个空 map
let m = new Map();
// 创建一个非空 map
let m2 = new Map([
    ['name','邵晨哲'],
    ['slogon','不断提高行业标准']
]);

// 1. size 返回 Map 的元素个数；
console.log(m2.size);

// 2. set 增加一个新元素，返回当前 Map；
m.set("皇帝","大哥");
m.set("丞相","二哥");
console.log(m);

// 3. get 返回键名对象的键值；
console.log(m.get("皇帝"));

// 4. has 检测 Map 中是否包含某个元素，返回 boolean 值；
console.log(m.has("皇帝"));

// 5. clear 清空集合，返回 undefined；
m.clear();
console.log(m);
```

## 11.Class类

概述： ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键 字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做 到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已；

##### ①class 声明类

```js
class Phone{
	// 构造方法，名字是固定的
    constructor(brand,price) {
        this.brand = brand;
        this.price = price;
    }
	// 打电话，方法必须使用该方式写
    call(){
        console.log("我可以打电话！");
    }
}

let HuaWei = new Phone("华为",5999);
HuaWei.call();
console.log(HuaWei);
```

##### ②静态成员static

```js
// class静态成员
// ES5写法
function Phone(){}
Phone.name = "手机";
Phone.change = function(){
    console.log("我可以改变世界！");
}

let nokia = new Phone();
console.log(nokia.name); // undefined
nokia.change();
// 报错：Uncaught TypeError: nokia.change is not a function

Phone.prototype.color = "黑色";
console.log(nokia.color); // 黑色
console.log(Phone.name);
Phone.change();
// 注意：实例对象和函数对象的属性是不相通的

// ES6写法
class Phone{
    // 静态属性
    static name = "手机";
    static change(){
        console.log("我可以改变世界！");
    }
}

let nokia = new Phone();
console.log(nokia.name);
console.log(Phone.name);
Phone.change();
```

##### ③类的继承

ES5实现：

```js
// ES5构造函数继承
// 手机
function Phone(brand,price){
    this.brand = brand;
    this.price = price;
}
Phone.prototype.call = function(){
    console.log("我可以打电话！");
}
// 智能手机
function SmartPhone(brand,price,color,size){
    Phone.call(this,brand,price);
    this.color = color;
    this.size = size;
}
// 设置子级构造函数的原型
SmartPhone.prototype = new Phone;
SmartPhone.prototype.constructor = SmartPhone;
// 声明子类的方法
SmartPhone.prototype.photo = function(){
    console.log("我可以拍照！");
}
SmartPhone.prototype.game = function(){
    console.log("我可以玩游戏！");
}

const chuizi = new SmartPhone("锤子",2499,"黑色","5.5inch");
console.log(chuizi);
chuizi.call();
chuizi.photo();
chuizi.game();
```

ES6实现：

```js
class Phone{
constructor(brand,price) {
    this.brand = brand;
    this.price = price;
}
call(){
    console.log("我可以打电话！");
}
}
class SmartPhone extends Phone{
    // 构造函数
    constructor(brand,price,color,size) {
        super(brand,price); // 调用父类构造函数
        this.color = color;
        this.size = size;
    }
    photo(){
        console.log("我可以拍照！");
    }
    game(){
        console.log("我可以玩游戏！");
    }
}

const chuizi = new SmartPhone("小米",1999,"黑色","5.15inch");
console.log(chuizi);
chuizi.call();
chuizi.photo();
chuizi.game();
```

##### ④getter和setter

```js
// class中的getter和setter设置
class Phone{
    get price(){
        console.log("价格属性被读取了！");
        // 返回值
        return 123;
        }
    set price(value){
        console.log("价格属性被修改了！");
    }
}

// 实例化对象
let s = new Phone();
console.log(s.price); // 返回值
s.price = 2999;
```

## 12.数值拓展

##### ①Number.EPSILON

Number.EPSILON 是 JavaScript 表示的最小精度。

EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16；

##### ②二进制和八进制：

ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示；

##### ③Number.isFinite() 与 Number.isNaN() ：

Number.isFinite() 用来检查一个数值是否为有限的； Number.isNaN() 用来检查一个值是否为 NaN；

##### ④Number.parseInt() 与 Number.parseFloat()：

ES6 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变；

##### ⑤Math.trunc

用于去除一个数的小数部分，返回整数部分；

##### ⑥Number.isInteger

Number.isInteger() 用来判断一个数值是否为整数；

```js
// 数值扩展
// 0. Number.EPSILON 是 JavaScript 表示的最小精度
// EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16
function equal(a, b){
	return Math.abs(a-b) < Number.EPSILON;
}

console.log("0、Number.EPSILON 是 JavaScript 表示的最小精度");

// 箭头函数简化写法
equal = (a, b) => Math.abs(a-b) < Number.EPSILON;
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3); // false
console.log(equal(0.1 + 0.2, 0.3)); // true

// 1. 二进制和八进制
console.log("1、二进制和八进制");
let b = 0b1010;//二进制
let o = 0o777;//八进制
let d = 100;//十进制
let x = 0xff;//十六进制
console.log(x);

// 2. Number.isFinite 检测一个数值是否为有限数
console.log("2、Number.isFinite 检测一个数值是否为有限数");
console.log(Number.isFinite(100));
console.log(Number.isFinite(100/0));
console.log(Number.isFinite(Infinity));

// 3. Number.isNaN 检测一个数值是否为 NaN
console.log("3. Number.isNaN 检测一个数值是否为 NaN");
console.log(Number.isNaN(123));

// 4. Number.parseInt Number.parseFloat字符串转整数
console.log("4. Number.parseInt Number.parseFloat字符串转整数");
console.log(Number.parseInt('5211314love'));
console.log(Number.parseFloat('3.1415926神奇'));

// 5. Number.isInteger 判断一个数是否为整数
console.log("5. Number.isInteger 判断一个数是否为整数");
console.log(Number.isInteger(5));
console.log(Number.isInteger(2.5));

// 6. Math.trunc 将数字的小数部分抹掉
console.log("6. Math.trunc 将数字的小数部分抹掉 ");
console.log(Math.trunc(3.5));


// 7. Math.sign 判断一个数到底为正数 负数 还是零
console.log("7. Math.sign 判断一个数到底为正数 负数 还是零");
console.log(Math.sign(100));
console.log(Math.sign(0));
console.log(Math.sign(-20000));
```

## 13.对象拓展

ES6 新增了一些 Object 对象的方法：

1. Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）
2. Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象； 
3. proto、setPrototypeOf、 setPrototypeOf 可以直接设置对象的原型；

```js
<script>
// 对象扩展
// 1. Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）；
console.log(Object.is(120,120)); // ===
// 注意下面的区别
console.log(Object.is(NaN,NaN));
console.log(NaN === NaN);
// NaN与任何数值做===比较都是false，跟他自己也如此！
// 2. Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象；
const config1 = {
    host : "localhost",
    port : 3306,
    name : "root",
    pass : "root",
    test : "test" // 唯一存在
}
const config2 = {
    host : "http://zibo.com",
    port : 300300600,
    name : "root4444",
    pass : "root4444",
    test2 : "test2"
}
// 如果前边有后边没有会添加，如果前后都有，后面的会覆盖前面的
console.log(Object.assign(config1,config2));
// 3. __proto__、setPrototypeOf、 getPrototypeOf 可以直接设置对象的原型；
const school = {
    name : "我是学校"
}
const cities = {
    xiaoqu : ['北京','上海','深圳']
}
// 并不建议这么做
Object.setPrototypeOf(school,cities);
console.log(Object.getPrototypeOf(school));
console.log(school);
</script>
```

## 14.模块化

概述： 模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来；

模块化的好处： 模块化的优势有以下几点： 1. 防止命名冲突； 2. 代码复用； 3. 高维护性；

模块化规范产品： ES6 之前的模块化规范有： 1. CommonJS => NodeJS、Browserify； 2. AMD => requireJS； 3. CMD => seaJS；

ES6 模块化语法： 模块功能主要由两个命令构成：export 和 import； export 命令用于规定模块的对外接口（导出模块）； import 命令用于输入其他模块提供的功能（导入模块）；

### 简单使用： 

m.js（导出模块）

```js
export let school = "我是学校";
export function teach(){
    console.log("我们可以教你开发技术！");
}
```

##### 模块化.html（导入和使用模块）：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>模块化</title>
    </head>
    <body>
            <script type="module">
                // 引入m.js模块内容
                import * as m from "./js/m.js";
                console.log(m);
                console.log(m.school);
                m.teach();
            </script>
    </body>
</html>

```

### ES6暴露数据语法汇总：

####  m.js（逐个导出模块）

```js
// 分别暴露（导出）
export let school = "我是学校";
export function teach(){
    console.log("我们可以教你开发技术！");
}
```

#### n.js（统一导出模块）：

```js
// 统一暴露（导出）
let school = "我是学校";
function findJob(){
    console.log("我们可以帮你找到好工作！");
}
export {school,findJob}
```

在使用统一导出和逐个导出的时候如果用了{}，那么{}中必须写导入的模块中存在的对象，或者用as改名字

```js
import {myname} from './m.js'
```



#### o.js（默认导出模块）

默认导出在导入的时候可以用简便写法

```js
import oh from "./js/o.js";
```

这里的`oh`是可以自己定义的

```js
// 默认暴露（导出）
export default{
    school : "我是学校",
    change : function(){
        console.log("我们可以帮你改变人生！");
    }
}

```

### 模块化.html（引入和使用模块）

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>模块化</title>
</head>
<body>
    <script type="module">
        // 引入m.js模块内容
        import * as m from "./js/m.js";
            console.log(m);
            console.log(m.school);
            m.teach();
            
        // 引入n.js模块内容
        import * as n from "./js/n.js";
            console.log(n);
            console.log(n.school);
            n.findJob();
            
        // 引入o.js模块内容
        import * as o from "./js/o.js";
            console.log(o);
            // 注意这里调用方法的时候需要加上default
            console.log(o.default.school);
            o.default.change();
    </script>
</body>
</html>
```

### ES6导入模块语法汇总

#### 模块化.html

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>模块化</title>
</head>
<body>
    <script type="module">
        // 通用方式
        // 引入m.js模块内容
        import * as m from "./js/m.js";
            console.log(m);
            console.log(m.school);
            m.teach();
        
        // 引入n.js模块内容
        import * as n from "./js/n.js";
            console.log(n);
            console.log(n.school);
            n.findJob();
        
        // 引入o.js模块内容
        import * as o from "./js/o.js";
            console.log(o);
            // 注意这里调用方法的时候需要加上default
            console.log(o.default.school);
            o.default.change();
            
        // 解构赋值形式
        import {school,teach} from "./js/m.js";
        // 重名的可以使用别名
        import {school as xuexiao,findJob} from "./js/n.js";
        // 导入默认导出的模块，必须使用别名
        import {default as one} from "./js/o.js";
        // 直接可以使用
            console.log(school);
            teach();
            console.log(xuexiao);
            console.log(one);
            console.log(one.school);
            one.change();
        // 简便形式，只支持默认导出
        import oh from "./js/o.js";
            console.log(oh);
            console.log(oh.school);
            oh.change();
    </script>
</body>
</html>

```

## 15.Babel对ES6模块化代码转换

Babel概述：

Babel 是一个 JavaScript 编译器； Babel 能够将新的ES规范语法转换成ES5的语法； 因为不是所有的浏览器都支持最新的ES规范，所以，一般项目中都需要使用Babel进行转换； 步骤：使用Babel转换JS代码——打包成一个文件——使用时引入即可

步骤： 

第一步：安装工具babel-cli（命令行工具） babel-preset-env（ES转换工具） browserify（打包工具， 项目中使用的是webpack）；

第二步：初始化项目

```bash
npm init -y
```

第三步：安装

```bash
npm i babel-cli babel-preset-env browserify
```

第四步：使用babel转换

```bash
npx babel js（js目录） -d dist/js（转化后的js目录） --presets=babel-preset-env
```

第五步：打包

```bash
npx browserify dist/js/app.js -o dist/bundle.js
```

第六步：在使用时引入bundle.js

```js
<script src="./js/bundle.js" type="module"></script>
```



## 备注

> js中中括号和点语法的区别
>
> 中括号运算符总是能代替点运算符。但点运算符却不一定能全部代替中括号运算符。
>
> 中括号运算符可以用字符串变量的内容作为属性名。点运算符不能。
>
> 中括号运算符可以用纯数字为属性名。点运算符不能。
>
> 中括号运算符可以用js的关键字和保留字作为属性名。点运算符不能。