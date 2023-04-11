import{$ as e,a0 as t,a1 as i,a4 as l}from"./framework-888972eb.js";const o={},r=l('<h1 id="limit和offset用法" tabindex="-1"><a class="header-anchor" href="#limit和offset用法" aria-hidden="true">#</a> limit和offset用法</h1><p>mysql里分页一般用limit来实现</p><ol><li>select* from article LIMIT 1,3</li></ol><p>2.select * from article LIMIT 3 OFFSET 1</p><p>上面两种写法都表示取2,3,4三条条数据</p><p>当limit后面跟两个参数的时候，第一个数表示要跳过的数量，后一位表示要取的数量,例如</p><p>select* from article LIMIT 1,3 就是跳过1条数据,从第2条数据开始取，取3条数据，也就是取2,3,4三条数据</p><p>当 limit后面跟一个参数的时候，该参数表示要取的数据的数量</p><p>例如 select* from article LIMIT 3 表示直接取前三条数据，类似sqlserver里的top语法。</p><p>当 limit和offset组合使用的时候，limit后面只能有一个参数，表示要取的的数量,offset表示要跳过的数量 。</p><p>例如select * from article LIMIT 3 OFFSET 1 表示跳过1条数据,从第2条数据开始取，取3条数据，也就是取2,3,4三条数据</p>',11),s=[r];function c(a,f){return t(),i("div",null,s)}const m=e(o,[["render",c],["__file","limit.html.vue"]]);export{m as default};