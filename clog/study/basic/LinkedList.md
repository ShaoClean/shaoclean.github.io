---
icon: computer
date: 2023-05-02
category:
    - 数据结构
tag:
    - 链表
---

# 链表

<!-- more -->

链表中的节点类：

```js
class Node {
	constructor(element) {
		this.element = element;
		this.next = undefined;
	}
}
```

链表类：

```js
class LinkedList {
	constructor() {
		this.head = undefined;
		this.count = 0;
	}

	push(element) {
		const node = new Node(element);
		if (this.head == undefined) {
			this.head = node;
		} else {
			let current = this.head;

			while (current.next != undefined) {
				current = current.next;
			}
			current.next = node;
		}
		this.count++;
	}
	//在指定位置插入元素
	insert(element, position) {
		const node = new Node(element);
		if (position >= 0 && position <= this.count) {
			if (position === 0) {
				const current = this.head;
				node.next = current;
				this.head = node;
			} else {
				const current = this.getElementAt(position);
				let pre = this.getElementAt(position - 1);
				pre.next = node;
				node.next = current;
			}
			this.count++;
			return true;
		}
		return false;
	}
	//返回链表中特定位置的元素
	getElementAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				return this.head;
			} else {
				let current = this.head;
				for (let i = 1; i <= index && current != undefined; i++) {
					current = current.next;
				}
				return current;
			}
		}
		return undefined;
	}
	//从链表中移除一个元素
	remove(element) {
		const currentIndex = this.indexOf(element);
		if (currentIndex === -1) return false;
		return this.removeAt(currentIndex);
	}
	indexOf(element) {
		let current;
		let index = -1;
		for (let i = 0; i < this.count; i++) {
			if (i === 0) {
				current = this.head;
			} else {
				current = current.next;
			}
			if (current.element === element) {
				index = i;
			}
		}
		return index;
	}
	//移除链表中指定位置的元素
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			if (index === 0) {
				const current = this.head;
				const next = current.next;
				this.head = next;
			} else {
				const pre = this.getElementAt(index - 1);
				const current = this.getElementAt(index);
				pre.next = current.next;
			}

			this.count--;
		}
		return false;
	}
	isEmpty() {
		return this.count === 0;
	}
	size() {
		return this.count;
	}
	toString() {
		let current = this.head;
		let res = current.element;
		if (this.count === 0) {
			return "";
		}
		for (let i = 0; i < this.count - 1; i++) {
			res = `${res},${current.next.element}`;
			current = current.next;
		}
		return res;
	}
}
```

测试代码：

```js
const ll = new LinkedList();
ll.push("hello");
ll.push("hi");
ll.push("scz");
ll.push("clean");

ll.removeAt(2);
console.log(ll.head);
console.log(ll.indexOf("hello"));
console.log(ll.getElementAt(4));
console.log(ll.toString());
```
