# 算法

## 数组去重
```js
function uniq(arr) {
    return [...new Set(arr)]
}
```

## 最快捷的数组求最大值 ?
```js
var arr = [ 1,5,1,7,5,9];
Math.max(...arr);  // 9 
//or
Math.max.apply(Math, arr);
//or
Math.max.call(Math, ...arr);
//or
Math.max.bind(Math, ...arr)();
```

## 