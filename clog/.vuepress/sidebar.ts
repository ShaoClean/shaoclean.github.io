import { sidebar } from "vuepress-theme-hope";
import { backendSidebar } from "./sidebar/backend";
import { essaySidebar } from "./sidebar/essay";
import { frontendSidebar } from "./sidebar/frontend";
import { teachSidebar } from "./sidebar/teach";
export default sidebar({
  "/project/":[
    '',
    "cyou-js",
    "CYou"
  ],
  //学习笔记-前端
  "/study/frontend":frontendSidebar,
  //学习笔记-后端
  "/study/backend":backendSidebar,
  //随笔
  "/essay/": essaySidebar,
  "/teach/": teachSidebar
});
