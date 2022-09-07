import { sidebar } from "vuepress-theme-hope";
import { essaySidebar } from "./sidebar/essay";
import { frontendSidebar } from "./sidebar/frontend";

export default sidebar({
  "/project/":[
    '',
    "cyou-js",
    "CYou"
  ],
  "/study/frontend":frontendSidebar,
  //vue
  // "/study/frontend/vue": [
  //   '',
  //   "Vue2",
  //   "Vue3"
  // ],
  // //react
  // "/study/frontend/react": [
  //   '',
  //   "ReactCli",
  //   "ReactExtends"
  // ],
  // //angular
  // "/study/frontend/angular": [
  //   '',
  //   "Angular",
  // ],
  // //js
  // "/study/frontend/js": [
  //   '',
  //   "ES6",
  // ],
  //随笔
  "/essay/": essaySidebar
});
