---
icon: vue
date: 2022-11-13
category:
  - 前端
  - Vue
tag:
  - Vite
  - debug调试
---

# Vite debug 断点调试

1.点击 vscode 左侧的“运行和调试”选项卡

2.”创建 launch.json 文件“

3.根据自己的需求选择浏览器（以 Edge 浏览器为例，选择“Web 应用（Edge）”）

4.输入以下配置：

```json
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "CLean Vite Cli",
      "request": "launch",
      "type": "msedge",
      "url": "http://localhost:5173", // 写自己的端口号
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

5.运行调试
