import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,e as t,w as p,b as s,d as l,r as i}from"./app.1fea891f.js";const u={},r=n("h1",{id:"\u6587\u4EF6\u4E0A\u4F20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6587\u4EF6\u4E0A\u4F20","aria-hidden":"true"},"#"),s(" \u6587\u4EF6\u4E0A\u4F20")],-1),k=n("p",null,"\u5728\u6B64\u4E4B\u524D\u9700\u8981\u5B8C\u6210\u7684\u6B65\u9AA4\uFF1A",-1),d=s("npm i cors(\u6216\u8005\u5176\u4ED6\u89E3\u51B3\u8DE8\u57DF\u7684\u65B9\u6848\u4EA6\u53EF\uFF0C\u53E6\u4E00\u79CD\u89E3\u51B3\u6307\u5B9A\u57DF\u540D\u7684\u65B9\u6848\u53EF\u53C2\u8003"),m=s("\u6B64\u6587\u7AE0"),v=s(")"),f=n("li",null,[s("npm i multer "),n("ul",null,[n("li",null,"Multer \u662F\u4E00\u4E2Anode.js\u4E2D\u95F4\u4EF6\uFF0C\u7528\u4E8E\u5904\u7406 multipart/form-data\u7C7B\u578B\u7684\u8868\u5355\u6570\u636E\uFF0C\u4E3B\u8981\u7528\u4E8E\u4E0A\u4F20\u6587\u4EF6\u3002"),n("li",null,"\u5728form\u8868\u5355\u4E0A\u8981\u52A0\u4E0A enctype=\u201Cmultipart/form-data\u201D \u7684\u5C5E\u6027\u3002"),n("li",null,"Multer \u4E0D\u4F1A\u5904\u7406\u4EFB\u4F55\u975E multipart/form-data \u7C7B\u578B\u7684\u8868\u5355\u6570\u636E\u3002"),n("li",null,"\u4E0D\u8981\u5C06 Multer \u4F5C\u4E3A\u5168\u5C40\u4E2D\u95F4\u4EF6\u4F7F\u7528\uFF0C\u56E0\u4E3A\u6076\u610F\u7528\u6237\u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\u5230\u4E00\u4E2A\u4F60\u6CA1\u6709\u9884\u6599\u5230\u7684\u8DEF\u7531\uFF0C\u5E94\u8BE5\u53EA\u5728\u4F60\u9700\u8981\u5904\u7406\u4E0A\u4F20\u6587\u4EF6\u7684\u8DEF\u7531\u4E0A\u4F7F\u7528\u3002")])],-1),b=n("li",null,"npm i fs(\u7528\u4E8E\u91CD\u547D\u540D\u6587\u4EF6\u7684\u540D\u5B57\u6216\u6307\u5B9A\u8DEF\u5F84)",-1),_=l(`<p>\u5B89\u88C5\u5B8C\u6210\u4EE5\u4E0A\u7684\u4E2D\u95F4\u4EF6\u540E\uFF0C\u5BFC\u5165\u5E76\u521D\u59CB\u5316\u76F8\u5BF9\u5E94\u7684\u4E2D\u95F4\u4EF6\u5B9E\u4F8B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> cors <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cors&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> multer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;multer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//dest\u4E3Amulter\u6700\u57FA\u672C\u7684\u914D\u7F6E\u9879\uFF0C\u7528\u4E8E\u6307\u5B9A\u5B58\u653E\u6587\u4EF6\u7684\u8DEF\u5F84</span>
<span class="token keyword">const</span> upload <span class="token operator">=</span> <span class="token function">multer</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">dest</span><span class="token operator">:</span> <span class="token string">&#39;./assets/&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u952E\u4EE3\u7801\u5982\u4E0B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/upload&#39;</span><span class="token punctuation">,</span>upload<span class="token punctuation">.</span><span class="token function">single</span><span class="token punctuation">(</span><span class="token string">&#39;avatar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>body<span class="token punctuation">,</span>file<span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span>body<span class="token punctuation">,</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">,</span>file<span class="token punctuation">)</span>
    <span class="token comment">//\u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u83B7\u53D6\u6587\u4EF6\u7C7B\u578B</span>
        <span class="token keyword">const</span> fileNameArr <span class="token operator">=</span> file<span class="token punctuation">.</span>originalname<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> fileType <span class="token operator">=</span> fileNameArr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// rename\u7684\u53C2\u65701: \u539F\u6587\u4EF6\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D(\u6CA1\u6709\u540E\u7F00\u540D\u65E0\u6CD5\u663E\u793A)</span>
        <span class="token comment">// 		 \u53C2\u65702: \u4FEE\u6539\u540E\u7684\u6587\u4EF6\u8DEF\u5F84\u548C\u6587\u4EF6\u540D(\u6709\u540E\u7F00\u540D\u53EF\u4EE5\u663E\u793A)</span>
        <span class="token comment">// 		 \u53C2\u65703: \u56DE\u8C03\u51FD\u6570</span>
        fs<span class="token punctuation">.</span><span class="token function">rename</span><span class="token punctuation">(</span><span class="token string">&quot;./assets/&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span>filename<span class="token punctuation">,</span><span class="token string">&quot;./assets/&quot;</span> <span class="token operator">+</span> file<span class="token punctuation">.</span>filename <span class="token operator">+</span> <span class="token string">&quot;.&quot;</span> <span class="token operator">+</span> fileType<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
            res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">code</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token string">&quot;upload success!&quot;</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u524D\u7AEF\u5728formData\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u7684\u5C5E\u6027\u540D\u548C<code>upload.single(&#39;avatar&#39;)</code>\u4E2D\u7684<code>avatar</code>\u4FDD\u6301\u4E00\u81F4\uFF0C\u5426\u5219\u4F1A\u62A5500\u9519\u8BEF</p>`,5),g=s("\u5177\u4F53\u5B8C\u6574\u4EE3\u7801\u89C1"),h=s("\u8FD9\u91CC");function y(q,w){const a=i("RouterLink");return o(),c("div",null,[r,k,n("ul",null,[n("li",null,[d,t(a,{to:"/study/backend/nodeJS/set-cookie.html"},{default:p(()=>[m]),_:1}),v]),f,b]),_,n("p",null,[g,t(a,{to:"/demo/upload-demo.html"},{default:p(()=>[h]),_:1})])])}const N=e(u,[["render",y],["__file","upload.html.vue"]]);export{N as default};
