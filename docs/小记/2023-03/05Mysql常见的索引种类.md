---
slug: /note/2023-02/mysql-index-type
title: Mysql常见的索引种类
description: 主键索引：是一种特殊的唯一索引，一个表只能有一个主键，不允许有空值。普通索引：最基本的索引，它没有任何限制，仅加速查询，值可以为空。
keywords:
 - java
 - mysql
date: 2023-03-05
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-05
  author: machu
---


#### 主键索引
是一种特殊的`唯一索引`，一个表只能有一个主键，不允许有空值。

#### 普通索引
最基本的索引，它没有任何限制，仅加速查询，值可以为空。

#### 唯一索引
列的值必须唯一，但允许有空值（`与主键不同`）。

#### 前缀索引
即当字段的长度超过索引限制，可以为字段的部分前缀创建索引。

#### 组合索引
多个数据列组成的索引，遵守最左匹配原则。

#### 全文索引
用来查找文本中的关键字，只能创建在VARCHAR、TEXT类型的字段上。

import Quote from '@site/src/components/Quote';

> <Quote></Quote>
