---
slug: /note/mysql-horizontal-sub-databases
title: 海量数据处理之Mysql水平分库
description: 把同个表的数据按照一定规则分到不同的数据库中，数据库在不同的服务器上。
keywords:
 - java
 - mysql
 - 水平分表
date: 2023-03-17
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-17
  author: machu
---

1. 把同个表的数据按照一定规则分到不同的数据库中，数据库在不同的服务器上。
2. 水平分库是把不同表拆到不同数据库中，它时对数据行的拆分，不影响表结构。
3. 每个库的结构都一样，但每个库的数据都不一样，没有交集，所有库的并集就是全量数据。
4. 水平分库的粒度，比水平分表更大。




import Quote from '@site/src/components/Quote';

> <Quote></Quote>
