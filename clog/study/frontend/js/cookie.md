---
icon: javascript
date: 2023-05-21
category:
  - 前端
  - JS
tag:
  - cookie
  - 学习笔记
---

# cookie



chrome113 114版本关于cookie 的变化：

- Chrome 113 Cookie第一方集（First-Pary Sets）进入稳定版本
- Chrome 114 Cookie独立分区（CHIPS）默认对所有浏览器启用



这两个是为了应对即将来临的第三方cookie全面弃用，这两项改动确实能够解决一大部分正常使用三方cookie 的业务场景，但是cookie读取方式可能要有大变化了



## 三方Cookie



**一方cookie和三方cookie：**

www.douyin.com 这个网站：然后我们在这个网站上也请求了很多接口，比如 www.douyin.com/api/user ，这些接口通过 `set-cookie` 这个 `Header` 在我们的网站上种下了很多 Cookie，因为请求的域名和当前网站的域名是同站的，所以这些接口种的 Cookie 都是属于一方 Cookie。



但是网站上并不一定会调用同站的域名，比如 www.douyin.com 这个网站也调用了很多 bytedance.com 下的接口，这些跨站的接口也通过 `set-cookie` 种了一些 Cookie，因为种 Cookie 的域名和当前网站的域名是跨站的，这种 Cookie 就属于三方 Cookie。



**三方cookie的问题：**

我们的网站在某一些场景下，不会只单单调用同站的接口，调用其他域名的接口再正常不过了，所以有三方cookie也是很正常的。可以通过第三方cookie做很多政策的需求：**日志打点、单点登录、广告转化分析**等等

为什么会被禁用呢？主要还是用户隐私的问题。

比如：

我们现在正在抖音上刷视频，但是抖音上往往会加载很多三方广告商的请求，这些三方广告商就可以通过三方 Cookie 来记录一些用户的行为。然后下次你逛淘宝的时候，也可能再次加载到这个广告商，因为这时三方广告已经通过三方 Cookie 记录了你的很多用户行为，已经知道了你喜欢什么东西，所以你就会收到一些精准的广告推送，无形之中你的隐私已经泄漏出去了。

