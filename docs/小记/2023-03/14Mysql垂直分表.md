---
slug: /note/mysql-vertical-table-splitting
title: Mysql垂直分表
description: 也就是“大表拆小表”，基于列字段进行的。拆分原则一般是表中的字段较多，将不常用的或者数据较大，长度较长的拆分到扩展表，如text类型字段。
keywords:
 - java
 - mysql
 - 分库分表
date: 2023-03-14
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-14
  author: machu
---

1. 也就是“大表拆小表”，基于列字段进行的。
2. 拆分原则一般是表中的字段较多，将不常用的或者数据较大，长度较长的拆分到扩展表，如text类型字段。
3. 访问频次低、字段大的商品描述信息单独存放在一张表中。
4. 访问频次较高的商品基本信息单独放在一张表中。


#### 垂直拆分原则
1. 把不常用的字段单独放在一张表
2. 把text、blob等大字段拆分出来放在附表中；
3. 业务经常组合查询的列放在一张表中；




import Quote from '@site/src/components/Quote';

> <Quote></Quote>
