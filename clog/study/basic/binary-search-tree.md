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

    // 先序遍历
    // 先序遍历会先访问节点本身，然后再访问它的左侧节点，最后是右侧子节点
    // 一个应用场景：打印一个结构化的文档
    preOrderTraverse(cb){
        this.preOrderTraverseNode(this.root, cb);
    }

    preOrderTraverseNode(node, cb){
        if (node != null){
            cb(node.key);
            this.preOrderTraverseNode(node.left, cb);
            this.preOrderTraverseNode(node.right, cb);
        }
    }

    // 后序遍历
    // 后序遍历先访问节点的后代节点，再访问节点本身
    // 一个应用场景：计算一个目录及其子目录中所有文件所占空间的大小
    postOrderTraverse(cb){
        this.postOrderTraverseNode(this.root, cb);
    }

    postOrderTraverseNode(node, cb){
        if (node !== null){
            this.postOrderTraverseNode(node.left, cb);
            this.postOrderTraverseNode(node.right, cb);
            cb(node.key);
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

bst.inOrderTraverse(a)class Node {
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

    // 先序遍历
    // 先序遍历会先访问节点本身，然后再访问它的左侧节点，最后是右侧子节点
    // 一个应用场景：打印一个结构化的文档
    preOrderTraverse(cb){
        this.preOrderTraverseNode(this.root, cb);
    }

    preOrderTraverseNode(node, cb){
        if (node != null){
            cb(node.key);
            this.preOrderTraverseNode(node.left, cb);
            this.preOrderTraverseNode(node.right, cb);
        }
    }

    // 后序遍历
    // 后序遍历先访问节点的后代节点，再访问节点本身
    // 一个应用场景：计算一个目录及其子目录中所有文件所占空间的大小
    postOrderTraverse(cb){
        this.postOrderTraverseNode(this.root, cb);
    }

    postOrderTraverseNode(node, cb){
        if (node !== null){
            this.postOrderTraverseNode(node.left, cb);
            this.postOrderTraverseNode(node.right, cb);
            cb(node.key);
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
