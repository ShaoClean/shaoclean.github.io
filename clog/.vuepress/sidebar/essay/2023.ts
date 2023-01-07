import { HopeThemeSidebarGroupItem } from "vuepress-theme-hope";
import { getFiles } from "../../getFiles";
export const year2023Sidebar: HopeThemeSidebarGroupItem = {
  text: "2023",
  collapsable: true,
  prefix: "2023/",
  children: getFiles('/clog/essay/2023')
}