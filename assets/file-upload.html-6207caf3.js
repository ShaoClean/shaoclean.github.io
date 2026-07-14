import{_ as a,a0 as e,a1 as n,a4 as s}from"./framework-16947f8e.js";const t={},p=s(`<h1 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传" aria-hidden="true">#</a> 文件上传</h1><p>文件上传的本质是网络传输</p><p>1.调试接口</p><p>本质是http请求，把文件数据通过传输协议传输给服务器</p><p>最原始的上传文件方式：</p><p>不需要按钮、界面、浏览器的上传DOM</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">/upload/single</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Host</span><span class="token punctuation">:</span><span class="token header-value">test.com:8080</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span><span class="token header-value">multipart/form-data;boundary=aaa</span></span>

--aaa
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span><span class="token header-value">form-data;name=&quot;avatar&quot;;filename=&quot;small.jpg&quot;</span></span>
<span class="token header"><span class="token header-name keyword">COntent-Type</span><span class="token punctuation">:</span><span class="token header-value">image/jpeg</span></span>

文件的二进制数据
--aa--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[p];function o(d,i){return e(),n("div",null,l)}const c=a(t,[["render",o],["__file","file-upload.html.vue"]]);export{c as default};
