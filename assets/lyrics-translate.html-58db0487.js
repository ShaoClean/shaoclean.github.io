import{_ as s,a0 as a,a1 as t,a7 as p,a2 as n,a3 as e,a4 as o}from"./framework-786d5328.js";const c={},i=n("h1",{id:"歌词滚动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#歌词滚动","aria-hidden":"true"},"#"),e(" 歌词滚动")],-1),l=o(`<p>歌词：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> lyrics <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[00:00.00]我落泪情绪零碎
[00:00.100]作词 : 方文山
[00:01.000]作曲 : 周杰伦
[00:02.000]编曲 : 钟兴民
[00:03.000]制作人 : 周杰伦
[00:04.000]弦乐编写 : 钟兴民
[00:05.000]录音师 : 杨瑞代Gary
[00:06.000]录音室 : JVR Studio
[00:07.000]混音 : 杨大纬录音工作室
[00:16.43]地上 断了翅的蝶
[00:19.98]雾散之后的 满月
[00:23.78]原来爱 跟心碎
[00:26.43]都可以很 细节
[00:30.48]听夜风绕过 几条街
[00:34.08]秋天瘦了满地 的落叶
[00:38.08]于是又一整夜
[00:41.23]感性的句子都枯萎 凋谢
[00:45.58]我不想再写
[00:48.33]随手撕下这一页
[00:52.28]原来诗跟离别
[00:54.99]可以没有结尾（没有结尾）
[00:58.99]憔悴后悔等等这些
[01:02.49]于是我把诗折叠
[01:06.59]邮寄出感觉 夹一束白玫瑰
[01:10.09]你将爱退回
[01:11.99]我不落泪 忍住感觉
[01:19.19]分手在起风 这个季节
[01:26.44]哭久了会累 也只是别人的以为
[01:35.29]冷的咖啡 我清醒着 一再续杯
[01:41.14]我落泪 情绪零碎
[01:47.89]你的世界 一幕幕纷飞
[01:55.04]门外的蔷薇 带刺伤人的很直接
[02:03.99]过去被翻阅 结局满天的 风雪
[02:26.04]我不想再写
[02:28.74]随手撕下这一页（这一页）
[02:32.65]原来诗 跟离别
[02:35.40]可以没有结尾（没有结尾）
[02:39.40]憔悴后悔等等 这些
[02:42.85]于是我 把诗折叠
[02:46.95]邮寄出感觉 夹一束白玫瑰
[02:50.35]你将爱退回
[02:52.35]我不落泪 忍住感觉
[02:59.50]分手在起风 这个季节
[03:06.75]哭久了会累 也只是别人的以为
[03:15.60]冷的咖啡 我清醒着 一再续杯
[03:21.35]我落泪 情绪零碎
[03:28.08]你的世界 一幕幕纷飞
[03:35.38]门外的蔷薇 带刺伤人的很直接
[03:44.34]过去被翻阅 结局满天的 风雪
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>完整代码： 有两种实现滚动的方式，计算需要滚动的距离：当前歌词所在行的高度 - 视口的一半</p><ul><li><p><code>scrollTop</code>方法实现的滚动动画用的是自带的 smooth，不能自定义</p></li><li><p><code>translateLyrics</code>方法实现的滚动动画用的是 css 的 transition，可以自定义。更推荐这一种。</p></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zh-CN<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>我落泪情绪零碎<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
			<span class="token selector">*</span> <span class="token punctuation">{</span>
				<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
				<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">html,
			body</span> <span class="token punctuation">{</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> #2b2b2b<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">.container</span> <span class="token punctuation">{</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
				<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
				<span class="token property">color</span><span class="token punctuation">:</span> #969696<span class="token punctuation">;</span>
				<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">.lyrics</span> <span class="token punctuation">{</span>
				<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
				<span class="token property">top</span><span class="token punctuation">:</span> 190px<span class="token punctuation">;</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 350px<span class="token punctuation">;</span>
				<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
				<span class="token property">transition</span><span class="token punctuation">:</span> 0.7s<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token selector">ul</span> <span class="token punctuation">{</span>
				<span class="token property">overflow</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span>
				<span class="token property">transition</span><span class="token punctuation">:</span> 0.7s<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">ul::-webkit-scrollbar</span> <span class="token punctuation">{</span>
				<span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">ul li.active</span> <span class="token punctuation">{</span>
				<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">ul li</span> <span class="token punctuation">{</span>
				<span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
				<span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
				<span class="token property">transition</span><span class="token punctuation">:</span> 0.7s<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wllqxls.mp3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyrics<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lyrics.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
			<span class="token keyword">const</span> doms <span class="token operator">=</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">source</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;audio&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token literal-property property">lyrics</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.lyrics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token literal-property property">ul</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token function">createElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			doms<span class="token punctuation">.</span>lis <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			doms<span class="token punctuation">.</span>source<span class="token punctuation">.</span>volume <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">;</span>
			<span class="token comment">/*
			 * 原始歌词转换成数组
			 * */</span>
			<span class="token keyword">function</span> <span class="token function">lyricsToArr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> arr <span class="token operator">=</span> lyrics<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>item<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
					<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
					<span class="token comment">// 分割 &#39;]&#39;</span>
					<span class="token keyword">const</span> splitRightSign <span class="token operator">=</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token comment">// 时间</span>
					<span class="token keyword">const</span> timeText <span class="token operator">=</span> splitRightSign<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

					obj<span class="token punctuation">.</span>time <span class="token operator">=</span> <span class="token function">timeTextToNumber</span><span class="token punctuation">(</span>timeText<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token comment">// 歌词</span>
					obj<span class="token punctuation">.</span>content <span class="token operator">=</span> splitRightSign<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
					res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> res<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> frame <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">const</span> lyricsArr <span class="token operator">=</span> <span class="token function">lyricsToArr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				lyricsArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token keyword">const</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					li<span class="token punctuation">.</span>textContent <span class="token operator">=</span> item<span class="token punctuation">.</span>content<span class="token punctuation">;</span>
					frame<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				doms<span class="token punctuation">.</span>ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>frame<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">/*
			 * 字符串类型的时间转换成数字类型的时间
			 * */</span>
			<span class="token keyword">function</span> <span class="token function">timeTextToNumber</span><span class="token punctuation">(</span><span class="token parameter">timeText</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">let</span> res<span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeText<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
				<span class="token keyword">const</span> splitSign <span class="token operator">=</span> timeText<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">const</span> minute <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>splitSign<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				res <span class="token operator">=</span> minute <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>splitSign<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> res<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">/*
			 * 当前播放器匹配歌词时间
			 * */</span>
			<span class="token keyword">function</span> <span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> currentTime <span class="token operator">=</span> doms<span class="token punctuation">.</span>source<span class="token punctuation">.</span>currentTime<span class="token punctuation">;</span>
				<span class="token keyword">const</span> lyricsArr <span class="token operator">=</span> <span class="token function">lyricsToArr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> lyricsArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">const</span> time <span class="token operator">=</span> lyricsArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>time<span class="token punctuation">;</span>

					<span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">&gt;=</span> lyricsArr<span class="token punctuation">[</span>lyricsArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">return</span> lyricsArr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>

					<span class="token keyword">if</span> <span class="token punctuation">(</span>currentTime <span class="token operator">&lt;=</span> lyricsArr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>

					<span class="token keyword">if</span> <span class="token punctuation">(</span>
						currentTime <span class="token operator">&gt;=</span> time <span class="token operator">&amp;&amp;</span>
						currentTime <span class="token operator">&lt;</span> lyricsArr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>time
					<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token keyword">return</span> i<span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">function</span> <span class="token function">scrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">// 容器高度</span>
				<span class="token keyword">const</span> lyricsHeight <span class="token operator">=</span> doms<span class="token punctuation">.</span>lyrics<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
				<span class="token comment">// 歌词高度</span>
				<span class="token keyword">const</span> height <span class="token operator">=</span> doms<span class="token punctuation">.</span>lis<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
				<span class="token keyword">const</span> currentHeight <span class="token operator">=</span> height <span class="token operator">*</span> index<span class="token punctuation">;</span>
				doms<span class="token punctuation">.</span>lyrics<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
					<span class="token literal-property property">top</span><span class="token operator">:</span> currentHeight <span class="token operator">-</span> lyricsHeight <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
					<span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">&quot;smooth&quot;</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				doms<span class="token punctuation">.</span>lis<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						item<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						item<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">function</span> <span class="token function">translateLyrics</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">// 容器高度</span>
				<span class="token keyword">const</span> lyricsHeight <span class="token operator">=</span> doms<span class="token punctuation">.</span>lyrics<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
				<span class="token comment">// 歌词高度</span>
				<span class="token keyword">const</span> height <span class="token operator">=</span> doms<span class="token punctuation">.</span>lis<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
				<span class="token keyword">const</span> currentHeight <span class="token operator">=</span> height <span class="token operator">*</span> index<span class="token punctuation">;</span>
				<span class="token comment">// index === 3的时候总高度为 3 * 50 = 150，是没有超过容器高度的一半的</span>
				<span class="token comment">// 当index === 4的时候，超过了容器高度的一半，则需要开始移动</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>currentHeight <span class="token operator">&gt;</span> lyricsHeight <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// 写死的形式</span>
					<span class="token comment">// const translate = (index - 3) * height</span>
					<span class="token comment">// 更加灵活的形式</span>
					<span class="token keyword">const</span> translate <span class="token operator">=</span> currentHeight <span class="token operator">-</span> lyricsHeight <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
					doms<span class="token punctuation">.</span>ul<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">translateY(-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>translate<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				doms<span class="token punctuation">.</span>lis<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						item<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
						item<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			doms<span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;timeupdate&quot;</span><span class="token punctuation">,</span> translateLyrics<span class="token punctuation">)</span><span class="token punctuation">;</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function u(k,r){return a(),t("div",null,[i,p(" more "),l])}const v=s(c,[["render",u],["__file","lyrics-translate.html.vue"]]);export{v as default};
