# 读取 nestjs 文件的接口地址

之前有用过 nestjs 写接口，但是不太方便看完整的路径，所以有了这个 demo

项目目录如下：

```
file
├─ apis.js
├─ index.js
├─ package.json
└─ src
   ├─ business-info.controller.ts
   └─ matchPath.js

```

business-info.controller.ts 中的内容：

```ts
import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	Query,
} from "@nestjs/common";
import { CustomerService } from "src/customer/customer.service";
import { BusinessInfoService } from "./business-info.service";
import { CreateBusinessInfoDto } from "./dto/create-business-info.dto";
import { UpdateBusinessInfoDto } from "./dto/update-business-info.dto";

@Controller("business-info")
export class BusinessInfoController {
	constructor(private readonly businessInfoService: BusinessInfoService) {}

	@Get("/createTemp")
	async getCreateTemp() {
		return this.businessInfoService.getCreateTemp();
	}

	@Post("/create")
	create(@Body() createBusinessInfoDto) {
		return this.businessInfoService.create(createBusinessInfoDto);
	}

	@Post("/get")
	findSome(@Body() playload) {
		return this.businessInfoService.findSome(playload);
	}

	@Get("/detail")
	findOne(@Query("id") id: string) {
		return this.businessInfoService.findOne(id);
	}

	@Get("/business-edit")
	findEditOne(@Query("id") id: string) {
		return this.businessInfoService.edit(id);
	}

	@Get("/all")
	findAll(@Query("id") id: string) {
		return this.businessInfoService.findAll(id);
	}

	@Post("/byCustomerId")
	findByCustomerId(@Body("customerId") customerId: string) {
		return this.businessInfoService.findByCustomerId(customerId);
	}

	@Post("/allotMan")
	updateMan(
		@Body() playload,
		@Body("businessId") businessId: string,
		@Body("type") type: string
	) {
		return this.businessInfoService.updateMan(type, playload, businessId);
	}

	@Post("/withoutAllot")
	withoutAllot(@Body("type") type: string) {
		return this.businessInfoService.withoutAllot(type);
	}

	@Post("/searchWithoutAllot")
	searchWithoutAllot(
		@Body("type") type: string,
		@Body("projectName") projectName
	) {
		return this.businessInfoService.searchWithoutAllot(type, projectName);
	}

	@Post("/updateBusiness")
	updateForm(@Body("businessId") id, @Body() playload) {
		return this.businessInfoService.updateForm(id, playload);
	}

	@Post("/lossBusiness")
	lossBusiness(@Body() playload) {
		return this.businessInfoService.lossBusiness(playload);
	}

	@Post("/searchLossBusiness")
	searchLossBusiness(@Body("projectName") projectName) {
		return this.businessInfoService.searchLossBusiness(projectName);
	}

	@Post("/searchByProjectName")
	searchByProjectName(@Body() playload) {
		return this.businessInfoService.searchByProjectName(playload);
	}
}
```

index.js 中的内容：

```js
const fs = require("fs");
const path = require("path");
const matchPath = require("./src/matchPath");
const { EOL } = require("os");
// 文件路径
const filepath = path.join(__dirname, "./src/business-info.controller.ts");
function createApi(filepath = testPath) {
	fs.readFile(filepath, (err, data) => {
		const text = data.toString();
		// 根路径
		const rootPath = matchPath(text, "Controller");
		// 子路径
		const childPath = matchPath(text, ["Post", "Get"]);
		// 存放结果的文件路径
		const resultFilePath = path.resolve(process.cwd(), "./apis.js");
		// 输出结果
		for (let cPath of childPath) {
			const apiName = cPath.slice(1, cPath.length);
			const api = `
function ${apiName}(params){
    return post('${rootPath + cPath}',params)
}`;
			fs.appendFile(resultFilePath, api + EOL, err => {
				if (err) {
					console.log(err);
				}
			});
		}
	});
}
```

matchPath.js 中的内容：

```js
/**
 * 匹配@Xxx('')中的路径
 * @param {string} inputString
 * @param {string| string[]} parameterNames
 * @returns
 * @example
 * matchPath('@Way('/my-path') and many other words', 'Way') => '/my-path'
 */
function matchPath(inputString, parameterNames) {
	let keywords = "";
	if (Array.isArray(parameterNames)) {
		keywords = parameterNames.join("|");
	} else {
		keywords = parameterNames;
	}
	const regex = new RegExp(`@(${keywords})\\('([^']*)'\\)`, "g");
	const matches = inputString.matchAll(regex);
	const values = [];
	for (const match of matches) {
		values.push(match[2]);
	}
	return values;
}
module.exports = matchPath;
```

输出的结果，apis.js 文件中的内容：

```js
function createTemp(params) {
	return post("business-info/createTemp", params);
}

function create(params) {
	return post("business-info/create", params);
}

function get(params) {
	return post("business-info/get", params);
}

function detail(params) {
	return post("business-info/detail", params);
}

function businessEdit(params) {
	return post("business-info/businessEdit", params);
}

function all(params) {
	return post("business-info/all", params);
}

function byCustomerId(params) {
	return post("business-info/byCustomerId", params);
}

function allotMan(params) {
	return post("business-info/allotMan", params);
}

function withoutAllot(params) {
	return post("business-info/withoutAllot", params);
}

function searchWithoutAllot(params) {
	return post("business-info/searchWithoutAllot", params);
}

function updateBusiness(params) {
	return post("business-info/updateBusiness", params);
}

function lossBusiness(params) {
	return post("business-info/lossBusiness", params);
}

function searchLossBusiness(params) {
	return post("business-info/searchLossBusiness", params);
}

function searchByProjectName(params) {
	return post("business-info/searchByProjectName", params);
}
```
