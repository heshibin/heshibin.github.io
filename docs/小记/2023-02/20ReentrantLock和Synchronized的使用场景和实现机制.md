---
title: ReentrantLock和Synchronized的使用场景和实现机制
description: ReentrantLock和Synchronized使用的场景是什么？实现机制有什么不同？
keywords:
 - java
 - 线程
 - 锁
 - ReentrantLock
 - Synchronized
date: 2023-02-20
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-20
  author: machu
---

#### Synchronized
1. 是**悲观锁**，会引起其他线程阻塞，java内置关键字。
2. 无法判断是否获取锁的状态，独占锁、锁可重入、不可中断、只能是非公平。
3. 加锁解锁的过程是隐式的，用户不用手动操作，优点是操作简单但显得不够灵活。
4. 一般并发场景使用足够，可以放在被递归执行的方法上，且不用担心线程最后能否正确释放锁。


#### ReentrantLock

1. 是个Lock接口的实现类，是**悲观锁**。
2. 可以判断是否获取到锁，独占锁、可重入、可中断、可公平/非公平。
3. 需要手动加锁和解锁，且解锁的操作尽量放在finally代码块中，保证线程正确释放锁。
4. 创建的时候通过传进参数true创建公平锁，如果传入的是false或没传参数则创建的是非公平锁。
5. 底层不同是AQS的state和FIFO队列来控制加锁。




import Quote from '@site/src/components/Quote';

> <Quote></Quote>
