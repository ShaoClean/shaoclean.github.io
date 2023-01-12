---
icon: vue
date: 2023-01-12
category:
  - 前端
  - Vue
tag:
  - pdf-preview
  - 学习笔记
---

# Node 发送 PDF 给前端预览

后端比较简单，只需要使用`fs`系统的相关 API 读取文件就可以：

```js
// nest js
const fs = require('fs');

@Post('/fileDetail')
async findOne(@Body('attachmentId') id: string,@Res() res) {
  // 根据Id获取到对应用户上传的pdf文件
  const fileInfo = await this.attachmentService.findOne(id);
  // 获取到文件在本地服务器的路径
  const path = fileInfo.path;
  // 读取文件，结果是一个Buffer类型的对象
  const data = fs.readFileSync(path);
  // 将文件数据放到file对象中
  fileInfo.data = data;
  // 发送文件
  res.send(fileInfo)

}
```

需要知道的是：`const data = fs.readFileSync(path);`读取出来的数据结构是这样的：

```js
const data = {
  type: "Buffer",
  data: [], //Buffer类型的数据
};
```

这里的数据就是前端接收到的数据，那么接下来的问题就是，前端如何处理 Buffer 类型的数据了。

- 1.将`Buffer`类型的数据转换成`ArrayBuffer`

```js
// Buffer => ArrayBuffer
const arraybuffer = new Int8Array(data.data);
```

- 2.将`ArrayBuffer`类型的数据转换成`Blob`类型

```js
// ArrayBuffer => Blob
const blob = new Blob([arraybuffer], { type: "application/pdf" });
```

- 3.将`Blob`类型的数据转换成 blob url

```js
// blob => blob url
const url = window.URL.createObjectURL(blob);
```

- 4.使用 iframe 实现预览(一下为完整代码)

```vue
<template>
  <iframe v-if="url" :src="url" frameborder="0" v-minh></iframe>
</template>

<script setup>
const url = ref();
watchEffect(async () => {
  // 获取文件数据
  const res = await getfileDetail("user id");
  // Buffer => ArrayBuffer
  const arraybuffer = new Int8Array(res.data.data);
  // ArrayBuffer => Blob
  const blob = new Blob([arraybuffer], { type: "application/pdf" });
  // blob => blob url
  url.value = window.URL.createObjectURL(blob);
});
</script>
```

但需要注意的是，手机模式下无法正常访问，需要在加载的上一个页面退出手机模式，进入预览页面正常预览之后再开启手机模式才可以。

此时的解决方法就是使用第三方库`pdfjs`
