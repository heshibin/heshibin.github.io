---
title: groupby取最新一条数据
description: 使用`max`函数联表查询获得最新一条数据
date: 2023-02-13
tags: [java,  知识小记, 2023-02]
---

使用`max`函数联表查询获得最新一条数据。

```sql
select
	*
from
	(
	select
		max(id) as id
	from
		table_1
	where
		# 这里可以加条件
	group by
		name
) t1
left join table_1 t2
on
	t1.id = t2.id
	# 这里可以加条件
```
