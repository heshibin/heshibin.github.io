---
title: Github自动化部署至阿里云服务器
description: Github自动化部署至阿里云服务器，前期通过github-page构建发布站点，但是在github服务器上，在不科学上网的前提下访问很慢。 因此准备将构建好的文件再上传到阿里云服务器，再通过nginx访问
keywords:
 - github
 - workflows
 - github-page
date: 2023-02-27
tags: [github,  workflows, 2023-02]
last_update:
  date: 2023-02-27
  author: machu
---

前期通过github-page构建发布站点，但是在github服务器上，在不科学上网的前提下访问很慢。  
因此准备将构建好的文件再上传到阿里云服务器，再通过nginx访问。  

#### 准备
正式开始之前，你需要掌握 GitHub Action 的基础语法：
- name: 工作流的名称。
- on: 指定次工作流的触发器。push 表示只要有人将更改推送到仓库就会触发工作流运行。（点击这里了解如何指定特定分支，路径或标签）
- jobs: 将工作流运行的所有作业组合到一起。
- build-and-deploy: 定义的作业的名称。
- runs-on: 将作业配置为在最新版本的 Ubuntu Linux 上运行。这意味着作业将在 GitHub 托管的新虚拟机上执行。有关使用其他运行器的语法示例，[请参阅 GitHub 操作的工作流语法](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on)。
- steps: 将作业中运行的所有步骤组合在一起。嵌套在此部分下的每个项都是一个单独的操作或 shell 脚本。
- uses: 指定需要运行的 action。
- env: 指定运行 action 时需要用到的环境变量的值

#### 步骤
1. 在服务器上使用`ssh-keygen -m PEM -t rsa -b 4096`生成公私钥。 
2. 将github中添加私钥。
![image](https://user-images.githubusercontent.com/49633468/221595957-20e81775-c1d6-4434-8aa9-b84dc8eb99e6.png)
3. 在nginx中也要开启对应ssh私钥登录。


#### 完整的文件
```yml
name: Deploy Github pages
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v2

    - run: npm install && npm run build

    - name: Build and Deploy
      uses: peaceiris/actions-gh-pages@v3
      #uses: JamesIves/github-pages-deploy-action@master
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_branch: master
        publish_dir: build
    # 部署到阿里云服务器
    - name: 上传到阿里云
      uses: easingthemes/ssh-deploy@main
      env:
        # 本地.ssh文件下的私钥id_rsa，存在secrets的TOKEN中
        SSH_PRIVATE_KEY: ${{ secrets.TOKEN }}
        # 复制操作的参数。"-avzr --delete"象征部署时清空服务器目标目录下的文件
        ARGS: "-rlgoDzvc -i --delete"
        # 源目录，绝对于仓库内容根目录的门路
        SOURCE: "build"
        # 近程服务器地址
        REMOTE_HOST: HOST
        # 近程服务器用户名
        REMOTE_USER: "root"
        # 目标目录（近程服务器门路）
        TARGET: "/home/www"
```
