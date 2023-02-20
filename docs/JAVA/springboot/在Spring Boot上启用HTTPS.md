---
title: 在Spring Boot上启用HTTPS以及请求转发
description: 您可以通过配置SSL证书为Spring Boot启用HTTPS，实现网络通信数据的加密传输。本文介绍如何在Spring Boot上启用HTTPS以及http请求转发至https。
keywords:
 - springboot
 - https
 - ssl
 - 请求转发
date: 2023-02-20
authors: heshibin
tags: [java, springboot, https]
last_update:
  date: 2023-02-20
  author: machu
---


> 本文转载于[https://help.aliyun.com/document_detail/365559.html](https://help.aliyun.com/document_detail/365559.html)  


  
您可以通过配置SSL证书为Spring Boot启用HTTPS，实现网络通信数据的加密传输。本文介绍如何在Spring Boot上启用HTTPS。

## 前提条件

- SSL证书的加密算法为RSA或ECC，并且证书为**已签发**状态。

  **说明** 如果您证书的加密算法为SM2（国密算法），该证书无法配置在Spring Boot上。您需要吊销该证书并重新申请加密算法为RSA或ECC的证书。关于吊销证书和申请证书的操作，请参见[吊销SSL证书](https://help.aliyun.com/document_detail/98577.htm#concept-v5s-lxn-yfb)和[提交证书申请](https://help.aliyun.com/document_detail/98574.htm#concept-wxz-3xn-yfb)。

- 您的Spring Boot已经开启了443端口（HTTPS服务的默认端口）。

- 已准备好远程登录工具（例如PuTTY、Xshell），用于登录您的Web应用服务器。



## 操作步骤

1. 登录[数字证书管理服务控制台](https://yundunnext.console.aliyun.com/?p=cas)。
2. 在左侧导航栏，单击**SSL证书**。
3. 定位到要下载的证书，单击**操作**列的**下载**。
4. 在**证书下载**面板，单击**Tomcat**服务器**操作**列下的**下载**。

   **说明** Spring Boot支持配置PFX和JKS格式的证书。单击**Tomcat操作**列的**下载**即可下载PFX格式证书，本文以PFX格式证书为例介绍如何在Spring Boot上启用HTTPS。如果您需要配置JKS格式的证书，请单击**JKS操作**列的**下载**。  

该操作会将Tomcat服务器证书压缩包下载到本地，并保存在浏览器的默认下载位置。

5. 访问浏览器的默认下载目录，解压已下载的证书压缩包文件。  

解压后您将会获得以下文件：  

- 证书文件（domain_name.pfx）  
- 密码文件（pfx-password.txt）

  **说明** 

     - 本文中证书名称以domain_name为示例。  
     - 每次下载证书都会产生新的密码。该密码仅匹配本次下载的证书。如果需要更新证书文件，同时也要更新匹配的密码。

6. 登录您的Spring Boot应用服务器。

7. 将解压后的证书文件和密码文件拷贝到Spring Boot项目的根目录src/main/resources/下。

   **说明** 如果您修改过Spring Boot项目的目录，您需要将证书文件和密码文件拷贝到与配置文件application.properties或application.yml相同的目录下。  

8. 修改配置文件application.properties或application.yml。  

  - 参考以下示例配置application.properties中的参数：

  ```properties
  server.port = 443    #HTTPS协议默认端口号为443，需要使用其他端口时，您可以在此处自定义。
  server.ssl.key-store = classpath:<domain_name.pfx>   #您需要使用实际的证书名称替换domain_name.pfx。
  server.ssl.key-store-password = ********    #填写pfx-password.txt文件内的密码。
  server.ssl.keyStoreType = PKCS12
  ```

  - 参考以下示例配置application.yml中的参数：  

  ```yaml
  server:
    port: 443    #HTTPS协议默认端口号为443，需要使用其他端口时，您可以在此处自定义。
    ssl:
      key-alias: tomcat
      key-store-password: ********    #填写pfx-password.txt文件内的密码。
      key-store-type: PKCS12
      key-store: classpath:<domain_name.pfx>    #您需要使用实际的证书名称替换domain_name.pfx。
  ```

  

9. 执行`mvn spring-boot:run`命令重启Spring Boot服务。    

## 后续步骤

验证是否已启用HTTPS协议。   

配置完成后，您可通过访问证书绑定的域名验证是否已启用HTTPS协议。    

[https://yourdomain](https://yourdomain)   #需要将yourdomain替换成证书绑定的域名。

## 请求转发

考虑到 Spring Boot 不支持同时启动 HTTP 和 HTTPS ，为了解决这个问题，我们这里可以配置一个请求转发，当用户发起 HTTP 调用时，自动转发到 HTTPS 上。

```java
@Configuration
public class TomcatConfig {
    @Bean
    TomcatServletWebServerFactory tomcatServletWebServerFactory() {
        TomcatServletWebServerFactory factory = new TomcatServletWebServerFactory(){
            @Override
            protected void postProcessContext(Context context) {
                SecurityConstraint constraint = new SecurityConstraint();
                constraint.setUserConstraint("CONFIDENTIAL");
                SecurityCollection collection = new SecurityCollection();
                collection.addPattern("/*");
                constraint.addCollection(collection);
                context.addConstraint(constraint);
            }
        };
        factory.addAdditionalTomcatConnectors(createTomcatConnector());
        return factory;
    }
    private Connector createTomcatConnector() {
        Connector connector = new
                Connector("org.apache.coyote.http11.Http11NioProtocol");
        connector.setScheme("http");
        connector.setPort(8081);
        connector.setSecure(false);
        connector.setRedirectPort(8080);
        return connector;
    }
}
```

在这里，我们配置了 Http 的请求端口为 8081，所有来自 8081 的请求，将被自动重定向到 8080 这个 https 的端口上。  

如此之后，我们再去访问 http 请求，就会自动重定向到 https。  

