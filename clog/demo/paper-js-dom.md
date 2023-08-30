---
icon: eye
date: 2023-08-27
article: true
category:
    - demo
tag:
    - paper
---

# PaperJs demo

比较难得其实是装环境，我也是误打误撞装起来了。

参考文章：

> https://juejin.cn/post/7015941246942183437

1.  前置是需要 rust 的环境，我之前偶然提起兴趣的时候装过一下 rust 的运行环境。

```bash
brew install cairo pango
```

2.  然后再安装`node-canvas`的一些依赖:

```bash
brew install pkg-config libpng jpeg giflib librsvg
```

根据参考文章中博主所说的，`librsvg`这个库容易安装失败，如果明确不需要的话可以跳过这个（但是我安装成功了）

3.  安装完这一些`node-canvas`前置支持的环境后就可以进行愉快的：

```bash
npm install canvas --build-from-source
```

4.  接着 paperjs 也就手拿把掐的可以装起来了

```bash
npm install paper paper-js-dom
```

豪哥说和 node-gyp 版本有关系，用 12 的就可以了？也不懂。。。

<!-- more -->

## demo1

```js
import paper from "paper-jsdom-canvas";
import fs from "fs";
const canvas = paper.createCanvas(500, 500);

paper.setup(canvas);
const pro1 = new paper.Project(canvas);

const path = new paper.Path.Circle(new paper.Point(80, 50), 35);

pro1.activeLayer.lastChild.fillColor = "red";

paper.view.draw();
fs.writeFileSync("b.png", canvas.toBuffer());
```

## demo2

```js
import paper from "paper-jsdom-canvas";
import fs from "fs";
const canvas = paper.createCanvas(500, 500);

paper.setup(canvas);
const project1 = new paper.Project(canvas);

// 一、
// 设置背景
// 思路是创建一个新的层级，层级的大小就是图片的大小
const bgLayer = new paper.Layer({
	children: [new paper.Path.Rectangle(0, 0, 500, 500)],
	fillColor: "white",
});

// 二、
// 创建一个圆形1
const circle1 = new paper.Path.Circle(new paper.Point(80, 50), 35);

// 创建一个层级
const layer1 = new paper.Layer({
	children: [circle1],
	strokeColor: "black",
	fillColor: "green",
});

// 拷贝圆形1，改变新的图形位置和颜色，放到层级1中
const circle2 = circle1.clone();
circle2.fillColor = "blue";
circle2.position.x += 100;

// 三、
// 创建一个新的矩形
const rec1 = new paper.Path.Rectangle(300, 300, 50, 50);

// 创建一个新的层级
const layer2 = new paper.Layer({
	children: [rec1],
	strokeColor: "orange",
	fillColor: "blue",
});

// 将新创建的矩形放到层级二中
const rec2 = rec1.clone();
rec2.fillColor = "red";
rec2.position.x -= 140;
layer2.children.push(rec2);

// 移动层级的位置
layer2.position.x -= 40;

layer1.activate();
const rec3 = new paper.Path.Rectangle(250, 250, 50, 50);

rec3.position.x += 50;
rec3.strokeWidth = 5;

paper.view.draw();
fs.writeFileSync("c.png", canvas.toBuffer());
```

## demo3

```js
import paper from "paper-jsdom-canvas";
import fs from "fs";
const canvas = paper.createCanvas(500, 500);

paper.setup(canvas);

// 正常超出范围的矩形point为undefined
// const bgc = new paper.Path.Rectangle(0, 0, 500, 500);
// bgc.fillColor = "white";

// const mask = new paper.Path.Rectangle(-30, -30, 150, 150);
// mask.fillColor = "red";

// console.log(mask.point);

const bgc = new paper.Path.Rectangle(0, 0, 500, 500);
bgc.fillColor = "white";

const mask = new paper.Path.Rectangle(-30, -30, 150, 150);
mask.fillColor = "red";

const intersectRes = bgc.intersect(mask);
intersectRes.fillColor = "blue";

for (let seg of intersectRes.segments) {
	console.log({
		x: seg.point.x,
		y: seg.point.y,
	});
}
// { x: 0, y: 0 }
// { x: 120, y: -5.329070518200751e-15 } 这里有疑问 超出预期 正常来说y应该是0
// { x: 120, y: 120 }
// { x: 0, y: 120.00000000000006 }

paper.view.draw();
fs.writeFileSync("d.png", canvas.toBuffer());
```
