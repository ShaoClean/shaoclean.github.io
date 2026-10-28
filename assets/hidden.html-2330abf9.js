import{_ as n,a0 as s,a1 as a,a4 as e}from"./framework-16947f8e.js";const t={},p=e(`<h1 id="隐藏元素" tabindex="-1"><a class="header-anchor" href="#隐藏元素" aria-hidden="true">#</a> 隐藏元素</h1><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.hidden</span><span class="token punctuation">{</span>
  //1.
	<span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
  //2.
  <span class="token property">opacity</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  //3.
  <span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
  //4.
  <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">scale</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  //5.
  <span class="token property">width</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
  //6.
  <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span>-999999999px<span class="token punctuation">;</span>
  //7.使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏
  <span class="token property">clip-path</span><span class="token punctuation">:</span><span class="token function">circle</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function c(l,o){return s(),a("div",null,i)}const d=n(t,[["render",c],["__file","hidden.html.vue"]]);export{d as default};
