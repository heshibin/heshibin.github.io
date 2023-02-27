---
slug: github-pages如何去掉子域名
title: github-pages如何去掉子域名
description: 使用github新建仓库通过github pages发布后，url必须携带仓库名才能访问否则404。
keywords:
 - github-pages
 - 子域名
date: 2023-01-07
authors: heshibin
tags: [github]
---



## 背景

使用github新建仓库通过github pages发布后，url必须携带仓库名才能访问否则404。![image-20230107203033124](/img/博客/20230107-01.png)

## 解决办法

修改仓库名为`<username>.github.io`

调整发布的分支为`master`（不确定是否需要该操作）

参考： [GitHub Pages 站点的类型](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)

