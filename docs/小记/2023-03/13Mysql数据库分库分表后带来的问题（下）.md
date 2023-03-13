---
slug: /note/mysql-sub-base-and-sub-table-problem-2
title: Mysql数据库分库分表后带来的问题（下）
description: 数据库全局主键重复问题、容量规划分库分表后二次扩容问题、分库分表技术选型问题
keywords:
 - java
 - mysql
 - 分库分表
date: 2023-03-13
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-13
  author: machu
---

#### 问题一
**数据库全局主键重复问题**     
常规表的id时使用自增id进行实现，分库分表后由于表中的数据同时存在不同数据库中，如果用自增id，则会出现冲突问题

#### 问题二
**容量规划分库分表后二次扩容问题**   
业务发展快，初次分库分表后，满足不了数据存储，导致需要多次扩容  

#### 问题三
**分库分表技术选型问题**    
市场分库分表中间件相对较多，框架各有各的优势和短板，应该如何选择



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
