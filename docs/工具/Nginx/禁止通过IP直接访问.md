---
slug: /t/nginx/prohibit-direct-access-through-ip
title: Nginx禁止IP直接访问网站
description:  禁止别人直接通过IP访问网站，在nginx的server配置文件前面加上如下的配置，如果有通过IP直接访问的，直接拒绝连接(需要去掉别的server下的default_server)。
keywords: 
  - nginx
date: 2023-02-28
tags: [nginx, 2023-02]
last_update:
  date: 2023-02-28
  author: machu
---

 
 禁止别人直接通过IP访问网站，在nginx的server配置文件前面加上如下的配置，如果有通过IP直接访问的，直接拒绝连接(需要去掉别的server下的default_server)。
 
 ```conf
 server {
   listen 80 default_server;
   return 403;
}
 ```
