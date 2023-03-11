---
slug: /note/mysql-percona-toolkit
title: Mysql的瑞士军刀-Percona toolkit
description:  Percona-toolkit是MySQL的高级运维工具集合，更高效执行各种通过手工非常复杂和麻烦的mysql任务，包括开发、性能分析、监控、数据备份复制、系统管理等。
keywords:
 - java
 - mysql
 - Percona toolkit
date: 2023-03-07
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-07
  author: machu
---

#### 介绍

Percona-toolkit是MySQL的高级运维工具集合，更高效执行各种通过手工非常复杂和麻烦的mysql任务，包括开发、性能分析、监控、数据备份复制、系统管理等。

#### 命令

|  命令   |  作用   |  
| :--  | :-- |
|  pt-online-schema-change   |  在线修改表结构   |
|  pt-heartbeat   |  健康mysql主从复制延迟   |
|  pt-table-checksum   |  校验主从复制一致性   |
|  pt-summary   |  收集和显示系统概况   |
|  pt-query-digest   |  分析慢查询日志，结果更具体   |
|  pt-table-sync   |  当主从数据不一致时修复数据   |


import Quote from '@site/src/components/Quote';

> <Quote></Quote>
