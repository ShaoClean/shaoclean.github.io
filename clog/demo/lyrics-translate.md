---
icon: eye
date: 2023-04-01
article: true
category:
    - demo
---

# 歌词滚动
<!-- more -->
歌词：

```js
const lyrics = `[00:00.00]我落泪情绪零碎
[00:00.100]作词 : 方文山
[00:01.000]作曲 : 周杰伦
[00:02.000]编曲 : 钟兴民
[00:03.000]制作人 : 周杰伦
[00:04.000]弦乐编写 : 钟兴民
[00:05.000]录音师 : 杨瑞代Gary
[00:06.000]录音室 : JVR Studio
[00:07.000]混音 : 杨大纬录音工作室
[00:16.43]地上 断了翅的蝶
[00:19.98]雾散之后的 满月
[00:23.78]原来爱 跟心碎
[00:26.43]都可以很 细节
[00:30.48]听夜风绕过 几条街
[00:34.08]秋天瘦了满地 的落叶
[00:38.08]于是又一整夜
[00:41.23]感性的句子都枯萎 凋谢
[00:45.58]我不想再写
[00:48.33]随手撕下这一页
[00:52.28]原来诗跟离别
[00:54.99]可以没有结尾（没有结尾）
[00:58.99]憔悴后悔等等这些
[01:02.49]于是我把诗折叠
[01:06.59]邮寄出感觉 夹一束白玫瑰
[01:10.09]你将爱退回
[01:11.99]我不落泪 忍住感觉
[01:19.19]分手在起风 这个季节
[01:26.44]哭久了会累 也只是别人的以为
[01:35.29]冷的咖啡 我清醒着 一再续杯
[01:41.14]我落泪 情绪零碎
[01:47.89]你的世界 一幕幕纷飞
[01:55.04]门外的蔷薇 带刺伤人的很直接
[02:03.99]过去被翻阅 结局满天的 风雪
[02:26.04]我不想再写
[02:28.74]随手撕下这一页（这一页）
[02:32.65]原来诗 跟离别
[02:35.40]可以没有结尾（没有结尾）
[02:39.40]憔悴后悔等等 这些
[02:42.85]于是我 把诗折叠
[02:46.95]邮寄出感觉 夹一束白玫瑰
[02:50.35]你将爱退回
[02:52.35]我不落泪 忍住感觉
[02:59.50]分手在起风 这个季节
[03:06.75]哭久了会累 也只是别人的以为
[03:15.60]冷的咖啡 我清醒着 一再续杯
[03:21.35]我落泪 情绪零碎
[03:28.08]你的世界 一幕幕纷飞
[03:35.38]门外的蔷薇 带刺伤人的很直接
[03:44.34]过去被翻阅 结局满天的 风雪
`;
```

完整代码：
有两种实现滚动的方式，计算需要滚动的距离：当前歌词所在行的高度 - 视口的一半

-   `scrollTop`方法实现的滚动动画用的是自带的 smooth，不能自定义

-   `translateLyrics`方法实现的滚动动画用的是 css 的 transition，可以自定义。更推荐这一种。

```html
<!DOCTYPE html>
<html lang="zh-CN">
	<head>
		<meta charset="UTF-8" />
		<title>我落泪情绪零碎</title>
		<style>
			* {
				margin: 0;
				padding: 0;
			}
			html,
			body {
				width: 100%;
				height: 100%;
				background-color: #2b2b2b;
			}
			.container {
				width: 100%;
				height: 100%;
				text-align: center;
				color: #969696;
				overflow: hidden;
			}
			.lyrics {
				position: relative;
				top: 190px;
				height: 350px;
				overflow: hidden;
				transition: 0.7s;
			}

			ul {
				overflow: scroll;
				transition: 0.7s;
			}
			ul::-webkit-scrollbar {
				display: none;
			}
			ul li.active {
				transform: scale(1.5);
				color: #fff;
			}
			ul li {
				list-style-type: none;
				height: 50px;
				line-height: 50px;
				transition: 0.7s;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<audio controls src="wllqxls.mp3"></audio>
			<div class="lyrics">
				<ul></ul>
			</div>
		</div>
		<script src="lyrics.js"></script>
		<script>
			const doms = {
				source: document.querySelector("audio"),
				lyrics: document.querySelector(".lyrics"),
				ul: document.querySelector("ul"),
			};
			createElement();
			doms.lis = document.querySelectorAll("li");
			doms.source.volume = 0.1;
			/*
			 * 原始歌词转换成数组
			 * */
			function lyricsToArr() {
				const arr = lyrics.split("\n");
				let res = [];
				arr.forEach(item => {
					if (!item) return;
					let obj = {};
					// 分割 ']'
					const splitRightSign = item.split("]");
					// 时间
					const timeText = splitRightSign[0].split("[")[1];

					obj.time = timeTextToNumber(timeText);
					// 歌词
					obj.content = splitRightSign[1];
					res.push(obj);
				});
				return res;
			}

			function createElement() {
				const frame = document.createDocumentFragment();
				const lyricsArr = lyricsToArr();

				lyricsArr.forEach(item => {
					const li = document.createElement("li");
					li.textContent = item.content;
					frame.appendChild(li);
				});

				doms.ul.appendChild(frame);
			}
			/*
			 * 字符串类型的时间转换成数字类型的时间
			 * */
			function timeTextToNumber(timeText) {
				let res;
				if (!timeText) return;
				const splitSign = timeText.split(":");
				const minute = parseInt(splitSign[0]);
				res = minute * 60 + Number(splitSign[1]);
				return res;
			}

			/*
			 * 当前播放器匹配歌词时间
			 * */
			function findIndex() {
				const currentTime = doms.source.currentTime;
				const lyricsArr = lyricsToArr();

				for (let i = 0; i < lyricsArr.length; i++) {
					const time = lyricsArr[i].time;

					if (currentTime >= lyricsArr[lyricsArr.length - 1].time) {
						return lyricsArr.length - 1;
					}

					if (currentTime <= lyricsArr[0].time) {
						return 0;
					}

					if (
						currentTime >= time &&
						currentTime < lyricsArr[i + 1].time
					) {
						return i;
					}
				}
			}

			function scrollTop() {
				const index = findIndex();
				// 容器高度
				const lyricsHeight = doms.lyrics.clientHeight;
				// 歌词高度
				const height = doms.lis[0].clientHeight;
				const currentHeight = height * index;
				doms.lyrics.scrollTo({
					top: currentHeight - lyricsHeight / 2,
					behavior: "smooth",
				});
				doms.lis.forEach((item, i) => {
					if (i === index) {
						item.classList.add("active");
					} else {
						item.classList.remove("active");
					}
				});
			}

			function translateLyrics() {
				const index = findIndex();
				// 容器高度
				const lyricsHeight = doms.lyrics.clientHeight;
				// 歌词高度
				const height = doms.lis[0].clientHeight;
				const currentHeight = height * index;
				// index === 3的时候总高度为 3 * 50 = 150，是没有超过容器高度的一半的
				// 当index === 4的时候，超过了容器高度的一半，则需要开始移动
				if (currentHeight > lyricsHeight / 2) {
					// 写死的形式
					// const translate = (index - 3) * height
					// 更加灵活的形式
					const translate = currentHeight - lyricsHeight / 2;
					doms.ul.style.transform = `translateY(-${translate}px)`;
				}
				doms.lis.forEach((item, i) => {
					if (i === index) {
						item.classList.add("active");
					} else {
						item.classList.remove("active");
					}
				});
			}

			doms.source.addEventListener("timeupdate", translateLyrics);
		</script>
	</body>
</html>
```
