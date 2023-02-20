---
title: ClickHouse的副本的作用
description: ClickHouse的副本的作用，为了数据备份与安全，保障数据的高可用性
date: 2023-01-26
tags: [java, ClickHouse, 知识小记, 2023-01]
---



两个相同数据的表，作用是**为了数据备份与安全，保障数据的高可用性**，即使一台ClickHouse节点宕机，也可以从其他服务器获得相同的数据，类似Mysql的主从架构，主节点宕机，从节点也能提供服务。



import Quote from '@site/src/components/Quote';

> <Quote></Quote>