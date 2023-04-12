import{$ as n,a0 as s,a1 as a,a4 as e}from"./framework-19a42cda.js";const t={},p=e(`<h1 id="object-seal" tabindex="-1"><a class="header-anchor" href="#object-seal" aria-hidden="true">#</a> Object.seal()</h1><blockquote><p>通常，一个对象是可扩展的（可以添加新的属性）。密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。但属性的值仍然可以修改。尝试删除一个密封对象的属性或者将某个密封对象的属性从数据属性转换成访问器属性，结果会静默失败或抛出TypeError（在严格模式 中最常见的，但不唯一）。</p></blockquote><p>和Object.freeze()的区别就是，Object.seal()能修改属性值，其它都一样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&#39;im a&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">&#39;im b&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">//返回之前对象的引用</span>
<span class="token keyword">let</span> sealedObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.不能添加新的属性</span>
obj<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token string">&#39;im d&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2.属性不可配置（不能重新定义访问器）</span>
<span class="token comment">// Object.defineProperty(obj,&#39;a&#39;,{</span>
<span class="token comment">//   get(){</span>
<span class="token comment">//     console.log(&#39;im changed a!!&#39;);</span>
<span class="token comment">//     return &#39;changed a&#39;</span>
<span class="token comment">//   }</span>
<span class="token comment">// })</span>

<span class="token comment">//2.属性不可配置（不能删除）</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>a

<span class="token comment">//里面的数组可以操作</span>
obj<span class="token punctuation">.</span>c<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>c<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//可以遍历</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","Object.seal.html.vue"]]);export{r as default};
