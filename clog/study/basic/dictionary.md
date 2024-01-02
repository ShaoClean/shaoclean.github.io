---
icon: computer
date: 2023-05-04
category:
    - 数据结构
tag:
    - 字典
    - 散列表
---

# 字典和散列表

五一的时候看了一下字典和散列表，有点难区分这两者的实现。因为在js里面，他都是用对象来实现的。

字典呢是用字符串最为它的键，而散列表呢是将这个键通过一个hash函数，转换为hash值，将这个hash值作为索引来存储。

散列表的感觉就像是在一个数组中，值不是按照索引顺序来存储的，而是按照经过一定规则转换后的hash值来存储的，有可能`person1`对应的hash值是100，`person2`对应的hash值是120，就是这种分散的存储，这一种感觉就是散列表。

以上的理解有点浅薄，待日后深入理解一下。
