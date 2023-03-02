---
slug: /java/concurrent/nio-bio
tilte: JAVA中的NIO和BIO
description: N就是 Non-blocking，同步非阻塞IO，服务器实现模式为一个线程处理多个请求(连接)，即客户端发送的连接请求都会注册到多路复用器上，多路复用器轮询到连接有I/O请求就进行处理。   
keywords:
 - java
 - nio
 - bio
date: 2023-03-02
authors: heshibin
tags: [java, 并发编程]
last_update:
  date: 2023-03-02
  author: machu
---

# 什么是JAVA NIO？
N就是 Non-blocking，**同步非阻塞IO**，服务器实现模式为一个线程处理多个请求(连接)，即客户端发送的连接请求都会注册到多路复用器上，**多路复用器**轮询到连接有I/O请求就进行处理。   

<img width="453" alt="image" src="https://user-images.githubusercontent.com/49633468/222096775-401675e3-4d6b-4d78-a524-e4b87e83d8e5.png"></img>

## NIO的核心组件 

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

### Channel（通道）
`Channel`是一个对象,作用是用于源节点和目标节点的连接,在java NIO中负责**缓冲区数据的传递**。Channel本身**不存储**数据，因此需要**配合缓冲区**进行传输。  

![image](https://user-images.githubusercontent.com/49633468/222172615-372fd569-6e96-4f3c-8ca1-a4b8e426d3a1.png)

传统的IO是基于流操作的，Channel和它类似，但又有不同。

|  区别   |  传统IO   |  通过Channel   |  
| :--:  | :--: | :--:  |  
|  支持异步   |  不支持   |  支持   |
|  是否可双向传输数据   |  不能，只能单向   |  可以，既可以从通道读取数据，也可以向通道写入数据   |
|  是否结合 Buffer 使用   |  否   |  必须结合 Buffer 使用   |
|  性能   |  较低   |  较高   |

Channel 必须要配合 Buffer 一起使用，我们永远不可能将数据直接写入到 Channel 中，同样也不可能直接从 Channel 中读取数据。都是通过从 Channel 读取数据到 Buffer 中或者从 Buffer 写入数据到 Channel 中。


#### 主要实现类
主要的实现类有：`FileChannel, SocketChannel, ServerSocketChannel, DatagramChannel`。

![image](https://user-images.githubusercontent.com/49633468/222175843-e343ef8c-fe5f-4b37-9ae3-c9cb5cbb49c2.png)

##### FileChannel
本地文件IO通道，用于读取、写入、映射和操作文件的通道。

##### SocketChannel
网络套接字IO通道，TCP协议，针对面向流的连接套接字的可选择通道（一般用在客户端）。

##### ServerSocketChannel
网络通信IO操作，TCP协议，针对面向流的监听套接字的可选择通道（一般用于服务端）。

##### DatagramChannel
数据报通道，能通过 UDP 读写网络中的数据。

### Buffer（缓冲区）
Buffer 是一个**数据对象**，我们可以把它理解为固定数量的数据的容器，它包含一些要写入或者读出的数据。  
在 Java NIO 中，任何时候访问 NIO 中的数据，都需要通过缓冲区（Buffer）进行操作。读取数据时，直接从缓冲区中读取，写入数据时，写入至缓冲区。NIO 最常用的缓冲区则是 `ByteBuffer`。

<img width="1150" alt="image" src="https://user-images.githubusercontent.com/49633468/222324394-55b8a2db-a4d4-4142-91d9-91cdeb7cfcee.png"></img>

每一个 Java 基本类型都对应着一种 Buffer，他们都包含这相同的操作，只不过是所处理的数据类型不同而已。



### Selector（多路复用器）
多路复用器 Selector，它是 Java NIO 编程的基础，它提供了选择已经就绪的任务的能力。    
从底层来看，Selector 提供了询问通道是否已经准备好执行每个 I/O 操作的能力。    
简单来讲，Selector 会不断地轮询注册在其上的 Channel，如果某个 Channel 上面发生了读或者写事件，这个 Channel 就处于就绪状态，会被 Selector 轮询出来，然后通过 SelectionKey 可以获取就绪 Channel 的集合，进行后续的 I/O 操作。   

Selector 允许一个线程处理多个 Channel ，也就是说只要一个线程复杂 Selector 的轮询，就可以处理成千上万个 Channel ，相比于多线程来处理势必会**减少线程的上下文切换问题**。


# 什么是JAVA BIO?



















