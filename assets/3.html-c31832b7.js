import{_ as t,a0 as o,a1 as n,a2 as e,a3 as a,a6 as c,a4 as d,C as s}from"./framework-16947f8e.js";const r={},h=e("h1",{id:"解决github-io-github-pages-访问速度慢的方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#解决github-io-github-pages-访问速度慢的方法","aria-hidden":"true"},"#"),a(" 解决GitHub.io(GitHub Pages)访问速度慢的方法")],-1),p={href:"https://app.netlify.com/",target:"_blank",rel:"noopener noreferrer"},u=d('<p>最关键的是！！！</p><p>他有免费的CDN加速和SSL证书</p><p>他的使用大致思路和GitHub Pages差不多，下面介绍一下流程</p><h2 id="_1-注册" tabindex="-1"><a class="header-anchor" href="#_1-注册" aria-hidden="true">#</a> 1.注册</h2><p>访问官网点击右上角的注册，最好选择GitHub进行注册</p><h2 id="_2-导入项目" tabindex="-1"><a class="header-anchor" href="#_2-导入项目" aria-hidden="true">#</a> 2.导入项目</h2><p>选择网站源码托管的代码仓库，支持Github、Gitlab等，这里当然是选择<code>GitHub</code>了</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220907212021504.png" alt="image-20220907212021504"></p><p>然后根据他的提示选择你项目的仓库、分支等</p><h2 id="_3-完成dns解析" tabindex="-1"><a class="header-anchor" href="#_3-完成dns解析" aria-hidden="true">#</a> 3.完成DNS解析</h2><p>以腾讯云为例子，记录类型选择<code>cname</code>,记录值填入netlify网站生成的域名</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220907212434769.png" alt="image-20220907212434769"></p><h2 id="_4-添加自定义域名" tabindex="-1"><a class="header-anchor" href="#_4-添加自定义域名" aria-hidden="true">#</a> 4.添加自定义域名</h2><p>选择<code>Domain management</code>--<code>domains</code>--<code>Custom domains</code>--<code>Add domains alias</code></p><p>之后在弹出的对话框中输入你自己域名就Ok了</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220907212833734.png" alt="image-20220907212833734"></p><p>最后为自定义域名开启HTTPS支持，<code>Domain management</code> -- <code>HTTPS</code>，点击<code>Verify DNS configuration</code>，域名验证通过则会自动申请证书，当然也可以提交自己的证书。</p>',17);function m(g,l){const i=s("ExternalLinkIcon");return o(),n("div",null,[h,e("p",null,[e("a",p,[a("netlify"),c(i)]),a("这个网站是真的好用，能极大的提高访问的速度，比GitHub Pages的速度快好多")]),u])}const f=t(r,[["render",m],["__file","3.html.vue"]]);export{f as default};