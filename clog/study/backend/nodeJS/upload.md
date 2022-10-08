---
icon: nodeJS
date: 2022-10-8
star: 10
category:
  - 后端
  - Node
tag:
  - upload
  - 学习笔记
---

# 文件上传

在此之前需要完成的步骤：

- npm i cors(或者其他解决跨域的方案亦可，另一种解决指定域名的方案可参考[此文章](./set-cookie.md))
- npm i multer
  - Multer 是一个node.js中间件，用于处理 multipart/form-data类型的表单数据，主要用于上传文件。
  - 在form表单上要加上 enctype=“multipart/form-data” 的属性。
  - Multer 不会处理任何非 multipart/form-data 类型的表单数据。
  - 不要将 Multer 作为全局中间件使用，因为恶意用户可以上传文件到一个你没有预料到的路由，应该只在你需要处理上传文件的路由上使用。
- npm i fs(用于重命名文件的名字或指定路径)

安装完成以上的中间件后，导入并初始化相对应的中间件实例：

```js
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');

app.use(cors());

//dest为multer最基本的配置项，用于指定存放文件的路径
const upload = multer({dest: './assets/'});
```

关键代码如下:
```js
app.post('/upload',upload.single('avatar'),(req,res)=>{
    const {body,file} = req;
    console.log("file",body,'\n',file)
    //判断文件是否存在
    if(file.size){
        // 获取文件类型
        const fileNameArr = file.originalname.split('.');
        const fileType = fileNameArr[1];
        // rename的参数1: 原文件的路径和文件名(没有后缀名无法显示)
        // 		 参数2: 修改后的文件路径和文件名(有后缀名可以显示)
        // 		 参数3: 回调函数
        fs.rename("./assets/" + file.filename,"./assets/" + file.filename + "." + fileType,(err)=>{
            if (err) throw err;
            res.send({
                code:1,
                info:"upload success!",
            })
        })
    }

})
```

需要注意的是，前端在formData对象中添加的属性名和`upload.single('avatar')`中的`avatar`保持一致，否则会报500错误

具体完整代码见[这里](../../../demo/upload-demo.md)