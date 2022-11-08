import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.abd3a73b.js";const p={},e=t(`<h1 id="defineprops" tabindex="-1"><a class="header-anchor" href="#defineprops" aria-hidden="true">#</a> defineProps</h1><p>\u5728<code>&lt;script setup lang=&quot;ts&quot;&gt;&lt;/script&gt;</code>\u4E2D\u63A5\u6536\u7236\u7EC4\u4EF6\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E\u9700\u8981\u4F7F\u7528<code>defineProps</code></p><h2 id="\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> \u4F20\u9012\u53C2\u6570</h2><p>\u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6(my-info)\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;salary&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{props.info.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{props.info.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{props.info.sex}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{props.salary}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728<code>App.vue</code>\u4E2D\u4F7F\u7528\u8BE5\u7EC4\u4EF6\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> my<span class="token operator">-</span>info <span class="token keyword">from</span> <span class="token string">&quot;./my-info.vue&quot;</span>
  <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;clean&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&quot;\u7537&quot;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-info</span> <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">salary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30k<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-info</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!--&lt;my-info :name=&quot;&#39;clean&#39;&quot; age=&quot;18&quot; sex=&quot;\u7537&quot;&gt;&lt;/my-info&gt;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u56FE\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927220117849.png" alt="image-20220927220117849"></p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4F20\u9012props\u7684\u65B9\u5F0F\u4E0D\u4E00\u5B9A\u9700\u8981\u548C\u4F8B\u5B50\u4E2D\u7684\u76F8\u540C</p><p><code>:name</code>\u662F\u52A8\u6001\u4F20\u503C\u7684\u65B9\u5F0F\uFF0C\u6B64\u5904\u4E3A\u4E86\u663E\u793A\u6709\u8FD9\u6837\u7684\u60C5\u51B5\uFF0C\u5982\u4E0D\u9700\u8981\u52A8\u6001\u4F20\u503C\uFF0C\u53EA\u9700\u8981\u4F7F\u7528<code>name=&quot;clean&quot;</code>\u5373\u53EF</p></div><h2 id="\u7C7B\u578B\u68C0\u9A8C" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u68C0\u9A8C" aria-hidden="true">#</a> \u7C7B\u578B\u68C0\u9A8C</h2><p>\u5BF9\u4E8E\u4EE5\u5BF9\u8C61\u5F62\u5F0F\u58F0\u660E\u4E2D\u7684\u6BCF\u4E2A\u5C5E\u6027\uFF0Ckey \u662F prop \u7684\u540D\u79F0\uFF0C\u800C\u503C\u5219\u662F\u8BE5 prop \u9884\u671F\u7C7B\u578B\u7684\u6784\u9020\u51FD\u6570\u3002\u6BD4\u5982\uFF0C\u5982\u679C\u8981\u6C42\u4E00\u4E2A prop \u7684\u503C\u662F <code>number</code> \u7C7B\u578B\uFF0C\u5219\u53EF\u4F7F\u7528 <code>Number</code> \u6784\u9020\u51FD\u6570\u4F5C\u4E3A\u5176\u58F0\u660E\u7684\u503C\u3002</p><p>\u6CA1\u6709\u4F20\u5165<code>info\u65F6</code>\u7684\u7ED3\u679C\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927221040749.png" alt="image-20220927221040749"></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// const props = defineProps([&quot;info&quot;,&quot;salary&quot;]);</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5BF9salary\u505A\u7C7B\u578B\u6821\u9A8C\uFF0C\u4E14\u8BE5\u7C7B\u578B\u4E3ANumber\uFF08\u6570\u503C\u7C7B\u578B\uFF09\u3002\u591A\u4E2A\u7C7B\u578B\u4F7F\u7528\u6570\u7EC4\u8868\u793A\uFF0C\u5982\uFF1A[Number,String]</span>
    <span class="token literal-property property">salary</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
    <span class="token comment">// \u5BF9\u8C61\u6216\u6570\u7EC4\u7684\u9ED8\u8BA4\u503C</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>Object<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;scz&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">16</span><span class="token punctuation">,</span>
          <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&quot;boy&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u7ED9\u5BF9\u8C61\u6216\u6570\u7EC4\u8BBE\u7F6E\u9ED8\u8BA4\u503C\u65F6</p><p>\u5FC5\u987B\u4ECE\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570\u8FD4\u56DE\u3002</p><p>\u8BE5\u51FD\u6570\u63A5\u6536\u7EC4\u4EF6\u6240\u63A5\u6536\u5230\u7684\u539F\u59CB prop \u4F5C\u4E3A\u53C2\u6570\u3002</p><p>\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u8FD9\u4E2A\u5BF9\u8C61\u88AB\u4F5C\u4E3Aprops\u4F20\u5165\u7684\u65F6\u5019\uFF0C\u5C31\u4E0D\u4F1A\u8C03\u7528\u8FD9\u4E2A<code>default()</code>\u51FD\u6570</p><p>\u5177\u4F53\u89C1\u4E0B\u9762\u7684\u4F8B\u5B50</p></div><ul><li>\u6CA1\u6709\u4F20\u5165<code>info</code>\u65F6\uFF1A</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>//App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-info</span>  <span class="token attr-name">salary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30k<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-info</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A7\u5236\u53F0\u8F93\u51FA\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927222457007.png" alt="image-20220927222457007"></p><ul><li>\u4F20\u5165<code>info</code>\u65F6\uFF08\u4E0D\u8C03\u7528<code>default</code>\u51FD\u6570\uFF09</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> myInfo <span class="token keyword">from</span> <span class="token string">&#39;./table/my-info.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;clean&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&quot;\u7537&quot;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-info</span>  <span class="token attr-name">salary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30k<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-info</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A7\u5236\u53F0\u65E0\u8F93\u51FA\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927222649356.png" alt="image-20220927222649356"></p><h2 id="\u4F7F\u7528ts\u5B9A\u4E49\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528ts\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a> \u4F7F\u7528TS\u5B9A\u4E49\u7C7B\u578B</h2><p>\u5F15\u5165ts\u540E\uFF0C\u505A\u7C7B\u578B\u6821\u9A8C\u5C31\u6BD4\u8F83\u65B9\u4FBF\u4E86\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    <span class="token literal-property property">salary</span><span class="token operator">:</span>string<span class="token punctuation">,</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token punctuation">,</span>
      <span class="token literal-property property">sex</span><span class="token operator">:</span>string
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5728\u4F7F\u7528ts\u7684\u65B9\u5F0F\u6765\u58F0\u660Eprops\u7C7B\u578B\u7684\u65F6\u5019\uFF0C\u8981\u4E48\u4F7F\u7528\u8FD0\u884C\u65F6\u58F0\u660E\uFF0C\u8981\u4E48\u4F7F\u7528\u7C7B\u578B\u58F0\u660E\u3002\u540C\u65F6\u4F7F\u7528\u4E24\u79CD\u58F0\u660E\u65B9\u5F0F\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u62A5\u9519\u3002</p></div><p>\u8FD9\u79CD\u65B9\u5F0F\u867D\u7136\u6BD4\u8F83\u65B9\u4FBF\uFF0C\u4F46\u662F\u5E76\u4E0D\u80FD\u8BBE\u5B9A\u9ED8\u8BA4\u503C\uFF0C\u9700\u8981\u4F7F\u7528<code>withDefault</code>\u51FD\u6570\u6765\u8BBE\u5B9A\u9ED8\u8BA4\u503C\u3002</p><p>\u6765\u770B\u4E00\u4E0B\u5B98\u7F51\u7ED9\u51FA\u7684\u6848\u4F8B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  msg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  labels<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  msg<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">labels</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6309\u7167\u4E0A\u9762\u7684\u6848\u4F8B\u4FEE\u6539\u4E4B\u524D\u7684\u7C7B\u578B\u68C0\u9A8C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span>
  defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    <span class="token literal-property property">salary</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
      <span class="token literal-property property">sex</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token string">&quot;50k&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">info</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;scz&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&quot;boy&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F20\u5165<code>salary</code>\u548C<code>info</code>\u4E24\u4E2A\u503C\u65F6\u7684\u7ED3\u679C\u5982\u56FE\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927233825270.png" alt="image-20220927233825270"></p><p>\u6CA1\u6709\u4F20\u5165\u65F6\u7684\u7ED3\u679C\uFF1A</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927234225945.png" alt="image-20220927234225945"></p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u7ED9\u5BF9\u8C61\u6216\u8005\u662F\u6570\u7EC4\u8BBE\u5B9A\u9ED8\u8BA4\u503C\u7684\u65F6\u5019\uFF0C\u9700\u8981\u901A\u8FC7\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u5F62\u5F0F\u6765\u8BBE\u5B9A\u3002\uFF08\u5177\u4F53\u539F\u56E0\u6682\u65F6\u4E0D\u8BE6\uFF0C\u540E\u7EED\u77E5\u9053\u4E86\u8865\u4E0A\uFF09</p></div>`,38),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","defineProps.html.vue"]]);export{k as default};
