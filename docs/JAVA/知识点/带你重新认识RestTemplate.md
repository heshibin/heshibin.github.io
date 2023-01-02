---
sidebar_position: 2
---

# 带你重新认识RestTemplate

RestTemplate是`Spring`提供的用于访问Rest服务的客户端，底层使用java.net。

通过使用`ClientHttpRequestFactory`指定不同的HTTP请求方式。

## 主要提供了两种实现

**1、SimpleClientHttpRequestFactory（默认）：**

创建底层的Http请求连接主要是createRequest方法。

每次都会创建新的连接，每次都创建连接会造成极大的资源浪费。

**2、HttpComponentsClientHttpRequestFactory：**

底层使用HttpClient访问远程的Http服务，客户端每次请求都要和服务端建立新的连接，即三次握手将会非常耗时，通过Http连接池可以减少连接建立与释放的时间，提升Http请求的性能。

Spring的restTemplate是对HttpClient进行了封装，而HttpClient支持`池化机制`。