import{_ as n,a0 as s,a1 as a,a4 as e}from"./framework-786d5328.js";const t={},p=e(`<h1 id="判断是否为数组的方式" tabindex="-1"><a class="header-anchor" href="#判断是否为数组的方式" aria-hidden="true">#</a> 判断是否为数组的方式</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 1.通过调用数组的\`isArray\`方法</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>

<span class="token comment">// 2.判断对象的原型对象是否是数组的原型对象</span>
arr<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span>  <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span><span class="token comment">//true</span>

<span class="token comment">// 3.判断对象的原型对象的构造方法是否是Array</span>
arr<span class="token punctuation">.</span><span class="token class-name">__proto__</span><span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array<span class="token punctuation">;</span><span class="token comment">//true</span>

<span class="token comment">// 4.同2（判断对象的原型对象是否是数组的原型对象）</span>
arr <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">;</span><span class="token comment">//true</span>

<span class="token comment">// 5.</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Array]&#39;</span><span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,i){return s(),a("div",null,c)}const u=n(t,[["render",o],["__file","isArray.html.vue"]]);export{u as default};
