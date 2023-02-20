---
slug: react相关
title: React相关问题
description: React相关问题，跳转页面清除定时器，antd按需加载样式不生效，解决react a标签执行href
keywords:
 - react
 - js
 - antd按需加载样式不生效
date: 2023-01-06
authors: heshibin
tags: [react]
last_update:
  date: 2023-02-20
  author: machu
---

#### 跳转页面清除定时器
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

#### antd按需加载样式不生效
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

#### 解决react a标签执行href
使用`e.preventDefault();`阻止跳转
```javascript
<a href="#" onClick={ (e)=> { e.preventDefault(); handlersPage.handleRouterRulePage(subItem.menu) } }>查看详细规则 {'>>'}</a>
```

#### 解决react点击事件自动执行
点击事件内容若是直接写Function() ，就会变成执行函数而非事件绑定，页面加载时会自动执行  
```javascript
class Title extends React.Component {
  render(){
      return <h1 onClick={func('页面跳转')}>{title}</h1>  
  }
}
```
用箭头函数装饰一下完成间接绑定即可避免：
```javascript
class Title extends React.Component {
  render(){
      return <h1 onClick={() => func('页面跳转')}>{title}</h1>  
  }
}
```
或是：
```javascript
class Title extends React.Component {
  render(){
      return <h1 onClick={func.bind(this, '页面跳转')}>{title}</h1>  
  }
}
```
