const n=JSON.parse(`{"key":"v-91fda546","path":"/study/frontend/js/drag.html","title":"元素拖拽","lang":"zh-CN","frontmatter":{"icon":"javascript","date":"2022-11-14T00:00:00.000Z","category":["前端","JS"],"tag":["drag","学习笔记"],"description":"元素拖拽 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\"&gt; &lt;meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\"&gt; &lt;title&gt;Document&lt;/title&gt; &lt;style&gt; .list{ width: 100vw; } .list-item{ margin: 10px auto; width: 600px; height: 40px; line-height: 40px; border-radius: 2px; background-color: blueviolet; color: white; vertical-align: baseline; cursor: move; } .list-item.moving{ background: transparent; color: transparent; border: 1px dashed #ccc; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div class=\\"list\\"&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;1&lt;/div&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;2&lt;/div&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;3&lt;/div&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;4&lt;/div&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;5&lt;/div&gt; &lt;/div&gt; &lt;script&gt; const list = document.querySelector(\\".list\\"); let sourceNode list.ondragstart = (e)=&gt;{ //拖动的样式是点下鼠标的那一刻原始元素的样式，因此需要异步处理，等该元素已经开始拖动过后，等一会会在添加moving样式 setTimeout(() =&gt; { e.target.classList.add('moving'); },0) //记录当前拖拽元素 sourceNode = e.target e.dataTransfer.effectAllowed = 'move' } //元素拖动结束后，但是动画会显示被拖动的元素回到了原来的位置，因为很多元素默认情况下不允许别的元素拖到自身之上的 //因此需要阻止掉事件默认行为 list.ondragover = (e) =&gt; { e.preventDefault() } list.ondragenter = (e) =&gt; { e.preventDefault() if(e.target === list || e.target === sourceNode){ return } const children = Array.from(list.children); //当前元素的下标 const sourceIndex = children.indexOf(sourceNode); //目标元素的下标 const targetIndex = children.indexOf(e.target); //处理向下拖动和向上拖动的两种不同情况 if(sourceIndex &lt; targetIndex){ //向下拖动 list.insertBefore(sourceNode,e.target.nextElementSibling) }else{ //向上拖动 list.insertBefore(sourceNode,e.target) } } list.ondragend = (e) =&gt; { e.target.classList.remove('moving') } &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://doc.shaoclean.top/study/frontend/js/drag.html"}],["meta",{"property":"og:site_name","content":"clog"}],["meta",{"property":"og:title","content":"元素拖拽"}],["meta",{"property":"og:description","content":"元素拖拽 &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;meta http-equiv=\\"X-UA-Compatible\\" content=\\"IE=edge\\"&gt; &lt;meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\"&gt; &lt;title&gt;Document&lt;/title&gt; &lt;style&gt; .list{ width: 100vw; } .list-item{ margin: 10px auto; width: 600px; height: 40px; line-height: 40px; border-radius: 2px; background-color: blueviolet; color: white; vertical-align: baseline; cursor: move; } .list-item.moving{ background: transparent; color: transparent; border: 1px dashed #ccc; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div class=\\"list\\"&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;1&lt;/div&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;2&lt;/div&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;3&lt;/div&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;4&lt;/div&gt; &lt;div draggable=\\"true\\" class=\\"list-item\\"&gt;5&lt;/div&gt; &lt;/div&gt; &lt;script&gt; const list = document.querySelector(\\".list\\"); let sourceNode list.ondragstart = (e)=&gt;{ //拖动的样式是点下鼠标的那一刻原始元素的样式，因此需要异步处理，等该元素已经开始拖动过后，等一会会在添加moving样式 setTimeout(() =&gt; { e.target.classList.add('moving'); },0) //记录当前拖拽元素 sourceNode = e.target e.dataTransfer.effectAllowed = 'move' } //元素拖动结束后，但是动画会显示被拖动的元素回到了原来的位置，因为很多元素默认情况下不允许别的元素拖到自身之上的 //因此需要阻止掉事件默认行为 list.ondragover = (e) =&gt; { e.preventDefault() } list.ondragenter = (e) =&gt; { e.preventDefault() if(e.target === list || e.target === sourceNode){ return } const children = Array.from(list.children); //当前元素的下标 const sourceIndex = children.indexOf(sourceNode); //目标元素的下标 const targetIndex = children.indexOf(e.target); //处理向下拖动和向上拖动的两种不同情况 if(sourceIndex &lt; targetIndex){ //向下拖动 list.insertBefore(sourceNode,e.target.nextElementSibling) }else{ //向上拖动 list.insertBefore(sourceNode,e.target) } } list.ondragend = (e) =&gt; { e.target.classList.remove('moving') } &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-12-10T09:16:51.000Z"}],["meta",{"property":"article:tag","content":"drag"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2022-11-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-10T09:16:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"元素拖拽\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-14T00:00:00.000Z\\",\\"dateModified\\":\\"2022-12-10T09:16:51.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1668426631000,"updatedTime":1670663811000,"contributors":[{"name":"clean","email":"1518136109@qq.com","commits":3}]},"readingTime":{"minutes":1.2,"words":360},"filePathRelative":"study/frontend/js/drag.md","localizedDate":"2022年11月14日","excerpt":"<h1> 元素拖拽</h1>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">DOCTYPE</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>en<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">charset</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>UTF-8<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">http-equiv</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>X-UA-Compatible<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">content</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>IE=edge<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>viewport<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">content</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>width=device-width, initial-scale=1.0<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>Document<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n    <span class=\\"token selector\\">.list</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 100vw<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token selector\\">.list-item</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">margin</span><span class=\\"token punctuation\\">:</span> 10px auto<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 600px<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 40px<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">line-height</span><span class=\\"token punctuation\\">:</span> 40px<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">border-radius</span><span class=\\"token punctuation\\">:</span> 2px<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> blueviolet<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> white<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">vertical-align</span><span class=\\"token punctuation\\">:</span> baseline<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">cursor</span><span class=\\"token punctuation\\">:</span> move<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token selector\\">.list-item.moving</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">background</span><span class=\\"token punctuation\\">:</span> transparent<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">color</span><span class=\\"token punctuation\\">:</span> transparent<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token property\\">border</span><span class=\\"token punctuation\\">:</span> 1px dashed #ccc<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">draggable</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>true<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list-item<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>1<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">draggable</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>true<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list-item<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>2<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">draggable</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>true<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list-item<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>3<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">draggable</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>true<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list-item<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>4<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">draggable</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>true<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>list-item<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>5<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n    <span class=\\"token keyword\\">const</span> list <span class=\\"token operator\\">=</span> document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">querySelector</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\".list\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">let</span> sourceNode\\n    \\n    list<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">ondragstart</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">e</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">//拖动的样式是点下鼠标的那一刻原始元素的样式，因此需要异步处理，等该元素已经开始拖动过后，等一会会在添加moving样式 </span>\\n      <span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n        e<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">.</span>classList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'moving'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token comment\\">//记录当前拖拽元素</span>\\n      sourceNode <span class=\\"token operator\\">=</span> e<span class=\\"token punctuation\\">.</span>target\\n      e<span class=\\"token punctuation\\">.</span>dataTransfer<span class=\\"token punctuation\\">.</span>effectAllowed <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'move'</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token comment\\">//元素拖动结束后，但是动画会显示被拖动的元素回到了原来的位置，因为很多元素默认情况下不允许别的元素拖到自身之上的</span>\\n    <span class=\\"token comment\\">//因此需要阻止掉事件默认行为</span>\\n    list<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">ondragover</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">e</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">preventDefault</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    list<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">ondragenter</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">e</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">preventDefault</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>e<span class=\\"token punctuation\\">.</span>target <span class=\\"token operator\\">===</span> list <span class=\\"token operator\\">||</span> e<span class=\\"token punctuation\\">.</span>target <span class=\\"token operator\\">===</span> sourceNode<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span>\\n      <span class=\\"token punctuation\\">}</span>\\n      <span class=\\"token keyword\\">const</span> children <span class=\\"token operator\\">=</span> Array<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">from</span><span class=\\"token punctuation\\">(</span>list<span class=\\"token punctuation\\">.</span>children<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token comment\\">//当前元素的下标</span>\\n      <span class=\\"token keyword\\">const</span> sourceIndex <span class=\\"token operator\\">=</span> children<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span>sourceNode<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token comment\\">//目标元素的下标</span>\\n      <span class=\\"token keyword\\">const</span> targetIndex <span class=\\"token operator\\">=</span> children<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">indexOf</span><span class=\\"token punctuation\\">(</span>e<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n      <span class=\\"token comment\\">//处理向下拖动和向上拖动的两种不同情况</span>\\n      <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>sourceIndex <span class=\\"token operator\\">&lt;</span> targetIndex<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//向下拖动</span>\\n        list<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">insertBefore</span><span class=\\"token punctuation\\">(</span>sourceNode<span class=\\"token punctuation\\">,</span>e<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">.</span>nextElementSibling<span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">//向上拖动</span>\\n        list<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">insertBefore</span><span class=\\"token punctuation\\">(</span>sourceNode<span class=\\"token punctuation\\">,</span>e<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">)</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    list<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">ondragend</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">e</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n      e<span class=\\"token punctuation\\">.</span>target<span class=\\"token punctuation\\">.</span>classList<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">remove</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'moving'</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};