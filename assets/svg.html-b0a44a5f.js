import{_ as a,a0 as s,a1 as e,a2 as c}from"./framework-a6f32df7.js";const n={},i=c('<h1 id="svg" tabindex="-1"><a class="header-anchor" href="#svg" aria-hidden="true">#</a> SVG</h1><p>之前一直以为 svg 只是图片的一种格式，没想到它是一种和 Canvas 差不多的东西，也可以自由的绘制。</p><p>这里主要说一下这两个的区别，并没有进行太深入的了解。</p><ul><li><p>svg 图片放大不会失真，是矢量图；canvas 会失真</p></li><li><p>svg 支持事件处理；canvas 不支持事件处理</p><p>2023-03-09更新： 可以通过鼠标点击的坐标位置来判断点到了canvas中的哪一个位置，再执行相关的绘制指令，从而解决不能处理事件的问题</p></li><li><p>svg 比较适合大型渲染区域；canvas 适合密集型的游戏，因为其中的许多对象会被频繁的重绘。复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）</p></li><li><p>svg 默认不能右键保存图片；canvas 默认可以保存为<code>.jpg</code>和<code>.png</code>格式类型的图片</p></li><li><p>svg 的文字渲染能力比 canvas 强</p></li></ul>',4),l=[i];function p(t,o){return s(),e("div",null,l)}const r=a(n,[["render",p],["__file","svg.html.vue"]]);export{r as default};