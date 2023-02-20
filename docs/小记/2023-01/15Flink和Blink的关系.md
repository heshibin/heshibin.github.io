---
title: Flink和Blink的关系
date: 2023-01-15
sidebar_position: 15
authors: heshibin
tags: [java, 大数据]
---



阿里全资收购Flink的母公司，进行高度定制并取名为Blink（加了很多特性）。

**阿里巴巴官方说明：**   
Blink不会单独作为一个开源项目运作，而是Flink的一部分，都在不断演进中，对比其他流式计算框架（老到新）。

- **Storm：** 只支持流处理。
- **Spark Streaming：** 流式处理，其实是micro-batch微批处理，本质还是批处理。
- **Flink：** 支持流批一体。



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
