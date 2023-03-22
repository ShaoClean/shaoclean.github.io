import { getFiles } from "./getFiles";
import fs from "fs";

// 设置统一密码
const psw = ["sczscz"];
// 白名单，不需要.md
const white_list = {
    "2023": ["1"],
};

/**
 * 文章加密配置
 * @date 2023.3.22
 * @returns 
 */
export function encryptEssayConfig() {
	const res = {};
	
    // 获取essay目录下的第一层级文件夹名称（年份）
	function getYears() {
		let res = fs.readdirSync(process.cwd() + "/clog/essay");
		return res.filter(item => item !== "README.md");
	}

	let years = getYears();

	years.forEach(year => {
		let filesArr = getFiles(`/clog/essay/${year}`);
		for (let eassy of filesArr) {
            // 跳过加密
			const isShow = white_list[year]?.includes(eassy);
			if (isShow) {
				continue;
			}
            // 加密
			let key = `/essay/${year}/${eassy}.html`;
			res[key] = psw;
		}
	});
    
	return res;
}
