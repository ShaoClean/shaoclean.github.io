import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,d as n}from"./app.649f809a.js";const s={},o=n(`<h1 id="reactcli" tabindex="-1"><a class="header-anchor" href="#reactcli" aria-hidden="true">#</a> ReactCli</h1><h2 id="\u4E00\u3001todolist\u6848\u4F8B\u76F8\u5173\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001todolist\u6848\u4F8B\u76F8\u5173\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u4E00\u3001todoList\u6848\u4F8B\u76F8\u5173\u77E5\u8BC6\u70B9</h2><pre><code>	1.\u62C6\u5206\u7EC4\u4EF6\u3001\u5B9E\u73B0\u9759\u6001\u7EC4\u4EF6\uFF0C\u6CE8\u610F\uFF1AclassName\u3001style\u7684\u5199\u6CD5
	2.\u52A8\u6001\u521D\u59CB\u5316\u5217\u8868\uFF0C\u5982\u4F55\u786E\u5B9A\u5C06\u6570\u636E\u653E\u5728\u54EA\u4E2A\u7EC4\u4EF6\u7684state\u4E2D\uFF1F
				\u2014\u2014\u67D0\u4E2A\u7EC4\u4EF6\u4F7F\u7528\uFF1A\u653E\u5728\u5176\u81EA\u8EAB\u7684state\u4E2D
				\u2014\u2014\u67D0\u4E9B\u7EC4\u4EF6\u4F7F\u7528\uFF1A\u653E\u5728\u4ED6\u4EEC\u5171\u540C\u7684\u7236\u7EC4\u4EF6state\u4E2D\uFF08\u5B98\u65B9\u79F0\u6B64\u64CD\u4F5C\u4E3A\uFF1A\u72B6\u6001\u63D0\u5347\uFF09
	3.\u5173\u4E8E\u7236\u5B50\u4E4B\u95F4\u901A\u4FE1\uFF1A
			1.\u3010\u7236\u7EC4\u4EF6\u3011\u7ED9\u3010\u5B50\u7EC4\u4EF6\u3011\u4F20\u9012\u6570\u636E\uFF1A\u901A\u8FC7props\u4F20\u9012
			2.\u3010\u5B50\u7EC4\u4EF6\u3011\u7ED9\u3010\u7236\u7EC4\u4EF6\u3011\u4F20\u9012\u6570\u636E\uFF1A\u901A\u8FC7props\u4F20\u9012\uFF0C\u8981\u6C42\u7236\u63D0\u524D\u7ED9\u5B50\u4F20\u9012\u4E00\u4E2A\u51FD\u6570
	4.\u6CE8\u610FdefaultChecked \u548C checked\u7684\u533A\u522B\uFF0C\u7C7B\u4F3C\u7684\u8FD8\u6709\uFF1AdefaultValue \u548C value
	5.\u72B6\u6001\u5728\u54EA\u91CC\uFF0C\u64CD\u4F5C\u72B6\u6001\u7684\u65B9\u6CD5\u5C31\u5728\u54EA\u91CC
</code></pre><h2 id="\u4E8C\u3001github\u641C\u7D22\u6848\u4F8B\u76F8\u5173\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001github\u641C\u7D22\u6848\u4F8B\u76F8\u5173\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> \u4E8C\u3001github\u641C\u7D22\u6848\u4F8B\u76F8\u5173\u77E5\u8BC6\u70B9</h2><pre><code>	1.\u8BBE\u8BA1\u72B6\u6001\u65F6\u8981\u8003\u8651\u5168\u9762\uFF0C\u4F8B\u5982\u5E26\u6709\u7F51\u7EDC\u8BF7\u6C42\u7684\u7EC4\u4EF6\uFF0C\u8981\u8003\u8651\u8BF7\u6C42\u5931\u8D25\u600E\u4E48\u529E\u3002
	2.ES6\u5C0F\u77E5\u8BC6\u70B9\uFF1A\u89E3\u6784\u8D4B\u503C+\u91CD\u547D\u540D
				let obj = {a:{b:1}}
				const {a} = obj; //\u4F20\u7EDF\u89E3\u6784\u8D4B\u503C
				const {a:{b}} = obj; //\u8FDE\u7EED\u89E3\u6784\u8D4B\u503C
				const {a:{b:value}} = obj; //\u8FDE\u7EED\u89E3\u6784\u8D4B\u503C+\u91CD\u547D\u540D
	3.\u6D88\u606F\u8BA2\u9605\u4E0E\u53D1\u5E03\u673A\u5236
				1.\u5148\u8BA2\u9605\uFF0C\u518D\u53D1\u5E03\uFF08\u7406\u89E3\uFF1A\u6709\u4E00\u79CD\u9694\u7A7A\u5BF9\u8BDD\u7684\u611F\u89C9\uFF09
				2.\u9002\u7528\u4E8E\u4EFB\u610F\u7EC4\u4EF6\u95F4\u901A\u4FE1
				3.\u8981\u5728\u7EC4\u4EF6\u7684componentWillUnmount\u4E2D\u53D6\u6D88\u8BA2\u9605
	4.fetch\u53D1\u9001\u8BF7\u6C42\uFF08\u5173\u6CE8\u5206\u79BB\u7684\u8BBE\u8BA1\u601D\u60F3\uFF09
				try {
					const response= await fetch(\`/api1/search/users2?q=\${keyWord}\`)
					const data = await response.json()
					console.log(data);
				} catch (error) {
					console.log(&#39;\u8BF7\u6C42\u51FA\u9519&#39;,error);
				}
</code></pre><h2 id="\u4E09\u3001\u8DEF\u7531\u7684\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u8DEF\u7531\u7684\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u4E09\u3001\u8DEF\u7531\u7684\u57FA\u672C\u4F7F\u7528</h2><p>1.\u660E\u786E\u597D\u754C\u9762\u4E2D\u7684\u5BFC\u822A\u533A\u3001\u5C55\u793A\u533A 2.\u5BFC\u822A\u533A\u7684a\u6807\u7B7E\u6539\u4E3ALink\u6807\u7B7E <code>&lt;Link to=&quot;/xxxxx&quot;&gt;Demo&lt;/Link&gt;</code> 3.\u5C55\u793A\u533A\u5199Route\u6807\u7B7E\u8FDB\u884C\u8DEF\u5F84\u7684\u5339\u914D <code>&lt;Route path=&#39;/xxxx&#39; component={Demo}/&gt;</code> 4.<code>&lt;App&gt;</code>\u7684\u6700\u5916\u4FA7\u5305\u88F9\u4E86\u4E00\u4E2A<code>&lt;BrowserRouter&gt;\u6216&lt;HashRouter&gt;</code></p><h2 id="\u56DB\u3001\u8DEF\u7531\u7EC4\u4EF6\u4E0E\u4E00\u822C\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001\u8DEF\u7531\u7EC4\u4EF6\u4E0E\u4E00\u822C\u7EC4\u4EF6" aria-hidden="true">#</a> \u56DB\u3001\u8DEF\u7531\u7EC4\u4EF6\u4E0E\u4E00\u822C\u7EC4\u4EF6</h2><p>1.\u5199\u6CD5\u4E0D\u540C\uFF1A \u4E00\u822C\u7EC4\u4EF6\uFF1A<code>&lt;Demo/&gt;</code> \u8DEF\u7531\u7EC4\u4EF6\uFF1A<code>&lt;Route path=&quot;/demo&quot; component={Demo}/&gt;</code> 2.\u5B58\u653E\u4F4D\u7F6E\u4E0D\u540C\uFF1A \u4E00\u822C\u7EC4\u4EF6\uFF1Acomponents \u8DEF\u7531\u7EC4\u4EF6\uFF1Apages 3.\u63A5\u6536\u5230\u7684props\u4E0D\u540C\uFF1A \u4E00\u822C\u7EC4\u4EF6\uFF1A\u5199\u7EC4\u4EF6\u6807\u7B7E\u65F6\u4F20\u9012\u4E86\u4EC0\u4E48\uFF0C\u5C31\u80FD\u6536\u5230\u4EC0\u4E48 \u8DEF\u7531\u7EC4\u4EF6\uFF1A\u63A5\u6536\u5230\u4E09\u4E2A\u56FA\u5B9A\u7684\u5C5E\u6027</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">history</span><span class="token operator">:</span>
    <span class="token literal-property property">go</span><span class="token operator">:</span> \u0192 <span class="token function">go</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
    <span class="token literal-property property">goBack</span><span class="token operator">:</span> \u0192 <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token literal-property property">goForward</span><span class="token operator">:</span> \u0192 <span class="token function">goForward</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token literal-property property">push</span><span class="token operator">:</span> \u0192 <span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
<span class="token literal-property property">replace</span><span class="token operator">:</span> \u0192 <span class="token function">replace</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span>
    <span class="token literal-property property">location</span><span class="token operator">:</span>
    <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token literal-property property">match</span><span class="token operator">:</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/about&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E94\u3001navlink\u4E0E\u5C01\u88C5navlink" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001navlink\u4E0E\u5C01\u88C5navlink" aria-hidden="true">#</a> \u4E94\u3001NavLink\u4E0E\u5C01\u88C5NavLink</h2><pre><code>			1.NavLink\u53EF\u4EE5\u5B9E\u73B0\u8DEF\u7531\u94FE\u63A5\u7684\u9AD8\u4EAE\uFF0C\u901A\u8FC7activeClassName\u6307\u5B9A\u6837\u5F0F\u540D
</code></pre><h2 id="\u516D\u3001switch\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001switch\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u516D\u3001Switch\u7684\u4F7F\u7528</h2><pre><code>			1.\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0Cpath\u548Ccomponent\u662F\u4E00\u4E00\u5BF9\u5E94\u7684\u5173\u7CFB\u3002
			2.Switch\u53EF\u4EE5\u63D0\u9AD8\u8DEF\u7531\u5339\u914D\u6548\u7387(\u5355\u4E00\u5339\u914D)\u3002
</code></pre><h2 id="\u4E03\u3001\u89E3\u51B3\u591A\u7EA7\u8DEF\u5F84\u5237\u65B0\u9875\u9762\u6837\u5F0F\u4E22\u5931\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001\u89E3\u51B3\u591A\u7EA7\u8DEF\u5F84\u5237\u65B0\u9875\u9762\u6837\u5F0F\u4E22\u5931\u7684\u95EE\u9898" aria-hidden="true">#</a> \u4E03\u3001\u89E3\u51B3\u591A\u7EA7\u8DEF\u5F84\u5237\u65B0\u9875\u9762\u6837\u5F0F\u4E22\u5931\u7684\u95EE\u9898</h2><pre><code>			1.public/index.html \u4E2D \u5F15\u5165\u6837\u5F0F\u65F6\u4E0D\u5199 ./ \u5199 / \uFF08\u5E38\u7528\uFF09
			2.public/index.html \u4E2D \u5F15\u5165\u6837\u5F0F\u65F6\u4E0D\u5199 ./ \u5199 %PUBLIC_URL% \uFF08\u5E38\u7528\uFF09
			3.\u4F7F\u7528HashRouter
</code></pre><h2 id="\u516B\u3001\u8DEF\u7531\u7684\u4E25\u683C\u5339\u914D\u4E0E\u6A21\u7CCA\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u8DEF\u7531\u7684\u4E25\u683C\u5339\u914D\u4E0E\u6A21\u7CCA\u5339\u914D" aria-hidden="true">#</a> \u516B\u3001\u8DEF\u7531\u7684\u4E25\u683C\u5339\u914D\u4E0E\u6A21\u7CCA\u5339\u914D</h2><pre><code>			1.\u9ED8\u8BA4\u4F7F\u7528\u7684\u662F\u6A21\u7CCA\u5339\u914D\uFF08\u7B80\u5355\u8BB0\uFF1A\u3010\u8F93\u5165\u7684\u8DEF\u5F84\u3011\u5FC5\u987B\u5305\u542B\u8981\u3010\u5339\u914D\u7684\u8DEF\u5F84\u3011\uFF0C\u4E14\u987A\u5E8F\u8981\u4E00\u81F4\uFF09
			2.\u5F00\u542F\u4E25\u683C\u5339\u914D\uFF1A&lt;Route exact={true} path=&quot;/about&quot; component={About}/&gt;
			3.\u4E25\u683C\u5339\u914D\u4E0D\u8981\u968F\u4FBF\u5F00\u542F\uFF0C\u9700\u8981\u518D\u5F00\uFF0C\u6709\u4E9B\u65F6\u5019\u5F00\u542F\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u7EE7\u7EED\u5339\u914D\u4E8C\u7EA7\u8DEF\u7531
</code></pre><h2 id="\u4E5D\u3001redirect\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E5D\u3001redirect\u7684\u4F7F\u7528" aria-hidden="true">#</a> \u4E5D\u3001Redirect\u7684\u4F7F\u7528</h2><pre><code>			1.\u4E00\u822C\u5199\u5728\u6240\u6709\u8DEF\u7531\u6CE8\u518C\u7684\u6700\u4E0B\u65B9\uFF0C\u5F53\u6240\u6709\u8DEF\u7531\u90FD\u65E0\u6CD5\u5339\u914D\u65F6\uFF0C\u8DF3\u8F6C\u5230Redirect\u6307\u5B9A\u7684\u8DEF\u7531
			2.\u5177\u4F53\u7F16\u7801\uFF1A
					&lt;Switch&gt;
						&lt;Route path=&quot;/about&quot; component={About}/&gt;
						&lt;Route path=&quot;/home&quot; component={Home}/&gt;
						&lt;Redirect to=&quot;/about&quot;/&gt;
					&lt;/Switch&gt;
</code></pre><h2 id="\u5341\u3001\u5D4C\u5957\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u5341\u3001\u5D4C\u5957\u8DEF\u7531" aria-hidden="true">#</a> \u5341\u3001\u5D4C\u5957\u8DEF\u7531</h2><pre><code>			1.\u6CE8\u518C\u5B50\u8DEF\u7531\u65F6\u8981\u5199\u4E0A\u7236\u8DEF\u7531\u7684path\u503C
			2.\u8DEF\u7531\u7684\u5339\u914D\u662F\u6309\u7167\u6CE8\u518C\u8DEF\u7531\u7684\u987A\u5E8F\u8FDB\u884C\u7684
</code></pre><h2 id="\u5341\u4E00\u3001\u5411\u8DEF\u7531\u7EC4\u4EF6\u4F20\u9012\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E00\u3001\u5411\u8DEF\u7531\u7EC4\u4EF6\u4F20\u9012\u53C2\u6570" aria-hidden="true">#</a> \u5341\u4E00\u3001\u5411\u8DEF\u7531\u7EC4\u4EF6\u4F20\u9012\u53C2\u6570</h2><p>1.params\u53C2\u6570 \u8DEF\u7531\u94FE\u63A5(\u643A\u5E26\u53C2\u6570)\uFF1A<code>&lt;Link to=&#39;/demo/test/tom/18&#39;}&gt;\u8BE6\u60C5&lt;/Link&gt;</code> \u6CE8\u518C\u8DEF\u7531(\u58F0\u660E\u63A5\u6536)\uFF1A<code>&lt;Route path=&quot;/demo/test/:name/:age&quot; component={Test}/&gt;</code> \u63A5\u6536\u53C2\u6570\uFF1Athis.props.match.params 2.search\u53C2\u6570 \u8DEF\u7531\u94FE\u63A5(\u643A\u5E26\u53C2\u6570)\uFF1A<code>&lt;Link to=&#39;/demo/test?name=tom&amp;age=18&#39;}&gt;\u8BE6\u60C5&lt;/Link&gt;</code> \u6CE8\u518C\u8DEF\u7531(\u65E0\u9700\u58F0\u660E\uFF0C\u6B63\u5E38\u6CE8\u518C\u5373\u53EF)\uFF1A<code>&lt;Route path=&quot;/demo/test&quot; component={Test}/&gt;</code> \u63A5\u6536\u53C2\u6570\uFF1Athis.props.location.search \u5907\u6CE8\uFF1A\u83B7\u53D6\u5230\u7684search\u662Furlencoded\u7F16\u7801\u5B57\u7B26\u4E32\uFF0C\u9700\u8981\u501F\u52A9qs(import qs from &#39;qs&#39;)\u89E3\u6790 3.state\u53C2\u6570 \u8DEF\u7531\u94FE\u63A5(\u643A\u5E26\u53C2\u6570)\uFF1A<code>&lt;Link to={{pathname:&#39;/demo/test&#39;,state:{name:&#39;tom&#39;,age:18}}}&gt;\u8BE6\u60C5&lt;/Link&gt;</code> \u6CE8\u518C\u8DEF\u7531(\u65E0\u9700\u58F0\u660E\uFF0C\u6B63\u5E38\u6CE8\u518C\u5373\u53EF)\uFF1A<code>&lt;Route path=&quot;/demo/test&quot; component={Test}/&gt;</code> \u63A5\u6536\u53C2\u6570\uFF1Athis.props.location.state \u5907\u6CE8\uFF1A\u5237\u65B0\u4E5F\u53EF\u4EE5\u4FDD\u7559\u4F4F\u53C2\u6570</p><h2 id="\u5341\u4E8C\u3001\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E8C\u3001\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A" aria-hidden="true">#</a> \u5341\u4E8C\u3001\u7F16\u7A0B\u5F0F\u8DEF\u7531\u5BFC\u822A</h2><pre><code>\u501F\u52A9this.prosp.history\u5BF9\u8C61\u4E0A\u7684API\u5BF9\u64CD\u4F5C\u8DEF\u7531\u8DF3\u8F6C\u3001\u524D\u8FDB\u3001\u540E\u9000
        -this.prosp.history.push()
        -this.prosp.history.replace()
        -this.prosp.history.goBack()
        -this.prosp.history.goForward()
        -this.prosp.history.go()
</code></pre><p>\u4E00\u822C\u7EC4\u4EF6\u8EAB\u4E0A\u6CA1\u6709history\u5C5E\u6027,\u9700\u8981\u7ECF\u8FC7withRouter()\u51FD\u6570\u52A0\u5DE5\uFF0C\u5C06\u4E00\u822C\u7EC4\u4EF6\u53D8\u4E3A\u8DEF\u7531\u7EC4\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import {withRouter} from &#39;react-router-dom&#39;
class MyComponent {
	render(){}
	//.....
}
export default withRouter(MyComponent)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5341\u4E09\u3001browserrouter\u4E0Ehashrouter\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5341\u4E09\u3001browserrouter\u4E0Ehashrouter\u7684\u533A\u522B" aria-hidden="true">#</a> \u5341\u4E09\u3001BrowserRouter\u4E0EHashRouter\u7684\u533A\u522B</h2><pre><code>1.\u5E95\u5C42\u539F\u7406\u4E0D\u4E00\u6837\uFF1A
    BrowserRouter\u4F7F\u7528\u7684\u662FH5\u7684history API\uFF0C\u4E0D\u517C\u5BB9IE9\u53CA\u4EE5\u4E0B\u7248\u672C\u3002
    HashRouter\u4F7F\u7528\u7684\u662FURL\u7684\u54C8\u5E0C\u503C\u3002
2.path\u8868\u73B0\u5F62\u5F0F\u4E0D\u4E00\u6837
    BrowserRouter\u7684\u8DEF\u5F84\u4E2D\u6CA1\u6709#,\u4F8B\u5982\uFF1Alocalhost:3000/demo/test
    HashRouter\u7684\u8DEF\u5F84\u5305\u542B#,\u4F8B\u5982\uFF1Alocalhost:3000/#/demo/test
3.\u5237\u65B0\u540E\u5BF9\u8DEF\u7531state\u53C2\u6570\u7684\u5F71\u54CD
    (1).BrowserRouter\u6CA1\u6709\u4EFB\u4F55\u5F71\u54CD\uFF0C\u56E0\u4E3Astate\u4FDD\u5B58\u5728history\u5BF9\u8C61\u4E2D\u3002
    (2).HashRouter\u5237\u65B0\u540E\u4F1A\u5BFC\u81F4\u8DEF\u7531state\u53C2\u6570\u7684\u4E22\u5931\uFF01\uFF01\uFF01
4.\u5907\u6CE8\uFF1AHashRouter\u53EF\u4EE5\u7528\u4E8E\u89E3\u51B3\u4E00\u4E9B\u8DEF\u5F84\u9519\u8BEF\u76F8\u5173\u7684\u95EE\u9898\u3002
</code></pre><h2 id="\u5341\u56DB\u3001antd\u7684\u6309\u9700\u5F15\u5165-\u81EA\u5B9A\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u5341\u56DB\u3001antd\u7684\u6309\u9700\u5F15\u5165-\u81EA\u5B9A\u4E3B\u9898" aria-hidden="true">#</a> \u5341\u56DB\u3001antd\u7684\u6309\u9700\u5F15\u5165+\u81EA\u5B9A\u4E3B\u9898</h2><pre><code>1.\u5B89\u88C5\u4F9D\u8D56\uFF1Ayarn add react-app-rewired customize-cra babel-plugin-import less less-loader
2.\u4FEE\u6539package.json
        ....
            &quot;scripts&quot;: {
                &quot;start&quot;: &quot;react-app-rewired start&quot;,
                &quot;build&quot;: &quot;react-app-rewired build&quot;,
                &quot;test&quot;: &quot;react-app-rewired test&quot;,
                &quot;eject&quot;: &quot;react-scripts eject&quot;
            },
        ....
3.\u6839\u76EE\u5F55\u4E0B\u521B\u5EFAconfig-overrides.js
        //\u914D\u7F6E\u5177\u4F53\u7684\u4FEE\u6539\u89C4\u5219
        const { override, fixBabelImports,addLessLoader} = require(&#39;customize-cra&#39;);
        module.exports = override(
            fixBabelImports(&#39;import&#39;, {
                libraryName: &#39;antd&#39;,
                libraryDirectory: &#39;es&#39;,
                style: true,
            }),
            addLessLoader({
                lessOptions:{
                    javascriptEnabled: true,
                    modifyVars: { &#39;@primary-color&#39;: &#39;green&#39; },
                }
            }),
        );
    4.\u5907\u6CE8\uFF1A\u4E0D\u7528\u5728\u7EC4\u4EF6\u91CC\u4EB2\u81EA\u5F15\u5165\u6837\u5F0F\u4E86\uFF0C\u5373\uFF1Aimport &#39;antd/dist/antd.css&#39;\u5E94\u8BE5\u5220\u6389
</code></pre>`,32),r=[o];function p(i,c){return e(),a("div",null,r)}const u=t(s,[["render",p],["__file","ReactCli.html.vue"]]);export{u as default};
