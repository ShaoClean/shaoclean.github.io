import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.f8d112d9.js";const p={},e=t(`<h1 id="\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u539F\u7406</h1><h2 id="defineproperty-\u5B9E\u73B0\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#defineproperty-\u5B9E\u73B0\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> defineProperty \u5B9E\u73B0\u54CD\u5E94\u5F0F</h2><p>\u5C06\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u4E0D\u65AD\u7684\u9012\u5F52\u8FDB\u884C\u6570\u636E\u52AB\u6301\uFF0C\u5B9E\u73B0\u54CD\u5E94\u5F0F\u3002</p><p>\u90A3\u4E48\u4F1A\u9047\u5230\u8FD9\u4E48\u4E00\u4E2A\u95EE\u9898\uFF0C\u5982\u679C\u5BF9\u8C61\u5C5E\u6027\u591A\u3001\u5D4C\u5957\u5C42\u6B21\u6DF1\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u4E0D\u65AD\u7684\u8FDB\u884C\u9012\u5F52\uFF0C\u76F4\u81F3\u5C06\u6574\u4E2A\u5BF9\u8C61\u4E2D\u7684\u6240\u6709\u5C5E\u6027\u5B8C\u6210\u6570\u636E\u54CD\u5E94\u5F0F\u7684\u521B\u5EFA\u3002</p><p>\u8FD9\u4E2A\u8FC7\u7A0B\u4F1A\u4EA7\u751F\u6027\u80FD\u7684\u95EE\u9898\u3002</p><p>\u800C\u4E14\u76D1\u6D4B\u4E0D\u5230\u5BF9\u6570\u7EC4\u5C5E\u6027\u7684\u64CD\u4F5C\uFF0C\u4E5F\u65E0\u6CD5\u76D1\u6D4B\u5230\u6570\u636E\u88AB\u5220\u9664\u65F6\u5019\u7684\u60C5\u51B5\uFF0C\u800C\u662F Vue \u5C06\u8FD9\u4E9B\u65B9\u6CD5\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u4ECE\u800C\u5B9E\u73B0\u76D1\u6D4B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1.\u5B9A\u4E49\u4E00\u4E2A\u57FA\u672C\u7684\u54CD\u5E94\u5F0F\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">defineReactive</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 5.\u5982\u679C\u5B58\u5728\u591A\u5C42\u7684\u5D4C\u5957\uFF0C\u9700\u8981\u9012\u5F52</span>
  <span class="token function">observe</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot; is read&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 6.\u5982\u679C\u5B58\u5728\u591A\u5C42\u7684\u5D4C\u5957\uFF0C\u9700\u8981\u9012\u5F52</span>
      <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot; is set as &quot;</span> <span class="token operator">+</span> newVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 2.\u6D4B\u8BD5defineReactive\u65B9\u6CD5</span>
<span class="token comment">// const obj = {}</span>
<span class="token comment">// const reactiveObj = defineReactive(obj,&#39;a&#39;,1)</span>
<span class="token comment">// obj.a = 2</span>

<span class="token comment">// 3.\u5BF9\u8C61\u5B58\u5728\u591A\u4E2Akey\u65F6,\u81EA\u52A8\u8D4B\u503C</span>
<span class="token keyword">function</span> <span class="token function">observe</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">||</span> obj <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">defineReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 4.\u6D4B\u8BD5observe\u65B9\u6CD5</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cObj</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">c1</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c2</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">observe</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>cObj<span class="token punctuation">.</span>c1<span class="token punctuation">;</span>
obj<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u5199\u6570\u7EC4\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// \u6570\u7EC4\u91CD\u5199</span>
<span class="token keyword">const</span> originalProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype
<span class="token keyword">const</span> arrayProto <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>originalProto<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;reverse&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sort&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">method</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    originalProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arguments<span class="token punctuation">)</span>
    dep<span class="token punctuation">.</span><span class="token function">notice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// set\u3001delete</span>
Vue<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;newbar&#39;</span><span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy-\u5B9E\u73B0\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#proxy-\u5B9E\u73B0\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> Proxy \u5B9E\u73B0\u54CD\u5E94\u5F0F</h2><p>Proxy \u53EF\u4EE5\u5B9E\u73B0\u5BF9\u6570\u7EC4\u539F\u58F0\u64CD\u4F5C\u65B9\u6CD5\u5BF9\u76D1\u542C\uFF0C\u4E0D\u7528\u5728\u91CD\u5199\u65B9\u6CD5\u3002\u800C\u4E14 Proxy \u6709\u591A\u8FBE 13 \u79CD\u62E6\u622A\u65B9\u6CD5,\u4E0D\u9650\u4E8E apply\u3001ownKeys\u3001deleteProperty\u3001has \u7B49\u7B49\uFF0C\u8FD9\u662F Object.defineProperty \u4E0D\u5177\u5907\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// Proxy\u76F8\u5F53\u4E8E\u5728\u5BF9\u8C61\u5916\u5C42\u52A0\u62E6\u622A</span>
  <span class="token keyword">const</span> observed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// reflect\u4FDD\u8BC1this\u6307\u5411</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u83B7\u53D6</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//  \u5904\u7406\u5D4C\u5957\u60C5\u51B5\uFF0C\u8EAB\u7565isObject\u5177\u4F53\u5B9E\u73B0\uFF0C\u8BE5\u51FD\u6570\u7528\u4E8E\u5224\u65AD\u662F\u5426\u4E3A\u4E00\u4E2A\u5BF9\u8C61</span>
      <span class="token keyword">return</span> <span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> res
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u8BBE\u7F6E</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5220\u9664</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>res<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> observed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> proxtObj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ok</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5173\u4E8Ereflect" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Ereflect" aria-hidden="true">#</a> \u5173\u4E8E<code>Reflect</code></h2><p>\u8FD9\u662F\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u5728\u83B7\u53D6\u5BF9\u8C61\u5C5E\u6027\u7684\u65F6\u5019\u6307\u5B9A this \u6307\u5411</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> People <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&quot;people&quot;</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Man <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">_name</span><span class="token operator">:</span> <span class="token string">&quot;man&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Man<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> People<span class="token punctuation">;</span>

<span class="token comment">// Reflect\u4E2D\u6CA1\u6709\u6307\u5B9Areceive\u65F6\uFF0C\u6309\u7167\u9884\u671F\u6B63\u5E38\u663E\u793A</span>
<span class="token comment">// Reflect.get(target, key)</span>
<span class="token keyword">let</span> m1 <span class="token operator">=</span> Man<span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
m1<span class="token punctuation">;</span> <span class="token comment">//man</span>
<span class="token keyword">let</span> m2 <span class="token operator">=</span> Man<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
m2<span class="token punctuation">;</span> <span class="token comment">//people</span>

<span class="token comment">// Reflect\u4E2D\u6307\u5B9Areceive\u65F6\uFF0C\u4E0D\u7B26\u5408\u9884\u671F</span>
<span class="token comment">// Reflect.get(target, key\uFF0Creceive)</span>
<span class="token keyword">let</span> m1 <span class="token operator">=</span> Man<span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
m1<span class="token punctuation">;</span> <span class="token comment">//man</span>
<span class="token keyword">let</span> m2 <span class="token operator">=</span> Man<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
m2<span class="token punctuation">;</span> <span class="token comment">//man</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53D1\u73B0\uFF0C\u5728<code>Reflect</code>\u4E2D\u6307\u5B9A\u4E86<code>receive</code>\u540E,<code>m2</code>\u7684\u503C\u8D85\u4E4E\u4E86\u9884\u671F\uFF0C\u4E3A\u4EC0\u4E48\u4F1A\u53D8\u6210\u4E86<code>man</code>\u5462\uFF1F</p><p>\u662F\u56E0\u4E3A\u4F20\u5165\u4E86<code>receive</code>\u53C2\u6570\uFF0C\u5B83\u80FD\u591F\u6307\u5B9A\u5F53\u524D\u53CD\u5C04\u5BF9\u8C61\u7684 this \u6307\u5411\uFF0C\u5C06 this \u6307\u5411\u5F53\u524D\u7684<code>target</code>\u3002</p><p>\u56E0\u6B64\u5728<code>Man</code>\u4E0A\u8BFB\u53D6<code>name</code>\u7684\u65F6\u5019\uFF0C\u5F53\u524D\u7684<code>target</code>\u5C31\u662F<code>Man</code>\uFF0Cthis \u7684\u6307\u5411\u5C31\u662F<code>Man</code>\uFF0C\u6240\u4EE5\u8BFB\u5230\u7684\u503C\u5C31\u662F<code>man</code></p>`,18),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","reactive.html.vue"]]);export{r as default};