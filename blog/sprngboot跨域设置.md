---
slug: /spring-boot-cors-config
title: springboot跨域设置
description: springboot跨域设置代码，CorsConfig
date: 2023-03-20
authors: heshibin
tags: [java, springboot, 跨域]
---

```
@Configuration
public class CorsConfig {

    @Value("${configure.cors.enable:true}")
    private Boolean corsIsEnable;

    private CorsConfiguration buildConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        //  你需要跨域的地址  注意这里的 127.0.0.1 != localhost
        // * 表示对所有的地址都可以访问
        //corsConfiguration.addAllowedOrigin("*");
        // 升级boot版本后需要使用addAllowedOriginPattern
        corsConfiguration.addAllowedOriginPattern("*");
        //  跨域的请求头
        corsConfiguration.addAllowedHeader("*"); // 2
        //  跨域的请求方法
        corsConfiguration.addAllowedMethod("*"); // 3
        //加上了这一句，大致意思是可以携带 cookie
        //最终的结果是可以 在跨域请求的时候获取同一个 session
        corsConfiguration.setAllowCredentials(true);
        return corsConfiguration;
    }

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        //配置 可以访问的地址
        if(corsIsEnable){
            source.registerCorsConfiguration("/**", buildConfig()); // 4
        }
        return new CorsFilter(source);
    }
}
```
