---
title: 数据结构与算法
date: 2023-01-05
# 显示 h2 到 h5 标题
toc_min_heading_level: 2
toc_max_heading_level: 6
tags: [面试题, zookeeper]
---

> 背吗，背啊

# 1、Zookeeper是什么？
Zookeeper是一个开源的分布式协调服务。它是一个为分布式应用提供一致性服务的软件，分布式应用程序可以基于Zookeeper实现诸如数据发布/订阅、负载均衡、命名服务、分布式协调/通知、集群管理、Master选举、分布式锁和分布式队列等功能。
Zookeeper的目标就是封装好复杂易出错的关键服务，将简单易用的接口和性能高效、功能稳定的系统提供给用户。
# 2、Zookeeper保证了如下分布式一致性特性：

1. 顺序一致性
2. 原子性
3. 单一视图
4. 可靠性
5. 实时性（最终一致性）

客户端的读请求可以被集群中的任意一台机器处理，如果读请求在节点上注册了监听器，这个监听器也是由所连接的zookeeper机器来处理。对于写请求，这些请求会同时发给其他zookeeper机器并达成一致后，请求才返回成功。因此，随着zookeeper的集群机器增多，读请求的吞吐会提高但是写请求的吞吐会下降。
有序性是zookeeper中非常重要的一个特性，所有的更新都是全局有序的，每个更新都有唯一的时间戳，这个时间戳称为zxid（Zookeeper Transaction Id）。而读请求只会相对于更新有序，也就是读请求的返回结果中会带有zookeeper最新的zxid。
# 3、Zookeeper提供了什么？

1. 文件系统
2. 通知机制
# 4、Zookeeper文件系统

1. Zookeeper提供一个多层级的节点命名空间（节点称为znode）。与文件系统不同的是，这些节点都可以设置关联的数据，而文件系统中只有文件节点可以存放数据而目录节点不行。
2. Zookeeper为了保证高吞吐和低延迟，在内存中维护了这个树状的目录结构，这种特性使得Zookeeper不能用户存放大量的数据，每个节点的存放数据上限为1M。
# 5、Zookeeper怎么保证主从节点的状态同步？
Zookeeper的核心是原子广播机制，这个机制保证了各个server之间的同步。实现这个机制的协议叫做**Zab（Zookeeper Atomic Broadcast）协议**。Zab协议有两种模式，分别是恢复模式和广播模式。
## 恢复模式
当服务启动或者在领导者崩溃后，Zab就进入了恢复模式，当领导者被选举出来，且大多数server完成了和leader的状态同步后，恢复模式就结束了。状态同步保证了leader和server具有相同的系统状态。
## 广播模式
一旦leader已经和多数的follower进行了状态同步，它就可以开始广播消息了，即进入广播状态。这时候当一个server加入zookeeper服务中，它会在恢复模式下启动，发现leader，并和leader进行状态同步。待到同步结束，它也参与广播消息。Zookeeper服务一直维持在Broadcast状态，直到leader崩溃了或者leader失去了大部分follower的支持。
# 6、ZAB协议？
ZAB协议是为分布式协调服务Zookeeper专门设计的一种支持崩溃恢复的原子广播协议。
包括：崩溃恢复和消息广播。
当整个Zookeeper集群刚刚启动或者Leader服务器宕机、重启或者网络故障导致不存在过半的服务器与Leader服务器保持正常通信时，所有进程（服务器）进入崩溃恢复模式，首先选举产生新的Leader服务器，然后集群中Follower服务器开始与新的Leader服务器进行数据同步，当集群中超过半数机器与该Leader服务器完成数据同步之后，退出恢复模式进入消息广播模式，Leader服务器开始接收客户端的事务请求生成事务提案来进行事务请求处理。
# 7、四种类型的数据节点Znode

1. **PERSISTENT（持久节点）**

除非手动删除，否则节点一直存在于Zookeeper上

2. **EPHEMERAL（临时节点）**

临时节点的生命周期与客户端会话绑定，一旦客户端会话失效（客户端与Zookeeper断开连接不一定会会话失效），那么这个客户端创建的所有临时节点都会被移除。

3. **PERSISTENT_SEQUENTIAL（持久顺序节点）**

基本特性同持久节点，只是增加了顺序属性，节点名后边会追加一个由父节点维护的自增整型数字。

4. **EPHEMERAL_SEQUENTIAL（临时顺序节点）**

基本特性同临时节点，只是增加了顺序属性，节点名后边会追加一个由父节点维护的自增整型数字。
# 8、Watcher机制-数据变更通知
Zookeeper允许客户端向服务端的某个Znode节点注册一个Watcher监听，当服务器的一些指定事件触发了这个Watcher，服务端会向指定客户端发送一个事件通知来实现分布式的通知功能，然后客户端根据Watcher通知状态和事件类型做出业务上的改变。
## 工作机制

1. 客户端注册watcher
2. 服务端处理watcher
3. 客户端回调watcher
## Watcher特性总结

1. 一次性

无论是服务端还是客户端，一旦一个Watcher被触发，Zookeeper都会将其从相应的存储中移除。这样的设计有效的减轻了服务端的压力，不然对于更新非常频繁的节点，服务端会不断向客户端发送事件通知，无论对网络还是服务器的压力都非常大。

2. 客户端串行执行

客户端Watcher回调的过程是一个串行同步的过程。

3. 轻量
   1. Watcher通知非常简单，只会告诉客户端发生了事件，而不会说明事件的具体内容。
   2. 客户端向服务端注册Watcher的时候，并不会把客户端真实的Watcher对象实体传递到服务端，仅仅是在客户端请求中使用boolean类型属性进行了标记。
4. watcher event异步发watcher的通知事件从server发送到client是异步的，这就存在一个问题，不同的客户端和服务器之间通过socket进行通信，由于网络延迟或其他因素导致客户端在不同的时刻监听到事件，由于Zookeeper本身提供了ordering guarantee顺序保证，即客户端监听事件，才会感知它所监视znode发生了变化。所以我们使用zookeeper不能期望能够监听到节点每次的变化。Zookeeper只能保证最终的一致性，而无法保证强一致性。
5. 注册watcher：getData、exists、getChildren
6. 触发watcher：create、delete、setData
7. 当一个客户端连接到一个新的服务器上时，watcher将会被以任意会话事件触发。当与一个服务器失去连接的时候，是无法接收到watcher的。而当client重新连接时，如果需要的话，所有先前注册过的watch，都会被重新注册。通常这是完全透明的。只有在一个特殊情况下，watch可能会丢失：对于一个未创建的znode的exists watch，如果在客户端断开连接期间被创建了，并且随后在客户端连接之前又被删除了，这种情况下，这个watch事件可能会丢失。
# 9、客户端注册Watcher实现

1. 调用getData()/getChildren()/exist()三个api，传入Watcher对象；
2. 标记请求request，封装Watcher到WatchRegistration；
3. 封装成Packet对象，向服务端发送request；
4. 收到服务端响应后，将Watcher注册到ZKWatcherManager中进行管理；
5. 请求返回，完成注册；
# 10、服务端处理Watcher实现

1. **服务端接收Watcher并存储；**

接收到服务端请求，处理请求判断是否需要注册Watcher，需要的话将数据节点的节点路径和ServerCnxn（ServerCnxn代表一个客户端和服务端的连接，实现了Watcher的process接口，此时可以看成一个Watcher对象）存储在WatcherManager的WatchTable和Watch2Paths中去。

2. **Watcher触发；**

以服务端收到setData()事务请求触发NodeDataChanged事件为例：

   1. 封装WatchedEvent

将通知状态（SyncConnected）、事件类型（NodeDataChanged）以及节点路径封装成一个WatchedEvent对象。

   2. 查询Watcher

从WatchTable中根据节点路径查找Watcher

   3. 没找到；说明没有客户端在该数据节点上注册过Watcher
   4. 找到；提取并从WatchTable和Watch2Paths中删除对应Watcher（从这里可以看出Watcher在服务端是一次性，触发一次就失效了）
3. **调用process方法来触发Watcher；**

这里process主要就是通过ServerCnxn对应的TCP连接发送Watcher事件通知。
# 11、客户端回调Watcher
客户端SendThread线程接收事件通知，交由EventThread线程回调Watcher；
客户端的Watcher机制同样是一次性的，一旦被触发，该Watcher就失效了。
# 12、ACL权限控制机制
## UGO（User/Group/Others）
目前在Linux/Unix文件系统中使用，也是使用最广泛的权限控制方式。是一种粗粒度的文件系统权限控制模式。
## ACL（Access Control List）访问控制列表：
**权限模式（Scheme）**

1. IP：从IP地址粒度进行权限控制
2. Digest：最常用，用类似username:password的权限标识来进行权限配置，便于区分不同应用来进行权限控制
3. World：最开放的权限控制方式，是一种特殊的digest模式，只有一个权限标识（world:anyone）
4. Super：超级用户

**授权对象**
授权对象指的是权限赋予的用户或一个指定实体，例如IP地址或是机器灯。
**权限（Permission）**

1. **CREATE**：数据节点创建权限，允许授权对象在该Znode下创建子节点；
2. **DELETE**：子节点删除权限，允许授权对象删除该数据节点的子节点；
3. **READ**：数据节点读取权限，允许授权对象访问该数据节点并读取其数据内容或子节点列表等；
4. **WRITE**：数据节点更新权限，允许授权对象对该数据节点进行更新操作；
5. **ADMIN**：数据节点管理权限，允许授权对象对该数据节点进行ACL相关设置操作；
# 13、Chroot特性
3.2.0版本后，添加了Chroot特性，该特性允许每个客户端为自己设置一个命名空间。如果一个客户端设置了Chroot，那么该客户端对服务器的任何操作，都将会被限制在其自己的命名空间下。通过设置Chroot，能够将一个客户端应用于Zookeeper服务端的一颗子树相对应，在那些多个应用公用一个Zookeeper进程的场景下，对实现不同应用间的数据隔离非常有帮助。
# 14、会话管理
## 分桶策略
将类似的会话放在同一区块进行管理，以便Zookeeper对会话进行不同区块的隔离处理以及同一区块的同一处理。
## 分配原则
每个会话的“下次超时时间点”（Expiration Time）
## 计算公式
:::info
ExpirationTime = currentTime + sessionTimeout
ExpirationTime = (ExpirationTime / ExpirationInterval + 1) * ExpirationInterval
ExpirationInterval是指Zookeeper会话超时时间间隔，默认tickTime
:::
# 15、服务器角色
## Leader

1. 事务请求的唯一调度者和处理者，保证集群事务处理的顺序性；
2. 集群内部各服务的调度者；
## Follower

1. 处理客户端的非事务请求，转发事务请求给Leader；
2. 参与事务请求Proposal的投票；
3. 参与Leader选举投票；
## Observer

1. 3.0版本以后引入的一个服务器角色，在不影响集群事务处理能力的基础上提升集群的非事务处理能力；
2. 处理客户端非事务请求，转发事务请求给Leader服务器；
3. 不参与任何形式的投票；
# 16、Zookeeper下Server工作状态
## LOOKING
寻找Leader状态，当服务器处于该状态时，认为当前集群中没有Leader，因此需要进入Leader选举状态；
## FOLLOWING
跟随者状态。表明当前服务器角色是Follower；
## LEADING
领导者状态。表明当前服务器角色是Leader；
## OBSERVING
观察者状态。表明当前服务器角色是Observer；
# 17、数据同步
整个集群完成Leader选举之后，Learner（Follower和Observer的统称）会向服务器进行注册。当Learner服务器向Leader服务器完成注册后，进入数据同步环节。
## 数据同步流程：（均以消息传递的方式进行）

1. Learner向Leader注册
2. 数据同步
3. 同步确认
## Zookeeper的四种数据同步
在进行数据同步前，Leader服务器会完成数据同步初始化：
**peerLastZxid：**
从learner服务器注册时发送的ACKEPOCH消息中提取lastZxid（该Learner服务器最后处理的Zxid）
**minCommittedLog：**
Leader服务器Proposal缓存队列committedLog中最小Zxid；
**maxCommittedLog：**
Leader服务器Proposal缓存队列committedLog中最大Zxid；

1. **直接差异化同步（DIFF）**
   1. peerLastZxid介于minCommittedLog和maxCommittedLog之间
2. **先回滚再差异化同步（TRUNC + DIFF）**
   1. 当新的leader服务器发现某个Learner服务器包含一条自己没有的事务记录，那么就需要让该Learner服务器进行事务回滚，回滚到Leader服务器上存在的，同事也是最接近与peerLastZxid的ZXID
3. **仅回滚同步（TRUNC）**
   1. peerLastZxid大于maxCommittedLog
4. **全量同步（SNAP）**
   1. peerLastZxid小于minCommittedLog
   2. Leader服务器上没有Proposal缓存队列且peerLastZxid不等于lastProcessZxid
# 18、Zookeeper是如何保证事务的顺序一致性的？
Zookeeper采用了全局递增的事务ID来标识，所有的Proposal（提议）都在被提出的时候加上了zxid；zxid实际上是一个64位的数字，高32位是epoch（时期；纪元；世；新时代）用来标识leader周期，如果有新的leader产生出来，epoch会自增；低32位用来递增计数。当新产生proposal的时候，会依据数据库的两阶段过程，首先会向其他的server发出事务执行请求，如果超过半数的机器都能执行并且能够成功，那么就会开始执行。
# 19、分布式集群中为什么会有Master？
在分布式环境中，有些业务逻辑只需要集群中的某一台机器进行执行，其他的机器可以共享这个结果，这样可以大大减少重复计算，提高性能，于是就需要进行leader选举。
# 20、节点宕机如何处理？
Zookeeper本身也是集群，推荐配置不少于3个服务器。Zookeeper自身也要保证一个节点宕机时，其他节点会继续提供服务。
如果是一个Follower宕机，还有2台服务器提供访问，因为Zookeeper上的数据是有多个副本的，数据并不会丢失。
如果是一个Leader宕机，Zookeeper会选举出新的Leader。
ZK集群的机制是只要超过半数的节点正常，集群就能正常提供服务。只有在ZK节点挂的太多，只剩一般或少于一半节点能工作，集群才失效。
所以：
3个节点的cluster可以挂掉1个节点（leader可以得到2票>1.5）
2个节点的cluster就不能挂掉任何一个节点了（leader可以得到1票<=1）
# 21、Zookeeper负载均衡和nginx负载均衡的区别
zk的负载均衡是可以调控，nginx只能调权重，其他需要可控的都需要自己写插件；但是nginx的吞吐量比zk大的多，应该说根据业务选择用哪种方式。
# 22、Zookeeper有哪几种部署模式？
**单机模式、伪集群模式、集群模式**
# 23、集群最少要几台机器，集群的规则是怎样的？
集群规则为：`2N + 1` 台， N>0，即最少3台。
# 24、集群支持动态添加机器（水平扩容）吗？
**全部重启**：关闭zookeeper服务，修改配置之后启动，不影响之前客户端的会话；
**逐个重启**：在过半存活即可用的原则下，一台机器重启不影响整个集群对外提供服务。这是必要常用的方式。
3.5版本开始支持动态扩容。
# 25、Zookeeper对节点的Watch是永久的吗？为什么？
**不是。**官方声明：一个Watch事件是一个一次性的触发器，当被设置了Watch的数据发生了改变的时候，则服务器将这个改变发送给设置了Watch的客户端，以便通知他们。
为什么不是永久的，举个例子，如果服务端变动频繁，而监听的客户端很多情况下，每次变动都要通知到所有客户端，给网络和服务器造成很大压力。
一般是客户端执行`getData("/节点A", true)`，如果节点A发生了变更或删除，客户端就会得到它的watch事件，但是在之后节点A又发生了变更，而客户端又没有设置watch事件，就不再给客户端发送。
在实际应用中，很多情况下，我们的客户端不需要知道服务端的每一次变动，我只要最新的数据即可。
# 26、Zookeeper的java客户端有哪些？
zk自带的zkClient及Apache开源的Curator。
# 27、chubby是什么？和zookeeper比你怎么看？
chubby是google的，完全实现paxos算法，不开源。
zookeeper是chubby的开源实现，使用zab协议，paxos算法的变种。
# 28、Zookeeper常用命令
`ls get set create delete`等
# 29、ZAB和Paxos算法的联系与区别？
**相同点**：

1. 两者都存在一个类似与Leader进程的角色，由其负责协调多个Follower进程的运行。
2. Leader进程都会等待超过半数的Follower做出正确的反馈后，才会将一个提案提交。
3. ZAB协议中，每个Proposal中都包含一个epoch值来代表当前Leader的生命周期，Paxos中名字为Ballot（投票）。

**不同点**：
ZAB用来构建高可用的分布式数据主备系统（Zookeeper）；Paxos是用来构建分布式一致性状态机系统。
# 30、Zookeeper的典型应用场景
Zookeeper是一个典型的发布/订阅模式的分布式数据管理与协调框架，开发人员可以使用它来进行分布式数据的发布和订阅。
通过对Zookeeper中丰富的数据节点进行交叉使用，配置Watcher事件通知机制，可以非常方便的构建一系列分布式应用中都会涉及的核心功能，如：

1. 数据发布/订阅
2. 负载均衡
3. 命名服务
4. 分布式协调/通知
5. 集群管理
6. Master选举
7. 分布式锁
8. 分布式队列
## 数据发布/订阅
介绍：
数据发布/订阅系统，即所谓的配置中心，顾名思义就是发布者发布数据提供订阅者进行数据订阅。
目的：
动态获取数据（配置信息）
实现数据（配置信息）的集中式管理和数据的动态更新
设计模式
push模式
pull模式
数据（配置信息）特性

1. 数据量通常特别小
2. 数据内容在运行时会发生动态更新
3. 集群中各机器共享，配置一致。

如：机器列表信息、运行时开关配置、数据库配置信息等
基于Zookeeper的实现方式

- **数据存储**：将数据（配置信息）存储到Zookeeper上的一个数据节点
- **数据获取**：应用在启动初始化节点从Zookeeper数据节点读取数据，并在该节点上注册一个数据变更Watcher
- **数据变更**：当变更数据时，更新Zookeeper对于节点数据，Zookeeper会将数据变更通知发送到客户端，客户端收到通知后重新读取变更后的数据即可。
## 负载均衡
使用Zookeeper的临时节点来维护Server的地址列表，然后选择负载均衡策略来对请求进行分配。
## 命名服务
通过指定的名字来获取资源或者服务的地址，利用zk创建一个全局的路径，即是唯一的路径，这个路径就可以作为一个名字，指向集群中的机器。
## 分布式协调/通知
对于系统调度来说：操作人员发送通知实际是通过控制台改变某个节点的状态，然后zk将这些变化发送给注册了这个节点的watcher的所有客户端。
对于执行情况汇报：每个工作进程都在某个目录下创建一个临时节点。并携带工作的进度数据，这样汇总的进程可以监控目录子节点的变化获得工作进度的实时的全局情况。
## 集群管理
Zookeeper可以实现实时监控节点状态变化；
可将节点信息写入Zookeeper上的一个Znode。
监听这个Znode可获取它的实时状态变化。
## Master选举
在约定目录下创建节点，谁创建成功了谁就是Master，失败的客户端就在该节点注册Watcher用户监控当前Master机器是否存活，一旦挂了，就重新进行Master选举。
## 分布式锁
Zookeeper是根据它的**临时顺序节点**来实现分布式锁。
**具体实现步骤：**

1. **创建临时顺序节点**：每一次获取资源的请求，我们都需要使用Zookeeper客户端创建一个临时顺序节点，用这个临时顺序节点在Zookeeper服务端中获取锁。
2. **获取锁**：这里的锁并不具体指代什么，而是根据Zookeeper的临时顺序节点的顺序来决定是否获取了锁。如果该节点的顺序编号是最小的，则说明该节点是排在最前面的，在它之前无人占领资源，也就可以说该节点获取了锁，具有访问资源的权限。
3. **监听锁**：如果获取锁这一步发现Zookeeper客户端创建的临时顺序节点的顺序编号不是最小的，也就是在这个临时顺序节点之前存在其他临时顺序节点，那么就可以说这个节点获取锁失败了，它会进入等待队列。我们可以监听它的前一个节点，只要他的前一个临时顺序节点的删除时间触发，我们就可以获取临时顺序节点的列表来重新确认这个节点的顺序。
4. **释放锁**：当一个请求对资源的操作结束后，我们可以使用Zookeeper客户端的节点删除API来删除这个请求创建的临时顺序节点。除此之外，当创建这个临时顺序节点的Zookeeper客户端与服务端断开连接时，这个临时顺序节点会被Zookeeper服务端移除。
## 分布式队列
两种类型的队列：

1. 同步队列，当一个队列的成员都聚齐时，这个队列才可用，否则一直等待所有成员到达。
2. 队列按照FIFO方式进行入队和出队操作。

第一类，在约定目录下创建临时目录节点，监听节点数目是否达到我们要求的数目。
第二类，和分布式锁服务中的控制时序场景基本原理一致，入列有编号，出列按编号。在特定的目录下创建PERSISTENT_SEQUENTIAL节点，创建成功时Watcher通知等待的队列，队列删除序列号最小的节点用以消费。此场景下Zookeeper的znode用于消息存储，znode存储的数据就是消息队列中的消息内容，SEQUENTIAL序列化就是消息的编号，按序取出。由于创建的节点是持久化的，所以没有消息丢失的问题。

