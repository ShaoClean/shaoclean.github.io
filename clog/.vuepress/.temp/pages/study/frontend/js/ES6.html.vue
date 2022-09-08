<template><div><h1 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h1>
<h2 id="_1-static类" tabindex="-1"><a class="header-anchor" href="#_1-static类" aria-hidden="true">#</a> 1.static类</h2>
<p>static用于类（class）中声明静态方法。</p>
<p>不能在类的实例中调用类中的静态方法，而应该通过类本身调用。</p>
<p>这些通常是实用程序方法，例如创建或克隆对象的功能。</p>
<p>静态方法调用同一个类中的其他静态方法，可使用this关键字。如下</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">StaticMethodCall</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'Static method has been called'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">anotherStaticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">' from another static method'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
StaticMethodCall<span class="token punctuation">.</span><span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 'Static method has been called'</span>
 
StaticMethodCall<span class="token punctuation">.</span><span class="token function">anotherStaticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 'Static method has been called from another static method'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类中的非静态方法不可以直接使用this关键字访问或调用静态方法，而需要用类名来调用。</p>
<p>或者用构造函数的属性来调用，如下。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">StaticMethodCall</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>StaticMethodCall<span class="token punctuation">.</span><span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 'static method has been called.'</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>constructor<span class="token punctuation">.</span><span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 'static method has been called.'</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">'static method has been called.'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-for-of-和-for-in" tabindex="-1"><a class="header-anchor" href="#_2-for-of-和-for-in" aria-hidden="true">#</a> 2.for...of  和 for...in</h2>
<p>for of遍历的是值，for in遍历的是索引</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token string">'v'</span><span class="token punctuation">,</span><span class="token string">'c'</span><span class="token punctuation">,</span><span class="token string">'e'</span><span class="token punctuation">]</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">in</span> person<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//0 1  2  3</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token keyword">of</span> person<span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//a v  c  e</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-变量名" tabindex="-1"><a class="header-anchor" href="#_3-变量名" aria-hidden="true">#</a> 3.[变量名]</h2>
<p>可以将变量对应的值作为对象中的属性名</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'clean'</span>
<span class="token keyword">let</span> b <span class="token operator">=</span><span class="token punctuation">{</span>
	<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token operator">:</span><span class="token string">'shaochenzhe'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//clean: "shaochenzhe"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-symbol" tabindex="-1"><a class="header-anchor" href="#_4-symbol" aria-hidden="true">#</a> 4.Symbol</h2>
<p>Symbol是ES6新增的基本数据类型，本质上是一种唯一标识符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> identity <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">student</span><span class="token operator">:</span><span class="token string">'student'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boss</span><span class="token operator">:</span><span class="token string">'boss'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mother</span><span class="token operator">:</span><span class="token string">'mother'</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createRole</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> identity<span class="token punctuation">.</span>boss<span class="token punctuation">)</span><span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i am boss'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> identity<span class="token punctuation">.</span>student<span class="token punctuation">)</span><span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i am student'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> identity<span class="token punctuation">.</span>mother<span class="token punctuation">)</span><span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i am mother'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  	<span class="token keyword">return</span> <span class="token string">'defeat'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">createRole</span><span class="token punctuation">(</span>identity<span class="token punctuation">.</span>student<span class="token punctuation">)</span><span class="token comment">//i am student</span>
<span class="token function">createRole</span><span class="token punctuation">(</span><span class="token string">'student'</span><span class="token punctuation">)</span><span class="token comment">//i am student</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现，在调用createRole方法时传入的参数不论是student或者是identity.student都能实现同样的效果</p>
<p>所以是不太安全的。</p>
<p>因此可以使用Symbol作为唯一标识符</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> identity <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">student</span><span class="token operator">:</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">boss</span><span class="token operator">:</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mother</span><span class="token operator">:</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createRole</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> identity<span class="token punctuation">.</span>boss<span class="token punctuation">)</span><span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i am boss'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> identity<span class="token punctuation">.</span>student<span class="token punctuation">)</span><span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i am student'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> identity<span class="token punctuation">.</span>mother<span class="token punctuation">)</span><span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i am mother'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  	<span class="token keyword">return</span> <span class="token string">'defeat'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">createRole</span><span class="token punctuation">(</span>identity<span class="token punctuation">.</span>student<span class="token punctuation">)</span><span class="token comment">//i am student</span>
<span class="token function">createRole</span><span class="token punctuation">(</span><span class="token string">'student'</span><span class="token punctuation">)</span><span class="token comment">//defeat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Symbol 数据类型的另一特点是隐藏性，for···in，object.keys() 不能访问</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token operator">:</span><span class="token string">'symbol'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> option <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>option<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//空</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是也有能够访问的方法：<strong>Object.getOwnPropertySymbols()</strong></p>
<p><code v-pre>Object.getOwnPropertySymbols()</code>方法会返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token operator">:</span><span class="token string">'symbol'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> array <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[Symbol(id)]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//'symbol'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然这样保证了Symbol的唯一性，但我们不排除希望能够多次使用同一个symbol值的情况。
为此，官方提供了全局注册并登记的方法：Symbol.for()</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name1 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//检测到未创建后新建</span>
<span class="token keyword">let</span> name2 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//检测到已创建后返回</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name1 <span class="token operator">===</span> name2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这种方法就可以通过参数值获取到全局的symbol对象了，反之，能不能通过symbol对象获取到参数值呢？
是可以的 ，通过Symbol.keyFor()</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name1 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> name2 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>name1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 'name'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Symbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>name2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'name'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：在创建symbol类型数据 时的参数只是作为标识（注释）使用，所以 Symbol() 也是可以的。</p>
<h2 id="_5-iterator迭代器" tabindex="-1"><a class="header-anchor" href="#_5-iterator迭代器" aria-hidden="true">#</a> 5.iterator迭代器</h2>
<p>遍历器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> group <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'tingting'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">people</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'clean'</span><span class="token punctuation">,</span><span class="token string">'shao'</span><span class="token punctuation">,</span><span class="token string">'chen'</span><span class="token punctuation">,</span><span class="token string">'zhe'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//索引变量</span>
        <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token comment">//保存this指向</span>
        <span class="token keyword">let</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">next</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> _this<span class="token punctuation">.</span>people<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token keyword">const</span> result <span class="token operator">=</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span>_this<span class="token punctuation">.</span>people<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">done</span><span class="token operator">:</span><span class="token boolean">false</span>
                    <span class="token punctuation">}</span>
                    index<span class="token operator">++</span>
                    <span class="token keyword">return</span> result
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                    <span class="token keyword">return</span><span class="token punctuation">{</span>
                        <span class="token literal-property property">value</span><span class="token operator">:</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">done</span><span class="token operator">:</span><span class="token boolean">true</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> group<span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//输出 clean shao chen  zhe</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-xmlhttprequest和ajax" tabindex="-1"><a class="header-anchor" href="#_6-xmlhttprequest和ajax" aria-hidden="true">#</a> 6.XMLHttpRequest和Ajax</h2>
<p>XMLHTTPRequest对象，顾名思义：是基于XML的HTTP请求。<a href="https://link.zhihu.com/?target=http%3A//en.wikipedia.org/wiki/XMLHttpRequest" target="_blank" rel="noopener noreferrer">XMLHttpRequest<ExternalLinkIcon/></a>是一个浏览器接口，使得Javascript可以进行HTTP(S)通信。自从浏览器提供有了XMLHTTPRequest这个接口之后，ajax操作就此诞生。</p>
<p>AJAX = Asynchronous JavaScript and XML，翻译为：异步的 JavaScript 和 XML。ajax就是基于浏览器提供的XMLHttpRequest对象来实现的。</p>
<p>新版本的XMLHttpRequest对象，针对老版本的缺点，做出了大幅改进。</p>
<blockquote>
<ul>
<li>可以<strong>设置HTTP请求的时限</strong>。</li>
<li>可以<strong>使用FormData对象管理表单数据</strong>。</li>
<li>可以<strong>上传文件</strong>。</li>
<li>可以<strong>请求不同域名下的数据（跨域请求）</strong>，CORS。</li>
<li>可以<strong>获取服务器端的二进制数据</strong>。</li>
<li>可以<strong>获得数据传输的进度信息</strong>。</li>
</ul>
</blockquote>
<h5 id="_1http请求的时限" tabindex="-1"><a class="header-anchor" href="#_1http请求的时限" aria-hidden="true">#</a> ①HTTP请求的时限</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">3000</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'请求超时！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的语句，将最长等待时间设为3000毫秒。过了这个时限，就自动停止HTTP请求。与之配套的还有一个timeout事件，用来指定回调函数。</p>
<h5 id="_2formdata对象" tabindex="-1"><a class="header-anchor" href="#_2formdata对象" aria-hidden="true">#</a> ②FormData对象</h5>
<p>ajax操作往往用来传递表单数据。为了方便表单处理，HTML 5新增了一个FormData对象，可以<strong>模拟表单</strong>。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//首先，新建一个FormData对象。</span>
<span class="token keyword">var</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//然后，为它添加表单项。</span>
formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'username'</span><span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//最后，直接传送这个FormData对象。这与提交网页表单的效果，完全一样。</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FormData对象也可以<strong>用来获取网页表单的值</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'myform'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span>form<span class="token punctuation">)</span><span class="token punctuation">;</span>

formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'secret'</span><span class="token punctuation">,</span> <span class="token string">'123456'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 添加一个表单项</span>

xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'POST'</span><span class="token punctuation">,</span> form<span class="token punctuation">.</span>action<span class="token punctuation">)</span><span class="token punctuation">;</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3上传文件" tabindex="-1"><a class="header-anchor" href="#_3上传文件" aria-hidden="true">#</a> ③上传文件</h5>
<p>新版XMLHttpRequest对象，不仅可以发送文本信息，还可以<strong>上传文件</strong>。</p>
<p>假定files是一个&quot;选择文件&quot;的表单元素（input[type=&quot;file&quot;]），我们将它装入FormData对象。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> files<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'files[]'</span><span class="token punctuation">,</span> files<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>formData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4跨域资源共享-cors" tabindex="-1"><a class="header-anchor" href="#_4跨域资源共享-cors" aria-hidden="true">#</a> ④跨域资源共享（CORS）</h5>
<p>新版本的XMLHttpRequest对象，可以向不同域名的服务器发出HTTP请求。这叫做<a href="https://link.zhihu.com/?target=http%3A//en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing" target="_blank" rel="noopener noreferrer">&quot;跨域资源共享&quot;<ExternalLinkIcon/></a>（Cross-origin resource sharing，简称CORS）。</p>
<p>使用&quot;跨域资源共享&quot;的前提，是浏览器必须支持这个功能，而且服务器端必须同意这种&quot;跨域&quot;。如果能够满足上面的条件，则代码的写法与不跨域的请求完全一样。</p>
<h2 id="_7-promise" tabindex="-1"><a class="header-anchor" href="#_7-promise" aria-hidden="true">#</a> 7.Promise</h2>
<p>Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，用来封装异步操作 并可以获取其成功或失败的结果；有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise 对象提供统一的接口，使得控制异步操作更加容易。</p>
<p>Promise 也有一些缺点。首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</p>
<p>Promise有三种状态：初始化、成功、失败</p>
<h5 id="_1基本使用" tabindex="-1"><a class="header-anchor" href="#_1基本使用" aria-hidden="true">#</a> ①基本使用</h5>
<p>首先先实例化对象，Promise类中接受一个函数类型的参数，这个函数有两个参数，一个是成功的参数，另一个是失败的参数。</p>
<p>当调用成功的参数（第一个参数，这里是resolve），那么改变Promise对象的状态为成功</p>
<p>当调用失败的参数（第二个参数，这里是reject），那么改变Promise对象的状态为失败。</p>
<p>实例化对象调用<code v-pre>then</code>方法来获取Promise对象成功或失败的结果，then方法有两个函数类型的参数，第一个参数调用Promise成功时的状态，第二个参数调用Promise失败时的状态。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">'clean'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">'clean2'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
      <span class="token comment">// resolve(data)</span>
      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'出错了'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
        
a<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token parameter">res</span> <span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token parameter">error</span> <span class="token operator">=></span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2promise封装-读取文件案例" tabindex="-1"><a class="header-anchor" href="#_2promise封装-读取文件案例" aria-hidden="true">#</a> ②Promise封装（读取文件案例）</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1、引入 fs 模块</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2、调用方法，读取文件</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">"resources/text.txt"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// 如果失败则抛出错误</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token comment">// 如果没有出错，则输出内容</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3、使用Promise封装</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">"resources/text.txt"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token comment">// 判断如果失败</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 如果成功</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取失败</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3封装ajax请求" tabindex="-1"><a class="header-anchor" href="#_3封装ajax请求" aria-hidden="true">#</a> ③封装Ajax请求</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 请求地址：https://api.apiopen.top/getJoke</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 原生请求</span>
    <span class="token comment">// 1、创建对象</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2、初始化</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span><span class="token string">"https://api.apiopen.top/getJoke"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3、发送</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 4、绑定事件，处理响应结果</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 判断状态</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 判断响应状态码 200-299</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token operator">>=</span><span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status<span class="token operator">&lt;=</span><span class="token number">299</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 成功</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token comment">// 失败</span>
                <span class="token function">reason</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 读取失败</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4promise-prototype-then" tabindex="-1"><a class="header-anchor" href="#_4promise-prototype-then" aria-hidden="true">#</a> ④Promise.prototype.then</h5>
<p>调用then方法，<code v-pre>.then()</code>后面可以继续加<code v-pre>.then()</code>,then方法的返回结果可以是promise对象，如果返回了 promise对象，那么就可以继续加<code v-pre>.then()</code>。对象的状态由回调函数的结果决定;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> d  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">"data1.md"</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

d<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter">resove<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'data2.md'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            result <span class="token operator">=</span> value<span class="token operator">+</span><span class="token string">'\r\n'</span><span class="token operator">+</span>res<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">resove</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'data3.md'</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          result <span class="token operator">=</span> data<span class="token operator">+</span><span class="token string">'\r\n'</span><span class="token operator">+</span>res<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_5catch方法" tabindex="-1"><a class="header-anchor" href="#_5catch方法" aria-hidden="true">#</a> ⑤catch方法：</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Promise对象catch方法</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token comment">// 设置p对象的状态为失败，并设置失败的值</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"失败啦~！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// p.then(value=>{</span>
<span class="token comment">// console.log(value);</span>
<span class="token comment">// },reason=>{</span>
<span class="token comment">// console.warn(reason);</span>
<span class="token comment">// });</span>
p<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-生成器函数" tabindex="-1"><a class="header-anchor" href="#_8-生成器函数" aria-hidden="true">#</a> 8.生成器函数</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 模拟获取: 用户数据 订单数据 商品数据</span>
<span class="token keyword">function</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">"用户数据"</span><span class="token punctuation">;</span>
        <span class="token comment">// 第二次调用next，传入参数，作为第一个的返回值</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里将data传入</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getOrders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">"订单数据"</span><span class="token punctuation">;</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里将data传入</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">getGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">"商品数据"</span><span class="token punctuation">;</span>
        iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这里将data传入</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> users <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> orders <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getOrders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>orders<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> goods <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">getGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这种操作有点秀啊！</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> iterator <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-set集合" tabindex="-1"><a class="header-anchor" href="#_9-set集合" aria-hidden="true">#</a> 9.Set集合</h2>
<p>它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进行遍历，集合的属性和方法：</p>
<ol>
<li>size 返回集合的元素个数；</li>
<li>add 增加一个新元素，返回当前集合；</li>
<li>delete 删除元素，返回 boolean 值；</li>
<li>has 检测集合中是否包含某个元素，返回 boolean 值；</li>
<li>clear 清空集合，返回 undefined；</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'data1'</span><span class="token punctuation">,</span><span class="token string">'data2'</span><span class="token punctuation">,</span><span class="token string">'data3'</span><span class="token punctuation">,</span><span class="token string">'data4'</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>

s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'data5'</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'data5'</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'data5'</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">'data5'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

s<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实践</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span>

<span class="token comment">// 去重</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 交集</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span>  <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 并集</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">]</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>     

<span class="token comment">// 差集(差集就是交集的逆运算)</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span>  <span class="token operator">!</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-map集合" tabindex="-1"><a class="header-anchor" href="#_10-map集合" aria-hidden="true">#</a> 10.Map集合</h2>
<p>ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类 型的值（包括对象）都可以当作键。Map 也实现了iterator 接口，所以可以使用『扩展运算符』和 『for…of…』进行遍历；</p>
<p>Map 的属性和方法：</p>
<ol>
<li>size 返回 Map 的元素个数；</li>
<li>set 增加一个新元素，返回当前 Map；</li>
<li>get 返回键名对象的键值；</li>
<li>has 检测 Map 中是否包含某个元素，返回 boolean 值；</li>
<li>clear 清空集合，返回 undefined；</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Map集合</span>
<span class="token comment">// 创建一个空 map</span>
<span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建一个非空 map</span>
<span class="token keyword">let</span> m2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span><span class="token string">'邵晨哲'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">'slogon'</span><span class="token punctuation">,</span><span class="token string">'不断提高行业标准'</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1. size 返回 Map 的元素个数；</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m2<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. set 增加一个新元素，返回当前 Map；</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"皇帝"</span><span class="token punctuation">,</span><span class="token string">"大哥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"丞相"</span><span class="token punctuation">,</span><span class="token string">"二哥"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. get 返回键名对象的键值；</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"皇帝"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. has 检测 Map 中是否包含某个元素，返回 boolean 值；</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string">"皇帝"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5. clear 清空集合，返回 undefined；</span>
m<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-class类" tabindex="-1"><a class="header-anchor" href="#_11-class类" aria-hidden="true">#</a> 11.Class类</h2>
<p>概述： ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过 class 关键 字，可以定义类。基本上，ES6 的 class 可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做 到，新的 class 写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已；</p>
<h5 id="_1class-声明类" tabindex="-1"><a class="header-anchor" href="#_1class-声明类" aria-hidden="true">#</a> ①class 声明类</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">{</span>
	<span class="token comment">// 构造方法，名字是固定的</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span>price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token comment">// 打电话，方法必须使用该方式写</span>
    <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以打电话！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> HuaWei <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token string">"华为"</span><span class="token punctuation">,</span><span class="token number">5999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">HuaWei</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>HuaWei<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2静态成员static" tabindex="-1"><a class="header-anchor" href="#_2静态成员static" aria-hidden="true">#</a> ②静态成员static</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// class静态成员</span>
<span class="token comment">// ES5写法</span>
<span class="token keyword">function</span> <span class="token function">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
Phone<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"手机"</span><span class="token punctuation">;</span>
Phone<span class="token punctuation">.</span><span class="token function-variable function">change</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以改变世界！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> nokia <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nokia<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// undefined</span>
nokia<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 报错：Uncaught TypeError: nokia.change is not a function</span>

<span class="token class-name">Phone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>color <span class="token operator">=</span> <span class="token string">"黑色"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nokia<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 黑色</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Phone<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
Phone<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 注意：实例对象和函数对象的属性是不相通的</span>

<span class="token comment">// ES6写法</span>
<span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">{</span>
    <span class="token comment">// 静态属性</span>
    <span class="token keyword">static</span> name <span class="token operator">=</span> <span class="token string">"手机"</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以改变世界！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> nokia <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nokia<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Phone<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
Phone<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3类的继承" tabindex="-1"><a class="header-anchor" href="#_3类的继承" aria-hidden="true">#</a> ③类的继承</h5>
<p>ES5实现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ES5构造函数继承</span>
<span class="token comment">// 手机</span>
<span class="token keyword">function</span> <span class="token function">Phone</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span>price</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Phone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">call</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以打电话！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 智能手机</span>
<span class="token keyword">function</span> <span class="token function">SmartPhone</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span>price<span class="token punctuation">,</span>color<span class="token punctuation">,</span>size</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">Phone</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>brand<span class="token punctuation">,</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 设置子级构造函数的原型</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">;</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> SmartPhone<span class="token punctuation">;</span>
<span class="token comment">// 声明子类的方法</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">photo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以拍照！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">SmartPhone</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">game</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以玩游戏！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> chuizi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmartPhone</span><span class="token punctuation">(</span><span class="token string">"锤子"</span><span class="token punctuation">,</span><span class="token number">2499</span><span class="token punctuation">,</span><span class="token string">"黑色"</span><span class="token punctuation">,</span><span class="token string">"5.5inch"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chuizi<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">chuizi</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chuizi<span class="token punctuation">.</span><span class="token function">photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chuizi<span class="token punctuation">.</span><span class="token function">game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6实现：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">{</span>
<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span>price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>brand <span class="token operator">=</span> brand<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以打电话！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">SmartPhone</span> <span class="token keyword">extends</span> <span class="token class-name">Phone</span><span class="token punctuation">{</span>
    <span class="token comment">// 构造函数</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">brand<span class="token punctuation">,</span>price<span class="token punctuation">,</span>color<span class="token punctuation">,</span>size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>brand<span class="token punctuation">,</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用父类构造函数</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>color <span class="token operator">=</span> color<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以拍照！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我可以玩游戏！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> chuizi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmartPhone</span><span class="token punctuation">(</span><span class="token string">"小米"</span><span class="token punctuation">,</span><span class="token number">1999</span><span class="token punctuation">,</span><span class="token string">"黑色"</span><span class="token punctuation">,</span><span class="token string">"5.15inch"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chuizi<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">chuizi</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chuizi<span class="token punctuation">.</span><span class="token function">photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
chuizi<span class="token punctuation">.</span><span class="token function">game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4getter和setter" tabindex="-1"><a class="header-anchor" href="#_4getter和setter" aria-hidden="true">#</a> ④getter和setter</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// class中的getter和setter设置</span>
<span class="token keyword">class</span> <span class="token class-name">Phone</span><span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">price</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"价格属性被读取了！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 返回值</span>
        <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token keyword">set</span> <span class="token function">price</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"价格属性被修改了！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实例化对象</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Phone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>price<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回值</span>
s<span class="token punctuation">.</span>price <span class="token operator">=</span> <span class="token number">2999</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-数值拓展" tabindex="-1"><a class="header-anchor" href="#_12-数值拓展" aria-hidden="true">#</a> 12.数值拓展</h2>
<h5 id="_1number-epsilon" tabindex="-1"><a class="header-anchor" href="#_1number-epsilon" aria-hidden="true">#</a> ①Number.EPSILON</h5>
<p>Number.EPSILON 是 JavaScript 表示的最小精度。</p>
<p>EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16；</p>
<h5 id="_2二进制和八进制" tabindex="-1"><a class="header-anchor" href="#_2二进制和八进制" aria-hidden="true">#</a> ②二进制和八进制：</h5>
<p>ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示；</p>
<h5 id="_3number-isfinite-与-number-isnan" tabindex="-1"><a class="header-anchor" href="#_3number-isfinite-与-number-isnan" aria-hidden="true">#</a> ③Number.isFinite() 与 Number.isNaN() ：</h5>
<p>Number.isFinite() 用来检查一个数值是否为有限的； Number.isNaN() 用来检查一个值是否为 NaN；</p>
<h5 id="_4number-parseint-与-number-parsefloat" tabindex="-1"><a class="header-anchor" href="#_4number-parseint-与-number-parsefloat" aria-hidden="true">#</a> ④Number.parseInt() 与 Number.parseFloat()：</h5>
<p>ES6 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变；</p>
<h5 id="_5math-trunc" tabindex="-1"><a class="header-anchor" href="#_5math-trunc" aria-hidden="true">#</a> ⑤Math.trunc</h5>
<p>用于去除一个数的小数部分，返回整数部分；</p>
<h5 id="_6number-isinteger" tabindex="-1"><a class="header-anchor" href="#_6number-isinteger" aria-hidden="true">#</a> ⑥Number.isInteger</h5>
<p>Number.isInteger() 用来判断一个数值是否为整数；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 数值扩展</span>
<span class="token comment">// 0. Number.EPSILON 是 JavaScript 表示的最小精度</span>
<span class="token comment">// EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16</span>
<span class="token keyword">function</span> <span class="token function">equal</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span> <span class="token operator">&lt;</span> Number<span class="token punctuation">.</span><span class="token constant">EPSILON</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"0、Number.EPSILON 是 JavaScript 表示的最小精度"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 箭头函数简化写法</span>
<span class="token function-variable function">equal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token operator">-</span>b<span class="token punctuation">)</span> <span class="token operator">&lt;</span> Number<span class="token punctuation">.</span><span class="token constant">EPSILON</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">===</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">equal</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">,</span> <span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// 1. 二进制和八进制</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"1、二进制和八进制"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">0b1010</span><span class="token punctuation">;</span><span class="token comment">//二进制</span>
<span class="token keyword">let</span> o <span class="token operator">=</span> <span class="token number">0o777</span><span class="token punctuation">;</span><span class="token comment">//八进制</span>
<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span><span class="token comment">//十进制</span>
<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0xff</span><span class="token punctuation">;</span><span class="token comment">//十六进制</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 2. Number.isFinite 检测一个数值是否为有限数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"2、Number.isFinite 检测一个数值是否为有限数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isFinite</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3. Number.isNaN 检测一个数值是否为 NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"3. Number.isNaN 检测一个数值是否为 NaN"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 4. Number.parseInt Number.parseFloat字符串转整数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"4. Number.parseInt Number.parseFloat字符串转整数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'5211314love'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">'3.1415926神奇'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 5. Number.isInteger 判断一个数是否为整数</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"5. Number.isInteger 判断一个数是否为整数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">2.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 6. Math.trunc 将数字的小数部分抹掉</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"6. Math.trunc 将数字的小数部分抹掉 "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span><span class="token number">3.5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 7. Math.sign 判断一个数到底为正数 负数 还是零</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"7. Math.sign 判断一个数到底为正数 负数 还是零"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-对象拓展" tabindex="-1"><a class="header-anchor" href="#_13-对象拓展" aria-hidden="true">#</a> 13.对象拓展</h2>
<p>ES6 新增了一些 Object 对象的方法：</p>
<ol>
<li>Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）</li>
<li>Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象；</li>
<li>proto、setPrototypeOf、 setPrototypeOf 可以直接设置对象的原型；</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token comment">// 对象扩展</span>
<span class="token comment">// 1. Object.is 比较两个值是否严格相等，与『===』行为基本一致（+0 与 NaN）；</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span><span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ===</span>
<span class="token comment">// 注意下面的区别</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span><span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// NaN与任何数值做===比较都是false，跟他自己也如此！</span>
<span class="token comment">// 2. Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象；</span>
<span class="token keyword">const</span> config1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span> <span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span> <span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">"root"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pass</span> <span class="token operator">:</span> <span class="token string">"root"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">test</span> <span class="token operator">:</span> <span class="token string">"test"</span> <span class="token comment">// 唯一存在</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> config2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span> <span class="token operator">:</span> <span class="token string">"http://zibo.com"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span> <span class="token operator">:</span> <span class="token number">300300600</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">"root4444"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pass</span> <span class="token operator">:</span> <span class="token string">"root4444"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">test2</span> <span class="token operator">:</span> <span class="token string">"test2"</span>
<span class="token punctuation">}</span>
<span class="token comment">// 如果前边有后边没有会添加，如果前后都有，后面的会覆盖前面的</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>config1<span class="token punctuation">,</span>config2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3. __proto__、setPrototypeOf、 getPrototypeOf 可以直接设置对象的原型；</span>
<span class="token keyword">const</span> school <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span> <span class="token operator">:</span> <span class="token string">"我是学校"</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> cities <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">xiaoqu</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'北京'</span><span class="token punctuation">,</span><span class="token string">'上海'</span><span class="token punctuation">,</span><span class="token string">'深圳'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// 并不建议这么做</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>school<span class="token punctuation">,</span>cities<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>school<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-模块化" tabindex="-1"><a class="header-anchor" href="#_14-模块化" aria-hidden="true">#</a> 14.模块化</h2>
<p>概述： 模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来；</p>
<p>模块化的好处： 模块化的优势有以下几点： 1. 防止命名冲突； 2. 代码复用； 3. 高维护性；</p>
<p>模块化规范产品： ES6 之前的模块化规范有： 1. CommonJS =&gt; NodeJS、Browserify； 2. AMD =&gt; requireJS； 3. CMD =&gt; seaJS；</p>
<p>ES6 模块化语法： 模块功能主要由两个命令构成：export 和 import； export 命令用于规定模块的对外接口（导出模块）； import 命令用于输入其他模块提供的功能（导入模块）；</p>
<h3 id="简单使用" tabindex="-1"><a class="header-anchor" href="#简单使用" aria-hidden="true">#</a> 简单使用：</h3>
<p>m.js（导出模块）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">let</span> school <span class="token operator">=</span> <span class="token string">"我是学校"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我们可以教你开发技术！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="模块化-html-导入和使用模块" tabindex="-1"><a class="header-anchor" href="#模块化-html-导入和使用模块" aria-hidden="true">#</a> 模块化.html（导入和使用模块）：</h5>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>模块化<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
                <span class="token comment">// 引入m.js模块内容</span>
                <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> m <span class="token keyword">from</span> <span class="token string">"./js/m.js"</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
                m<span class="token punctuation">.</span><span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6暴露数据语法汇总" tabindex="-1"><a class="header-anchor" href="#es6暴露数据语法汇总" aria-hidden="true">#</a> ES6暴露数据语法汇总：</h3>
<h4 id="m-js-逐个导出模块" tabindex="-1"><a class="header-anchor" href="#m-js-逐个导出模块" aria-hidden="true">#</a> m.js（逐个导出模块）</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 分别暴露（导出）</span>
<span class="token keyword">export</span> <span class="token keyword">let</span> school <span class="token operator">=</span> <span class="token string">"我是学校"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我们可以教你开发技术！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="n-js-统一导出模块" tabindex="-1"><a class="header-anchor" href="#n-js-统一导出模块" aria-hidden="true">#</a> n.js（统一导出模块）：</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 统一暴露（导出）</span>
<span class="token keyword">let</span> school <span class="token operator">=</span> <span class="token string">"我是学校"</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">findJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我们可以帮你找到好工作！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>school<span class="token punctuation">,</span>findJob<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用统一导出和逐个导出的时候如果用了{}，那么{}中必须写导入的模块中存在的对象，或者用as改名字</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>myname<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./m.js'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="o-js-默认导出模块" tabindex="-1"><a class="header-anchor" href="#o-js-默认导出模块" aria-hidden="true">#</a> o.js（默认导出模块）</h4>
<p>默认导出在导入的时候可以用简便写法</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> oh <span class="token keyword">from</span> <span class="token string">"./js/o.js"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里的<code v-pre>oh</code>是可以自己定义的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 默认暴露（导出）</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token literal-property property">school</span> <span class="token operator">:</span> <span class="token string">"我是学校"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">change</span> <span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"我们可以帮你改变人生！"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块化-html-引入和使用模块" tabindex="-1"><a class="header-anchor" href="#模块化-html-引入和使用模块" aria-hidden="true">#</a> 模块化.html（引入和使用模块）</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>模块化<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 引入m.js模块内容</span>
        <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> m <span class="token keyword">from</span> <span class="token string">"./js/m.js"</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            m<span class="token punctuation">.</span><span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token comment">// 引入n.js模块内容</span>
        <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> n <span class="token keyword">from</span> <span class="token string">"./js/n.js"</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            n<span class="token punctuation">.</span><span class="token function">findJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token comment">// 引入o.js模块内容</span>
        <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> o <span class="token keyword">from</span> <span class="token string">"./js/o.js"</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 注意这里调用方法的时候需要加上default</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>default<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            o<span class="token punctuation">.</span>default<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6导入模块语法汇总" tabindex="-1"><a class="header-anchor" href="#es6导入模块语法汇总" aria-hidden="true">#</a> ES6导入模块语法汇总</h3>
<h4 id="模块化-html" tabindex="-1"><a class="header-anchor" href="#模块化-html" aria-hidden="true">#</a> 模块化.html</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>模块化<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
        <span class="token comment">// 通用方式</span>
        <span class="token comment">// 引入m.js模块内容</span>
        <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> m <span class="token keyword">from</span> <span class="token string">"./js/m.js"</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            m<span class="token punctuation">.</span><span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 引入n.js模块内容</span>
        <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> n <span class="token keyword">from</span> <span class="token string">"./js/n.js"</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            n<span class="token punctuation">.</span><span class="token function">findJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 引入o.js模块内容</span>
        <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> o <span class="token keyword">from</span> <span class="token string">"./js/o.js"</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 注意这里调用方法的时候需要加上default</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">.</span>default<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            o<span class="token punctuation">.</span>default<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
        <span class="token comment">// 解构赋值形式</span>
        <span class="token keyword">import</span> <span class="token punctuation">{</span>school<span class="token punctuation">,</span>teach<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./js/m.js"</span><span class="token punctuation">;</span>
        <span class="token comment">// 重名的可以使用别名</span>
        <span class="token keyword">import</span> <span class="token punctuation">{</span>school <span class="token keyword">as</span> xuexiao<span class="token punctuation">,</span>findJob<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./js/n.js"</span><span class="token punctuation">;</span>
        <span class="token comment">// 导入默认导出的模块，必须使用别名</span>
        <span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> one<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./js/o.js"</span><span class="token punctuation">;</span>
        <span class="token comment">// 直接可以使用</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">teach</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xuexiao<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>one<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>one<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            one<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 简便形式，只支持默认导出</span>
        <span class="token keyword">import</span> oh <span class="token keyword">from</span> <span class="token string">"./js/o.js"</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oh<span class="token punctuation">)</span><span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oh<span class="token punctuation">.</span>school<span class="token punctuation">)</span><span class="token punctuation">;</span>
            oh<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_15-babel对es6模块化代码转换" tabindex="-1"><a class="header-anchor" href="#_15-babel对es6模块化代码转换" aria-hidden="true">#</a> 15.Babel对ES6模块化代码转换</h2>
<p>Babel概述：</p>
<p>Babel 是一个 JavaScript 编译器； Babel 能够将新的ES规范语法转换成ES5的语法； 因为不是所有的浏览器都支持最新的ES规范，所以，一般项目中都需要使用Babel进行转换； 步骤：使用Babel转换JS代码——打包成一个文件——使用时引入即可</p>
<p>步骤：</p>
<p>第一步：安装工具babel-cli（命令行工具） babel-preset-env（ES转换工具） browserify（打包工具， 项目中使用的是webpack）；</p>
<p>第二步：初始化项目</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第三步：安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i babel-cli babel-preset-env browserify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第四步：使用babel转换</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx babel js（js目录） <span class="token parameter variable">-d</span> dist/js（转化后的js目录） <span class="token parameter variable">--presets</span><span class="token operator">=</span>babel-preset-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第五步：打包</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx browserify dist/js/app.js <span class="token parameter variable">-o</span> dist/bundle.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第六步：在使用时引入bundle.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./js/bundle.js"</span> type<span class="token operator">=</span><span class="token string">"module"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注" aria-hidden="true">#</a> 备注</h2>
<blockquote>
<p>js中中括号和点语法的区别</p>
<p>中括号运算符总是能代替点运算符。但点运算符却不一定能全部代替中括号运算符。</p>
<p>中括号运算符可以用字符串变量的内容作为属性名。点运算符不能。</p>
<p>中括号运算符可以用纯数字为属性名。点运算符不能。</p>
<p>中括号运算符可以用js的关键字和保留字作为属性名。点运算符不能。</p>
</blockquote>
</div></template>


