<template><div><h1 id="cyou-js" tabindex="-1"><a class="header-anchor" href="#cyou-js" aria-hidden="true">#</a> cyou-js</h1>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h3 id="_1-引入文件" tabindex="-1"><a class="header-anchor" href="#_1-引入文件" aria-hidden="true">#</a> 1.引入文件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> createCyou <span class="token keyword">from</span> <span class="token string">'cyou-js.js'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'style.css'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-初始化ctool" tabindex="-1"><a class="header-anchor" href="#_2-初始化ctool" aria-hidden="true">#</a> 2.初始化ctool</h3>
<div class="custom-container danger">
<p class="custom-container-title">注意</p>
<p>由于Vue项目解析模板渲染页面机制的特殊性，使用起来可能会有点奇怪<br>
当然这一点我们还在努力的改进中💪</p>
</div>
<ul>
<li><strong>在原生JS项目中，需要这样使用：</strong><br></li>
</ul>
<p>1.首先需要创建一个<code v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>（该容器用于放置ctool，可以在此区域内自由的移动ctool）</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在js中初始化cyou</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>在Vue项目中，则需要这样使用：</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//App.vue</span>
<span class="token keyword">let</span> ctool<span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恭喜🎉，至此ctool就会出现在页面上了！<br>
以上是cyou的默认使用方式，不添加任何的配置项。ctool会以页面上<strong>第一个</strong><code v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>的元素为根元素，
可以自由拖拽此根元素下所有一级子元素。</p>
<h3 id="_3-自定义根元素" tabindex="-1"><a class="header-anchor" href="#_3-自定义根元素" aria-hidden="true">#</a> 3.自定义根元素</h3>
<p>除了<RouterLink to="/project/getting-start.html#_2-%E5%88%9D%E5%A7%8B%E5%8C%96ctool">在js中初始化cyou</RouterLink>这样默认初始化ctool的使用方式，还可以在初始化的时候指定根元素。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">rootEl</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".myRootEl"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-添加根元素" tabindex="-1"><a class="header-anchor" href="#_4-添加根元素" aria-hidden="true">#</a> 4.添加根元素</h3>
<p>需要通过<code v-pre>ctool</code>的<code v-pre>addRootEl()</code>方法来添加根元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">rootEl</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".myRootEl"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctool<span class="token punctuation">.</span><span class="token function">addRootEl</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".otherRootEl"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以通过各种获取单个元素的方式来传入根元素，比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> rootEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myRootEl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p>目前传入的根元素不支持数组的形式。<br>
如果坚持这么做，那么ctool的部分功能将无法正常工作。目前已知会受到影响的功能：</p>
<ul>
<li>自由拖拽元素</li>
</ul>
</div>
<h3 id="_5-使用功能" tabindex="-1"><a class="header-anchor" href="#_5-使用功能" aria-hidden="true">#</a> 5.使用功能</h3>
<p>接下来就可以自由的使用cyou内置的API了！</p>
<ul>
<li><RouterLink to="/project/cyou-js.html#_1-%E8%87%AA%E7%94%B1%E6%8B%96%E6%8B%BD%E5%85%83%E7%B4%A0-ch">自由拖拽元素(ch)</RouterLink></li>
<li><RouterLink to="/project/cyou-js.html#_2-%E5%88%9B%E5%BB%BA%E5%85%83%E7%B4%A0-cr">创建元素(cr)</RouterLink></li>
<li><RouterLink to="/project/cyou-js.html#_3-%E6%9B%BF%E6%8D%A2%E5%85%83%E7%B4%A0-re">替换元素(re)</RouterLink></li>
<li><RouterLink to="/project/cyou-js.html#_4-%E4%BA%A4%E6%8D%A2%E5%85%83%E7%B4%A0-ex">交换元素(ex)</RouterLink></li>
</ul>
<h2 id="内置api" tabindex="-1"><a class="header-anchor" href="#内置api" aria-hidden="true">#</a> 内置API</h2>
<p>以下内容主要介绍了cyou-js中的内置API，更多API正在持续更新中，敬请期待！</p>
<h3 id="_1-自由拖拽元素-ch" tabindex="-1"><a class="header-anchor" href="#_1-自由拖拽元素-ch" aria-hidden="true">#</a> 1.自由拖拽元素(ch)</h3>
<p>使用方式非常的简单，您只需要在ctool中点击<code v-pre>ch</code>即可自由对元素进行拖拽。</p>
<h3 id="_2-创建元素-cr" tabindex="-1"><a class="header-anchor" href="#_2-创建元素-cr" aria-hidden="true">#</a> 2.创建元素(cr)</h3>
<p>创建一个新的元素。</p>
<h4 id="点击生成" tabindex="-1"><a class="header-anchor" href="#点击生成" aria-hidden="true">#</a> 点击生成</h4>
<p>首先您需要使用<code v-pre>createCyou()</code>函数来创建<code v-pre>ctool</code>,</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在ctool中点击<code v-pre>cr</code>在弹出的对话框中设置元素相关属性即可生成一个新的元素。<br>
目前您可以自由配置以下属性：</p>
<ul>
<li><strong>width</strong> 元素的宽度</li>
<li><strong>height</strong> 元素的高度</li>
<li><strong>backgroundColor</strong> 元素的背景颜色</li>
</ul>
<p>点击查看<RouterLink to="/code/cr-code.html">源码解析</RouterLink></p>
<h4 id="使用js生成" tabindex="-1"><a class="header-anchor" href="#使用js生成" aria-hidden="true">#</a> 使用js生成</h4>
<p>您可以通过调用<code v-pre>ctool</code>上的<code v-pre>cr</code>函数来创建一个新的元素到您的页面上。<br></p>
<div class="custom-container tip">
<p class="custom-container-title">提示</p>
<p><code v-pre>cr</code>函数可以不传入参数，此时调用该函数会创建一个默认样式的元素。</p>
</div>
<p><strong>下面介绍两种使用方式：</strong></p>
<ul>
<li>1.默认创建方式（不带参数）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctool<span class="token punctuation">.</span><span class="token function">cr</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2.自定义元素样式的创建方式（带参数）<div class="custom-container tip">
<p class="custom-container-title">提示：您可以根据自己的喜好来创建具有个性化的元素。</p>
<p><code v-pre>cr</code>接收类型为<code v-pre>CrOptions</code>的参数。<br></p>
</div>
</li>
<li><code v-pre>style</code>接收多个style属性</li>
<li><code v-pre>classList</code>接收多个<code v-pre>class</code>样式的名称。<br></li>
</ul>
<p>:::</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">CrOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    style<span class="token operator">?</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    classList<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用例子：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.my-class1</span><span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #333333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.my-class2</span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> crOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">"200px"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token string">"200px"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">"red"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">classList</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"my-class1"</span><span class="token punctuation">,</span><span class="token string">"my-class2"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
ctool<span class="token punctuation">.</span><span class="token function">cr</span><span class="token punctuation">(</span>crOptions<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-替换元素-re" tabindex="-1"><a class="header-anchor" href="#_3-替换元素-re" aria-hidden="true">#</a> 3.替换元素(re)</h3>
<p>将一个元素替换成另一个元素。</p>
<h4 id="点击替换" tabindex="-1"><a class="header-anchor" href="#点击替换" aria-hidden="true">#</a> 点击替换</h4>
<h4 id="使用js替换" tabindex="-1"><a class="header-anchor" href="#使用js替换" aria-hidden="true">#</a> 使用js替换</h4>
<p>您可以使用ctool的<code v-pre>re()</code>函数将页面上已经存在的元素替换为另一个元素。<br>
已经存在的元素将会消失，被新的元素替换。<br></p>
<div class="custom-container tip">
<p class="custom-container-title">参数说明</p>
<p><code v-pre>re()</code>函数接收两个参数：</p>
<ul>
<li><code v-pre>preElement</code> （必填）需要被替换的元素，类型为<code v-pre>HTMLElement</code></li>
<li><code v-pre>newElement</code> （必填）最终呈现的新元素，类型为<code v-pre>HTMLElement</code><br>
<em>PS：此方法可以在没有根元素<code v-pre>app</code>的情况下使用。</em><br></li>
</ul>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.my-div</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> preElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".my-div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newElement <span class="token operator">=</span> ctool<span class="token punctuation">.</span><span class="token function">cr</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">style</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token string">"200px"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token string">"200px"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span><span class="token string">"blue"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
ctool<span class="token punctuation">.</span><span class="token function">re</span><span class="token punctuation">(</span>preElement<span class="token punctuation">,</span>newElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-交换元素-ex" tabindex="-1"><a class="header-anchor" href="#_4-交换元素-ex" aria-hidden="true">#</a> 4.交换元素(ex)</h3>
<p>使两个元素互相交换位置。</p>
<h4 id="点击交换" tabindex="-1"><a class="header-anchor" href="#点击交换" aria-hidden="true">#</a> 点击交换</h4>
<h4 id="js使用" tabindex="-1"><a class="header-anchor" href="#js使用" aria-hidden="true">#</a> js使用</h4>
<p>您只需要传入两个需要交换位置的HTML元素即可进行交换。</p>
<div class="custom-container tip">
<p class="custom-container-title">参数说明</p>
<p><code v-pre>ex()</code>函数接收两个参数：</p>
<ul>
<li><code v-pre>el1</code> （必填）需要交换位置的元素1，类型为<code v-pre>HTMLElement</code></li>
<li><code v-pre>el2</code> （必填）需要交换位置的元素2，类型为<code v-pre>HTMLElement</code><br>
<em>PS：此方法可以在没有根元素<code v-pre>app</code>的情况下使用。</em><br></li>
</ul>
</div>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-div<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> el1 <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".my-div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> el2 <span class="token operator">=</span> ctool<span class="token punctuation">.</span><span class="token function">cr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctool<span class="token punctuation">.</span><span class="token function">ex</span><span class="token punctuation">(</span>el1<span class="token punctuation">,</span>el2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


