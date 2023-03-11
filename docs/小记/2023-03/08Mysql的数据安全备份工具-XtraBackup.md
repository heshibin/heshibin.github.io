---
slug: /note/mysql-xtrabackup
title: Mysql的数据安全备份工具-XtraBackup
description:  实际生产环境为了数据库安全，需要对数据库做定期全量备份，短期做增量备份。Percona公司开发的用于MySQL数据库物理热备的工具Xtrabackup支持MySQL、Percona server和MariaDB，开源免费，是实现增量备份而出现的一款主流工具。
keywords:
 - java
 - mysql
 - XtraBackup
date: 2023-03-08
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-08
  author: machu
---

#### 背景

实际生产环境为了数据库安全，需要对数据库做定期全量备份，短期做增量备份。

#### 解决方案

Percona公司开发的用于MySQL数据库物理热备的工具Xtrabackup支持MySQL、Percona server和MariaDB，开源免费，是实现增量备份而出现的一款主流工具。

#### 特点
备份速度块、在不增加服务器负载的情况下备份MySQL，可以实现自动备份且传输、压缩算法省空间流量。



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
