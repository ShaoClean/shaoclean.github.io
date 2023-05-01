---
icon: computer
date: 2023-04-04
category:
    - 数据结构
tag:
    - 学习笔记
    - 双端队列
---

# 双端队列

<!-- more -->
实现代码：

```js
class Deque {
	constructor() {
		this.count = 0;
		this.lowestCount = 0;
		this.items = {};
	}

	isEmpty() {
		return this.count === 0;
	}

	addFront(element) {
		if (this.isEmpty()) {
			this.addBack(element);
		} else if (this.lowestCount > 0) {
			this.lowestCount--;
			this.items[this.lowestCount] = element;
		} else {
			for (let i = this.count; i > 0; i--) {
				this.items[i] = this.items[i - 1];
			}
			this.items[0] = element;
			this.count++;
			this.lowestCount = 0;
		}
	}

	addBack(element) {
		this.items[this.count] = element;
		this.count++;
	}

	removeFront() {
		const res = this.items[this.lowestCount];
		delete this.items[this.lowestCount];
		this.lowestCount++;
		return res;
	}

	removeBack() {
		const res = this.items[this.count - 1];
		delete this.items[this.count - 1];
		this.count--;
		return res;
	}

	peekFront() {
		return this.items[this.lowestCount];
	}

	peekBack() {
		return this.items[this.count - 1];
	}
}
```

测试代码：

```js
const dq = new Deque();

dq.addBack("clean");
dq.addBack("scz");
dq.addFront("hi");
dq.addFront("hello");

dq.removeFront();
dq.removeFront();

dq.addFront("hi");
dq.removeBack();
dq.removeFront();

dq.addFront("hi");

dq.addFront("hello");
dq.addFront("scz");
dq.addFront("shao");

console.log(dq.items);
console.log("front:", dq.peekFront());
console.log("back", dq.peekBack());
```

之前让我感觉到比较疑惑的地方点在于对count的处理，在添加一个元素的时候，count的值也对应的+1是可以理解的；但是在移除一个头部元素的时候，为什么这个时候不对count的值进行处理呢？

当时我的想法就是：讲道理既然都移除了一个值，为什么count不-1啊？

后面看到给双端队列的末尾添加元素的时候就明白了。原来count是用来表示队列中的索引位置，这就需要知道，给队列的最后一个位置添加元素的时候，这个元素的索引是多少。那么之前的疑问也就有了答案，如果队列的头部移除一个元素的时候count也-1，那么再想给队列的末尾添加新的元素时，这件事就会变得比较复杂了。

那么如何知道队列中有多少个元素呢？

只需要计算count和lowestCount的差值就行了