---
icon: eye
date: 2023-03-09
article: true
category:
    - demo
tag:
    - WebWorker
---

# 非导入 JS 文件创建 WebWorker

大致思路：

1.创建一个函数，这个函数就是在 webworker 中需要执行的操作

2.该函数转换成字符串(`toString()`方法)

3.通过`URL.createObjectURL`创建一个地址

4.将上一步创建的地址传入`new Worker()` 中生成

```html
<script>
	function work() {
		onmessage = ({ data: { message } }) => {
			console.log("i am worker, receive:" + message);
			postMessage({ result: "message from worker" });
		};
	}

	const runWorker = f => {
		const worker = new Worker(
			URL.createObjectURL(new Blob([`(${f.toString()})()`]))
		);

		worker.onmessage = ({ data: { result } }) => {
			console.log("i am main thread, receive:" + result);
		};

		worker.postMessage({ message: "message from main thread" });
	};

	const testWorker = runWorker(work);
</script>
```
