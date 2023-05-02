---
icon: computer
date: 2023-05-02
category:
    - 数据结构
tag:
    - 双向链表
---
# 双向链表

创建双向链表的节点：

```js
class DoublyNode extends Node {
	constructor(element) {
		super(element);
		this.pre = undefined;
	}
}
```

实现部分方法：

```js
class DoublyLinkedList extends LinkedList {
	constructor() {
		super();
		this.tail = undefined;
	}
	push(element) {
		const node = new DoublyNode(element);
		if (this.count === 0) {
			this.head = node;
			this.tail = node;
		} else {
			const current = this.tail;
			current.next = node;
			node.pre = current;
			this.tail = node;
		}

		this.count++;
	}

	insert(element, index) {
		if (index >= 0 && index < this.count) {
			if (index === 0 || index === this.count) {
				this.push(element);
			} else {
				const node = new DoublyNode(element);
				const current = this.getElementAt(index);
				const pre = current.pre;
				pre.next = node;
				node.pre = pre;
				node.next = current;
				current.pre = node;
				this.count++;
			}
			return true;
		}
		return false;
	}

	indexOf(element) {
		const current = this.head;
		const index = -1;
		for (let i = 0; i < this.count; i++) {
			if (current.element === element) {
				index = i;
				return;
			}
			current = current.next;
		}
		return index;
	}

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
}

const dbll = new DoublyLinkedList();
dbll.push("nihao");
dbll.push("clean");
dbll.push("scz");

dbll.insert("insert", 2);
dbll.insert("sha", 3);
console.log("head:", dbll.head);
console.log("tail:", dbll.tail);
```
