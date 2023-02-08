---
title: ClickHouse的分区的作用
description: ClickHouse的分区的作用
date: 2023-01-24
tags: [java, ClickHouse, 知识小记, 2023-01]
---


import Quote from '@site/src/components/Quote';

> <Quote></Quote>


分区是表的分区，把一张表的数据分成N多个区块。



分区后的表还是一张表，数据处理还是由自己来完成。



PARTITION BY，指的是一个表按照某一列数据（比如日期）进行分区，不同分区的数据会写入不同的文件中。



建表时加入partition概念，按照对应的分区字段，允许查询在指定了分区键的条件下，尽少读取数据。



**注意**



不是所有的表引擎都可以分区，MergeTree系列的表引擎才支持，Log系列引擎不支持。