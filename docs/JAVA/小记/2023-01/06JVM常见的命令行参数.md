---
sidebar_position: 6
title: JVM常见的命令行参数
date: 2023-01-06
tags: [java, 知识小记, JVM, 2023-01]
---

import Quote from '@site/src/components/Quote';

> <Quote></Quote>

`-XX:+` 开启对应的参数

## -XX+PrintGCDetails
打印GC回收信息。

## -XX:NewSize
新生代大小，不宜太小。

## -XX:NewRatio
新生代和老年代空间大小的比率

## -XX:MaxMetaspaceSize
元空间所分配内存的最大值，默认每限制

## -XX:UseConcMarkSweepGC
设置并发收集器
