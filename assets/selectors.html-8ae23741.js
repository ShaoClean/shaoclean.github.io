import{$ as o,a0 as p,a1 as l,a2 as n,a3 as s,a6 as e,a4 as t,C as c}from"./framework-19a42cda.js";const i={},u=t(`<h1 id="css选择器" tabindex="-1"><a class="header-anchor" href="#css选择器" aria-hidden="true">#</a> CSS选择器</h1><h2 id="基本选择器" tabindex="-1"><a class="header-anchor" href="#基本选择器" aria-hidden="true">#</a> 基本选择器</h2><h3 id="通配选择器" tabindex="-1"><a class="header-anchor" href="#通配选择器" aria-hidden="true">#</a> 通配选择器</h3><p>选择所有元素。可以将其限制为特定的名称空间或所有名称空间。</p><blockquote><p>配合其他简单选择器的时候，省略掉通配选择器会有同样的效果。比如，*.warning 和.warning 的效果完全相同。</p></blockquote><blockquote><p>ns|* - 会匹配ns命名空间下的所有元素 解释一下，在<code>xml</code>中：</p></blockquote><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>ns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://example.com/ns<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">ns:</span>element1</span><span class="token punctuation">&gt;</span></span>some text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">ns:</span>element1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">ns:</span>element2</span><span class="token punctuation">&gt;</span></span>some more text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">ns:</span>element2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otherElement</span><span class="token punctuation">&gt;</span></span>some other text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otherElement</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>xmlns:ns</code>中的<code>ns</code>表示命名空间，<code>ns|*</code>的意思就是选中该命名空间下面的所有元素</p><p><code>*[lang^=en]{color:green;}</code>，中的<code>[lang^=en]</code>表示选择有<code>lang</code>属性的标签，且该属性的值以<code>en</code>开头，<code>^</code>和正则里面表达的意思类似</p><h3 id="元素选择器" tabindex="-1"><a class="header-anchor" href="#元素选择器" aria-hidden="true">#</a> 元素选择器</h3><p>选择所有对应的标签元素</p><h3 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器" aria-hidden="true">#</a> 类选择器</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 所有含有 class=&quot;spacious&quot; 类的元素 */</span>
<span class="token selector">.spacious</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 所有含有 class=&quot;spacious&quot; 类的 &lt;li&gt; 元素 */</span>
<span class="token selector">li.spacious</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 所有同时含有“spacious”和“elegant”类的 &lt;li&gt; 元素 */</span>
<span class="token comment">/* 例如 class=&quot;elegant retro spacious&quot; */</span>
<span class="token selector">li.spacious.elegant</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="id-选择器" tabindex="-1"><a class="header-anchor" href="#id-选择器" aria-hidden="true">#</a> ID 选择器</h3><p>语法：<code>#id 属性值 { 样式声明 }</code></p><p>与<code>[id~=id名] { 样式声明 }</code>等价，但是优先级不等价，id选择器的优先级较高</p><h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器" aria-hidden="true">#</a> 属性选择器</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 选择具有title属性的所有a标签 */</span>
<span class="token selector">a[title]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 选择具有href属性，且href属性值是https://example.org的所有a标签 */</span>
<span class="token selector">a[href=&quot;https://example.org&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 选择具有href属性，且href属性值中存在example字符串的所有a标签*/</span>
<span class="token selector">a[href*=&quot;example&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 选择具有href属性，且href属性的值是以https开始的所有a标签 */</span>
<span class="token selector">a[href^=&quot;https&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 选择具有href属性，且href属性的值是以.org结尾的所有a标签 */</span>
<span class="token selector">a[href$=&quot;.org&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 选择具有href属性，且href属性的值是haha或者以haha-开头的所有a标签 */</span>
<span class="token selector">a[href|=&quot;haha&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 存在 class 属性并且属性值包含单词&quot;logo&quot;的&lt;a&gt;元素*/</span>
<span class="token selector">a[class~=&quot;logo&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点说一下<code>a[href*=&quot;example&quot;]</code>和<code>a[class~=&quot;logo&quot;]</code>这两个</p><p>1.<code>a[href*=&quot;example&quot;]</code>选择的是，只要有<code>example</code>就行。</p><p>比如说下面两种写法都会被该选择器选中：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.example.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.example.com/test.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.<code>a[class~=&quot;logo&quot;]</code>选择的是，包含单独单词的<code>logo</code>属性</p><p>比如说：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-logo your-logo his-logo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是不能被选择到的，因为没有包含单独的单词<code>logo</code></p><p>而是需要这样才能选择到：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logo other-class<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MDN是这样说的：</p><blockquote><p>表示带有以 <em>attr</em> 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 <em>value</em>。</p></blockquote><h2 id="分组选择器" tabindex="-1"><a class="header-anchor" href="#分组选择器" aria-hidden="true">#</a> 分组选择器</h2><p>CSS <strong>选择器列表</strong>（<code>,</code>）选择所有匹配的节点。选择器列表是以逗号分隔的多个选择器所组成的列表。</p><h4 id="无效的选择器列表" tabindex="-1"><a class="header-anchor" href="#无效的选择器列表" aria-hidden="true">#</a> 无效的选择器列表</h4><blockquote><p>使用选择器列表的一个缺点是选择器列表中的单个不受支持的选择器会使整个规则无效化。</p></blockquote><p>看第一段代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h2:invalid-pseudo</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将他们使用分组选择器整合成一起后：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1, h2:invalid-pseudo, h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的<code>:invalid-pseudo</code>用来代表一个不存在的或者输入错误的伪类选择器。</p><p>如果使用分组选择器将这三个样式进行整合的话，由于出现了错误的伪类选择器，那么这整个选择器设置的样式都将失效。也就是说第一段和第二段代码是不等效的。上面的第二段代码中的选择器也叫<code>无效的选择器列表</code></p><h4 id="可容错选择器列表" tabindex="-1"><a class="header-anchor" href="#可容错选择器列表" aria-hidden="true">#</a> 可容错选择器列表</h4><p>如何解决无效的选择器列表呢？</p><p>第一种方法是使用<code>:is()</code>或者<code>:where()</code>伪类选择器</p><ul><li><code>:is()</code></li></ul><blockquote><p>将选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。</p></blockquote><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 选择 header、main、footer 里的任意一个悬浮状态的段落 */</span>
<span class="token selector">:is(header, main, footer) p:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 以上内容相当于以下内容 */</span>
<span class="token selector">header p:hover,
main p:hover,
footer p:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:red;font-weight:800;">伪元素在 <code>:is()</code> 的选择器列表中无效。</span></p><p>使用该伪类选择器的特性来解决容错问题</p><ul><li><code>:where()</code></li></ul><p>和<code>:is()</code>在语法上没有区别</p><blockquote><p>:where() 和 :is() 的不同之处在于，:where() 的优先级总是为 0，但是 :is() 的优先级是由它的选择器列表中优先级最高的选择器决定的。</p></blockquote><h2 id="组合选择器" tabindex="-1"><a class="header-anchor" href="#组合选择器" aria-hidden="true">#</a> 组合选择器</h2><h3 id="后代组合器" tabindex="-1"><a class="header-anchor" href="#后代组合器" aria-hidden="true">#</a> 后代组合器</h3><blockquote><p><strong>后代组合器</strong>（通常用单个空格（&quot; &quot;）字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。利用后代组合器的选择器称为<em>后代选择器</em>。</p></blockquote><h3 id="子组合器" tabindex="-1"><a class="header-anchor" href="#子组合器" aria-hidden="true">#</a> 子组合器</h3><blockquote><p><strong>子组合器</strong>（<code>&gt;</code>）被放在两个 CSS 选择器之间。它只匹配那些被第二个选择器匹配的元素，这些元素是被第一个选择器匹配的元素的直接子元素。</p></blockquote><p>和后代组合器相比，子组合器更加严格，它只能是第一层级的子元素。而后代选择器会选择所有子元素</p><h3 id="通用兄弟选择器" tabindex="-1"><a class="header-anchor" href="#通用兄弟选择器" aria-hidden="true">#</a> 通用兄弟选择器</h3>`,58),d=n("strong",null,"通用兄弟选择器",-1),r=n("code",null,"~",-1),v=n("em",null,"所有迭代元素",-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Element",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>语法：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 在任意图像后的兄弟段落 */</span>
<span class="token selector">img ~ p</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，两个元素需要拥有同一个父元素；且出现在<code>~</code>之后的选择器在html结构上也需要在<code>~</code>之前的选择器前面的元素之后（拿语法中的例子来说，之后再img标签之后的p元素才能被选中，在img标签之前的p元素不会被选中）</p><h3 id="紧邻兄弟组合器" tabindex="-1"><a class="header-anchor" href="#紧邻兄弟组合器" aria-hidden="true">#</a> 紧邻兄弟组合器</h3>`,4),h=n("strong",null,"相邻兄弟选择器",-1),b=n("code",null,"+",-1),g=n("em",null,"紧跟在",-1),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Element",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"element",-1),_=t(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 图片后面紧跟着的段落将被选中 */</span>
<span class="token selector">img + p</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="伪选择器" tabindex="-1"><a class="header-anchor" href="#伪选择器" aria-hidden="true">#</a> 伪选择器</h2><h3 id="伪类" tabindex="-1"><a class="header-anchor" href="#伪类" aria-hidden="true">#</a> 伪类</h3>`,3),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS",target:"_blank",rel:"noopener noreferrer"},y=n("em",null,[n("strong",null,"伪类")],-1),S={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,":hover",-1),z={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes#%E5%AD%97%E6%AF%8D%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"},E=n("h3",{id:"伪元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#伪元素","aria-hidden":"true"},"#"),s(" 伪元素")],-1),w=n("blockquote",null,[n("p",null,"伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。")],-1),N={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements#%E5%AD%97%E6%AF%8D%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"};function D(A,B){const a=c("ExternalLinkIcon");return p(),l("div",null,[u,n("blockquote",null,[n("p",null,[d,s("（"),r,s("）将两个选择器分开，并匹配第二个选择器的"),v,s("，位置无须紧邻于第一个元素，只须有相同的父级"),n("a",m,[s("元素"),e(a)]),s("。")])]),k,n("blockquote",null,[n("p",null,[h,s(" ("),b,s(") 介于两个选择器之间，当第二个元素"),g,s("第一个元素之后，并且两个元素都是属于同一个父 "),n("a",f,[q,e(a)]),s(" 的子元素，则第二个元素将被选中。")])]),_,n("blockquote",null,[n("p",null,[n("a",x,[s("CSS"),e(a)]),s(),y,s("是添加到选择器的关键字，用于指定所选元素的特殊状态。例如，伪类 "),n("a",S,[C,e(a)]),s(" 可以用于选择一个按钮，当用户的指针悬停在按钮上时，设置此按钮的样式。")])]),n("p",null,[s("具体见："),n("a",z,[s("伪类 - CSS：层叠样式表 | MDN (mozilla.org)"),e(a)])]),E,w,n("p",null,[s("具体见："),n("a",N,[s("伪元素 - CSS：层叠样式表 | MDN (mozilla.org)"),e(a)])])])}const I=o(i,[["render",D],["__file","selectors.html.vue"]]);export{I as default};