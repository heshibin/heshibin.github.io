---
slug: /webmagic-https-error
title: webmagic爬取https页面报错
description: No appropriate protocol (protocol is disabled or cipher suites are inappropriate)，原因是：jdk1.8高版本对`ssl`做了限制。 
date: 2023-03-13
authors: heshibin
tags: [java, webmagic]
---

在使用webmagic爬取页面时，在download的时候，提示`No appropriate protocol (protocol is disabled or cipher suites are inappropriate)`。  

原因是：jdk1.8高版本对`ssl`做了限制。     

解决办法：  

在`C:\Program Files\Java\jdk1.8.0_291\jre\lib\security`目录下修改`java.security`文件。    

![image](https://user-images.githubusercontent.com/49633468/224741423-69e392a5-190e-49d4-bd23-2b9e79e411e1.png)

找到`jdk.tls.disabledAlgorithms`，去除 `SSLv3` 即可（代表允许https）。
