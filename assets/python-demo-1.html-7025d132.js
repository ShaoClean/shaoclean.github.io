import{_ as i,a0 as n,a1 as l,a5 as s,a2 as e,a3 as a,a4 as r}from"./framework-16947f8e.js";const t={},d=e("h1",{id:"爬取网页",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#爬取网页","aria-hidden":"true"},"#"),a(" 爬取网页")],-1),c=e("p",null,"但是只能获取到第一页的数据，即使改变了query参数page的值页只能获取到第一页的数据，不知道为什么",-1),v=r(`<div class="language-Python line-numbers-mode" data-ext="Python"><pre class="language-Python"><code>import requests

import json

from bs4 import BeautifulSoup

from pyecharts.charts import Bar

import asyncio

def start(allPageNumber):
    page_info = []
    for pageNumber in range(allPageNumber):
    res = get_page_article_info(pageNumber + 1)
    page_info.append(res)
    print(&#39;result: &#39;,json.dumps(page_info, indent=4, ensure_ascii=False))


# 获取指定页书的文章信息
def get_page_article_info(pageNumber):
    print(&#39;正在爬取第%d页的文章信息...&#39; % pageNumber)
    url = &#39;https://hiclean.icu?page=%d&#39; % pageNumber
    print(url)
    html = requests.get(url).text
    soup = BeautifulSoup(html, &#39;lxml&#39;)
    # 文章列表
    article_list = soup.select(&#39;.article-item&#39;)
    article_info = []

    for article_wrap in article_list:
        article = article_wrap.find(&#39;article&#39;)
        article_info.append({
        # 文章标题
        &#39;title&#39; : article.select(&#39;span[property=&quot;headline&quot;]&#39;)[0].string,
        # 文章链接
        &#39;href&#39; : article.select(&#39;a&#39;)[0][&#39;href&#39;],
        # 文章作者
        &#39;author&#39; : article.select(&#39;span[property=&quot;author&quot;]&#39;)[0][&#39;content&#39;],
        # 文章发布时间
        &#39;date&#39; : article.select(&#39;meta[property=&quot;datePublished&quot;]&#39;)[0][&#39;content&#39;],
        # 花费时间
        &#39;time&#39; : article.select(&#39;meta[property=&quot;timeRequired&quot;]&#39;)[0][&#39;content&#39;],
        # 文章分类
        &#39;category&#39; : article.select(&#39;meta[property=&quot;articleSection&quot;]&#39;)[0][&#39;content&#39;] if article.select(&#39;meta[property=&quot;articleSection&quot;]&#39;) else &#39;&#39;,
        # 文章标签
        &#39;tags&#39; : article.select(&#39;meta[property=&quot;keywords&quot;]&#39;)[0][&#39;content&#39;] if article.select(&#39;meta[property=&quot;keywords&quot;]&#39;) else &#39;&#39;,
        })

    print(&#39;第%d页的文章信息爬取完成！&#39; % pageNumber, article_info)
    return article_info

if __name__ == &#39;__main__&#39;:

    get_page_article_info(1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function u(m,o){return n(),l("div",null,[d,c,s("more"),v])}const p=i(t,[["render",u],["__file","python-demo-1.html.vue"]]);export{p as default};
