---
title: ClickHouse的建表和引擎选择总结
description: 表引擎选择一般都是MergeTree系列引擎，没有最好，根据业务选择最合适的。
date: 2023-01-27
tags: [java, ClickHouse, 知识小记, 2023-01]
---



表引擎选择一般都是MergeTree系列引擎，没有最好，根据业务选择最合适的。



**MergeTree**

1. 去重合并树引擎ReplacingMergeTree，可以保证幂等性处理。
2. 聚合合并树引擎SummingMergeTree，可以进行预聚合，性能更高，重复作业会导致数据累计。

**主键选择**

1. 主键可以重复，也可以是多列的组合，未指明主键，则用order by字段作为主键。
2. 业务里面where条件常用的列，频率高的字段排前面。

**分区键选择**

1. 常规根据时间分区，分区字段建议是DateTime类型，不能分区粒度太细，比如秒。



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
