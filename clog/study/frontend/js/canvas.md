---
icon: javascript
date: 2022-11-07
star: 10
category:
  - 前端
  - JS
tag:
  - canvas
  - 学习笔记
---

# canvas

canvas 标签和和 img 标签类似，但是它没有`src`和`alt`属性。
默认情况下没有设置`width`和`height`属性时，是 300\*150

canvas 起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。canvas 元素有一个叫做 getContext() 的方法，这个方法是用来获得渲染上下文和它的绘画功能。getContext()接受一个参数，即上下文的类型，一般是`2d`。

## 绘制形状

### 三种方法绘制矩形

- fillRect(x, y, width, height)
  绘制一个填充的矩形

- strokeRect(x, y, width, height)
  绘制一个矩形的边框

- clearRect(x, y, width, height)
  清除指定矩形区域，让清除部分完全透明。

上面提供的方法之中每一个都包含了相同的参数。x 与 y 指定了在 canvas 画布上所绘制的矩形的左上角（相对于原点）的坐标。width 和 height 设置矩形的尺寸

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```

### 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。

1.首先，你需要创建路径起始点。 2.然后你使用画图命令去画出路径。 3.之后你把路径封闭。 4.一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

以下是所要用到的函数：

- beginPath()
  新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

- closePath()
  闭合路径之后图形绘制命令又重新指向到上下文中。

- stroke()
  通过线条来绘制图形轮廓。

- fill()
  通过填充路径的内容区域生成实心的图形。

生成路径的第一步叫做 beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

#### 绘制一个三角形

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

#### 移动触笔

一个非常有用的函数，而这个函数实际上并不能画出任何东西，也是上面所描述的路径列表的一部分，这个函数就是 moveTo()。或者你可以想象一下在纸上作业，一支钢笔或者铅笔的笔尖从一个点到另一个点的移动过程。

- moveTo(x, y)
  将笔触移动到指定的坐标 x 以及 y 上。

当 canvas 初始化或者 beginPath()调用后，你通常会使用 moveTo()函数设置起点。我们也能够使用 moveTo()绘制一些不连续的路径。看一下下面的笑脸例子。我将用到 moveTo()方法（红线处）的地方标记了。

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // 口 (顺时针)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.stroke();
  }
}
```

#### 线

绘制直线，需要用到的方法 lineTo()。

- lineTo(x, y)
  绘制一条从当前位置到指定 x 以及 y 位置的直线。

该方法有两个参数：x 以及 y，代表坐标系中直线结束的点。开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点，等等。。。开始点也可以通过 moveTo()函数改变。

下面的例子绘制两个三角形，一个是填充的，另一个是描边的。

```js
function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // 填充三角形
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // 描边三角形
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
```

#### 圆弧

绘制圆弧或者圆，我们使用 arc()方法。当然可以使用 arcTo()，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

- arc(x, y, radius, startAngle, endAngle, anticlockwise)
  画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成。

- arcTo(x1, y1, x2, y2, radius)
  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

这里详细介绍一下 arc 方法，该方法有六个参数：x,y 为绘制圆弧所在圆上的圆心坐标。radius 为半径。startAngle 以及 endAngle 参数用弧度定义了开始以及结束的弧度。这些都是以 x 轴为基准。参数 anticlockwise 为一个布尔值。为 true 时，是逆时针方向，否则顺时针方向。

备注： arc() 函数中表示角的单位是弧度，不是角度。角度与弧度的 js 表达式：

弧度=(Math.PI/180)\*角度。

下面的例子比上面的要复杂一下，下面绘制了 12 个不同的角度以及填充的圆弧。

下面两个for循环，生成圆弧的行列（x,y）坐标。每一段圆弧的开始都调用beginPath()。代码中，每个圆弧的参数都是可变的，实际编程中，我们并不需要这样做。

x,y 坐标是可变的。半径（radius）和开始角度（startAngle）都是固定的。结束角度（endAngle）在第一列开始时是 180 度（半圆）然后每列增加 90 度。最后一列形成一个完整的圆。

clockwise语句作用于第一、三行是顺时针的圆弧，anticlockwise作用于二、四行为逆时针圆弧。if语句让一、二行描边圆弧，下面两行填充路径。


```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    for(var i = 0; i < 4; i++){
      for(var j = 0; j < 3; j++){
        ctx.beginPath();
        var x = 25 + j * 50; // x 坐标值
        var y = 25 + i * 50; // y 坐标值
        var radius = 20; // 圆弧半径
        var startAngle = 0; // 开始点
        var endAngle = Math.PI + (Math.PI * j) / 2; // 结束点
        var anticlockwise = i % 2 == 0 ? false : true; // 顺时针或逆时针

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i>1){
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}

```

#### 二次贝塞尔曲线及三次贝塞尔曲线

下一个十分有用的路径类型就是贝塞尔曲线。二次及三次贝塞尔曲线都十分有用，一般用来绘制复杂有规律的图形。

quadraticCurveTo(cp1x, cp1y, x, y)
绘制二次贝塞尔曲线，cp1x,cp1y 为一个控制点，x,y 为结束点。

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。


右边的图能够很好的描述两者的关系，二次贝塞尔曲线有一个开始点（蓝色）、一个结束点（蓝色）以及一个控制点（红色），而三次贝塞尔曲线有两个控制点。

参数 x、y 在这两个方法中都是结束点坐标。cp1x,cp1y为坐标中的第一个控制点，cp2x,cp2y为坐标中的第二个控制点。

使用二次以及三次贝塞尔曲线是有一定的难度的，因为不同于像 Adobe Illustrators 这样的矢量软件，我们所绘制的曲线没有给我们提供直接的视觉反馈。这让绘制复杂的图形变得十分困难。在下面的例子中，我们会绘制一些简单有规律的图形，如果你有时间以及更多的耐心，很多复杂的图形你也可以绘制出来。

下面的这些例子没有多少困难。这两个例子中我们会连续绘制贝塞尔曲线，最后形成复杂的图形。

二次贝塞尔曲线:

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 二次贝塞尔曲线
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
   }
}

```