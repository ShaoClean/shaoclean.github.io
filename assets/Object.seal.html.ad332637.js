import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.6ab13f4f.js";const t={},p=e(`<h1 id="object-seal" tabindex="-1"><a class="header-anchor" href="#object-seal" aria-hidden="true">#</a> Object.seal()</h1><blockquote><p>\u901A\u5E38\uFF0C\u4E00\u4E2A\u5BF9\u8C61\u662F\u53EF\u6269\u5C55\u7684\uFF08\u53EF\u4EE5\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027\uFF09\u3002\u5BC6\u5C01\u4E00\u4E2A\u5BF9\u8C61\u4F1A\u8BA9\u8FD9\u4E2A\u5BF9\u8C61\u53D8\u7684\u4E0D\u80FD\u6DFB\u52A0\u65B0\u5C5E\u6027\uFF0C\u4E14\u6240\u6709\u5DF2\u6709\u5C5E\u6027\u4F1A\u53D8\u7684\u4E0D\u53EF\u914D\u7F6E\u3002\u5C5E\u6027\u4E0D\u53EF\u914D\u7F6E\u7684\u6548\u679C\u5C31\u662F\u5C5E\u6027\u53D8\u7684\u4E0D\u53EF\u5220\u9664\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u6570\u636E\u5C5E\u6027\u4E0D\u80FD\u88AB\u91CD\u65B0\u5B9A\u4E49\u6210\u4E3A\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u6216\u8005\u53CD\u4E4B\u3002\u4F46\u5C5E\u6027\u7684\u503C\u4ECD\u7136\u53EF\u4EE5\u4FEE\u6539\u3002\u5C1D\u8BD5\u5220\u9664\u4E00\u4E2A\u5BC6\u5C01\u5BF9\u8C61\u7684\u5C5E\u6027\u6216\u8005\u5C06\u67D0\u4E2A\u5BC6\u5C01\u5BF9\u8C61\u7684\u5C5E\u6027\u4ECE\u6570\u636E\u5C5E\u6027\u8F6C\u6362\u6210\u8BBF\u95EE\u5668\u5C5E\u6027\uFF0C\u7ED3\u679C\u4F1A\u9759\u9ED8\u5931\u8D25\u6216\u629B\u51FATypeError\uFF08\u5728\u4E25\u683C\u6A21\u5F0F \u4E2D\u6700\u5E38\u89C1\u7684\uFF0C\u4F46\u4E0D\u552F\u4E00\uFF09\u3002</p></blockquote><p>\u548CObject.freeze()\u7684\u533A\u522B\u5C31\u662F\uFF0CObject.seal()\u80FD\u4FEE\u6539\u5C5E\u6027\u503C\uFF0C\u5176\u5B83\u90FD\u4E00\u6837</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span><span class="token string">&#39;im a&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token string">&#39;im b&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u8FD4\u56DE\u4E4B\u524D\u5BF9\u8C61\u7684\u5F15\u7528</span>
<span class="token keyword">let</span> sealedObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//1.\u4E0D\u80FD\u6DFB\u52A0\u65B0\u7684\u5C5E\u6027</span>
obj<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token string">&#39;im d&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//2.\u5C5E\u6027\u4E0D\u53EF\u914D\u7F6E\uFF08\u4E0D\u80FD\u91CD\u65B0\u5B9A\u4E49\u8BBF\u95EE\u5668\uFF09</span>
<span class="token comment">// Object.defineProperty(obj,&#39;a&#39;,{</span>
<span class="token comment">//   get(){</span>
<span class="token comment">//     console.log(&#39;im changed a!!&#39;);</span>
<span class="token comment">//     return &#39;changed a&#39;</span>
<span class="token comment">//   }</span>
<span class="token comment">// })</span>

<span class="token comment">//2.\u5C5E\u6027\u4E0D\u53EF\u914D\u7F6E\uFF08\u4E0D\u80FD\u5220\u9664\uFF09</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>a

<span class="token comment">//\u91CC\u9762\u7684\u6570\u7EC4\u53EF\u4EE5\u64CD\u4F5C</span>
obj<span class="token punctuation">.</span>c<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>c<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u53EF\u4EE5\u904D\u5386</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","Object.seal.html.vue"]]);export{d as default};
