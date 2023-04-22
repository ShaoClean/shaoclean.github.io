---
date: 2023-03-11
icon: advance
category:
  - VSCode
---
# VSCode配置

自己配置的json文件：
```json
{
  "editor.fontFamily": "'Maple Mono',consola,Menlo,'Roboto Mono','Fira Code',Menlo,'Operator Mono Lig','Droid Sans Mono','Cascadia Code','Comic Mono','Courier New',Monaco,'Input Mono',Hack,'DM Mono'",
  "editor.fontSize": 14,
  "editor.fontWeight": "normal",
  "editor.cursorWidth": 1,
  "editor.cursorBlinking": "expand",
  "editor.cursorSmoothCaretAnimation":"explicit",
  "files.autoSave": "afterDelay",
  "workbench.colorCustomizations": {
    // 设置光标颜色
    "editorCursor.foreground": "#aef611",
  },
  "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
  // "editor.fontLigatures": true, // 这个控制是否启用字体连字，true启用，false不启用，这里选择启用
  "editor.fontLigatures": "'calt', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'zero', 'onum'",//开启字体的特殊连写
  "editor.formatOnSave": true,
  "terminal.integrated.fontFamily": "Maple Mono SC NF",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "workbench.iconTheme": "material-icon-theme",
  "leetcode.workspaceFolder": "/Users/clean/.leetcode",
  "leetcode.defaultLanguage": "javascript",
  "leetcode.endpoint": "leetcode-cn",
  "leetcode.hint.commandShortcut": false,
  "leetcode.hint.configWebviewMarkdown": false,
  "leetcode.showDescription": "In File Comment",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "prettier.arrowParens": "avoid",
  "prettier.bracketSameLine": true,
  "prettier.tabWidth": 4,
  "prettier.useTabs": true,
  "explorer.confirmDragAndDrop": false,
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "workbench.colorTheme": "Monokai Pro (Filter Octagon)"
}

```

```json
{
	"editor.fontFamily": "'Operator Mono Lig','Fira Code',Menlo, Monaco,'Roboto Mono', 'Courier New', monospace,'Droid Sans Mono','Cascadia Code','Comic Mono','Input Mono',Hack,'DM Mono'"
}
```

One Dark Pro 系列：

```json
{
	"editor.fontFamily": "Menlo,'Roboto Mono','Fira Code',Menlo,'Operator Mono Lig','Droid Sans Mono','Cascadia Code','Comic Mono','Courier New',Monaco,'Input Mono',Hack,'DM Mono'",
	"editor.fontSize": 14,
	"editor.fontWeight": "normal",
	"files.autoSave": "afterDelay",
	"terminal.integrated.fontFamily": "Hack Nerd Font",
	"editor.bracketPairColorization.independentColorPoolPerBracketType": true,
	"editor.fontLigatures": false, // 这个控制是否启用字体连字，true启用，false不启用，这里选择启用
	"workbench.colorTheme": "One Dark Pro",
	"editor.formatOnSave": true,
	"[vue]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"javascript.updateImportsOnFileMove.enabled": "always",
	"workbench.iconTheme": "material-icon-theme",
	"leetcode.workspaceFolder": "/Users/clean/.leetcode",
	"leetcode.defaultLanguage": "javascript",
	"leetcode.endpoint": "leetcode-cn",
	"leetcode.hint.commandShortcut": false,
	"leetcode.hint.configWebviewMarkdown": false,
	"leetcode.showDescription": "In File Comment",
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"workbench.colorCustomizations": {},
	"prettier.arrowParens": "avoid",
	"prettier.bracketSameLine": true,
	"prettier.tabWidth": 4,
	"prettier.useTabs": true
}
```

白色：

```json
{
	"workbench.colorTheme": "Default Light+ Experimental",
	"editor.fontFamily": "'Fira Code','Operator Mono Lig',Menlo,Monaco,'Courier New',monospace, 'Roboto Mono','Droid Sans Mono','Cascadia Code','Comic Mono','Input Mono',Hack,'DM Mono'",
	"terminal.integrated.fontFamily": "Hack Nerd Font",
	"terminal.integrated.fontFamily": "Menlo, 'Inconsolata for Powerline', monospace",
	"workbench.iconTheme": "Monokai Pro (Filter Octagon) Icons",
	"editor.fontSize": 15,
	"files.autoSave": "afterDelay",
	"editor.lineHeight": 24.65,
	"editor.letterSpacing": 0.5,
	"editor.fontWeight": "420",
	"editor.fontLigatures": true,
	"editor.cursorStyle": "line",
	"editor.cursorWidth": 2,
	"editor.cursorBlinking": "smooth",
	"editor.renderWhitespace": "all",
	"editor.snippetSuggestions": "top",
	"workbench.startupEditor": "newUntitledFile",
	"editor.glyphMargin": true,
	"workbench.editor.enablePreview": true,
	"explorer.confirmDragAndDrop": false,
	"files.trimTrailingWhitespace": true,
	"files.trimFinalNewlines": true,
	"editor.formatOnSave": true,
	"prettier.eslintIntegration": true,
	"eslint.run": "onType",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true
	},
	"workbench.fontAliasing": "auto",
	"terminal.integrated.macOptionIsMeta": true,
	"workbench.statusBar.feedback.visible": false,
	"editor.semanticHighlighting.enabled": false,
	"highlight-matching-tag.styles": {
		"opening": {
			"full": {
				"highlight": "rgba(165, 153, 233, 0.3)"
			}
		}
	},
	"[html]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[javascriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[vue]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[jsonc]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"importCost.largePackageColor": "#EC3A37F5",
	"importCost.mediumPackageColor": "#B362FF",
	"importCost.smallPackageColor": "#B362FF",
	"diffEditor.ignoreTrimWhitespace": false
}
```
