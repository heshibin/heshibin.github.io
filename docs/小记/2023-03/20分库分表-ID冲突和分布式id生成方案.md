---
slug: /note/mysql-id-conflict
title: 分库分表-ID冲突和分布式id生成方案
description: 单库下一般使用Mysql自增ID，但是分库分表后，会造成不同分片上的数据表主键会重复。
keywords:
 - java
 - mysql
 - 分库分表-ID冲突和分布式id生成方案
date: 2023-03-20
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-20
  author: machu
---

单库下一般使用Mysql自增ID，但是分库分表后，会造成不同分片上的数据表主键会重复。

#### UUID

性能非常高，没有网络消耗，但无序的字符串，不具备趋势自增特性，UUID太长，不易于存储。

#### Redis发号器

利用Redis的INCR和INCRBY来实现，性能比Mysql强劲，但需要占用网络资源，增加系统复杂度。

#### Snowflake雪花算法

twitter开源的分布式ID生成算法，代码实现简单、不占用宽带、数据迁移不受影响，生成的id  
中包含有时间戳，所以生成的id按照时间递增，依赖系统时钟（多台服务器时间一定要一样）




import Quote from '@site/src/components/Quote';

> <Quote></Quote>
