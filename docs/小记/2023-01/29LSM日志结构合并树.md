---
title: LSM日志结构合并树
description: 不会为每个关键字创建索引记录，而是为数据记录未见的每个存储块设一个键-指针对，存储块意味着块内存储单元连续。
date: 2023-01-29
tags: [java,  知识小记, 2023-01]
---

import Quote from '@site/src/components/Quote';

> <Quote></Quote>

LSM全称Log-Structured Merge-Tree，日志结构合并树。  
不是树，而是利用磁盘顺序读写能力，实现一个多层读写的存储结构。  
核心是利用磁盘批量的顺序写要远比随机写性能高出很多。  

牺牲部分读取性能为代价，提升数据的写入能力。  
Hase、ClickHouse这些NoSQL存储都是采用的类LSM树结构。
