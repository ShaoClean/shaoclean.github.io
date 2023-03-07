const e=JSON.parse('{"key":"v-4bc020ca","path":"/study/frontend/vue/function-component.html","title":"Vue3函数式组件（不使用模板）","lang":"zh-CN","frontmatter":{"icon":"vue","date":"2023-01-19T00:00:00.000Z","star":19,"category":["前端","Vue"],"tag":["函数式组件","Vue3","学习笔记"],"description":"Vue3函数式组件（不使用模板） 为什么需要用到函数式组件？其实绝大部分场景是用不到的，用vue模板的形式足够使用了。 由于我长期使用vue模板的形式来创建组件，所以每次使用组件的时候很容易形成一个习惯，自然而然的以为使用组件的流程一定是： 1.使用.vue文件定义一个组件 2.在其它.vue文件的template模板中使用该组件 但是在某一些特殊的场景，例如在封装的ajax请求的过程中，请求失败时需要弹出一个弹窗，此时是没有template模板给我们使用这个组件的。 此时如何实现组件的渲染就成了很大的问题。","head":[["meta",{"property":"og:url","content":"https://doc.shaoclean.top/study/frontend/vue/function-component.html"}],["meta",{"property":"og:site_name","content":"clog"}],["meta",{"property":"og:title","content":"Vue3函数式组件（不使用模板）"}],["meta",{"property":"og:description","content":"Vue3函数式组件（不使用模板） 为什么需要用到函数式组件？其实绝大部分场景是用不到的，用vue模板的形式足够使用了。 由于我长期使用vue模板的形式来创建组件，所以每次使用组件的时候很容易形成一个习惯，自然而然的以为使用组件的流程一定是： 1.使用.vue文件定义一个组件 2.在其它.vue文件的template模板中使用该组件 但是在某一些特殊的场景，例如在封装的ajax请求的过程中，请求失败时需要弹出一个弹窗，此时是没有template模板给我们使用这个组件的。 此时如何实现组件的渲染就成了很大的问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-01T09:01:21.000Z"}],["meta",{"property":"article:tag","content":"函数式组件"}],["meta",{"property":"article:tag","content":"Vue3"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2023-01-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-01T09:01:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue3函数式组件（不使用模板）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-01T09:01:21.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.核心思路","slug":"_1-核心思路","link":"#_1-核心思路","children":[]},{"level":2,"title":"2.代码实现","slug":"_2-代码实现","link":"#_2-代码实现","children":[{"level":3,"title":"Component类型","slug":"component类型","link":"#component类型","children":[]},{"level":3,"title":"Function类型","slug":"function类型","link":"#function类型","children":[]}]}],"git":{"createdTime":1674143456000,"updatedTime":1675242081000,"contributors":[{"name":"clean","email":"1518136109@qq.com","commits":4}]},"readingTime":{"minutes":3.27,"words":982},"filePathRelative":"study/frontend/vue/function-component.md","localizedDate":"2023年1月19日","excerpt":"<h1> Vue3函数式组件（不使用模板）</h1>\\n<p>为什么需要用到函数式组件？其实绝大部分场景是用不到的，用vue模板的形式足够使用了。</p>\\n<p>由于我长期使用vue模板的形式来创建组件，所以每次使用组件的时候很容易形成一个习惯，自然而然的以为使用组件的流程一定是：</p>\\n<ul>\\n<li>1.使用<code>.vue</code>文件定义一个组件</li>\\n<li>2.在其它<code>.vue</code>文件的<code>template</code>模板中使用该组件</li>\\n</ul>\\n<p>但是在某一些特殊的场景，例如在封装的<code>ajax</code>请求的过程中，请求失败时需要弹出一个弹窗，此时是没有<code>template</code>模板给我们使用这个组件的。\\n此时如何实现组件的渲染就成了很大的问题。</p>","autoDesc":true}');export{e as data};
