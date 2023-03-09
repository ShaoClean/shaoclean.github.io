import{$ as p,a0 as o,a1 as c,a2 as n,a3 as s,a5 as t,a4 as e,C as l}from"./framework-888972eb.js";const i={},u=e(`<h1 id="for-循环" tabindex="-1"><a class="header-anchor" href="#for-循环" aria-hidden="true">#</a> for 循环</h1><p>主要记录一下<code>for in</code>循环和<code>for of</code>两个循环的区别</p><h2 id="for-in" tabindex="-1"><a class="header-anchor" href="#for-in" aria-hidden="true">#</a> for in</h2><ol><li>遍历数组下标和可枚举属性</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
arr<span class="token punctuation">.</span>hello <span class="token operator">=</span> <span class="token string">&quot;im arr!&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hi <span class="token operator">=</span> <span class="token string">&quot;hi hi hi!&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//0 1 2 hello hi</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> index<span class="token punctuation">)</span><span class="token comment">//string</span>
<span class="token punctuation">}</span>

<span class="token comment">//获取自身属性</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 2 3 im arr!</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>for in循环还可以遍历对象的键</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;clean&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//name age</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="for-of" tabindex="-1"><a class="header-anchor" href="#for-of" aria-hidden="true">#</a> for of</h2><p>for of遍历数组是数组元素中的值，而不能遍历到其身上其它属性的值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">123</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">123</span>
    
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//1 2 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>for of</code>适用遍历数/数组对象/字符串/map/set等拥有迭代器对象（<code>iterator</code>）的集合，但是不能遍历对象，因为没有迭代器对象，但如果想遍历对象的属性，可以用<code>for in</code>循环或用<code>Object.keys()</code>方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> myObject<span class="token operator">=</span><span class="token punctuation">{</span>
　　a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
　　b<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
　　c<span class="token operator">:</span><span class="token number">3</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>myObject<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> myObject<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//a:1 b:2 c:3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上是一些基本的知识点，这里主要想说一下迭代器和生成器。迭代器和生成器是ES6新增的，使用这两个新特性能够更清晰、高效、方便地实现迭代。</p><h2 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h2><h3 id="什么是迭代-什么是迭代器" tabindex="-1"><a class="header-anchor" href="#什么是迭代-什么是迭代器" aria-hidden="true">#</a> 什么是迭代，什么是迭代器？</h3><p>“迭代”的意思是按照顺序反复多次执行一段程序，通常会有明确的终止条件。迭代会在一个有序集合上进行，集合中的所有项可以按照既定的顺序被遍历到，特别是开始和结束项有明确的定义。</p><p>了解了迭代的意思，那么就很容易理解迭代器的含义了。在我看来，迭代器就是一种实现迭代的方法，由它来帮我们实现迭代的过程。</p><h4 id="可迭代协议" tabindex="-1"><a class="header-anchor" href="#可迭代协议" aria-hidden="true">#</a> 可迭代协议</h4><p><strong>可迭代协议</strong>允许 JavaScript 对象定义或定制它们的迭代行为，实现可迭代协议(<code>Iterable</code>接口)要求同时具备两种能力：</p><ul><li>支持迭代的自我识别能力</li><li>创建实现<code>Iterator</code>接口的对象的能力</li></ul><p>在JS中，这意味着：</p><ul><li><p>必须暴露一个属性作为<code>默认迭代器</code>。</p><p>对于这个默认迭代器也有要求：必须引用一个<code>迭代器工厂函数</code>,调用这个工厂函数必须返回一个新迭代器。</p></li><li><p>这个属性必须使用<code>[Symbol.iterator]</code>作为键</p></li></ul><p><strong>如何理解上面两点？</strong></p><p>当使用for of循环时，会调用<code>[Symbol.iterator]</code>属性（也就是上面说的<code>默认迭代器</code>)来获取<code>迭代器</code>(也就是上面所提到的新迭代器)；然后使用<code>迭代器</code>上的方法（通常是<code>next()</code>）来获取迭代的值。</p><h4 id="迭代器协议" tabindex="-1"><a class="header-anchor" href="#迭代器协议" aria-hidden="true">#</a> 迭代器协议</h4><blockquote><p><strong>迭代器协议</strong>定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。</p></blockquote><p>意思就是，一个东西需要满足什么条件才能算做是迭代器。那需要满足什么条件呢？</p><ul><li>迭代器是一个对象，这个对象中有三个方法，分别是：<code>next()</code>、<code>return()</code>、<code>throw()</code>；next方法必选，其他两个方法可选。</li><li>这三个方法必须有返回值，返回值是一个<code>IteratorResult</code>类型的对象。这个对象包含两个值： <ul><li>value：调用迭代器方法后返回的值</li><li>done：如果迭代器能够生成序列中的下一个值，则返回 <code>false</code> 布尔值。</li></ul></li></ul><h3 id="判断默认迭代属性" tabindex="-1"><a class="header-anchor" href="#判断默认迭代属性" aria-hidden="true">#</a> 判断默认迭代属性?</h3><p>在JS中，检查是否存在<code>默认迭代器</code>属性，可以判断是否存在<code>迭代器工厂函数</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//undefiend</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">//undefiend</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上例子说明变量num和obj不存在<code>默认迭代器</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//ƒ [Symbol.iterator]() { [native code] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//ƒ values() { [native code] }</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//ƒ [Symbol.iterator]() { [native code] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//ƒ values() { [native code] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上例子说明这些类型都实现了<code>迭代器工厂函数</code>，而调用这个工厂函数会生成一个<code>迭代器</code>。</p><p>个人理解：</p><blockquote><p>当使用能接收可迭代对象的原生语言特性时，会自动帮我们调用迭代器，来完成它内部实现的迭代操作</p></blockquote><p>接收可迭代对象的原生语言特性包括：</p><ul><li>for of</li><li>数组结构</li><li>扩展操作符</li><li>Array.from()</li><li>创建集合、映射</li><li>Promise.all()、Promise.race()接收由期约组成的可迭代对象</li><li>yield*操作符，在生成器中使用</li></ul><h3 id="实现迭代-显示实现和原生实现" tabindex="-1"><a class="header-anchor" href="#实现迭代-显示实现和原生实现" aria-hidden="true">#</a> 实现迭代（显示实现和原生实现）</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//显示实现</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          count<span class="token operator">++</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span> <span class="token operator">+</span> count <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">return</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;提前终止迭代器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> f <span class="token keyword">of</span> foo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>f <span class="token operator">===</span> <span class="token string">&#39;foo18&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;break value&#39;</span><span class="token punctuation">,</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//foo18</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//foo1 ... foo17</span>
<span class="token punctuation">}</span>

<span class="token comment">//原生实现</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//Array Iterator</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用break、continue、return、throw等关键字时，来关闭迭代器执行。如果存在还没有被消费的值时，会触发迭代器工厂函数中的<code>return()</code>方法。</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>js允许我们自定义对象的迭代方式，但定义它的迭代方式需要遵循它的规则（可迭代协议）；</p><p>这个规则（可迭代协议）规定，对象如果自定义迭代行为需要包含一个[Symbol.iterator]属性，并且调用这个属性之后需要返回一个迭代器。这个迭代器是一个对象，实现迭代器也需要遵循它的规则（迭代器协议）；</p><p>这个规则（迭代器协议）规定需要包含一个next方法，调用next方法后需要返回一个对象，来表示下一次迭代后的状态。对象中包含两个可选的值（done和value），value表示下一次迭代后的值，done表示迭代是否结束。在调用return和throw方法时，他们会告诉迭代器迭代迭代结束了。</p><h2 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h2><p>JavaScript中的生成器函数（Generator Function）是一种特殊的函数，它可以在需要的时候生成多个值，而不是像普通函数一样只返回一个值。生成器函数可以通过使用<code>yield</code>关键字来暂停函数的执行，并在需要时恢复执行状态。当生成器函数执行时，它会返回一个生成器对象，该对象可以用于逐个获取生成的值。</p>`,47),r=n("strong",null,"生成器函数",-1),d=n("strong",null,"迭代器",-1),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols#iterator",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"next()",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"yield",-1),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"yield",-1),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/yield*",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"yield*",-1),w=n("p",null,[n("code",null,"next()"),s("方法返回一个对象，这个对象包含两个属性：value 和 done，value 属性表示本次 "),n("code",null,"yield"),s(" 表达式的返回值，done 属性为布尔类型，表示生成器后续是否还有 "),n("code",null,"yield"),s(" 语句，即生成器函数是否已经执行完毕并返回。")],-1),_=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token string">&#39;end1&#39;</span>
  <span class="token keyword">yield</span> <span class="token string">&#39;end2&#39;</span>
  <span class="token keyword">yield</span> <span class="token string">&#39;end3&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//foo 的生成器</span>

<span class="token keyword">let</span> g1 <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g1<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{done:false,value:end1}</span>

<span class="token keyword">let</span> g2 <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: &#39;end2&#39;, done: false}</span>

<span class="token keyword">let</span> gg <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token string">&#39;early ending&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>gg<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: &#39;early ending&#39;, done: true}</span>

<span class="token keyword">let</span> g3 <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: undefined, done: true}</span>

<span class="token keyword">let</span> g4 <span class="token operator">=</span> generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>g4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{value: undefined, done: true}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(j,S){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,n("blockquote",null,[n("p",null,[s("调用一个"),r,s("并不会马上执行它里面的语句，而是返回一个这个生成器的 "),d,s(),n("strong",null,[s("（ "),n("a",k,[s("iterator"),t(a)]),s(" ）对象")]),s("。当这个迭代器的 "),v,s(" 方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现"),n("a",m,[b,t(a)]),s("的位置为止，"),n("a",f,[y,t(a)]),s(" 后紧跟迭代器要返回的值。或者如果用的是 "),n("a",h,[g,t(a)]),s("（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。")]),w]),_])}const O=p(i,[["render",x],["__file","forin_forof.html.vue"]]);export{O as default};