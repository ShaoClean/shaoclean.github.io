import{_ as n,a0 as s,a1 as a,a2 as e}from"./framework-a6f32df7.js";const t={},o=e(`<h1 id="vite-debug-断点调试" tabindex="-1"><a class="header-anchor" href="#vite-debug-断点调试" aria-hidden="true">#</a> Vite debug 断点调试</h1><p>1.点击 vscode 左侧的“运行和调试”选项卡</p><p>2.”创建 launch.json 文件“</p><p>3.根据自己的需求选择浏览器（以 Edge 浏览器为例，选择<code>Web 应用（Edge）</code>）</p><p>4.输入以下配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// 使用 IntelliSense 了解相关属性。</span>
  <span class="token comment">// 悬停以查看现有属性的描述。</span>
  <span class="token comment">// 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CLean Vite Cli&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;msedge&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:5173&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 写自己的端口号</span>
      <span class="token property">&quot;webRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceFolder}/src&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.运行调试</p>`,7),p=[o];function c(i,l){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","vite-debug.html.vue"]]);export{r as default};
