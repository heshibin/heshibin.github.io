---
slug: JSON.stringify保留原有格式
title: JSON.stringify保留原有格式
date: 2023-01-03
authors: heshibin
tags: [java, js]
---

```javascript
JSON.stringify(data, Object.keys(data).sort());
```
