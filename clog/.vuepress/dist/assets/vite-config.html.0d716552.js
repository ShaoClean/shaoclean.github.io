import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as e,b as n,e as t,d as l,r as s}from"./app.c2b07255.js";const a={},c=e("h1",{id:"vite\u73AF\u5883\u53D8\u91CF\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vite\u73AF\u5883\u53D8\u91CF\u914D\u7F6E","aria-hidden":"true"},"#"),n(" Vite\u73AF\u5883\u53D8\u91CF\u914D\u7F6E")],-1),u={href:"https://cn.vitejs.dev/guide/env-and-mode.html#env-variables",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"\u4E0B\u9762\u662F\u4E00\u4E9B\u5DF2\u7ECF\u9ED8\u8BA4\u5B58\u5728\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u4F7F\u7528\uFF1A",-1),h=e("p",null,[n("Vite \u5728\u4E00\u4E2A\u7279\u6B8A\u7684 "),e("strong",null,[e("code",null,[n("i"),e("wbr"),n("mport.meta.env")])]),n(" \u5BF9\u8C61\u4E0A\u66B4\u9732\u73AF\u5883\u53D8\u91CF\u3002\u8FD9\u91CC\u6709\u4E00\u4E9B\u5728\u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u53EF\u4EE5\u4F7F\u7528\u7684\u5185\u5EFA\u53D8\u91CF\uFF1A")],-1),m=e("strong",null,[e("code",null,[n("i"),e("wbr"),n("mport.meta.env.MODE")])],-1),p={href:"https://cn.vitejs.dev/guide/env-and-mode.html#modes",target:"_blank",rel:"noopener noreferrer"},_=e("strong",null,[e("code",null,[n("i"),e("wbr"),n("mport.meta.env.BASE_URL")])],-1),b={href:"https://cn.vitejs.dev/config/shared-options.html#base",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"base",-1),f=e("li",null,[e("strong",null,[e("code",null,[n("i"),e("wbr"),n("mport.meta.env.PROD")])]),n(": {boolean} \u5E94\u7528\u662F\u5426\u8FD0\u884C\u5728\u751F\u4EA7\u73AF\u5883\u3002")],-1),q=e("li",null,[e("strong",null,[e("code",null,[n("i"),e("wbr"),n("mport.meta.env.DEV")])]),n(": {boolean} \u5E94\u7528\u662F\u5426\u8FD0\u884C\u5728\u5F00\u53D1\u73AF\u5883 (\u6C38\u8FDC\u4E0E "),e("code",null,[n("i"),e("wbr"),n("mport.meta.env.PROD")]),n("\u76F8\u53CD)\u3002")],-1),x=e("strong",null,[e("code",null,[n("i"),e("wbr"),n("mport.meta.env.SSR")])],-1),k={href:"https://cn.vitejs.dev/guide/ssr.html#conditional-logic",target:"_blank",rel:"noopener noreferrer"},E=l(`<h2 id="\u81EA\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u73AF\u5883\u53D8\u91CF</h2><p>\u9700\u8981\u6CE8\u610F:\u5728<code>\u6839\u76EE\u5F55</code>\u4E0B\u521B\u5EFA<code>.env</code>\u6587\u4EF6,\u4E5F\u53EF\u4EE5\u521B\u5EFA\u88ABgit\u5FFD\u7565\u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.env                # \u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u4F1A\u52A0\u8F7D
.env.local          # \u6240\u6709\u60C5\u51B5\u4E0B\u90FD\u4F1A\u52A0\u8F7D\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565
.env.[mode]         # \u53EA\u5728\u6307\u5B9A\u6A21\u5F0F\u4E0B\u52A0\u8F7D
.env.[mode].local   # \u53EA\u5728\u6307\u5B9A\u6A21\u5F0F\u4E0B\u52A0\u8F7D\uFF0C\u4F46\u4F1A\u88AB git \u5FFD\u7565
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u73AF\u5883\u52A0\u8F7D\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u52A0\u8F7D\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u73AF\u5883\u52A0\u8F7D\u4F18\u5148\u7EA7</h2><p>\u4E00\u4EFD\u7528\u4E8E\u6307\u5B9A\u6A21\u5F0F\u7684\u6587\u4EF6\uFF08\u4F8B\u5982 <code>.env.production</code>\uFF09\u4F1A\u6BD4\u901A\u7528\u5F62\u5F0F\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF08\u4F8B\u5982 <code>.env</code>\uFF09\u3002</p><p>\u53E6\u5916\uFF0CVite \u6267\u884C\u65F6\u5DF2\u7ECF\u5B58\u5728\u7684\u73AF\u5883\u53D8\u91CF\u6709\u6700\u9AD8\u7684\u4F18\u5148\u7EA7\uFF0C\u4E0D\u4F1A\u88AB <code>.env</code> \u7C7B\u6587\u4EF6\u8986\u76D6\u3002\u4F8B\u5982\u5F53\u8FD0\u884C <code>VITE_SOME_KEY=123 vite build</code> \u7684\u65F6\u5019\u3002</p><p><code>.env</code> \u7C7B\u6587\u4EF6\u4F1A\u5728 Vite \u542F\u52A8\u4E00\u5F00\u59CB\u65F6\u88AB\u52A0\u8F7D\uFF0C\u800C\u6539\u52A8\u4F1A\u5728\u91CD\u542F\u670D\u52A1\u5668\u540E\u751F\u6548\u3002</p><h2 id="\u4F7F\u7528\u6307\u5B9A\u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6307\u5B9A\u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528\u6307\u5B9A\u7684\u73AF\u5883\u53D8\u91CF\u6587\u4EF6</h2><p>\u4F8B\u5982\u9700\u8981\u4F7F\u7528<code>.env.prod </code>\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u53EF\u4EE5\u5728<code>package.json</code>\u6587\u4EF6\u4E2D\u65B0\u5EFA\u4E00\u6761\u6307\u4EE4<code>&quot;dev:prod&quot;</code>,\u968F\u540E\u4F7F\u7528<code>npm run dev:prod</code>\u6307\u4EE4\u542F\u52A8\u670D\u52A1\uFF0C\u5373\u53EF\u4F7F\u7528<code>.env.prod</code>\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;scripts&quot;: {
  &quot;dev&quot;: &quot;vite --mode dev&quot;,
  &quot;dev:prod&quot;: &quot;vite --mode prod&quot;,//\u4F7F\u7528.env.prod\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF
  &quot;build&quot;: &quot;vue-tsc --noEmit &amp;&amp; vite build&quot;,
  &quot;preview&quot;: &quot;vite preview&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function V(w,j){const o=s("ExternalLinkIcon");return i(),r("div",null,[c,e("p",null,[n("\u70B9\u51FB"),e("a",u,[n("\u8FD9\u91CC"),t(o)]),n("\u67E5\u770B\u5B98\u65B9\u6587\u6863")]),v,e("blockquote",null,[h,e("ul",null,[e("li",null,[m,n(": {string} \u5E94\u7528\u8FD0\u884C\u7684"),e("a",p,[n("\u6A21\u5F0F"),t(o)]),n("\u3002")]),e("li",null,[_,n(": {string} \u90E8\u7F72\u5E94\u7528\u65F6\u7684\u57FA\u672C URL\u3002\u4ED6\u7531"),e("a",b,[g,n(" \u914D\u7F6E\u9879"),t(o)]),n("\u51B3\u5B9A\u3002")]),f,q,e("li",null,[x,n(": {boolean} \u5E94\u7528\u662F\u5426\u8FD0\u884C\u5728 "),e("a",k,[n("server"),t(o)]),n(" \u4E0A\u3002")])])]),E])}const B=d(a,[["render",V],["__file","vite-config.html.vue"]]);export{B as default};
