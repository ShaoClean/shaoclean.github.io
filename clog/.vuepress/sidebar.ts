import { sidebar } from "vuepress-theme-hope";
import { backendSidebar } from "./sidebar/backend";
import { demoSidebar } from "./sidebar/demo";
import { essaySidebar } from "./sidebar/essay";
import { angularSidebar } from "./sidebar/frontend/angular";
import { cssSidebar } from "./sidebar/frontend/css";
import { jsSidebar } from "./sidebar/frontend/js";
import { reactSidebar } from "./sidebar/frontend/react";
import { tsSidebar } from "./sidebar/frontend/ts";
import { vueSidebar } from "./sidebar/frontend/vue";
export default sidebar({
  //项目
  "/project/":"structure",
  //学习笔记-前端
  "/study/frontend/vue":vueSidebar,
  "/study/frontend/react/":reactSidebar,
  "/study/frontend/angular/":angularSidebar,
  "/study/frontend/js/":jsSidebar,
  "/study/frontend/ts/":tsSidebar,
  "/study/frontend/css/":cssSidebar,
  //学习笔记-后端
  "/study/backend":backendSidebar,
  //随笔
  "/essay/": essaySidebar,
  "/teach/": "structure",
  //demo
  "/demo/": demoSidebar
});
