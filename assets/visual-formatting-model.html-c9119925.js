import{_ as e,a0 as l,a1 as i,a4 as a}from"./framework-16947f8e.js";const o={},p=a('<h1 id="视觉格式化模型" tabindex="-1"><a class="header-anchor" href="#视觉格式化模型" aria-hidden="true">#</a> 视觉格式化模型</h1><p>CSS 视觉格式化模型是用来处理和（在视觉媒体上）显示（HTML）文档时使用的计算规则。</p><p>视觉格式化模型会根据 <code>CSS 盒模型</code>将文档中的元素转换为一个个盒子</p><p>转换成盒子后，这些盒子首先会进行布局，然后生成出现在页面上。</p><p>盒子的布局会受到这些因素的影响：</p><ol><li><p>盒子的尺寸：精确指定、由约束条件指定或没有指定</p></li><li><p>盒子的类型：行内盒子（inline）、行内级盒子（inline-level）、原子行内级盒子（atomic inline-level）、块盒子（block）</p></li><li><p>定位方案：普通流定位、浮动定位、绝对定位</p></li><li><p>文档树中国呢的其他元素：即当前盒子的子元素或兄弟元素</p></li><li><p>视口尺寸与位置</p></li><li><p>所包含的图片的尺寸</p></li><li><p>其他的某些外部因素</p></li></ol><p>盒子布局完毕后，会进行盒子的生成。</p><blockquote><p>视觉格式化模型会根据盒子的<code>包含块</code>的边界来渲染盒子。盒子一般会创建一个包含其子元素的包含块，但是盒子并不由包含块所限制，当盒子的布局跑到包含块外面时称为溢出（overflow）</p></blockquote><h2 id="盒子的生成" tabindex="-1"><a class="header-anchor" href="#盒子的生成" aria-hidden="true">#</a> 盒子的生成</h2><p>生成的盒子有不同的类型（取决于盒子CSS的display属性），不同类型的盒子格式化的方式也有所不同。</p>',10),t=[p];function c(n,r){return l(),i("div",null,t)}const s=e(o,[["render",c],["__file","visual-formatting-model.html.vue"]]);export{s as default};