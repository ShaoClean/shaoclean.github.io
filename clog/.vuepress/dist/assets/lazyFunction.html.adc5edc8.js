import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.abd3a73b.js";const e={},p=t(`<h1 id="\u60F0\u6027\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u60F0\u6027\u51FD\u6570" aria-hidden="true">#</a> \u60F0\u6027\u51FD\u6570</h1><p>\u51FD\u6570\u6267\u884C\u7684\u5206\u652F\u53EA\u4F1A\u5728\u51FD\u6570\u7B2C\u4E00\u6B21\u8C03\u7528\u7684\u65F6\u5019\u6267\u884C\uFF0C\u5728\u7B2C\u4E00\u6B21\u8C03\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u8BE5\u51FD\u6570\u4F1A\u88AB\u8986\u76D6\u4E3A\u53E6\u4E00\u4E2A\u6309\u7167\u5408\u9002\u65B9\u5F0F\u6267\u884C\u7684\u51FD\u6570\uFF0C\u4E0B\u6B21\u6267\u884C\u7684\u65F6\u5019\u5C31\u6267\u884C\u8986\u76D6\u540E\u7684\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;==============&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg <span class="token operator">+</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">test</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">//==============</span>
<span class="token comment">//1001</span>
<span class="token comment">//1001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>==============</code> \u53EA\u8F93\u51FA\u4E86\u4E00\u6B21\uFF0C\u5728<code>test</code>\u51FD\u6570\u7B2C\u4E00\u6B21\u8FD0\u884C\u7684\u65F6\u5019\u5C31\u786E\u5B9A\u4E86\u63A5\u4E0B\u6765\u7684\u5206\u652F</p><p>\u7136\u540E<code>test</code>\u53D8\u6210\u4E86\u5168\u5C40\u7684\u51FD\u6570\uFF0C\u5728\u6D4F\u89C8\u5668\u5173\u95ED\u7684\u65F6\u5019\u624D\u4F1A\u91CA\u653E</p>`,5),c=[p];function o(i,l){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","lazyFunction.html.vue"]]);export{k as default};
