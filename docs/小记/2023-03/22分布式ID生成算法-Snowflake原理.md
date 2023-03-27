---
slug: /note/snowflake
title: 分布式ID生成算法-Snowflake原理
description: 分布式ID生成算法-Snowflake原理雪花算法生成的数字，long类，所以就是8个byte，64bit。  表示的值：-9223372036854775808（-2的63次方）~ 9223372036854775807（2的63次方-1）    
keywords:
 - java
 - 雪花算法
date: 2023-03-22
tags: [java, 雪花算法,  知识小记, 2023-03]
last_update:
  date: 2023-03-22
  author: machu
---

雪花算法生成的数字，long类，所以就是8个byte，64bit。   
表示的值：-9223372036854775808（-2的63次方）~ 9223372036854775807（2的63次方-1）    
生成的唯一值用于数据库主键，不能是附属，所以值为0 ~ 9223372036854775807（2的63次方-1）。


![image](https://user-images.githubusercontent.com/49633468/227945436-ad4115f4-c5fd-43fb-9967-e65c76a2846c.png)


import Quote from '@site/src/components/Quote';

> <Quote></Quote>
