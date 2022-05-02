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

### 快排
快排的原理是基于二分法的思想，时间复杂度比较复杂，最好的情况是O(N)，最差的时候是O(N^2)，所以平时说的O(N*logN)为其平均时间复杂度。它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。
```js
var quickSort = function(arr) {
　　if (arr.length <= 1) { return arr; }
　　var pivotIndex = Math.floor(arr.length / 2);
　　var pivot = arr.splice(pivotIndex, 1)[0];
　　var left = [];
　　var right = [];
　　for (var i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
```
来自 https://github.com/sisterAn/JavaScript-Algorithms/issues/70


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

## 树的遍历
```js
const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: [],
                },
                {
                    val: 'e',
                    children: [],
                }
            ],
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: [],
                },
                {
                    val: 'g',
                    children: [],
                }
            ],
        }
    ],
};
```
### 深度优先遍历
步骤：
- 1. 访问根节点
- 2. 对根节点的 children 挨个进行深度优先遍历
```js
const dfs = (root) => {
    console.log(root.val);
    root.children.forEach(dfs);
};
```
### 广度优先遍历
步骤：
- 1. 新建一个队列，把根节点入队
- 2. 把队头出队并访问
- 3. 把队头的 children 挨个入队
- 4. 重复第二三步，知道队列为空
```js
const bfs = (root) => {
    const q = [root];
    while (q.length) {
        const header = q.shift();
        console.log(header.val);
        header.children.forEach(child => {
            q.push(child);
        })
    }
};
```

## 二叉树的三种遍历
```js
const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    },
};
```
### 先序遍历 (根左右)
步骤：
- 1. 访问根节点
- 2. 对根节点的左子树进行先序遍历
- 3. 对根节点的右子树进行先序遍历
```js
// 递归版
const preorder = (root) => {
    if (!root) { return; }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
};

// 非递归版 利用栈
const preorder = (root) => {
    if (!root) { return; }
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        console.log(n.val);
        if (n.right) stack.push(n.right);
        if (n.left) stack.push(n.left);
    }
};
```
### 中序遍历 (左根右)
步骤：
- 1. 对根节点的左子树进行先序遍历
- 2. 访问根节点
- 3. 对根节点的右子树进行先序遍历
```js
// 递归版
const inorder = (root) => {
    if (!root) { return; }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
};

// 非递归版
const inorder = (root) => {
    if (!root) { return; }
    const stack = [];
    // 定义一个指针p
    let p = root;
    // 将左子树全部进栈
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
};
```
### 后序遍历 (左右根)
步骤：
- 1. 对根节点的后子树进行先序遍历
- 2. 对根节点的后子树进行先序遍历
- 3. 访问根节点
```js
// 递归版
const postorder = (root) => {
    if (!root) { return; }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
};

// 非递归版
const postorder = (root) => {
    if (!root) { return; }
    const outputStack = [];
    const stack = [root];
    // 先序遍历倒过来
    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n);
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    // 倒序输出
    while(outputStack.length){
        const n = outputStack.pop();
        console.log(n.val);
    }
};
```




