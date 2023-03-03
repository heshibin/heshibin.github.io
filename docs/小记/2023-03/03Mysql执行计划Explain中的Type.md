---
slug: /note/2023-02/mysql-explain-type
title: Mysql执行计划Explain中的Type
description: Mysql执行计划Explain中的Type
keywords:
 - java
 - mysql
 - 执行计划
 - explain
date: 2023-03-03
tags: [java, mysql,  知识小记, 2023-03]
last_update:
  date: 2023-03-03
  author: machu
---


|  执行计划   |  概述   |  
| :--  | :-- |
|  all   |  全表扫描，MYSQL扫描全表来找到匹配的行。   |
|  index   |  <span>索引全扫描，MYSQL遍历整个索引来找到匹配的行；<br/>Extra字段里面出现 <code>Using index</code> , 则是覆盖索引，不用二次回表查询。</span>   |
|  range   |  <span>索引范围扫描，常见于<code><、<=、>、>=、between、in</code>等操作符；<br/>相对于index的全索引扫描，它有范围限制，因此要优于index。</span>   |
|  ref   |  使用非唯一性索引或者唯一索引的前缀扫描，返回匹配某个单独值的记录行；<br/>虽使用了索引但该索引列的值并不唯一，进行目标值附近的小范围扫描，不扫描全表。   |
|  eq_ref   |  <span> <code>ref_eq</code>与<code>ref</code>对比结果集只有一个，使用主键或者唯一索引进行查找，不用扫描更多行。</span>   |
|  const   |  <span>最多只有一条匹配行，查询非常迅速，用到<code>primary key</code> 或者 <code>unique key</code>，性能最高。</span>   |

import Quote from '@site/src/components/Quote';

> <Quote></Quote>
