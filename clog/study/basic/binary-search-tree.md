---
icon: computer
category:
  - 数据结构
tag:
  - 学习笔记
---
# 二叉搜索树

<!--more-->
```js
class Node {
    constructor(key){
        this.key = key
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(key){
        const node = new Node(key);
        if (this.root == null){
            this.root = node;
        } else {
            this.insertNode(this.root, key);
        }
    }

    insertNode(node, key){
        if (node.key >= key){
            // 左边
            if (node.left == null){
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key)
            }
        } else {
            if (node.right == null){
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key)
            }
        }
    }
    // 中序遍历
    // 以上行顺序访问BST所有节点的遍历方式，也就是从最小到最大的顺序访问所有节点
    inOrderTraverse(cb){
        this.inOrderTraverseNode(this.root, cb);
    }

    inOrderTraverseNode(node, cb){
        if (node !== null){
            this.inOrderTraverseNode(node.left, cb);
            cb(node.key);
            this.inOrderTraverseNode(node.right, cb);
        }
    }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(9);
bst.insert(8);
bst.insert(22);

function a(v){
    console.log(v);
}
console.log(bst);

bst.inOrderTraverse(a)

```