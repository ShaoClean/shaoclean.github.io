import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,d as s,b as t,w as e,f as o,e as n,r as i}from"./app.b368c9c8.js";const u={},r=o(`<h1 id="cyou-js\u4F7F\u7528\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#cyou-js\u4F7F\u7528\u6587\u6863" aria-hidden="true">#</a> cyou-js\u4F7F\u7528\u6587\u6863</h1><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="_1-\u5F15\u5165\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5F15\u5165\u6587\u4EF6" aria-hidden="true">#</a> 1.\u5F15\u5165\u6587\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> createCyou <span class="token keyword">from</span> <span class="token string">&#39;cyou-js.js&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;style.css&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u521D\u59CB\u5316ctool" tabindex="-1"><a class="header-anchor" href="#_2-\u521D\u59CB\u5316ctool" aria-hidden="true">#</a> 2.\u521D\u59CB\u5316ctool</h3><div class="custom-container danger"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7531\u4E8EVue\u9879\u76EE\u89E3\u6790\u6A21\u677F\u6E32\u67D3\u9875\u9762\u673A\u5236\u7684\u7279\u6B8A\u6027\uFF0C\u4F7F\u7528\u8D77\u6765\u53EF\u80FD\u4F1A\u6709\u70B9\u5947\u602A<br> \u5F53\u7136\u8FD9\u4E00\u70B9\u6211\u4EEC\u8FD8\u5728\u52AA\u529B\u7684\u6539\u8FDB\u4E2D\u{1F4AA}</p></div><ul><li><strong>\u5728\u539F\u751FJS\u9879\u76EE\u4E2D\uFF0C\u9700\u8981\u8FD9\u6837\u4F7F\u7528\uFF1A</strong><br></li></ul><p>1.\u9996\u5148\u9700\u8981\u521B\u5EFA\u4E00\u4E2A<code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>\uFF08\u8BE5\u5BB9\u5668\u7528\u4E8E\u653E\u7F6Ectool\uFF0C\u53EF\u4EE5\u5728\u6B64\u533A\u57DF\u5185\u81EA\u7531\u7684\u79FB\u52A8ctool\uFF09</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.\u5728js\u4E2D\u521D\u59CB\u5316cyou</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>\u5728Vue\u9879\u76EE\u4E2D\uFF0C\u5219\u9700\u8981\u8FD9\u6837\u4F7F\u7528\uFF1A</strong></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//App.vue</span>
<span class="token keyword">let</span> ctool<span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u606D\u559C\u{1F389}\uFF0C\u81F3\u6B64ctool\u5C31\u4F1A\u51FA\u73B0\u5728\u9875\u9762\u4E0A\u4E86\uFF01<br> \u4EE5\u4E0A\u662Fcyou\u7684\u9ED8\u8BA4\u4F7F\u7528\u65B9\u5F0F\uFF0C\u4E0D\u6DFB\u52A0\u4EFB\u4F55\u7684\u914D\u7F6E\u9879\u3002ctool\u4F1A\u4EE5\u9875\u9762\u4E0A<strong>\u7B2C\u4E00\u4E2A</strong><code>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>\u7684\u5143\u7D20\u4E3A\u6839\u5143\u7D20\uFF0C \u53EF\u4EE5\u81EA\u7531\u62D6\u62FD\u6B64\u6839\u5143\u7D20\u4E0B\u6240\u6709\u4E00\u7EA7\u5B50\u5143\u7D20\u3002</p><h3 id="_3-\u81EA\u5B9A\u4E49\u6839\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_3-\u81EA\u5B9A\u4E49\u6839\u5143\u7D20" aria-hidden="true">#</a> 3.\u81EA\u5B9A\u4E49\u6839\u5143\u7D20</h3>`,15),d=n("\u9664\u4E86"),k=n("\u5728js\u4E2D\u521D\u59CB\u5316cyou"),v=n("\u8FD9\u6837\u9ED8\u8BA4\u521D\u59CB\u5316ctool\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u8FD8\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u6307\u5B9A\u6839\u5143\u7D20\u3002"),h=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">rootEl</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.myRootEl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-\u6DFB\u52A0\u6839\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_4-\u6DFB\u52A0\u6839\u5143\u7D20" aria-hidden="true">#</a> 4.\u6DFB\u52A0\u6839\u5143\u7D20</h3><p>\u9700\u8981\u901A\u8FC7<code>ctool</code>\u7684<code>addRootEl()</code>\u65B9\u6CD5\u6765\u6DFB\u52A0\u6839\u5143\u7D20</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">rootEl</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.myRootEl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctool<span class="token punctuation">.</span><span class="token function">addRootEl</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.otherRootEl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u901A\u8FC7\u5404\u79CD\u83B7\u53D6\u5355\u4E2A\u5143\u7D20\u7684\u65B9\u5F0F\u6765\u4F20\u5165\u6839\u5143\u7D20\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> rootEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myRootEl&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u76EE\u524D\u4F20\u5165\u7684\u6839\u5143\u7D20\u4E0D\u652F\u6301\u6570\u7EC4\u7684\u5F62\u5F0F\u3002<br> \u5982\u679C\u575A\u6301\u8FD9\u4E48\u505A\uFF0C\u90A3\u4E48ctool\u7684\u90E8\u5206\u529F\u80FD\u5C06\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002\u76EE\u524D\u5DF2\u77E5\u4F1A\u53D7\u5230\u5F71\u54CD\u7684\u529F\u80FD\uFF1A</p><ul><li>\u81EA\u7531\u62D6\u62FD\u5143\u7D20</li></ul></div><h3 id="_5-\u4F7F\u7528\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_5-\u4F7F\u7528\u529F\u80FD" aria-hidden="true">#</a> 5.\u4F7F\u7528\u529F\u80FD</h3><p>\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u81EA\u7531\u7684\u4F7F\u7528cyou\u5185\u7F6E\u7684API\u4E86\uFF01</p>`,9),m=n("\u81EA\u7531\u62D6\u62FD\u5143\u7D20(ch)"),b=n("\u521B\u5EFA\u5143\u7D20(cr)"),g=n("\u66FF\u6362\u5143\u7D20(re)"),y=n("\u4EA4\u6362\u5143\u7D20(ex)"),_=o(`<h2 id="\u5185\u7F6Eapi" tabindex="-1"><a class="header-anchor" href="#\u5185\u7F6Eapi" aria-hidden="true">#</a> \u5185\u7F6EAPI</h2><p>\u4EE5\u4E0B\u5185\u5BB9\u4E3B\u8981\u4ECB\u7ECD\u4E86cyou-js\u4E2D\u7684\u5185\u7F6EAPI\uFF0C\u66F4\u591AAPI\u6B63\u5728\u6301\u7EED\u66F4\u65B0\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01</p><h3 id="_1-\u81EA\u7531\u62D6\u62FD\u5143\u7D20-ch" tabindex="-1"><a class="header-anchor" href="#_1-\u81EA\u7531\u62D6\u62FD\u5143\u7D20-ch" aria-hidden="true">#</a> 1.\u81EA\u7531\u62D6\u62FD\u5143\u7D20(ch)</h3><p>\u4F7F\u7528\u65B9\u5F0F\u975E\u5E38\u7684\u7B80\u5355\uFF0C\u60A8\u53EA\u9700\u8981\u5728ctool\u4E2D\u70B9\u51FB<code>ch</code>\u5373\u53EF\u81EA\u7531\u5BF9\u5143\u7D20\u8FDB\u884C\u62D6\u62FD\u3002</p><h3 id="_2-\u521B\u5EFA\u5143\u7D20-cr" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u5143\u7D20-cr" aria-hidden="true">#</a> 2.\u521B\u5EFA\u5143\u7D20(cr)</h3><p>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5143\u7D20\u3002</p><h4 id="\u70B9\u51FB\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u70B9\u51FB\u751F\u6210" aria-hidden="true">#</a> \u70B9\u51FB\u751F\u6210</h4><p>\u9996\u5148\u60A8\u9700\u8981\u4F7F\u7528<code>createCyou()</code>\u51FD\u6570\u6765\u521B\u5EFA<code>ctool</code>,</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728ctool\u4E2D\u70B9\u51FB<code>cr</code>\u5728\u5F39\u51FA\u7684\u5BF9\u8BDD\u6846\u4E2D\u8BBE\u7F6E\u5143\u7D20\u76F8\u5173\u5C5E\u6027\u5373\u53EF\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5143\u7D20\u3002<br> \u76EE\u524D\u60A8\u53EF\u4EE5\u81EA\u7531\u914D\u7F6E\u4EE5\u4E0B\u5C5E\u6027\uFF1A</p><ul><li><strong>width</strong> \u5143\u7D20\u7684\u5BBD\u5EA6</li><li><strong>height</strong> \u5143\u7D20\u7684\u9AD8\u5EA6</li><li><strong>backgroundColor</strong> \u5143\u7D20\u7684\u80CC\u666F\u989C\u8272</li></ul>`,11),f=n("\u70B9\u51FB\u67E5\u770B"),j=n("\u6E90\u7801\u89E3\u6790"),x=o(`<h4 id="\u4F7F\u7528js\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528js\u751F\u6210" aria-hidden="true">#</a> \u4F7F\u7528js\u751F\u6210</h4><p>\u60A8\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528<code>ctool</code>\u4E0A\u7684<code>cr</code>\u51FD\u6570\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5143\u7D20\u5230\u60A8\u7684\u9875\u9762\u4E0A\u3002<br></p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>cr</code>\u51FD\u6570\u53EF\u4EE5\u4E0D\u4F20\u5165\u53C2\u6570\uFF0C\u6B64\u65F6\u8C03\u7528\u8BE5\u51FD\u6570\u4F1A\u521B\u5EFA\u4E00\u4E2A\u9ED8\u8BA4\u6837\u5F0F\u7684\u5143\u7D20\u3002</p></div><p><strong>\u4E0B\u9762\u4ECB\u7ECD\u4E24\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF1A</strong></p><ul><li>1.\u9ED8\u8BA4\u521B\u5EFA\u65B9\u5F0F\uFF08\u4E0D\u5E26\u53C2\u6570\uFF09</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctool<span class="token punctuation">.</span><span class="token function">cr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.\u81EA\u5B9A\u4E49\u5143\u7D20\u6837\u5F0F\u7684\u521B\u5EFA\u65B9\u5F0F\uFF08\u5E26\u53C2\u6570\uFF09<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A\uFF1A\u60A8\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u559C\u597D\u6765\u521B\u5EFA\u5177\u6709\u4E2A\u6027\u5316\u7684\u5143\u7D20\u3002</p><p><code>cr</code>\u63A5\u6536\u7C7B\u578B\u4E3A<code>CrOptions</code>\u7684\u53C2\u6570\u3002<br></p></div></li><li><code>style</code>\u63A5\u6536\u591A\u4E2Astyle\u5C5E\u6027</li><li><code>classList</code>\u63A5\u6536\u591A\u4E2A<code>class</code>\u6837\u5F0F\u7684\u540D\u79F0\u3002<br></li></ul><p>:::</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">CrOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    style<span class="token operator">?</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    classList<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u4F8B\u5B50\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.my-class1</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #333333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.my-class2</span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> crOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">&quot;200px&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token string">&quot;200px&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">&quot;red&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">classList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;my-class1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;my-class2&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
ctool<span class="token punctuation">.</span><span class="token function">cr</span><span class="token punctuation">(</span>crOptions<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u66FF\u6362\u5143\u7D20-re" tabindex="-1"><a class="header-anchor" href="#_3-\u66FF\u6362\u5143\u7D20-re" aria-hidden="true">#</a> 3.\u66FF\u6362\u5143\u7D20(re)</h3><p>\u5C06\u4E00\u4E2A\u5143\u7D20\u66FF\u6362\u6210\u53E6\u4E00\u4E2A\u5143\u7D20\u3002</p><h4 id="\u70B9\u51FB\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u70B9\u51FB\u66FF\u6362" aria-hidden="true">#</a> \u70B9\u51FB\u66FF\u6362</h4><h4 id="\u4F7F\u7528js\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528js\u66FF\u6362" aria-hidden="true">#</a> \u4F7F\u7528js\u66FF\u6362</h4><p>\u60A8\u53EF\u4EE5\u4F7F\u7528ctool\u7684<code>re()</code>\u51FD\u6570\u5C06\u9875\u9762\u4E0A\u5DF2\u7ECF\u5B58\u5728\u7684\u5143\u7D20\u66FF\u6362\u4E3A\u53E6\u4E00\u4E2A\u5143\u7D20\u3002<br> \u5DF2\u7ECF\u5B58\u5728\u7684\u5143\u7D20\u5C06\u4F1A\u6D88\u5931\uFF0C\u88AB\u65B0\u7684\u5143\u7D20\u66FF\u6362\u3002<br></p><div class="custom-container tip"><p class="custom-container-title">\u53C2\u6570\u8BF4\u660E</p><p><code>re()</code>\u51FD\u6570\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A</p><ul><li><code>preElement</code> \uFF08\u5FC5\u586B\uFF09\u9700\u8981\u88AB\u66FF\u6362\u7684\u5143\u7D20\uFF0C\u7C7B\u578B\u4E3A<code>HTMLElement</code></li><li><code>newElement</code> \uFF08\u5FC5\u586B\uFF09\u6700\u7EC8\u5448\u73B0\u7684\u65B0\u5143\u7D20\uFF0C\u7C7B\u578B\u4E3A<code>HTMLElement</code><br><em>PS\uFF1A\u6B64\u65B9\u6CD5\u53EF\u4EE5\u5728\u6CA1\u6709\u6839\u5143\u7D20<code>app</code>\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u3002</em><br></li></ul></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.my-div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> preElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.my-div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newElement <span class="token operator">=</span> ctool<span class="token punctuation">.</span><span class="token function">cr</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">&quot;200px&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token string">&quot;200px&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">&quot;blue&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
ctool<span class="token punctuation">.</span><span class="token function">re</span><span class="token punctuation">(</span>preElement<span class="token punctuation">,</span>newElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u4EA4\u6362\u5143\u7D20-ex" tabindex="-1"><a class="header-anchor" href="#_4-\u4EA4\u6362\u5143\u7D20-ex" aria-hidden="true">#</a> 4.\u4EA4\u6362\u5143\u7D20(ex)</h3><p>\u4F7F\u4E24\u4E2A\u5143\u7D20\u4E92\u76F8\u4EA4\u6362\u4F4D\u7F6E\u3002</p><h4 id="\u70B9\u51FB\u4EA4\u6362" tabindex="-1"><a class="header-anchor" href="#\u70B9\u51FB\u4EA4\u6362" aria-hidden="true">#</a> \u70B9\u51FB\u4EA4\u6362</h4><h4 id="js\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#js\u4F7F\u7528" aria-hidden="true">#</a> js\u4F7F\u7528</h4><p>\u60A8\u53EA\u9700\u8981\u4F20\u5165\u4E24\u4E2A\u9700\u8981\u4EA4\u6362\u4F4D\u7F6E\u7684HTML\u5143\u7D20\u5373\u53EF\u8FDB\u884C\u4EA4\u6362\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u53C2\u6570\u8BF4\u660E</p><p><code>ex()</code>\u51FD\u6570\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF1A</p><ul><li><code>el1</code> \uFF08\u5FC5\u586B\uFF09\u9700\u8981\u4EA4\u6362\u4F4D\u7F6E\u7684\u5143\u7D201\uFF0C\u7C7B\u578B\u4E3A<code>HTMLElement</code></li><li><code>el2</code> \uFF08\u5FC5\u586B\uFF09\u9700\u8981\u4EA4\u6362\u4F4D\u7F6E\u7684\u5143\u7D202\uFF0C\u7C7B\u578B\u4E3A<code>HTMLElement</code><br><em>PS\uFF1A\u6B64\u65B9\u6CD5\u53EF\u4EE5\u5728\u6CA1\u6709\u6839\u5143\u7D20<code>app</code>\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u3002</em><br></li></ul></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-div<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> el1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;.my-div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> el2 <span class="token operator">=</span> ctool<span class="token punctuation">.</span><span class="token function">cr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctool<span class="token punctuation">.</span><span class="token function">ex</span><span class="token punctuation">(</span>el1<span class="token punctuation">,</span>el2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function q(E,w){const a=i("RouterLink");return c(),l("div",null,[r,s("p",null,[d,t(a,{to:"/project/getting-start.html#_2-%E5%88%9D%E5%A7%8B%E5%8C%96ctool"},{default:e(()=>[k]),_:1}),v]),h,s("ul",null,[s("li",null,[t(a,{to:"/project/cyou-js.html#_1-%E8%87%AA%E7%94%B1%E6%8B%96%E6%8B%BD%E5%85%83%E7%B4%A0-ch"},{default:e(()=>[m]),_:1})]),s("li",null,[t(a,{to:"/project/cyou-js.html#_2-%E5%88%9B%E5%BB%BA%E5%85%83%E7%B4%A0-cr"},{default:e(()=>[b]),_:1})]),s("li",null,[t(a,{to:"/project/cyou-js.html#_3-%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0-re"},{default:e(()=>[g]),_:1})]),s("li",null,[t(a,{to:"/project/cyou-js.html#_4-%E4%BA%A4%E6%8D%A2%E5%85%83%E7%B4%A0-ex"},{default:e(()=>[y]),_:1})])]),_,s("p",null,[f,t(a,{to:"/code/cr-code.html"},{default:e(()=>[j]),_:1})]),x])}const A=p(u,[["render",q],["__file","cyou-js.html.vue"]]);export{A as default};
