import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as p}from"./app.4c6bb867.js";const t={},e=p(`<h1 id="\u521D\u59CB\u5316\u4E00\u4E2A\u6700\u57FA\u7840\u7684\u540E\u7AEF\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u4E00\u4E2A\u6700\u57FA\u7840\u7684\u540E\u7AEF\u63A5\u53E3" aria-hidden="true">#</a> \u521D\u59CB\u5316\u4E00\u4E2A\u6700\u57FA\u7840\u7684\u540E\u7AEF\u63A5\u53E3</h1><p>1.\u5B89\u88C5express\u6846\u67B6</p><p><code>npm i express</code></p><p>2.index.js\u6587\u4EF6\uFF08\u5165\u53E3\u6587\u4EF6\uFF09</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u793A\u4F8B\u5E94\u7528\u6B63\u5728\u76D1\u542C 3000 \u7AEF\u53E3 !&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[e];function o(i,u){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","init.html.vue"]]);export{k as default};