import{$ as e,a0 as t,a1 as n,a2 as s,a3 as o}from"./framework-19a42cda.js";const c={},a=s("h1",{id:"如何理解-js-的异步",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#如何理解-js-的异步","aria-hidden":"true"},"#"),o(" 如何理解 JS 的异步")],-1),_=s("p",null,"JS 是一门单线程的语言，它在浏览器的渲染主线程中执行，而忙碌的渲染主线程要处理很多复杂的任务，比如说解析 html、css 还有执行 js 等。",-1),l=s("p",null,"我们知道，在执行一些复杂任务的过程中，会非常的消耗时间，例如在执行 js 的过程中，需要执行计时器、事件监听、回调函数等。",-1),d=s("p",null,"遇到这些耗时的任务时，这样就会造成渲染主线程的阻塞，无法执行其他的任务。容易造成页面无法及时更新，造成浏览器卡死，用户无法得到反馈。",-1),r=s("p",null,"JS 的异步就可以解决这样的问题，将耗时的任务交给其它的线程处理，等待其它线程处理完毕，将事先的回调函数包装成任务，将这些任务依次的放到消息队列的尾部，等待渲染主线程的执行。",-1),h=s("p",null,"在这种异步模式下，浏览器将用不阻塞，从而最大程度的保证单线程的流畅运行。",-1),i=[a,_,l,d,r,h];function u(p,f){return t(),n("div",null,i)}const j=e(c,[["render",u],["__file","js-async.html.vue"]]);export{j as default};