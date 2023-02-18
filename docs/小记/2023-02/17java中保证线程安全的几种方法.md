---
title: java中保证线程安全的几种方法
description: 加锁，比如synchronize、ReentrantLock或者分布式锁
keywords:
 - java
 - 线程安全
date: 2023-02-17
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-17
  author: machu
---

1. 加锁，比如synchronize、ReentrantLock或者分布式锁。
2. 使用volatile声明变量，轻量级同步，不能保证原子性。
3. 使用线程安全类（原子类AtomicXXX，并发容器Copy-OnWriteArrayList/ConcurrentHashMap）等。
4. ThreadLocal本地私有变量、信号量Semaphore等。
