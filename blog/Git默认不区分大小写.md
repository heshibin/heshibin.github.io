---
title: Git默认不区分大小写
description: 通过代码规范，修改了包名为全小写（修改了文件夹目录），但发现push后，git服务器的文件夹目录还是为大写
keywords:
 - Git
date: 2023-02-20
authors: heshibin
tags: [Git]
last_update:
  date: 2023-02-20
  author: machu
---

#### 背景
通过代码规范，修改了包名为全小写（修改了文件夹目录），但发现push后，git服务器的文件夹目录还是为大写

#### 解决方法：

git默认是不区分大小写的，意思是你修改一个文件名/文件夹的时候，`git status` 是不会提示你有修改的 

可以通过 `git config --get core.ignorecase` 查看默认配置

通过 `git config core.ignorecase false` 设置为区分大小写

然后 `git status` 就可以看到变动

然后push到远程服务器
