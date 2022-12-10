---
icon: eye
date: 2022-10-11
article: true
category:
  - demo
tag:
  - replay-attact
---

# 复现接口重放攻击

1.正常请求接口，通过charles记录请求信息

下面是charles中的http请求

![image-20221011233557439](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20221011233557439.png)

2.添加breakpoint

由于发送的post请求属于复杂请求，会产生一个prefilt的预发`OPTIONS`请求。

需要找到相关的`POST`请求，并添加断点

![image-20221011233836512](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20221011233836512.png)

3.再次发送请求

继续请求该接口，Charles会拦截本次请求（Charles自动会弹出来）

点击`Execute`忽略掉第一次弹出的`OPTIONS`请求：

![image-20221011234225072](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20221011234225072.png)

下面的请求才是需要修改的：

![image-20221011234317271](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20221011234317271.png)

4.修改request params

![image-20221011234740582](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20221011234740582.png)

5.重新发送

