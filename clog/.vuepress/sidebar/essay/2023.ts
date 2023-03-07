import { SidebarItem } from "vuepress-theme-hope";
import { getFiles } from "../../getFiles";
export const year2023Sidebar: SidebarItem = {
  text: "2023",
  collapsible: true,
  prefix: "2023/",
  children: getFiles('/clog/essay/2023')
}