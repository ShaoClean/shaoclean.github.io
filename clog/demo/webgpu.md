---
icon: eye
date: 2023-05-14
article: true
category:
    - demo
tag:
    - webgpu
---

# WebGPU

记录一下 Web GPU 学习过程中的代码

```js
const vertex = "";
const fragment = "";
async function init() {
	//打通和硬件之间的关系

	// 请求GPU适配器
	const adapter = await navigator.gpu.requestAdapter();
	// 获取GPU设备对象 通过GPU设备对象可以控制gpu的渲染过程
	const device = await adapter.requestDevice();
	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("webgpu");
	const format = navigator.gpu.getPreferredCanvasFormat();
	ctx.configure({
		device,
		format,
	});
	// 创建顶点缓冲区表示顶点数据
	const vertexArray = new Float32Array([
		// 三角形三个顶点坐标的x y z值
		0.0,
		0.0,
		0.0, //顶点1坐标
		1.0,
		0.0,
		0.0, //顶点2坐标
		0.0,
		1.0,
		0.0, //顶点3坐标
	]);
	const vertexBuffer = device.createBuffer({
		size: vertexArray.byteLength, // 缓冲区的字节长度
		usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST, // 缓冲区的用途   这里表示用于顶点数据
	});
	// 把指定数据写入到缓冲区（把vertexArray写入到vertexBuffer） 0表示偏移量
	device.queue.writeBuffer(vertexBuffer, 0, vertexArray);

	// 创建渲染管线
	const pipeLine = device.createRenderPipeline({
		layout: "auto",
		// 顶点相关配置
		vertex: {
			module: device.createShaderModule({ code: vertex }),
			entryPoint: "main",
			// 顶点所有的缓冲区模块设置
			buffers: [
				// 其中一个顶点缓冲区设置
				{
					// 一个顶点数据占用的字节长度
					// Float32Array中每一个元素是32位，也就是4个字节，一个坐标点用x y z来表示
					// 所以一个顶点占用的字节长度就是3 * 4 12个字节
					arrayStride: 3 * 4,
					// 顶点缓冲区属性
					attributes: [
						{
							// GPU显存上顶点缓冲区标记存储位置
							shaderLocation: 0,
							// 格式
							// 表示一个顶点数据包含3个32位的浮点数
							format: "float32x3",
							// arrayStride表示魅族订单数据间隔字节数
							offset: 0,
						},
					],
				},
			],
		},
		primitive: {
			// 绘制三角形、线条、点
			topology: "triangle-list", //绘制三角形
			topology: "line-strip", //多个点依次连成线
			topology: "point-list", //每个定带你坐标对位置渲染成一个小点
		},
		fragment: {
			// 片元着色器代码  会在片元着色器上执行的代码
			module: device.createShaderModule({ code: fragment }),
			entryPoint: "main",
			targets: [
				{
					format, //和web GPU上下文配置的颜色格式保持一致
				},
			],
		},
	});
	// 命令编码器
	const commandEncoder = device.createCommandEncoder();
	const renderPass = commandEncoder.beginRenderPass({
		// 给渲染通道指定颜色缓冲区，配置指定的缓冲区
		colorAttachments: [
			{
				// 指向用于Canvas画布的纹理视图对象（Canvas对应的颜色缓冲区）
				// 该渲染通道renderPass输出的像素数据会存储到Canvas画布对应的颜色缓冲区
			},
		],
	});
}

init();
```
