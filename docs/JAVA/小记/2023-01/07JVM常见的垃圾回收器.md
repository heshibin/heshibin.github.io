---
sidebar_position: 7
title: JVM常见的垃圾回收器
date: 2023-01-07
tags: [java, 知识小记, JVM, 2023-01]
---



## Serial串行垃圾回收器

进行垃圾回收的时候，必须暂停其他所有的工作线程，出现STW，适合单核系统


参数:

`-XX:+UseSerialGC`

## Parallel并行垃圾回收器

通过多线程进行垃圾收集的，会暂停其他所有的工作线程SWT，适合多核系统
<br></br>
参数:

`-XX:+UseParNewGC、UseParallelGC`等

## CMS并发垃圾回收器

全称Concurrent Mark Sweep，使用标记-清除算法进行回收

参数:

`-XX:+UseConcMarkSweepGC`

## G1垃圾回收器

充分利用CPU，多核的优势来缩短SWT停顿时间，综合了前几种的优势，JDK9中称为了默认

参数：

`-XX:+UseG1GC`

## ZGC垃圾回收器

JDK11开始支持，全称Z Garbage Collector，低停顿、高并发，基于小堆块的垃圾回收器
