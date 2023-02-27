---
title: java线程池的拒绝策略
description: 当线程数=maxPoolSize，且任务队列已满时，线程池有多种策略处理新任务
keywords:
 - java
 - 线程池
 - 拒绝策略
date: 2023-02-25
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-25
  author: machu
---

当线程数=maxPoolSize，且任务队列已满时，线程池有多种策略处理新任务。

#### CallerRunsPolicy
交由调用方线程运行，如果添加到线程池失败，那么主线程会自己去执行该任务。

#### AbortPolicy
默认策略，如果线程池队列满了丢调这个任务，并且抛出RejectdExecutionException异常。

#### DiscardPolicy
线程池队列满了，会直接丢掉这个任务并且不会有任何异常。

#### DiscardOldestPolicy
丢弃队列中最老的任务，队列满了会将最早进入队列的任务删掉腾出空间，再尝试加入队列。

import Quote from '@site/src/components/Quote';

> <Quote></Quote>