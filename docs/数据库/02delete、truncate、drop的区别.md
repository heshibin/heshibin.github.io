---
title: delete、truncate、drop的区别
description: delete、truncate、drop的区别
tags: [mysql]
keywords:
 - delete、truncate、drop的区别
---

##### delete、truncate、drop的区别？
delete会把删除的数据记录起来，以便数据回退，不会释放空间，而且不会删除定义(表的结构)。
truncate不会记录删除操作，会初始化占用空间，不会删除定义(表的结构)。
drop会删除整张表，释放表占用空间。


速度：

drop > truncate > delete

truncate和drop属于DDL语句，delete属于DML语句。
