---
icon: vue
date: 2023-02-28
category:
    - 前端
    - Vue
tag:
    - 学习笔记
---

# 缓存计时器

```vue
<template>
	<button @click="change" :disabled="isDisabled">{{ btnMsg }}</button>
</template>
<script>
// t0 = 计时器时间
// t1 = 按下计时器时的时间戳
// t2 = 当前时间戳
// t3 = 剩余时间 = t0 - (t2 - t1)
const isDisabled = ref(false);
const btnMsg = ref("im button !");
const t0 = ref(30);
const t1 = ref();
const t2 = ref();
const t3 = ref();
let timer;

let timeStamp = parseInt(localStorage.getItem("timeStamp"));
if (timeStamp) {
	t1.value = timeStamp;
	if (Date.now() / 1000 - t1.value < t0.value) {
		//页面刷新时，计时器将任务加入到消息队列中存在一定的时间差异，需要通过同步任务的方式再计算一遍
		btnMsg.value = `waiting ${parseInt(
			t0.value - (Date.now() / 1000 - t1.value)
		)}s...`;
		beginTimer();
	}
}

function change() {
	t1.value = Math.ceil(Date.now() / 1000);
	localStorage.setItem("timeStamp", t1.value);
	btnMsg.value = `waiting ${t0.value}s...`;
	beginTimer();
}
function beginTimer() {
	isDisabled.value = true;
	timer = setInterval(() => {
		t2.value = Date.now() / 1000;
		t3.value = parseInt(t0.value - (t2.value - t1.value));
		btnMsg.value = `waiting ${t3.value}s...`;
	}, 1000);
}

watch(t3, val => {
	if (val <= 0) {
		isDisabled.value = false;
		btnMsg.value = "im button!";
		clearInterval(timer);
	}
});
</script>
```
