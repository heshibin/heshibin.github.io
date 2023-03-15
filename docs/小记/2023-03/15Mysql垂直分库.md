---
slug: /note/mysql-vertical-database-splitting
title: Mysql垂直分库
description: 垂直分库针对的时一个系统中的不同业务进行拆分，数据库的连接资源比较宝贵且单机处理能力也有限；没拆分之前全部都是落到单一的库上的，单库处理能力成为瓶颈，还有磁盘空间、内存、tps等限制；
keywords:
 - java
 - mysql
 - 分库分表
date: 2023-03-15
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-15
  author: machu
---

1. 垂直分库针对的时一个系统中的不同业务进行拆分，数据库的连接资源比较宝贵且单机处理能力也有限；
2. 没拆分之前全部都是落到单一的库上的，单库处理能力成为瓶颈，还有磁盘空间、内存、tps等限制；
3. 拆分之后，避免不同库竞争同一个物理机的CPU、内存、网络IO、磁盘，所以在高并发场景下，垂直分库一定程度上能够突破IO、连接数及单机硬件资源的瓶颈；
4. 垂直分库可以更好的解决业务层面的耦合，业务清晰，且方便管理和维护；
5. 一般从单体项目升级改造为微服务项目，就是垂直分库；




import Quote from '@site/src/components/Quote';

> <Quote></Quote>
