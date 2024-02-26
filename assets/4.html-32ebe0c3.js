import{_ as n,a0 as s,a1 as a,a2 as t}from"./framework-a6f32df7.js";const p={},e=t(`<h1 id="分布式动态路" tabindex="-1"><a class="header-anchor" href="#分布式动态路" aria-hidden="true">#</a> 分布式动态路</h1><p>在面对一个庞大的项目时，我们将不得不面临路由的问题。</p><p>传统的做法就是将路由一个一个的导入<code>router.ts</code>路由导航的文件中</p><p>也可以通过<code>()=&gt;import(&#39;home.router.ts&#39;)</code>的懒加载的方式来加载路由</p><p>但是面临一个庞大的项目时，有无数个模块，每个模块下面又有无数个子模块，每个子模块还有不同的功能时，此时一个一个导入到一个路由文件中就显得很无力了，后期也不方便管理。</p><p>那么此时的解决方法就是将每一个子模块抽离出来，单独写成一个路由文件，例如：<code>home.routes.ts</code> 之后便可以将这个抽离出来的文件再导入到总路由中就可以了。</p><p>那么此时又有新的问题出来了，这样一个一个的导入太繁琐。</p><p>于是便有了接下来的方法，自动的每个路由模块导入</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> routerList<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">importAll</span><span class="token punctuation">(</span>files<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> path <span class="token keyword">in</span> files<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> module <span class="token operator">=</span> files<span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">.</span>default<span class="token punctuation">;</span>
    routerList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// eager:true 静态导入，如果不启用此向，将会变成动态导入，是一个异步的promise，暂时没有找到解决方案</span>
<span class="token function">importAll</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">&quot;./*.routes.ts&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> eager<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","4.html.vue"]]);export{r as default};