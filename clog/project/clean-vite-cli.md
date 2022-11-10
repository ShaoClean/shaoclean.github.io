# clean-vite-cli 使用说明

## 请求服务

封装的请求服务在`src/utils/http.ts`中

其中请求的基础地址根据启动项目的不同命令来决定

- 开发环境启动命令：

`npm run dev`:该命令启动开发环境，同时使用`.env.dev`文件中的环境变量

- 生产环境启动命令：

`npm run prod`:该命令启动生产环境，同时使用`.env.prod`文件中的环境变量

其中已经定义了`VITE_SERVICE_URL`这个环境变量，且这个变量已经在`http.ts`中使用，只需要根据自己的需求在两个环境变量的文件中修改对应的值即可。

如需修改环境变量的名称，需要在`http.ts`、`.env.dev`、`.env.prod`这三个文件中同时将`VITE_SERVICE_URL`替换成需要的变量名

启动服务时，根据不同的环境使用不同的环境变量值。

## 组件

### 基础组件

基础组件的文件路径：`/src/base`

#### 1.基础页面（BasePage）

- **组件路径**：`/src/base/BasePage/BasePage.vue`

- **介绍**：包含具有导航功能的导航栏（页头）、标签栏（页脚）页面框架。

##### 导航栏

##### 标签栏

**介绍：**基础页面的页脚部分，通过对`Tabbar`组件的二次封装

- `BaseFooter`的 props 类型：

```ts
export type BaseFooter = {
  //导航栏标题
  barName?: string;
  //图标名称
  iconName?: string;
  img?: {
    //图片激活状态下的地址
    activeSrc: string;
    //图片未激活状态下的地址
    inactiveSrc: string;
  };
  router?: BasePageRouter;
}[];

export type BasePageRouter = {
  path: string;
  query?: string | {};
  param?: {};
};
```

注意：iconName 和 img 只能显示一个，其中 iconName 的优先级比较高，iconName 的值来源于 vant 组件库 Icon 的 name 值，[查看更多](http://vant3.uihtm.com/#/zh-CN/icon)
