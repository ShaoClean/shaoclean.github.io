const e=JSON.parse('{"key":"v-0c9c6e2e","path":"/study/frontend/js/requestAnimationFrame.html","title":"requestAnimationFrame 函数","lang":"zh-CN","frontmatter":{"icon":"javascript","date":"2023-02-14T00:00:00.000Z","category":["前端","JS"],"tag":["requestAnimationFrame","学习笔记"],"description":"requestAnimationFrame 函数 requestAnimationFrame(callback)中的回调函数只会调用一次，调用的时机是下一次浏览器重绘之前，调用完毕即销毁。 解决了定时器的时间不精确造成的动画卡顿问题， 假设一台60HZ刷新率的电脑，那么1000ms/60hz = 16.7ms，也就是每16.7ms刷新一次屏幕，这种速度我们肉眼是很难见到的。 如果想用定时器实现类似的效果，需要将它的时间设置为 16.7,但是这个 16.7 并不够精确。","head":[["meta",{"property":"og:url","content":"https://doc.shaoclean.top/study/frontend/js/requestAnimationFrame.html"}],["meta",{"property":"og:site_name","content":"clog"}],["meta",{"property":"og:title","content":"requestAnimationFrame 函数"}],["meta",{"property":"og:description","content":"requestAnimationFrame 函数 requestAnimationFrame(callback)中的回调函数只会调用一次，调用的时机是下一次浏览器重绘之前，调用完毕即销毁。 解决了定时器的时间不精确造成的动画卡顿问题， 假设一台60HZ刷新率的电脑，那么1000ms/60hz = 16.7ms，也就是每16.7ms刷新一次屏幕，这种速度我们肉眼是很难见到的。 如果想用定时器实现类似的效果，需要将它的时间设置为 16.7,但是这个 16.7 并不够精确。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-15T00:57:03.000Z"}],["meta",{"property":"article:tag","content":"requestAnimationFrame"}],["meta",{"property":"article:tag","content":"学习笔记"}],["meta",{"property":"article:published_time","content":"2023-02-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-15T00:57:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"requestAnimationFrame 函数\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-15T00:57:03.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1676422623000,"updatedTime":1676422623000,"contributors":[{"name":"clean","email":"1518136109@qq.com","commits":1}]},"readingTime":{"minutes":0.86,"words":258},"filePathRelative":"study/frontend/js/requestAnimationFrame.md","localizedDate":"2023年2月14日","excerpt":"<h1> requestAnimationFrame 函数</h1>\\n<p><code>requestAnimationFrame(callback)</code>中的回调函数只会调用一次，调用的时机是下一次浏览器重绘之前，调用完毕即销毁。</p>\\n<p>解决了定时器的时间不精确造成的动画卡顿问题，</p>\\n<p>假设一台<code>60HZ</code>刷新率的电脑，那么<code>1000ms/60hz = 16.7ms</code>，也就是每<code>16.7ms</code>刷新一次屏幕，这种速度我们肉眼是很难见到的。</p>\\n<p>如果想用定时器实现类似的效果，需要将它的时间设置为 16.7,但是这个 16.7 并不够精确。</p>","autoDesc":true}');export{e as data};
