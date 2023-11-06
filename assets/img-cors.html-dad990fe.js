import{_ as t,a0 as l,a1 as s,a3 as e,a4 as i,a5 as r,a2 as d,C as c}from"./framework-a6f32df7.js";const a={},o=e("h1",{id:"referer问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#referer问题","aria-hidden":"true"},"#"),i(" Referer问题")],-1),m=e("p",null,"什么是Referer：Referer 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。",-1),u=e("p",null,[i("在以下两种情况下，"),e("code",null,"Referer"),i(" 不会被发送：")],-1),v=e("ul",null,[e("li",null,'来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；'),e("li",null,"当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）。")],-1),b=e("p",null,"Referer和Origin请求头的区别：",-1),p=e("code",null,"Origin",-1),f={href:"https://cloud.tencent.com/product/cvm?from=10680",target:"_blank",rel:"noopener noreferrer"},h=d(`<p><code>Referer</code> 指示了请求来自于哪个具体页面，包含服务器名和路径的详细URL，浏览器自动添加到http请求 Header 中，无需手动设置。</p><p>现在有一张图片的地址：<code>https://archive.biliimg.com/bfs/archive/8079e42d463b35f2b6c8f115dd0b13ac283c4077.jpg@412w_232h_1c.webp</code></p><p>直接通过img标签使用，本地打开页面是可以访问到的。但是通过服务的方式运行，是不会显示的。大概率是请求的资源存放在别人的服务器上，其他人想获取该图片资源的时候会向别人的服务器发起请求，而在发送请求的时候，请求头部中会带有<code>Referer</code>请求头，别人服务器通过请求头中的referer请求头判断请求页面不是属于自己指定的页面，那么会阻止该资源的访问</p><ul><li><p>方法1:本地双击打开当前html静态资源</p></li><li><p>方法2:</p><p>新建一个空白页面，地址为<code>about:blank</code>,打开控制台，输入：<code>document.body.innerHTML = &#39;&lt;img src=&quot;https://archive.biliimg.com/bfs/archive/8079e42d463b35f2b6c8f115dd0b13ac283c4077.jpg@412w_232h_1c.webp&quot; alt=&quot;&quot;&gt;&#39;</code></p></li><li><p>方法3:</p><p>通过<code>iframe标签实现</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;iframe title=&quot;my&quot; frameborder=&quot;0&quot;&gt;&lt;/iframe&gt;
&lt;script&gt;
	const img = &#39;&lt;img src=&quot;https://archive.biliimg.com/bfs/archive/8079e42d463b35f2b6c8f115dd0b13ac283c4077.jpg@412w_232h_1c.webp&quot; alt=&quot;&quot;&gt;&#39;
	const iframe = document.querySelector(&#39;iframe&#39;);

  iframe.onload = () =&gt; {
    iframe.contentDocument.body.innerHTML = img
  }
  iframe.src = &quot;about:blank&quot;
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意在设置iframe标签属性时候的顺序，将src属性放在onload事件之后设置</p></li><li><p>方法4:</p><p>自定义Web组件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  &lt;img-cors&gt;&lt;/img-cors&gt;
  &lt;script&gt;
    const img = &#39;&lt;img src=&quot;https://archive.biliimg.com/bfs/archive/8079e42d463b35f2b6c8f115dd0b13ac283c4077.jpg@412w_232h_1c.webp&quot; alt=&quot;&quot;&gt;&#39;

    class ImgCors extends HTMLElement{
      constructor(){
        super();
        this.shadow = this.attachShadow({mode:&quot;open&quot;});
        const iframe = document.createElement(&quot;iframe&quot;);
        iframe.onload = ()=&gt;this.loadEvent(this.shadow)
        iframe.src = &#39;about:blank&#39;
        this.shadowRoot.appendChild(iframe)

      }

      loadEvent(iframe){
        iframe.innerHTML = img
      }
    }
    window.customElements.define(&quot;img-cors&quot;,ImgCors)
    
  &lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,4);function g(_,q){const n=c("ExternalLinkIcon");return l(),s("div",null,[o,m,u,v,b,e("p",null,[p,i(" 指示了请求来自于哪个站点，只有"),e("a",f,[i("服务器"),r(n)]),i("名，不包含路径信息，浏览器自动添加到http请求 Header 中，无需手动设置。")]),h])}const w=t(a,[["render",g],["__file","img-cors.html.vue"]]);export{w as default};
