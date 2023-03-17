---
slug: /note/mysql-horizontal-sub-table
title: 海量数据处理之Mysql水平分表
description: 把一个表的数据分到一个数据库的多张表中，每个表只有这个表的部分数据。 减少锁表时间
keywords:
 - java
 - mysql
 - 水平分表
date: 2023-03-16
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-16
  author: machu
---

1. 把一个表的数据分到一个数据库的多张表中，每个表只有这个表的部分数据。
2. 核心时把一个大表分割N个小表，每个表的结构都是一样的，数据不一样，全部表的数据合起来就是全部数据。
3. 针对数据巨大的单张表（比如订单表），按照某种规则（RANGE、HASH取模等），切分到多张表里面去。
4. 但是这些表还是在同一个库中，所以单数据库操作还是有IO瓶颈，主要是解决单表数据量过大的问题。
5. 减少锁表时间，没分表前，如果时DDL（create/alter/add等）语句，当需要添加一列的时候，mysql会缩表，期间所有的读写操作只能等待。



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
