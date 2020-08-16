# 问题

## 定义一个变量a，使得下面的表达式结果为true ?
```js
a == 1 && a == 2 && a == 3
```

```js
const a = {
    i: 1,
    toString () {
    	return this.i++
    }
}
a == 1 && a == 2 && a == 3 // true
```
参考
[1](https://juejin.im/post/5bc5c752f265da0a9a399a62)

## 多个await 和 Promise.all 的区别
```js
function sleep(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('request done!' + Math.random());
        }, seconds);
    })
}
```
多个await
```js
//请求时一个结束之后发起另一个，所以执行时间至少3s
async function bugDemo () {
    await sleep(1000);
    await sleep(1000);
    await sleep(1000);
    console.log('done');
}

bugDemo();
```
Promise.all 
```js
//请求时并行处理，时间远小于3s
async function correctDemo () {
    let p1 = sleep(1000);
    let p2 = sleep(1000);
    let p3 = sleep(1000);
    await Promise.all([p1, p2, p3]);
    console.log('done');
}
correctDemo();
```
参考
[1](https://juejin.im/post/59e086fc51882578e310f92d)

## Promise.all 实现
```js
// 简单来说就是把所有要执行的函数都放进一个数组里面，然后数组依次以同步的形式一个一个执行，执行结束后能够接着执行then里面的东西。
Promise.all = arr => {
    let aResult = [];    //用于存放每次执行后返回结果
    return new Promise(function (resolve, reject) {
        let i = 0;
        next();    //开始逐次执行数组中的函数
        
        function next() {
            arr[i].then(function (res) {
                aResult.push(res);    //执行后返回的结果放入数组中
                i++;
                if (i == arr.length) {  //如果函数数组中的函数都执行完，便把结果数组传给then
                    resolve(aResult);
                } else {
                    next();
                }
            })
        }
    })
};
```

## ['1', '2', '3'].map(parseInt) 
相当于
```js
    ['1', '2', '3'].map((item, index) => {
        return parseInt(item, index);
    });
```

参考 [1](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/4)

## 结果是？
```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```
[empty × 2, 1, 2, splice: ƒ, push: ƒ]  类数组

解释：
- js判断类数组的方法：
```js
/**
 * @param {?Object} obj
 * @return {boolean}
 */
function isArrayLike(obj) {
    if (!obj || typeof obj !== 'object')
        return false;
    try {
        if (typeof obj.splice === 'function') {
            const len = obj.length;
            return typeof len === 'number' && (len >>> 0 === len && (len > 0 || 1 / len > 0));
        }
    } catch (e) {}
    return false;
}
// 判断的过程：
// 1 存在且是对象
// 2 对象上的splice 属性是函数类型
// 3 对象上有 length 属性且为正整数
```
- push 方法根据 length 属性来决定从哪里开始插入给定的值。如果 length 不能被转成一个数值或不存在，则插入的元素索引为 0。

[1](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/76)
[2](https://juejin.im/post/5ca2fdcee51d4562754be20a)






