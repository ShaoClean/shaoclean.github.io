<template><div><h1 id="cyou" tabindex="-1"><a class="header-anchor" href="#cyou" aria-hidden="true">#</a> CYou</h1>
<h2 id="核心功能" tabindex="-1"><a class="header-anchor" href="#核心功能" aria-hidden="true">#</a> 核心功能</h2>
<ul>
<li>
<p>生成组件⭐⭐⭐</p>
<p>​	-拖拽生成</p>
<p>​	-双击组件弹出对话框，编辑参数生成</p>
</li>
<li>
<p>组件推拽⭐⭐⭐</p>
<p>​	-选中多个组件</p>
<p>​	-多个组件一起拖拽</p>
</li>
<li>
<p>编辑组件⭐⭐⭐</p>
<p>​	-单机组件，使组件处于编辑状态，并在侧边显示组件详情</p>
<p>​	-鼠标改变组件的大小</p>
</li>
<li>
<p>生成代码⭐⭐⭐</p>
</li>
</ul>
<h2 id="扩展功能" tabindex="-1"><a class="header-anchor" href="#扩展功能" aria-hidden="true">#</a> 扩展功能</h2>
<ul>
<li>保存编辑状态⭐⭐⭐</li>
<li>账号登录⭐</li>
<li>自定义工作台样式⭐</li>
</ul>
<h2 id="后续功能" tabindex="-1"><a class="header-anchor" href="#后续功能" aria-hidden="true">#</a> 后续功能</h2>
<ul>
<li>图片上传❗</li>
<li>协同办公❗❗❗</li>
<li>配置服务器❗❗❗</li>
<li>一键生成网站❗❗❗</li>
</ul>
<h2 id="流程" tabindex="-1"><a class="header-anchor" href="#流程" aria-hidden="true">#</a> 流程</h2>
<p>1.工作面板可以任意拖动</p>
<p>2.生成组件</p>
<p>3.组件可以任意拖动</p>
<p>4.组件可以任意缩放</p>
<p>5.鼠标样式</p>
<p>6.组合</p>
<ol start="7">
<li></li>
</ol>
<h1 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h1>
<h2 id="_1-point组件" tabindex="-1"><a class="header-anchor" href="#_1-point组件" aria-hidden="true">#</a> 1.Point组件</h2>
<p>**说明：**该组件用于给其它power添加定位点，用于二次封装。接收一个默认插槽(#default)。建议插槽内的根标签宽高不要超过<code v-pre>defaultStyle</code>属性中的宽高</p>
<p>使用样例：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//使用Point二次封装一个Div power
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  <span class="token literal-property property">custonStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">;</span> height<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Point</span>
    <span class="token attr-name">:defaultStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>props.custonStyle<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Point</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>customStyle</td>
<td>width、height必填，power默认样式，包含width，height，backgroundColor，border。</td>
</tr>
<tr>
<td>powerEditor</td>
<td>必填，当前power的编辑状态，用于判断当前power是否被选中，与data-index属性一起使用，默认为false</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="_2-cleandiv" tabindex="-1"><a class="header-anchor" href="#_2-cleandiv" aria-hidden="true">#</a> 2.CleanDiv</h2>
<p>**说明：**生成一个自定义矩形容器。</p>
<p>使用样例：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CleanDiv</span> <span class="token attr-name">:custonStyle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item,index) in list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          {{item.name}}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CleanDiv</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> style <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'c'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">'15'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'l'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">'16'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'e'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">'17'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'a'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">'18'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'n'</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">'19'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>customStyle</td>
<td>width、height必填，power默认样式，包含width，height，backgroundColor，border。</td>
</tr>
<tr>
<td>data-index</td>
<td>必填，poewr在powerlist中的索引值，同时也是data-index属性的属性值，用来确定当前power</td>
</tr>
<tr>
<td>powerEditor</td>
<td>必填，当前power的编辑状态，用于判断当前power是否被选中，与data-index属性一起使用，默认为false</td>
</tr>
</tbody>
</table>
</div></template>


