const e=JSON.parse('{"key":"v-549a5334","path":"/study/basic/render-flow.html","title":"浏览器渲染流程","lang":"zh-CN","frontmatter":{"icon":"computer","date":"2023-03-01T00:00:00.000Z","category":["前端","计算机网络"],"tag":["学习笔记"],"description":"浏览器渲染流程 打开浏览器，在浏览器的地址栏中输入一个URL，按下回车键，得到一个页面。在我们看来一切都是如此自然，但这其中发生的一系列事情，是非常复杂的。 整个过程大致可以分为两块内容： 网络通信 浏览器渲染 网络通信 网络通信的作用是从服务器获取到资源，网络通信是一个极其复杂的过程，这个过程涉及到整个计算机网络，大致需要经过这些： 缓存 TCP连接 获取资源文件 浏览器渲染","head":[["meta",{"property":"og:url","content":"https://doc.shaoclean.top/study/basic/render-flow.html"}],["meta",{"property":"og:site_name","content":"clog"}],["meta",{"property":"og:title","content":"浏览器渲染流程"}],["meta",{"property":"og:description","content":"浏览器渲染流程 打开浏览器，在浏览器的地址栏中输入一个URL，按下回车键，得到一个页面。在我们看来一切都是如此自然，但这其中发生的一系列事情，是非常复杂的。 整个过程大致可以分为两块内容： 网络通信 浏览器渲染 网络通信 网络通信的作用是从服务器获取到资源，网络通信是一个极其复杂的过程，这个过程涉及到整个计算机网络，大致需要经过这些： 缓存 TCP连接 获取资源文件 浏览器渲染"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-02T00:52:38.000Z"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2023-03-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-02T00:52:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"浏览器渲染流程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-02T00:52:38.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"网络通信","slug":"网络通信","link":"#网络通信","children":[]},{"level":2,"title":"浏览器渲染","slug":"浏览器渲染","link":"#浏览器渲染","children":[{"level":3,"title":"1.解析HTML文件","slug":"_1-解析html文件","link":"#_1-解析html文件","children":[]},{"level":3,"title":"2.计算样式","slug":"_2-计算样式","link":"#_2-计算样式","children":[]},{"level":3,"title":"3.生成布局树","slug":"_3-生成布局树","link":"#_3-生成布局树","children":[]},{"level":3,"title":"4.分层","slug":"_4-分层","link":"#_4-分层","children":[]},{"level":3,"title":"5.绘制指令","slug":"_5-绘制指令","link":"#_5-绘制指令","children":[]},{"level":3,"title":"6.分块","slug":"_6-分块","link":"#_6-分块","children":[]},{"level":3,"title":"7.光栅化","slug":"_7-光栅化","link":"#_7-光栅化","children":[]},{"level":3,"title":"8.画","slug":"_8-画","link":"#_8-画","children":[]}]}],"git":{"createdTime":1677675942000,"updatedTime":1677718358000,"contributors":[{"name":"clean","email":"1518136109@qq.com","commits":2}]},"readingTime":{"minutes":5.98,"words":1794},"filePathRelative":"study/basic/render-flow.md","localizedDate":"2023年3月1日","excerpt":"<h1> 浏览器渲染流程</h1>\\n<p>打开浏览器，在浏览器的地址栏中输入一个URL，按下回车键，得到一个页面。在我们看来一切都是如此自然，但这其中发生的一系列事情，是非常复杂的。</p>\\n<p>整个过程大致可以分为两块内容：</p>\\n<ul>\\n<li>网络通信</li>\\n<li>浏览器渲染</li>\\n</ul>\\n<h2> 网络通信</h2>\\n<p>网络通信的作用是从服务器获取到资源，网络通信是一个极其复杂的过程，这个过程涉及到整个计算机网络，大致需要经过这些：</p>\\n<ol>\\n<li>缓存</li>\\n<li>TCP连接</li>\\n<li>获取资源文件</li>\\n</ol>\\n<h2> 浏览器渲染</h2>","autoDesc":true}');export{e as data};
