---
slug: /java/concurrent/nio-bio
tilte: NIO和BIO
---

#### 什么是JAVA NIO？
N就是 Non-blocking，**同步非阻塞IO**，服务器实现模式为一个线程处理多个请求(连接)，即客户端发送的连接请求都会注册到多路复用器上，**多路复用器**轮询到连接有I/O请求就进行处理。   

<img width="453" alt="image" src="https://user-images.githubusercontent.com/49633468/222096775-401675e3-4d6b-4d78-a524-e4b87e83d8e5.png"></img>

**Java NIO**有三大组成部分： 
  - **Buffer**
  - **Channel**
  - **Selector**



#### 什么是JAVA BIO?



