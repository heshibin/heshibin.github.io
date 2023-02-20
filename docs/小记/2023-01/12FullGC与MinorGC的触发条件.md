---
title: FullGC与MinorGC的触发条件
date: 2023-01-12
sidebar_position: 12
authors: heshibin
tags: [java, GC]
---



#### Minor GC触发条件
当Eden区满时，触发Minor GC。

#### Full GC触发条件
1. 调用`System.gc()`时建议JVM进行Full GC，只是建议而非一定，通过`-XX:+DisabledExplicitGC`来禁止调用`System.gc()`。
2. 老年代空间不足。
3. 方法区空间不足。
4. Minor GC后进入老年代的大小大于老年代的可用乐存。

#### 相关文章
- [JVM堆内存划分和堆内存垃圾回收流程你知道吗？](03JVM堆内存划分和堆内存垃圾回收流程.md)
- [JVM参数格式分类你知道多少？](04JVM参数格式分类你知道多少.md)



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
