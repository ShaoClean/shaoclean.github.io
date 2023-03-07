---
icon: javascript
date: 2023-03-06
category:
  - 前端
  - JS
tag:
  - 文件上传
---

# 文件上传

文件上传的本质是网络传输

1.调试接口

本质是http请求，把文件数据通过传输协议传输给服务器

最原始的上传文件方式：

不需要按钮、界面、浏览器的上传DOM

```http
POST /upload/single HTTP/1.1
Host:test.com:8080
Content-Type:multipart/form-data;boundary=aaa

--aaa
Content-Disposition:form-data;name="avatar";filename="small.jpg"
COntent-Type:image/jpeg

文件的二进制数据
--aa--
```

