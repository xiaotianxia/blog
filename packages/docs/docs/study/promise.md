# Promise

[参考](https://juejin.im/post/5e58c618e51d4526ed66b5cf#heading-25)
## 链式调用后面的内容需要等前一个调用执行完才会执行
```js
function promise1 () {
    let p = new Promise((resolve) => {
        console.log('promise1');
        resolve('1')
    });
    return p;
}
function promise2 () {
    return new Promise((resolve, reject) => {
        reject('error')
    })
}
promise1()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally1'))

promise2()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log('finally2'))
```
结果：
```
'promise1'
'1'
'error'
'finally1'
'finally2'
```
执行过程：
- 首先定义了两个函数promise1和promise2，先不管接着往下看。
- promise1函数先被调用了，然后执行里面new Promise的同步代码打印出promise1
- 之后遇到了resolve(1)，将p的状态改为了resolved并将结果保存下来。
- 此时promise1内的函数内容已经执行完了，跳出该函数
- 碰到了promise1().then()，由于promise1的状态已经发生了改变且为resolved因此将promise1().then()这条微任-务加入本轮的微任务列表(这是第一个微任务)
- 这时候要注意了，代码并不会接着往链式调用的下面走，也就是不会先将.finally加入微任务列表，那是因为.then本身就是-一个微任务，它链式后面的内容必须得等当前这个微任务执行完才会执行，因此这里我们先不管.finally()
- 再往下走碰到了promise2()函数，其中返回的new Promise中并没有同步代码需要执行，所以执行reject('error')的时-候将promise2函数中的Promise的状态变为了rejected
- 跳出promise2函数，遇到了promise2().catch()，将其加入当前的微任务队列(这是第二个微任务)，且链式调用后面的内-容得等该任务执行完后才执行，和.then()一样。
- OK， 本轮的宏任务全部执行完了，来看看微任务列表，存在promise1().then()，执行它，打印出1，然后遇到了.-finally()这个微任务将它加入微任务列表(这是第三个微任务)等待执行
- 再执行promise2().catch()打印出error，执行完后将finally2加入微任务加入微任务列表(这是第四个微任务)
- OK， 本轮又全部执行完了，但是微任务列表还有两个新的微任务没有执行完，因此依次执行finally1和finally2。

在这道题中其实能拓展的东西挺多的，之前没有提到，那就是你可以理解为链式调用后面的内容需要等前一个调用执行完才会执行。
就像是这里的finally()会等promise1().then()执行完才会将finally()加入微任务队列，其实如果这道题中你把finally()换成是then()也是这样的:
```js
function promise1 () {
    let p = new Promise((resolve) => {
        resolve('1')
    })
    return p;
}
function promise2 () {
    let p = new Promise((resolve) => {
        resolve('2')
    })
    return p;
}
promise1()
    .then(res => console.log(res))
    .then(() => console.log('3')).then(() => console.log('4'))


promise2()
    .then(res => console.log(res))
    .then(() => console.log('5')).then(() => console.log('6'))
```

结果
```
1
2
3
5
4
6
```
s
## async/await 相关代码执行顺序
可以理解为「紧跟着await后面的语句相当于放到了new Promise中，下一行及之后的语句相当于放在Promise.then中」
[参考](https://juejin.im/post/5e58c618e51d4526ed66b5cf#heading-33)
