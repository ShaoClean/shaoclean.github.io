import{_ as n,a0 as s,a1 as a,a4 as e}from"./framework-16947f8e.js";const i={},l=e(`<h1 id="node模块化" tabindex="-1"><a class="header-anchor" href="#node模块化" aria-hidden="true">#</a> node模块化</h1><h2 id="_1-模块的查找" tabindex="-1"><a class="header-anchor" href="#_1-模块的查找" aria-hidden="true">#</a> 1.模块的查找</h2><h3 id="绝对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径" aria-hidden="true">#</a> 绝对路径</h3><p>require中可以写绝对路径，可以根据绝对路径直接加载模块。 其它写法的路径最终写的相对路径也会转换成绝对路径</p><h3 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h3><p>相对路径有两种使用方式</p><p><strong>第一种</strong>： 相对路径是相对于当前模块所在的目录</p><p><strong>第二种</strong>：分为几个步骤</p><ol><li>先检查是否是内置模块，如fs、path。</li><li>检查当前目录中的node_modules</li><li>检查上级目录中的node_modules</li><li>转换为绝对路径</li><li>加载模块</li></ol><h3 id="后缀名" tabindex="-1"><a class="header-anchor" href="#后缀名" aria-hidden="true">#</a> 后缀名</h3><p>导入模块的时候可以不给后缀名，会自动补全，补全的顺序为：</p><ol><li>js</li><li>json</li><li>node</li><li>mjs</li></ol><h3 id="文件名" tabindex="-1"><a class="header-anchor" href="#文件名" aria-hidden="true">#</a> 文件名</h3><p>如果仅提供目录，不提供文件名，那么会自动寻找该目录中的index.js</p><p>package.json中的main字段：</p><p>表示包的默认入口</p><p>导入或者执行包时若仅提供目录，啧使用main补全入口</p><h2 id="module对象" tabindex="-1"><a class="header-anchor" href="#module对象" aria-hidden="true">#</a> module对象</h2><p>记录了当前模块的信息，包括这个模块是被谁引用等</p><h2 id="require" tabindex="-1"><a class="header-anchor" href="#require" aria-hidden="true">#</a> require</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 当我们调用一个模块的时候，实际上这个模块被一个函数包裹</span>

<span class="token comment">// 模拟node中的require函数</span>

<span class="token keyword">function</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token parameter">modulePath</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">// 1.将modulePath转换为绝对路径</span>

<span class="token comment">// 2.判断是否该模块已有缓存（可以打印一下require 就知道为什么这么判断了）</span>

<span class="token comment">// if (require.cache[modulePath]){</span>

<span class="token comment">// // 有缓存直接返回缓存的内容</span>

<span class="token comment">// return require.cache[modulePath]</span>

<span class="token comment">// }</span>

  

<span class="token comment">// 3.读取文件内容</span>

<span class="token comment">// 4.将文件内容包裹到一个函数中</span>

<span class="token comment">// 模拟包裹模块的函数</span>

<span class="token keyword">function</span> <span class="token function">_temp</span><span class="token punctuation">(</span><span class="token parameter">module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> __dirname<span class="token punctuation">,</span> __filename</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token comment">// 我们平时写的js文件中的内容</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> __filename<span class="token punctuation">)</span><span class="token punctuation">;</span>

exports<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>

<span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>

<span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>m <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token comment">// 5.创建module对象</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> exports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">;</span>

<span class="token function">_temp</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>module<span class="token punctuation">.</span>exports<span class="token punctuation">,</span> module<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> require<span class="token punctuation">,</span> module<span class="token punctuation">.</span>path<span class="token punctuation">,</span> module<span class="token punctuation">.</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>

  

<span class="token comment">// 所以 再不做任何改动的前提下</span>

<span class="token comment">// this === module.exports</span>

<span class="token comment">// this === exports</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),t=[l];function p(c,o){return s(),a("div",null,t)}const u=n(i,[["render",p],["__file","module.html.vue"]]);export{u as default};
