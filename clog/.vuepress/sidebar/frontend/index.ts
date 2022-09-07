import { arraySidebar } from "vuepress-theme-hope";
import { angularSidebar } from "./angular";
import { jsSidebar } from "./js";
import { reactSidebar } from "./react";
import { vueSidebar } from "./vue";
// 前置路径 /study/frontend
export const frontendSidebar = arraySidebar([
  vueSidebar,
  reactSidebar,
  jsSidebar,
  angularSidebar
])