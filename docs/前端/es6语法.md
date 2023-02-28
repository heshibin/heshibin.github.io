---
slug: /q/es6
title: es6相关语法
description: 数组过滤、数组中某一项求和、数组中某一项求和、数组快速去重、数组排序
keywords: 
  - javascript
  - es6
  - onProgress
date: 2023-02-17
tags: [es6, 2023-02]
last_update:
  date: 2023-02-17
  author: machu
---

#### 数组过滤
```javascript
let arr = [1, 2, 3];
let newArr = arr.filter((item, index, arr) => {
    return item <= 2;
})
```

#### 数组中某一项求和
```javascript
let arrquantitynew = item.items.map(itemnew => {
  return itemnew.quantity;
});
arrquantitynew = arrquantitynew.reduce((n,m) => n + m);
```

#### 数组快速去重
```javascript
const arr = [1,1,2,2,3,3,]
arr.reduce((prev,current)=>{
    !prev.includes(current) && prev.push(current)
    return  prev
},[])
```

#### 数组排序
```javascript
let arr = [2,1,3,5,4];
arr= arr.sort((n1,n2)=>{
    // return -1; //返回负值  交换顺序
    // return 0 或者 1   //返回正值   保持顺序不变
    console.log(n1,n2);

    return n2-n1;
    // n2 - n1  从大到小
    // n1 - n2  从小到大
});  
console.log(arr);
```
