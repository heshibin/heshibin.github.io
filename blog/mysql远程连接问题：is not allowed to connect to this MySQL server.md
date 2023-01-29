---
title: mysql远程连接问题：is not allowed to connect to this MySQL server
description: message from server: "Host '192.168.7.233' is not allowed to connect to this MySQL server  
date: 2023-01-29
tags: [java, mysql]
---

message from server: "Host '192.168.7.233' is not allowed to connect to this MySQL server  
远程连接数据库时报错  

#### 原因
mysql数据库只允许自身所在的本机器连接，不允许远程连接。

#### 解决

```shell
mysql -u root -p
use mysql;
select host from user where user = 'root';
update user set host = '%' where user = 'root';
flush privileges;
```

<img width="752" alt="image" src="https://user-images.githubusercontent.com/49633468/215310377-78b16008-e0f4-4848-a175-4e206566441a.png">
