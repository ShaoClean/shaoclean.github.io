---
icon: eye
date: 2023-02-13
category:
  - 前端
  - 前端工程化
tag:
  - 学习笔记
---

# 前端工程化配置文件

```js
//webpack.config.js
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CssMiniPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  // target: 'web',
  mode: "development",
  //项目入口文件，字符串形式
  // entry: './src/index.js',
  //对象形式
  entry: {
    index: "./src/home/index.js",
    "login.entry": "./src/login/login.entry.js",
    "register.entry": "./src/register/register.entry.jsx",
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
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
      {
        //匹配所有.css结尾的文件
        test: /\.css$/,
        //将匹配到的所有相关文件使用以下两个loader进行预处理，loader处理的顺序为从右到左
        // use: ['style-loader','css-loader'],
        //要使用css剥离功能，就不需要用到style-loader了，而是转用为剥离用的loader
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        //匹配图片格式文件（但是打包时不能对html中的img标签进行打包），并忽略大小写
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //启动webpack5中内置的ModuleAsset特性
        type: "asset",
        parser: {
          //如果一个模块源码大小小于指定的maxSize值，模块会被作为一个Base64编码的字符串注入到打包结果中，否则模块文件将会被生成到输出的目标目录中。
          //图片格式，正好可以使用Base64来做处理，所以可以巧妙地使用这一个parser
          dataUrlCondition: {
            maxSize: 4 * 1024,
          },
        },
        generator: {
          //[hash:6]表示使用6位哈希值，使用hash防止图片重名
          //[ext]表示原本后缀值
          filename: "images/[name].[hash:6][ext]",
        },
      },
      //html中直接使用img标签src加载图片的话，因为没有被依赖，图片将不会被打包。这个loader解决这个问题，图片会被打包，而且路径也处理妥当。
      {
        test: /\.html$/,
        loader: "html-withimg-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      //src文件夹下模版的名称
      filename: "index.html",
      //src文件夹下模版的地址
      template: "./src/home/index.html",
      //和entry中的键名相对应
      chunks: ["index"],
      inject: "head",
      scriptLoading: "defer",
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login/login.html",
      chunks: ["login.entry"],
      inject: "body",
      scriptLoading: "module",
    }),
    new HtmlWebpackPlugin({
      filename: "register.html",
      template: "./src/register/register.html",
      chunks: ["register.entry"],
      inject: "body",
      scriptLoading: "module",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    //剥离后使用Plugin生成css文件
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[name].chunk.css",
    }),
    // 每次打包之前清除dist目录
    new CleanWebpackPlugin(),
  ],

  //开发服务器配置
  devServer: {
    //静态资源文件的路径
    // static:{
    //   directory:path.join(__dirname,'dist')
    // },
    //是否压缩
    compress: true,
    //端口号
    port: 8000,
    // 热启动
    hot: true,
  },
  //在loader对文件预处理之后的一个优化阶段，对资源文件进行一个优化（压缩、剥离等操作）
  optimization: {
    //在development模式下对代码进行压缩
    minimize: true,
    minimizer: [
      // new UglifyJsPlugin({sourceMap:true}),
      new UglifyJsPlugin(),
      new CssMiniPlugin(),
    ],
    // 将HtmlWebpackPlugin代码分割的多个文件更细分的分割
    splitChunks: {
      // 1.通过chunks：all来启用代码的拆分
      chunks: "all",
      // 2.通过minSize来调节分离出来的包的大小（注意被分离的包需要在node_modules中）
      minSize: 30 * 1024,
      // 3.修改分割后导出的包的名字
      name: "public.chunk",
      // 4.缓存组。通过这个配置，将node_modules中特定的库给抽离出来
      cacheGroups: {
        // 对象的名字可以随便起，为了方便理解建议用对应库的名称
        jquery: {
          // 分割出来后文件的名称
          name: "jquery-chunks",
          // 匹配node_modules中库的名称
          test: /jquery/,
          chunks: "all",
        },
        "lodash-es": {
          name: "lodash-es-chunks",
          test: /lodash-es/,
          chunks: "all",
        },
        vue: {
          name: "vue-chunks",
          test: /vue/,
          chunks: "all",
        },
        react: {
          name: "react-chunks",
          test: /react/,
          chunks: "all",
        },
        "react-dom": {
          name: "react-dom-chunks",
          test: /react-dom/,
          chunks: "all",
        },
      },
      // 最后通过HtmlWebpackPlugin将分离出来的代码通过标签的形式注入到页面中
    },
  },
};
```

package.json 文件：

```json
{
  "name": "webpack_learn",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.20.12",
    "@babel/plugin-transform-runtime": "^7.19.6",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "@vue/compiler-sfc": "^3.2.47",
    "babel-loader": "^9.1.2",
    "clean-webpack-plugin": "^4.0.0",
    "css-loader": "^6.7.3",
    "css-minimizer-webpack-plugin": "^4.2.2",
    "html-webpack-plugin": "^5.5.0",
    "html-withimg-loader": "^0.1.16",
    "mini-css-extract-plugin": "^2.7.2",
    "style-loader": "^3.3.1",
    "uglifyjs-webpack-plugin": "^2.2.0",
    "vue-loader": "^17.0.1",
    "webpack": "^5.75.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.1.0"
  },
  "dependencies": {
    "flexslider": "^2.7.2",
    "jquery": "^3.6.3",
    "lodash-es": "^4.17.21",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "vue": "^3.2.47",
    "vue-router": "^4.1.6"
  }
}
```

```json
//.babelrc
{
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        {
          "regenerator": true
        }
      ]
    ]
}

```
