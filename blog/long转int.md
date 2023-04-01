---
slug: /long-to-int
title: java中long转int
description: Java中的long类型是64位的，而int类型是32位的，因此在将long转换为int时，需要注意可能会发生数据截断
date: 2023-04-01
authors: heshibin
keywords: ["long转int"]
tags: [java, long, int]
---

Java中的long类型是64位的，而int类型是32位的，因此在将long转换为int时，需要注意可能会发生数据截断。      
如果long类型的值超出了int类型的范围，转换后的值可能会失真或者出现错误。下面是两种可能的方法来将long类型转换为int类型：

1. 使用强制类型转换     
可以使用强制类型转换将long类型转换为int类型，但需要注意可能会出现数据截断的问题，如下所示：
```java
long l = 1234567890L;
int i = (int) l; // 数据截断，i的值为-53922298
```
2. 使用Math类的方法   
Java提供了Math类来处理数学运算，其中有一些方法可以将long类型转换为int类型，如下所示： 
```java
long l = 1234567890L;
int i = Math.toIntExact(l); // i的值为1234567890
```
其中，Math.toIntExact()方法会将long类型的值转换为int类型，如果long类型的值超出了int类型的范围，会抛出ArithmeticException异常。
