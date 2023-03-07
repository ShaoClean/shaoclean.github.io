import{$ as n,a0 as i,a1 as s,a7 as a,a4 as e}from"./framework-888972eb.js";const t={},l=e(`<h1 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> Vue2</h1><h2 id="vue-config-js-配置文件" tabindex="-1"><a class="header-anchor" href="#vue-config-js-配置文件" aria-hidden="true">#</a> vue.config.js 配置文件</h2><p>使用 vue inspect &gt; output.js 可以查看到 Vue 脚手架的默认配置</p><p>使用 vue.config.js 可以对脚手架进行个性化定制</p><p>详情见:https://cli.vue.js.org/zh</p><h2 id="ref-属性" tabindex="-1"><a class="header-anchor" href="#ref-属性" aria-hidden="true">#</a> ref 属性</h2><p>1.被用来给元素或子组件注册引用信息（id 的替代者）</p><p>2.应用在 html 标签上获取的是真实 DOM 元素，应用在组件标签上是组件实例对象（vc）</p><p>3.使用方法</p><p>a.先打标识：<code>&lt;h1 ref=&quot;XXX&quot;&gt;...&lt;/h1&gt;</code> 或 <code>&lt;School ref=&quot;XXX&quot;&gt;&lt;/School&gt;</code></p><p>b.随后通过<code>this.$refs.xxx</code>获取 dom 元素</p><h2 id="配置项-props" tabindex="-1"><a class="header-anchor" href="#配置项-props" aria-hidden="true">#</a> 配置项 props</h2><p>功能：让组件接受外部传过来的数据</p><ul><li><p>1.传递数据：<code>&lt;Demo name=&quot;XXX&quot;&gt;</code></p></li><li><p>2.接收数据</p><ul><li>第一种方式（只接收）：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>export default{ props:[&#39;name&#39;] }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>第二种方式(限制类型)：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>export default{ props:{ name:Number } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>第三种方式（限制类型、限制必要性、制定默认值）：</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>export default{ props:{ name:{ type:String,//类型 require:true,//必要性
default:&#39;老王&#39;//默认值 } } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">备注</p><p>1.props 是只读的，Vue 底层会监测你对 props 的修改，如果进行了修改，就会发出警告， 若业务需求需要修改，请复制一份到 data 中，换一个名字，然后写成 this.XXX 的形式。</p><p>2.本身 data 中不存在数据，即通过 props 传递过来的数据，最好不要修改，控制台会报错，</p><p>3.如果同时存在，会优先显示 props 中的数据 （props 中的数据是优先被接受的，是优先被放在 VC 上的） 所以可以在 data 中写 myAge:this.age，这样就能实现修改传递过来的数据不报错的情况</p></div></li></ul><h2 id="mixin-混入" tabindex="-1"><a class="header-anchor" href="#mixin-混入" aria-hidden="true">#</a> mixin(混入)</h2><pre><code>功能：可以把多个组件共用的配置提取成一个混入对象
使用方法：
    第一步，定义混合，例如：
      ｛
        data(){....},
        methods:{...}
      ｝

    第二步，使用混入，例如：
     (1)全局混入：Vue.mixin(xxx)
     (2)局部混入：mixins:[&#39;xxx&#39;]
</code></pre><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
定义插件：
对象.install=function（Vue,options）｛｝
使用插件：Vue.install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结-todolist-案例" tabindex="-1"><a class="header-anchor" href="#总结-todolist-案例" aria-hidden="true">#</a> 总结 ToDoList 案例</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.组件化编码流程：
	（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
	（2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
			i：一个组件在用：放在组件自身即可
			ii：一些组件在用：放在他们公共的父组件上（状态提升）
    （3）实现交互：从绑定事件开始

2.props适用于：
	（1）父组件==》子组件 通信
	（2）子组件==》父组件 通信（要求父先传给子一个函数）

3.使用v-model时要切记:v-model绑定的值不能是props传过来的值，因为props是不可以修改的

4.props传过来的弱势对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webstorage" tabindex="-1"><a class="header-anchor" href="#webstorage" aria-hidden="true">#</a> webStorage</h2><p>1.存储内容大小一般支持 5MB 左右（不同浏览器可能还不一样）</p><p>2.浏览器端通过 Windows.sessionStorage 和 Windows.localStorage 属性来实现本地存储机制。</p><p>3.相关 API：</p><p>​ 1.<code>xxxxStorage.setItem(&#39;key&#39;,&#39;value&#39;);</code></p><p>​ 该方法接受一个值和键作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值</p><p>​ 2.<code>xxxxStorage.getItem(person);</code></p><p>​ 该方法接受一个键名作为参数，返回键名对应的值</p><p>​ 3.<code>xxxxStorage.removeItem(&#39;key&#39;);</code></p><p>​ 该方法接受一个值和键作为参数，并把该键名从存储中删除</p><p>​ 4.<code>xxxxStorage.clearItem();</code></p><p>​ 该方法会清空存储中的所有数据</p><p>4.备注：</p><p>​ 1.SessionStorage 存储的内容会随着浏览器串口关闭而消失</p><p>​ 2.LocalStorage 存储的内容，需要手动清除才会消失</p><p>​ 3.<code>xxxxStorage.getItem(xxx);</code>如果 xxx 对应的 value 获取不到，那么 getitem 的返回值是 null</p><p>​ 4.<code>JSON.parse(null)</code>的结果依然是 null</p><h2 id="组件的自定义事件" tabindex="-1"><a class="header-anchor" href="#组件的自定义事件" aria-hidden="true">#</a> 组件的自定义事件</h2><p>1.一种组件间通信的方式，适用于：子组件==》父组件</p><p>2.使用场景：A 是父组件，B 是子组件，B 想给 A 传数据，那么就要在 A 中给 B 绑定自定义事件<code>（事件的回调在A中）</code></p><p>3.绑定自定义事件：</p><p>​ 1.第一种方式：在父组件中：<code>&lt;Demo @clean=&quot;show&quot;/&gt;&quot;</code>或<code>&lt;Demo v-on:clean=&quot;show&quot;/&gt;&quot;</code></p><p>​ 2.第二种方式：在父组件中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;Demo ref=&quot;demo&quot;/&gt;
...
mouted(){
this.$refs.xxx.$on(&#39;clean&#39;,this.show)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.若想让事件只触发一次，可以使用 once 修饰符，或者$once 方法</p><p>4.触发自定义事件：<code>this.$emit(&#39;clean&#39;,需要传递的参数)</code></p><p>5.解绑自定义事件：<code>this.$off(&#39;clean&#39;)</code></p><p>6.组件上也可以绑定原生 DOM 事件，需要使用<code>.native</code>修饰符</p><p>7.注意：通过<code>this.$refs.$emit.(&#39;clean&#39;,回调)</code>绑定自定义事件时，回调要么配置在 methods 中,要么用箭头函数，否则 this 指向会出现问题</p><h2 id="全局事件总线-globaleventbus" tabindex="-1"><a class="header-anchor" href="#全局事件总线-globaleventbus" aria-hidden="true">#</a> 全局事件总线（GlobalEventBus）</h2><p>​ 1.一种组件间通信的方式，适用于任意组件间通信</p><p>​ 2.安装全局事件总线：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus<span class="token operator">=</span><span class="token keyword">this</span><span class="token comment">//安装全局事件总线,$bus就是当前应用的vm</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.使用事件总线：</p><p>​ 1.接收数据：A 组件想要接收数据，则在 A 组件中给$bus 绑定自定义事件，事件的回调留在 A 组件自身</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token operator">...</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;eventName&#39;</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.提供数据：<code>this.$bus.$emit(&#39;eventName&#39;,需要传递的数据)</code></p><p>4.最好在 beforeDestroy 钩子中,用$off 去解绑当前组件所用到的时间</p><h2 id="消息订阅与发布" tabindex="-1"><a class="header-anchor" href="#消息订阅与发布" aria-hidden="true">#</a> 消息订阅与发布</h2><p>安装消息订阅的组件库，安装命令（有好几个消息订阅与发布的组件库，不一定用这个，只是语法不一样）</p><p><code>npm i pubsub-js</code></p><p>1.是一种组件间通信的方式，适用于任意组件间通信</p><p>2.使用步骤：</p><p>​ 1.安装 pubsub:<code>npm i pubsub-js</code></p><p>​ 2.引入：<code>import pubsub from &#39;pubsub-js&#39;</code></p><p>​ 3.接受数据：A 组件想接受数据，则在 A 组件中订阅消息，订阅的回调留在 A 组件自身</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>	<span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pubId <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>demo<span class="token punctuation">)</span><span class="token comment">//订阅消息</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 4.提供数据：<code>pubsub.publish(&#39;xxx&#39;,数据)</code></p><p>​ 5.最好在 beforeDestroy 钩子中，用<code>pubsub.unsubscribe(this.pubId)</code>去<span style="color:red;">取消订阅</span></p><h2 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h2><p>1.语法：<code>this.$nextTick(callback</code></p><p>2.作用：在下一次 DOM 更新结束后执行其指定的回调</p><p>3.什么时候用：当改变数据后，要基于更新后的新 DOM 进行某些操作时，要在 nextTick 所指定的回调函数中执行</p><h2 id="vue-封装的过渡与动画" tabindex="-1"><a class="header-anchor" href="#vue-封装的过渡与动画" aria-hidden="true">#</a> Vue 封装的过渡与动画</h2><p>1.作用:在插入、更新或移除 DOM 元素时,在合适的时候给元素添加样式类名</p><p>2.图示:</p>`,76),d=e(`<p>3.写法:</p><p>​ 1.准备好样式:</p><p>​ ·元素进入的样式:</p><p>​ 1.v-enter:进入的起点</p><p>​ 2.v-enter-active:进入的过程中</p><p>​ 3.v-enter-to:进入的终点</p><p>​ ·元素离开的样式:</p><p>​ 1.v-leave:离开的起点</p><p>​ 2.v-leave-active：离开过程中</p><p>​ 3.v-leave-to：离开的终点</p><p>​ 2.使用<code>&lt;transition&gt;</code>包裹过渡的元素,并配置 name 属性:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>你好！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.备注:若有多个元素需要过渡,则需要使用<code>&lt;transition-group&gt;</code>，且每个元素都要指定 key 值,例如<code>:key=&quot;1&quot;</code></p><h2 id="vue-脚手架配置代理" tabindex="-1"><a class="header-anchor" href="#vue-脚手架配置代理" aria-hidden="true">#</a> Vue 脚手架配置代理</h2><p><strong>方法一</strong></p><p>在 vue.config.js 中添加如下配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>devServer:{
proxy:&quot;http://localhost:5000&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>​ 1.优点：配置简单,请求资源时直接发给前端(8080)即可。</p><p>​ 2.缺点:不能配置多个代理,不能灵活的控制请求是否走代理</p><p>​ 3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先匹配前端资源）</p><p><strong>方法二</strong></p><p>编写 vue.config.js 配置具体代理规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  devServer: {
    proxy: {
      &#39;/api1&#39;: {//匹配所有以&#39;/api1&#39;开头的请求路径
        target: &#39;http：//localhost:5000&#39;,//代理目标的基础路径
        ws: true,
        changeOrigin: true
        pathRewrite:{&#39;^/api1&#39;:&#39;&#39;}//重写转发给服务器的资源请求路径，将&#39;/api1&#39;开头的路径改为&#39;&#39;(空)
      },
      &#39;/foo&#39;: {
        target: &#39;&lt;other_url&gt;&#39;
      }
    }
  }
}
/*
	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
	changeOrigin默认值为true
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>​ 1.优点：可以配置多个大力，且可以灵活的控制请求头是否走代理</p><p>​ 2.缺点：配置略微繁琐，求情资源时必须加前缀。</p><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>1.作用：让父组件可以向子组件指定位置插入 html 结构，也是一种组件间通信的方式，适用于父组件====》子组件(组件的使用者)</p><p>2.分类：默认插槽、具名插槽、作用域插槽</p><p>3.使用方式：</p><p>​ 1.默认插槽</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父组件中：
	&lt;Category&gt;
		&lt;div&gt;html结构&lt;/div&gt;
	&lt;/Category&gt;

子组件中：
	&lt;template&gt;
		&lt;div&gt;
			&lt;slot&gt;我是默认值,当使用者没有传递数据时，我会显示&lt;/slot&gt;
		&lt;/div&gt;
	&lt;template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.具名插槽</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父组件中：
	&lt;Category&gt;
		&lt;div slot=&quot;center&quot;&gt;html结构&lt;/div&gt;
		&lt;template slot=&quot;center&quot; 或 v-slot:center&gt;
			&lt;div&gt;

			&lt;/div&gt;
		&lt;template&gt;
	&lt;/Category&gt;

子组件中：
	&lt;template&gt;
		&lt;div&gt;
			&lt;slot name=&quot;center&quot;&gt;我是默认值,当使用者没有传递数据时，我会显示&lt;/slot&gt;
		&lt;/div&gt;
	&lt;template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.作用域插槽</p><p>​ 1.理解：数据存在于组件自身，但是数据的结构（展现方式）可以根据组件的使用者来定义</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>父组件中：
	&lt;Category&gt;

		&lt;template scope=&quot;data&quot;&gt;
			{{data}}data接收的是一个对象
			&lt;ul&gt;
				&lt;li v-for=&quot;(item,index) in data.xxx&quot; :key=&quot;index&quot;&gt;&lt;/li&gt;
			&lt;/ul&gt;
		&lt;template&gt;
	&lt;/Category&gt;

子组件中：
&lt;template&gt;
    &lt;div&gt;
        &lt;slot :games=&quot;games&quot;&gt;我是默认值,当使用者没有传递数据时，我会显示&lt;/slot&gt;
    &lt;/div&gt;
&lt;template&gt;

&lt;script&gt;
	export default{
		name:&quot;Category&quot;,
		data(){
			return{
				games:[&#39;CF&#39;,&#39;LOL&#39;,&#39;DNF&#39;,&#39;cs&#39;]
			}
		}
	}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h2><p><strong>1.概念</strong></p><p>​ 在 vue 中实现集中式状态（数据）管理的一个 vue 插件，对 vue 应用中多个组件的共享状态进行集中式管理（读/写），也是一种组件间的通信方式，且适用于任意组件之间的通信</p><p><strong>2.如何使用</strong></p><p>多个组件需要共享数据时</p><p><strong>3.环境搭建</strong></p><p>​ 1.创建文件：<code>src/store/index.js</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vuex
import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;
Vue.use(Vuex)
//准备actions，actions用于响应各个组件中的事件
const actions = {}

//准备mutations，mutations用于操作数据的状态
const mutations = {}

//准备state，state用于存储数据
const state = {}

//创建store简写
const store = new Vuex.Store({
  actions,
  mutations,
  state,
})

//导出store
export default store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.在<code>main.js</code>中创建 vm 时传入<code>store</code>配置项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vue
import Vue from &#39;vue&#39;
//引入app
import App from &#39;./App.vue&#39;

//引入store
import store from &#39;./store/index&#39;

new Vue({
  el:&#39;#app&#39;,
  render:h=&gt;h(App),
  store,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.基本使用</strong></p><p>​ 1.初始化数据、配置<code>actions、mutations</code>，操作文件<code>store.js</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//引入Vuex
import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;
Vue.use(Vuex)
//准备actions，actions用于响应各个组件中的事件
const actions = {
  oddJia(context,value){
    if(context.state.sum % 2){
      context.commit(&#39;ODDJIA&#39;,value)
    }

  },
  waitJia(context,value){
    setTimeout(()=&gt;{
      context.commit(&#39;WAITJIA&#39;,value)
    },500)
  }
}

//准备mutations，mutations用于操作数据的状态
const mutations = {
  JIA(state,value){
    state.sum += value
  },
  JIAN(state,value){
    state.sum -= value
  },
  ODDJIA(state,value){
    state.sum += value
  },
  WAITJIA(state,value){
    state.sum += value
  }
}

//准备state，state用于存储数据
const state = {
  sum:0,
}


//创建store简写
const store = new Vuex.Store({
  actions,
  mutations,
  state,
})

//导出store
export default store

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.组件中读取 vuex 的数据：<code>this.$store.state.sum</code></p><p>​ 3.组件中修改 vuex 的数据：<code>this.$store.dispatch(&#39;actions中的方法名&#39;,需要传递的数据)</code>或<code>this.$store.commit(&#39;mutations中的方法名，需要传递的数据&#39;)</code></p><p>​ <strong>备注：</strong></p><p>​ 若没有网络请求或其他的业务逻辑，组件也可以越过 actions，不用写 dispatch，直接编写 commit</p><p><strong>5.getters 属性</strong></p><p>​ 1.概念：当 state 中的数据需要加工后再使用时，可以使用 getters 加工</p><p>​ 2.在<code>$store.js</code>中追加<code>getters</code>配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...

//准备一个getters，用于加工state中的数据
const getters ={
  bigSum(state){
    return state.sum * 10
  }

 //创建并暴露（导出）store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters

})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.组件中读取<code>$store.getters.bigSum</code></p><p><strong>6.四个 map 方法的使用</strong></p><p>​ 1.<code>mapState</code>方法:用于帮助我们映射<code>state</code>中的数据为计算属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import {mapState} from &#39;vuex&#39;
computed:{
//借助mapState属性生成计算属性sum name subject（对象写法）
  ...mapState({sum:&#39;sum&#39;,name:&#39;name&#39;,subject:&#39;subject&#39;})

//借助mapState属性生成计算属性sum name subject（数组写法/简写）
  ...mapState([&#39;sum&#39;,&#39;name&#39;,&#39;subject&#39;]),
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>​ 2.<code>mapGetters</code>方法：用于帮助我们映射<code>getters</code>中的数据为计算属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import {mapGetters} from &#39;vuex&#39;
computed:{
//借助mapGetters属性生成计算属性sum name subject（对象写法）
  ...mapGetters({sum:&#39;sum&#39;,name:&#39;name&#39;,subject:&#39;subject&#39;})

//借助mapGetters属性生成计算属性sum name subject（数组写法/简写）
  ...mapGetters([&#39;sum&#39;,&#39;name&#39;,&#39;subject&#39;]),
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.<code>mapActions</code>方法：用于帮助我们生成与<code>actions</code>对话的方法，即包含<code>$store.dispatch(xxx)</code>的函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import {mapActions} from &#39;vuex&#39;
methods:{

//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
  ...mapActions({incrementOdd:&#39;oddJia&#39;,incrementWait:&#39;waitJia&#39;}),

//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
// ...mapActions([&#39;oddJia&#39;,&#39;waitJia&#39;])

}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 4.<code>mapMutations</code>方法：用于帮助我们生成与<code>mutations</code>对话的方法，即包含<code>$store.commit(xxx)</code>的函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
import {mapMutations} from &#39;vuex&#39;
methods:{

  //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
  ...mapMutations({increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;}),
  /* 以上代码生成的代码等同于下面的两个方法，和原本我们写的方法有点区别，这里的value值得注意：
  由于在template模板标签里面写的是@click=&quot;increment&quot;，这种写法虽然没有传参，但是默认是传参的且传的参数是eventMouse鼠标事件
  所以想要把传的参数改为我想要的n，就需要在原本的@click=&quot;increment&quot;谢成@click=&quot;increment（n）&quot;带参数的形式
  */

  //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
  //注意对应的@click事件中的方法名也要改成‘JIA（n）’和‘JIAN（n）’
  // ...mapMutations([&#39;JIA&#39;,&#39;JIAN&#39;]),
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p><p>​ mapActions 与 mapMutations 在传递数据时，需要在模板中调用方法是写好要传递的参数，否则传递的是事件对象</p><p><strong>7.模块化+命名空间</strong></p><p>​ 1.目的：让代码更好维护，让多种数据分类更加明确</p><p>​ 2.修改<code>store.js</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const countAbout = {
namespaced:true,//开启命名空间
actions:{},
mutations:{},
state:{},
getters:{}
}

const countAbout = {
namespaced:true,//开启命名空间
actions:{},
mutations:{},
state:{},
getters:{}
}

export default new Vuex.Store{
	modules:{
	countAbout,
	personAbout
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.开启命名空间后，组件读取 state 中的数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一：直接自己读取
this.$store.state.personList
//方式二：借助mapState读取
...mapState{&#39;countAbout&#39;,[&#39;sum&#39;,&#39;name&#39;,&#39;subject&#39;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 4.开启命名空间后，组件读取 getters 中的数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一：直接自己读取
this.$store.getters[&#39;personAbout/firstPersonName&#39;]
//方式二：借助mapGetters读取
...mapGetters{&#39;countAbout&#39;,[&#39;bigSum&#39;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 5.开启命名空间后，组件调用 dispatch：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一：自己直接dispatch
this.$store.dispatch[&#39;personAbout/firstPersonName&#39;，person]
//方式二：借助mapActions
...mapActions(&#39;countAbout&#39;,{incrementOdd:&#39;oddJia&#39;,incrementWait:&#39;waitJia&#39;}),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 6.开启命名空间后，组件调用 commit：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//方式一：自己直接commit
this.$store.commit(&#39;personAbout/ADD_PERSON&#39;,personObj)
//方式二：借助mapMutations
...mapMutations(&#39;countAbout&#39;,{increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><p><strong>1.基本使用</strong></p><p>​ 1.安装 vue-router，命令：<code>npm i vue-router</code></p><p>​ 2.应用插件：<code>Vue.use(VueRouter)</code></p><p>​ 3.编写 router 配置项（创建 router 文件夹并在该文件夹下创建 index.js 文件）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import About from &#39;../components/About.vue&#39;
import Home from &#39;../components/Home.vue&#39;

//创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:&#39;/about&#39;,
      component:About
    },
    {
      path:&#39;/home&#39;,
      component:Home
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 4.实现切换（active-class 可实现展示当前组件时的样式）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-link class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/about&quot;&gt;About&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 5.指定展示位置（类似于插槽）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-view&gt;&lt;/router-view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.几个注意点</strong></p><p>​ 1.路由组件通常存放在<code>pages</code>文件夹，一般组件通常存放在<code>computed</code>文件夹</p><p>​ 2.通过切换，“隐藏”的路由组件，默认是被销毁的，需要的时候再去挂载</p><p>​ 3.每个组件都有自己的<code>$route</code>属性，里面存储这自己的路由信息</p><p>​ 3.整个应用只有一个 router，可以通过组件的<code>$router</code>属性获取到</p><p><strong>3.多极路由</strong></p><p>​ 1.配置规则，使用 children 配置项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from &quot;vue-router&quot;;
//引入组件
import About from &#39;../pages/About.vue&#39;
import Home from &#39;../pages/Home.vue&#39;
import News from &#39;../pages/News.vue&#39;
import Message from &#39;../pages/Message.vue&#39;

//创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:&#39;/about&#39;,
      component:About
    },
    {
      path:&#39;/home&#39;,
      component:Home,
      children:[//通过children配置项配置子级路由
        {
          path:&#39;news&#39;,//此处一定不要写/news
          component:News
        },
        {
          path:&#39;message&#39;,//此处一定不要写/message
          component:Message
        }
      ]
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.跳转（要洗完整路径）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-link to=&quot;/home/news&quot;&gt;News&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4.路由的 query 参数</strong></p><p>​ 1.传递参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 跳转路由并携带Query参数,to的字符串写法 --&gt;
        &lt;!-- &lt;router-link :to=&quot;\`/home/message/detail?id=\${messageList[0].id}&amp;title=\${messageList[0].title}\`&quot;&gt;message002&lt;/router-link&gt;&amp;nbsp;&amp;nbsp; --&gt;

        &lt;!-- 跳转路由并携带Query参数,to的对象写法 --&gt;
        &lt;router-link :to=&quot;{
          path:&#39;/home/message/detail&#39;,
          query:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }&quot;&gt;
          message002
        &lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.接受参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$route.query.id
$route.query.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.命名路由</strong></p><p>​ 1.作用：可以简化路由的跳转</p><p>​ 2.如何使用</p><p>​ 1.给路由命名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
      name:&#39;guanyu&#39;,
      path:&#39;/about&#39;,
      component:About
    },
    {
      path:&#39;/home&#39;,
      component:Home,
      children:[
        {
          path:&#39;news&#39;,
          component:News
        },
        {
          path:&#39;message&#39;,
          component:Message,
          children:[
            {
              name:&#39;xiangqing&#39;,
              path:&#39;detail&#39;,
              component:Detail
            }
          ]
        }
      ]
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.简化跳转</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 简化前，需要写完整的路径 --&gt;
&lt;router-link  to=&quot;/about/news/detail&quot;&gt;About&lt;/router-link&gt;

&lt;!-- 简化后，直接通过名字跳转 --&gt;
&lt;router-link  :to=&quot;{name:&#39;xiangqing&#39;}&quot;&gt;About&lt;/router-link&gt;

&lt;!-- 简化写法配合Query参数 --&gt;
&lt;router-link :to=&quot;{
          name:&#39;xiangqing&#39;,
          query:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }&quot;&gt;
          message002
&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.路由的 params 参数</strong></p><p>​ 1.配置路由，声明接受 params 参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> {
      path:&#39;/home&#39;,
      component:Home,
      children:[
        {
          path:&#39;news&#39;,
          component:News
        },
        {
          path:&#39;message&#39;,
          component:Message,
          children:[
            {
              name:&#39;xiangqing&#39;,
              path:&#39;detail/:id/:title&#39;,//:id和:title表示占位符，告诉detail路径后面的两个不是路径而是params参数
              component:Detail
            }
          ]
        }
      ]
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.传递参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 跳转并携带params参数，to的字符串写法 --&gt;
&lt;router-link :to=&quot;/home/message/detail/666/nihao&quot;&gt;message001&lt;/router-link&gt;

&lt;!-- 跳转并携带params参数，to的对象写法 --&gt;
&lt;router-link :to=&quot;{
          name:&#39;xiangqing&#39;,
          params:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }&quot;&gt;
          message002
&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ <strong>注意：</strong></p><p>​ 路由携带 params 参数是，若使用 to 的对象写法，则不能使用 path 配置项，必须使用 name 配置</p><p>​ 3.接收参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$route.params.id
$route.params.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.路由的 props 配置</strong></p><p>​ 作用：让路由组件更方便的收到参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> name:&#39;xiangqing&#39;,
              path:&#39;detail/:id/:title&#39;,//:id和:title表示占位符，告诉detail路径后面的两个不是路径而是params参数
              component:Detail,

              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
              // props:{a:1,b:&#39;hello&#39;}

              //props的第二种写法，值为布尔值
              // 若值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
              // props:true

              //props的第三种写法，值为函数
                props($route){
                // return {id:&#39;666&#39;,title:&#39;你好啊&#39;}
                return {id:$route.query.id,title:$route.query.title}
              },
              //解构赋值的连续写法
        /*       props({query:{id,title}}){
                return {id,title}
              } */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8.<code>&lt;router-link&gt;</code>的 replace 属性</strong></p><p>​ 1.作用：控制路由跳转时操作浏览器历史记录的模式（默认是 push 模式，可以后退）</p><p>​ 2.浏览器的历史记录有两种写入方式：分别为<code>push</code>和<code>replace</code>，push 是追加历史记录，replace 是替换当前记录。路由跳转时候默认为 push</p><p>​ 3.开启 replace 模式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-link :replace=&quot;true&quot; &gt;开启replace模式方法一&lt;/router-link&gt;
&lt;router-link replace &gt;开启replace模式方法二&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9.编程式路由导航</strong></p><p>​ 1.作用：不借助<code>&lt;router-link&gt;</code>实现路由跳转，让路由跳转更加灵活</p><p>​ 2.具体编码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>methods:{
  pushShow(){
    this.$router.push({
      name:&#39;xiangqing&#39;,
      params:{
        id:this.messageList[0].id,
        title:this.messageList[0].title
      }
    })
  },
  replaceShow(){
    this.$router.replace({
      name:&#39;xiangqing&#39;,
      params:{
        id:this.messageList[0].id,
        title:this.messageList[0].title
      }
    })
  }
}

 this.$router.back()//后退一步
 this.$router.forward()//前进一步
 this.$router.go(value)//前进/后退指定步数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>10.缓存路由组件</strong></p><p>​ 1.作用：让不展示的路由组件保持挂载，不被销毁</p><p>​ 2.具体编码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 可以缓存keep-alive标签中的组件，在include中说明需要缓存的组件，不说明则全部缓存
    include中写的是组件中的name名字     --&gt;
&lt;!--单个组件--&gt;
&lt;keep-alive include=&quot;News&quot;&gt;
	&lt;router-view&gt;&lt;/router-view&gt;
&lt;/keep-alive&gt;

&lt;!--多个组件--&gt;
&lt;keep-alive :include=&quot;[&#39;News&#39;,&#39;Message&#39;]&quot;&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
&lt;/keep-alive&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>11.两个新的生命周期函数</strong></p><p>​ 1.作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态</p><p>​ 2.具体名字</p><p>​ 1.<code>activated</code>路由组件被激活时触发*（该组件从没有出现==》出现在我面前叫激活）*</p><p>​ 2.<code>deactivated</code></p><p><strong>12.路由守卫</strong></p><p>​ 1.作用：对路由进行权限控制</p><p>​ 2.分类：全局守卫、独享守卫、组件内守卫</p><p>​ 3.全局守卫：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//全局前置路由守卫
//在每一次路由切换之前都会调用一个函数（例如：从About==》Home算一次切换）
//整套（index.js）规则初始化的时候也会调用
router.beforeEach((to,from,next)=&gt;{

  console.log(&#39;前置路由守卫&#39;,to,from);
  //判断是否需要鉴定权限
  if(to.meta.isAuth){
    if(localStorage.getItem(&#39;name&#39;)===&#39;clean&#39;){
      document.title = to.meta.title || &#39;Clean&#39;
      next()//放行
    }else{
      alert(&#39;name不正确！没有权限访问&#39;)
    }
  }else{
    document.title = to.meta.title || &#39;Clean&#39;
    next()//放行
  }

}
)

//后置路由守卫（没有next参数）
//初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=&gt;{
  console.log(&#39;前置路由守卫&#39;,to,from);
  document.title = to.meta.title || &#39;Clean&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 4.独享路由守卫</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> beforeEnter:(to,from,next)=&gt;{
            //判断是否需要鉴定权限
            if(to.meta.isAuth){
              if(localStorage.getItem(&#39;name&#39;)===&#39;clean&#39;){
                document.title = to.meta.title || &#39;Clean&#39;
                next()//放行
              }else{
                alert(&#39;name不正确！没有权限访问&#39;)
              }
            }else{
              document.title = to.meta.title || &#39;Clean&#39;
              next()//放行
            }
          }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 5.组件内路由守卫</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to,from,next){
    if(to.meta.isAuth){
    if(localStorage.getItem(&#39;name&#39;)===&#39;clean&#39;){
      document.title = to.meta.title || &#39;Clean&#39;
      next()//放行
    }else{
      alert(&#39;name不正确！没有权限访问&#39;)
    }
  }else{
    document.title = to.meta.title || &#39;Clean&#39;
    next()//放行
  }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next){

  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>13.路由器的两种工作模式</strong></p><p>​ 1.对于一个 url 来说，什么事 hash 值？————#及其后面的内容就是 hash 值</p><p>​ 2.hash 值不会包括在 HTTP 请求中，即 hash 值不会带给服务器</p><p>​ 3.hash 模式：</p><p>​ 1.地址中永远带着#号，不美观</p><p>​ 2.若以后将地址通过第三方手机 app 分享，若 app 校验严格，则地址会标记为不合法</p><p>​ 3.兼容性较好</p><p>​ 4.history 模式</p><p>​ 1.地址干净，美观</p><p>​ 2.兼容性和 hash 模式相比略差</p><p>​ 3.应用部署上线时需要后端人员支持，解决刷新页面服务端 404 的问题</p>`,166);function v(r,u){return i(),s("div",null,[l,a(" ![image-20220123151308468](C:\\Users\\n'j\\AppData\\Roaming\\Typora\\typora-user-images\\image-20220123151308468.png) "),d])}const o=n(t,[["render",v],["__file","Vue2.html.vue"]]);export{o as default};
