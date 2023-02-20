---
title: Docusaurus引入cursor-effects实现鼠标特效
description: Docusaurus鼠标特效，cursor-effects实现
date: 2023-01-29
keywords:
 - Docusaurus
 - cursor-effects
authors: heshibin
tags: [Docusaurus, 博客]
last_update:
  date: 2023-01-29
  author: machu
---

#### 实现方式

[Github地址](https://github.com/tholman/cursor-effects)

[下载源代码](https://github.com/tholman/cursor-effects/releases/tag/1.0.10)，保存js文件至本地。

![image](https://user-images.githubusercontent.com/49633468/216634226-daeb79b9-e50c-4a48-a046-37c94c639f4e.png)

新建js文件`mouse.js`
```javascript title="mouse.js"
// body未加载完 延迟调用
setTimeout(()=>{
    new emojiCursor({ element: document.querySelector("#html") })
}, 2000)
```

在`docusaurus.config.js`文件中引入

```javascript title="docusaurus.config.js"
module.exports = {
  scripts: [
    "https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js",
    {
      src: '/js/emojiCursor.js',
      async: true,
    },
    {
      src: '/js/mouse.js',
      async: true,
    },
  ],
}
```

#### 效果展示

![image](https://user-images.githubusercontent.com/49633468/216635437-a465276d-a34b-4265-a21e-b67d2057ea0c.png)


#### 注意
如果body还未加载完，建议延迟调用`mouse.js`
