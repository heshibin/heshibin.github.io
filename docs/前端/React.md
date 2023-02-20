---
slug: react相关
title: react相关
date: 2023-01-06
sidebar_position: 7
authors: heshibin
tags: [react]
---

## 跳转页面清除定时器
使用useEffect
```
const timer = useRef();
useEffect(()=> {
  if(timer.current != null) {
    clearInterval(timer.current);
  }

  // 清除定时器
  return () => clearInterval(timer.current);
}, []);
```

## antd按需加载样式不生效
```
use: getStyleLoaders({
    importLoaders: 1,
    modules:false, // 添加
    sourceMap: isEnvProduction
      ? shouldUseSourceMap
      : isEnvDevelopment,
    modules: {
      mode: 'icss',
    },
}),
```
