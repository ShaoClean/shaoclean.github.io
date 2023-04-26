import{$ as e,a0 as a,a1 as t,a4 as o}from"./framework-19a42cda.js";const c={},r=o('<h1 id="垃圾回收算法" tabindex="-1"><a class="header-anchor" href="#垃圾回收算法" aria-hidden="true">#</a> 垃圾回收算法</h1><ul><li><p>标记-清除算法：标记没有被引用的对象，在下一次循环中将被标记的对象回收。</p><p>优点：不会移动对象（改变对象的引用地址），比较保守，可以非常适合配合其他保守式算法。算法简单容易实现。</p><p>缺点：容易产生内存碎片，假设被标记回收的内存为 50M，那么此时有一个超过 50M 的大对象，这一块内存是放不下的。</p></li><li><p>复制算法：当指定的一块区域（Eden 区域）内存满的时候，对两块区域（Eden 区和 From 区域）进行扫描，回收两块区域中的的垃圾对象。并将存活的对象复制到另外一块区域（To 区），此时这一块区域（To 区）被标记为 From 区。超出这一块区域（To 区）的对象放入另外的区域（老年代）。</p><p>优点：不会产生内存碎片、内存使用率高。缺点：该算法本身会占用双倍的内存空间</p></li><li><p>标记-整理算法：先标记处需要回收的对象，然后将被回收的对象往一端移动，然后直接清理掉另一端的内存。 优点：没有内存碎片缺点：整理过程中内存地址移动，效率偏低</p></li></ul>',2),i=[r];function l(n,p){return a(),t("div",null,i)}const _=e(c,[["render",l],["__file","gc.html.vue"]]);export{_ as default};