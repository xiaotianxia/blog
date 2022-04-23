# 常见算法

## 排序
### 冒泡排序
```js
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
```
演示：https://visualgo.net/zh/sorting


## 二分查找

```js
//  二分查找比较简单，但是细节比较麻烦：边界的确定，前提是有序数组
//递归查找
function erfen_digui(arr, val, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === val) {
        return `最终查找结果下标为${mid}`;
    } else if (arr[mid] > val) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
    return erfen_digui(arr, val, left, right);
}
//非递归查找
function erfen_feidigui(arr, val) {
    let left = 0,
        right = arr.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === val) {
            return `最终查找结果下标为${mid}`;
        } else if (arr[mid] > val) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}
```




