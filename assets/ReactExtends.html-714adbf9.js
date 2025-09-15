import{_ as n,a0 as a,a1 as e,a4 as s}from"./framework-16947f8e.js";const t={},i=s(`<h1 id="react-拓展" tabindex="-1"><a class="header-anchor" href="#react-拓展" aria-hidden="true">#</a> React 拓展</h1><h2 id="_1-setstate" tabindex="-1"><a class="header-anchor" href="#_1-setstate" aria-hidden="true">#</a> 1. setState</h2><h3 id="setstate-更新状态的-2-种写法" tabindex="-1"><a class="header-anchor" href="#setstate-更新状态的-2-种写法" aria-hidden="true">#</a> setState 更新状态的 2 种写法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1). setState(stateChange, [callback])------对象式的setState
    1.stateChange为状态改变对象(该对象可以体现出状态的更改)
    2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用

(2). setState(updater, [callback])------函数式的setState
    1.updater为返回stateChange对象的函数。
    2.updater可以接收到state和props。
    4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
1.对象式的setState是函数式的setState的简写方式(语法糖)
2.使用原则：
        (1).如果新状态不依赖于原状态 ===&gt; 使用对象方式
        (2).如果新状态依赖于原状态 ===&gt; 使用函数方式
        (3).如果需要在setState()执行后获取最新的状态数据,
            要在第二个callback函数中读取
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_2-lazyload" tabindex="-1"><a class="header-anchor" href="#_2-lazyload" aria-hidden="true">#</a> 2. lazyLoad</h2><h3 id="路由组件的-lazyload" tabindex="-1"><a class="header-anchor" href="#路由组件的-lazyload" aria-hidden="true">#</a> 路由组件的 lazyLoad</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//1.通过React的lazy函数配合import()函数动态加载路由组件 ===&gt; 路由组件代码会被分开打包</span>
<span class="token keyword">const</span> Login <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/pages/Login&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//2.通过&lt;Suspense&gt;指定在加载得到路由打包文件前显示一个自定义loading界面</span>
<span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>loading<span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Switch<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/xxx&quot;</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Xxxx<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Redirect to<span class="token operator">=</span><span class="token string">&quot;/login&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-hooks" tabindex="-1"><a class="header-anchor" href="#_3-hooks" aria-hidden="true">#</a> 3. Hooks</h2><h4 id="_1-react-hook-hooks-是什么" tabindex="-1"><a class="header-anchor" href="#_1-react-hook-hooks-是什么" aria-hidden="true">#</a> 1. React Hook/Hooks 是什么?</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1). Hook是React 16.8.0版本增加的新特性/新语法
(2). 可以让你在函数组件中使用 state 以及其他的 React 特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-三个常用的-hook" tabindex="-1"><a class="header-anchor" href="#_2-三个常用的-hook" aria-hidden="true">#</a> 2. 三个常用的 Hook</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1). State Hook: React.useState()
(2). Effect Hook: React.useEffect()
(3). Ref Hook: React.useRef()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-state-hook" tabindex="-1"><a class="header-anchor" href="#_3-state-hook" aria-hidden="true">#</a> 3. State Hook</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1). State Hook让函数组件也可以有state状态, 并进行状态数据的读写操作
(2). 语法: const [xxx, setXxx] = React.useState(initValue)
(3). useState()说明:
        参数: 第一次初始化指定的值在内部作缓存
        返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数
(4). setXxx()2种写法:
        setXxx(newValue): 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
        setXxx(value =&gt; newValue): 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-effect-hook" tabindex="-1"><a class="header-anchor" href="#_4-effect-hook" aria-hidden="true">#</a> 4. Effect Hook</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
(2). React中的副作用操作:
        发ajax请求数据获取
        设置订阅 / 启动定时器
        手动更改真实DOM
(3). 语法和说明:
        useEffect(() =&gt; {
          // 在此可以执行任何带副作用操作
          return () =&gt; { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
          }
        }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行

(4). 可以把 useEffect Hook 看做如下三个函数的组合
        componentDidMount()
        componentDidUpdate()
    	componentWillUnmount()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-ref-hook" tabindex="-1"><a class="header-anchor" href="#_5-ref-hook" aria-hidden="true">#</a> 5. Ref Hook</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1). Ref Hook可以在函数组件中存储/查找组件内的标签或任意其它数据
(2). 语法: const refContainer = useRef()
(3). 作用:保存标签对象,功能与React.createRef()一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_4-fragment" tabindex="-1"><a class="header-anchor" href="#_4-fragment" aria-hidden="true">#</a> 4. Fragment</h2><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><pre><code>&lt;Fragment&gt;&lt;Fragment&gt;
&lt;&gt;&lt;/&gt;
</code></pre><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><blockquote><p>可以不用必须有一个真实的 DOM 根标签了</p></blockquote><hr><h2 id="_5-context" tabindex="-1"><a class="header-anchor" href="#_5-context" aria-hidden="true">#</a> 5. Context</h2><h3 id="理解" tabindex="-1"><a class="header-anchor" href="#理解" aria-hidden="true">#</a> 理解</h3><blockquote><p>一种组件间通信方式, 常用于【祖组件】与【后代组件】间通信</p></blockquote><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1</span><span class="token punctuation">)</span> 创建Context容器对象：
	<span class="token keyword">const</span> XxxContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token number">2</span><span class="token punctuation">)</span> 渲染子组时，外面包裹xxxContext<span class="token punctuation">.</span>Provider<span class="token punctuation">,</span> 通过value属性给后代组件传递数据：
	<span class="token operator">&lt;</span>xxxContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>数据<span class="token punctuation">}</span><span class="token operator">&gt;</span>
		子组件
    <span class="token operator">&lt;</span><span class="token operator">/</span>xxxContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>

<span class="token number">3</span><span class="token punctuation">)</span> 后代组件读取数据：

	<span class="token comment">//第一种方式:仅适用于类组件</span>
	  <span class="token keyword">static</span> contextType <span class="token operator">=</span> xxxContext  <span class="token comment">// 声明接收context</span>
	  <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token comment">// 读取context中的value数据</span>

	<span class="token comment">//第二种方式: 函数组件与类组件都可以</span>
	  <span class="token operator">&lt;</span>xxxContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
	    <span class="token punctuation">{</span>
	      <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span> <span class="token comment">// value就是context中的value数据</span>
	        要显示的内容
	      <span class="token punctuation">)</span>
	    <span class="token punctuation">}</span>
	  <span class="token operator">&lt;</span><span class="token operator">/</span>xxxContext<span class="token punctuation">.</span>Consumer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><pre><code>在应用开发中一般不用context, 一般都它的封装react插件
</code></pre><hr><h2 id="_6-组件优化" tabindex="-1"><a class="header-anchor" href="#_6-组件优化" aria-hidden="true">#</a> 6. 组件优化</h2><h3 id="component-的-2-个问题" tabindex="-1"><a class="header-anchor" href="#component-的-2-个问题" aria-hidden="true">#</a> Component 的 2 个问题</h3><blockquote><ol><li><p>只要执行 setState(),即使不改变状态数据, 组件也会重新 render()</p></li><li><p>只当前组件重新 render(), 就会自动重新 render 子组件 ==&gt; 效率低</p></li></ol></blockquote><h3 id="效率高的做法" tabindex="-1"><a class="header-anchor" href="#效率高的做法" aria-hidden="true">#</a> 效率高的做法</h3><blockquote><p>只有当组件的 state 或 props 数据发生改变时才重新 render()</p></blockquote><h3 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h3><blockquote><p>Component 中的 shouldComponentUpdate()总是返回 true</p></blockquote><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h3><pre><code>办法1:
	重写shouldComponentUpdate()方法
	比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false
办法2:
	使用PureComponent
	PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true
	注意:
		只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false
		不要直接修改state数据, 而是要产生新数据
项目中一般使用PureComponent来优化
</code></pre><hr><h2 id="_7-render-props" tabindex="-1"><a class="header-anchor" href="#_7-render-props" aria-hidden="true">#</a> 7. render props</h2><h3 id="如何向组件内部动态传入带内容的结构-标签" tabindex="-1"><a class="header-anchor" href="#如何向组件内部动态传入带内容的结构-标签" aria-hidden="true">#</a> 如何向组件内部动态传入带内容的结构(标签)?</h3><pre><code>Vue中:
	使用slot技术, 也就是通过组件标签体传入结构  &lt;AA&gt;&lt;BB/&gt;&lt;/AA&gt;
React中:
	使用children props: 通过组件标签体传入结构
	使用render props: 通过组件标签属性传入结构, 一般用render函数属性
</code></pre><h3 id="children-props" tabindex="-1"><a class="header-anchor" href="#children-props" aria-hidden="true">#</a> children props</h3><pre><code>&lt;A&gt;
  &lt;B&gt;xxxx&lt;/B&gt;
&lt;/A&gt;
{this.props.children}
问题: 如果B组件需要A组件内的数据, ==&gt; 做不到
</code></pre><h3 id="render-props" tabindex="-1"><a class="header-anchor" href="#render-props" aria-hidden="true">#</a> render props</h3><pre><code>&lt;A render={(data) =&gt; &lt;C data={data}&gt;&lt;/C&gt;}&gt;&lt;/A&gt;
A组件: {this.props.render(内部state数据)}
C组件: 读取A组件传入的数据显示 {this.props.data}
</code></pre><hr><h2 id="_8-错误边界" tabindex="-1"><a class="header-anchor" href="#_8-错误边界" aria-hidden="true">#</a> 8. 错误边界</h2><h4 id="理解-1" tabindex="-1"><a class="header-anchor" href="#理解-1" aria-hidden="true">#</a> 理解：</h4><p>错误边界：用来捕获后代组件错误，渲染出备用页面</p><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点：</h4><p>只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误</p><h5 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式：</h5><p>getDerivedStateFromError 配合 componentDidCatch</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 生命周期函数，一旦后台组件报错，就会触发</span>
<span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 在render之前触发</span>
    <span class="token comment">// 返回新的state</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 统计页面的错误。发送请求发送到后台去</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-组件通信方式总结" tabindex="-1"><a class="header-anchor" href="#_9-组件通信方式总结" aria-hidden="true">#</a> 9. 组件通信方式总结</h2><h4 id="方式" tabindex="-1"><a class="header-anchor" href="#方式" aria-hidden="true">#</a> 方式：</h4><pre><code>	props：
		(1).children props
		(2).render props
	消息订阅-发布：
		pubs-sub、event等等
	集中式管理：
		redux、dva等等
	conText:
		生产者-消费者模式
</code></pre><h4 id="组件间的关系" tabindex="-1"><a class="header-anchor" href="#组件间的关系" aria-hidden="true">#</a> 组件间的关系</h4><pre><code>	父子组件：props
	兄弟组件(非嵌套组件)：消息订阅-发布、集中式管理
	祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(用的少)
</code></pre><p>œ</p>`,67),r=[i];function o(d,c){return a(),e("div",null,r)}const p=n(t,[["render",o],["__file","ReactExtends.html.vue"]]);export{p as default};
