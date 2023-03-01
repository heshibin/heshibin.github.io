---
slug: /java/concurrent/nio-bio
tilte: NIO和BIO
---

## 什么是JAVA NIO？
N就是 Non-blocking，**同步非阻塞IO**，服务器实现模式为一个线程处理多个请求(连接)，即客户端发送的连接请求都会注册到多路复用器上，**多路复用器**轮询到连接有I/O请求就进行处理。   

<img width="453" alt="image" src="https://user-images.githubusercontent.com/49633468/222096775-401675e3-4d6b-4d78-a524-e4b87e83d8e5.png"></img>

### NIO的核心组件 

  - Channel（通道）
  - Buffer（缓冲区）
  - Selector（选择器）

<img width="445" alt="image" src="https://user-images.githubusercontent.com/49633468/222098759-dc73f231-e24b-47d3-84f3-56890d70f52c.png"></img>

**关系图说明：**
1. 每个 `Channel` 对应一个 `Buffer` 。
2. 一个 `Selector` 对应一个线程，一个线程对应多个 `Channel`。
3. 上图反应了有三个 `Channel` 注册到该 `Selector`。
4. 程序切换到那个 `Channel` 是由事件决定的（Event）。
5. `Selector` 会根据不同的事件，在各个通道上切换。
6. `Buffer` 就是一个内存块，底层是有一个数组。
7. 数据的读取和写入是通过 `Buffer`，但是需要 `flip()` 切换读写模式，而 `BIO` 是单向的，要么输入流要么输出流。

#### Channel
`Channel`是一个对象,作用是用于源节点和目标节点的连接,在java NIO中负责**缓冲区数据的传递**。Channel本身**不存储**数据，因此需要**配合缓冲区**进行传输。  

![image](https://user-images.githubusercontent.com/49633468/222172615-372fd569-6e96-4f3c-8ca1-a4b8e426d3a1.png)

##### 主要实现类
主要的实现类有：`FileChannel, SocketChannel, ServerSocketChannel, DatagramChannel`。

![image](https://user-images.githubusercontent.com/49633468/222175843-e343ef8c-fe5f-4b37-9ae3-c9cb5cbb49c2.png)


## 什么是JAVA BIO?



