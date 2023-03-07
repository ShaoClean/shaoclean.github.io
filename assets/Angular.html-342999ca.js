import{$ as t,a0 as s,a1 as l,a2 as e,a3 as n,a5 as d,a4 as a,C as r}from"./framework-888972eb.js";const c={},o=a(`<h1 id="angular" tabindex="-1"><a class="header-anchor" href="#angular" aria-hidden="true">#</a> Angular</h1><h2 id="_1-搭建开发环境-需要node版本10以上" tabindex="-1"><a class="header-anchor" href="#_1-搭建开发环境-需要node版本10以上" aria-hidden="true">#</a> 1.搭建开发环境(需要node版本10以上)</h2><p>1.下载并安装脚手架工具</p><p><code>npm i -g @angular/cli</code></p><p>2.运行脚手架并创建空白项目</p><p><code>ng new name</code></p><p>3.运行项目</p><p><code>npm start</code></p><p>查看当前npm默认的下载仓库地址</p><p><code>npm config get registry</code></p><p>解决在编辑器终端中无法加载ng.ps1的错误</p><p>1.用管理员身份打开windows PowerShell</p><p>2.在powershell中输入</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set-ExecutionPolicy RemoteSigned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再输入A，更改权限</p><p>3.查看是否修改成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> get-ExecutionPolicy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示RemoteSigned即可</p><p>用ionic运行：npm run ionic:serve</p><h2 id="_2-模板语法" tabindex="-1"><a class="header-anchor" href="#_2-模板语法" aria-hidden="true">#</a> 2.模板语法</h2><h3 id="_1-组件" tabindex="-1"><a class="header-anchor" href="#_1-组件" aria-hidden="true">#</a> 1.组件</h3><h3 id="_2-管道-过滤器" tabindex="-1"><a class="header-anchor" href="#_2-管道-过滤器" aria-hidden="true">#</a> 2.管道(过滤器)</h3><p>​ 管道用来对字符串、货币金额、日期和其它显示数据进行转换和格式化。管道是一些简单的函数，可以在模板表达式中用来接收输入值并返回一个转换后的值。</p><h4 id="_1-date-将数据转换成指定格式的时间日期" tabindex="-1"><a class="header-anchor" href="#_1-date-将数据转换成指定格式的时间日期" aria-hidden="true">#</a> 1.<code>date</code>:将数据转换成指定格式的时间日期</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;date转换时间日期{{time | date:&quot;YYYY年MM月dd日&quot;}}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 结果输出2022年3月2日</p><p>​ 注意，YYYY必须全部大写 MM必须全部大写 dd必须全部小写</p><h4 id="_2-uppercase和lowercase-分别将数据转换成大写和小写" tabindex="-1"><a class="header-anchor" href="#_2-uppercase和lowercase-分别将数据转换成大写和小写" aria-hidden="true">#</a> 2.<code>uppercase</code>和<code>lowercase</code>:分别将数据转换成大写和小写</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;uppercase将小写转换成大写{{xiaoxie | uppercase}}&lt;/p&gt;
&lt;p&gt;lowercase将大写转换成小写{{daxie | lowercase}}&lt;/p&gt;

export class ComponentName implements OnInit{
	xiaoxie = &#39;aaa&#39;
	daxie = &#39;AAA&#39;
}

输出
AAA
aaa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-number-处理数据格式。" tabindex="-1"><a class="header-anchor" href="#_3-number-处理数据格式。" aria-hidden="true">#</a> 3.<code>number</code>:处理数据格式。</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span><span class="token punctuation">{</span> value_expression <span class="token operator">|</span> number <span class="token punctuation">[</span> <span class="token builtin class-name">:</span> digitsInfo <span class="token punctuation">[</span> <span class="token builtin class-name">:</span> locale <span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>P<span class="token operator">&gt;</span>number处理小数位数<span class="token punctuation">{</span><span class="token punctuation">{</span>x <span class="token operator">|</span> number:<span class="token string">&#39;4.0-3&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span>/P<span class="token operator">&gt;</span>

<span class="token builtin class-name">export</span> class ComponentName implements OnInit<span class="token punctuation">{</span>
	x:number <span class="token operator">=</span> <span class="token number">2222.3456</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：2222.346</p><p>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits} 即：整数位保留最小位数.小数位保留最小位数-小数位最大保留位置 默认值: 1.0-3，自动四舍五入</p><h4 id="_4-currency-将数据转换成货币格式。" tabindex="-1"><a class="header-anchor" href="#_4-currency-将数据转换成货币格式。" aria-hidden="true">#</a> 4.<code>currency</code>:将数据转换成货币格式。</h4><p>​ <code>{{b | currency:&#39;￥&#39;:true:&#39;4.2-2&#39;}}</code> ，这里的′￥′可以指定表达式的前缀，当为 false 时不显示符，当为 true 时，则显示 ￥ 符。后面的规定小数位数的参数和 number 的一样</p><h4 id="_5-percent-将数据转化为百分比格式-使用方法和number类似。" tabindex="-1"><a class="header-anchor" href="#_5-percent-将数据转化为百分比格式-使用方法和number类似。" aria-hidden="true">#</a> 5.<code>percent</code>:将数据转化为百分比格式，使用方法和number类似。</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{ value_expression | percent [ : digitsInfo [ : locale ] ] }}
&lt;P&gt;precnet处理百分比{{y | percent:&#39;2.0-3&#39;}}&lt;/P&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：44.879%</p><h4 id="_6-titlecase-将首字母转为大写" tabindex="-1"><a class="header-anchor" href="#_6-titlecase-将首字母转为大写" aria-hidden="true">#</a> 6.<code>titlecase</code>:将首字母转为大写</h4><h4 id="_7-slice显示指定的文本长度" tabindex="-1"><a class="header-anchor" href="#_7-slice显示指定的文本长度" aria-hidden="true">#</a> 7.<code>slice</code>显示指定的文本长度</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{{text | slice:1:4}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示第1到第3位文本</p><h4 id="_8-json把js对象序列化为json字符串" tabindex="-1"><a class="header-anchor" href="#_8-json把js对象序列化为json字符串" aria-hidden="true">#</a> 8.<code>json</code>把JS对象序列化为json字符串</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ts：
empList =[
    {id:&#39;100&#39;,name:&#39;张三&#39;,sex:1,age:&#39;18&#39;},
    {id:&#39;101&#39;,name:&#39;李四&#39;,sex:1,age:&#39;19&#39;},
    {id:&#39;102&#39;,name:&#39;王五&#39;,sex:0,age:&#39;20&#39;},
    {id:&#39;103&#39;,name:&#39;赵六&#39;,sex:0,age:&#39;21&#39;}
  ]
HTML：
&lt;p&gt;{{empList | json}}&lt;/p&gt;

结果：
[ { &quot;id&quot;: &quot;100&quot;, &quot;name&quot;: &quot;张三&quot;, &quot;sex&quot;: 1, &quot;age&quot;: &quot;18&quot; }, { &quot;id&quot;: &quot;101&quot;, &quot;name&quot;: &quot;李四&quot;, &quot;sex&quot;: 1, &quot;age&quot;: &quot;19&quot; }, { &quot;id&quot;: &quot;102&quot;, &quot;name&quot;: &quot;王五&quot;, &quot;sex&quot;: 0, &quot;age&quot;: &quot;20&quot; }, { &quot;id&quot;: &quot;103&quot;, &quot;name&quot;: &quot;赵六&quot;, &quot;sex&quot;: 0, &quot;age&quot;: &quot;21&quot; } ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-自定义管道" tabindex="-1"><a class="header-anchor" href="#_7-自定义管道" aria-hidden="true">#</a> 7.自定义管道</h4><p>​ 使用步骤：</p><p>​ ①创建管道class，实现转换功能</p><p>​ ②在模块中注册管道</p><p>​ ③在模板视图中使用管道</p><p>在app目录下创建 管道名.pipe.ts文件（也可以用指令创建管道：ng g pipe 管道名）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Pipe } from &quot;@angular/core&quot;;

@Pipe({
  name:&#39;changeSex&#39;
})

export class ChangeSex {
  transform(value:any){
    if(value==1){
      return &#39;男&#39;
    }else if(value ==0){
      return &#39;女&#39;
    }else{
      return &#39;未知&#39;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在app.module.ts中注册该管道（注册的名字和导入模块的名字都是类名）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { ChangeSex } from &#39;./sex.pipe&#39;;
@NgModule({
  declarations: [ChangeSex]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在HTML模板中使用该管道：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;h1&gt;员工列表&lt;/h1&gt;
&lt;table rules=&quot;all&quot;&gt;
  &lt;tr *ngFor=&quot;let emp of empList;let i =index&quot;&gt;
    &lt;td&gt;{{emp.id}}&lt;/td&gt;
    &lt;td&gt;{{emp.name}}&lt;/td&gt;
    &lt;td&gt;{{emp.age}}&lt;/td&gt;
    &lt;td&gt;{{emp.sex | changeSex:&#39;en&#39; }}&lt;/td&gt;
    &lt;td&gt;&lt;button (click)=&quot;deleteEmp(emp.id)&quot;&gt;删除信息&lt;/button&gt;&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
&lt;p *ngIf=&quot;empList.length==0&quot; &gt;没有员工信息了&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>①需要从@angular/core导入Pipe</p><p>②需要使用@Pipe装饰器，并在装饰器中指定name属性。后续在html模板中使用name属性使用该管道</p><p>③导出该管道class类，在该class类中使用固定函数<code>transform</code>编写过滤规则，该函数第一个参数是接收的值，该值为<code>|</code>管道符前的表达式的值。也可以从第二个开始之后接收多个参数，在HTML模板中传递参数（见④）</p><p>④管道也可以传递参数，在管道名后加<code>:参数1:参数2</code>，对应transform中第2、3...个接受的参数</p></blockquote><h3 id="_3-属性绑定" tabindex="-1"><a class="header-anchor" href="#_3-属性绑定" aria-hidden="true">#</a> 3.属性绑定</h3><p>angular的属性绑定可以设置HTML元素或指令的属性值。使用属性绑定，可以实现切换按钮、以编程方式设置路径、在组件间共享值。</p><h4 id="_1-如何绑定" tabindex="-1"><a class="header-anchor" href="#_1-如何绑定" aria-hidden="true">#</a> 1.<code>如何绑定</code>：</h4><p>使用中括号<code>[]</code>将属性设置为动态,一般来说是元素自带的属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img [src]=&quot;baseSrc&quot; height=&quot;50px&quot; &gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-绑定指令" tabindex="-1"><a class="header-anchor" href="#_2-绑定指令" aria-hidden="true">#</a> 2.<code>绑定指令</code>:</h4><p>要设置指令的属性，将指令放在方括号中，例如 <code>[ngClass]</code>，后跟等号和一个源属性。在这里，这个源属性的值是 <code>classes</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;/p [ngClass]=&quot;classes&quot;&gt; [ngClass] binding to the classes property making this blue&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-在组件之间绑定-组件间通信" tabindex="-1"><a class="header-anchor" href="#_3-在组件之间绑定-组件间通信" aria-hidden="true">#</a> 3.<code>在组件之间绑定（组件间通信）</code>：</h4><p>将需要接收的值在需要接收数据的组件中（子组件）加上<code>@Input()</code>装饰器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Input() getValue = &#39;&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在传递数据的组件（父组件）的标签中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>html:
&lt;test [getValue]=&quot;passValue&quot;&gt;&lt;/test&gt;

ts:
export class ComponentName implements OnInit{
	passValue = &#39;Value值传递成功！&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><p>Angular 不允许带有 <code>&lt;script&gt;</code> 标记的 HTML，既不能用于插值也不能用于属性绑定，这样就会阻止运行 JavaScript。</p><h3 id="_4-attribute-绑定、类绑定和样式绑定" tabindex="-1"><a class="header-anchor" href="#_4-attribute-绑定、类绑定和样式绑定" aria-hidden="true">#</a> 4.Attribute 绑定、类绑定和样式绑定</h3><p><code>Attribute</code>和<code>Property</code>之间的区别：</p><p>​ 两者都有属性的意思。</p><p>​ <code>Attribute</code>是标签属性。常见的标签属性有img标签的scr属性，a标签的href属性。</p><p>​ <code>Property</code>是对象属性。常见的对象属性有window上的document属性</p><p>Attribute 绑定语法类似于 Property 绑定，但不是直接在方括号之间放置元素的 Property，而是在 Attribute 名称前面加上前缀 <code>attr</code>，后跟一个点 <code>.</code>。然后，使用解析为字符串的表达式设置 Attribute 值。</p><h4 id="_1-attribute属性绑定" tabindex="-1"><a class="header-anchor" href="#_1-attribute属性绑定" aria-hidden="true">#</a> 1.<code>Attribute属性绑定</code>：</h4><p>​ 遵守angular属性绑定的基本语法，实现动态绑定。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">[attr.imclean</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>this.getValue<span class="token punctuation">&quot;</span></span><span class="token attr-name">]</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 这里的getValue用到了3.3组件绑定的值</p><p>​ 解析之后的html为：<code>&lt;p _ngcontent-ywi-c16=&quot;&quot; attributeclean=&quot;value传递成功&quot;&gt;attribute绑定&lt;/p&gt;</code></p><p>​ 如果直接写<code>&lt;p imclean=&quot;this.getValue&quot;&gt;&lt;/p&gt;</code>,那么解析成html为：</p><p>​ <code>&lt;p _ngcontent-ywi-c16=&quot;&quot; attributeclean=&quot;this.getValue&quot;&gt;attribute绑定&lt;/p&gt;</code></p><blockquote><p>当表达式解析为 <code>null</code> 或 <code>undefined</code> 时，Angular 会完全删除该 Attribute。</p></blockquote><h4 id="_2-绑定到colspan" tabindex="-1"><a class="header-anchor" href="#_2-绑定到colspan" aria-hidden="true">#</a> 2.<code>绑定到colspan</code></h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;tr&gt;&lt;td [attr.colspan]=&quot;1 + 1&quot;&gt;One-Two&lt;/td&gt;&lt;/tr&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,87),u=e("p",null,"有时，Property 名和 Attribute 名之间存在差异。",-1),v=e("code",null,"colspan",-1),p=e("code",null,"<tr>",-1),m=e("code",null,"colSpan",-1),h=e("code",null,"colspan",-1),g=e("code",null,"colSpan",-1),b={href:"https://angular.cn/guide/property-binding",target:"_blank",rel:"noopener noreferrer"},x={href:"https://angular.cn/guide/property-binding#colspan",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"colspan",-1),f=e("code",null,"colSpan",-1),q=a(`<h4 id="_3-绑定css样式" tabindex="-1"><a class="header-anchor" href="#_3-绑定css样式" aria-hidden="true">#</a> 3.<code>绑定CSS样式</code></h4><p>​ 1.绑定单个css样式时：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p [class.changeColor]=&quot;expression&quot;&gt; 绑定单一CSS类&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ changeColor是<code>.css</code>文件中写好的类名（类选择器），当表达式<code>expression</code>为真时显示样式，表达式为假时删除该样式</p><p>​ 2.绑定多个css样式</p><p>数组绑定：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p [class] = &quot;[&#39;changeColor&#39;,&#39;changeFont&#39;]&quot; &gt;绑定多个CSS类 &lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对象表达式绑定：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p [class] = &quot;{changeFont2:true,changeColor3:true}&quot; &gt;绑定多个CSS类 &lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用空格分割</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p [class] = &quot;&#39;changeColor2 changeFont2&#39;&quot; &gt;绑定多个CSS类 &lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>对于任何类似对象的表达式（例如 <code>object</code>、<code>Array</code>、<code>Map</code> 或 <code>Set</code>，必须更改对象的引用，Angular 才能更新类列表。在不更改对象引用的情况下只更新其 Attribute 是不会生效的</p></blockquote><h4 id="_4-绑定style样式" tabindex="-1"><a class="header-anchor" href="#_4-绑定style样式" aria-hidden="true">#</a> 4.<code>绑定style样式</code></h4><p>​ 1.绑定单一style样式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p [style.color]=&quot;&#39;red&#39;&quot;&gt;style绑定单一样式&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.绑定带单位的单一style样式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p [style.font-size.px]=&quot;40&quot;&gt;style绑定单一样式&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 3.绑定多个style样式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p [style]=&quot;&#39;width: 100px; height: 100px; background-color: cornflowerblue;&#39;&quot;&gt;style绑定多个样式&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 4.绑定多个style样式（对象形式）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p [style]=&quot;{width: &#39;100px&#39;, height: &#39;100px&#39;, backgroundColor: &#39;cornflowerblue&#39;}&quot;&gt;style绑定多个样式&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-指令绑定" tabindex="-1"><a class="header-anchor" href="#_5-指令绑定" aria-hidden="true">#</a> 5.指令绑定</h3><h4 id="_1-ngfor" tabindex="-1"><a class="header-anchor" href="#_1-ngfor" aria-hidden="true">#</a> 1.*ngFor</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;ul&gt;
  &lt;li *ngFor=&quot;let item of students;let i = index;index as a&quot;&gt;{{a}}-{{i}}-{{item.name}}&lt;/li&gt;
&lt;/ul&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：必须要在表达式中加上<code>let</code>,<code>item</code>是临时变量，<code>students</code>是组件中的数据。</p><p>ngFor会自动生成索引值，但是不可以直接引用。需要用<code>let i = index</code>或<code>index as a</code></p><h4 id="_2-ngif" tabindex="-1"><a class="header-anchor" href="#_2-ngif" aria-hidden="true">#</a> 2.*ngIf</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p *ngIf=&quot;age&gt;=18;else other&quot;&gt;age&gt;=18&lt;/p&gt;

&lt;ng-template #other&gt;
  &lt;p&gt; age&lt; 18 &lt;/p&gt;
&lt;/ng-template&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>expression表达式为true时显示内容，表达式为false时将该元素从Dom树上删除</p><p><code>else other</code>和<code>ng-template</code>标签配合使用。</p><h4 id="_3-ngstyle" tabindex="-1"><a class="header-anchor" href="#_3-ngstyle" aria-hidden="true">#</a> 3.[ngStyle]</h4><h4 id="_4-选择绑定-ngswitch" tabindex="-1"><a class="header-anchor" href="#_4-选择绑定-ngswitch" aria-hidden="true">#</a> 4.选择绑定[ngSwitch]</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div [ngSwitch]=&quot;value&quot;&gt;
  &lt;p *ngSwitchCase=&quot;0&quot;&gt;1&lt;/p&gt;
  &lt;p *ngSwitchCase=&quot;1&quot;&gt;2&lt;/p&gt;
  &lt;p *ngSwitchDefault&gt;3&lt;/p&gt;
&lt;/div&gt;
&lt;button (click)=&quot;newValue()&quot;&gt;change&lt;/button&gt;

export class NgSwitchComponent implements OnInit{
	value = 1
  	newValue(){
    let newV = Math.floor(Math.random()*3)
    this.value = newV
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[ngSwitch]</code>和JS中的<code>Switch</code>方法相似。</p><p>条件用[ngSwitch]=&quot;value&quot;来写，value为表达式。</p><p>选择分支用<code>*ngSwitchCase=&quot;0&quot;</code>，0为值。</p><p>当value的值为0时，执行<code>*ngSwitchCase=&quot;0&quot;</code>这条分支下的代码</p><h4 id="_5-双向绑定-ngmodel" tabindex="-1"><a class="header-anchor" href="#_5-双向绑定-ngmodel" aria-hidden="true">#</a> 5.双向绑定[(ngModel)]</h4><p>需要注意的是，<code>[(ngModel)]</code>双向数据绑定这个指令并不在<code>BrowerserModule</code>模块中，需要手动绑定额外的模块<code>FormsModule</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//app.module.ts
import { FormsModule } from &#39;@angular/forms&#39;;

@NgModule({
	imports:[
	BrowerserModule,
	FormsModule
	]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;input type=&quot;text&quot; placeholder=&quot;请输入内容&quot; [(ngModel)]=&#39;context&#39; (ngModelChange)=&quot;showContext()&quot;&gt;
&lt;p&gt;{{context}}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>(ngModelChange)=&quot;showContext()</code>中的<code>ngModelChange</code>是Angular提供的事件，在模型发生变化时执行相关的方法。</p><h4 id="_6-自定义指令" tabindex="-1"><a class="header-anchor" href="#_6-自定义指令" aria-hidden="true">#</a> 6.自定义指令</h4><p>创建自定义指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ng g directive 指令名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Angular Cli会自动在app目录下创建 指令名.directive.ts文件,该文件就是自定义指令文件，代码如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Directive, ElementRef } from &#39;@angular/core&#39;;

@Directive({
  selector: &#39;[appChangeColor]&#39;
})
export class ChangeColorDirective {
  constructor() { 
 
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该文件中带有默认的构造方法<code>constructor</code></p><p>可以从<code>@angular/core</code> 导入 <code>ElementRef</code>。<code>ElementRef</code> 的 <code>nativeElement</code> 属性会提供对宿主 DOM 元素的直接访问权限。</p><p>在指令的 <code>constructor()</code> 中添加 <code>ElementRef</code> 以注入对宿主 DOM 元素的引用，该元素就是 <code>appChangeColor</code> 的作用目标。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>constructor(el:ElementRef) { 
    el.nativeElement.style.color = &#39;red&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52),y=e("p",{appChangeColor:""},"directive-test works!",-1),C=a(`<p>对应的，会在app.module.ts中引用相应的指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { ChangeColorDirective } from &#39;./change-color.directive&#39;;
@NgModule({
	declarations:[ChangeColorDirective]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在html中应用指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p appChangeColor&gt;directive-test works!&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Angular中的指令分为三类：</p><p>（1）组件指令：NG中Component继承自Directive（组件是特殊的指令，组件的属性比directive多）</p><p>（2）结构型指令：会影响DOM树结构，必须使用*开头。</p><p>（3）属性型指令：不会影响DOM树结构，只是影响元素的外观。</p></blockquote><h2 id="_3-angular-模块-vs-nodejs-es6-模块" tabindex="-1"><a class="header-anchor" href="#_3-angular-模块-vs-nodejs-es6-模块" aria-hidden="true">#</a> 3.Angular 模块 VS NodeJs/ES6 模块</h2><p>NodeJs和ES6模块的作用：防止污染全局</p><p>Angular模块的作用：对于各种NG对象进行分组</p><h2 id="_4-服务和依赖注入" tabindex="-1"><a class="header-anchor" href="#_4-服务和依赖注入" aria-hidden="true">#</a> 4.服务和依赖注入</h2><p>​ Servece：服务，Angular认为组件是与用户交互的一种对象，其中的内容都应该与用户操作有关系的；而与用户操作无关的内容都应该剥离出去，放在“服务对象中”，为组件服务；例如：日志纪录</p><h3 id="_1-创建对象" tabindex="-1"><a class="header-anchor" href="#_1-创建对象" aria-hidden="true">#</a> 1.创建对象</h3><p>​ 创建对象有两种方式，一种是自己手动创建，另一种是依赖注入，只需要声明就可以。</p><h3 id="_2-用法" tabindex="-1"><a class="header-anchor" href="#_2-用法" aria-hidden="true">#</a> 2.用法</h3><h4 id="_1创建服务对象并制定服务提供者" tabindex="-1"><a class="header-anchor" href="#_1创建服务对象并制定服务提供者" aria-hidden="true">#</a> ①创建服务对象并制定服务提供者</h4><p>创建文件名为 服务名.service.ts的文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Injectable } from &quot;@angular/core&quot;;

@Injectable({
  providedIn:&#39;root&#39;
})

export class LogService{

  doLog( admin:string,action:string){
    let time = new Date()
    console.log(\`管理员\${admin}执行了操作：\${action}，时间为：\${time}\`);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>装饰器 @Injectable意为可注入的。</p><p>需要加入属性<code>providedIn:&#39;root&#39;</code>,这是服务的提供者，帮助我们创建服务，以便于应用到每个声明它的地方。</p><p><code>export class LogService</code>中的<code>LogService</code>是服务名，组件声明依赖的时候用到。</p><p>doLog函数中的参数需要用到几个就声明几个，在相应的组件中传入即可。</p><h4 id="_2在组件中声明依赖" tabindex="-1"><a class="header-anchor" href="#_2在组件中声明依赖" aria-hidden="true">#</a> ②在组件中声明依赖</h4><p>在组件中声明依赖之后，服务提供者就会将服务注入进组件，组件可以直接使用服务对象。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Component, OnInit } from &#39;@angular/core&#39;;
import { LogService } from &#39;../doLog.service&#39;;

@Component({
  selector: &#39;app-yi-lai-zhu-ru&#39;,
  templateUrl: &#39;./yi-lai-zhu-ru.component.html&#39;,
  styleUrls: [&#39;./yi-lai-zhu-ru.component.css&#39;]
})

export class YiLaiZhuRuComponent implements OnInit {
  logM

  constructor(logs:LogService) {
    this.logM = logs
  }

  add(){
    this.logM.doLog(&#39;clean&#39;,&#39;添加&#39;)
  }

  ngOnInit(): void {
  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在组件的构造函数中的参数中声明依赖<code>logs:LogService</code>,logs是形参名，LogService才是需要声明的依赖名</p><p>需要注意的是：<code>import { LogService } from &#39;../doLog.service&#39;;</code>没有导入的时候不能使用</p><h2 id="_5-httpclient服务对象" tabindex="-1"><a class="header-anchor" href="#_5-httpclient服务对象" aria-hidden="true">#</a> 5.HttpClient服务对象</h2><h3 id="_1-前端异步请求工具" tabindex="-1"><a class="header-anchor" href="#_1-前端异步请求工具" aria-hidden="true">#</a> 1.前端异步请求工具</h3><table><thead><tr><th>工具名</th><th>本质</th><th>优劣势</th></tr></thead><tbody><tr><td>原生XHR</td><td>let xhr = new XMLHttpRequest()</td><td>浏览器支持的原生技术；基于回调方式处理响应</td></tr><tr><td>JQuery.ajax()</td><td>也是XHR，只是进一步的封装</td><td>比原生要简单；底层还是基于回调方式处理想要</td></tr><tr><td>Axios</td><td>也是XHR，进一步的封装</td><td>比原生简单；基于Promise处理响应；请求可以排队、并发；听说也可以撤销请求。</td></tr><tr><td>NG HttpClient</td><td>也是XHR，进一步的封装</td><td>比原生简单；基于“观察者模式”处理响应；请求可以排队、并发、撤销（最早提供请求撤销功能）</td></tr><tr><td>Fetch</td><td>不再是XHR，是W3C提供的新技术，</td><td>比XHR从根本上更加先进；有的浏览器不支持；基于Promise</td></tr></tbody></table><p>HttpClient服务对象用于向指定的URL发起异步请求</p><h3 id="_2-观察者模式" tabindex="-1"><a class="header-anchor" href="#_2-观察者模式" aria-hidden="true">#</a> 2.观察者模式：</h3><p>Observable：可被关注的对象，在未来某事不确定的时间点可能抛出特定的事件。</p><p>subscribe：订阅。建立与可被关注的对象的契约，一旦得到新消息立即会被通知到</p><h3 id="_3-服务对象的作用范围" tabindex="-1"><a class="header-anchor" href="#_3-服务对象的作用范围" aria-hidden="true">#</a> 3.服务对象的作用范围</h3><p>声明服务提供者的方式：</p><p>方式1：在根模块中提供服务对象——在整个应用中服务是单一的（不管有多少个组件使用这个服务，它只创建一次服务对象）</p><p>方式2：在组件中提供服务对象——在每个组件中服务都是有一个实例的。</p><p>注意：项目中只要服务对象中有属性，只能用方式2；</p><h3 id="_4-使用步骤" tabindex="-1"><a class="header-anchor" href="#_4-使用步骤" aria-hidden="true">#</a> 4.使用步骤</h3><p>​ ①：在主模块中导入HttpClientModule模块：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>imports:[HttpClientModule]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ ②：在组件中声明依赖于HttpClient服务对象，就会被自动注入进来</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>construct(private http:HttpClient){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ ③：调用HTTP Client实例实现请求异步请求</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.http.get(url).subscribe( (res)=&gt;{} )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-typescript" tabindex="-1"><a class="header-anchor" href="#_6-typescript" aria-hidden="true">#</a> 6.TypeScript</h2><h3 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1.简介</h3><p>TypeScript简称TS，他是微软基于JS语言开发又高于JS的语言，可以编译成纯JS，在浏览器上运行。</p><p>浏览器不支持TS的运行，需要将TS转换成JS</p><p>使用Node命令安装TS编译器</p><h3 id="_2-环境安装" tabindex="-1"><a class="header-anchor" href="#_2-环境安装" aria-hidden="true">#</a> 2.环境安装</h3><p>１.安装TS</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.编译TS文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tsc hello.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将hello.ts编译成hello.js</p><h3 id="_3-ts的拓展特性" tabindex="-1"><a class="header-anchor" href="#_3-ts的拓展特性" aria-hidden="true">#</a> 3.TS的拓展特性：</h3><h4 id="_1-ts是强类型语言——js是弱类型语言" tabindex="-1"><a class="header-anchor" href="#_1-ts是强类型语言——js是弱类型语言" aria-hidden="true">#</a> <strong>1.TS是强类型语言——JS是弱类型语言</strong></h4><p>​ 强类型语言的特点：变量、函数、形参都需要声明类型</p><p>​ <strong>常用的数据类型关键字：</strong></p><p>​ String、number、boolean、any、Date、any[]、void</p><h4 id="_2-ts属性和方法定义了三种访问修饰符" tabindex="-1"><a class="header-anchor" href="#_2-ts属性和方法定义了三种访问修饰符" aria-hidden="true">#</a> <strong>2.TS属性和方法定义了三种访问修饰符</strong></h4><h5 id="_1private-私有属性-只能在类的内部使用-子类不能使用。" tabindex="-1"><a class="header-anchor" href="#_1private-私有属性-只能在类的内部使用-子类不能使用。" aria-hidden="true">#</a> <strong>①private</strong>：私有属性，只能在类的内部使用，子类不能使用。</h5><h5 id="_2protected-被保护的-被保护的成员只能在本类内部及子类内部使用。" tabindex="-1"><a class="header-anchor" href="#_2protected-被保护的-被保护的成员只能在本类内部及子类内部使用。" aria-hidden="true">#</a> <strong>②protected</strong>：被保护的，被保护的成员只能在本类内部及子类内部使用。</h5><h5 id="_3public-公共的-公共成员可以在本类内部以及外部使用" tabindex="-1"><a class="header-anchor" href="#_3public-公共的-公共成员可以在本类内部以及外部使用" aria-hidden="true">#</a> <strong>③public</strong>：公共的，公共成员可以在本类内部以及外部使用</h5><p>提示：一般情况下，class内部属性不应该让外界随便访问，通常设置为private；而方法一般都是允许调用的，一般设置为public，默认值就是public。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class User{
  protected sex:String = &#39;男 &#39;
  private myAge:number = 18
  name = &#39;CLean&#39;
  isShuai:boolean = true
  //字符串数组
  userList:String[]=[]
  //数字数组
  ageList:number[]=[]
  //任意类型数组
  jobList:any[]=[]
  private change(){
    this.name=&#39;shao&#39;
    this.userList = [&#39;user1&#39;,&#39;user2&#39;]
    this.ageList = [1,3,4]
    this.jobList = [1,222,&#39;hello&#39;]
  }
  //函数也可以声明类型，但是必须要有返回值
  fn1(n1:string,n2:number):any{
    return console.log(&#39;n1:&#39;,n1,&#39;n2:&#39;,n2);
  }
  //用void类型声明返回值的类型为空（没有返回值）
  fn2(n3:any):void{
    console.log(n3);
  }
  fn3(age:number){
    this.myAge = age
  }
  getSex(){
    return this.sex
  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修饰符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//访问修饰符的特殊用法
class Student {
/*   private sname:string
  constructor(newName:string){
    this.sname = newName
  } */

  //等同于以上代码
  constructor(private sname:string){

  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-面向对象编程——类和接口-class和interface" tabindex="-1"><a class="header-anchor" href="#_4-面向对象编程——类和接口-class和interface" aria-hidden="true">#</a> 4.面向对象编程——类和接口（class和interface）</h4><h5 id="_1-类的继承" tabindex="-1"><a class="header-anchor" href="#_1-类的继承" aria-hidden="true">#</a> ①：类的继承</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//NewPerson类继承了User类的属性和方法（extends：拓展、继承，一般理解为继承）
class NewPerson extends User {
 
  pFn1(){
    
  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-接口" tabindex="-1"><a class="header-anchor" href="#_2-接口" aria-hidden="true">#</a> ②：接口</h5><p>接口是一种特殊的类，它可以要求某一个类必须要求拥有XXX方法，例如管道必须提供<code>transform()</code>方法</p><p>在定义接口的时候用<code>interface 接口名</code>,在函数体内写上接口内必须包含的函数，不用写函数体。</p><p>在实现接口的时候使用<code>class 类名 implements 已经定义好的接口名</code>，在是实现接口的类中必须包含定义接口中的函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//接口的使用，接口是特殊的类

//1.定义接口
interface PeopleProperty {
  showAge():any
  showPeople():any
}

//2.实现接口
class People implements PeopleProperty{
  showAge() {
      
  }
  showPeople() {
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-装饰器" tabindex="-1"><a class="header-anchor" href="#_5-装饰器" aria-hidden="true">#</a> 5.装饰器</h4><h2 id="_7-生命周期" tabindex="-1"><a class="header-anchor" href="#_7-生命周期" aria-hidden="true">#</a> 7.生命周期</h2><p>Angular中的组件生命周期钩子函数调用顺序</p><h4 id="_0-constructor" tabindex="-1"><a class="header-anchor" href="#_0-constructor" aria-hidden="true">#</a> （0）constructor()</h4><p>组件被创建的时候触发</p><h4 id="_1-ngonchanges" tabindex="-1"><a class="header-anchor" href="#_1-ngonchanges" aria-hidden="true">#</a> （1）ngOnChanges()</h4><p>绑定的属性值发生改变</p><h4 id="_2-ngoninit" tabindex="-1"><a class="header-anchor" href="#_2-ngoninit" aria-hidden="true">#</a> （2）ngOnInit()</h4><p>组件初始化完毕（挂载完毕），相当于Vue中的mouted</p><h4 id="_3-ngdocheck" tabindex="-1"><a class="header-anchor" href="#_3-ngdocheck" aria-hidden="true">#</a> （3）ngDoCheck()</h4><p>紧跟在ngOnChanges()、ngOnInit（）之后的钩子函数。</p><p>组件检查到了系统对自己的影响。</p><h4 id="_4-ngaftercontentinit" tabindex="-1"><a class="header-anchor" href="#_4-ngaftercontentinit" aria-hidden="true">#</a> （4）ngAfterContentInit()</h4><p>组件的内容初始化完成</p><h4 id="_5-ngaftercontentchecked" tabindex="-1"><a class="header-anchor" href="#_5-ngaftercontentchecked" aria-hidden="true">#</a> （5）ngAfterContentChecked()</h4><p>组件的内容发生变化需要检查</p><h4 id="_6-ngafterviewinit" tabindex="-1"><a class="header-anchor" href="#_6-ngafterviewinit" aria-hidden="true">#</a> （6）ngAfterViewInit()</h4><p>组件的视图初始化完成</p><h4 id="_7-ngafterviewchecked" tabindex="-1"><a class="header-anchor" href="#_7-ngafterviewchecked" aria-hidden="true">#</a> （7）ngAfterViewChecked()</h4><p>组件的视图发生变化需要检查</p><h4 id="_8-ngondestory-载" tabindex="-1"><a class="header-anchor" href="#_8-ngondestory-载" aria-hidden="true">#</a> （8）ngOnDestory()载</h4><p>组件即将被从DOM树上卸载，适合执行一些资源释放性语句，录入：定时器销毁</p><h2 id="_8-组件间通信" tabindex="-1"><a class="header-anchor" href="#_8-组件间通信" aria-hidden="true">#</a> ８.组件间通信</h2><h3 id="方式一-父传子" tabindex="-1"><a class="header-anchor" href="#方式一-父传子" aria-hidden="true">#</a> 方式一：父传子</h3><p>子组件设置自定义属性，由父组件传向子组件。</p><p>(使用@Input装饰器实现，一个装饰器只能实现一个数据的传递)</p><p>①父组件的数据传递</p><p>父组件.ts：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>userName = &#39;Clean&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>父组件.html:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;子组件 [属性名]=&#39;userName&#39;&gt;&lt;/子组件&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>②子组件使用</p><p>子组件.ts:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Component, EventEmitter, Input, OnInit, Output } from &#39;@angular/core&#39;;
@Input()
public userName:any
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在官网的文档中看到这样一个代码片段：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component({
  selector: &#39;bank-account&#39;,
  template: \`
    Bank Name: {{bankName}}
    Account Id: {{id}}
  \`
})
class BankAccount {
  
  @Input() bankName: string;
 
  @Input(&#39;account-id&#39;) id: string;

  normalizedBankName: string;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一开始对<code>@Input(&#39;account-id&#39;) id: string;</code>这里有点疑问</p><p>解释一下：传入了一个属性名为account-id的属性，它的属性值是id</p><p>子组件.html</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;p&gt;{{userName}}&lt;/p&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：需要将父组件写在根模板<code>app.component.html</code>中，不能把子组件直接写在这个上面，否则值无法正常传递。</p><h3 id="方式二-子传父" tabindex="-1"><a class="header-anchor" href="#方式二-子传父" aria-hidden="true">#</a> 方式二：子传父</h3><p>子组件通过触发特定的事件（其中携带着数据），把数据传递给父组件（父组件提供事件处理的方法）</p><p>1.子组件使用Output装饰器 ；创建新的<code>EventEmitter()</code>对象；触发<code>EventEmitter()</code>对象的emit事件，并传入想要传递的数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Component, EventEmitter, Input, OnInit, Output } from &#39;@angular/core&#39;;

@Output()
public nameEvent = new EventEmitter()

changeName(){
    this.nameEvent.emit(this.newName)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在使用该组件的父组件中的模板标签上绑定自定义事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;app-子组件 [myName]=&quot;myName&quot; (nameEvent)=&quot;dealName($event)&quot;&gt;&lt;/app-子组件&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.最后在父组件的ts文件中写自定义事件对应的处理函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export class AppComponent {
  title = &#39;cleanAngular&#39;;
  myName:any = &#39;Shao&#39;
  dealName(e:any){
    this.myName = e
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方式三-引用子组件" tabindex="-1"><a class="header-anchor" href="#方式三-引用子组件" aria-hidden="true">#</a> 方式三：引用子组件</h3><p>可以通过<code>#</code>（模板引用符）来声明一个模板变量，父组件通过引用模板变量来获得子组件的实例对象。</p><p>1.在<code>父组件.html</code>中的子组件上声明模板变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;app-zujiantongxin [twoV]=&quot;oneV&quot; #c1&gt;&lt;/app-zujiantongxin&gt;
&lt;app-child01 #c2&gt;&lt;/app-child01&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在<code>父组件.ts</code>中使用装饰器@ViewChild(视图孩子)引用模板变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { Component, OnInit, ViewChild } from &#39;@angular/core&#39;;
@ViewChild(&#39;c1&#39;,{static:true})
public child1
@ViewChild(&#39;c2&#39;,{static:true})
public child2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ViewChild装饰器用于将子组件识别符与某个属性关联起来。第一个参数必须是已经存在的子组件识别符（不带#），第二个参数static指定该组件是否为“静态组件”（不会时有时无的组件）</p><p>父组件通过模板变量（<code>#c1</code>）获得了子组件(<code>zujiantongxin</code>)的实例对象(<code>child1</code>==<code>ZujiantongxinComponent</code>)</p><p>可以理解为父亲把孩子牢牢的我在手里面，想获取孩子中的什么东西都可以获取。（好像通过别的组件传递过来的值获取不到，，，，自己定义的值可以获取到）</p><h2 id="_9-路由与导航" tabindex="-1"><a class="header-anchor" href="#_9-路由与导航" aria-hidden="true">#</a> 9.路由与导航</h2><h3 id="_1-vue和angular路由跳转的机制对比" tabindex="-1"><a class="header-anchor" href="#_1-vue和angular路由跳转的机制对比" aria-hidden="true">#</a> 1.Vue和Angular路由跳转的机制对比</h3><p>Vue：①hash法：只需要修改url中的hash部分</p><p>http://localhost/index.html#/xxx</p><p>②history法：需要修改window.history对象，从而支持浏览器自带的后退/前进按钮</p><p>angular：history法：需要修改window.history对象，从而支持浏览器自带的后退/前进按钮</p><h3 id="_2-路由跳转方法" tabindex="-1"><a class="header-anchor" href="#_2-路由跳转方法" aria-hidden="true">#</a> 2.路由跳转方法</h3><h4 id="路由的准备工作" tabindex="-1"><a class="header-anchor" href="#路由的准备工作" aria-hidden="true">#</a> 路由的准备工作</h4><p>①.在<code>app.module.ts</code>中导入总路由模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>②将<code>路由器</code>模块<code>RouterModule</code>和<code>路由</code>模块<code>Routes</code>导入到<code>app-routing.module.ts</code>中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { RouterModule, Routes } from &#39;@angular/router&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>③将需要路由的组件导入到<code>app-routing.module.ts</code>中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {BlogsComponent } from &#39;./blogs/blogs.component&#39;;
import { HomeComponent } from &#39;./home/home.component&#39;;
import { ChangeBlogsComponent } from &#39;./change-blogs/change-blogs.component&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>④在<code>app-routing.module.ts</code>中的Routes数组中添加需要路由的组件对象</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const routes: Routes = [
  {path:&#39;myHome&#39;,component:HomeComponent},
  
  {path:&#39;myBlogs&#39;,component:BlogsComponent,
    children:[
      {path:&#39;blogs/:id&#39;,component:ChangeBlogsComponent}
    ]
  },
  //重定向，当地址栏中的地址没有后缀时，自动将路由指向myHome页面
  {path:&#39;&#39;,redirectTo:&#39;/myHome&#39;,pathMatch:&#39;full&#39;},
  //通配符，匹配全部的路由地址，应该放在最下面，表示之后没有需要路由的组件，即找不到页面，一般用于跳转404错误页面
  {path:&#39;**&#39;,component:404Component}
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式一-使用模板跳转方法" tabindex="-1"><a class="header-anchor" href="#方式一-使用模板跳转方法" aria-hidden="true">#</a> 方式一：使用模板跳转方法</h4><p>在模板标签中写上</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;any routerLink=&#39;/XXX&#39;&gt;&lt;/any&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可用于任意标签上，跳转地址应该以<code>/</code>开头，防止以相对方式跳转</p><p>如果使用了路由嵌套,应该写上完整的路由地址，routerLink表示的是www.shaoclean.top/index.html/中index.html后面的地址，所以要写完整，否则跳转错误。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;any routerLink=&#39;/myBlogs/blogs&#39;&gt;&lt;/any&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="方式二-使用脚本跳转方法" tabindex="-1"><a class="header-anchor" href="#方式二-使用脚本跳转方法" aria-hidden="true">#</a> 方式二：使用脚本跳转方法</h4><p>首先在html模板上绑定跳转事件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;any (click)=&#39;jump()&#39;&gt;&lt;/any&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在相关的组件的.ts文件中导入<code>路由器</code>模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import {Router} from &#39;@angular/router&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在相关的组件的.ts文件中声明<code>Router</code>依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>constructor(
    private router:Router
    ) { }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定事件，事件中的地址也需要写全</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> jump2(){
    this.router.navigateByUrl(&#39;myBlogs/blogs/2&#39;)
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-路由的展示" tabindex="-1"><a class="header-anchor" href="#_3-路由的展示" aria-hidden="true">#</a> 3.路由的展示</h3><p>个组件之间通过路由的跳转切换需要在指定的标签内展示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;router-outlet&gt;&lt;/router-outlet&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-路由守卫" tabindex="-1"><a class="header-anchor" href="#_10-路由守卫" aria-hidden="true">#</a> 10.路由守卫</h2><p>有些项目中，有些路由地址只能在特定条件下才能访问。</p><p>Angular提供了路由守卫（Guard）来实现访问路由组件前的检查功能。如果检查通过return true就放行，检查不通过return false阻止访问。</p><h3 id="_1-使用步骤" tabindex="-1"><a class="header-anchor" href="#_1-使用步骤" aria-hidden="true">#</a> 1.使用步骤</h3><p>①创建路由守卫 class</p><p>创建.guard.ts文件，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Injectable({
providedIn:&#39;root&#39;
})
export class 守卫名字 {
 canActivate(){
 	return true//允许激活
 	return false//阻止激活
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可用<code> ng g guard 守卫名</code></p><p>②在路由词典中使用路由守卫</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{path:&#39;&#39;,component:...,canActivate:[守卫名]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-移动app开发技术" tabindex="-1"><a class="header-anchor" href="#_11-移动app开发技术" aria-hidden="true">#</a> 11.移动APP开发技术</h2><table><thead><tr><th>技术名称</th><th>典型代表</th><th>优势</th><th>劣势</th></tr></thead><tbody><tr><td>原生开发、Native Code</td><td>Android：Java或KotlinIOS：Object-C或Swift</td><td>运行速度快、功能丰富</td><td>两种设备互不兼容、开发速度慢</td></tr><tr><td>WebView开发（H5、CSS、JS）</td><td>Vue.js+Mint-UI</td><td>开发速度快</td><td>运行速度比原生慢、功能有限、不能使用手机上的功能（摇一摇、打开摄像头等）</td></tr><tr><td>混编开发（H5+原生）</td><td>Angular+Ionic</td><td>开发速度快、功能比 WebView丰富</td><td>运行速度慢（需要浏览器内核）</td></tr><tr><td>JS Bridge（通过JS编码，运行的是原生代码）</td><td>React + ReactNative</td><td>开发速度快、运行速度快、功能丰富</td><td>原生组件两种平台下效果不一致</td></tr><tr><td>GPU绘图（直接在手机显卡上绘图）</td><td>谷歌开发的Flutter技术（Dart语言）</td><td>运行速度快、功能丰富、两种平台效果完全一样</td><td>目前还有不足，例如绘图库太大</td></tr></tbody></table>`,180);function S(k,w){const i=r("ExternalLinkIcon");return s(),l("div",null,[o,e("blockquote",null,[u,e("p",null,[v,n(" 是 "),p,n(" 的 Attribute，而 "),m,n("（注意 “S” 是大写）是 Property。使用 Attribute 绑定时，请使用带小写 “s” 的 "),h,n("。有关如何绑定到 "),g,n(" Property 的更多信息，请参见 "),e("a",b,[n("Property 绑定"),d(i)]),n(" 中的 "),e("a",x,[_,n(" 和 "),f,d(i)]),n(" 部分。")])]),q,y,C])}const M=t(c,[["render",S],["__file","Angular.html.vue"]]);export{M as default};
