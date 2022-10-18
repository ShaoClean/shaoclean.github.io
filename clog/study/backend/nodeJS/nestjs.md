---
icon: nodeJS
date: 2022-10-17
star: 10
category:
  - 后端
  - Node
tag:
  - NestJS
  - 学习笔记
---

# Nest笔记汇总

## 连接远程数据库

![image-20221018215926329](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20221018215926329.png)

- 第一步：

  通过ssh连接远程服务器，主机名就是外网的ip地址。

  用户名默认是`root`

  密码需要注意，输入的是连接ssh的密码，不是数据库的密码。

  第一次创建ssh连接的时候，需要到服务商那里重新设置密码（腾讯云是这样的）

  ![image-20221018220150624](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20221018220150624.png)

- 第二步：

  主要是这一步，一开始不懂挺难理解的。

  实际上就是通过ssh连接远程服务器之后，相当于你进入了服务器中，此时你的位置就是处于服务器中，所以你想连接服务器上的数据库需要这么连接？

  当然是通过连接本地的服务器啦。

  所以这里主机名选择的是localhost，而本地数据库的端口号默认是`3306`

  用户名默认是root

  密码数据库的密码（不是ssh的密码）



## Controller中的@Res()

最好不要乱加，加了之后每一项都需要用res.send()或者其他可以返回给客户端的发送方式。

就算依赖注入了这个参数不去使用，也会取代掉默认的自动返回。

## 生成svg验证码

npm install --save svg-captcha 生成svg验证码

[github 文档]([svg-captcha/README_CN.md at eb2e1dd4f8f93e902d41c6256382b3dffa171ece · produck/svg-captcha (github.com)](https://github.com/produck/svg-captcha/blob/HEAD/README_CN.md))