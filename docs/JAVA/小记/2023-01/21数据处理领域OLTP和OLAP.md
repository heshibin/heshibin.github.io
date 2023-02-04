---
title: 数据处理领域OLTP和OLAP
description: 联机事务处理系统和联机分析处理系统
date: 2023-01-21
tags: [java, 知识小记, 2023-01]
---

import Quote from '@site/src/components/Quote';

> <Quote></Quote>

**OLTP全称OnLine Transaction Processing**

**联机事务处理系统**

1. 存储的是业务数据，记录某类业务时间的发生，比如下单、支付、注册等等。
2. 典型代表有Mysql、Oracle等数据库，对应的网站、系统应用后端数据库。
3. 应用比较简单，数据量相对较少，是GB级别的，面向业务开发人员。

**OLAP全称是OnLine Analytical Processing**

**联机分析处理系统**

1. 存储多业务历史数据，支持复杂的分析操作，侧重决策，并且提供直观易懂的查询结果。
2. 对应的风控平台、BI平台、数据可视化等系统就数据OLAP，典型代表有Hive、ClickHouse，数据来源于生产系统中。
3. 数据量大，常规是TB级别的，面向分析决策人员。
