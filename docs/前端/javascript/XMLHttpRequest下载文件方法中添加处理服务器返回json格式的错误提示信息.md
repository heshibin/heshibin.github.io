---
title: XMLHttpRequest下载文件方法中添加处理服务器返回json格式的错误提示信息
description: 在使用`XMLHttpRequest`下载文件时，当指定数据类型为blob时，如果后端失败了仍会下载一个空文件或者一个错误文件。
keywords:
 - XMLHttpRequest
date: 2023-02-13
tags: [java,  知识小记, 2023-02]
last_update:
  date: 2023-02-13
  author: machu
---

> 转载于[http://www.manongjc.com/detail/16-wpcpkamqsfnpeqs.html](http://www.manongjc.com/detail/16-wpcpkamqsfnpeqs.html)

在使用`XMLHttpRequest`下载文件时，当指定数据类型为blob时，如果后端失败了仍会下载一个空文件或者一个错误文件。  
在onload方法中增加如下处理

```javascript
if (this.status === 206) {//处理错误提示
    var result = this.response;
    if (result.type === 'application/json') {
        var reader = new FileReader();
        reader.readAsText(result, 'utf-8');
        reader.onload = (e) => {
            var jsonData = JSON.parse(reader.result);
            if (!jsonData.success) {
                $.messager.alert("警告", jsonData.message);
            }
        }
    }
}
```
