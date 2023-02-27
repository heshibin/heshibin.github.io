---
title: 异步编程CompletableFuture的应用场景
description: JDK1.5有了Future贺Callable的实现，想要异步获取结果，通常会以轮询的方式去获取结果。
keywords:
 - java
 - 线程池
 - CompletableFuture
date: 2023-02-26
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-26
  author: machu
---

1. JDK1.5有了Future贺Callable的实现，想要异步获取结果，通常会以轮询的方式去获取结果。
2. JDK8里面引入的CompletableFuture，简化异步编程复杂性，函数式编程让代码更加简介。
3. CompletableFuture类实现了Future贺CompletionStage接口。
4. CompletableFuture老井台方式，执行异步任务API。

```java
// 无返回值，默认使用ForkjoinPool.commonPool()作为它的线程池执行异步代码
CompletableFuture<Void> runAsync(Runnable runnable)
// 无返回值，可以自定义线程池
CompletableFuture<Void> runAsync(Runnable runnable, Executor executor)
// 有返回值，默认使用ForkjoinPool.commonPool()作为它的线程池执行异步代码
CompletableFuture<Void> supplyAsync(Supplier<U> supplier)
// 有返回值，可以自定i有线程池
CompletableFuture<Void> supplyAsync(Supplier<U> supplier, Executor executor)
```
