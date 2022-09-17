---
icon: angular
date: 2022-09-17
category:
  - 前端
  - Angular
tag:
  - 公司项目
star: 5
---

# 图片显示空白问题

前端通过调用后端的接口来下载服务器端的图片，图片是可以正常的下载到手机的内存中去的。

但是需要通过`Cordova`调用手机端的原生事件来显示图片，这个时候问题就出现了，图片显示空白。

原因是因为苹果的限制，不允许app访问本地的图片路径

可以通过ionic的方法`image.src = window.Ionic.WebView.convertFileSrc(result.nativeURL);`

将原本本地的图片路径地址(以file://开头)改成以类似请求服务器端的地址(以ionic://开头)，这样就等于没有访问本地图片。

尽管如此，依旧无法正常显示图片，那是因为angular在编译的时候对路径做了一些安全的限制，防止通过路径链接进行xss攻击

如果这个url匹配aHrefSanitizationWhitelist的正则表达式规则，则会被添加到DOM中，否则转化后的url将会加上'unsafe://‘前缀后才能被加入到DOM中

需要通过`imgSrcSanitizationWhitelist`这个方法来设置编译时清理的白名单，将以`ionic`开头的路径不转换为`unsafe://`开头的路径

```AngularJS
.config(function($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|ionic):/);
}
```

# 跨域cookie丢失

简单的记录一下，防止忘记了

**场景**：使用ios版本13左右的测试机时是正常的，使用ios版本15就出现了问题，cookie不能在请求时自动带上

正常能自动携带cookie的请求如下：

![正常](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/%E6%AD%A3%E5%B8%B8.png)

出现问题不能传输cookie请求的如下，发现他在发送请求的时候不会自动携带cookie，但是服务器已经明确的返回了cookie：

![出错](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/%E5%87%BA%E9%94%99.png)

**解决方案：**

解决方案一：简单粗暴的，在每次请求需要cookie的时候都携带用户的信息，不使用token

解决方案二：在发送ajax请求的时候配置一下：

`$httpProvider.defaults.withCredentials = true`

之前百度解决方案的时候，我看到大多数都是用这个方案解决的（原生、angular、axios中都有相关的配置项），但是我们的项目中已经事先配置好了，我也不太清楚为什么没有生效。

![IMG_8B5D9731CA0C-1](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/IMG_8B5D9731CA0C-1.jpeg)