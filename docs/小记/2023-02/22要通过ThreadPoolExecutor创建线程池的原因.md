---
title: 要通过ThreadPoolExecutor创建线程池的原因
description: `Executors`创建的线程池底层也是调用`ThreadPoolExecutor`，只不过使用不同的参数、队列、拒绝策略等。如果使用不当，会造成资源耗尽问题。
keywords:
 - java
 - 线程池
 - ThreadPoolExecutor
 - 阿里编码规范
date: 2023-02-22
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-22
  author: machu
---

`Executors`创建的线程池底层也是调用`ThreadPoolExecutor`，只不过使用不同的参数、队列、拒绝策略等。  
如果使用不当，会造成资源耗尽问题。  
直接使用`ThreadPoolExecutor`让使用者更清楚线程池使用规则，避免风险。  

#### 常见问题
1. **newFixedThreadPool和newSingleThreadExecutor**：  
    队列使用LinkedBlockingQueue，队列长度为Integer.MAX_VALUE，可能造成堆积，导致OOM。

2. **newScheduledThreadPool和newCachedThreadPool**：
    线程池里面允许最大的线程数是Integer.MAX_VALUE，可能会创建过多线程，导致OOM。
    

#### 相关文章
- [java中保证线程安全的几种方法](https://machu.top/docs/小记/2023-02/17java中保证线程安全的几种方法)
- [java中的锁](https://machu.top/docs/小记/2023-02/18java中的锁)
- [高性能的Compare and Swap](https://machu.top/docs/小记/2023-02/19高性能的Compare%20and%20Swap)
- [ReentrantLock和Synchronized的使用场景和实现机制](https://machu.top/docs/小记/2023-02/20ReentrantLock和Synchronized的使用场景和实现机制)
- [使用线程池的好处以及常用线程池](https://machu.top/docs/小记/2023-02/21使用线程池的好处)
