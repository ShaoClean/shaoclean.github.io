import{_ as n,a0 as s,a1 as a,a4 as t}from"./framework-786d5328.js";const p={},e=t(`<h1 id="webgpu" tabindex="-1"><a class="header-anchor" href="#webgpu" aria-hidden="true">#</a> WebGPU</h1><p>记录一下 Web GPU 学习过程中的代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> vertex <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fragment <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">//打通和硬件之间的关系</span>

	<span class="token comment">// 请求GPU适配器</span>
	<span class="token keyword">const</span> adapter <span class="token operator">=</span> <span class="token keyword">await</span> navigator<span class="token punctuation">.</span>gpu<span class="token punctuation">.</span><span class="token function">requestAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 获取GPU设备对象 通过GPU设备对象可以控制gpu的渲染过程</span>
	<span class="token keyword">const</span> device <span class="token operator">=</span> <span class="token keyword">await</span> adapter<span class="token punctuation">.</span><span class="token function">requestDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;canvas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&quot;webgpu&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> format <span class="token operator">=</span> navigator<span class="token punctuation">.</span>gpu<span class="token punctuation">.</span><span class="token function">getPreferredCanvasFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	ctx<span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		device<span class="token punctuation">,</span>
		format<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 创建顶点缓冲区表示顶点数据</span>
	<span class="token keyword">const</span> vertexArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Float32Array</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
		<span class="token comment">// 三角形三个顶点坐标的x y z值</span>
		<span class="token number">0.0</span><span class="token punctuation">,</span>
		<span class="token number">0.0</span><span class="token punctuation">,</span>
		<span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">//顶点1坐标</span>
		<span class="token number">1.0</span><span class="token punctuation">,</span>
		<span class="token number">0.0</span><span class="token punctuation">,</span>
		<span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">//顶点2坐标</span>
		<span class="token number">0.0</span><span class="token punctuation">,</span>
		<span class="token number">1.0</span><span class="token punctuation">,</span>
		<span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token comment">//顶点3坐标</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> vertexBuffer <span class="token operator">=</span> device<span class="token punctuation">.</span><span class="token function">createBuffer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">size</span><span class="token operator">:</span> vertexArray<span class="token punctuation">.</span>byteLength<span class="token punctuation">,</span> <span class="token comment">// 缓冲区的字节长度</span>
		<span class="token literal-property property">usage</span><span class="token operator">:</span> GPUBufferUsage<span class="token punctuation">.</span><span class="token constant">VERTEX</span> <span class="token operator">|</span> GPUBufferUsage<span class="token punctuation">.</span><span class="token constant">COPY_DST</span><span class="token punctuation">,</span> <span class="token comment">// 缓冲区的用途   这里表示用于顶点数据</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 把指定数据写入到缓冲区（把vertexArray写入到vertexBuffer） 0表示偏移量</span>
	device<span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">writeBuffer</span><span class="token punctuation">(</span>vertexBuffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> vertexArray<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 创建渲染管线</span>
	<span class="token keyword">const</span> pipeLine <span class="token operator">=</span> device<span class="token punctuation">.</span><span class="token function">createRenderPipeline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">layout</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
		<span class="token comment">// 顶点相关配置</span>
		<span class="token literal-property property">vertex</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">module</span><span class="token operator">:</span> device<span class="token punctuation">.</span><span class="token function">createShaderModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> vertex <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token literal-property property">entryPoint</span><span class="token operator">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
			<span class="token comment">// 顶点所有的缓冲区模块设置</span>
			<span class="token literal-property property">buffers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token comment">// 其中一个顶点缓冲区设置</span>
				<span class="token punctuation">{</span>
					<span class="token comment">// 一个顶点数据占用的字节长度</span>
					<span class="token comment">// Float32Array中每一个元素是32位，也就是4个字节，一个坐标点用x y z来表示</span>
					<span class="token comment">// 所以一个顶点占用的字节长度就是3 * 4 12个字节</span>
					<span class="token literal-property property">arrayStride</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">,</span>
					<span class="token comment">// 顶点缓冲区属性</span>
					<span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token comment">// GPU显存上顶点缓冲区标记存储位置</span>
							<span class="token literal-property property">shaderLocation</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
							<span class="token comment">// 格式</span>
							<span class="token comment">// 表示一个顶点数据包含3个32位的浮点数</span>
							<span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;float32x3&quot;</span><span class="token punctuation">,</span>
							<span class="token comment">// arrayStride表示魅族订单数据间隔字节数</span>
							<span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">primitive</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// 绘制三角形、线条、点</span>
			<span class="token literal-property property">topology</span><span class="token operator">:</span> <span class="token string">&quot;triangle-list&quot;</span><span class="token punctuation">,</span> <span class="token comment">//绘制三角形</span>
			<span class="token literal-property property">topology</span><span class="token operator">:</span> <span class="token string">&quot;line-strip&quot;</span><span class="token punctuation">,</span> <span class="token comment">//多个点依次连成线</span>
			<span class="token literal-property property">topology</span><span class="token operator">:</span> <span class="token string">&quot;point-list&quot;</span><span class="token punctuation">,</span> <span class="token comment">//每个定带你坐标对位置渲染成一个小点</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">fragment</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token comment">// 片元着色器代码  会在片元着色器上执行的代码</span>
			<span class="token literal-property property">module</span><span class="token operator">:</span> device<span class="token punctuation">.</span><span class="token function">createShaderModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">code</span><span class="token operator">:</span> fragment <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token literal-property property">entryPoint</span><span class="token operator">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
				<span class="token punctuation">{</span>
					format<span class="token punctuation">,</span> <span class="token comment">//和web GPU上下文配置的颜色格式保持一致</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 命令编码器</span>
	<span class="token keyword">const</span> commandEncoder <span class="token operator">=</span> device<span class="token punctuation">.</span><span class="token function">createCommandEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> renderPass <span class="token operator">=</span> commandEncoder<span class="token punctuation">.</span><span class="token function">beginRenderPass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token comment">// 给渲染通道指定颜色缓冲区，配置指定的缓冲区</span>
		<span class="token literal-property property">colorAttachments</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token comment">// 指向用于Canvas画布的纹理视图对象（Canvas对应的颜色缓冲区）</span>
				<span class="token comment">// 该渲染通道renderPass输出的像素数据会存储到Canvas画布对应的颜色缓冲区</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","webgpu.html.vue"]]);export{r as default};
