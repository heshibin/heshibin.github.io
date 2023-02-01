---
title: lambda表达式
description: Lambda表达式(也叫做闭包)，是jdk8中的新语法，它允许我们将函数当成参数传递给某个方法或者将代码本身作为数据进行处理。
date: 2023-01-30
authors: heshibin
tags: [java]
---

Lambda表达式(也叫做闭包)，是jdk8中的新语法，它允许我们将函数当成参数传递给某个方法或者将代码本身作为数据进行处理。

#### 检查list集合中是否存在某个值
```java
// findAny 查找任何一个
// isPresent 存在则返回true
list.stream().filter(m->m.getName().equals("张三")).findAny().isPresent();

// anyMatch 只要有一条数据满足条件即返回true
list.stream().anyMatch(m -> m.getName().equals("张三"));
```
