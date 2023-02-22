---
title: lambda表达式
description: Lambda表达式(也叫做闭包)，是jdk8中的新语法，它允许我们将函数当成参数传递给某个方法或者将代码本身作为数据进行处理。
keywords:
 - lambda表达式
 - filter
 - groupingBy
date: 2023-01-30
authors: heshibin
tags: [java, lambada]
last_update:
  date: 2023-02-22
  author: machu
---

Lambda表达式(也叫做闭包)，是jdk8中的新语法，它允许我们将函数当成参数传递给某个方法或者将代码本身作为数据进行处理。

#### 检查 List 集合中是否存在某个值
```java
// findAny 查找任何一个
// isPresent 存在则返回true
list.stream().filter(m->m.getName().equals("张三")).findAny().isPresent();

// anyMatch 只要有一条数据满足条件即返回true
list.stream().anyMatch(m -> m.getName().equals("张三"));
```

#### 根据条件过滤 List 集合
```java
List<Object> boys =objectList.stream().filter(s->s.getName().equals("张三")).collect(Collectors.toList());
```

#### 提取对象 List 中的某一字段生成新的 List
```java
List<Object> newList = objectList.stream().map(Object::getVar).collect(Collectors.toList());

// 提取map List 中的某一字段生成新的 List
List<String> newList = deviceList.stream().map(e -> e.get("device_id").toString()).collect(Collectors.toList());
```

#### 分组取最大值合并list
根据属性A分组,然后取分组里属性B最大的值, 最后合并成list
```java
Map<String, ScanConfigDynamic> collect = scanConfigDynamicList.stream().collect(
    Collectors.groupingBy(ScanConfigDynamic::getProjectUuid,
            Collectors.collectingAndThen(Collectors.reducing((c1, c2) -> c1.getId().intValue() > c2.getId().intValue() ? c1 : c2),
                    Optional::get)));
scanConfigDynamicList = new ArrayList<>(collect.values());
```
