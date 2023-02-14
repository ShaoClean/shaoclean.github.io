---
icon: computer
date: 2023-02-10
category:
  - 前端
  - 前端工程化
tag:
  - 学习笔记
---

# 前端工程化

最终`webpack.config.js`和`package.json`配置[在这里]('/clog/demo/')

## 一、项目初始化

1.初始化 npm 项目

```bash
npm init -y
```

2. 新建`src`文件夹，`src`目录下新建`index.js`文件;

   新建`webpack.config.js`文件；

   新建`public`文件夹，`public`文件夹下新建`index.html`文件

3. 安装 webpack 相关依赖

```bash
npm i -D webpack webpack-cli
```

4. 修改 webpack.config.js 文件中的配置：

```JS
const path = require('path');
module.exports = {
    mode: "development",
    //项目入口文件，字符串形式
    // entry: './src/index.js',
    //对象形式
    entry: {
        bundle:'./src/index.js'
    },
    //项目输出配置
    output: {
        //打包后输出的文件名，固定名字
        // filename: "bundle.js",
        //打包后输出的文件名，变量名字。这里的[name]值由entry决定，如果entry是字符串形式，则使用默认的名字main；如果entry是对象形式，则对象的键为打包后的文件名
        filename: "js/[name].js",
        //也可以使用hash变量，每次打包后的值都不同
        // filename: "[hash].js",
        //文件输出路径
        path: path.resolve(__dirname,"./dist")
    }
}
```

4. 修改 package.json 中的 scripts 中的脚本,初始化打包功能

```JSON
  "scripts": {
    "build": "webpack"
  },
```

5. 在 public 目录下的 index.html 文件中引入 bundle.js

## 二、项目改造

### Script 标签自动引入

1. 删除项目中的所有 script 标签以及 link 标签的引用

2. 安装插件,用于自动引入 script 标签到 html 文件中

解决问题：文件名使用 hash 或者其它变动较大的值时，每次打包都需要重新在 html 文件中引入，非常麻烦。

```bash
npm i html-webpack-plugin --save-dev
```

3. 在 webpack.config.js 中引入新安装的 Plugin

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
```

4. 将 html-webpack-plugin 添加到新的 plugins 配置项中

   ```js
   plugins: [
     new HtmlWebpackPlugin({
       //src文件夹下模版的名称
       filename: "index.html",
       //src文件夹下模版的地址
       template: "./src/index.html",
     }),
   ];
   ```

5. 执行打包命令测试一下，发现生成两个文件，并且在 index.html 文件中自动注入了 script 标签

### CSS 自动注入

1.安装 css 相关的 loader

```bash
npm i -D css-loader style-loader
```

- css-loader 帮助我们解析 css 成为 js 对象
- sytle-loader 可以从 css-loader 解析的对象中提取 css 样式挂载到页面当中

2.在 src 文件夹下的 index.js 通过模块化的方式导入 css 文件

```js
import "./css/public.css";
import "./css/index.css";
```

3.新增 module 配置项

```json
module: {
        rules: [
            {
                //匹配所有.css结尾的文件
                test: /\.css$/,
                //将匹配到的所有相关文件使用以下两个loader进行预处理，loader处理的顺序为从右到左
                use: ['style-loader','css-loader']
            }
        ]
    }
```

4. 执行打包命令进行打包测试，发现报错了，原因是因为没有对图片进行处理。webpack5 之前使用`file-loader`或者是`url-loader`来解决这一问题。webpack5 中使用`ModuleAssets`这一新特性来解决

5. 相关配置如下：

   ```json
   module: {
           rules: [
    						//...
               {
                   //匹配图片格式文件，并忽略大小写
                   test: /\.(png|svg|jpg|jpeg|gif)$/i,
                   //启动webpack5中内置的ModuleAsset特性
                   type: "asset",
                   parser: {
                       //如果一个模块源码大小小于指定的maxSize值，模块会被作为一个Base64编码的字符串注入到打包结果中，否则模块文件将会被生成到输出的目标目录中。
                       //图片格式，正好可以使用Base64来做处理，所以可以巧妙地使用这一个parser
                       dataUrlCondition:{
                           maxSize:4 * 1024,
                       }
                   },
                   generator: {
                       //[hash:6]表示使用6位哈希值，使用hash防止图片重名
                       //[ext]表示原本后缀值
                       filename: 'images/[name].[hash:6][ext]'
                   }
               }
           ]
       }
   ```

### JS 自动注入

1. 在 src 文件夹下的 index.js 文件中引入 js

```js
//没有按照模块化，所以没有导出，直接引入就可以
import "./js/jquery-1.12.4.min";
import "./js/public";
import "./js/nav";
import "./js/jquery.flexslider-min";
```

2. 执行打包命令，发现 bundle 文件非常的大，达到 180 多 kb。还存在`$`不存在的问题需要解决，通过 webpack 内置插件`ProvidePlugin`来解决

3. 了解`ProvidePlugin`，官网的解释：

> Automatically load modules instead of having to `import` or `require` them everywhere.

自动的去导入模块，而不是手动的去导入。

4. 安装 jquery、flexslider

```bash
npm i jquery flexslider
```

5. 在 webpack.config.js 中引入新安装的 Plugin

```js
const webpack = require("webpack");

module.exports = {
  //...
  plugins: [
    //...
    new webpack.ProvidePlugin({
      //完成变量于库之间的映射（自动导入）
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
```

6. 删除掉 src/index.js 中关于 jQuery 的引用，因为在配置中已经自动导入了，可以在任何地方使用。

### 图片自动注入

html 中直接使用 img 标签 src 加载图片的话，因为没有被依赖，图片将不会被打包。这个 loader 解决这个问题，图片会被打包，而且路径也处理妥当。

所以使用第三方 loader 来做这件事

```bash
npm i html-withimg-loader
```

在 webpack.config.js 中添加新的 loader 配置项：

```js
{
  rules: [
    {
      test: /\.html$/,
      loader: "html-withimg-loader",
    },
  ];
}
```

或者使用一个官方的 Plugin 来解决(复制文件到指定路径下)：

```bash
npm i copy-webpack-plugin -D
```

```js
//webpack.config.js
const CopyWebpackPlugin = require("copy-webpack-plugin");
{
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/img"),
          to: path.resolve(__dirname, "./dist/img"),
        },
      ],
    }),
  ];
}
```

## 三、项目优化

一般打包完成之后只有一个 bundle.js 文件，包含了项目中用到的所有 js、css，档切换到一个页面的时候，新的页面也同样会加载 bundle.js 文件。这样就出现了一个问题，有很多无关的代码是本页面用不到的，会造成资源上的浪费，所以要进行优化。

### js 分离

配置多个入口文件，使每一个页面单独使用一个 js 文件，而不是所有页面公用一个 bundle.js 文件，可以理解为代码分割，达到优化的目的。

```js
entry: {
        index:'./src/index.js',
        login:'./src/login.js',
    },
plugins: [
        new HtmlWebpackPlugin({
            //src文件夹下模版的名称
            filename: "index.html",
            //src文件夹下模版的地址
            template: "./src/index.html",
          	//和entry中的键名相对应
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            //src文件夹下模版的名称
            filename: "login.html",
            //src文件夹下模版的地址
            template: "./src/login.html",
          //和entry中的键名相对应
            chunks: ['login']
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
        })
    ],
```

### 开发服务器配置

安装命令：

```bash
npm i -D webpack-dev-server
```

webpack-dev-server 主要原理：通过 webpack 将项目进行构建，将打包后的内容放在内存里面，所以可以很容易监视到是否发生变化，实现更快速度的动态更新

**注意！！**

只能监视 js/css 的变化！！！HTML 不可以监视到！！

> 在源代码中 CSS/JS 产生修改时，会立刻在浏览器中进行更新，这几乎相当于在浏览器 devtools 直接更改样式。

在 package.json 中配置：

```json
  "scripts": {
    "dev": "webpack-dev-server",
  }
```

### 从 bundle 剥离 css

安装插件，剥离 css 文件：

```bash
npm i -D mini-css-extract-plugin
```

使用：

```js
//webpack.config.js
{
  module: {
    rules: [
      {
        //匹配所有.css结尾的文件
        test: /\.css$/,
        //将匹配到的所有相关文件使用以下两个loader进行预处理，loader处理的顺序为从右到左
        // use: ['style-loader','css-loader'],
        //要使用css剥离功能，就不需要用到style-loader了，而是转用为剥离用的loader
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ];
  }
  plugins: [
    //剥离后使用Plugin生成css文件
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].chunk.css",
    }),
  ];
}
```

由于我们使用了 WebpackHtmlPlugin,所以生成的 css 文件会自动以`<link>`标签的形式出现在 html 文件中

### 压缩文件

- 去除注释
- 去除缩进
- treeshaking

#### js 压缩

```bash
npm i uglifyjs-webpack-plugin
```

```js
//webpack.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
{
  module:{//...},
  entry:{//...},
  //在loader对文件预处理之后的一个优化阶段，对资源文件进行一个优化（压缩、剥离等操作）
  optimization: {
        //在development模式下对代码进行压缩
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({sourceMap:true})
        ]
    }
}
```

#### css 压缩

```bash
npm i css-minimizer-webpack-plugin -D
```

```js
//webpack.config.js
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
{
  module:{//...},
  entry:{//...},
  optimization: {
        //在development模式下对代码进行压缩
        minimize: true,
        minimizer: [
            new CssMiniPlugin()
        ]
    }
}
```

### Tree Shaking

将一些未使用的代码删除掉。

以 lodash 为例：

安装 lodash:

```bash
npm i lodash
```

#### 文件 TreeShaking

导入并使用 lodash 中的一个方法：

```js
import _ from "lodash";
console.log(_.get({ a: 1 }, a)); //1
```

重新打包后，原来的 index.js 文件大小为 396KB，打包后的 index.js 文件大小为 950KB。

> 通过结构的方式来导入文件，可以触发 TreeShaking

修改完后发现大小还是一样，并没有触发 TreeShaking。

**触发 TreeShaking 的条件**

> 1.通过结构的方式来导入文件，可以触发 TreeShaking
>
> 2.调用的 npm 包必须使用 ESM

以上 TreeShaking 是不同文件的 TreeShaking，也就是说 lodash 中有好多方法，每一个方法都写在不同的文件中。没有使用到的方法，也就相当于没有使用到的文件，就不会被打包进来。

安装符合 ESM 规范的 lodash 包：

```bash
npm i -S lodash-es
```

重新打包后发现大小从之前的 950KB 变成了 474KB

#### 同一文件不同数据的 TreeShaking

**那么面对同一个文件中的方法，会如何处理？**

```js
//webpack.config.js
{
  mode: "production";
}
```

### 代码分割（重点）

```js
// 将HtmlWebpackPlugin代码分割的多个文件更细分的分割
        splitChunks:{
            // 1.通过chunks：all来启用代码的拆分
            chunks:'all',
            // 2.通过minSize来调节分离出来的包的大小（注意被分离的包需要在node_modules中）
            minSize:30 * 1024,
            // 3.修改分割后导出的包的名字
            name:'chunk',
            // 4.缓存组。通过这个配置，将node_modules中特定的库给抽离出来
            cacheGroups:{
                // 对象的名字可以随便起，为了方便理解建议用对应库的名称
                jquery:{
                    // 分割出来后文件的名称
                    name:'jquery-chunks',
                    // 匹配node_modules中库的名称
                    test:/jquery/,
                    chunks:'all'
                },
                'lodash-es':{
                    name:'lodash-es-chunks',
                    test:/lodash-es/,
                    chunks:'all'
                }
            }
            // 最后通过HtmlWebpackPlugin将分离出来的代码通过标签的形式注入到页面中
        }
```

上面代码简单的实现了 js 文件的代码分割，将整个 index.js 分割成了 index.js 和 chunk.js

### 清除 dist 多余文件

每次打包的时候，如果出现不同的文件名，之前的文件不会覆盖，而是依旧存在，需要手动去删除，可以用插件来自动删除。

```bash
npm i clean-webpack-plugin
```

```js
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
{
  plugins: [new CleanWebpackPlugin()];
}
```
