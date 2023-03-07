import { HopeThemeSidebarGroupItem } from "vuepress-theme-hope";
import { getFiles } from "../../getFiles";

// 前置路径 /study/backend
export const nodeSidebar:HopeThemeSidebarGroupItem = {
  text:"node",
  icon:"nodeJS",
  prefix:"nodeJS/",
  collapsible: true,
  children:getFiles('/clog/study/backend/nodeJS')
}