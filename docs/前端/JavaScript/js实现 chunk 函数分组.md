---
title: js实现 chunk 函数分组
description: js实现 chunk 函数分组
date: 2023-02-20
keywords:
 - chunk
 - javascript
authors: heshibin
tags: [js]
last_update:
  date: 2023-02-20
  author: machu
---

```javascript
// 自己实现
function chunk(list, size) {
  let len = list.length;
    if (size < 1 || !len) {
        return [];
    }
    if (size > len) {
        return [list];
    }
    // 最终返回数组
    let res = [];
    // 向下取整
    let integer = Math.floor(len / size);
    // 取余
    let rest = len % size;
    for (let i = 1; i <= integer; i++) {
        res.push(list.splice(0, size));
    }
    if (rest) {
        res.push(list.splice(0, rest));
    }
    return res;
}
// console.log(chunk([1, 2, 3, 4, 5], 0));
console.log(chunk([1, 2, 3, 4, 5], -1));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 3));
console.log(chunk([1, 2, 3, 4, 5], 4));
console.log(chunk([1, 2, 3, 4, 5], 5));
console.log(chunk([1, 2, 3, 4, 5], 6));
// []
// []
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
// [ [ 1, 2, 3 ], [ 4, 5 ] ]
// [ [ 1, 2, 3, 4 ], [ 5 ] ]
// [ [ 1, 2, 3, 4, 5 ] ]
// [ [ 1, 2, 3, 4, 5 ] ]
```

lodash chunk源码（供参考）：https://github.com/lodash/lodash/blob/master/chunk.js

```javascript
import slice from './slice.js'
import toInteger from './toInteger.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

export default chunk
```
