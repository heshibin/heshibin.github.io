---
sidebar_position: 3
title: JVM堆内存划分和堆内存垃圾回收流程你知道吗？
date: 2023-01-03
tags: [java, 知识小记]
---

## 堆内存垃圾回收流程

- 新建对象，放到Eden区，满后触发MinorGC。
- 存货的对象移动到Survivor的SO区，满后MinorGC。
- SO存活下来的对象移动到S1区，然后S0区空闲。
- S1满后触发MinorGC，再次移动到S0区，然后S1区空闲。
- 反复GC每次对象涨一岁，到达一定次数后（默认15次），进入老年代。
- 当老年代内存不足会触发FullGC，出现STW（Stop-The-World）。

## 堆空间

![image-20230103201733841](/img/JAVA/知识点/堆空间.png)
