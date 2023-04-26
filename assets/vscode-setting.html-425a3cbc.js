import{$ as n,a0 as s,a1 as a,a4 as t}from"./framework-19a42cda.js";const o={},e=t(`<h1 id="vscode配置" tabindex="-1"><a class="header-anchor" href="#vscode配置" aria-hidden="true">#</a> VSCode配置</h1><p>自己配置的json文件：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;Maple Mono&#39;,consola,Menlo,&#39;Roboto Mono&#39;,&#39;Fira Code&#39;,Menlo,&#39;Operator Mono Lig&#39;,&#39;Droid Sans Mono&#39;,&#39;Cascadia Code&#39;,&#39;Comic Mono&#39;,&#39;Courier New&#39;,Monaco,&#39;Input Mono&#39;,Hack,&#39;DM Mono&#39;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontWeight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.cursorWidth&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expand&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.cursorSmoothCaretAnimation&quot;</span><span class="token operator">:</span><span class="token string">&quot;explicit&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;afterDelay&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.colorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 设置光标颜色</span>
    <span class="token property">&quot;editorCursor.foreground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#aef611&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.bracketPairColorization.independentColorPoolPerBracketType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;editor.fontLigatures&quot;: true, // 这个控制是否启用字体连字，true启用，false不启用，这里选择启用</span>
  <span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;calt&#39;, &#39;ss01&#39;, &#39;ss02&#39;, &#39;ss03&#39;, &#39;ss04&#39;, &#39;ss05&#39;, &#39;ss06&#39;, &#39;zero&#39;, &#39;onum&#39;&quot;</span><span class="token punctuation">,</span><span class="token comment">//开启字体的特殊连写</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Maple Mono SC NF&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.workspaceFolder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/clean/.leetcode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leetcode-cn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.hint.commandShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.hint.configWebviewMarkdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.showDescription&quot;</span><span class="token operator">:</span> <span class="token string">&quot;In File Comment&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.bracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prettier.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Monokai Pro (Filter Octagon)&quot;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;Operator Mono Lig&#39;,&#39;Fira Code&#39;,Menlo, Monaco,&#39;Roboto Mono&#39;, &#39;Courier New&#39;, monospace,&#39;Droid Sans Mono&#39;,&#39;Cascadia Code&#39;,&#39;Comic Mono&#39;,&#39;Input Mono&#39;,Hack,&#39;DM Mono&#39;&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>One Dark Pro 系列：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Menlo,&#39;Roboto Mono&#39;,&#39;Fira Code&#39;,Menlo,&#39;Operator Mono Lig&#39;,&#39;Droid Sans Mono&#39;,&#39;Cascadia Code&#39;,&#39;Comic Mono&#39;,&#39;Courier New&#39;,Monaco,&#39;Input Mono&#39;,Hack,&#39;DM Mono&#39;&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.fontWeight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;afterDelay&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;terminal.integrated.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hack Nerd Font&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.bracketPairColorization.independentColorPoolPerBracketType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 这个控制是否启用字体连字，true启用，false不启用，这里选择启用</span>
	<span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;javascript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;leetcode.workspaceFolder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/clean/.leetcode&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;leetcode.defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;leetcode.endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leetcode-cn&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;leetcode.hint.commandShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token property">&quot;leetcode.hint.configWebviewMarkdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token property">&quot;leetcode.showDescription&quot;</span><span class="token operator">:</span> <span class="token string">&quot;In File Comment&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;workbench.colorCustomizations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;prettier.bracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
	<span class="token property">&quot;prettier.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>白色：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Default Light+ Experimental&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;Fira Code&#39;,&#39;Operator Mono Lig&#39;,Menlo,Monaco,&#39;Courier New&#39;,monospace, &#39;Roboto Mono&#39;,&#39;Droid Sans Mono&#39;,&#39;Cascadia Code&#39;,&#39;Comic Mono&#39;,&#39;Input Mono&#39;,Hack,&#39;DM Mono&#39;&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;terminal.integrated.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hack Nerd Font&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;terminal.integrated.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Menlo, &#39;Inconsolata for Powerline&#39;, monospace&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Monokai Pro (Filter Octagon) Icons&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
	<span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;afterDelay&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.lineHeight&quot;</span><span class="token operator">:</span> <span class="token number">24.65</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.letterSpacing&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.fontWeight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;420&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.cursorStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.cursorWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token string">&quot;smooth&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.renderWhitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.snippetSuggestions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;workbench.startupEditor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;newUntitledFile&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.glyphMargin&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;workbench.editor.enablePreview&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token property">&quot;files.trimTrailingWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;files.trimFinalNewlines&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;prettier.eslintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;eslint.run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onType&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;workbench.fontAliasing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;terminal.integrated.macOptionIsMeta&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
	<span class="token property">&quot;workbench.statusBar.feedback.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token property">&quot;editor.semanticHighlighting.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token property">&quot;highlight-matching-tag.styles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;opening&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;full&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rgba(165, 153, 233, 0.3)&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;importCost.largePackageColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#EC3A37F5&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;importCost.mediumPackageColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#B362FF&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;importCost.smallPackageColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#B362FF&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;diffEditor.ignoreTrimWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[e];function r(l,c){return s(),a("div",null,p)}const u=n(o,[["render",r],["__file","vscode-setting.html.vue"]]);export{u as default};