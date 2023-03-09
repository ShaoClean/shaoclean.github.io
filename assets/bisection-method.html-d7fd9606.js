import{$ as n,a0 as s,a1 as a,a4 as p}from"./framework-888972eb.js";const t={},e=p(`<h1 id="二分法" tabindex="-1"><a class="header-anchor" href="#二分法" aria-hidden="true">#</a> 二分法</h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bisection</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 开始下标</span>
  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 结束下标</span>
  <span class="token keyword">let</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">// 中间下标</span>
  <span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>end <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      end <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
      mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> mid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">434</span><span class="token punctuation">,</span> <span class="token number">435</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token function">bisection</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间复杂度分析： 第 1 次折半： 还剩 n/2 个元素</p><p>第 2 次折半： 还剩 n/4 个元素</p><p>第 3 次折半： 还剩 n/8 个元素</p><p>… 第 k 次折半： 还剩 $n/2^k$ 个元素</p><p>最坏的情况下，最后还剩一个元素，令 $n/2^k=1$，则得$k=logN$</p><p>那么这个 T(n)，小于等于且接近于函数 $fn=logN$，时间复杂度为 $O()=O(logN)$</p>`,8),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","bisection-method.html.vue"]]);export{k as default};