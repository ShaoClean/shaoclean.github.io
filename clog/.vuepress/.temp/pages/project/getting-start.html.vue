<template><div><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1>
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
<li><strong>在您的原生JS项目中，需要这样使用：</strong><br></li>
</ul>
<p>1.首先需要创建一个<code v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>（该容器用于防止ctool，您可以在此区域内自由的移动ctool）</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在js中初始化cyou</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><strong>在您的Vue项目中，则需要这样使用：</strong></li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//App.vue</span>
<span class="token keyword">let</span> ctool<span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>恭喜🎉，至此ctool就会出现在您的页面上了！<br>
以上是cyou的默认使用方式，不添加任何的配置项。ctool会以页面上<strong>第一个</strong><code v-pre>&lt;div id=&quot;app&quot;&gt;&lt;/div&gt;</code>的元素为根元素，
您可以自由拖拽此根元素下所有一级子元素。</p>
<h3 id="_3-自定义根元素" tabindex="-1"><a class="header-anchor" href="#_3-自定义根元素" aria-hidden="true">#</a> 3.自定义根元素</h3>
<p>除了<RouterLink to="/project/getting-start.html#_2-%E5%88%9D%E5%A7%8B%E5%8C%96ctool">在js中初始化cyou</RouterLink>这样默认初始化ctool的使用方式，您还可以在初始化的时候指定根元素。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">rootEl</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".myRootEl"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-添加根元素" tabindex="-1"><a class="header-anchor" href="#_4-添加根元素" aria-hidden="true">#</a> 4.添加根元素</h3>
<p>您需要通过<code v-pre>ctool</code>的<code v-pre>addRootEl()</code>方法来添加根元素</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ctool <span class="token operator">=</span> <span class="token function">createCyou</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">rootEl</span><span class="token operator">:</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".myRootEl"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctool<span class="token punctuation">.</span><span class="token function">addRootEl</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">".otherRootEl"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您可以通过各种获取单个元素的方式来传入根元素，比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> rootEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"myRootEl"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger">
<p class="custom-container-title">警告</p>
<p>目前传入的根元素不支持数组的形式。<br>
如果您坚持这么做，那么ctool的部分功能将无法正常工作。目前已知会受到影响的功能：</p>
<ul>
<li>自由拖拽元素</li>
</ul>
</div>
<h3 id="_5-使用功能" tabindex="-1"><a class="header-anchor" href="#_5-使用功能" aria-hidden="true">#</a> 5.使用功能</h3>
<p>接下来您就可以自由的使用ctool中内置的功能了！</p>
<ul>
<li><a href="https://doc.shaoclean.top/functions/choose-element.html" target="_blank" rel="noopener noreferrer">自由拖拽元素(ch)<ExternalLinkIcon/></a></li>
<li><a href="https://doc.shaoclean.top/functions/create-element.html" target="_blank" rel="noopener noreferrer">创建元素(cr)<ExternalLinkIcon/></a></li>
<li><a href="https://doc.shaoclean.top/functions/replace-element.html" target="_blank" rel="noopener noreferrer">替换元素(re)<ExternalLinkIcon/></a></li>
<li><a href="https://doc.shaoclean.top/functions/exchange-element.html" target="_blank" rel="noopener noreferrer">交换元素(ex)<ExternalLinkIcon/></a></li>
</ul>
</div></template>


