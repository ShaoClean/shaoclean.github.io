---
icon: javascript
date: 2023-02-20
category:
    - 前端
    - TS
tag:
    - IoC
    - 学习笔记
---

# IoC

之前刷到很多 Java 中关于 IoC 的视频，看着好有意思就想了解一下 JS 中是否有相同的使用场景？

什么是 IoC：

> IoC（Inversion of Control）控制反转或者依赖倒置，是面向对象编程中的一种设计原则，用来降低计算机代码之间的耦合度。

我看 Java 博主对于 IoC 的介绍，初步理解为是 Java 中是以 Class 为基础的，每次使用一个 Class 的时候都需要手动去 new 一个，非常的繁琐，用 IoC 可以很方便的解决这一繁琐的问题。不过这个理解非常的片面，存在一定的问题，IoC 不止解决了这一点点问题。

后面理解加深了一步，这是一种面向接口的编程思想：在最高层的模块中使用一个指定的方法（相当于定义一个接口），它依赖的模块中创建这个指定的方法（实现接口）。所以按照我现在的理解更希望叫它依赖倒置。

> 在传统面向对象的编码过程中，当类与类之间存在依赖关系时，通常会直接在类的内部创建依赖对象，这样就导致类与类之间形成了耦合，依赖关系越复杂，耦合程度就会越高，而耦合度高的代码会非常难以进行修改和单元测试。而 IoC 则是专门提供一个容器进行依赖对象的创建和查找，将对依赖对象的控制权由类内部交到容器这里，这样就实现了类与类的解耦，保证所有的类都是可以灵活修改。

## 加入 IoC 思想

比如要实现一个我之前项目中遇到的重复劳动性很高的问题：

-   后台接口用 NestJs 搭建，搭建完后还需要在前端按照它的路由规则得到服务请求的具体地址
-   前端还需要根据服务请求地址来编写 ajax 请求
-   前端还需要将 ajax 请求进行二次封装

所以就出现了一个很烦人的问题，写完后台接口，还需要再写前端的请求。于是就想到用脚本的方式自动读取 NestJs 的 Controller 层中的代码来生成前端请求的方法。

具体例子已经实现过了，[在这里](https://www.hiclean.icu/demo/read-apis-nest.html)

但是会发现这个代码的耦合度非常的高：读取文件数据-替换-生成数据-创建文件，也就是很多功能无法复用，一旦某一个流程需要增加新的逻辑，就很容易出问题，整个代码会显得非常的臃肿。

虽然现在才这么几行代码，而且能实现功能。但是可以发现，读取文件数据、创建文件等功能适用性应该是很强的，不止应该局限于此。于是后面我又接触到了`类`的思想：一个类干一件事，比如说可以将这个过程分为两个类：

-   文件类，实现文件的读取、创建文件功能
-   Api 类，负责数据的替换、生成函数

File 类：

```ts
import * as fs from "fs";
import * as path from "path";
import { FileData } from "../interface/FileData";
import { InitClass } from "../interface/InitClass";

export class File implements InitClass {
	static instances: Map<any, any> = new Map();
	files: FileData = [];
	constructor(options: Record<string, string>) {
		this.add(options);
		this.read();
		for (let instance of File.instances.values()) {
			if (instance) {
				// 执行实例中的init方法
				instance.init(this);
			}
		}
		this.createFile(this.files);
	}
	// 初始化
	init(container: any) {
		container.file = this;
	}
	// 向依赖关系Map中注入实例
	static inject<T extends new (...args: any[]) => any>(
		instance: InstanceType<T>
	) {
		File.instances.set(instance.constructor.name, instance);
	}
	// 添加文件
	private add(options: Record<string, string>) {
		for (let fileName in options) {
			this.files.push({
				fileName,
				filePath: options[fileName],
				fileData: "",
			});
		}
	}
	// 获取文件数据
	async read() {
		for (let file of this.files) {
			const data = fs.readFileSync(path.join(__dirname, file.filePath));
			const text = data.toString();
			file.fileData = text;
		}
	}
	//将files数组对象中的数据转换成文件
	createFile(files: FileData) {
		for (let file of files) {
			let resultPath = `./${file.fileName}`;
			let dir = path.resolve(process.cwd(), resultPath);
			// @ts-ignore
			if (!file.parent) {
				// 对已经创建的文件做标记
				// @ts-ignore
				file.parent = `${file.fileName}`;
				// 创建文件夹
				fs.mkdirSync(dir);
			} else {
				// 创建文件夹
				// @ts-ignore
				resultPath = `./${file.parent}/${file.fileName}`;
				dir = path.resolve(process.cwd(), resultPath);
				fs.mkdirSync(dir);
			}

			if (file.children?.length) {
				// 如果存在children，对children中的每一个路由都做上父文件夹的路径标识
				for (let child of file.children) {
					// @ts-ignore
					child.parent = `${file.fileName}`;
				}
				this.createFile(file.children);
			} else {
				// 创建文件
				fs.writeFile(
					path.resolve(process.cwd(), `${dir}/${file.fileName}.js`),
					file.fileData!,
					err => {
						console.log(err);
					}
				);
			}
		}
	}
}
```

ServiceApi 类：

```ts
import { getApiTemp } from "../template/api";
import { matchPath } from "../utils/matchPath";
import { EOL } from "os";
import { File } from "./File";
import { InitClass } from "../interface/InitClass";

export class ServiceApi implements InitClass {
	originData: string = "";
	static instances: Map<any, any>;
	constructor() {}

	init(context: any) {
		if (!context) return;
		for (let file of context.files) {
			file.fileData = this.serviceToFunc(file.fileData);
		}
	}
	/**
	 * 将NestJS Controller层的路由转换成对应JS的请求方法
	 * @example
	 * `@Controller('business-info');
	 *  export class BusinessInfoController {
	 *     "@Get('/createTemp')"
	 *      getCreateTemp(){}
	 * }`
	 * ==>
	 *function createTemp(params){
	 *    return post('business-info/createTemp',params)
	 *}
	 * */
	serviceToFunc(originData: string) {
		let fileData: string = "";
		// 根路径
		const rootPath = matchPath(originData, "Controller") as string;
		// 子路径
		const childPath = matchPath(originData, ["Post", "Get"]);

		for (let cPath of childPath) {
			const apiName = cPath.slice(1, cPath.length);
			const api = getApiTemp(apiName, rootPath, cPath);
			fileData += api + EOL;
		}
		return fileData;
	}
}
```

Route 类：

```ts
import { InitClass } from "../interface/InitClass";
import * as path from "path";
import { template_route } from "../template/route";
import { FileData } from "../interface/FileData";
import { clearScreenDown } from "readline";
export class Route implements InitClass {
	files = {};
	constructor(files: Record<string, any>) {
		this.files = files;
	}
	init(context: any) {
		context.files.push(...this.createRoute(this.files));
	}

	createRoute(files: Record<string, any>) {
		const res: FileData = [];
		for (let fileName in files) {
			// 结果数据
			let route_data;

			// \r?: 匹配可选的回车符 \r
			// \n: 匹配换行符
			// m: 表示多行匹配，即在匹配文本中搜索换行符并匹配。
			// const data = template.split(/\r?\n/gm);

			// 数据替换,不用读取文件
			route_data = template_route
				.replace(/\{\{name\}\}/g, fileName)
				.replace(/\{\{path\}\}/g, files[fileName]);

			let file_data = {
				fileName: fileName,
				fileData: route_data || "",
				filePath: files[fileName],
				children: [],
			};
			if (typeof files[fileName] !== "string") {
				let copy_file_data = JSON.parse(JSON.stringify(file_data));
				copy_file_data.fileData = "";
				copy_file_data.filePath = "";
				copy_file_data.fileName = fileName;
				// @ts-ignore
				file_data["children"].push(
					...this.createRoute(files[fileName])
				);
				res.push(file_data);
			} else {
				res.push(file_data);
			}
		}
		return res;
	}
}
```

定义一个容器：

```ts
import { Inject } from "../decorator/inject";
import { ServiceApi } from "./ServiceApi";
import { File } from "./File";
import { Route } from "./Route";

export class Container {
	static instances: Map<any, any> = new Map();
	constructor() {
		for (let instance of Container.instances.values()) {
			// 执行实例中的init方法
			instance.init(this);
		}
	}

	// 向依赖关系Map中注入实例
	static inject<T extends new (...args: any[]) => any>(
		instance: InstanceType<T>
	) {
		Container.instances.set(instance.constructor.name, instance);
	}
}

// 注入Api类实例，用于处理文件读取后的源文件数据，需要在Container前注入
File.inject(new ServiceApi());
File.inject(
	new Route({
		home: "@/pages/home",
		bar: {
			bar1: "@/pages/bar/bar1",
		},
	})
);
// 注入文件类实例，用于添加一个流程所有必备文件
Container.inject(
	new File({
		business: "../create-api/business-info.txt",
	})
);

// 实例化一个新的流程
let lc1 = new Container();
```

这三段代码中：

-   三个模块互不相关，模块与模块之间没有很强的关联
-   通过注入实例、在高层次模块中实现 init 方法来实现模块之间的关联

大大的降低了耦合度。
