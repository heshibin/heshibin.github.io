---
slug: /span-auto-line-feed
title: span自动换行
description: 在HTML中，可以使用CSS属性来控制文本的自动换行。其中，word-wrap 和 white-space 属性可以用来实现自动换行。
date: 2023-03-31
authors: heshibin
tags: [java, css]
---

在HTML中，可以使用CSS属性来控制文本的自动换行。其中，`word-wrap` 和 `white-space` 属性可以用来实现自动换行。      

`word-wrap` 属性可以强制文本在单词内换行，避免长单词溢出容器边界。可以将其设置为 `break-word`，如下所示：
```css
span {
  word-wrap: break-word;
}
```

`white-space` 属性可以控制如何处理空格和换行符。可以将其设置为 `normal` 或 `pre-wrap` 来启用自动换行，如下所示：  
```css
span {
  white-space: normal; /* 或者 pre-wrap */
}
```

同时，也可以使用 `max-width` 属性来限制span的宽度，超出的内容会自动换行。例如：
```css
span {
  max-width: 200px; /* 将span的最大宽度设置为200像素 */
}
```
使用这些属性可以实现span的自动换行。
