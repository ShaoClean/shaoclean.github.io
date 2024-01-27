import{_ as s,a0 as n,a1 as a,a4 as e}from"./framework-16947f8e.js";const o={},p=e(`<p>删除数据库中n行到m行到记录：</p><p>下面是删除数据库中30-100行记录的sql语句</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> image_info <span class="token keyword">where</span> id <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token keyword">select</span> id <span class="token keyword">from</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> image_info <span class="token keyword">limit</span> <span class="token number">30</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">as</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本来以为是非常简单的事情，结果话费了我半个多小时</p><p>chat GPT说：</p><blockquote><p>在标准的 SQL 语法中，<code>DELETE</code> 语句不支持直接使用 <code>OFFSET</code> 和 <code>LIMIT</code> 来限制删除的记录范围。<code>OFFSET</code> 和 <code>LIMIT</code> 子句通常用于查询语句中，而不是用于删除语句。</p></blockquote><p>气死了！</p>`,7),t=[p];function c(l,d){return n(),a("div",null,t)}const i=s(o,[["render",c],["__file","1.html.vue"]]);export{i as default};