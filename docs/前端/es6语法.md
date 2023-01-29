#### 数组过滤
```
let arr = [1, 2, 3];
let newArr = arr.filter((item, index, arr) => {
    return item <= 2;
})
```

#### 数组中某一项求和
```
let arrquantitynew = item.items.map(itemnew => {
  return itemnew.quantity;
});
arrquantitynew = arrquantitynew.reduce((n,m) => n + m);
```

#### 数组快速去重
```
const arr = [1,1,2,2,3,3,]
arr.reduce((prev,current)=>{
    !prev.includes(current) && prev.push(current)
    return  prev
},[])
```
