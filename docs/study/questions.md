# 问题

## 定义一个变量a，使得下面的表达式结果为true ?
```js
a == 1 && a == 2 && a == 3
```
√

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









