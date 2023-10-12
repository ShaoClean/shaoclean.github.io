---
icon: eye
date: 2023-10-12
article: true
category:
    - demo
tag:
    - canvas
---

# 队列并发控制事例

工作中遇到的问题，算法返回的结果非常的快，每次算法返回都会进行数据库的写操作，导致占满了磁盘的 io，前端通过 http 请求数据的时候，需要等待磁盘 io 降下来才能得到数据。

之前也用了这个 queue 的包，但是发现没有用，问题找到了，是我用了 async 的原因导致没有真正的限制住这个写的并发，下面是一个可以用的事例，根据实际再做调整。

```js
import Queue from "queue";

const q = new Queue({
	autostart: true,
	// 控制并发
	concurrency: 2,
});
let i = 0;
const timer = setInterval(() => {
	i++;
	q.push(cb => {
		new Promise(async resolve => {
			const res = await a();
			console.log(res);
			setTimeout(resolve, 500);
		});
	});
	if (i === 10) {
		clearInterval(timer);
	}
}, 50);

function a() {
	return new Promise(resolve => {
		console.log("enter promise");
		setTimeout(() => {
			console.log("save data");
			resolve("save end");
		}, 50);
	});
}
```
