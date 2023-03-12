---
slug: /note/mysql-sub-base-and-sub-table-problem-1
title: Mysql数据库分库分表后带来的问题（上）
description: 跨节点数据库join关联查询和多维度查询、分库操作带来的分布式事务问题、执行的SQL排序、翻页、函数计算问题
keywords:
 - java
 - mysql
 - 分库分表
date: 2023-03-12
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-12
  author: machu
---

#### 问题一
**跨节点数据库join关联查询和多维度查询**     
数据库切分前，多表关联查询，可以通过sql join进行实现，     
分库分表后，数据可能分布在不同的节点上，sql join带来的问题就比较麻烦     
不同维度查看数据，利用的partitionKey是不一样的  

#### 问题二
**分库操作带来的分布式事务问题**   
操作内容同时分布在不同库中，不可避免会带来跨库事务问题，即分布式事务。     

#### 问题三
**执行的SQL排序、翻页、函数计算问题**    
分库后，数据分布在不同的节点上，跨节点多库进行查询时，会出现limit分页，order by排序等问题，    
而且当排序字段非分片字段时，更加复杂了，要在不同的分片节点中将数据进行排序并返回，   
然后将不同分片返回的结果集进行汇总和再次排序（也会带来更多的CPU、IO资源损耗）   



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
