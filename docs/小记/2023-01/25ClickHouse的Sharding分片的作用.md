---
title: ClickHouse的Sharding分片的作用
description: ClickHouse的Sharding分片的作用，允许多台机器/节点同时并行执行查询，实现了分布式并行计算
date: 2023-01-25
tags: [java, ClickHouse, 知识小记, 2023-01]
---



ClickHouse的分片时把数据库横向扩展（Scale Out）到多个物理节点上的一种有效的方式。



复用了数据库的分区概念，相当于在原有的分区下作为第二层分区。



ClickHouse会将数据分为多个分片，且分布到不同节点上，通过`Distributed`表引擎把数据拼接起来一同使用。



Sharding机制使得ClickHouse可以横向线性拓展，构建大规模分布式集群，但需要避免数据倾斜问题。



**总结：**



**数据分区：**允许查询在指定了分区键的条件下，尽可能的少读取数据。

**数据分片：**允许多台机器/节点同时并行执行查询，实现了分布式并行计算。



import Quote from '@site/src/components/Quote';

> <Quote></Quote>