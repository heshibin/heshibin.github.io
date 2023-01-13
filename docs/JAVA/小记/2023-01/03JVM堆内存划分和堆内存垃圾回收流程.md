---
sidebar_position: 3
title: JVM堆内存划分和堆内存垃圾回收流程你知道吗？
date: 2023-01-03
tags: [java, 知识小记, JVM, 2023-01]
---

## 堆内存垃圾回收流程

1. 新建对象，放到Eden区，满后触发Minor GC。
2. 存货的对象移动到Survivor的SO区，满后Minor GC。
3. SO存活下来的对象移动到S1区，然后S0区空闲。
4. S1满后触发Minor GC，再次移动到S0区，然后S1区空闲。
5. 反复GC每次对象涨一岁，到达一定次数后（默认15次），进入老年代。
6. 当老年代内存不足会触发Full GC，出现STW（Stop-The-World）。

## 堆空间

![堆空间](/img/JAVA/知识点/堆空间.png)

- Eden区与两个Survivor区的比例是8：1：1。
- jvm区域总体分两类: `heap区`和`非heap区`。
- heap区分为：Eden Spance（伊甸园）、Survivor Space（幸存者区）、Tenured Gen（老年代-养老区）。
- 非heap区分为：Code Cache（代码缓存区）、Perm Gen（永久代）、JVM Stack（java虚拟机栈）、Local Method Stack（本地方法栈）
