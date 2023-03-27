---
icon: eye
date: 2023-03-27
article: true
category:
  - demo
tag:
  - canvas
---

# Canvas 动画

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			canvas {
				position: relative;
				left: 0;
				top: 0;
				width: 300px;
				background-color: black;
			}
		</style>
	</head>
	<body>
		<canvas></canvas>

		<script>
			const canvas = document.querySelector("canvas");
			const ctx = canvas.getContext("2d");
			function init() {
				canvas.width = window.innerWidth * devicePixelRatio;
				canvas.height = window.innerHeight * devicePixelRatio;
			}
			function init2() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
			function init3() {
				canvas.width = 300 * 2;
				canvas.height = 300 * 2;
			}
			// init();
			// init2();
			init3();

			// 获取随机数
			function getRandom(min, max) {
				return Math.floor(Math.random() * (max + 1 - min) + min);
			}

			class Point {
				x;
				y;
				r;
				constructor() {
					this.r = 4;
					this.x = getRandom(0, canvas.width - this.r / 2);
					this.y = getRandom(0, canvas.height - this.r / 2);
					this.xSpeed = getRandom(-50, 50);
					this.ySpeed = getRandom(-50, 50);
					this.lastTime = null;
				}

				draw() {
					if (this.lastTime) {
						this.x =
							this.x +
							this.xSpeed * ((Date.now() - this.lastTime) / 1000);
						this.y =
							this.y +
							this.ySpeed * ((Date.now() - this.lastTime) / 1000);
						if (this.x >= canvas.width - this.r) {
							this.x = canvas.width - this.r;
							this.xSpeed = -this.xSpeed;
						} else if (this.x < 0) {
							this.x = 0;
							this.xSpeed = -this.xSpeed;
						}

						if (this.y >= canvas.height - this.r) {
							this.y = canvas.height - this.r;
							this.ySpeed = -this.ySpeed;
						} else if (this.y < 0) {
							this.y = 0;
							this.ySpeed = -this.ySpeed;
						}
					}

					ctx.beginPath();
					ctx.arc(this.x, this.y, this.r, 2 * Math.PI, 0);
					ctx.fillStyle = "white";
					ctx.fill();
					this.lastTime = Date.now();
				}
			}

			class Graph {
				constructor(pointNumber = 30, maxDis = 300) {
					this.points = new Array(pointNumber)
						.fill(0)
						.map(() => new Point());
					this.maxDis = maxDis;
				}
				draw() {
					requestAnimationFrame(() => {
						this.draw();
					});
					ctx.clearRect(0, 0, canvas.width, canvas.height);
					for (let i = 0; i < this.points.length - 1; i++) {
						let point = this.points[i];

						point.draw();
						for (let j = i + 1; j < this.points.length; j++) {
							ctx.beginPath();
							ctx.moveTo(point.x, point.y);
							ctx.lineTo(this.points[j].x, this.points[j].y);
							let l =
								Math.pow(
									Math.abs(this.points[j].x - point.x),
									2
								) +
								Math.pow(
									Math.abs(this.points[j].y - point.y),
									2
								);
							let d = Math.sqrt(l);
							if (d > this.maxDis) continue;
							let a = 1 - d / this.maxDis;
							ctx.strokeStyle = `rgba(200,200,200,${a})`;
							ctx.stroke();
						}
					}
				}
			}

			let g = new Graph();

			g.draw();
		</script>
	</body>
</html>
```
