import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,b as a,e as p,d as c,r as i}from"./app.b4cf20c7.js";const r={},l=c(`<h1 id="cyou-js" tabindex="-1"><a class="header-anchor" href="#cyou-js" aria-hidden="true">#</a> cyou-js</h1><h1 id="clean-vite-cli-\u4F7F\u7528\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#clean-vite-cli-\u4F7F\u7528\u8BF4\u660E" aria-hidden="true">#</a> clean-vite-cli \u4F7F\u7528\u8BF4\u660E</h1><h2 id="\u8BF7\u6C42\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u670D\u52A1" aria-hidden="true">#</a> \u8BF7\u6C42\u670D\u52A1</h2><p>\u5C01\u88C5\u7684\u8BF7\u6C42\u670D\u52A1\u5728<code>src/utils/http.ts</code>\u4E2D</p><p>\u5176\u4E2D\u8BF7\u6C42\u7684\u57FA\u7840\u5730\u5740\u6839\u636E\u542F\u52A8\u9879\u76EE\u7684\u4E0D\u540C\u547D\u4EE4\u6765\u51B3\u5B9A</p><ul><li>\u5F00\u53D1\u73AF\u5883\u542F\u52A8\u547D\u4EE4\uFF1A</li></ul><p><code>npm run dev</code>:\u8BE5\u547D\u4EE4\u542F\u52A8\u5F00\u53D1\u73AF\u5883\uFF0C\u540C\u65F6\u4F7F\u7528<code>.env.dev</code>\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF</p><ul><li>\u751F\u4EA7\u73AF\u5883\u542F\u52A8\u547D\u4EE4\uFF1A</li></ul><p><code>npm run prod</code>:\u8BE5\u547D\u4EE4\u542F\u52A8\u751F\u4EA7\u73AF\u5883\uFF0C\u540C\u65F6\u4F7F\u7528<code>.env.prod</code>\u6587\u4EF6\u4E2D\u7684\u73AF\u5883\u53D8\u91CF</p><p>\u5176\u4E2D\u5DF2\u7ECF\u5B9A\u4E49\u4E86<code>VITE_SERVICE_URL</code>\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\uFF0C\u4E14\u8FD9\u4E2A\u53D8\u91CF\u5DF2\u7ECF\u5728<code>http.ts</code>\u4E2D\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u5728\u4E24\u4E2A\u73AF\u5883\u53D8\u91CF\u7684\u6587\u4EF6\u4E2D\u4FEE\u6539\u5BF9\u5E94\u7684\u503C\u5373\u53EF\u3002</p><p>\u5982\u9700\u4FEE\u6539\u73AF\u5883\u53D8\u91CF\u7684\u540D\u79F0\uFF0C\u9700\u8981\u5728<code>http.ts</code>\u3001<code>.env.dev</code>\u3001<code>.env.prod</code>\u8FD9\u4E09\u4E2A\u6587\u4EF6\u4E2D\u540C\u65F6\u5C06<code>VITE_SERVICE_URL</code>\u66FF\u6362\u6210\u9700\u8981\u7684\u53D8\u91CF\u540D</p><p>\u542F\u52A8\u670D\u52A1\u65F6\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u73AF\u5883\u4F7F\u7528\u4E0D\u540C\u7684\u73AF\u5883\u53D8\u91CF\u503C\u3002</p><h2 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h2><h3 id="\u57FA\u7840\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7EC4\u4EF6" aria-hidden="true">#</a> \u57FA\u7840\u7EC4\u4EF6</h3><p>\u57FA\u7840\u7EC4\u4EF6\u7684\u6587\u4EF6\u8DEF\u5F84\uFF1A<code>/src/base</code></p><h4 id="_1-\u57FA\u7840\u9875\u9762-basepage" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u7840\u9875\u9762-basepage" aria-hidden="true">#</a> 1.\u57FA\u7840\u9875\u9762\uFF08BasePage\uFF09</h4><ul><li><p><strong>\u7EC4\u4EF6\u8DEF\u5F84</strong>\uFF1A<code>/src/base/BasePage/BasePage.vue</code></p></li><li><p><strong>\u4ECB\u7ECD</strong>\uFF1A\u5305\u542B\u5177\u6709\u5BFC\u822A\u529F\u80FD\u7684\u5BFC\u822A\u680F\uFF08\u9875\u5934\uFF09\u3001\u6807\u7B7E\u680F\uFF08\u9875\u811A\uFF09\u9875\u9762\u6846\u67B6\u3002</p></li></ul><h5 id="\u5BFC\u822A\u680F" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u680F" aria-hidden="true">#</a> \u5BFC\u822A\u680F</h5><h5 id="\u6807\u7B7E\u680F" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u680F" aria-hidden="true">#</a> \u6807\u7B7E\u680F</h5><p>**\u4ECB\u7ECD\uFF1A**\u57FA\u7840\u9875\u9762\u7684\u9875\u811A\u90E8\u5206\uFF0C\u901A\u8FC7\u5BF9<code>Tabbar</code>\u7EC4\u4EF6\u7684\u4E8C\u6B21\u5C01\u88C5</p><ul><li><code>BaseFooter</code>\u7684 props \u7C7B\u578B\uFF1A</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">BaseFooter</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//\u5BFC\u822A\u680F\u6807\u9898</span>
  barName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">//\u56FE\u6807\u540D\u79F0</span>
  iconName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  img<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u56FE\u7247\u6FC0\u6D3B\u72B6\u6001\u4E0B\u7684\u5730\u5740</span>
    activeSrc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token comment">//\u56FE\u7247\u672A\u6FC0\u6D3B\u72B6\u6001\u4E0B\u7684\u5730\u5740</span>
    inactiveSrc<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  router<span class="token operator">?</span><span class="token operator">:</span> BasePageRouter<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">BasePageRouter</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  query<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  param<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),d={href:"http://vant3.uihtm.com/#/zh-CN/icon",target:"_blank",rel:"noopener noreferrer"};function u(k,h){const s=i("ExternalLinkIcon");return t(),o("div",null,[l,n("p",null,[a("\u6CE8\u610F\uFF1AiconName \u548C img \u53EA\u80FD\u663E\u793A\u4E00\u4E2A\uFF0C\u5176\u4E2D iconName \u7684\u4F18\u5148\u7EA7\u6BD4\u8F83\u9AD8\uFF0CiconName \u7684\u503C\u6765\u6E90\u4E8E vant \u7EC4\u4EF6\u5E93 Icon \u7684 name \u503C\uFF0C"),n("a",d,[a("\u67E5\u770B\u66F4\u591A"),p(s)])])])}const b=e(r,[["render",u],["__file","clean-vite-cli.html.vue"]]);export{b as default};
