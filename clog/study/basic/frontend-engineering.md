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

## 一、项目初始化

1.初始化npm项目

```bash
npm init -y
```

2. 新建`src`文件夹，`src`目录下新建`index.js`文件;

   新建`webpack.config.js`文件；

   新建`public`文件夹，`public`文件夹下新建`index.html`文件

3. 安装webpack相关依赖

```bash
npm i -D webpack webpack-cli
```

4. 修改webpack.config.js文件中的配置：

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



4. 修改package.json中的scripts中的脚本,初始化打包功能

```JSON
  "scripts": {
    "build": "webpack"
  },
```

5. 在public目录下的index.html文件中引入bundle.js

## 二、项目改造

### Script标签自动引入

1. 删除项目中的所有script标签以及link标签的引用

2. 安装插件,用于自动引入script标签到html文件中

解决问题：文件名使用hash或者其它变动较大的值时，每次打包都需要重新在html文件中引入，非常麻烦。

```bash
npm i html-webpack-plugin --save-dev
```

3. 在webpack.config.js中引入新安装的Plugin

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
```

4. 将html-webpack-plugin添加到新的plugins配置项中

   ```js
   plugins: [
           new HtmlWebpackPlugin({
               //src文件夹下模版的名称
               filename: "index.html",
               //src文件夹下模版的地址
               template: "./src/index.html"
           })
       ]
   ```

5. 执行打包命令测试一下，发现生成两个文件，并且在index.html文件中自动注入了script标签

   

   
### CSS自动注入

1.安装css相关的loader

```bash
npm i -D css-loader style-loader
```

2.在src文件夹下的index.js通过模块化的方式导入css文件

```js
import './css/public.css'
import './css/index.css'
```

3.新增module配置项

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

4. 执行打包命令进行打包测试，发现报错了，原因是因为没有对图片进行处理。webpack5之前使用`file-loader`或者是`url-loader`来解决这一问题。webpack5中使用`ModuleAssets`这一新特性来解决

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

   

### JS自动注入

1. 在src文件夹下的index.js文件中引入js

```js
//没有按照模块化，所以没有导出，直接引入就可以
import './js/jquery-1.12.4.min'
import './js/public'
import './js/nav'
import './js/jquery.flexslider-min'
```

2. 执行打包命令，发现bundle文件非常的大，达到180多kb。还存在`$`不存在的问题需要解决，通过webpack内置插件`ProvidePlugin`来解决

3. 了解`ProvidePlugin`，官网的解释：

> Automatically load modules instead of having to `import` or `require` them everywhere.

自动的去导入模块，而不是手动的去导入。

4. 安装jquery、flexslider

```bash
npm i jquery flexslider
```

5. 在webpack.config.js中引入新安装的Plugin

```js
const webpack = require('webpack');

module.exports = {
  //...
  plugins: [
    	//...
        new webpack.ProvidePlugin({
          	//完成变量于库之间的映射（自动导入）
            $:'jquery',
            jQuery:'jquery',
        })
    ],
}
```

6. 删除掉src/index.js中关于jQuery的引用，因为在配置中已经自动导入了，可以在任何地方使用。

### 图片自动注入

html中直接使用img标签src加载图片的话，因为没有被依赖，图片将不会被打包。这个loader解决这个问题，图片会被打包，而且路径也处理妥当。

所以使用第三方loader来做这件事

```bash
npm i html-withimg-loader
```

在webpack.config.js中添加新的loader配置项：

```js
{
  rules:[
    {
      test:/\.html$/,
      loader:'html-withimg-loader'
    }
  ]
}
```





## 三、项目优化

一般打包完成之后只有一个bundle.js文件，包含了项目中用到的所有js、css，档切换到一个页面的时候，新的页面也同样会加载bundle.js文件。这样就出现了一个问题，有很多无关的代码是本页面用不到的，会造成资源上的浪费，所以要进行优化。

### js分离

配置多个入口文件，使每一个页面单独使用一个js文件，而不是所有页面公用一个bundle.js文件，可以理解为代码分割，达到优化的目的。

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

webpack-dev-server主要原理：通过webpack将项目进行构建，将打包后的内容放在内存里面，所以可以很容易监视到是否发生变化，实现更快速度的动态更新

在package.json中配置：

```json
  "scripts": {
    "dev": "webpack-dev-server",
  }
```

