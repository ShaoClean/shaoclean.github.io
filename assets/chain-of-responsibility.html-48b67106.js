import{_ as n,a0 as s,a1 as a,a4 as t}from"./framework-786d5328.js";const p={},e=t(`<blockquote><p><strong>责任链模式</strong>：解决请求的发送者与请求的接受者之间的耦合，通过职责链上的多个对象对分解请求流程，实现请求在多个对象之间的传递，直到最后一个对象完成请求的处理。</p></blockquote><p>它是一种处理请求的模式，让多个处理器都有机会处理该请求，直到其中某个处理成功为止。它将多个处理器串成链，然后让请求在链上传递。</p><p>用责任链模式设计此报销流程时，每个审核者只关心自己责任范围内的请求，并且处理它。对于超出自己责任范围的，扔给下一个审核者处理，这样，将来继续添加审核者的时候，不用改动现有逻辑。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Manager：只能审核1000元以下的报销；</span>

<span class="token comment">// Director：只能审核10000元以下的报销；</span>

<span class="token comment">// CEO：可以审核任意额度。</span>

<span class="token keyword">const</span> <span class="token constant">HANDLER_STATUS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token doc-comment comment">/**
	 * 交给下一个处理
	 */</span>
	<span class="token constant">NEXT</span><span class="token operator">:</span> <span class="token string">&quot;next&quot;</span><span class="token punctuation">,</span>

	<span class="token doc-comment comment">/**
	 * 审核不通过
	 */</span>
	<span class="token constant">REJECT</span><span class="token operator">:</span> <span class="token string">&quot;reject&quot;</span><span class="token punctuation">,</span>

	<span class="token doc-comment comment">/**
	 * 审核通过
	 */</span>
	<span class="token constant">ACCEPT</span><span class="token operator">:</span> <span class="token string">&quot;accept&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Request</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>

		<span class="token keyword">this</span><span class="token punctuation">.</span>amount <span class="token operator">=</span> amount<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ManagerHandler</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>amount <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 对bob有偏见 不给他通过审核</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">&quot;bob&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token constant">HANDLER_STATUS</span><span class="token punctuation">.</span><span class="token constant">REJECT</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token constant">HANDLER_STATUS</span><span class="token punctuation">.</span><span class="token constant">ACCEPT</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">// 超过1000元 没有权限处理不了，给下一个人处理</span>
		<span class="token keyword">return</span> <span class="token constant">HANDLER_STATUS</span><span class="token punctuation">.</span><span class="token constant">NEXT</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">DirectorHandler</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>amount <span class="token operator">&lt;=</span> <span class="token number">10000</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token constant">HANDLER_STATUS</span><span class="token punctuation">.</span><span class="token constant">ACCEPT</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	    <span class="token comment">// 超过10000元 没有权限处理不了，给下一个人处理</span>
		<span class="token keyword">return</span> <span class="token constant">HANDLER_STATUS</span><span class="token punctuation">.</span><span class="token constant">NEXT</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">CeoHandler</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token constant">HANDLER_STATUS</span><span class="token punctuation">.</span><span class="token constant">ACCEPT</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ChainHandler</span> <span class="token punctuation">{</span>
	handlerList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token function">addHandler</span><span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handler <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;handler must be function!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">this</span><span class="token punctuation">.</span>handlerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">handleHandler</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> handler <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handlerList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>res <span class="token operator">!==</span> <span class="token constant">HANDLER_STATUS</span><span class="token punctuation">.</span><span class="token constant">NEXT</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
					request<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
					res <span class="token operator">===</span> <span class="token constant">HANDLER_STATUS</span><span class="token punctuation">.</span><span class="token constant">ACCEPT</span> <span class="token operator">?</span> <span class="token string">&quot;is accept&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;is reject&quot;</span>
				<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ch1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChainHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ch1<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>ManagerHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

ch1<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>DirectorHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

ch1<span class="token punctuation">.</span><span class="token function">addHandler</span><span class="token punctuation">(</span>CeoHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

ch1<span class="token punctuation">.</span><span class="token function">handleHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token string">&quot;bob&quot;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ch1<span class="token punctuation">.</span><span class="token function">handleHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token string">&quot;clean&quot;</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ch1<span class="token punctuation">.</span><span class="token function">handleHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token string">&quot;scz&quot;</span><span class="token punctuation">,</span> <span class="token number">150000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","chain-of-responsibility.html.vue"]]);export{k as default};
