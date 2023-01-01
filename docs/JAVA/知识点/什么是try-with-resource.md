# 技巧分享：什么是try-with-resource?

资源的关闭很多人停留在旧的流程上，jdk7新特性旧有，但是很多人以为是jdk8的。

<br>

在try(...)里声明的资源，会在try-catch代码块结束后自动关闭掉。

<br>

## 注意点

实现了AutoCloseable接口的类，在try()里声明该类实例的时候，try结束后自动调用该实例的close方法。

这个动作会早于finally里调用的方法，不管是否出现异常，try()里声明的实例都会被调用close方法。

try里面可以声明多个自动关闭的对象，`越早声明的对象，会越晚被close掉`。