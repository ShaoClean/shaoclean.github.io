const n=JSON.parse('{"key":"v-13bcb9b5","path":"/study/frontend/ts/fx.html","title":"泛型","lang":"zh-CN","frontmatter":{"icon":"typescript","date":"2022-11-24T00:00:00.000Z","category":["前端","Ts"],"tag":["泛型","学习笔记"],"description":"泛型 声明一个泛型函数,使用的时候可以使用断言，也可以由ts自动推导T的类型 function test&lt;T&gt;(x:T):T{ return x } test(1) function getReqObj&lt;T&gt;(arr:any[]):T{ const obj = {}; for(let item of arr){ if(item.key){ // @ts-ignore obj[item.key] = item.value } } return obj as T } const params = getReqObj(data)","head":[["meta",{"property":"og:url","content":"https://doc.shaoclean.top/study/frontend/ts/fx.html"}],["meta",{"property":"og:site_name","content":"clog"}],["meta",{"property":"og:title","content":"泛型"}],["meta",{"property":"og:description","content":"泛型 声明一个泛型函数,使用的时候可以使用断言，也可以由ts自动推导T的类型 function test&lt;T&gt;(x:T):T{ return x } test(1) function getReqObj&lt;T&gt;(arr:any[]):T{ const obj = {}; for(let item of arr){ if(item.key){ // @ts-ignore obj[item.key] = item.value } } return obj as T } const params = getReqObj(data)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-30T13:02:03.000Z"}],["meta",{"property":"article:tag","content":"泛型"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2022-11-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T13:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"泛型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-24T00:00:00.000Z\\",\\"dateModified\\":\\"2022-11-30T13:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1669305272000,"updatedTime":1669813323000,"contributors":[{"name":"clean","email":"1518136109@qq.com","commits":3}]},"readingTime":{"minutes":0.3,"words":91},"filePathRelative":"study/frontend/ts/fx.md","localizedDate":"2022年11月24日","excerpt":"<h1> 泛型</h1>\\n<p>声明一个泛型函数,使用的时候可以使用断言，也可以由ts自动推导T的类型</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">test</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span>x<span class=\\"token operator\\">:</span><span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span><span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> x\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">test</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n\\n\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">getReqObj</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span><span class=\\"token constant\\">T</span><span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span>arr<span class=\\"token operator\\">:</span><span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">:</span><span class=\\"token constant\\">T</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">const</span> obj <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">for</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> item <span class=\\"token keyword\\">of</span> arr<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span><span class=\\"token punctuation\\">(</span>item<span class=\\"token punctuation\\">.</span>key<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token comment\\">// @ts-ignore</span>\\n      obj<span class=\\"token punctuation\\">[</span>item<span class=\\"token punctuation\\">.</span>key<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> item<span class=\\"token punctuation\\">.</span>value\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token keyword\\">return</span> obj <span class=\\"token keyword\\">as</span> <span class=\\"token constant\\">T</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token keyword\\">const</span> params <span class=\\"token operator\\">=</span> <span class=\\"token function\\">getReqObj</span><span class=\\"token punctuation\\">(</span>data<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
