---
icon: javascript
date: 2023-08-07
category:
    - 前端
    - JS
tag:
    - 任务队列
    - 学习笔记
---

# 任务队列的中断和恢复

```js
/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务， pause用于暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间中断
 * @param {...Function} tasks 任务列表，每个任务无参、异步
 */
export default function processTasks(...tasks) {
	let isPause = true;
	const result = [];
	return {
		async start() {
			if (!isPause) return;
			isPause = false;
			console.log("开始执行任务");
			while (tasks.length) {
				const task = tasks.shift();
				const res = await task();
				console.log("任务执行完成，得到结果：", res);
				result.push(res);
				if (isPause) {
					console.log("任务暂停");
					break;
				}
			}
			if (!tasks.length) {
				isPause = true;
				return result;
			}
		},
		pause() {
			isPause = true;
		},
	};
}
```
