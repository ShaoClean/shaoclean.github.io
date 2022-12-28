---
icon: javascript
date: 2022-12-28
category:
  - 前端
  - JS
tag:
  - Referer
  - 学习笔记
---

# Referer问题

什么是Referer：Referer 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。

在以下两种情况下，`Referer` 不会被发送：

- 来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；
- 当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）。

Referer和Origin请求头的区别：

`Origin`  指示了请求来自于哪个站点，只有[服务器](https://cloud.tencent.com/product/cvm?from=10680)名，不包含路径信息，浏览器自动添加到http请求 Header 中，无需手动设置。

`Referer`  指示了请求来自于哪个具体页面，包含服务器名和路径的详细URL，浏览器自动添加到http请求 Header 中，无需手动设置。

现在有一张图片的地址：`https://archive.biliimg.com/bfs/archive/8079e42d463b35f2b6c8f115dd0b13ac283c4077.jpg@412w_232h_1c.webp`

直接通过img标签使用，本地打开页面是可以访问到的。但是通过服务的方式运行，是不会显示的。大概率是请求的资源存放在别人的服务器上，其他人想获取该图片资源的时候会向别人的服务器发起请求，而在发送请求的时候，请求头部中会带有`Referer`请求头，别人服务器通过请求头中的referer请求头判断请求页面不是属于自己指定的页面，那么会阻止该资源的访问

- 方法1:本地双击打开当前html静态资源

- 方法2:

  新建一个空白页面，地址为`about:blank`,打开控制台，输入：`document.body.innerHTML = '<img src="https://archive.biliimg.com/bfs/archive/8079e42d463b35f2b6c8f115dd0b13ac283c4077.jpg@412w_232h_1c.webp" alt="">'`

- 方法3:

  通过`iframe标签实现`

  ```
  <iframe title="my" frameborder="0"></iframe>
  <script>
  	const img = '<img src="https://archive.biliimg.com/bfs/archive/8079e42d463b35f2b6c8f115dd0b13ac283c4077.jpg@412w_232h_1c.webp" alt="">'
  	const iframe = document.querySelector('iframe');
  
    iframe.onload = () => {
      iframe.contentDocument.body.innerHTML = img
    }
    iframe.src = "about:blank"
  </script>
  ```

  需要注意在设置iframe标签属性时候的顺序，将src属性放在onload事件之后设置

- 方法4:

  自定义Web组件

  ```
    <img-cors></img-cors>
    <script>
      const img = '<img src="https://archive.biliimg.com/bfs/archive/8079e42d463b35f2b6c8f115dd0b13ac283c4077.jpg@412w_232h_1c.webp" alt="">'
  
      class ImgCors extends HTMLElement{
        constructor(){
          super();
          this.shadow = this.attachShadow({mode:"open"});
          const iframe = document.createElement("iframe");
          iframe.onload = ()=>this.loadEvent(this.shadow)
          iframe.src = 'about:blank'
          this.shadowRoot.appendChild(iframe)
  
        }
  
        loadEvent(iframe){
          iframe.innerHTML = img
        }
      }
      window.customElements.define("img-cors",ImgCors)
      
    </script>
  ```

  
