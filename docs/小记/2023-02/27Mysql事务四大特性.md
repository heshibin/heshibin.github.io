---
title: Mysql事务四大特性
description: 原子性Atomicity、一致性Consistency、隔离性Isolated、持久性Durability
keywords:
 - java
 - mysql
 - 事务特性
date: 2023-02-27
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-27
  author: machu
---

#### 原子性Atomicity
一个事务必须为不可分割的最小工作单元，整个操作要么全部成功，要么全部失败。
#### 一致性Consistency
数据库总能从一个一致性的状态转换到另一个一致性的状态。
#### 隔离性Isolated
一个事务相对于另一个事务是隔离的，一个事务所做的修改是在最终提交以前，对其他事务是不可见的。
#### 持久性Durability
一旦事务提交，则其所作的修改就会永久保存到数据库中，即使系统崩溃，修改的数据也不会丢失。

import Quote from '@site/src/components/Quote';

> <Quote></Quote>