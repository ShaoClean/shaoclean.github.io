import { arraySidebar, HopeThemeSidebarGroupItem } from "vuepress-theme-hope";
import fs from 'fs'
import { getFiles } from "../../getFiles";

const filesArr = fs.readdirSync(process.cwd() + '/clog/study/frontend/js');

export const jsSidebar = arraySidebar(getFiles(filesArr))