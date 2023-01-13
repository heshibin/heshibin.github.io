---
sidebar_position: 4
title: JVM参数格式分类你知道多少？
date: 2023-01-04
tags: [java, 知识小记, JVM, 2023-01]
---



## 标准参数（-）

所有JVM都实现这些参数的功能

`-verbose:gc`

打印GC简要信息

## 非标准参数（-X）

不保证所有JVM实现都满足

`-Xmx2048m` 等价 `-XX:MaxHeapSize`

JVM最大堆内存为2048M

## 非稳定参数（-XX） 

不稳定未来可能取消，但很有用

`-XX:+PrintGCDetails`

每次GC是打印详细信息

## -XX:+

开启对应参数

`-XX:-UseSerialGC`

启用串行GC

## -XX:-

关闭对应参数

`-XX:-DisableExplicitGC`

禁止调用`System.gc()`

## -XX:=

设定数字参数

`-XX:NewRatio=2`

新生代和老年代内存比例