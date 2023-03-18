---
slug: /reserve-list
title: java实现list的翻转
description: Java如何实现List的反转，不保留原List进行翻转
date: 2023-03-18
authors: heshibin
tags: [java, list]
---

#### 不保留原List进行翻转

```java
List<Integer> list = new ArrayList<>();
list.add(1);
list.add(2);
list.add(3);
System.out.println("翻转前:" + list);
Collections.reverse(list);
System.out.println("反转后:" + list);
```
