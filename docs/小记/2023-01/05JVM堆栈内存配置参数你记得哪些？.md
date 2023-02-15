---
sidebar_position: 5
title: JVM堆栈内存配置参数你记得哪些？
date: 2023-01-05
tags: [java, 知识小记, JVM, 2023-01]
keywords:
 - JVM堆栈内存配置参数
 - -Xms
 - -Xmx
 - -Xmn
 - -Xss
last_update:
  date: 2023-01-05
  author: machu
---

import Quote from '@site/src/components/Quote';

> <Quote></Quote>

## -Xms

初始堆大小，推荐和最大堆一样

## -Xmx

最大堆大小，推荐和初始堆一样

## -Xmn

年轻代大小，官方推荐为整个堆的3/8

## -Xss

每个线程的堆栈大小