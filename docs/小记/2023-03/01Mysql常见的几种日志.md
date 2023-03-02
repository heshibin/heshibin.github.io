---
slug: /note/2023-02/mysql-log
title: Mysql常见的几种日志
description: redo log、bin log、undo log、slow query log、relay log
keywords:
 - java
 - mysql
 - redo log
 - bin log
 - undo log
 - slow query log
 - relay log
date: 2023-03-01
tags: [java,  知识小记, 2023-03]
last_update:
  date: 2023-03-01
  author: machu
---



#### redo log（重做日志）

记录新增、更新、插入操作语句，确保事务的持久性，防止在发生故障，脏页未写入磁盘。重启数据库会进行redo log执行重做，达到事务一致性。

#### bin log（二进制日志）

以二进制形式存在，用于主从复制，实现主从同步，分三种模式row、statement、mixed。

#### undo logo（回滚日志）

保证数据的原子性，记录事务发生之前的数据的一个版本，用于回滚，innodb事务的可重复度和读取已提交隔离级别就是通过mvcc+undo实现。

#### slow query log（慢查询日志）

记录执行时间过过长的sql，时间阈值可以配置，只记录执行成功。

#### relay log（中继日志）

用于数据库主从同步，将主库发送来的binlog先保存在本地，然后从库进行回访。



import Quote from '@site/src/components/Quote';

> <Quote></Quote>

