---
icon: nodeJS
date: 2023-03-12
category:
  - 后端
  - Node
tag:
  - 子进程
  - 学习笔记
---


# Node创建子进程

在NodeJS中，我们的JS代码运行在它单个进程的单个线程上。一个JS执行进程只能利用一个CPU核心，而大多数CPU都是多核CPU，为了充分利用CPU资源，Node提供了两个模块来创建子进程。`child_process`和`cluster`两个模块

## 创建子进程

### child_process模块

创建子进程有四个方法：

1. spawn
2. exec
3. execFile
4. fork

这四种方式创建的子进程都是异步的，并且在执行完子进程中的代码后不会自动关闭，需要手动去关闭。为了防止占用系统太多的资源或内存泄露，应该及时关闭。

也有对应的同步的创建方法，只需要在后面加上`Sync`即可

#### spawn方法

`spawn` 方法也是 `child_process` 模块中的一个方法，用于在新的进程中执行外部命令。`spawn` 方法会创建一个子进程，并将其与一个外部命令关联起来。在调用 `spawn` 方法时，可以传递外部命令的名称和参数。`spawn` 方法的返回值是一个 ChildProcess 对象，该对象可以用于与子进程进行交互。

该方法启动一个新的进程，并且通过命令行来执行命令。该方法不会缓存子进程的输出，因此适合处理大量数据的情况，例如使用 `grep` 命令搜索大型文本文件。



```js
const { spawn } = require('child_process');

// 使用 spawn 方法执行命令
const lsSpawn = spawn('ls', ['-lh', '/usr']);

lsSpawn.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

lsSpawn.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

lsSpawn.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
```

`spawn` 方法使用一个字符串数组作为参数，其中第一个元素指定要执行的命令，第二个元素是命令行参数数组。然后，它会返回一个 ChildProcess 对象，并使用该对象的 stdout 和 stderr 事件来捕获命令的输出和错误。



#### exec方法

该方法启动一个新的进程，并在shell中执行命令。该方法缓存子进程的输出，并将其作为回调的参数传递。由于在shell中执行命令，因此可以使用一些shell语法，例如管道和重定向。

```js
const { exec } = require('child_process');
// 使用 exec 方法执行命令
exec('ls -lh /usr', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
```

`exec` 方法直接使用一个字符串作为命令，其中包括命令和命令行参数。然后，它会返回一个 ChildProcess 对象，并使用该对象的回调函数来捕获命令的输出和错误。



#### execFile方法

`execFile` 方法使用一个字符串作为参数，该字符串指定要执行的可执行文件的路径，然后使用一个数组作为参数来传递命令行参数。与 `spawn` 方法类似，`execFile` 方法返回一个 ChildProcess 对象，并使用回调函数来捕获命令的输出和错误。

```js
const { execFile } = require('child_process');

// 使用 execFile 方法执行命令
execFile('/bin/ls', ['-lh', '/usr'], (error, stdout, stderr) => {
  if (error) {
    console.error(`execFile error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

```

相对于 `spawn` 方法和 `exec` 方法，`execFile` 方法的优势在于可以更好地控制命令的执行，同时也避免了一些安全问题。由于 `execFile` 方法不会在 shell 中执行命令，因此可以避免一些 shell 注入攻击。此外，由于 `execFile` 方法仅执行指定的可执行文件，因此可以更好地控制命令的安全性。



#### fork方法

用于创建一个新的子进程，并通过 IPC（进程间通信） 机制实现父子进程之间的通信。

/src/master.js

```js
const childProcess = require('child_process')
const cpuNum = require('os').cpus().length

for (let i = 0; i < cpuNum; i++) {
    childProcess.fork('./worker.js')
}

console.log('Master: Hello world.')
```

/src/worker.js

```js
console.log('Worker-' + process.pid + ': Hello world.')
```

输出：

```shell
$ node index.js
Master: Hello world.
Worker-88268: Hello world.
Worker-88269: Hello world.
Worker-88271: Hello world.
Worker-88272: Hello world.
Worker-88270: Hello world.
Worker-88273: Hello world.
Worker-88274: Hello world.
Worker-88275: Hello world.
```

##### 和其它三种方式的区别

- `spawn`、`exec` 和 `execFile` 方法都是通过启动一个新的进程来执行指定的命令或脚本，而 `fork` 方法则是通过复制当前进程并在副本中执行指定的模块来创建子进程。

- 父子进程之间的通信方式不同：`spawn`、`exec` 和 `execFile` 方法可以通过标准输入输出流来与子进程进行通信，而 `fork` 方法则是通过 IPC 机制来实现父子进程之间的通信。

- 子进程的返回值处理方式不同：`spawn`、`exec` 和 `execFile` 方法都是通过回调函数来处理子进程的返回值和错误信息，而 `fork` 方法则是通过监听 `message` 事件来处理子进程的返回值和错误信息。

- `fork` 方法可以共享父进程的内存空间，从而可以方便地实现父子进程之间的数据共享。这一点与其他三种方法不同，因为其他三种方法创建的子进程都是独立的，无法直接访问父进程的内存空间。

- `fork` 方法可以在子进程中执行 JavaScript 模块，而不仅仅是执行命令或脚本。这意味着我们可以在子进程中使用 Node.js 提供的所有模块和 API 来实现各种功能，例如网络通信、文件操作、数据库访问等。

- 在使用 `fork` 方法时，子进程会自动创建一个与父进程相同的 V8 实例，这意味着子进程可以直接访问父进程中已经加载的模块和变量，而不需要重新加载或传递这些信息。这可以提高性能并减少内存消耗。

#### 关闭子进程的方式

一般通过`kill`方法来杀死一个子进程；

也可以在子进程中监听 `disconnect` 事件，当该事件触发时，执行一些清理操作并退出子进程；

也可以在父进程中监听 `exit` 事件，在该事件触发时杀死子进程，以确保子进程不会一直运行下去。

拿`kill`方法举例子：

```js
const { spawn } = require('child_process');

// 启动子进程
const child = spawn('ls', ['-la']);

// 5秒后杀死子进程
setTimeout(() => {
  child.kill('SIGTERM');
}, 5000);

```

`kill`方法中可以传入的参数（信号）：

- `SIGTERM`（默认）参数：表示优雅地关闭子进程。何谓优雅？就是等待子进程中的代码执行完成之后再关闭该子进程。信号通知进程需要终止，并且给予进程一定的时间来完成清理工作。这种方式被称为“优雅地终止”，进程可以在收到信号后进行一些清理操作，例如保存进程状态、释放资源等。如果进程在规定的时间内无法完成清理工作，则会被强制终止。使用 `SIGTERM` 信号可以尽量避免数据丢失和资源泄漏等问题。
- `SIGKILL`参数：信号强制杀死进程，不给予进程任何时间来进行清理工作。使用 `SIGKILL` 信号可以立即终止进程，但也可能会导致数据丢失和资源泄漏等问题。因此，在正常情况下，应该尽量避免使用 `SIGKILL` 信号来终止进程。

在正常情况下，应该优先考虑使用 `SIGTERM` 信号来终止进程，只有在进程无法响应 `SIGTERM` 信号时才考虑使用 `SIGKILL` 信号。

### cluster模块

通过`child_process`实现单机Node集群的做法，需要处理挺多的细节。Node提供了 **cluster** 模块，该模块提供了更完善的API，除了能够实现多进程充分利用CPU资源以外，还能够帮助我们更好地进行进程管理和处理进程的健壮性问题。

cluster模块调用fork方法来创建子进程，该方法与child_process中的fork是同一个方法。
cluster模块采用的是经典的主从模型，Cluster会创建一个master，然后根据你指定的数量复制出多个子进程，可以使用 **cluster.isMaster** 属性判断当前进程是master还是worker(工作进程)。由master进程来管理所有的子进程，主进程不负责具体的任务处理，主要工作是负责调度和管理。

cluster模块使用内置的负载均衡来更好地处理线程之间的压力，该负载均衡使用了Round-robin算法（也被称之为循环算法）。当使用Round-robin调度策略时，master accepts()所有传入的连接请求，然后将相应的TCP请求处理发送给选中的工作进程（该方式仍然通过IPC来进行通信）。



>**question:** 如果多个Node进程监听同一个端口时会出现 Error:listen EADDRIUNS的错误，而cluster模块为什么可以让多个子进程监听同一个端口呢?
>**answer:** 原因是master进程内部启动了一个TCP服务器，而真正监听端口的只有这个服务器，当来自前端的请求触发服务器的connection事件后，master会将对应的socket具柄发送给子进程。



```js
const cluster = require('cluster')

if (cluster.isMaster) {
    /* master进程 */
    const cpuNum = require('os').cpus().length

    for (let i = 0; i < cpuNum; ++i) {
        cluster.fork()
    }

    // 创建进程完成后输出提示信息
    cluster.on('online', (worker) => {
        console.log('Create worker-' + worker.process.pid)
    })

    // 子进程退出后重启
    cluster.on('exit', (worker, code, signal) => {
        console.log('[Master] worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal)
        cluster.fork()
    })
} else {
    /* worker进程 */
    const net = require('net')
    net.createServer().on('connection', (socket) => {
        // 利用setTimeout模拟处理请求时的操作耗时
        setTimeout(() => {
            socket.end('Request handled by worker-' + process.pid)
        }, 10)
    }).listen(8080)
}
```

