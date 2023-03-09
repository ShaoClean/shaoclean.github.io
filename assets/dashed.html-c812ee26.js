import{$ as n,a0 as a,a1 as s,a4 as e}from"./framework-888972eb.js";const t={},p=e(`<h1 id="自定义虚线" tabindex="-1"><a class="header-anchor" href="#自定义虚线" aria-hidden="true">#</a> 自定义虚线</h1><p>background-image中，linear-gradient的第三个参数可以调整虚线每一段的长度显示百分比，结合background-size的第二个值（可设置虚线每一段总长度）使用。两者结合就可以调整虚线每一段之间的间距大小。 background-size的第一个值可以调整虚线的宽度。（可以设为100%，直接继承元素的宽度width）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>
<span class="token selector">.border</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> black 0%<span class="token punctuation">,</span> black 50%<span class="token punctuation">,</span> transparent 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">background-size</span><span class="token punctuation">:</span> 8px 1px<span class="token punctuation">;</span>
    <span class="token property">background-repeat</span><span class="token punctuation">:</span> repeat-x<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[p];function i(o,l){return a(),s("div",null,c)}const r=n(t,[["render",i],["__file","dashed.html.vue"]]);export{r as default};