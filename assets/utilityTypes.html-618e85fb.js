import{_ as n,a0 as s,a1 as a,a4 as t}from"./framework-16947f8e.js";const e={},p=t(`<h1 id="实用类型" tabindex="-1"><a class="header-anchor" href="#实用类型" aria-hidden="true">#</a> 实用类型</h1><h2 id="record类型" tabindex="-1"><a class="header-anchor" href="#record类型" aria-hidden="true">#</a> Record类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Props</span> <span class="token operator">=</span> <span class="token string">&quot;red&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;green&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">RGB</span></span> <span class="token operator">=</span> <span class="token punctuation">[</span>red<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> green<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> blue<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> color<span class="token operator">:</span> Record<span class="token operator">&lt;</span>Props<span class="token punctuation">,</span> <span class="token constant">RGB</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  red<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  green<span class="token operator">:</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span>
  blue<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="partial类型和omit类型一起使用" tabindex="-1"><a class="header-anchor" href="#partial类型和omit类型一起使用" aria-hidden="true">#</a> Partial类型和Omit类型一起使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
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

<span class="token comment">// 此时的productInfo参数，更新产品时不需要传入所有信息，只需要传入想要修改的东西</span>
<span class="token comment">// 做法如下</span>
<span class="token keyword">function</span> <span class="token function">goodUpdateProduct</span><span class="token punctuation">(</span>
  id<span class="token operator">:</span> Product<span class="token punctuation">[</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  productInfo<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>Product<span class="token punctuation">,</span><span class="token string">&quot;id&quot;</span><span class="token operator">&gt;&gt;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 以上类型等价于：</span>
<span class="token comment">// interface Product {</span>
<span class="token comment">//   title?: string;</span>
<span class="token comment">//   description?: string;</span>
<span class="token comment">//   price?: number;</span>
<span class="token comment">//   rating?: number;</span>
<span class="token comment">// }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(e,[["render",c],["__file","utilityTypes.html.vue"]]);export{u as default};
