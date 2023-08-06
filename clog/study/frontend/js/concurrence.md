---
icon: javascript
date: 2023-08-06
category:
    - 前端
    - JS
tag:
    - 并发控制
    - 学习笔记
---

# 并发控制请求

<!-- more -->

```js
const timeout = time => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, time);
	});
};

/**
 * 实现并发2个任务控制
 */
class SuperTask {
	constructor(concurrency = 2) {
		this.concurrency = concurrency; //并发执行的任务数量
		this.taskList = [];
		this.currentHanleTaskNum = 0; //当前正在执行的任务数量
	}

	add = newTask => {
		return new Promise((resolve, reject) => {
			this.taskList.push({
				resolve,
				reject,
				task: newTask,
			});
			this.execTask();
		});
	};

	execTask = () => {
		while (
			this.currentHanleTaskNum < this.concurrency &&
			this.taskList.length
		) {
			const { task, resolve, reject } = this.taskList.shift();
			this.currentHanleTaskNum++;
			task()
				.then(resolve, reject)
				.finally(() => {
					this.currentHanleTaskNum--;
					this.execTask();
				});
		}
	};
}

const superTask = new SuperTask();

/**
 * 添加任务
 */
const addTask = (time, name) => {
	superTask
		.add(() => timeout(time))
		.then(() => {
			console.log(`任务${name}完成`);
		});
};

addTask(10000, 1); // 10000ms后输出：任务1完成
addTask(5000, 2); // 5000ms后输出：任务2完成
addTask(3000, 3); // 8000ms后输出：任务3完成
addTask(4000, 4); // 12000ms后输出：任务4完成
addTask(5000, 5); // 15000ms后输出：任务5完成
```
