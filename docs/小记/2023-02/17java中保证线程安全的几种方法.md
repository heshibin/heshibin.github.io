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



#### 相关文章

- [java中的锁](https://machu.top/docs/小记/2023-02/18java中的锁)
- [高性能的Compare and Swap](https://machu.top/docs/小记/2023-02/19高性能的Compare%20and%20Swap)
- [ReentrantLock和Synchronized的使用场景和实现机制](https://machu.top/docs/小记/2023-02/20ReentrantLock和Synchronized的使用场景和实现机制)
- [使用线程池的好处以及常用线程池](https://machu.top/docs/小记/2023-02/21使用线程池的好处)


import Quote from '@site/src/components/Quote';

> <Quote></Quote>
