import{$ as n,a0 as o,a1 as s,a2 as e,a3 as t,a5 as i,a6 as r,a4 as c,C as d}from"./framework-888972eb.js";const l={},h=e("h1",{id:"事件循环机制",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#事件循环机制","aria-hidden":"true"},"#"),t(" 事件循环机制")],-1),p=e("p",null,"在了解事件循环机制之前，需要了解：",-1),u=e("li",null,[e("p",null,"同步任务"),e("p",null,"在主线程上排队的任务，前一个任务执行完毕，才能继续执行下一个任务")],-1),_=e("p",null,"异步任务",-1),m=e("li",null,[e("p",null,"回调函数")],-1),f=e("li",null,[e("p",null,"js 在浏览器中的执行机制")],-1),x=c('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>事件循环机制是 html 提出的概念，是为了协调事件，用户交互，脚本，渲染，网络等，从整体上告诉了我们所写 JS 代码的执行顺序。</p><p>JS 的一大特点就是单线程，并没有专门的异步线程。但它也支持异步操作（暂时理解为又开了一个新的线程），这个异步操作是浏览器提供的，他会放到浏览器的循环队列里面，等待主线程栈发出命令来执行这个队列里面的事件。</p><p>在 JS 代码执行的过程中，通过函数的调用栈来决解函数的执行顺序，当然也存在另外一些特殊的状况，通过任务队列（task queue）来解决另外一些代码的执行。任务队列可以分为<code>宏任务(macro-task)</code>和<code>微任务(micro-task)</code></p><h2 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务" aria-hidden="true">#</a> 异步任务</h2><p>在上面提到了，异步任务是不会立马进入主线程的任务而是进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，任务才会进入主线程执行。异步任务又可以分为：宏任务、微任务</p><h3 id="宏任务" tabindex="-1"><a class="header-anchor" href="#宏任务" aria-hidden="true">#</a> 宏任务</h3><p>宏任务就是所谓的主线程？</p><p>宏任务包含：script（整体代码）、setTimeout、setInterval、setImmediate、I/O、UI rendering</p><h3 id="微任务" tabindex="-1"><a class="header-anchor" href="#微任务" aria-hidden="true">#</a> 微任务</h3><p>微任务包含：process.nextTick、Promise、Object.observe</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Promise 和 setTimeout 等还是同步的代码，称为任务源。而进入任务队列的是他们指定的具体所要执行的任务。Promise 具体需要执行的任务例如<code>then</code>函数是微任务，而 setTimeout 中携带的任务是宏任务。无论是微任务还是宏任务的执行，都需要借助<code>函数调用栈</code>（栈内存）来完成。</p><p>宏任务与微任务的执行顺序：先执行微任务，再执行宏任务</p></div>',12);function v(k,b){const a=d("RouterLink");return o(),s("div",null,[h,p,e("ul",null,[u,e("li",null,[_,e("p",null,[t("不会立马进入主线程，而是先进入任务队列的任务，只有任务队列通知主线程，某个异步任务可以执行了，任务才会进入主线程去执行。具体见"),i(a,{to:"/study/frontend/js/js-async.html"},{default:r(()=>[t("如何理解 JS 的异步")]),_:1})])]),m,f]),x])}const T=n(l,[["render",v],["__file","event-loop.html.vue"]]);export{T as default};
