---
slug: /note/2023-02/mysql-master-slave
title: Mysql主从复制架构图
description:  存在几个线程：主库一个线程，从库两个线程。主库生成一个log dump线程，和从库IO线程交互。
keywords:
 - java
 - mysql
 - 主从复制
date: 2023-03-06
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-06
  author: machu
---

![image](https://user-images.githubusercontent.com/49633468/223151012-021aef5e-98f4-4fa0-bf4f-09e8590fb42b.png)


1. 存在几个线程：主库一个线程，从库两个线程。
2. 主库生成一个log dump线程，和从库IO线程交互。
3. IO线程请求主库binlog，写入到中继日志relay log。
4. SQL线程读取中继日志，解析然后写入到从库。


import Quote from '@site/src/components/Quote';

> <Quote></Quote>
