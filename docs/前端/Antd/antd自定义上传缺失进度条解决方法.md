---
title: antd自定义上传缺失进度条解决方法
description: 使用自定义上传覆盖原有上传方式，虽然实现了上传终止的功能，但却发现进度条一动不动了
keywords: 
  - antd
  - axios
  - customRequest
  - onUploadProgress
  - onProgress
date: 2023-02-17
tags: [react, axios ,antd, 2023-02]
last_update:
  date: 2023-02-17
  author: machu
---



#### 背景

使用自定义上传覆盖原有上传方式，虽然实现了上传终止的功能，但却发现进度条一动不动了。  

#### 解决代码

```javascript
customRequest(options) {
  let { file, onSuccess, onError, onProgress } = options
  const formData = new FormData()
  formData.append('file', file);
  axios.post(url.project.newUploadSources, formData, {
    headers: {
      token
    },
    onUploadProgress: ({ total, loaded }) => {
      onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file)
    },
  }).then((res) => {
    onSuccess(res.data, file)
  }).catch((res) => {
    onError(res.data, file)
  })
},
```



#### onUploadProgress

这个方法并不是antd提供的，而是axios的配置之一。一个上传处理进度的事件。  

loaded表示当前已上传的数据大小，total表示整个要上传的数据大小。  



#### customRequest

这个参数在官网上并没有过多的介绍，在[github](https://github.com/react-component/upload#customrequest)上有对参数的简单介绍。

<img width="894" alt="image" src="https://user-images.githubusercontent.com/49633468/219532899-7de28463-d9d5-4ee6-8fac-02668df1db53.png"></img>


