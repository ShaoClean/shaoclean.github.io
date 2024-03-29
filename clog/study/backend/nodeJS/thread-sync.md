---
icon: nodeJS
date: 2023-03-12
category:
  - 后端
  - Node
tag:
  - 线程同步
  - 学习笔记
---

# NodeJS线程同步

Node.js V10.5.0 提供了 worker_threads，它比 child_process 或 cluster更轻量级。 与child_process 或 cluster 不同，worker_threads 可以共享内存，通过传输 ArrayBuffer 实例或共享 SharedArrayBuffer 实例来实现。

Worker 运行在另外一个线程中，因此可能存在线程同步的问题。线程同步指的是多个线程在访问共享资源时，为了避免数据不一致的情况，需要进行同步操作。在 Web Worker 中，可以通过以下方式实现线程同步：

1.使用 MessageChannel API：在主线程和 Worker 线程之间建立一个双向的通信通道，通过 postMessage 方法发送消息，通过 onmessage 方法接收消息，从而实现线程同步。

2.使用 Atomics 对象：Atomics 对象提供了一组原子操作，可以在多个线程之间同步共享内存，从而避免数据不一致的情况。

3.使用共享 Worker：共享 Worker 是一种特殊的 Web Worker，可以被多个窗口或文档共享，因此可以实现多个线程之间的数据共享和同步。

4.使用锁机制：在 JavaScript 中可以使用锁机制来实现线程同步。具体来说，可以使用 JavaScript 中的互斥锁，例如 Mutex.js。