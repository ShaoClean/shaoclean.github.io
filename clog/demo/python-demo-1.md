---
icon: eye
date: 2023-07-28
article: true
category:
    - demo
tag:
    - python
---

# 爬取网页


但是只能获取到第一页的数据，即使改变了query参数page的值页只能获取到第一页的数据，不知道为什么

<!--more-->

```Python
import requests

import json

from bs4 import BeautifulSoup

from pyecharts.charts import Bar

import asyncio

def start(allPageNumber):
    page_info = []
    for pageNumber in range(allPageNumber):
    res = get_page_article_info(pageNumber + 1)
    page_info.append(res)
    print('result: ',json.dumps(page_info, indent=4, ensure_ascii=False))


# 获取指定页书的文章信息
def get_page_article_info(pageNumber):
    print('正在爬取第%d页的文章信息...' % pageNumber)
    url = 'https://hiclean.icu?page=%d' % pageNumber
    print(url)
    html = requests.get(url).text
    soup = BeautifulSoup(html, 'lxml')
    # 文章列表
    article_list = soup.select('.article-item')
    article_info = []

    for article_wrap in article_list:
        article = article_wrap.find('article')
        article_info.append({
        # 文章标题
        'title' : article.select('span[property="headline"]')[0].string,
        # 文章链接
        'href' : article.select('a')[0]['href'],
        # 文章作者
        'author' : article.select('span[property="author"]')[0]['content'],
        # 文章发布时间
        'date' : article.select('meta[property="datePublished"]')[0]['content'],
        # 花费时间
        'time' : article.select('meta[property="timeRequired"]')[0]['content'],
        # 文章分类
        'category' : article.select('meta[property="articleSection"]')[0]['content'] if article.select('meta[property="articleSection"]') else '',
        # 文章标签
        'tags' : article.select('meta[property="keywords"]')[0]['content'] if article.select('meta[property="keywords"]') else '',
        })

    print('第%d页的文章信息爬取完成！' % pageNumber, article_info)
    return article_info

if __name__ == '__main__':

    get_page_article_info(1)
```
