---
title: axios之CancelToken取消请求
description: 在项目中切换频繁切换路由时，当上一个路由尚未有响应时，会对当前路由的页面信息渲染产生一定影响，对我们的性能会造成一定影响。
date: 2023-02-03
authors: heshibin
tags: [java]
---

在项目中切换频繁切换路由时，当上一个路由尚未有响应时，会对当前路由的页面信息渲染产生一定影响，对我们的性能会造成一定影响。
因此，我们要做的就是在路由切换时取消上一路由未响应的请求，从而提高性能。

#### 具体实现
定义一个`CacheUtils`存储请求接口地址以及请求体和取消函数之间的映射关系。
```javascript title="CacheUtils"
export const CacheUtils = {
  // 存储请求接口地址以及请求体和取消函数之间的映射关系
  cache: {},
  
  // 根据提供的键名 key 取消对应的请求，若未提供则取消全部请求
  clearCache: function (key) {
    if (key) {
      const cancel = this.cache[key];
      if (cancel && typeof cancel === 'function') {
        cancel("请求取消");
        delete this.cache[key];
      }

      return;
    }

    Object.keys(this.cache).forEach(cacheKey => {
      const cancel = this.cache[cacheKey];
      cancel("请求取消");
      delete this.cache[cacheKey];
    });
  },
};
```

调整axios请求封装类
```
import axios from 'axios';
const CancelToken = axios.CancelToken;

......

options = {
  ...options,
  cancelToken: new CancelToken(function executor(c) {
    CacheUtils.cache["请求url"] = c
  })
}

return axios(options)
.then((response) => {
      ......
})
```

在需要取消的时候调用
```
CacheUtils.clearCache("请求url")
```
