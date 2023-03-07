const n=JSON.parse('{"key":"v-026db568","path":"/study/frontend/ts/Key.html","title":"元素隐式具有 \\"any\\" 类型，因为类型为 \\"any\\" 的表达式不能用于索引类型 xxx","lang":"zh-CN","frontmatter":{"icon":"typescript","date":"2022-11-30T00:00:00.000Z","category":["前端","Ts"],"tag":["学习笔记"],"description":"元素隐式具有 \\"any\\" 类型，因为类型为 \\"any\\" 的表达式不能用于索引类型 xxx 在写 CRM2.0 项目的过程中，使用[]来动态的读取对象中的值时 ts 报了这个错误。代码如下： const onClickTab = ({ title }: any) =&gt; { let url = \\"\\"; const params = {}; const map = { 基本信息: () =&gt; getBasic(), 客户信息: () =&gt; getCustomer(), }; // 元素隐式具有 \\"any\\" 类型，因为类型为 \\"any\\" 的表达式不能用于索引类型 \\"{ 基本信息: () =&gt; void; 客户信息: () =&gt; void; }\\"。 if (map[title]) { } };","head":[["meta",{"property":"og:url","content":"https://doc.shaoclean.top/study/frontend/ts/Key.html"}],["meta",{"property":"og:site_name","content":"clog"}],["meta",{"property":"og:title","content":"元素隐式具有 \\"any\\" 类型，因为类型为 \\"any\\" 的表达式不能用于索引类型 xxx"}],["meta",{"property":"og:description","content":"元素隐式具有 \\"any\\" 类型，因为类型为 \\"any\\" 的表达式不能用于索引类型 xxx 在写 CRM2.0 项目的过程中，使用[]来动态的读取对象中的值时 ts 报了这个错误。代码如下： const onClickTab = ({ title }: any) =&gt; { let url = \\"\\"; const params = {}; const map = { 基本信息: () =&gt; getBasic(), 客户信息: () =&gt; getCustomer(), }; // 元素隐式具有 \\"any\\" 类型，因为类型为 \\"any\\" 的表达式不能用于索引类型 \\"{ 基本信息: () =&gt; void; 客户信息: () =&gt; void; }\\"。 if (map[title]) { } };"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-30T13:02:03.000Z"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2022-11-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T13:02:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"元素隐式具有 \\\\\\"any\\\\\\" 类型，因为类型为 \\\\\\"any\\\\\\" 的表达式不能用于索引类型 xxx\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-11-30T00:00:00.000Z\\",\\"dateModified\\":\\"2022-11-30T13:02:03.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1669813323000,"updatedTime":1669813323000,"contributors":[{"name":"clean","email":"1518136109@qq.com","commits":1}]},"readingTime":{"minutes":0.93,"words":278},"filePathRelative":"study/frontend/ts/Key.md","localizedDate":"2022年11月30日","excerpt":"<h1> 元素隐式具有 \\"any\\" 类型，因为类型为 \\"any\\" 的表达式不能用于索引类型 xxx</h1>\\n<p>在写 CRM2.0 项目的过程中，使用<code>[]</code>来动态的读取对象中的值时 ts 报了这个错误。代码如下：</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">const</span> <span class=\\"token function-variable function\\">onClickTab</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span> title <span class=\\"token punctuation\\">}</span><span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">any</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">let</span> url <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"\\"</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">const</span> params <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token keyword\\">const</span> map <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function-variable function\\">基本信息</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">getBasic</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function-variable function\\">客户信息</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token function\\">getCustomer</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token comment\\">// 元素隐式具有 \\"any\\" 类型，因为类型为 \\"any\\" 的表达式不能用于索引类型 \\"{ 基本信息: () =&gt; void; 客户信息: () =&gt; void; }\\"。</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>map<span class=\\"token punctuation\\">[</span>title<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
