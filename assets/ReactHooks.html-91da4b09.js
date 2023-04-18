import{$ as n,a0 as s,a1 as a,a4 as t}from"./framework-19a42cda.js";const e={},p=t(`<h1 id="react-hooks" tabindex="-1"><a class="header-anchor" href="#react-hooks" aria-hidden="true">#</a> React Hooks</h1><p>常见的hooks有</p><h2 id="_1-usestate" tabindex="-1"><a class="header-anchor" href="#_1-usestate" aria-hidden="true">#</a> 1.useState</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>count<span class="token punctuation">,</span>setCount<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">setCount</span><span class="token punctuation">(</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">click</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然count的改变会导致组件重新渲染（函数重新调用），按理说useState那一行代码会重新执行，count的值应该是一直都是0。但是React的底层做了处理，缓存了count的值，忽略掉了<code>useState(0)</code>中的0。不会因为再次渲染将之前的值覆盖掉</p><h2 id="_2-useeffect" tabindex="-1"><a class="header-anchor" href="#_2-useeffect" aria-hidden="true">#</a> 2.useEffect</h2><p>该hook接受两个参数：</p><ul><li>setup（回调函数）</li><li>dependencies（依赖数组） 可选</li></ul><p>组件会在初次渲染并执行完组件中的代码时最后调用<code>useEffect</code>中的<code>setup</code>函数。</p><p>如果该回调返回了一个函数，那么这个返回的函数会在该组件销毁的时候调用</p><p>其依赖的数据发生变化时，也就是<code>dependencie</code>数组中的数据发生变化时，<code>setup</code>函数会再一次触发。</p><p><strong>如果组件重新进行了渲染</strong></p><p>此时，如果<code>setup</code>函数中有返回一个函数（官方说法叫cleanup函数，cleanup函数中的代码叫clean code）。那么在重新渲染的时候：</p><p>1.先执行组件中的同步代码</p><p>2.然后执行cleanup函数</p><p>3.然后才是执行setup函数</p><p>而且<code>cleanup</code>函数中的<code>props</code>和<code>state</code>都是旧的。</p><h2 id="_3-useref" tabindex="-1"><a class="header-anchor" href="#_3-useref" aria-hidden="true">#</a> 3.useRef</h2><p>引用一个不需要被渲染的值</p><p><strong>参数：</strong></p><p>可以是任何类型的数据。但是初始化过后，这个参数就将会被忽视。也就是说，重新渲染组件的时候，就不会重复创建这个值。</p><p><strong>返回值：</strong></p><p>返回一个对象，对象中只有一个<code>current</code>属性。这个属性的值不会因为re-render而重复创建。</p><p>如果将ref对象作为ref属性传递给JSX节点，current会返回一个dom元素（用法和vue3中的ref类似，传入的参数都会被忽略。只是在获取dom元素的时候有区别，v3用的是<code>.value</code>，react用的是<code>.current</code>）</p><h2 id="_4-usecontext" tabindex="-1"><a class="header-anchor" href="#_4-usecontext" aria-hidden="true">#</a> 4. useContext</h2><p>使用由<code>createContext</code>创建的上下文对象。</p><p><code>createContext</code>用法1:</p><p>使用<code>useContext</code>获取<code>createContext</code>创建时的原始值</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> myContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">&#39;hello im context&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> uc <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>myContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    	</span><span class="token punctuation">{</span>uc<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>createContext</code>用法2:</p><p><code>createContext</code>相当于创建了一个组件，在模板中使用其<code>myContext.Provider</code>组件。并传递给它唯一一个props属性，<code>value</code>。</p><p>在它的字组件中，可以使用其<code>myContext.Consumer</code>组件。在该组件中可以使用函数，这个函数接收一个参数，就是value传递过来的值。而且这个值是响应式的。</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> myContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">&#39;hello im context&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> customValue <span class="token operator">=</span> <span class="token string">&#39;hihihi!&#39;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myContext.Provider</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>customValue<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">C</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myContext.Provider</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>myContext.Consumer</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    	</span><span class="token punctuation">{</span>
        <span class="token parameter">content</span> <span class="token operator">=&gt;</span> content
      <span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>myContext.Consumer</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>useCallback</li></ol>`,34),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","ReactHooks.html.vue"]]);export{d as default};
