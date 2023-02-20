---
title: 高性能的Compare and Swap
description: 简称CAS，属于乐观锁，性能较悲观锁有很大的提高。全称是Compare and Swap，即比较再交换，是实现并发应用到的一种技术。  
keywords:
 - java
 - 线程
 - CAS
 - 乐观锁
date: 2023-02-19
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-19
  author: machu
---



#### CAS

**简称CAS，属于乐观锁，性能较悲观锁有很大的提高。**   

全称是Compare and Swap，即比较再交换，是实现并发应用到的一种技术。  

底层通过**Unsafe类实现原子性**操作，包含三个操作数：**内存地址（V）、预期原值（A）和新值（B）**。  

如果内存位置的值与预期原值相匹配，那么处理器会自动将该位置值更新为新值。    

如果在第一轮循环中，a线程获取地址里面的值被b线程修改了，那么a线程需要自旋，到下次循环才有可能有机会执行。   

**AtomicXXX等原子类底层就是CAS实现，一定程度比synchronized好，因为后者是悲观锁。**



#### 相关文章

- [java中保证线程安全的几种方法](https://machu.top/docs/小记/2023-02/17java中保证线程安全的几种方法)
- [java中的锁](https://machu.top/docs/小记/2023-02/18java中的锁)
- [ReentrantLock和Synchronized的使用场景和实现机制](https://machu.top/docs/小记/2023-02/20ReentrantLock和Synchronized的使用场景和实现机制)



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
