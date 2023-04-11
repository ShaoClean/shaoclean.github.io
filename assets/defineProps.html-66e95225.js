import{$ as n,a0 as s,a1 as a,a4 as t}from"./framework-888972eb.js";const p={},e=t(`<h1 id="defineprops" tabindex="-1"><a class="header-anchor" href="#defineprops" aria-hidden="true">#</a> defineProps</h1><p>在<code>&lt;script setup lang=&quot;ts&quot;&gt;&lt;/script&gt;</code>中接收父组件传递过来的数据需要使用<code>defineProps</code></p><h2 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h2><p>定义一个组件(my-info)：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;salary&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{props.info.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{props.info.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{props.info.sex}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{props.salary}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>App.vue</code>中使用该组件：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> my<span class="token operator">-</span>info <span class="token keyword">from</span> <span class="token string">&quot;./my-info.vue&quot;</span>
  <span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;clean&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&quot;男&quot;</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-info</span> <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">salary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30k<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-info</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!--&lt;my-info :name=&quot;&#39;clean&#39;&quot; age=&quot;18&quot; sex=&quot;男&quot;&gt;&lt;/my-info&gt;--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如图：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927220117849.png" alt="image-20220927220117849"></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>传递props的方式不一定需要和例子中的相同</p><p><code>:name</code>是动态传值的方式，此处为了显示有这样的情况，如不需要动态传值，只需要使用<code>name=&quot;clean&quot;</code>即可</p></div><h2 id="类型检验" tabindex="-1"><a class="header-anchor" href="#类型检验" aria-hidden="true">#</a> 类型检验</h2><p>对于以对象形式声明中的每个属性，key 是 prop 的名称，而值则是该 prop 预期类型的构造函数。比如，如果要求一个 prop 的值是 <code>number</code> 类型，则可使用 <code>Number</code> 构造函数作为其声明的值。</p><p>没有传入<code>info时</code>的结果：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927221040749.png" alt="image-20220927221040749"></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// const props = defineProps([&quot;info&quot;,&quot;salary&quot;]);</span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//对salary做类型校验，且该类型为Number（数值类型）。多个类型使用数组表示，如：[Number,String]</span>
    <span class="token literal-property property">salary</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
    <span class="token comment">// 对象或数组的默认值</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>给对象或数组设置默认值时</p><p>必须从一个工厂函数返回。</p><p>该函数接收组件所接收到的原始 prop 作为参数。</p><p>但是需要注意的是，当这个对象被作为props传入的时候，就不会调用这个<code>default()</code>函数</p><p>具体见下面的例子</p></div><ul><li>没有传入<code>info</code>时：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>//App.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-info</span>  <span class="token attr-name">salary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30k<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-info</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927222457007.png" alt="image-20220927222457007"></p><ul><li>传入<code>info</code>时（不调用<code>default</code>函数）</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> myInfo <span class="token keyword">from</span> <span class="token string">&#39;./table/my-info.vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;clean&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span><span class="token string">&quot;男&quot;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-info</span>  <span class="token attr-name">salary</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30k<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-info</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台无输出：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927222649356.png" alt="image-20220927222649356"></p><h2 id="使用ts定义类型" tabindex="-1"><a class="header-anchor" href="#使用ts定义类型" aria-hidden="true">#</a> 使用TS定义类型</h2><p>引入ts后，做类型校验就比较方便了：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
    <span class="token literal-property property">salary</span><span class="token operator">:</span>string<span class="token punctuation">,</span>
    <span class="token literal-property property">info</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span>string<span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span>number<span class="token punctuation">,</span>
      <span class="token literal-property property">sex</span><span class="token operator">:</span>string
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在使用ts的方式来声明props类型的时候，要么使用运行时声明，要么使用类型声明。同时使用两种声明方式会导致编译报错。</p></div><p>这种方式虽然比较方便，但是并不能设定默认值，需要使用<code>withDefault</code>函数来设定默认值。</p><p>来看一下官网给出的案例：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
  msg<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  labels<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  msg<span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
  <span class="token function-variable function">labels</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照上面的案例修改之前的类型检验</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>传入<code>salary</code>和<code>info</code>两个值时的结果如图：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927233825270.png" alt="image-20220927233825270"></p><p>没有传入时的结果：</p><p><img src="https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/7374/image-20220927234225945.png" alt="image-20220927234225945"></p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>需要注意的是，如果给对象或者是数组设定默认值的时候，需要通过函数返回值的形式来设定。（具体原因暂时不详，后续知道了补上）</p></div>`,38),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","defineProps.html.vue"]]);export{r as default};