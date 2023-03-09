import{$ as n,a0 as s,a1 as a,a4 as t}from"./framework-888972eb.js";const p={},e=t(`<h1 id="非导入-js-文件创建-webworker" tabindex="-1"><a class="header-anchor" href="#非导入-js-文件创建-webworker" aria-hidden="true">#</a> 非导入 JS 文件创建 WebWorker</h1><p>大致思路：</p><p>1.创建一个函数，这个函数就是在 webworker 中需要执行的操作</p><p>2.该函数转换成字符串(<code>toString()</code>方法)</p><p>3.通过<code>URL.createObjectURL</code>创建一个地址</p><p>4.将上一步创建的地址传入<code>new Worker()</code> 中生成</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">function</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> message <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i am worker, receive:&quot;</span> <span class="token operator">+</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token string">&quot;message from worker&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> <span class="token function-variable function">runWorker</span> <span class="token operator">=</span> <span class="token parameter">f</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>
			<span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>f<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)()</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>

		worker<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;i am main thread, receive:&quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>

		worker<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;message from main thread&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> testWorker <span class="token operator">=</span> <span class="token function">runWorker</span><span class="token punctuation">(</span>work<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","webworker.html.vue"]]);export{r as default};
