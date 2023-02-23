---
title: ThreadPoolTaskExecutor线程池什么时候会创建新线程
description: 查看核心线程池`corePoolSize`是否已满，不满就创建一条线程执行任务，否则执行第二步。在刚创建线程池时线程不会立即启动，有任务提交时才开始创建线程并逐步线程数目达到corePoolSize
keywords:
 - java
 - 线程池
 - ThreadPoolTaskExecutor
date: 2023-02-23
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-23
  author: machu
---

- 查看核心线程池`corePoolSize`是否已满，不满就创建一条线程执行任务，否则执行第二步。   
  **坑：** 在刚创建线程池时线程不会立即启动，有任务提交时才开始创建线程并逐步线程数目达到`corePoolSize`。

- 查看阻塞队列是否已满，不满就将任务存储在阻塞队列中，否则执行第三步。  
  **坑：** 当核心线程数满，且阻塞队列也满时，才判断当前线程数是否小于最大线程数，决定是否创建新线程。  
  
- 查看线程池是否已满，即是否达到最大线程数，不满就创建一条线程执行任务，否则就按照策略处理无法执行的任务。    



#### 相关文章
- [java中保证线程安全的几种方法](https://machu.top/docs/小记/2023-02/17java中保证线程安全的几种方法)
- [java中的锁](https://machu.top/docs/小记/2023-02/18java中的锁)
- [高性能的Compare and Swap](https://machu.top/docs/小记/2023-02/19高性能的Compare%20and%20Swap)
- [ReentrantLock和Synchronized的使用场景和实现机制](https://machu.top/docs/小记/2023-02/20ReentrantLock和Synchronized的使用场景和实现机制)
- [使用线程池的好处以及常用线程池](https://machu.top/docs/小记/2023-02/21使用线程池的好处)
- [要通过ThreadPoolExecutor创建线程池的原因](https://machu.top/docs/小记/2023-02/22要通过ThreadPoolExecutor创建线程池的原因)

import Quote from '@site/src/components/Quote';

> <Quote></Quote>

