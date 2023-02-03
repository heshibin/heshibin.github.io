---
slug: docker常用命令
title: docker常用命令
date: 2023-01-03
sidebar_position: 5
authors: heshibin
tags: [java, docker]
---

#### 上传文件至docker

```shell
sudo docker cp /data/heshibin/ssp-main.jar bfededd10227:/opt/seczone/codesec/ssp/bin
```

#### 下载docker内的文件

```shell
sudo docker cp bfededd10227:/opt/seczone/codesec/ssp/bin/ssp-main.jar /data/heshibin/ssp-main-back.jar
```

#### Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

```shell
systemctl daemon-reload

systemctl restart docker.service
```
