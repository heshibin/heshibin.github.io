---
slug: /note/2023-02/binlog-three-mode
title: Mysql主从复制中binlog的多种模式
description: redo log、bin log、undo log、slow query log、relay log
keywords:
 - java
 - mysql
 - 主从复制
 - bin log
date: 2023-03-02
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-02
  author: machu
---

binlog 全称是 binary log 二进制日志，以二进制形式存在。  
查看binlog模式sql  
`show global variables like '%binlog%'`

#### statement
基于SQL语句模式  
记录每一条会修改数据的sql语句到binlog中，减少了binlog日志量，但使用函数如 now() 等操作复制过程不一致。

#### row
基于行模式  
不记录每一条SQL语句信息，仅记录哪些数据被修改了。批量操作数据会在 binlog 产生大量sql，主从复制延迟会增大，比如
`update product where id < 100` 批量修改100条数据，那么记录有100行日志数据。

#### mixed
混合模式  
根据sql语句灵活选择statement还是row。


import Quote from '@site/src/components/Quote';

> <Quote></Quote>
