import { arraySidebar } from "vuepress-theme-hope";
import fs from 'fs'
import { getFiles } from "../../getFiles";

const filesArr = fs.readdirSync(process.cwd() + '/clog/study/frontend/css');

export const cssSidebar = arraySidebar(getFiles(filesArr))