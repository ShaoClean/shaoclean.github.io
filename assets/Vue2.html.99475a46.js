import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as s,f as a,d as e}from"./app.419e9cbe.js";const l={},t=e(`<h1 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> Vue2</h1><h2 id="vue-config-js-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#vue-config-js-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> vue.config.js \u914D\u7F6E\u6587\u4EF6</h2><p>\u4F7F\u7528 vue inspect &gt; output.js \u53EF\u4EE5\u67E5\u770B\u5230 Vue \u811A\u624B\u67B6\u7684\u9ED8\u8BA4\u914D\u7F6E</p><p>\u4F7F\u7528 vue.config.js \u53EF\u4EE5\u5BF9\u811A\u624B\u67B6\u8FDB\u884C\u4E2A\u6027\u5316\u5B9A\u5236</p><p>\u8BE6\u60C5\u89C1:https://cli.vue.js.org/zh</p><h2 id="ref-\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#ref-\u5C5E\u6027" aria-hidden="true">#</a> ref \u5C5E\u6027</h2><p>1.\u88AB\u7528\u6765\u7ED9\u5143\u7D20\u6216\u5B50\u7EC4\u4EF6\u6CE8\u518C\u5F15\u7528\u4FE1\u606F\uFF08id \u7684\u66FF\u4EE3\u8005\uFF09</p><p>2.\u5E94\u7528\u5728 html \u6807\u7B7E\u4E0A\u83B7\u53D6\u7684\u662F\u771F\u5B9E DOM \u5143\u7D20\uFF0C\u5E94\u7528\u5728\u7EC4\u4EF6\u6807\u7B7E\u4E0A\u662F\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\uFF08vc\uFF09</p><p>3.\u4F7F\u7528\u65B9\u6CD5</p><p>a.\u5148\u6253\u6807\u8BC6\uFF1A<code>&lt;h1 ref=&quot;XXX&quot;&gt;...&lt;/h1&gt;</code> \u6216 <code>&lt;School ref=&quot;XXX&quot;&gt;&lt;/School&gt;</code></p><p>b.\u968F\u540E\u901A\u8FC7<code>this.$refs.xxx</code>\u83B7\u53D6 dom \u5143\u7D20</p><h2 id="\u914D\u7F6E\u9879-props" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879-props" aria-hidden="true">#</a> \u914D\u7F6E\u9879 props</h2><p>\u529F\u80FD\uFF1A\u8BA9\u7EC4\u4EF6\u63A5\u53D7\u5916\u90E8\u4F20\u8FC7\u6765\u7684\u6570\u636E</p><ul><li><p>1.\u4F20\u9012\u6570\u636E\uFF1A<code>&lt;Demo name=&quot;XXX&quot;&gt;</code></p></li><li><p>2.\u63A5\u6536\u6570\u636E</p><ul><li>\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF08\u53EA\u63A5\u6536\uFF09\uFF1A</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>export default{ props:[&#39;name&#39;] }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E8C\u79CD\u65B9\u5F0F(\u9650\u5236\u7C7B\u578B)\uFF1A</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>export default{ props:{ name:Number } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E09\u79CD\u65B9\u5F0F\uFF08\u9650\u5236\u7C7B\u578B\u3001\u9650\u5236\u5FC5\u8981\u6027\u3001\u5236\u5B9A\u9ED8\u8BA4\u503C\uFF09\uFF1A</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>export default{ props:{ name:{ type:String,//\u7C7B\u578B require:true,//\u5FC5\u8981\u6027
default:&#39;\u8001\u738B&#39;//\u9ED8\u8BA4\u503C } } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">\u5907\u6CE8</p><p>1.props \u662F\u53EA\u8BFB\u7684\uFF0CVue \u5E95\u5C42\u4F1A\u76D1\u6D4B\u4F60\u5BF9 props \u7684\u4FEE\u6539\uFF0C\u5982\u679C\u8FDB\u884C\u4E86\u4FEE\u6539\uFF0C\u5C31\u4F1A\u53D1\u51FA\u8B66\u544A\uFF0C \u82E5\u4E1A\u52A1\u9700\u6C42\u9700\u8981\u4FEE\u6539\uFF0C\u8BF7\u590D\u5236\u4E00\u4EFD\u5230 data \u4E2D\uFF0C\u6362\u4E00\u4E2A\u540D\u5B57\uFF0C\u7136\u540E\u5199\u6210 this.XXX \u7684\u5F62\u5F0F\u3002</p><p>2.\u672C\u8EAB data \u4E2D\u4E0D\u5B58\u5728\u6570\u636E\uFF0C\u5373\u901A\u8FC7 props \u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E\uFF0C\u6700\u597D\u4E0D\u8981\u4FEE\u6539\uFF0C\u63A7\u5236\u53F0\u4F1A\u62A5\u9519\uFF0C</p><p>3.\u5982\u679C\u540C\u65F6\u5B58\u5728\uFF0C\u4F1A\u4F18\u5148\u663E\u793A props \u4E2D\u7684\u6570\u636E \uFF08props \u4E2D\u7684\u6570\u636E\u662F\u4F18\u5148\u88AB\u63A5\u53D7\u7684\uFF0C\u662F\u4F18\u5148\u88AB\u653E\u5728 VC \u4E0A\u7684\uFF09 \u6240\u4EE5\u53EF\u4EE5\u5728 data \u4E2D\u5199 myAge:this.age\uFF0C\u8FD9\u6837\u5C31\u80FD\u5B9E\u73B0\u4FEE\u6539\u4F20\u9012\u8FC7\u6765\u7684\u6570\u636E\u4E0D\u62A5\u9519\u7684\u60C5\u51B5</p></div></li></ul><h2 id="mixin-\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#mixin-\u6DF7\u5165" aria-hidden="true">#</a> mixin(\u6DF7\u5165)</h2><pre><code>\u529F\u80FD\uFF1A\u53EF\u4EE5\u628A\u591A\u4E2A\u7EC4\u4EF6\u5171\u7528\u7684\u914D\u7F6E\u63D0\u53D6\u6210\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61
\u4F7F\u7528\u65B9\u6CD5\uFF1A
    \u7B2C\u4E00\u6B65\uFF0C\u5B9A\u4E49\u6DF7\u5408\uFF0C\u4F8B\u5982\uFF1A
      \uFF5B
        data(){....},
        methods:{...}
      \uFF5D

    \u7B2C\u4E8C\u6B65\uFF0C\u4F7F\u7528\u6DF7\u5165\uFF0C\u4F8B\u5982\uFF1A
     (1)\u5168\u5C40\u6DF7\u5165\uFF1AVue.mixin(xxx)
     (2)\u5C40\u90E8\u6DF7\u5165\uFF1Amixins:[&#39;xxx&#39;]
</code></pre><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u529F\u80FD\uFF1A\u7528\u4E8E\u589E\u5F3AVue
\u672C\u8D28\uFF1A\u5305\u542Binstall\u65B9\u6CD5\u7684\u4E00\u4E2A\u5BF9\u8C61\uFF0Cinstall\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662FVue\uFF0C\u7B2C\u4E8C\u4E2A\u4EE5\u540E\u7684\u53C2\u6570\u662F\u63D2\u4EF6\u4F7F\u7528\u8005\u4F20\u9012\u7684\u6570\u636E\u3002
\u5B9A\u4E49\u63D2\u4EF6\uFF1A
\u5BF9\u8C61.install=function\uFF08Vue,options\uFF09\uFF5B\uFF5D
\u4F7F\u7528\u63D2\u4EF6\uFF1AVue.install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3-todolist-\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-todolist-\u6848\u4F8B" aria-hidden="true">#</a> \u603B\u7ED3 ToDoList \u6848\u4F8B</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.\u7EC4\u4EF6\u5316\u7F16\u7801\u6D41\u7A0B\uFF1A
	\uFF081\uFF09\u62C6\u5206\u9759\u6001\u7EC4\u4EF6\uFF1A\u7EC4\u4EF6\u8981\u6309\u7167\u529F\u80FD\u70B9\u62C6\u5206\uFF0C\u547D\u540D\u4E0D\u8981\u4E0Ehtml\u5143\u7D20\u51B2\u7A81
	\uFF082\uFF09\u5B9E\u73B0\u52A8\u6001\u7EC4\u4EF6\uFF1A\u8003\u8651\u597D\u6570\u636E\u7684\u5B58\u653E\u4F4D\u7F6E\uFF0C\u6570\u636E\u662F\u4E00\u4E2A\u7EC4\u4EF6\u5728\u7528\uFF0C\u8FD8\u662F\u4E00\u4E9B\u7EC4\u4EF6\u5728\u7528
			i\uFF1A\u4E00\u4E2A\u7EC4\u4EF6\u5728\u7528\uFF1A\u653E\u5728\u7EC4\u4EF6\u81EA\u8EAB\u5373\u53EF
			ii\uFF1A\u4E00\u4E9B\u7EC4\u4EF6\u5728\u7528\uFF1A\u653E\u5728\u4ED6\u4EEC\u516C\u5171\u7684\u7236\u7EC4\u4EF6\u4E0A\uFF08\u72B6\u6001\u63D0\u5347\uFF09
    \uFF083\uFF09\u5B9E\u73B0\u4EA4\u4E92\uFF1A\u4ECE\u7ED1\u5B9A\u4E8B\u4EF6\u5F00\u59CB

2.props\u9002\u7528\u4E8E\uFF1A
	\uFF081\uFF09\u7236\u7EC4\u4EF6==\u300B\u5B50\u7EC4\u4EF6 \u901A\u4FE1
	\uFF082\uFF09\u5B50\u7EC4\u4EF6==\u300B\u7236\u7EC4\u4EF6 \u901A\u4FE1\uFF08\u8981\u6C42\u7236\u5148\u4F20\u7ED9\u5B50\u4E00\u4E2A\u51FD\u6570\uFF09

3.\u4F7F\u7528v-model\u65F6\u8981\u5207\u8BB0:v-model\u7ED1\u5B9A\u7684\u503C\u4E0D\u80FD\u662Fprops\u4F20\u8FC7\u6765\u7684\u503C\uFF0C\u56E0\u4E3Aprops\u662F\u4E0D\u53EF\u4EE5\u4FEE\u6539\u7684

4.props\u4F20\u8FC7\u6765\u7684\u5F31\u52BF\u5BF9\u8C61\u7C7B\u578B\u7684\u503C\uFF0C\u4FEE\u6539\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u65F6Vue\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u4E0D\u63A8\u8350\u8FD9\u6837\u505A\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webstorage" tabindex="-1"><a class="header-anchor" href="#webstorage" aria-hidden="true">#</a> webStorage</h2><p>1.\u5B58\u50A8\u5185\u5BB9\u5927\u5C0F\u4E00\u822C\u652F\u6301 5MB \u5DE6\u53F3\uFF08\u4E0D\u540C\u6D4F\u89C8\u5668\u53EF\u80FD\u8FD8\u4E0D\u4E00\u6837\uFF09</p><p>2.\u6D4F\u89C8\u5668\u7AEF\u901A\u8FC7 Windows.sessionStorage \u548C Windows.localStorage \u5C5E\u6027\u6765\u5B9E\u73B0\u672C\u5730\u5B58\u50A8\u673A\u5236\u3002</p><p>3.\u76F8\u5173 API\uFF1A</p><p>\u200B 1.<code>xxxxStorage.setItem(&#39;key&#39;,&#39;value&#39;);</code></p><p>\u200B \u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u503C\u548C\u952E\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4F1A\u628A\u952E\u503C\u5BF9\u6DFB\u52A0\u5230\u5B58\u50A8\u4E2D\uFF0C\u5982\u679C\u952E\u540D\u5B58\u5728\uFF0C\u5219\u66F4\u65B0\u5176\u5BF9\u5E94\u7684\u503C</p><p>\u200B 2.<code>xxxxStorage.getItem(person);</code></p><p>\u200B \u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u952E\u540D\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u952E\u540D\u5BF9\u5E94\u7684\u503C</p><p>\u200B 3.<code>xxxxStorage.removeItem(&#39;key&#39;);</code></p><p>\u200B \u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A\u503C\u548C\u952E\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5E76\u628A\u8BE5\u952E\u540D\u4ECE\u5B58\u50A8\u4E2D\u5220\u9664</p><p>\u200B 4.<code>xxxxStorage.clearItem();</code></p><p>\u200B \u8BE5\u65B9\u6CD5\u4F1A\u6E05\u7A7A\u5B58\u50A8\u4E2D\u7684\u6240\u6709\u6570\u636E</p><p>4.\u5907\u6CE8\uFF1A</p><p>\u200B 1.SessionStorage \u5B58\u50A8\u7684\u5185\u5BB9\u4F1A\u968F\u7740\u6D4F\u89C8\u5668\u4E32\u53E3\u5173\u95ED\u800C\u6D88\u5931</p><p>\u200B 2.LocalStorage \u5B58\u50A8\u7684\u5185\u5BB9\uFF0C\u9700\u8981\u624B\u52A8\u6E05\u9664\u624D\u4F1A\u6D88\u5931</p><p>\u200B 3.<code>xxxxStorage.getItem(xxx);</code>\u5982\u679C xxx \u5BF9\u5E94\u7684 value \u83B7\u53D6\u4E0D\u5230\uFF0C\u90A3\u4E48 getitem \u7684\u8FD4\u56DE\u503C\u662F null</p><p>\u200B 4.<code>JSON.parse(null)</code>\u7684\u7ED3\u679C\u4F9D\u7136\u662F null</p><h2 id="\u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6</h2><p>1.\u4E00\u79CD\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u5F0F\uFF0C\u9002\u7528\u4E8E\uFF1A\u5B50\u7EC4\u4EF6==\u300B\u7236\u7EC4\u4EF6</p><p>2.\u4F7F\u7528\u573A\u666F\uFF1AA \u662F\u7236\u7EC4\u4EF6\uFF0CB \u662F\u5B50\u7EC4\u4EF6\uFF0CB \u60F3\u7ED9 A \u4F20\u6570\u636E\uFF0C\u90A3\u4E48\u5C31\u8981\u5728 A \u4E2D\u7ED9 B \u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6<code>\uFF08\u4E8B\u4EF6\u7684\u56DE\u8C03\u5728A\u4E2D\uFF09</code></p><p>3.\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A</p><p>\u200B 1.\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u5728\u7236\u7EC4\u4EF6\u4E2D\uFF1A<code>&lt;Demo @clean=&quot;show&quot;/&gt;&quot;</code>\u6216<code>&lt;Demo v-on:clean=&quot;show&quot;/&gt;&quot;</code></p><p>\u200B 2.\u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u5728\u7236\u7EC4\u4EF6\u4E2D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Demo ref=&quot;demo&quot;/&gt;
...
mouted(){
this.$refs.xxx.$on(&#39;clean&#39;,this.show)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 3.\u82E5\u60F3\u8BA9\u4E8B\u4EF6\u53EA\u89E6\u53D1\u4E00\u6B21\uFF0C\u53EF\u4EE5\u4F7F\u7528 once \u4FEE\u9970\u7B26\uFF0C\u6216\u8005$once \u65B9\u6CD5</p><p>4.\u89E6\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A<code>this.$emit(&#39;clean&#39;,\u9700\u8981\u4F20\u9012\u7684\u53C2\u6570)</code></p><p>5.\u89E3\u7ED1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF1A<code>this.$off(&#39;clean&#39;)</code></p><p>6.\u7EC4\u4EF6\u4E0A\u4E5F\u53EF\u4EE5\u7ED1\u5B9A\u539F\u751F DOM \u4E8B\u4EF6\uFF0C\u9700\u8981\u4F7F\u7528<code>.native</code>\u4FEE\u9970\u7B26</p><p>7.\u6CE8\u610F\uFF1A\u901A\u8FC7<code>this.$refs.$emit.(&#39;clean&#39;,\u56DE\u8C03)</code>\u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u65F6\uFF0C\u56DE\u8C03\u8981\u4E48\u914D\u7F6E\u5728 methods \u4E2D,\u8981\u4E48\u7528\u7BAD\u5934\u51FD\u6570\uFF0C\u5426\u5219 this \u6307\u5411\u4F1A\u51FA\u73B0\u95EE\u9898</p><h2 id="\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF-globaleventbus" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF-globaleventbus" aria-hidden="true">#</a> \u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF08GlobalEventBus\uFF09</h2><p>\u200B 1.\u4E00\u79CD\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u5F0F\uFF0C\u9002\u7528\u4E8E\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1</p><p>\u200B 2.\u5B89\u88C5\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus<span class="token operator">=</span><span class="token keyword">this</span><span class="token comment">//\u5B89\u88C5\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF,$bus\u5C31\u662F\u5F53\u524D\u5E94\u7528\u7684vm</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.\u4F7F\u7528\u4E8B\u4EF6\u603B\u7EBF\uFF1A</p><p>\u200B 1.\u63A5\u6536\u6570\u636E\uFF1AA \u7EC4\u4EF6\u60F3\u8981\u63A5\u6536\u6570\u636E\uFF0C\u5219\u5728 A \u7EC4\u4EF6\u4E2D\u7ED9$bus \u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u7684\u56DE\u8C03\u7559\u5728 A \u7EC4\u4EF6\u81EA\u8EAB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token operator">...</span><span class="token punctuation">.</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;eventName&#39;</span><span class="token punctuation">,</span>callback<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 2.\u63D0\u4F9B\u6570\u636E\uFF1A<code>this.$bus.$emit(&#39;eventName&#39;,\u9700\u8981\u4F20\u9012\u7684\u6570\u636E)</code></p><p>4.\u6700\u597D\u5728 beforeDestroy \u94A9\u5B50\u4E2D,\u7528$off \u53BB\u89E3\u7ED1\u5F53\u524D\u7EC4\u4EF6\u6240\u7528\u5230\u7684\u65F6\u95F4</p><h2 id="\u6D88\u606F\u8BA2\u9605\u4E0E\u53D1\u5E03" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u8BA2\u9605\u4E0E\u53D1\u5E03" aria-hidden="true">#</a> \u6D88\u606F\u8BA2\u9605\u4E0E\u53D1\u5E03</h2><p>\u5B89\u88C5\u6D88\u606F\u8BA2\u9605\u7684\u7EC4\u4EF6\u5E93\uFF0C\u5B89\u88C5\u547D\u4EE4\uFF08\u6709\u597D\u51E0\u4E2A\u6D88\u606F\u8BA2\u9605\u4E0E\u53D1\u5E03\u7684\u7EC4\u4EF6\u5E93\uFF0C\u4E0D\u4E00\u5B9A\u7528\u8FD9\u4E2A\uFF0C\u53EA\u662F\u8BED\u6CD5\u4E0D\u4E00\u6837\uFF09</p><p><code>npm i pubsub-js</code></p><p>1.\u662F\u4E00\u79CD\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u5F0F\uFF0C\u9002\u7528\u4E8E\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1</p><p>2.\u4F7F\u7528\u6B65\u9AA4\uFF1A</p><p>\u200B 1.\u5B89\u88C5 pubsub:<code>npm i pubsub-js</code></p><p>\u200B 2.\u5F15\u5165\uFF1A<code>import pubsub from &#39;pubsub-js&#39;</code></p><p>\u200B 3.\u63A5\u53D7\u6570\u636E\uFF1AA \u7EC4\u4EF6\u60F3\u63A5\u53D7\u6570\u636E\uFF0C\u5219\u5728 A \u7EC4\u4EF6\u4E2D\u8BA2\u9605\u6D88\u606F\uFF0C\u8BA2\u9605\u7684\u56DE\u8C03\u7559\u5728 A \u7EC4\u4EF6\u81EA\u8EAB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>	<span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">demo</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token operator">...</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token punctuation">.</span>
    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pubId <span class="token operator">=</span> pubsub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>demo<span class="token punctuation">)</span><span class="token comment">//\u8BA2\u9605\u6D88\u606F</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 4.\u63D0\u4F9B\u6570\u636E\uFF1A<code>pubsub.publish(&#39;xxx&#39;,\u6570\u636E)</code></p><p>\u200B 5.\u6700\u597D\u5728 beforeDestroy \u94A9\u5B50\u4E2D\uFF0C\u7528<code>pubsub.unsubscribe(this.pubId)</code>\u53BB<span style="color:red;">\u53D6\u6D88\u8BA2\u9605</span></p><h2 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick</h2><p>1.\u8BED\u6CD5\uFF1A<code>this.$nextTick(callback</code></p><p>2.\u4F5C\u7528\uFF1A\u5728\u4E0B\u4E00\u6B21 DOM \u66F4\u65B0\u7ED3\u675F\u540E\u6267\u884C\u5176\u6307\u5B9A\u7684\u56DE\u8C03</p><p>3.\u4EC0\u4E48\u65F6\u5019\u7528\uFF1A\u5F53\u6539\u53D8\u6570\u636E\u540E\uFF0C\u8981\u57FA\u4E8E\u66F4\u65B0\u540E\u7684\u65B0 DOM \u8FDB\u884C\u67D0\u4E9B\u64CD\u4F5C\u65F6\uFF0C\u8981\u5728 nextTick \u6240\u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u4E2D\u6267\u884C</p><h2 id="vue-\u5C01\u88C5\u7684\u8FC7\u6E21\u4E0E\u52A8\u753B" tabindex="-1"><a class="header-anchor" href="#vue-\u5C01\u88C5\u7684\u8FC7\u6E21\u4E0E\u52A8\u753B" aria-hidden="true">#</a> Vue \u5C01\u88C5\u7684\u8FC7\u6E21\u4E0E\u52A8\u753B</h2><p>1.\u4F5C\u7528:\u5728\u63D2\u5165\u3001\u66F4\u65B0\u6216\u79FB\u9664 DOM \u5143\u7D20\u65F6,\u5728\u5408\u9002\u7684\u65F6\u5019\u7ED9\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F\u7C7B\u540D</p><p>2.\u56FE\u793A:</p>`,76),d=e(`<p>3.\u5199\u6CD5:</p><p>\u200B 1.\u51C6\u5907\u597D\u6837\u5F0F:</p><p>\u200B \xB7\u5143\u7D20\u8FDB\u5165\u7684\u6837\u5F0F:</p><p>\u200B 1.v-enter:\u8FDB\u5165\u7684\u8D77\u70B9</p><p>\u200B 2.v-enter-active:\u8FDB\u5165\u7684\u8FC7\u7A0B\u4E2D</p><p>\u200B 3.v-enter-to:\u8FDB\u5165\u7684\u7EC8\u70B9</p><p>\u200B \xB7\u5143\u7D20\u79BB\u5F00\u7684\u6837\u5F0F:</p><p>\u200B 1.v-leave:\u79BB\u5F00\u7684\u8D77\u70B9</p><p>\u200B 2.v-leave-active\uFF1A\u79BB\u5F00\u8FC7\u7A0B\u4E2D</p><p>\u200B 3.v-leave-to\uFF1A\u79BB\u5F00\u7684\u7EC8\u70B9</p><p>\u200B 2.\u4F7F\u7528<code>&lt;transition&gt;</code>\u5305\u88F9\u8FC7\u6E21\u7684\u5143\u7D20,\u5E76\u914D\u7F6E name \u5C5E\u6027:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u4F60\u597D\uFF01<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 3.\u5907\u6CE8:\u82E5\u6709\u591A\u4E2A\u5143\u7D20\u9700\u8981\u8FC7\u6E21,\u5219\u9700\u8981\u4F7F\u7528<code>&lt;transition-group&gt;</code>\uFF0C\u4E14\u6BCF\u4E2A\u5143\u7D20\u90FD\u8981\u6307\u5B9A key \u503C,\u4F8B\u5982<code>:key=&quot;1&quot;</code></p><h2 id="vue-\u811A\u624B\u67B6\u914D\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#vue-\u811A\u624B\u67B6\u914D\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> Vue \u811A\u624B\u67B6\u914D\u7F6E\u4EE3\u7406</h2><p><strong>\u65B9\u6CD5\u4E00</strong></p><p>\u5728 vue.config.js \u4E2D\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>devServer:{
proxy:&quot;http://localhost:5000&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u200B 1.\u4F18\u70B9\uFF1A\u914D\u7F6E\u7B80\u5355,\u8BF7\u6C42\u8D44\u6E90\u65F6\u76F4\u63A5\u53D1\u7ED9\u524D\u7AEF(8080)\u5373\u53EF\u3002</p><p>\u200B 2.\u7F3A\u70B9:\u4E0D\u80FD\u914D\u7F6E\u591A\u4E2A\u4EE3\u7406,\u4E0D\u80FD\u7075\u6D3B\u7684\u63A7\u5236\u8BF7\u6C42\u662F\u5426\u8D70\u4EE3\u7406</p><p>\u200B 3.\u5DE5\u4F5C\u65B9\u5F0F\uFF1A\u82E5\u6309\u7167\u4E0A\u8FF0\u914D\u7F6E\u4EE3\u7406\uFF0C\u5F53\u8BF7\u6C42\u4E86\u524D\u7AEF\u4E0D\u5B58\u5728\u7684\u8D44\u6E90\u65F6\uFF0C\u90A3\u4E48\u8BF7\u6C42\u4F1A\u8F6C\u53D1\u7ED9\u670D\u52A1\u5668\uFF08\u4F18\u5148\u5339\u914D\u524D\u7AEF\u8D44\u6E90\uFF09</p><p><strong>\u65B9\u6CD5\u4E8C</strong></p><p>\u7F16\u5199 vue.config.js \u914D\u7F6E\u5177\u4F53\u4EE3\u7406\u89C4\u5219</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
  devServer: {
    proxy: {
      &#39;/api1&#39;: {//\u5339\u914D\u6240\u6709\u4EE5&#39;/api1&#39;\u5F00\u5934\u7684\u8BF7\u6C42\u8DEF\u5F84
        target: &#39;http\uFF1A//localhost:5000&#39;,//\u4EE3\u7406\u76EE\u6807\u7684\u57FA\u7840\u8DEF\u5F84
        ws: true,
        changeOrigin: true
        pathRewrite:{&#39;^/api1&#39;:&#39;&#39;}//\u91CD\u5199\u8F6C\u53D1\u7ED9\u670D\u52A1\u5668\u7684\u8D44\u6E90\u8BF7\u6C42\u8DEF\u5F84\uFF0C\u5C06&#39;/api1&#39;\u5F00\u5934\u7684\u8DEF\u5F84\u6539\u4E3A&#39;&#39;(\u7A7A)
      },
      &#39;/foo&#39;: {
        target: &#39;&lt;other_url&gt;&#39;
      }
    }
  }
}
/*
	changeOrigin\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0C\u670D\u52A1\u5668\u6536\u5230\u7684\u8BF7\u6C42\u5934\u4E2D\u7684host\u4E3A\uFF1Alocalhost:5000
	changeOrigin\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u670D\u52A1\u5668\u6536\u5230\u7684\u8BF7\u6C42\u5934\u4E2D\u7684host\u4E3A\uFF1Alocalhost:8080
	changeOrigin\u9ED8\u8BA4\u503C\u4E3Atrue
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E\uFF1A</p><p>\u200B 1.\u4F18\u70B9\uFF1A\u53EF\u4EE5\u914D\u7F6E\u591A\u4E2A\u5927\u529B\uFF0C\u4E14\u53EF\u4EE5\u7075\u6D3B\u7684\u63A7\u5236\u8BF7\u6C42\u5934\u662F\u5426\u8D70\u4EE3\u7406</p><p>\u200B 2.\u7F3A\u70B9\uFF1A\u914D\u7F6E\u7565\u5FAE\u7E41\u7410\uFF0C\u6C42\u60C5\u8D44\u6E90\u65F6\u5FC5\u987B\u52A0\u524D\u7F00\u3002</p><h2 id="\u63D2\u69FD" tabindex="-1"><a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a> \u63D2\u69FD</h2><p>1.\u4F5C\u7528\uFF1A\u8BA9\u7236\u7EC4\u4EF6\u53EF\u4EE5\u5411\u5B50\u7EC4\u4EF6\u6307\u5B9A\u4F4D\u7F6E\u63D2\u5165 html \u7ED3\u6784\uFF0C\u4E5F\u662F\u4E00\u79CD\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u5F0F\uFF0C\u9002\u7528\u4E8E\u7236\u7EC4\u4EF6====\u300B\u5B50\u7EC4\u4EF6(\u7EC4\u4EF6\u7684\u4F7F\u7528\u8005)</p><p>2.\u5206\u7C7B\uFF1A\u9ED8\u8BA4\u63D2\u69FD\u3001\u5177\u540D\u63D2\u69FD\u3001\u4F5C\u7528\u57DF\u63D2\u69FD</p><p>3.\u4F7F\u7528\u65B9\u5F0F\uFF1A</p><p>\u200B 1.\u9ED8\u8BA4\u63D2\u69FD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\u4E2D\uFF1A
	&lt;Category&gt;
		&lt;div&gt;html\u7ED3\u6784&lt;/div&gt;
	&lt;/Category&gt;

\u5B50\u7EC4\u4EF6\u4E2D\uFF1A
	&lt;template&gt;
		&lt;div&gt;
			&lt;slot&gt;\u6211\u662F\u9ED8\u8BA4\u503C,\u5F53\u4F7F\u7528\u8005\u6CA1\u6709\u4F20\u9012\u6570\u636E\u65F6\uFF0C\u6211\u4F1A\u663E\u793A&lt;/slot&gt;
		&lt;/div&gt;
	&lt;template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 2.\u5177\u540D\u63D2\u69FD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\u4E2D\uFF1A
	&lt;Category&gt;
		&lt;div slot=&quot;center&quot;&gt;html\u7ED3\u6784&lt;/div&gt;
		&lt;template slot=&quot;center&quot; \u6216 v-slot:center&gt;
			&lt;div&gt;

			&lt;/div&gt;
		&lt;template&gt;
	&lt;/Category&gt;

\u5B50\u7EC4\u4EF6\u4E2D\uFF1A
	&lt;template&gt;
		&lt;div&gt;
			&lt;slot name=&quot;center&quot;&gt;\u6211\u662F\u9ED8\u8BA4\u503C,\u5F53\u4F7F\u7528\u8005\u6CA1\u6709\u4F20\u9012\u6570\u636E\u65F6\uFF0C\u6211\u4F1A\u663E\u793A&lt;/slot&gt;
		&lt;/div&gt;
	&lt;template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 3.\u4F5C\u7528\u57DF\u63D2\u69FD</p><p>\u200B 1.\u7406\u89E3\uFF1A\u6570\u636E\u5B58\u5728\u4E8E\u7EC4\u4EF6\u81EA\u8EAB\uFF0C\u4F46\u662F\u6570\u636E\u7684\u7ED3\u6784\uFF08\u5C55\u73B0\u65B9\u5F0F\uFF09\u53EF\u4EE5\u6839\u636E\u7EC4\u4EF6\u7684\u4F7F\u7528\u8005\u6765\u5B9A\u4E49</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7236\u7EC4\u4EF6\u4E2D\uFF1A
	&lt;Category&gt;

		&lt;template scope=&quot;data&quot;&gt;
			{{data}}data\u63A5\u6536\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61
			&lt;ul&gt;
				&lt;li v-for=&quot;(item,index) in data.xxx&quot; :key=&quot;index&quot;&gt;&lt;/li&gt;
			&lt;/ul&gt;
		&lt;template&gt;
	&lt;/Category&gt;

\u5B50\u7EC4\u4EF6\u4E2D\uFF1A
&lt;template&gt;
    &lt;div&gt;
        &lt;slot :games=&quot;games&quot;&gt;\u6211\u662F\u9ED8\u8BA4\u503C,\u5F53\u4F7F\u7528\u8005\u6CA1\u6709\u4F20\u9012\u6570\u636E\u65F6\uFF0C\u6211\u4F1A\u663E\u793A&lt;/slot&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h2><p><strong>1.\u6982\u5FF5</strong></p><p>\u200B \u5728 vue \u4E2D\u5B9E\u73B0\u96C6\u4E2D\u5F0F\u72B6\u6001\uFF08\u6570\u636E\uFF09\u7BA1\u7406\u7684\u4E00\u4E2A vue \u63D2\u4EF6\uFF0C\u5BF9 vue \u5E94\u7528\u4E2D\u591A\u4E2A\u7EC4\u4EF6\u7684\u5171\u4EAB\u72B6\u6001\u8FDB\u884C\u96C6\u4E2D\u5F0F\u7BA1\u7406\uFF08\u8BFB/\u5199\uFF09\uFF0C\u4E5F\u662F\u4E00\u79CD\u7EC4\u4EF6\u95F4\u7684\u901A\u4FE1\u65B9\u5F0F\uFF0C\u4E14\u9002\u7528\u4E8E\u4EFB\u610F\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1</p><p><strong>2.\u5982\u4F55\u4F7F\u7528</strong></p><p>\u591A\u4E2A\u7EC4\u4EF6\u9700\u8981\u5171\u4EAB\u6570\u636E\u65F6</p><p><strong>3.\u73AF\u5883\u642D\u5EFA</strong></p><p>\u200B 1.\u521B\u5EFA\u6587\u4EF6\uFF1A<code>src/store/index.js</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5F15\u5165Vuex
import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;
Vue.use(Vuex)
//\u51C6\u5907actions\uFF0Cactions\u7528\u4E8E\u54CD\u5E94\u5404\u4E2A\u7EC4\u4EF6\u4E2D\u7684\u4E8B\u4EF6
const actions = {}

//\u51C6\u5907mutations\uFF0Cmutations\u7528\u4E8E\u64CD\u4F5C\u6570\u636E\u7684\u72B6\u6001
const mutations = {}

//\u51C6\u5907state\uFF0Cstate\u7528\u4E8E\u5B58\u50A8\u6570\u636E
const state = {}

//\u521B\u5EFAstore\u7B80\u5199
const store = new Vuex.Store({
  actions,
  mutations,
  state,
})

//\u5BFC\u51FAstore
export default store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 2.\u5728<code>main.js</code>\u4E2D\u521B\u5EFA vm \u65F6\u4F20\u5165<code>store</code>\u914D\u7F6E\u9879</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5F15\u5165Vue
import Vue from &#39;vue&#39;
//\u5F15\u5165app
import App from &#39;./App.vue&#39;

//\u5F15\u5165store
import store from &#39;./store/index&#39;

new Vue({
  el:&#39;#app&#39;,
  render:h=&gt;h(App),
  store,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.\u57FA\u672C\u4F7F\u7528</strong></p><p>\u200B 1.\u521D\u59CB\u5316\u6570\u636E\u3001\u914D\u7F6E<code>actions\u3001mutations</code>\uFF0C\u64CD\u4F5C\u6587\u4EF6<code>store.js</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5F15\u5165Vuex
import Vue from &#39;vue&#39;
import Vuex from &#39;vuex&#39;
Vue.use(Vuex)
//\u51C6\u5907actions\uFF0Cactions\u7528\u4E8E\u54CD\u5E94\u5404\u4E2A\u7EC4\u4EF6\u4E2D\u7684\u4E8B\u4EF6
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

//\u51C6\u5907mutations\uFF0Cmutations\u7528\u4E8E\u64CD\u4F5C\u6570\u636E\u7684\u72B6\u6001
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

//\u51C6\u5907state\uFF0Cstate\u7528\u4E8E\u5B58\u50A8\u6570\u636E
const state = {
  sum:0,
}


//\u521B\u5EFAstore\u7B80\u5199
const store = new Vuex.Store({
  actions,
  mutations,
  state,
})

//\u5BFC\u51FAstore
export default store

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 2.\u7EC4\u4EF6\u4E2D\u8BFB\u53D6 vuex \u7684\u6570\u636E\uFF1A<code>this.$store.state.sum</code></p><p>\u200B 3.\u7EC4\u4EF6\u4E2D\u4FEE\u6539 vuex \u7684\u6570\u636E\uFF1A<code>this.$store.dispatch(&#39;actions\u4E2D\u7684\u65B9\u6CD5\u540D&#39;,\u9700\u8981\u4F20\u9012\u7684\u6570\u636E)</code>\u6216<code>this.$store.commit(&#39;mutations\u4E2D\u7684\u65B9\u6CD5\u540D\uFF0C\u9700\u8981\u4F20\u9012\u7684\u6570\u636E&#39;)</code></p><p>\u200B <strong>\u5907\u6CE8\uFF1A</strong></p><p>\u200B \u82E5\u6CA1\u6709\u7F51\u7EDC\u8BF7\u6C42\u6216\u5176\u4ED6\u7684\u4E1A\u52A1\u903B\u8F91\uFF0C\u7EC4\u4EF6\u4E5F\u53EF\u4EE5\u8D8A\u8FC7 actions\uFF0C\u4E0D\u7528\u5199 dispatch\uFF0C\u76F4\u63A5\u7F16\u5199 commit</p><p><strong>5.getters \u5C5E\u6027</strong></p><p>\u200B 1.\u6982\u5FF5\uFF1A\u5F53 state \u4E2D\u7684\u6570\u636E\u9700\u8981\u52A0\u5DE5\u540E\u518D\u4F7F\u7528\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 getters \u52A0\u5DE5</p><p>\u200B 2.\u5728<code>$store.js</code>\u4E2D\u8FFD\u52A0<code>getters</code>\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>...

//\u51C6\u5907\u4E00\u4E2Agetters\uFF0C\u7528\u4E8E\u52A0\u5DE5state\u4E2D\u7684\u6570\u636E
const getters ={
  bigSum(state){
    return state.sum * 10
  }

 //\u521B\u5EFA\u5E76\u66B4\u9732\uFF08\u5BFC\u51FA\uFF09store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters

})


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 3.\u7EC4\u4EF6\u4E2D\u8BFB\u53D6<code>$store.getters.bigSum</code></p><p><strong>6.\u56DB\u4E2A map \u65B9\u6CD5\u7684\u4F7F\u7528</strong></p><p>\u200B 1.<code>mapState</code>\u65B9\u6CD5:\u7528\u4E8E\u5E2E\u52A9\u6211\u4EEC\u6620\u5C04<code>state</code>\u4E2D\u7684\u6570\u636E\u4E3A\u8BA1\u7B97\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
import {mapState} from &#39;vuex&#39;
computed:{
//\u501F\u52A9mapState\u5C5E\u6027\u751F\u6210\u8BA1\u7B97\u5C5E\u6027sum name subject\uFF08\u5BF9\u8C61\u5199\u6CD5\uFF09
  ...mapState({sum:&#39;sum&#39;,name:&#39;name&#39;,subject:&#39;subject&#39;})

//\u501F\u52A9mapState\u5C5E\u6027\u751F\u6210\u8BA1\u7B97\u5C5E\u6027sum name subject\uFF08\u6570\u7EC4\u5199\u6CD5/\u7B80\u5199\uFF09
  ...mapState([&#39;sum&#39;,&#39;name&#39;,&#39;subject&#39;]),
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B</p><p>\u200B 2.<code>mapGetters</code>\u65B9\u6CD5\uFF1A\u7528\u4E8E\u5E2E\u52A9\u6211\u4EEC\u6620\u5C04<code>getters</code>\u4E2D\u7684\u6570\u636E\u4E3A\u8BA1\u7B97\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
import {mapGetters} from &#39;vuex&#39;
computed:{
//\u501F\u52A9mapGetters\u5C5E\u6027\u751F\u6210\u8BA1\u7B97\u5C5E\u6027sum name subject\uFF08\u5BF9\u8C61\u5199\u6CD5\uFF09
  ...mapGetters({sum:&#39;sum&#39;,name:&#39;name&#39;,subject:&#39;subject&#39;})

//\u501F\u52A9mapGetters\u5C5E\u6027\u751F\u6210\u8BA1\u7B97\u5C5E\u6027sum name subject\uFF08\u6570\u7EC4\u5199\u6CD5/\u7B80\u5199\uFF09
  ...mapGetters([&#39;sum&#39;,&#39;name&#39;,&#39;subject&#39;]),
}
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 3.<code>mapActions</code>\u65B9\u6CD5\uFF1A\u7528\u4E8E\u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u4E0E<code>actions</code>\u5BF9\u8BDD\u7684\u65B9\u6CD5\uFF0C\u5373\u5305\u542B<code>$store.dispatch(xxx)</code>\u7684\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
import {mapActions} from &#39;vuex&#39;
methods:{

//\u501F\u52A9mapActions\u751F\u6210\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u4E2D\u4F1A\u8C03\u7528dispatch\u53BB\u8054\u7CFBactions\uFF08\u5BF9\u8C61\u5199\u6CD5\uFF09
  ...mapActions({incrementOdd:&#39;oddJia&#39;,incrementWait:&#39;waitJia&#39;}),

//\u501F\u52A9mapActions\u751F\u6210\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u4E2D\u4F1A\u8C03\u7528dispatch\u53BB\u8054\u7CFBactions\uFF08\u6570\u7EC4\u5199\u6CD5\uFF09
// ...mapActions([&#39;oddJia&#39;,&#39;waitJia&#39;])

}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 4.<code>mapMutations</code>\u65B9\u6CD5\uFF1A\u7528\u4E8E\u5E2E\u52A9\u6211\u4EEC\u751F\u6210\u4E0E<code>mutations</code>\u5BF9\u8BDD\u7684\u65B9\u6CD5\uFF0C\u5373\u5305\u542B<code>$store.commit(xxx)</code>\u7684\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
import {mapMutations} from &#39;vuex&#39;
methods:{

  //\u501F\u52A9mapMutations\u751F\u6210\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u4E2D\u4F1A\u8C03\u7528commit\u53BB\u8054\u7CFBmutations\uFF08\u5BF9\u8C61\u5199\u6CD5\uFF09
  ...mapMutations({increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;}),
  /* \u4EE5\u4E0A\u4EE3\u7801\u751F\u6210\u7684\u4EE3\u7801\u7B49\u540C\u4E8E\u4E0B\u9762\u7684\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u548C\u539F\u672C\u6211\u4EEC\u5199\u7684\u65B9\u6CD5\u6709\u70B9\u533A\u522B\uFF0C\u8FD9\u91CC\u7684value\u503C\u5F97\u6CE8\u610F\uFF1A
  \u7531\u4E8E\u5728template\u6A21\u677F\u6807\u7B7E\u91CC\u9762\u5199\u7684\u662F@click=&quot;increment&quot;\uFF0C\u8FD9\u79CD\u5199\u6CD5\u867D\u7136\u6CA1\u6709\u4F20\u53C2\uFF0C\u4F46\u662F\u9ED8\u8BA4\u662F\u4F20\u53C2\u7684\u4E14\u4F20\u7684\u53C2\u6570\u662FeventMouse\u9F20\u6807\u4E8B\u4EF6
  \u6240\u4EE5\u60F3\u8981\u628A\u4F20\u7684\u53C2\u6570\u6539\u4E3A\u6211\u60F3\u8981\u7684n\uFF0C\u5C31\u9700\u8981\u5728\u539F\u672C\u7684@click=&quot;increment&quot;\u8C22\u6210@click=&quot;increment\uFF08n\uFF09&quot;\u5E26\u53C2\u6570\u7684\u5F62\u5F0F
  */

  //\u501F\u52A9mapMutations\u751F\u6210\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u65B9\u6CD5\u4E2D\u4F1A\u8C03\u7528commit\u53BB\u8054\u7CFBmutations\uFF08\u6570\u7EC4\u5199\u6CD5\uFF09
  //\u6CE8\u610F\u5BF9\u5E94\u7684@click\u4E8B\u4EF6\u4E2D\u7684\u65B9\u6CD5\u540D\u4E5F\u8981\u6539\u6210\u2018JIA\uFF08n\uFF09\u2019\u548C\u2018JIAN\uFF08n\uFF09\u2019
  // ...mapMutations([&#39;JIA&#39;,&#39;JIAN&#39;]),
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5907\u6CE8\uFF1A</strong></p><p>\u200B mapActions \u4E0E mapMutations \u5728\u4F20\u9012\u6570\u636E\u65F6\uFF0C\u9700\u8981\u5728\u6A21\u677F\u4E2D\u8C03\u7528\u65B9\u6CD5\u662F\u5199\u597D\u8981\u4F20\u9012\u7684\u53C2\u6570\uFF0C\u5426\u5219\u4F20\u9012\u7684\u662F\u4E8B\u4EF6\u5BF9\u8C61</p><p><strong>7.\u6A21\u5757\u5316+\u547D\u540D\u7A7A\u95F4</strong></p><p>\u200B 1.\u76EE\u7684\uFF1A\u8BA9\u4EE3\u7801\u66F4\u597D\u7EF4\u62A4\uFF0C\u8BA9\u591A\u79CD\u6570\u636E\u5206\u7C7B\u66F4\u52A0\u660E\u786E</p><p>\u200B 2.\u4FEE\u6539<code>store.js</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const countAbout = {
namespaced:true,//\u5F00\u542F\u547D\u540D\u7A7A\u95F4
actions:{},
mutations:{},
state:{},
getters:{}
}

const countAbout = {
namespaced:true,//\u5F00\u542F\u547D\u540D\u7A7A\u95F4
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 3.\u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\uFF0C\u7EC4\u4EF6\u8BFB\u53D6 state \u4E2D\u7684\u6570\u636E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u65B9\u5F0F\u4E00\uFF1A\u76F4\u63A5\u81EA\u5DF1\u8BFB\u53D6
this.$store.state.personList
//\u65B9\u5F0F\u4E8C\uFF1A\u501F\u52A9mapState\u8BFB\u53D6
...mapState{&#39;countAbout&#39;,[&#39;sum&#39;,&#39;name&#39;,&#39;subject&#39;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 4.\u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\uFF0C\u7EC4\u4EF6\u8BFB\u53D6 getters \u4E2D\u7684\u6570\u636E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u65B9\u5F0F\u4E00\uFF1A\u76F4\u63A5\u81EA\u5DF1\u8BFB\u53D6
this.$store.getters[&#39;personAbout/firstPersonName&#39;]
//\u65B9\u5F0F\u4E8C\uFF1A\u501F\u52A9mapGetters\u8BFB\u53D6
...mapGetters{&#39;countAbout&#39;,[&#39;bigSum&#39;]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 5.\u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\uFF0C\u7EC4\u4EF6\u8C03\u7528 dispatch\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u65B9\u5F0F\u4E00\uFF1A\u81EA\u5DF1\u76F4\u63A5dispatch
this.$store.dispatch[&#39;personAbout/firstPersonName&#39;\uFF0Cperson]
//\u65B9\u5F0F\u4E8C\uFF1A\u501F\u52A9mapActions
...mapActions(&#39;countAbout&#39;,{incrementOdd:&#39;oddJia&#39;,incrementWait:&#39;waitJia&#39;}),
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 6.\u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\uFF0C\u7EC4\u4EF6\u8C03\u7528 commit\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u65B9\u5F0F\u4E00\uFF1A\u81EA\u5DF1\u76F4\u63A5commit
this.$store.commit(&#39;personAbout/ADD_PERSON&#39;,personObj)
//\u65B9\u5F0F\u4E8C\uFF1A\u501F\u52A9mapMutations
...mapMutations(&#39;countAbout&#39;,{increment:&#39;JIA&#39;,decrement:&#39;JIAN&#39;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531</h2><p><strong>1.\u57FA\u672C\u4F7F\u7528</strong></p><p>\u200B 1.\u5B89\u88C5 vue-router\uFF0C\u547D\u4EE4\uFF1A<code>npm i vue-router</code></p><p>\u200B 2.\u5E94\u7528\u63D2\u4EF6\uFF1A<code>Vue.use(VueRouter)</code></p><p>\u200B 3.\u7F16\u5199 router \u914D\u7F6E\u9879\uFF08\u521B\u5EFA router \u6587\u4EF6\u5939\u5E76\u5728\u8BE5\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA index.js \u6587\u4EF6\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u8BE5\u6587\u4EF6\u4E13\u95E8\u7528\u4E8E\u521B\u5EFA\u6574\u4E2A\u5E94\u7528\u7684\u8DEF\u7531\u5668
import VueRouter from &quot;vue-router&quot;;
//\u5F15\u5165\u7EC4\u4EF6
import About from &#39;../components/About.vue&#39;
import Home from &#39;../components/Home.vue&#39;

//\u521B\u5EFA\u4E00\u4E2A\u8DEF\u7531\u5668
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 4.\u5B9E\u73B0\u5207\u6362\uFF08active-class \u53EF\u5B9E\u73B0\u5C55\u793A\u5F53\u524D\u7EC4\u4EF6\u65F6\u7684\u6837\u5F0F\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-link class=&quot;list-group-item&quot; active-class=&quot;active&quot; to=&quot;/about&quot;&gt;About&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u200B 5.\u6307\u5B9A\u5C55\u793A\u4F4D\u7F6E\uFF08\u7C7B\u4F3C\u4E8E\u63D2\u69FD\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-view&gt;&lt;/router-view&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.\u51E0\u4E2A\u6CE8\u610F\u70B9</strong></p><p>\u200B 1.\u8DEF\u7531\u7EC4\u4EF6\u901A\u5E38\u5B58\u653E\u5728<code>pages</code>\u6587\u4EF6\u5939\uFF0C\u4E00\u822C\u7EC4\u4EF6\u901A\u5E38\u5B58\u653E\u5728<code>computed</code>\u6587\u4EF6\u5939</p><p>\u200B 2.\u901A\u8FC7\u5207\u6362\uFF0C\u201C\u9690\u85CF\u201D\u7684\u8DEF\u7531\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u662F\u88AB\u9500\u6BC1\u7684\uFF0C\u9700\u8981\u7684\u65F6\u5019\u518D\u53BB\u6302\u8F7D</p><p>\u200B 3.\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\u81EA\u5DF1\u7684<code>$route</code>\u5C5E\u6027\uFF0C\u91CC\u9762\u5B58\u50A8\u8FD9\u81EA\u5DF1\u7684\u8DEF\u7531\u4FE1\u606F</p><p>\u200B 3.\u6574\u4E2A\u5E94\u7528\u53EA\u6709\u4E00\u4E2A router\uFF0C\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u7684<code>$router</code>\u5C5E\u6027\u83B7\u53D6\u5230</p><p><strong>3.\u591A\u6781\u8DEF\u7531</strong></p><p>\u200B 1.\u914D\u7F6E\u89C4\u5219\uFF0C\u4F7F\u7528 children \u914D\u7F6E\u9879</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u8BE5\u6587\u4EF6\u4E13\u95E8\u7528\u4E8E\u521B\u5EFA\u6574\u4E2A\u5E94\u7528\u7684\u8DEF\u7531\u5668
import VueRouter from &quot;vue-router&quot;;
//\u5F15\u5165\u7EC4\u4EF6
import About from &#39;../pages/About.vue&#39;
import Home from &#39;../pages/Home.vue&#39;
import News from &#39;../pages/News.vue&#39;
import Message from &#39;../pages/Message.vue&#39;

//\u521B\u5EFA\u4E00\u4E2A\u8DEF\u7531\u5668
export default new VueRouter({
  routes:[
    {
      path:&#39;/about&#39;,
      component:About
    },
    {
      path:&#39;/home&#39;,
      component:Home,
      children:[//\u901A\u8FC7children\u914D\u7F6E\u9879\u914D\u7F6E\u5B50\u7EA7\u8DEF\u7531
        {
          path:&#39;news&#39;,//\u6B64\u5904\u4E00\u5B9A\u4E0D\u8981\u5199/news
          component:News
        },
        {
          path:&#39;message&#39;,//\u6B64\u5904\u4E00\u5B9A\u4E0D\u8981\u5199/message
          component:Message
        }
      ]
    }
  ]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 2.\u8DF3\u8F6C\uFF08\u8981\u6D17\u5B8C\u6574\u8DEF\u5F84\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-link to=&quot;/home/news&quot;&gt;News&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4.\u8DEF\u7531\u7684 query \u53C2\u6570</strong></p><p>\u200B 1.\u4F20\u9012\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u8DF3\u8F6C\u8DEF\u7531\u5E76\u643A\u5E26Query\u53C2\u6570,to\u7684\u5B57\u7B26\u4E32\u5199\u6CD5 --&gt;
        &lt;!-- &lt;router-link :to=&quot;\`/home/message/detail?id=\${messageList[0].id}&amp;title=\${messageList[0].title}\`&quot;&gt;message002&lt;/router-link&gt;&amp;nbsp;&amp;nbsp; --&gt;

        &lt;!-- \u8DF3\u8F6C\u8DEF\u7531\u5E76\u643A\u5E26Query\u53C2\u6570,to\u7684\u5BF9\u8C61\u5199\u6CD5 --&gt;
        &lt;router-link :to=&quot;{
          path:&#39;/home/message/detail&#39;,
          query:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }&quot;&gt;
          message002
        &lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 2.\u63A5\u53D7\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$route.query.id
$route.query.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.\u547D\u540D\u8DEF\u7531</strong></p><p>\u200B 1.\u4F5C\u7528\uFF1A\u53EF\u4EE5\u7B80\u5316\u8DEF\u7531\u7684\u8DF3\u8F6C</p><p>\u200B 2.\u5982\u4F55\u4F7F\u7528</p><p>\u200B 1.\u7ED9\u8DEF\u7531\u547D\u540D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 2.\u7B80\u5316\u8DF3\u8F6C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u7B80\u5316\u524D\uFF0C\u9700\u8981\u5199\u5B8C\u6574\u7684\u8DEF\u5F84 --&gt;
&lt;router-link  to=&quot;/about/news/detail&quot;&gt;About&lt;/router-link&gt;

&lt;!-- \u7B80\u5316\u540E\uFF0C\u76F4\u63A5\u901A\u8FC7\u540D\u5B57\u8DF3\u8F6C --&gt;
&lt;router-link  :to=&quot;{name:&#39;xiangqing&#39;}&quot;&gt;About&lt;/router-link&gt;

&lt;!-- \u7B80\u5316\u5199\u6CD5\u914D\u5408Query\u53C2\u6570 --&gt;
&lt;router-link :to=&quot;{
          name:&#39;xiangqing&#39;,
          query:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }&quot;&gt;
          message002
&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.\u8DEF\u7531\u7684 params \u53C2\u6570</strong></p><p>\u200B 1.\u914D\u7F6E\u8DEF\u7531\uFF0C\u58F0\u660E\u63A5\u53D7 params \u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> {
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
              path:&#39;detail/:id/:title&#39;,//:id\u548C:title\u8868\u793A\u5360\u4F4D\u7B26\uFF0C\u544A\u8BC9detail\u8DEF\u5F84\u540E\u9762\u7684\u4E24\u4E2A\u4E0D\u662F\u8DEF\u5F84\u800C\u662Fparams\u53C2\u6570
              component:Detail
            }
          ]
        }
      ]
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 2.\u4F20\u9012\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u8DF3\u8F6C\u5E76\u643A\u5E26params\u53C2\u6570\uFF0Cto\u7684\u5B57\u7B26\u4E32\u5199\u6CD5 --&gt;
&lt;router-link :to=&quot;/home/message/detail/666/nihao&quot;&gt;message001&lt;/router-link&gt;

&lt;!-- \u8DF3\u8F6C\u5E76\u643A\u5E26params\u53C2\u6570\uFF0Cto\u7684\u5BF9\u8C61\u5199\u6CD5 --&gt;
&lt;router-link :to=&quot;{
          name:&#39;xiangqing&#39;,
          params:{
            id:messageList[0].id,
            title:messageList[0].title
          }
        }&quot;&gt;
          message002
&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B <strong>\u6CE8\u610F\uFF1A</strong></p><p>\u200B \u8DEF\u7531\u643A\u5E26 params \u53C2\u6570\u662F\uFF0C\u82E5\u4F7F\u7528 to \u7684\u5BF9\u8C61\u5199\u6CD5\uFF0C\u5219\u4E0D\u80FD\u4F7F\u7528 path \u914D\u7F6E\u9879\uFF0C\u5FC5\u987B\u4F7F\u7528 name \u914D\u7F6E</p><p>\u200B 3.\u63A5\u6536\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$route.params.id
$route.params.title
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.\u8DEF\u7531\u7684 props \u914D\u7F6E</strong></p><p>\u200B \u4F5C\u7528\uFF1A\u8BA9\u8DEF\u7531\u7EC4\u4EF6\u66F4\u65B9\u4FBF\u7684\u6536\u5230\u53C2\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> name:&#39;xiangqing&#39;,
              path:&#39;detail/:id/:title&#39;,//:id\u548C:title\u8868\u793A\u5360\u4F4D\u7B26\uFF0C\u544A\u8BC9detail\u8DEF\u5F84\u540E\u9762\u7684\u4E24\u4E2A\u4E0D\u662F\u8DEF\u5F84\u800C\u662Fparams\u53C2\u6570
              component:Detail,

              // props\u7684\u7B2C\u4E00\u79CD\u5199\u6CD5\uFF0C\u503C\u4E3A\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u4E2D\u7684\u6240\u6709key-value\u90FD\u4F1A\u4EE5props\u7684\u5F62\u5F0F\u4F20\u7ED9Detail\u7EC4\u4EF6
              // props:{a:1,b:&#39;hello&#39;}

              //props\u7684\u7B2C\u4E8C\u79CD\u5199\u6CD5\uFF0C\u503C\u4E3A\u5E03\u5C14\u503C
              // \u82E5\u503C\u4E3A\u771F\uFF0C\u5C31\u4F1A\u628A\u8BE5\u8DEF\u7531\u7EC4\u4EF6\u6536\u5230\u7684\u6240\u6709params\u53C2\u6570\uFF0C\u4EE5props\u7684\u5F62\u5F0F\u4F20\u7ED9Detail\u7EC4\u4EF6
              // props:true

              //props\u7684\u7B2C\u4E09\u79CD\u5199\u6CD5\uFF0C\u503C\u4E3A\u51FD\u6570
                props($route){
                // return {id:&#39;666&#39;,title:&#39;\u4F60\u597D\u554A&#39;}
                return {id:$route.query.id,title:$route.query.title}
              },
              //\u89E3\u6784\u8D4B\u503C\u7684\u8FDE\u7EED\u5199\u6CD5
        /*       props({query:{id,title}}){
                return {id,title}
              } */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8.<code>&lt;router-link&gt;</code>\u7684 replace \u5C5E\u6027</strong></p><p>\u200B 1.\u4F5C\u7528\uFF1A\u63A7\u5236\u8DEF\u7531\u8DF3\u8F6C\u65F6\u64CD\u4F5C\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u7684\u6A21\u5F0F\uFF08\u9ED8\u8BA4\u662F push \u6A21\u5F0F\uFF0C\u53EF\u4EE5\u540E\u9000\uFF09</p><p>\u200B 2.\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u6709\u4E24\u79CD\u5199\u5165\u65B9\u5F0F\uFF1A\u5206\u522B\u4E3A<code>push</code>\u548C<code>replace</code>\uFF0Cpush \u662F\u8FFD\u52A0\u5386\u53F2\u8BB0\u5F55\uFF0Creplace \u662F\u66FF\u6362\u5F53\u524D\u8BB0\u5F55\u3002\u8DEF\u7531\u8DF3\u8F6C\u65F6\u5019\u9ED8\u8BA4\u4E3A push</p><p>\u200B 3.\u5F00\u542F replace \u6A21\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;router-link :replace=&quot;true&quot; &gt;\u5F00\u542Freplace\u6A21\u5F0F\u65B9\u6CD5\u4E00&lt;/router-link&gt;
&lt;router-link replace &gt;\u5F00\u542Freplace\u6A21\u5F0F\u65B9\u6CD5\u4E8C&lt;/router-link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9.\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A</strong></p><p>\u200B 1.\u4F5C\u7528\uFF1A\u4E0D\u501F\u52A9<code>&lt;router-link&gt;</code>\u5B9E\u73B0\u8DEF\u7531\u8DF3\u8F6C\uFF0C\u8BA9\u8DEF\u7531\u8DF3\u8F6C\u66F4\u52A0\u7075\u6D3B</p><p>\u200B 2.\u5177\u4F53\u7F16\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>methods:{
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

 this.$router.back()//\u540E\u9000\u4E00\u6B65
 this.$router.forward()//\u524D\u8FDB\u4E00\u6B65
 this.$router.go(value)//\u524D\u8FDB/\u540E\u9000\u6307\u5B9A\u6B65\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>10.\u7F13\u5B58\u8DEF\u7531\u7EC4\u4EF6</strong></p><p>\u200B 1.\u4F5C\u7528\uFF1A\u8BA9\u4E0D\u5C55\u793A\u7684\u8DEF\u7531\u7EC4\u4EF6\u4FDD\u6301\u6302\u8F7D\uFF0C\u4E0D\u88AB\u9500\u6BC1</p><p>\u200B 2.\u5177\u4F53\u7F16\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!-- \u53EF\u4EE5\u7F13\u5B58keep-alive\u6807\u7B7E\u4E2D\u7684\u7EC4\u4EF6\uFF0C\u5728include\u4E2D\u8BF4\u660E\u9700\u8981\u7F13\u5B58\u7684\u7EC4\u4EF6\uFF0C\u4E0D\u8BF4\u660E\u5219\u5168\u90E8\u7F13\u5B58
    include\u4E2D\u5199\u7684\u662F\u7EC4\u4EF6\u4E2D\u7684name\u540D\u5B57     --&gt;
&lt;!--\u5355\u4E2A\u7EC4\u4EF6--&gt;
&lt;keep-alive include=&quot;News&quot;&gt;
	&lt;router-view&gt;&lt;/router-view&gt;
&lt;/keep-alive&gt;

&lt;!--\u591A\u4E2A\u7EC4\u4EF6--&gt;
&lt;keep-alive :include=&quot;[&#39;News&#39;,&#39;Message&#39;]&quot;&gt;
        &lt;router-view&gt;&lt;/router-view&gt;
&lt;/keep-alive&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>11.\u4E24\u4E2A\u65B0\u7684\u751F\u547D\u5468\u671F\u51FD\u6570</strong></p><p>\u200B 1.\u4F5C\u7528\uFF1A\u8DEF\u7531\u7EC4\u4EF6\u6240\u72EC\u6709\u7684\u4E24\u4E2A\u94A9\u5B50\uFF0C\u7528\u4E8E\u6355\u83B7\u8DEF\u7531\u7EC4\u4EF6\u7684\u6FC0\u6D3B\u72B6\u6001</p><p>\u200B 2.\u5177\u4F53\u540D\u5B57</p><p>\u200B 1.<code>activated</code>\u8DEF\u7531\u7EC4\u4EF6\u88AB\u6FC0\u6D3B\u65F6\u89E6\u53D1*\uFF08\u8BE5\u7EC4\u4EF6\u4ECE\u6CA1\u6709\u51FA\u73B0==\u300B\u51FA\u73B0\u5728\u6211\u9762\u524D\u53EB\u6FC0\u6D3B\uFF09*</p><p>\u200B 2.<code>deactivated</code></p><p><strong>12.\u8DEF\u7531\u5B88\u536B</strong></p><p>\u200B 1.\u4F5C\u7528\uFF1A\u5BF9\u8DEF\u7531\u8FDB\u884C\u6743\u9650\u63A7\u5236</p><p>\u200B 2.\u5206\u7C7B\uFF1A\u5168\u5C40\u5B88\u536B\u3001\u72EC\u4EAB\u5B88\u536B\u3001\u7EC4\u4EF6\u5185\u5B88\u536B</p><p>\u200B 3.\u5168\u5C40\u5B88\u536B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5168\u5C40\u524D\u7F6E\u8DEF\u7531\u5B88\u536B
//\u5728\u6BCF\u4E00\u6B21\u8DEF\u7531\u5207\u6362\u4E4B\u524D\u90FD\u4F1A\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF08\u4F8B\u5982\uFF1A\u4ECEAbout==\u300BHome\u7B97\u4E00\u6B21\u5207\u6362\uFF09
//\u6574\u5957\uFF08index.js\uFF09\u89C4\u5219\u521D\u59CB\u5316\u7684\u65F6\u5019\u4E5F\u4F1A\u8C03\u7528
router.beforeEach((to,from,next)=&gt;{

  console.log(&#39;\u524D\u7F6E\u8DEF\u7531\u5B88\u536B&#39;,to,from);
  //\u5224\u65AD\u662F\u5426\u9700\u8981\u9274\u5B9A\u6743\u9650
  if(to.meta.isAuth){
    if(localStorage.getItem(&#39;name&#39;)===&#39;clean&#39;){
      document.title = to.meta.title || &#39;Clean&#39;
      next()//\u653E\u884C
    }else{
      alert(&#39;name\u4E0D\u6B63\u786E\uFF01\u6CA1\u6709\u6743\u9650\u8BBF\u95EE&#39;)
    }
  }else{
    document.title = to.meta.title || &#39;Clean&#39;
    next()//\u653E\u884C
  }

}
)

//\u540E\u7F6E\u8DEF\u7531\u5B88\u536B\uFF08\u6CA1\u6709next\u53C2\u6570\uFF09
//\u521D\u59CB\u5316\u7684\u65F6\u5019\u88AB\u8C03\u7528\u3001\u6BCF\u6B21\u8DEF\u7531\u5207\u6362\u4E4B\u540E\u88AB\u8C03\u7528
router.afterEach((to,from)=&gt;{
  console.log(&#39;\u524D\u7F6E\u8DEF\u7531\u5B88\u536B&#39;,to,from);
  document.title = to.meta.title || &#39;Clean&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 4.\u72EC\u4EAB\u8DEF\u7531\u5B88\u536B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> beforeEnter:(to,from,next)=&gt;{
            //\u5224\u65AD\u662F\u5426\u9700\u8981\u9274\u5B9A\u6743\u9650
            if(to.meta.isAuth){
              if(localStorage.getItem(&#39;name&#39;)===&#39;clean&#39;){
                document.title = to.meta.title || &#39;Clean&#39;
                next()//\u653E\u884C
              }else{
                alert(&#39;name\u4E0D\u6B63\u786E\uFF01\u6CA1\u6709\u6743\u9650\u8BBF\u95EE&#39;)
              }
            }else{
              document.title = to.meta.title || &#39;Clean&#39;
              next()//\u653E\u884C
            }
          }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B 5.\u7EC4\u4EF6\u5185\u8DEF\u7531\u5B88\u536B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  //\u901A\u8FC7\u8DEF\u7531\u89C4\u5219\uFF0C\u8FDB\u5165\u8BE5\u7EC4\u4EF6\u65F6\u88AB\u8C03\u7528
  beforeRouteEnter(to,from,next){
    if(to.meta.isAuth){
    if(localStorage.getItem(&#39;name&#39;)===&#39;clean&#39;){
      document.title = to.meta.title || &#39;Clean&#39;
      next()//\u653E\u884C
    }else{
      alert(&#39;name\u4E0D\u6B63\u786E\uFF01\u6CA1\u6709\u6743\u9650\u8BBF\u95EE&#39;)
    }
  }else{
    document.title = to.meta.title || &#39;Clean&#39;
    next()//\u653E\u884C
  }
  },

  //\u901A\u8FC7\u8DEF\u7531\u89C4\u5219\uFF0C\u79BB\u5F00\u8BE5\u7EC4\u4EF6\u65F6\u88AB\u8C03\u7528
  beforeRouteLeave(to,from,next){

  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>13.\u8DEF\u7531\u5668\u7684\u4E24\u79CD\u5DE5\u4F5C\u6A21\u5F0F</strong></p><p>\u200B 1.\u5BF9\u4E8E\u4E00\u4E2A url \u6765\u8BF4\uFF0C\u4EC0\u4E48\u4E8B hash \u503C\uFF1F\u2014\u2014\u2014\u2014#\u53CA\u5176\u540E\u9762\u7684\u5185\u5BB9\u5C31\u662F hash \u503C</p><p>\u200B 2.hash \u503C\u4E0D\u4F1A\u5305\u62EC\u5728 HTTP \u8BF7\u6C42\u4E2D\uFF0C\u5373 hash \u503C\u4E0D\u4F1A\u5E26\u7ED9\u670D\u52A1\u5668</p><p>\u200B 3.hash \u6A21\u5F0F\uFF1A</p><p>\u200B 1.\u5730\u5740\u4E2D\u6C38\u8FDC\u5E26\u7740#\u53F7\uFF0C\u4E0D\u7F8E\u89C2</p><p>\u200B 2.\u82E5\u4EE5\u540E\u5C06\u5730\u5740\u901A\u8FC7\u7B2C\u4E09\u65B9\u624B\u673A app \u5206\u4EAB\uFF0C\u82E5 app \u6821\u9A8C\u4E25\u683C\uFF0C\u5219\u5730\u5740\u4F1A\u6807\u8BB0\u4E3A\u4E0D\u5408\u6CD5</p><p>\u200B 3.\u517C\u5BB9\u6027\u8F83\u597D</p><p>\u200B 4.history \u6A21\u5F0F</p><p>\u200B 1.\u5730\u5740\u5E72\u51C0\uFF0C\u7F8E\u89C2</p><p>\u200B 2.\u517C\u5BB9\u6027\u548C hash \u6A21\u5F0F\u76F8\u6BD4\u7565\u5DEE</p><p>\u200B 3.\u5E94\u7528\u90E8\u7F72\u4E0A\u7EBF\u65F6\u9700\u8981\u540E\u7AEF\u4EBA\u5458\u652F\u6301\uFF0C\u89E3\u51B3\u5237\u65B0\u9875\u9762\u670D\u52A1\u7AEF 404 \u7684\u95EE\u9898</p>`,166);function v(r,u){return i(),s("div",null,[t,a(" ![image-20220123151308468](C:\\Users\\n'j\\AppData\\Roaming\\Typora\\typora-user-images\\image-20220123151308468.png) "),d])}const m=n(l,[["render",v],["__file","Vue2.html.vue"]]);export{m as default};
