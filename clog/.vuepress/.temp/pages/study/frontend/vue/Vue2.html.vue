<template><div><h1 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> Vue2</h1>
<h2 id="vue-config-js配置文件" tabindex="-1"><a class="header-anchor" href="#vue-config-js配置文件" aria-hidden="true">#</a> vue.config.js配置文件</h2>
<p>使用vue inspect &gt; output.js可以查看到Vue脚手架的默认配置</p>
<p>使用vue.config.js可以对脚手架进行个性化定制</p>
<p>详情见:https://cli.vue.js.org/zh</p>
<h2 id="ref属性" tabindex="-1"><a class="header-anchor" href="#ref属性" aria-hidden="true">#</a> ref属性</h2>
<p>1.被用来给元素或子组件注册引用信息（id的替代者）</p>
<p>2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）</p>
<p>3.使用方法</p>
<p>a.先打标识：<code v-pre>&lt;h1 ref=&quot;XXX&quot;&gt;...&lt;/h1&gt;</code>  或 <code v-pre>&lt;School ref=&quot;XXX&quot;&gt;&lt;/School&gt;</code></p>
<p>b.随后通过<code v-pre>this.$refs.xxx</code>获取dom元素</p>
<h2 id="配置项props" tabindex="-1"><a class="header-anchor" href="#配置项props" aria-hidden="true">#</a> 配置项props</h2>
<p>功能：让组件接受外部传过来的数据</p>
<ul>
<li>
<p>1.传递数据：<code v-pre>&lt;Demo name=&quot;XXX&quot;&gt;</code></p>
</li>
<li>
<p>2.接收数据</p>
<ul>
<li>第一种方式（只接收）：</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>export default{
  props:['name']
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第二种方式(限制类型)：</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>export default{
  props:{
    name:Number
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第三种方式（限制类型、限制必要性、制定默认值）：</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>export default{
  props:{
    name:{
      type:String,//类型
      require:true,//必要性
      default:'老王'//默认值
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">备注</p>
<p>1.props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
若业务需求需要修改，请复制一份到data中，换一个名字，然后写成this.XXX的形式。</p>
<p>2.本身data中不存在数据，即通过props传递过来的数据，最好不要修改，控制台会报错，</p>
<p>3.如果同时存在，会优先显示props中的数据 （props中的数据是优先被接受的，是优先被放在VC上的）
所以可以在data中写myAge:this.age，这样就能实现修改传递过来的数据不报错的情况</p>
</div>
</li>
</ul>
<h2 id="mixin-混入" tabindex="-1"><a class="header-anchor" href="#mixin-混入" aria-hidden="true">#</a> mixin(混入)</h2>
<pre><code>功能：可以把多个组件共用的配置提取成一个混入对象
使用方法：
    第一步，定义混合，例如：
      ｛
        data(){....},
        methods:{...}
      ｝
    
    第二步，使用混入，例如：
     (1)全局混入：Vue.mixin(xxx)
     (2)局部混入：mixins:['xxx']
</code></pre>
<h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>功能：用于增强Vue
本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据。
定义插件：
对象.install=function（Vue,options）｛｝
使用插件：Vue.install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结todolist案例" tabindex="-1"><a class="header-anchor" href="#总结todolist案例" aria-hidden="true">#</a> 总结ToDoList案例</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1.组件化编码流程：
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webstorage" tabindex="-1"><a class="header-anchor" href="#webstorage" aria-hidden="true">#</a> webStorage</h2>
<p>1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）</p>
<p>2.浏览器端通过Windows.sessionStorage和Windows.localStorage属性来实现本地存储机制。</p>
<p>3.相关API：</p>
<p>​		1.<code v-pre>xxxxStorage.setItem('key','value');</code></p>
<p>​			该方法接受一个值和键作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值</p>
<p>​		2.<code v-pre>xxxxStorage.getItem(person);</code></p>
<p>​			该方法接受一个键名作为参数，返回键名对应的值</p>
<p>​		3.<code v-pre>xxxxStorage.removeItem('key');</code></p>
<p>​			该方法接受一个值和键作为参数，并把该键名从存储中删除</p>
<p>​		4.<code v-pre>xxxxStorage.clearItem();</code></p>
<p>​			该方法会清空存储中的所有数据</p>
<p>4.备注：</p>
<p>​		1.SessionStorage存储的内容会随着浏览器串口关闭而消失</p>
<p>​		2.LocalStorage存储的内容，需要手动清除才会消失</p>
<p>​		3.<code v-pre>xxxxStorage.getItem(xxx);</code>如果xxx对应的value获取不到，那么getitem的返回值是null</p>
<p>​		4.<code v-pre>JSON.parse(null)</code>的结果依然是null</p>
<h2 id="组件的自定义事件" tabindex="-1"><a class="header-anchor" href="#组件的自定义事件" aria-hidden="true">#</a> 组件的自定义事件</h2>
<p>1.一种组件间通信的方式，适用于：子组件==》父组件</p>
<p>2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件<code v-pre>（事件的回调在A中）</code></p>
<p>3.绑定自定义事件：</p>
<p>​		1.第一种方式：在父组件中：<code v-pre>&lt;Demo @clean=&quot;show&quot;/&gt;&quot;</code>或<code v-pre>&lt;Demo v-on:clean=&quot;show&quot;/&gt;&quot;</code></p>
<p>​		2.第二种方式：在父组件中：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;Demo ref="demo"/>
...
mouted(){
this.$refs.xxx.$on('clean',this.show)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		3.若想让事件只触发一次，可以使用once修饰符，或者$once方法</p>
<p>4.触发自定义事件：<code v-pre>this.$emit('clean',需要传递的参数)</code></p>
<p>5.解绑自定义事件：<code v-pre>this.$off('clean')</code></p>
<p>6.组件上也可以绑定原生DOM事件，需要使用<code v-pre>.native</code>修饰符</p>
<p>7.注意：通过<code v-pre>this.$refs.$emit.('clean',回调)</code>绑定自定义事件时，回调要么配置在methods中,要么用箭头函数，否则this指向会出现问题</p>
<h2 id="全局事件总线-globaleventbus" tabindex="-1"><a class="header-anchor" href="#全局事件总线-globaleventbus" aria-hidden="true">#</a> 全局事件总线（GlobalEventBus）</h2>
<p>​	1.一种组件间通信的方式，适用于任意组件间通信</p>
<p>​	2.安装全局事件总线：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus<span class="token operator">=</span><span class="token keyword">this</span><span class="token comment">//安装全局事件总线,$bus就是当前应用的vm</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.使用事件总线：</p>
<p>​		1.接收数据：A组件想要接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token operator">...</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'eventName'</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		2.提供数据：<code v-pre>this.$bus.$emit('eventName',需要传递的数据)</code></p>
<p>4.最好在beforeDestroy钩子中,用$off去解绑当前组件所用到的时间</p>
<h2 id="消息订阅与发布" tabindex="-1"><a class="header-anchor" href="#消息订阅与发布" aria-hidden="true">#</a> 消息订阅与发布</h2>
<p>安装消息订阅的组件库，安装命令（有好几个消息订阅与发布的组件库，不一定用这个，只是语法不一样）</p>
<p><code v-pre>npm i pubsub-js</code></p>
<p>1.是一种组件间通信的方式，适用于任意组件间通信</p>
<p>2.使用步骤：</p>
<p>​	1.安装pubsub:<code v-pre>npm i pubsub-js</code></p>
<p>​    2.引入：<code v-pre>import pubsub from 'pubsub-js'</code></p>
<p>​	3.接受数据：A组件想接受数据，则在A组件中订阅消息，订阅的回调留在A组件自身</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pubId <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">'xxx'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>demo<span class="token punctuation">)</span><span class="token comment">//订阅消息</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	4.提供数据：<code v-pre>pubsub.publish('xxx',数据)</code></p>
<p>​	5.最好在beforeDestroy钩子中，用<code v-pre>pubsub.unsubscribe(this.pubId)</code>去<span style='color:red'>取消订阅</span></p>
<h2 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h2>
<p>1.语法：<code v-pre>this.$nextTick(callback</code></p>
<p>2.作用：在下一次DOM更新结束后执行其指定的回调</p>
<p>3.什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行</p>
<h2 id="vue封装的过渡与动画" tabindex="-1"><a class="header-anchor" href="#vue封装的过渡与动画" aria-hidden="true">#</a> Vue封装的过渡与动画</h2>
<p>1.作用:在插入、更新或移除DOM元素时,在合适的时候给元素添加样式类名</p>
<p>2.图示:</p>
<!-- ![image-20220123151308468](C:\Users\n'j\AppData\Roaming\Typora\typora-user-images\image-20220123151308468.png) -->
<p>3.写法:</p>
<p>​			1.准备好样式:</p>
<p>​					·元素进入的样式:</p>
<p>​							1.v-enter:进入的起点</p>
<p>​							2.v-enter-active:进入的过程中</p>
<p>​							3.v-enter-to:进入的终点</p>
<p>​				   ·元素离开的样式:</p>
<p>​							1.v-leave:离开的起点</p>
<p>​							2.v-leave-active：离开过程中</p>
<p>​							3.v-leave-to：离开的终点</p>
<p>​			2.使用<code v-pre>&lt;transition&gt;</code>包裹过渡的元素,并配置name属性:</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hello<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isShow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        你好！
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">></span></span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​			3.备注:若有多个元素需要过渡,则需要使用<code v-pre>&lt;transition-group&gt;</code>，且每个元素都要指定key值,例如<code v-pre>:key=&quot;1&quot;</code></p>
<h2 id="vue脚手架配置代理" tabindex="-1"><a class="header-anchor" href="#vue脚手架配置代理" aria-hidden="true">#</a> Vue脚手架配置代理</h2>
<p><strong>方法一</strong></p>
<p>在vue.config.js中添加如下配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>devServer:{
proxy:"http://localhost:5000"
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<p>​		1.优点：配置简单,请求资源时直接发给前端(8080)即可。</p>
<p>​		2.缺点:不能配置多个代理,不能灵活的控制请求是否走代理</p>
<p>​		3.工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先匹配前端资源）</p>
<p><strong>方法二</strong></p>
<p>编写vue.config.js配置具体代理规则</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>module.exports = {
  devServer: {
    proxy: {
      '/api1': {//匹配所有以'/api1'开头的请求路径
        target: 'http：//localhost:5000',//代理目标的基础路径
        ws: true,
        changeOrigin: true
        pathRewrite:{'^/api1':''}//重写转发给服务器的资源请求路径，将'/api1'开头的路径改为''(空)
      },
      '/foo': {
        target: '&lt;other_url>'
      }
    }
  }
}
/*
	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:8080
	changeOrigin默认值为true
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<p>​		1.优点：可以配置多个大力，且可以灵活的控制请求头是否走代理</p>
<p>​		2.缺点：配置略微繁琐，求情资源时必须加前缀。</p>
<h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2>
<p>1.作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件====》子组件(组件的使用者)</p>
<p>2.分类：默认插槽、具名插槽、作用域插槽</p>
<p>3.使用方式：</p>
<p>​		1.默认插槽</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>父组件中：
	&lt;Category>
		&lt;div>html结构&lt;/div>
	&lt;/Category>

子组件中：
	&lt;template>
		&lt;div>
			&lt;slot>我是默认值,当使用者没有传递数据时，我会显示&lt;/slot>
		&lt;/div>
	&lt;template>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		2.具名插槽</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>父组件中：
	&lt;Category>
		&lt;div slot="center">html结构&lt;/div>
		&lt;template slot="center" 或 v-slot:center>
			&lt;div>
			
			&lt;/div>
		&lt;template>
	&lt;/Category>

子组件中：
	&lt;template>
		&lt;div>
			&lt;slot name="center">我是默认值,当使用者没有传递数据时，我会显示&lt;/slot>
		&lt;/div>
	&lt;template>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​		3.作用域插槽</p>
<p>​			1.理解：数据存在于组件自身，但是数据的结构（展现方式）可以根据组件的使用者来定义</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>父组件中：
	&lt;Category>
	
		&lt;template scope="data">
			{{data}}data接收的是一个对象
			&lt;ul>
				&lt;li v-for="(item,index) in data.xxx" :key="index">&lt;/li>
			&lt;/ul>
		&lt;template>
	&lt;/Category>
	
子组件中：
&lt;template>
    &lt;div>
        &lt;slot :games="games">我是默认值,当使用者没有传递数据时，我会显示&lt;/slot>
    &lt;/div>
&lt;template>

&lt;script>
	export default{
		name:"Category",
		data(){
			return{
				games:['CF','LOL','DNF','cs']
			}
		}
	}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h2>
<p><strong>1.概念</strong></p>
<p>​	在vue中实现集中式状态（数据）管理的一个vue插件，对vue应用中多个组件的共享状态进行集中式管理（读/写），也是一种组件间的通信方式，且适用于任意组件之间的通信</p>
<p><strong>2.如何使用</strong></p>
<p>多个组件需要共享数据时</p>
<p><strong>3.环境搭建</strong></p>
<p>​	1.创建文件：<code v-pre>src/store/index.js</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	2.在<code v-pre>main.js</code>中创建vm时传入<code v-pre>store</code>配置项</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//引入Vue
import Vue from 'vue'
//引入app
import App from './App.vue'

//引入store
import store from './store/index'

new Vue({
  el:'#app',
  render:h=>h(App),
  store,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.基本使用</strong></p>
<p>​	1.初始化数据、配置<code v-pre>actions、mutations</code>，操作文件<code v-pre>store.js</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//引入Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//准备actions，actions用于响应各个组件中的事件
const actions = {
  oddJia(context,value){
    if(context.state.sum % 2){
      context.commit('ODDJIA',value)
    }
    
  },
  waitJia(context,value){
    setTimeout(()=>{
      context.commit('WAITJIA',value)
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	2.组件中读取vuex的数据：<code v-pre>this.$store.state.sum</code></p>
<p>​	3.组件中修改vuex的数据：<code v-pre>this.$store.dispatch('actions中的方法名',需要传递的数据)</code>或<code v-pre>this.$store.commit('mutations中的方法名，需要传递的数据')</code></p>
<p>​	<strong>备注：</strong></p>
<p>​		若没有网络请求或其他的业务逻辑，组件也可以越过actions，不用写dispatch，直接编写commit</p>
<p><strong>5.getters属性</strong></p>
<p>​	1.概念：当state中的数据需要加工后再使用时，可以使用getters加工</p>
<p>​	2.在<code v-pre>$store.js</code>中追加<code v-pre>getters</code>配置</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>...

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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	3.组件中读取<code v-pre>$store.getters.bigSum</code></p>
<p><strong>6.四个map方法的使用</strong></p>
<p>​	1.<code v-pre>mapState</code>方法:用于帮助我们映射<code v-pre>state</code>中的数据为计算属性</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
import {mapState} from 'vuex'
computed:{
//借助mapState属性生成计算属性sum name subject（对象写法） 
  ...mapState({sum:'sum',name:'name',subject:'subject'})
  
//借助mapState属性生成计算属性sum name subject（数组写法/简写） 
  ...mapState(['sum','name','subject']),
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>
<p>​	2.<code v-pre>mapGetters</code>方法：用于帮助我们映射<code v-pre>getters</code>中的数据为计算属性</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
import {mapGetters} from 'vuex'
computed:{
//借助mapGetters属性生成计算属性sum name subject（对象写法） 
  ...mapGetters({sum:'sum',name:'name',subject:'subject'})
  
//借助mapGetters属性生成计算属性sum name subject（数组写法/简写） 
  ...mapGetters(['sum','name','subject']),
}
&lt;/script>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	3.<code v-pre>mapActions</code>方法：用于帮助我们生成与<code v-pre>actions</code>对话的方法，即包含<code v-pre>$store.dispatch(xxx)</code>的函数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
import {mapActions} from 'vuex'
methods:{

//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
  ...mapActions({incrementOdd:'oddJia',incrementWait:'waitJia'}),

//借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
// ...mapActions(['oddJia','waitJia'])

}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	4.<code v-pre>mapMutations</code>方法：用于帮助我们生成与<code v-pre>mutations</code>对话的方法，即包含<code v-pre>$store.commit(xxx)</code>的函数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;script>
import {mapMutations} from 'vuex'
methods:{

  //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
  ...mapMutations({increment:'JIA',decrement:'JIAN'}),
  /* 以上代码生成的代码等同于下面的两个方法，和原本我们写的方法有点区别，这里的value值得注意：
  由于在template模板标签里面写的是@click="increment"，这种写法虽然没有传参，但是默认是传参的且传的参数是eventMouse鼠标事件
  所以想要把传的参数改为我想要的n，就需要在原本的@click="increment"谢成@click="increment（n）"带参数的形式
  */

  //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
  //注意对应的@click事件中的方法名也要改成‘JIA（n）’和‘JIAN（n）’
  // ...mapMutations(['JIA','JIAN']),
}
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备注：</strong></p>
<p>​	mapActions与mapMutations在传递数据时，需要在模板中调用方法是写好要传递的参数，否则传递的是事件对象</p>
<p><strong>7.模块化+命名空间</strong></p>
<p>​	1.目的：让代码更好维护，让多种数据分类更加明确</p>
<p>​	2.修改<code v-pre>store.js</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const countAbout = {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	3.开启命名空间后，组件读取state中的数据：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//方式一：直接自己读取
this.$store.state.personList
//方式二：借助mapState读取
...mapState{'countAbout',['sum','name','subject']}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	4.开启命名空间后，组件读取getters中的数据：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//方式一：直接自己读取
this.$store.getters['personAbout/firstPersonName']
//方式二：借助mapGetters读取
...mapGetters{'countAbout',['bigSum']}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	5.开启命名空间后，组件调用dispatch：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//方式一：自己直接dispatch
this.$store.dispatch['personAbout/firstPersonName'，person]
//方式二：借助mapActions
...mapActions('countAbout',{incrementOdd:'oddJia',incrementWait:'waitJia'}),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	6.开启命名空间后，组件调用commit：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//方式一：自己直接commit
this.$store.commit('personAbout/ADD_PERSON',personObj)
//方式二：借助mapMutations
...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<p><strong>1.基本使用</strong></p>
<p>​	1.安装vue-router，命令：<code v-pre>npm i vue-router</code></p>
<p>​	2.应用插件：<code v-pre>Vue.use(VueRouter)</code></p>
<p>​	3.编写router配置项（创建router文件夹并在该文件夹下创建index.js文件）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'

//创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	4.实现切换（active-class可实现展示当前组件时的样式）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;router-link class="list-group-item" active-class="active" to="/about">About&lt;/router-link>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​	5.指定展示位置（类似于插槽）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;router-view>&lt;/router-view>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.几个注意点</strong></p>
<p>​	1.路由组件通常存放在<code v-pre>pages</code>文件夹，一般组件通常存放在<code v-pre>computed</code>文件夹</p>
<p>​	2.通过切换，“隐藏”的路由组件，默认是被销毁的，需要的时候再去挂载</p>
<p>​	3.每个组件都有自己的<code v-pre>$route</code>属性，里面存储这自己的路由信息</p>
<p>​	3.整个应用只有一个router，可以通过组件的<code v-pre>$router</code>属性获取到</p>
<p><strong>3.多极路由</strong></p>
<p>​	1.配置规则，使用children配置项</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'

//创建一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[//通过children配置项配置子级路由
        {
          path:'news',//此处一定不要写/news
          component:News
        },
        {
          path:'message',//此处一定不要写/message
          component:Message
        }
      ]
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	2.跳转（要洗完整路径）</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;router-link to="/home/news">News&lt;/router-link>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4.路由的query参数</strong></p>
<p>​	1.传递参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- 跳转路由并携带Query参数,to的字符串写法 -->
        &lt;!-- &lt;router-link :to="`/home/message/detail?id=${messageList[0].id}&amp;title=${messageList[0].title}`">message002&lt;/router-link>&amp;nbsp;&amp;nbsp; -->

        &lt;!-- 跳转路由并携带Query参数,to的对象写法 -->
        &lt;router-link :to="{
          path:'/home/message/detail',
          query:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }">
          message002
        &lt;/router-link>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	2.接受参数：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$route.query.id
$route.query.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.命名路由</strong></p>
<p>​	1.作用：可以简化路由的跳转</p>
<p>​	2.如何使用</p>
<p>​		1.给路由命名：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
      name:'guanyu',
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'xiangqing',
              path:'detail',
              component:Detail
            }
          ]
        }
      ]
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​			2.简化跳转</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- 简化前，需要写完整的路径 -->
&lt;router-link  to="/about/news/detail">About&lt;/router-link> 
          
&lt;!-- 简化后，直接通过名字跳转 -->
&lt;router-link  :to="{name:'xiangqing'}">About&lt;/router-link>

&lt;!-- 简化写法配合Query参数 -->
&lt;router-link :to="{
          name:'xiangqing',
          query:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }">
          message002
&lt;/router-link>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.路由的params参数</strong></p>
<p>​	1.配置路由，声明接受params参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> {
      path:'/home',
      component:Home,
      children:[
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message,
          children:[
            {
              name:'xiangqing',
              path:'detail/:id/:title',//:id和:title表示占位符，告诉detail路径后面的两个不是路径而是params参数
              component:Detail
            }
          ]
        }
      ]
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	2.传递参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- 跳转并携带params参数，to的字符串写法 -->
&lt;router-link :to="/home/message/detail/666/nihao">message001&lt;/router-link>

&lt;!-- 跳转并携带params参数，to的对象写法 -->
&lt;router-link :to="{
          name:'xiangqing',
          params:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }">
          message002
&lt;/router-link>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	<strong>注意：</strong></p>
<p>​		路由携带params参数是，若使用to的对象写法，则不能使用path配置项，必须使用name配置</p>
<p>​	3.接收参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$route.params.id
$route.params.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.路由的props配置</strong></p>
<p>​	作用：让路由组件更方便的收到参数</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> name:'xiangqing',
              path:'detail/:id/:title',//:id和:title表示占位符，告诉detail路径后面的两个不是路径而是params参数
              component:Detail,

              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件
              // props:{a:1,b:'hello'}

              //props的第二种写法，值为布尔值
              // 若值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
              // props:true

              //props的第三种写法，值为函数
                props($route){
                // return {id:'666',title:'你好啊'}
                return {id:$route.query.id,title:$route.query.title}
              }, 
              //解构赋值的连续写法
        /*       props({query:{id,title}}){
                return {id,title}
              } */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8.<code v-pre>&lt;router-link&gt;</code>的replace属性</strong></p>
<p>​	1.作用：控制路由跳转时操作浏览器历史记录的模式（默认是push模式，可以后退）</p>
<p>​	2.浏览器的历史记录有两种写入方式：分别为<code v-pre>push</code>和<code v-pre>replace</code>，push是追加历史记录，replace是替换当前记录。路由跳转时候默认为push</p>
<p>​	3.开启replace模式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;router-link :replace="true" >开启replace模式方法一&lt;/router-link>
&lt;router-link replace >开启replace模式方法二&lt;/router-link>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9.编程式路由导航</strong></p>
<p>​	1.作用：不借助<code v-pre>&lt;router-link&gt;</code>实现路由跳转，让路由跳转更加灵活</p>
<p>​	2.具体编码：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>methods:{
  pushShow(){
    this.$router.push({
      name:'xiangqing',
      params:{
        id:this.messageList[0].id,
        title:this.messageList[0].title
      }
    })
  },
  replaceShow(){
    this.$router.replace({
      name:'xiangqing',
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>10.缓存路由组件</strong></p>
<p>​	1.作用：让不展示的路由组件保持挂载，不被销毁</p>
<p>​	2.具体编码</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;!-- 可以缓存keep-alive标签中的组件，在include中说明需要缓存的组件，不说明则全部缓存 
    include中写的是组件中的name名字     -->
&lt;!--单个组件-->
&lt;keep-alive include="News">
	&lt;router-view>&lt;/router-view>
&lt;/keep-alive>

&lt;!--多个组件-->
&lt;keep-alive :include="['News','Message']">
        &lt;router-view>&lt;/router-view>
&lt;/keep-alive>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>11.两个新的生命周期函数</strong></p>
<p>​	1.作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态</p>
<p>​	2.具体名字</p>
<p>​			1.<code v-pre>activated</code>路由组件被激活时触发*（该组件从没有出现==》出现在我面前叫激活）*</p>
<p>​			2.<code v-pre>deactivated</code></p>
<p><strong>12.路由守卫</strong></p>
<p>​	1.作用：对路由进行权限控制</p>
<p>​	2.分类：全局守卫、独享守卫、组件内守卫</p>
<p>​	3.全局守卫：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>//全局前置路由守卫
//在每一次路由切换之前都会调用一个函数（例如：从About==》Home算一次切换）
//整套（index.js）规则初始化的时候也会调用
router.beforeEach((to,from,next)=>{

  console.log('前置路由守卫',to,from);
  //判断是否需要鉴定权限
  if(to.meta.isAuth){
    if(localStorage.getItem('name')==='clean'){
      document.title = to.meta.title || 'Clean'
      next()//放行
    }else{
      alert('name不正确！没有权限访问')
    }
  }else{
    document.title = to.meta.title || 'Clean'
    next()//放行
  }
  
}
)

//后置路由守卫（没有next参数）
//初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
  console.log('前置路由守卫',to,from);
  document.title = to.meta.title || 'Clean'
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	4.独享路由守卫</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> beforeEnter:(to,from,next)=>{
            //判断是否需要鉴定权限
            if(to.meta.isAuth){
              if(localStorage.getItem('name')==='clean'){
                document.title = to.meta.title || 'Clean'
                next()//放行
              }else{
                alert('name不正确！没有权限访问')
              }
            }else{
              document.title = to.meta.title || 'Clean'
              next()//放行
            }
          }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​	5.组件内路由守卫</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to,from,next){
    if(to.meta.isAuth){
    if(localStorage.getItem('name')==='clean'){
      document.title = to.meta.title || 'Clean'
      next()//放行
    }else{
      alert('name不正确！没有权限访问')
    }
  }else{
    document.title = to.meta.title || 'Clean'
    next()//放行
  }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to,from,next){
    
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>13.路由器的两种工作模式</strong></p>
<p>​	1.对于一个url来说，什么事hash值？————#及其后面的内容就是hash值</p>
<p>​	2.hash值不会包括在HTTP请求中，即hash值不会带给服务器</p>
<p>​	3.hash模式：</p>
<p>​		1.地址中永远带着#号，不美观</p>
<p>​		2.若以后将地址通过第三方手机app分享，若app校验严格，则地址会标记为不合法</p>
<p>​		3.兼容性较好</p>
<p>​	4.history模式</p>
<p>​		1.地址干净，美观</p>
<p>​		2.兼容性和hash模式相比略差</p>
<p>​		3.应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题</p>
</div></template>


