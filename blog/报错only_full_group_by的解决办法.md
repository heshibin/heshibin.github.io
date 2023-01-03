---
slug: 报错only_full_group_by的解决办法
title: 报错only_full_group_by的解决办法
date: 2023-01-03
authors: heshibin
tags: [java, mysql]
---

```sql
select @@global.sql_mode;
set @@global.sql_mode='STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

