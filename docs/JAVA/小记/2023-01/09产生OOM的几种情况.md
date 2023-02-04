---
sidebar_position: 9
title: java程序运行产生OOM的几种情况
date: 2023-01-09
tags: [java, 知识小记, OOM, 2023-01]
---

import Quote from '@site/src/components/Quote';

> <Quote></Quote>

## 堆溢出
`java.lang.OutOfMemoryError: java heap space`最常见，通过虚拟机参数`-Xms、-Xmx`等修改

## 栈溢出
`java.lang.StackOverflowError`存在死循环或者深度递归，`-Xss`来设置栈大小

## 永久代溢出
`java.lang.OutOfMemoryError: PermGen space`大量class或者cglib等反射产生，`-XX:permSize(非堆区初始内存分配大小)`等修改
