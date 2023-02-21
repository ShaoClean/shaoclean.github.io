import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.cc1dc810.js";const e={},p=t(`<h1 id="\u5B9E\u7528\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u7528\u7C7B\u578B" aria-hidden="true">#</a> \u5B9E\u7528\u7C7B\u578B</h1><h2 id="record\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#record\u7C7B\u578B" aria-hidden="true">#</a> Record\u7C7B\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Props</span> <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;green&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">RGB</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span>red<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> green<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> blue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> color<span class="token operator">:</span> Record<span class="token operator">&lt;</span>Props<span class="token punctuation">,</span> <span class="token constant">RGB</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  red<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  green<span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
  blue<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="partial\u7C7B\u578B\u548Comit\u7C7B\u578B\u4E00\u8D77\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#partial\u7C7B\u578B\u548Comit\u7C7B\u578B\u4E00\u8D77\u4F7F\u7528" aria-hidden="true">#</a> Partial\u7C7B\u578B\u548COmit\u7C7B\u578B\u4E00\u8D77\u4F7F\u7528</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  rating<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">badUpdateProduct</span><span class="token punctuation">(</span>
  id<span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  productInfo<span class="token operator">:</span> Product
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u6B64\u65F6\u7684productInfo\u53C2\u6570\uFF0C\u66F4\u65B0\u4EA7\u54C1\u65F6\u4E0D\u9700\u8981\u4F20\u5165\u6240\u6709\u4FE1\u606F\uFF0C\u53EA\u9700\u8981\u4F20\u5165\u60F3\u8981\u4FEE\u6539\u7684\u4E1C\u897F</span>
<span class="token comment">// \u505A\u6CD5\u5982\u4E0B</span>
<span class="token keyword">function</span> <span class="token function">goodUpdateProduct</span><span class="token punctuation">(</span>
  id<span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  productInfo<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>Product<span class="token punctuation">,</span><span class="token string">&quot;id&quot;</span><span class="token operator">&gt;&gt;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u4EE5\u4E0A\u7C7B\u578B\u7B49\u4EF7\u4E8E\uFF1A</span>
<span class="token comment">// interface Product {</span>
<span class="token comment">//   title?: string;</span>
<span class="token comment">//   description?: string;</span>
<span class="token comment">//   price?: number;</span>
<span class="token comment">//   rating?: number;</span>
<span class="token comment">// }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","utilityTypes.html.vue"]]);export{d as default};
