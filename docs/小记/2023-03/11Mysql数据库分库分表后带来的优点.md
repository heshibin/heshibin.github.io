---
slug: /note/mysql-sub-base-and-sub-table-merit
title: Mysql数据库分库分表后带来的优点
description: 解决数据库本身瓶颈，解决系统本身IO、CPU瓶颈，数据库分表可以解决单表海量数据的查询性能问题。数据库分库可以解决单台数据库的并发访问压力问题。  
keywords:
 - java
 - mysql
 - 分库分表
date: 2023-03-11
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-11
  author: machu
---

**解决数据库本身瓶颈**  
 连接数：连接数过多时，就会出现`too many connections`的错误。   
 默认的最大连接数为100，可以修改，而mysql服务允许的最大连接数为16384。

**解决系统本身IO、CPU瓶颈**    
磁盘读写IO瓶颈，热点数据太多，尽管使用了数据库本身缓存，但依旧有大量IO，导致sql执行速度慢。  
网络io瓶颈，请求的数据太多，数据传输大，网络带宽不够，链路响应时间变长。  
CPU瓶颈，尤其在基础数据量大单机复杂SQL计算，SQL语句执行占用CPU使用率高。  


**总结**      
数据库分表可以解决单表海量数据的查询性能问题。  
数据库分库可以解决单台数据库的并发访问压力问题。  




import Quote from '@site/src/components/Quote';

> <Quote></Quote>
