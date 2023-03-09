---
slug: /note/2023-02/aliyin-ram
title: RBAC-ACL模式应用之阿里云RAM访问控制
description:  Percona-toolkit是MySQL的高级运维工具集合，更高效执行各种通过手工非常复杂和麻烦的mysql任务，包括开发、性能分析、监控、数据备份复制、系统管理等。
keywords:
 - java
 - RBAC-ACL模式应用
 - RAM
date: 2023-03-09
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-09
  author: machu
---

|  名称   |  ACL   | RBAC   | 
| :--  | :-- | :-- |
| 概述  |  以前盛行的一种权限设计，它的核心在于用户直接和权限挂钩。   |基于角色的访问控制系统，权限与角色相关联，用户通过成为适当角色的成员而得到这些角色的权限。   |
|  优点   |  简单易用，开发便捷   |  简化了用户与权限的管理，通过对用户进行分类，使得角色与权限关联起来。  |
|   缺点  |  用户和权限直接挂钩，导致在授予时的复杂性，比较分散，不便于管理。   |  开发对比ACL相对复杂。  |
|   例子  |  常见的文件系统权限设计，直接给用户加权限   |  基于RBAC模型的权限验证框架与应用：Apache Shiro、Spring Security。  |


#### 总结

不能过于复杂，规则过多，维护性和性能会下降，更多分类ABAC、PBAC等。



import Quote from '@site/src/components/Quote';

> <Quote></Quote>
