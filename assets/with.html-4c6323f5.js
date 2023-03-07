import{$ as n,a0 as s,a1 as a,a4 as t}from"./framework-888972eb.js";const o={},e=t(`<h1 id="with-方法" tabindex="-1"><a class="header-anchor" href="#with-方法" aria-hidden="true">#</a> with 方法</h1><p><strong>在《JavaScript 权威指南》(第五版, David Flanagan, P109)中的解释是:</strong></p><blockquote><p>with 语句用于暂时修改作用域链...这一个语句能够有效地将 Object 添加到作用域链的头部，然后执行 statement，再把作用域链恢复到原始状态... 虽然有时使用 with 语句比较方便，但是人们反对使用它。使用了 with 语句的 JavaScript 代码很难优化，因此它的运行速度比不使用 with 语句的等价代码要慢得多。 而且，在 with 语句中的函数定义和变量初始化可能会产生令人惊讶的、和直觉相抵触的行为(这一行为以及产生的原因非常复杂，在这里我们不做解释)</p></blockquote><p><strong>MDN 中的解释：</strong></p><blockquote><p>如果在 statement 中有某个未使用命名空间的变量，跟作用域链中的某个属性同名，则这个变量将指向这个属性值。如果沒有同名的属性，则将拋出 ReferenceError 异常。</p></blockquote><p>用自己的话来说就是，将 with 表达式中的东西放到作用域的顶端。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token string">&quot;hello world&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token string">&quot;hi info&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;clean&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">withTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token keyword">with</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//hi info</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">withTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正常来说，没有<code>with()</code>语句时。执行<code>withTest()</code>函数读取<code>info</code>时，根据作用域链，在本层作用域没有<code>info</code>，接着向全局作用域寻找，找到了<code>info</code>并输出<code>hello world</code>。</p><p>但此处使用了<code>with()</code>语句，它将<code>obj</code>里的状态添加到了它作用域的顶部，因此找到了<code>info</code>并输出</p>`,9),p=[e];function c(i,l){return s(),a("div",null,p)}const r=n(o,[["render",c],["__file","with.html.vue"]]);export{r as default};
