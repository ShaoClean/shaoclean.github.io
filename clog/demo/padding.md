---
icon: eye
date: 2023-05-29
article: true
category:
  - demo
tag:
  - padding
---


<!--more-->
```js
const fs = require("fs");
const readline = require("readline");
const data = {
	name: "zhangsan",
	age: 18,
	home: "beijing",
	hobby: "basketball",
};
let res;

function demo1() {
	fs.appendFile("./1.txt", JSON.stringify(data, null, 2), err => {
		console.log("append file");
		const txt_dir = "./1.txt";
		if (err) {
			console.log(err);
			return;
		}

		let rl = readline.createInterface({
			input: fs.createReadStream(txt_dir),
		});
		let changeData = [];
		rl.on("line", input => {
			changeData.push(input);
			console.log("input", input);
		});
		rl.on("close", () => {
			console.log("close");
			res = changeData;
			console.log("res", res);
		});
	});

	time1();
	time2();
	time3();

	setTimeout(() => {
		console.log("setTimeout res 100", res);
	}, 100);
}

function time1() {
	setTimeout(() => {
		console.log("time1 begin");
		console.log("setTimeout res", res);
	});

	setTimeout(() => {
		console.log("setTimeout res 1", res);
	}, 1);

	setTimeout(() => {
		console.log("setTimeout res 2", res);
	}, 2);

	setTimeout(() => {
		console.log("time1 end");
		console.log("setTimeout res 3", res);
	}, 3);
}

function time2() {
	setTimeout(() => {
		console.log("time2 begin");
		console.log("setTimeout res 4", res);
	}, 4);

	setTimeout(() => {
		console.log("setTimeout res 5", res);
	}, 5);

	setTimeout(() => {
		console.log("setTimeout res 6", res);
	}, 6);

	setTimeout(() => {
		console.log("time2 end");
		console.log("setTimeout res 7", res);
	}, 7);
}

function time3() {
	setTimeout(() => {
		console.log("time3 begin");
		console.log("setTimeout res 8", res);
	}, 8);

	setTimeout(() => {
		console.log("setTimeout res 9", res);
	}, 9);

	setTimeout(() => {
		console.log("time3 end");
		console.log("setTimeout res 10", res);
	}, 10);
}

demo1();
```
