import{_ as e,a0 as a,a1 as t,a4 as o}from"./framework-16947f8e.js";const r={},c=o('<h1 id="requestanimationframe-函数" tabindex="-1"><a class="header-anchor" href="#requestanimationframe-函数" aria-hidden="true">#</a> requestAnimationFrame 函数</h1><p><code>requestAnimationFrame(callback)</code>中的回调函数只会调用一次，调用的时机是下一次浏览器重绘之前，调用完毕即销毁。</p><p>解决了定时器的时间不精确造成的动画卡顿问题，</p><p>假设一台<code>60HZ</code>刷新率的电脑，那么<code>1000ms/60hz = 16.7ms</code>，也就是每<code>16.7ms</code>刷新一次屏幕，这种速度我们肉眼是很难见到的。</p><p>如果想用定时器实现类似的效果，需要将它的时间设置为 16.7,但是这个 16.7 并不够精确。</p><p>因为定时器是过了 16.7ms 后将回调函数推送到消息队列中，回调函数的执行还需要时间，所以时间存在不精确的问题。</p><p>这也就解释了会出现卡顿的现象。</p><p>而这个函数不是根据时间来定的，而是下一次屏幕刷新时浏览器重绘之前执行的，这就保证了精度的问题。</p>',8),n=[c];function s(i,m){return a(),t("div",null,n)}const p=e(r,[["render",s],["__file","requestAnimationFrame.html.vue"]]);export{p as default};