---
sidebar_position: 8
title: 线上生产环境OOM后保存命案线程命令
date: 2023-01-07
tags: [java, 知识小记, JVM, 2023-01]
---



生产环境启动java应用的时候，一般会加jvm参数，当堆内存空间OOM时输出堆的内存快照。
```
nohup java -jar -server -Xms8g -Xmx8g
  -XX:+HeapDumpOnOutOfMemoryError
  -XX:HeapDumpPath=/var/log/app
  -XX:ErrorFile=/var/log/app/java_error_%p.log
  ./app.jar>/dev/null 2>&1 &
```



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
