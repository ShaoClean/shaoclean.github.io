# 移动端适配

核心是：**进行屏幕宽度的等比缩放**

## rem 适配

场景：设计稿的宽度是 750px，而一般手机设备的宽度是 375px。那么在写代码的时候，如果一个元素在设计稿上的宽度为 100px，那么就要写成 50px。存在一个问题：每次得到一个宽度都需要自己去换算，而且实际设备的宽度也不能确定一定是 375px。所以需要实现不同设备的等比缩放。

-   750px 的设计稿=》375px 的设备

​ 设计稿中 100px 的元素=》设备上 50px

-   750px 的设计稿=》250px 的设备

​ 设计稿中 300px 的元素=》设备上 100px

现有问题：

-   如何确定设备的大小？

-   知道了设备的大小（也就是知道了缩放的比例），如何动态的修改代码中的 px 大小？不可能为了多个设备写多份 px 吧。

解决：

此时就可以用 rem 来实现。

什么是 rem？rem 是相对单位，它的大小根据根节点的 font-size 属性。例如：根节点的 font-size 是 100px，那么 1rem == 100px

由于 rem 是根据 font-size 来定的，那么只需要根据不同的设备来给一个初始的 font-size 值就行了。当设备发生变化的时候，font-size 就会跟着变化，就能实现自动等比适配大小了，从而在不同的设备上表现统一。

现在我们假设 750px 的设计稿 font-size 为 100px

其中一个元素的宽度为 200px。

所以此时 1rem == 100px

所以此时的元素宽度可以表示为 2rem。

如果，我现在的设备换到了 375px。换到了新的设备下，它的宽度仍然是 2rem，而新设备下是需要我们需要修改 font-size 的值来让这个 2rem 来适配这个 375px 的设备。

设计稿宽度 750px font-size：100px

设计稿元素 200px === 2rem

新设备的宽度 375px font-size：？px

得到公式：

新的 font-size = 设计稿的参照 font-size \* （新设备的宽度/设计稿宽度）

将它转换成 JS：

```js
// 设计稿的宽度
const PAGE_WIDTH = 750;
// 设计稿参考的根节点字体大小
const PAGE_FONT_SIZE = 100;
// 设置根节点字体大小
function setRootFontSize() {
	document.documentElement.style.fontSize =
		PAGE_FONT_SIZE * (document.documentElement.clientWidth / PAGE_WIDTH) +
		"px";
}
window.addEventListener("resize", setRootFontSize);
```

考虑到 Andorid 端字体渲染的问题以及页面大小变化的监听，最终代码如下：

```js
(function () {
	var timer = null;
	var PAGE_WIDTH = 750; // 设计稿的宽度
	var PAGE_FONT_SIZE = 100; // 设计稿1rem的大小

	function onResize() {
		var e =
			(PAGE_FONT_SIZE * document.documentElement.clientWidth) /
			PAGE_WIDTH;
		document.documentElement.style.fontSize = e + "px";
		// 二次计算缩放像素，解决移动端webkit字体缩放bug
		var realitySize = parseFloat(
			window.getComputedStyle(document.documentElement).fontSize
		);
		if (e !== realitySize) {
			e = (e * e) / realitySize;
			document.documentElement.style.fontSize = e + "px";
		}
	}
    // 防抖
	window.addEventListener("resize", function () {
		if (timer) clearTimeout(timer);
		timer = setTimeout(onResize, 100);
	});
	onResize();
})();
```
