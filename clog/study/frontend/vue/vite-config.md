---
icon: vue
date: 2022-09-11
star: 20
description: Vite环境变量有关的笔记
category:
  - 前端
  - Vue
tag:
  - Vite
  - 学习笔记
---

# Vite环境变量配置

点击[这里](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables)查看官方文档

下面是一些已经默认存在的环境变量，可以直接拿来使用：

> Vite 在一个特殊的 **`import.meta.env`** 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：
>
> - **`import.meta.env.MODE`**: {string} 应用运行的[模式](https://cn.vitejs.dev/guide/env-and-mode.html#modes)。
> - **`import.meta.env.BASE_URL`**: {string} 部署应用时的基本 URL。他由[`base` 配置项](https://cn.vitejs.dev/config/shared-options.html#base)决定。
> - **`import.meta.env.PROD`**: {boolean} 应用是否运行在生产环境。
> - **`import.meta.env.DEV`**: {boolean} 应用是否运行在开发环境 (永远与 `import.meta.env.PROD`相反)。
> - **`import.meta.env.SSR`**: {boolean} 应用是否运行在 [server](https://cn.vitejs.dev/guide/ssr.html#conditional-logic) 上。

## 自定义环境变量

需要注意:在`根目录`下创建`.env`文件,也可以创建被git忽略的环境变量文件

```
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略
```

## 环境加载优先级

一份用于指定模式的文件（例如 `.env.production`）会比通用形式的优先级更高（例如 `.env`）。

另外，Vite 执行时已经存在的环境变量有最高的优先级，不会被 `.env` 类文件覆盖。例如当运行 `VITE_SOME_KEY=123 vite build` 的时候。

`.env` 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。

## 使用指定的环境变量文件

例如需要使用`.env.prod	`文件中的环境变量，可以在`package.json`文件中新建一条指令`"dev:prod"`,随后使用`npm run dev:prod`指令启动服务，即可使用`.env.prod`文件中的环境变量

```
"scripts": {
  "dev": "vite --mode dev",
  "dev:prod": "vite --mode prod",//使用.env.prod文件中的环境变量
  "build": "vue-tsc --noEmit && vite build",
  "preview": "vite preview"
}
```

