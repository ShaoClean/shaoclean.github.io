---
category:
  - Angular
tag:
  - AngularCli
---
# Angular

## 1.搭建开发环境(需要node版本10以上)

1.下载并安装脚手架工具

`npm i -g @angular/cli`

2.运行脚手架并创建空白项目

`ng new name`

3.运行项目

`npm start`



查看当前npm默认的下载仓库地址

`npm config get registry`



解决在编辑器终端中无法加载ng.ps1的错误

1.用管理员身份打开windows PowerShell

2.在powershell中输入

```
set-ExecutionPolicy RemoteSigned
```

再输入A，更改权限

3.查看是否修改成功

```
 get-ExecutionPolicy
```

显示RemoteSigned即可



用ionic运行：npm run ionic:serve



## 2.模板语法

### 1.组件





### 2.管道(过滤器)

​	管道用来对字符串、货币金额、日期和其它显示数据进行转换和格式化。管道是一些简单的函数，可以在模板表达式中用来接收输入值并返回一个转换后的值。

#### 	1.`date`:将数据转换成指定格式的时间日期

```
<p>date转换时间日期{{time | date:"YYYY年MM月dd日"}}</p>
```

​	结果输出2022年3月2日

​	注意，YYYY必须全部大写 MM必须全部大写 dd必须全部小写

#### 	2.`uppercase`和`lowercase`:分别将数据转换成大写和小写

```
<p>uppercase将小写转换成大写{{xiaoxie | uppercase}}</p>
<p>lowercase将大写转换成小写{{daxie | lowercase}}</p>

export class ComponentName implements OnInit{
	xiaoxie = 'aaa'
	daxie = 'AAA'
}

输出
AAA
aaa
```

#### 	3.`number`:处理数据格式。

```bash
{{ value_expression | number [ : digitsInfo [ : locale ] ] }}
<P>number处理小数位数{{x | number:'4.0-3'}}</P>

export class ComponentName implements OnInit{
	x:number = 2222.3456
}
```

输出：2222.346

{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
即：整数位保留最小位数.小数位保留最小位数-小数位最大保留位置
默认值: 1.0-3，自动四舍五入



#### 	4.`currency`:将数据转换成货币格式。

​	`{{b | currency:'￥':true:'4.2-2'}}` ，这里的′￥′可以指定表达式的前缀，当为 false 时不显示符，当为 true 时，则显示 ￥ 符。后面的规定小数位数的参数和 number 的一样

#### 	5.`percent`:将数据转化为百分比格式，使用方法和number类似。

```
{{ value_expression | percent [ : digitsInfo [ : locale ] ] }}
<P>precnet处理百分比{{y | percent:'2.0-3'}}</P>
```

输出：44.879%

#### 	6.`titlecase`:将首字母转为大写

#### 	7.`slice`显示指定的文本长度

```
{{text | slice:1:4}}
```

显示第1到第3位文本

#### 	8.`json`把JS对象序列化为json字符串

```
ts：
empList =[
    {id:'100',name:'张三',sex:1,age:'18'},
    {id:'101',name:'李四',sex:1,age:'19'},
    {id:'102',name:'王五',sex:0,age:'20'},
    {id:'103',name:'赵六',sex:0,age:'21'}
  ]
HTML：
<p>{{empList | json}}</p>

结果：
[ { "id": "100", "name": "张三", "sex": 1, "age": "18" }, { "id": "101", "name": "李四", "sex": 1, "age": "19" }, { "id": "102", "name": "王五", "sex": 0, "age": "20" }, { "id": "103", "name": "赵六", "sex": 0, "age": "21" } ]
```



#### 7.自定义管道

​		使用步骤：

​		①创建管道class，实现转换功能

​		②在模块中注册管道

​		③在模板视图中使用管道

在app目录下创建 管道名.pipe.ts文件（也可以用指令创建管道：ng g pipe 管道名）：

```
import { Pipe } from "@angular/core";

@Pipe({
  name:'changeSex'
})

export class ChangeSex {
  transform(value:any){
    if(value==1){
      return '男'
    }else if(value ==0){
      return '女'
    }else{
      return '未知'
    }
  }
}
```

在app.module.ts中注册该管道（注册的名字和导入模块的名字都是类名）

```
import { ChangeSex } from './sex.pipe';
@NgModule({
  declarations: [ChangeSex]
})
```

在HTML模板中使用该管道：

```
<h1>员工列表</h1>
<table rules="all">
  <tr *ngFor="let emp of empList;let i =index">
    <td>{{emp.id}}</td>
    <td>{{emp.name}}</td>
    <td>{{emp.age}}</td>
    <td>{{emp.sex | changeSex:'en' }}</td>
    <td><button (click)="deleteEmp(emp.id)">删除信息</button></td>
  </tr>
</table>
<p *ngIf="empList.length==0" >没有员工信息了</p>
```



> ①需要从@angular/core导入Pipe
>
> ②需要使用@Pipe装饰器，并在装饰器中指定name属性。后续在html模板中使用name属性使用该管道
>
> ③导出该管道class类，在该class类中使用固定函数`transform`编写过滤规则，该函数第一个参数是接收的值，该值为`|`管道符前的表达式的值。也可以从第二个开始之后接收多个参数，在HTML模板中传递参数（见④）
>
> ④管道也可以传递参数，在管道名后加`:参数1:参数2`，对应transform中第2、3...个接受的参数

### 3.属性绑定

angular的属性绑定可以设置HTML元素或指令的属性值。使用属性绑定，可以实现切换按钮、以编程方式设置路径、在组件间共享值。

#### 1.`如何绑定`：

使用中括号`[]`将属性设置为动态,一般来说是元素自带的属性

```
<img [src]="baseSrc" height="50px" >
```

#### 2.`绑定指令`:

要设置指令的属性，将指令放在方括号中，例如 `[ngClass]`，后跟等号和一个源属性。在这里，这个源属性的值是 `classes` 。

```
</p [ngClass]="classes"> [ngClass] binding to the classes property making this blue</p>
```

#### 3.`在组件之间绑定（组件间通信）`：

将需要接收的值在需要接收数据的组件中（子组件）加上`@Input()`装饰器

```
@Input() getValue = ''
```

在传递数据的组件（父组件）的标签中

```
html:
<test [getValue]="passValue"></test>

ts:
export class ComponentName implements OnInit{
	passValue = 'Value值传递成功！'
}
```

注意：

Angular 不允许带有 `<script>` 标记的 HTML，既不能用于插值也不能用于属性绑定，这样就会阻止运行 JavaScript。



### 4.Attribute 绑定、类绑定和样式绑定

`Attribute`和`Property`之间的区别：

​	两者都有属性的意思。

​	`Attribute`是标签属性。常见的标签属性有img标签的scr属性，a标签的href属性。

​	`Property`是对象属性。常见的对象属性有window上的document属性

Attribute 绑定语法类似于 Property 绑定，但不是直接在方括号之间放置元素的 Property，而是在 Attribute 名称前面加上前缀 `attr`，后跟一个点 `.`。然后，使用解析为字符串的表达式设置 Attribute 值。



#### 1.`Attribute属性绑定`：

​	遵守angular属性绑定的基本语法，实现动态绑定。

```html
<p [attr.imclean="this.getValue"]></p>
```

​	这里的getValue用到了3.3组件绑定的值

​	解析之后的html为：`<p _ngcontent-ywi-c16="" attributeclean="value传递成功">attribute绑定</p>`



​	如果直接写`<p imclean="this.getValue"></p>`,那么解析成html为：

​	`<p _ngcontent-ywi-c16="" attributeclean="this.getValue">attribute绑定</p>`

> 当表达式解析为 `null` 或 `undefined` 时，Angular 会完全删除该 Attribute。



#### 2.`绑定到colspan`

```
<tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
```



> 有时，Property 名和 Attribute 名之间存在差异。
>
> `colspan` 是 `<tr>` 的 Attribute，而 `colSpan`（注意 “S” 是大写）是 Property。使用 Attribute 绑定时，请使用带小写 “s” 的 `colspan`。有关如何绑定到 `colSpan` Property 的更多信息，请参见 [Property 绑定](https://angular.cn/guide/property-binding) 中的 [`colspan` 和 `colSpan`](https://angular.cn/guide/property-binding#colspan) 部分。



#### 3.`绑定CSS样式`

​	1.绑定单个css样式时：

```
<p [class.changeColor]="expression"> 绑定单一CSS类</p>
```

​	changeColor是`.css`文件中写好的类名（类选择器），当表达式`expression`为真时显示样式，表达式为假时删除该样式

​	2.绑定多个css样式

数组绑定：

```
<p [class] = "['changeColor','changeFont']" >绑定多个CSS类 </p>
```

对象表达式绑定：

```
<p [class] = "{changeFont2:true,changeColor3:true}" >绑定多个CSS类 </p>
```

使用空格分割

```
<p [class] = "'changeColor2 changeFont2'" >绑定多个CSS类 </p>
```

> 对于任何类似对象的表达式（例如 `object`、`Array`、`Map` 或 `Set`，必须更改对象的引用，Angular 才能更新类列表。在不更改对象引用的情况下只更新其 Attribute 是不会生效的

#### 4.`绑定style样式`

​	1.绑定单一style样式：

```
<p [style.color]="'red'">style绑定单一样式</p>
```

​	2.绑定带单位的单一style样式：

```
<p [style.font-size.px]="40">style绑定单一样式</p>
```

​	3.绑定多个style样式：

```
<p [style]="'width: 100px; height: 100px; background-color: cornflowerblue;'">style绑定多个样式</p>
```

​	4.绑定多个style样式（对象形式）：

```
<p [style]="{width: '100px', height: '100px', backgroundColor: 'cornflowerblue'}">style绑定多个样式</p>
```

### 5.指令绑定

#### 	1.*ngFor

```
<ul>
  <li *ngFor="let item of students;let i = index;index as a">{{a}}-{{i}}-{{item.name}}</li>
</ul>
```

注意：必须要在表达式中加上`let`,`item`是临时变量，`students`是组件中的数据。

ngFor会自动生成索引值，但是不可以直接引用。需要用`let i = index`或`index as a`

#### 	2.*ngIf

```
<p *ngIf="age>=18;else other">age>=18</p>

<ng-template #other>
  <p> age< 18 </p>
</ng-template>

```

expression表达式为true时显示内容，表达式为false时将该元素从Dom树上删除

`else other`和`ng-template`标签配合使用。

#### 	3.[ngStyle]

#### 	4.选择绑定[ngSwitch]

```
<div [ngSwitch]="value">
  <p *ngSwitchCase="0">1</p>
  <p *ngSwitchCase="1">2</p>
  <p *ngSwitchDefault>3</p>
</div>
<button (click)="newValue()">change</button>

export class NgSwitchComponent implements OnInit{
	value = 1
  	newValue(){
    let newV = Math.floor(Math.random()*3)
    this.value = newV
  }
}

```

`[ngSwitch]`和JS中的`Switch`方法相似。

条件用[ngSwitch]="value"来写，value为表达式。

选择分支用`*ngSwitchCase="0"`，0为值。

当value的值为0时，执行`*ngSwitchCase="0"`这条分支下的代码

#### 5.双向绑定[(ngModel)]

需要注意的是，`[(ngModel)]`双向数据绑定这个指令并不在`BrowerserModule`模块中，需要手动绑定额外的模块`FormsModule`

```
//app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
	imports:[
	BrowerserModule,
	FormsModule
	]
})
```

实现代码：

```
<input type="text" placeholder="请输入内容" [(ngModel)]='context' (ngModelChange)="showContext()">
<p>{{context}}</p>
```

`(ngModelChange)="showContext()`中的`ngModelChange`是Angular提供的事件，在模型发生变化时执行相关的方法。

#### 6.自定义指令

创建自定义指令：

```
ng g directive 指令名
```

Angular Cli会自动在app目录下创建 指令名.directive.ts文件,该文件就是自定义指令文件，代码如下

```
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  constructor() { 
 
  }
}
```

该文件中带有默认的构造方法`constructor`

可以从`@angular/core` 导入 `ElementRef`。`ElementRef` 的 `nativeElement` 属性会提供对宿主 DOM 元素的直接访问权限。

在指令的 `constructor()` 中添加 `ElementRef` 以注入对宿主 DOM 元素的引用，该元素就是 `appChangeColor` 的作用目标。

```
constructor(el:ElementRef) { 
    el.nativeElement.style.color = 'red'
}
```

<p appChangeColor>directive-test works!</p>

对应的，会在app.module.ts中引用相应的指令

```
import { ChangeColorDirective } from './change-color.directive';
@NgModule({
	declarations:[ChangeColorDirective]
})
```

在html中应用指令：

```
<p appChangeColor>directive-test works!</p>
```



> Angular中的指令分为三类：
>
> （1）组件指令：NG中Component继承自Directive（组件是特殊的指令，组件的属性比directive多）
>
> （2）结构型指令：会影响DOM树结构，必须使用*开头。
>
> （3）属性型指令：不会影响DOM树结构，只是影响元素的外观。

## 3.Angular 模块 VS NodeJs/ES6 模块

NodeJs和ES6模块的作用：防止污染全局

Angular模块的作用：对于各种NG对象进行分组

## 4.服务和依赖注入

​	Servece：服务，Angular认为组件是与用户交互的一种对象，其中的内容都应该与用户操作有关系的；而与用户操作无关的内容都应该剥离出去，放在“服务对象中”，为组件服务；例如：日志纪录

### 	1.创建对象

​			创建对象有两种方式，一种是自己手动创建，另一种是依赖注入，只需要声明就可以。

### 	2.用法

#### 			①创建服务对象并制定服务提供者

创建文件名为 服务名.service.ts的文件

```
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class LogService{

  doLog( admin:string,action:string){
    let time = new Date()
    console.log(`管理员${admin}执行了操作：${action}，时间为：${time}`);
  }
}
```

装饰器 @Injectable意为可注入的。

需要加入属性`providedIn:'root'`,这是服务的提供者，帮助我们创建服务，以便于应用到每个声明它的地方。

`export class LogService`中的`LogService`是服务名，组件声明依赖的时候用到。

doLog函数中的参数需要用到几个就声明几个，在相应的组件中传入即可。

#### 			②在组件中声明依赖

在组件中声明依赖之后，服务提供者就会将服务注入进组件，组件可以直接使用服务对象。

```
import { Component, OnInit } from '@angular/core';
import { LogService } from '../doLog.service';

@Component({
  selector: 'app-yi-lai-zhu-ru',
  templateUrl: './yi-lai-zhu-ru.component.html',
  styleUrls: ['./yi-lai-zhu-ru.component.css']
})

export class YiLaiZhuRuComponent implements OnInit {
  logM

  constructor(logs:LogService) {
    this.logM = logs
  }

  add(){
    this.logM.doLog('clean','添加')
  }

  ngOnInit(): void {
  }

}
```

在组件的构造函数中的参数中声明依赖`logs:LogService`,logs是形参名，LogService才是需要声明的依赖名

需要注意的是：`import { LogService } from '../doLog.service';`没有导入的时候不能使用



## 5.HttpClient服务对象

###  1.前端异步请求工具

| 工具名        | 本质                           | 优劣势                                                       |
| ------------- | ------------------------------ | ------------------------------------------------------------ |
| 原生XHR       | let xhr = new XMLHttpRequest() | 浏览器支持的原生技术；基于回调方式处理响应                   |
| JQuery.ajax() | 也是XHR，只是进一步的封装      | 比原生要简单；底层还是基于回调方式处理想要                   |
| Axios         | 也是XHR，进一步的封装          | 比原生简单；基于Promise处理响应；请求可以排队、并发；听说也可以撤销请求。 |
| NG HttpClient | 也是XHR，进一步的封装          | 比原生简单；基于“观察者模式”处理响应；请求可以排队、并发、撤销（最早提供请求撤销功能） |
| Fetch         | 不再是XHR，是W3C提供的新技术， | 比XHR从根本上更加先进；有的浏览器不支持；基于Promise         |

HttpClient服务对象用于向指定的URL发起异步请求

###  2.观察者模式：

Observable：可被关注的对象，在未来某事不确定的时间点可能抛出特定的事件。

subscribe：订阅。建立与可被关注的对象的契约，一旦得到新消息立即会被通知到

###  3.服务对象的作用范围

声明服务提供者的方式：

方式1：在根模块中提供服务对象——在整个应用中服务是单一的（不管有多少个组件使用这个服务，它只创建一次服务对象）

方式2：在组件中提供服务对象——在每个组件中服务都是有一个实例的。

注意：项目中只要服务对象中有属性，只能用方式2；

###  4.使用步骤

​		①：在主模块中导入HttpClientModule模块：

```
imports:[HttpClientModule]
```

​		②：在组件中声明依赖于HttpClient服务对象，就会被自动注入进来

```
construct(private http:HttpClient){

}
```

​		③：调用HTTP Client实例实现请求异步请求

```
this.http.get(url).subscribe( (res)=>{} )
```



## 6.TypeScript

### 1.简介

TypeScript简称TS，他是微软基于JS语言开发又高于JS的语言，可以编译成纯JS，在浏览器上运行。

浏览器不支持TS的运行，需要将TS转换成JS

使用Node命令安装TS编译器

### 2.环境安装

１.安装TS

```
npm install -g typescript
```

2.编译TS文件

```
tsc hello.ts
```

将hello.ts编译成hello.js

### 3.TS的拓展特性：

#### **1.TS是强类型语言——JS是弱类型语言**

​	强类型语言的特点：变量、函数、形参都需要声明类型 

​	**常用的数据类型关键字：**

​		String、number、boolean、any、Date、any[]、void

#### **2.TS属性和方法定义了三种访问修饰符**

##### 	**①private**：私有属性，只能在类的内部使用，子类不能使用。

##### 	**②protected**：被保护的，被保护的成员只能在本类内部及子类内部使用。

##### 	**③public**：公共的，公共成员可以在本类内部以及外部使用

提示：一般情况下，class内部属性不应该让外界随便访问，通常设置为private；而方法一般都是允许调用的，一般设置为public，默认值就是public。

```
class User{
  protected sex:String = '男 '
  private myAge:number = 18
  name = 'CLean'
  isShuai:boolean = true
  //字符串数组
  userList:String[]=[]
  //数字数组
  ageList:number[]=[]
  //任意类型数组
  jobList:any[]=[]
  private change(){
    this.name='shao'
    this.userList = ['user1','user2']
    this.ageList = [1,3,4]
    this.jobList = [1,222,'hello']
  }
  //函数也可以声明类型，但是必须要有返回值
  fn1(n1:string,n2:number):any{
    return console.log('n1:',n1,'n2:',n2);
  }
  //用void类型声明返回值的类型为空（没有返回值）
  fn2(n3:any):void{
    console.log(n3);
  }
  fn3(age:number){
    this.myAge = age
  }
  getSex(){
    return this.sex
  }

}
```

修饰符：

```
//访问修饰符的特殊用法
class Student {
/*   private sname:string
  constructor(newName:string){
    this.sname = newName
  } */

  //等同于以上代码
  constructor(private sname:string){

  }
}
```



#### 4.面向对象编程——类和接口（class和interface）

##### ①：类的继承

```
//NewPerson类继承了User类的属性和方法（extends：拓展、继承，一般理解为继承）
class NewPerson extends User {
 
  pFn1(){
    
  }

}
```

##### ②：接口

接口是一种特殊的类，它可以要求某一个类必须要求拥有XXX方法，例如管道必须提供`transform()`方法

在定义接口的时候用`interface 接口名`,在函数体内写上接口内必须包含的函数，不用写函数体。

在实现接口的时候使用`class 类名 implements 已经定义好的接口名`，在是实现接口的类中必须包含定义接口中的函数。

```
//接口的使用，接口是特殊的类

//1.定义接口
interface PeopleProperty {
  showAge():any
  showPeople():any
}

//2.实现接口
class People implements PeopleProperty{
  showAge() {
      
  }
  showPeople() {
  }
}
```



#### 5.装饰器

## 7.生命周期

Angular中的组件生命周期钩子函数调用顺序

#### （0）constructor()

组件被创建的时候触发

#### （1）ngOnChanges()

绑定的属性值发生改变

#### （2）ngOnInit()

组件初始化完毕（挂载完毕），相当于Vue中的mouted

#### （3）ngDoCheck()

紧跟在ngOnChanges()、ngOnInit（）之后的钩子函数。

组件检查到了系统对自己的影响。

#### （4）ngAfterContentInit()

组件的内容初始化完成

#### （5）ngAfterContentChecked()

组件的内容发生变化需要检查

#### （6）ngAfterViewInit()

组件的视图初始化完成

#### （7）ngAfterViewChecked()

组件的视图发生变化需要检查

#### （8）ngOnDestory()载

组件即将被从DOM树上卸载，适合执行一些资源释放性语句，录入：定时器销毁

## ８.组件间通信

### 方式一：父传子

子组件设置自定义属性，由父组件传向子组件。

(使用@Input装饰器实现，一个装饰器只能实现一个数据的传递)

①父组件的数据传递

父组件.ts：

```
userName = 'Clean'
```

父组件.html:

```
<子组件 [属性名]='userName'></子组件>
```

②子组件使用

子组件.ts:

```
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Input()
public userName:any
```

在官网的文档中看到这样一个代码片段：

```
@Component({
  selector: 'bank-account',
  template: `
    Bank Name: {{bankName}}
    Account Id: {{id}}
  `
})
class BankAccount {
  
  @Input() bankName: string;
 
  @Input('account-id') id: string;

  normalizedBankName: string;
}
```

一开始对`@Input('account-id') id: string;`这里有点疑问

解释一下：传入了一个属性名为account-id的属性，它的属性值是id



子组件.html

```
<p>{{userName}}</p>
```

注意：需要将父组件写在根模板`app.component.html`中，不能把子组件直接写在这个上面，否则值无法正常传递。

### 方式二：子传父

子组件通过触发特定的事件（其中携带着数据），把数据传递给父组件（父组件提供事件处理的方法）

1.子组件使用Output装饰器 ；创建新的`EventEmitter()`对象；触发`EventEmitter()`对象的emit事件，并传入想要传递的数据

```
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Output()
public nameEvent = new EventEmitter()

changeName(){
    this.nameEvent.emit(this.newName)
}
```

2.在使用该组件的父组件中的模板标签上绑定自定义事件

```
<app-子组件 [myName]="myName" (nameEvent)="dealName($event)"></app-子组件>
```

3.最后在父组件的ts文件中写自定义事件对应的处理函数。

```
export class AppComponent {
  title = 'cleanAngular';
  myName:any = 'Shao'
  dealName(e:any){
    this.myName = e
  }
}
```

### 方式三：引用子组件

可以通过`#`（模板引用符）来声明一个模板变量，父组件通过引用模板变量来获得子组件的实例对象。

1.在`父组件.html`中的子组件上声明模板变量

```
<app-zujiantongxin [twoV]="oneV" #c1></app-zujiantongxin>
<app-child01 #c2></app-child01>
```

2.在`父组件.ts`中使用装饰器@ViewChild(视图孩子)引用模板变量

```
import { Component, OnInit, ViewChild } from '@angular/core';
@ViewChild('c1',{static:true})
public child1
@ViewChild('c2',{static:true})
public child2
```

ViewChild装饰器用于将子组件识别符与某个属性关联起来。第一个参数必须是已经存在的子组件识别符（不带#），第二个参数static指定该组件是否为“静态组件”（不会时有时无的组件）

父组件通过模板变量（`#c1`）获得了子组件(`zujiantongxin`)的实例对象(`child1`==`ZujiantongxinComponent`)

可以理解为父亲把孩子牢牢的我在手里面，想获取孩子中的什么东西都可以获取。（好像通过别的组件传递过来的值获取不到，，，，自己定义的值可以获取到）

## 9.路由与导航

### 1.Vue和Angular路由跳转的机制对比

Vue：①hash法：只需要修改url中的hash部分

http://localhost/index.html#/xxx

②history法：需要修改window.history对象，从而支持浏览器自带的后退/前进按钮



angular：history法：需要修改window.history对象，从而支持浏览器自带的后退/前进按钮



### 2.路由跳转方法

#### 路由的准备工作

①.在`app.module.ts`中导入总路由模块

```
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

②将`路由器`模块`RouterModule`和`路由`模块`Routes`导入到`app-routing.module.ts`中

```
import { RouterModule, Routes } from '@angular/router';
```

③将需要路由的组件导入到`app-routing.module.ts`中

```
import {BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { ChangeBlogsComponent } from './change-blogs/change-blogs.component';
```

④在`app-routing.module.ts`中的Routes数组中添加需要路由的组件对象

```
const routes: Routes = [
  {path:'myHome',component:HomeComponent},
  
  {path:'myBlogs',component:BlogsComponent,
    children:[
      {path:'blogs/:id',component:ChangeBlogsComponent}
    ]
  },
  //重定向，当地址栏中的地址没有后缀时，自动将路由指向myHome页面
  {path:'',redirectTo:'/myHome',pathMatch:'full'},
  //通配符，匹配全部的路由地址，应该放在最下面，表示之后没有需要路由的组件，即找不到页面，一般用于跳转404错误页面
  {path:'**',component:404Component}
];
```



#### 方式一：使用模板跳转方法

在模板标签中写上

```
<any routerLink='/XXX'></any>
```

可用于任意标签上，跳转地址应该以`/`开头，防止以相对方式跳转

如果使用了路由嵌套,应该写上完整的路由地址，routerLink表示的是www.shaoclean.top/index.html/中index.html后面的地址，所以要写完整，否则跳转错误。

```
<any routerLink='/myBlogs/blogs'></any>
```



#### 方式二：使用脚本跳转方法

首先在html模板上绑定跳转事件

```
<any (click)='jump()'></any>
```

在相关的组件的.ts文件中导入`路由器`模块

```
import {Router} from '@angular/router'
```

在相关的组件的.ts文件中声明`Router`依赖

```
constructor(
    private router:Router
    ) { }
```

绑定事件，事件中的地址也需要写全

```
 jump2(){
    this.router.navigateByUrl('myBlogs/blogs/2')
  }
```

### 3.路由的展示

个组件之间通过路由的跳转切换需要在指定的标签内展示

```
<router-outlet></router-outlet>
```

## 10.路由守卫

有些项目中，有些路由地址只能在特定条件下才能访问。

Angular提供了路由守卫（Guard）来实现访问路由组件前的检查功能。如果检查通过return true就放行，检查不通过return false阻止访问。

### 1.使用步骤

①创建路由守卫 class

创建.guard.ts文件，

```
@Injectable({
providedIn:'root'
})
export class 守卫名字 {
 canActivate(){
 	return true//允许激活
 	return false//阻止激活
 }
}
```

也可用` ng g guard 守卫名`

②在路由词典中使用路由守卫

```
{path:'',component:...,canActivate:[守卫名]}
```

## 11.移动APP开发技术

| 技术名称                                  | 典型代表                                  | 优势                                       | 劣势                                                         |
| ----------------------------------------- | ----------------------------------------- | ------------------------------------------ | ------------------------------------------------------------ |
| 原生开发、Native Code                     | Android：Java或KotlinIOS：Object-C或Swift | 运行速度快、功能丰富                       | 两种设备互不兼容、开发速度慢                                 |
| WebView开发（H5、CSS、JS）                | Vue.js+Mint-UI                            | 开发速度快                                 | 运行速度比原生慢、功能有限、不能使用手机上的功能（摇一摇、打开摄像头等） |
| 混编开发（H5+原生）                       | Angular+Ionic                             | 开发速度快、功能比 WebView丰富             | 运行速度慢（需要浏览器内核）                                 |
| JS Bridge（通过JS编码，运行的是原生代码） | React + ReactNative                       | 开发速度快、运行速度快、功能丰富           | 原生组件两种平台下效果不一致                                 |
| GPU绘图（直接在手机显卡上绘图）           | 谷歌开发的Flutter技术（Dart语言）         | 运行速度快、功能丰富、两种平台效果完全一样 | 目前还有不足，例如绘图库太大                                 |

