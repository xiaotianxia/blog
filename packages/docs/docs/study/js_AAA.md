# js 高级

## 微任务、宏任务、event loop

- 宏任务：I/0(用户交互)、setTimeout、setInterval、setImmediate、requestAnimationFrame 、I/O 、UI rendering
- 微任务：Promise.then catch finally、MutationObserver等、process.nextTick(node)、 Promise为基础开发的其它技术，比如fetch API、V8的垃圾回收过程
- 任务队列执行的过程：每次宏任务执行完，都去检查是否有微任务存在，如有，依次执行微任务，微任务执行结束后，返回继续执行下一个宏任务；如没有微任务，则结束当前宏任务，继续执行下一宏任务。这个执行过程称为 event loop。

event loop执行顺序
- 1 一开始整个脚本作为一个宏任务执行
- 2 执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
- 3 当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完
- 4 执行浏览器UI线程的渲染工作
- 5 检查是否有Web Worker任务，有则执行
- 6 执行完本轮的宏任务，回到2，依此循环，直到宏任务和微任务队列都为空

node环境中：
- process.nextTick 的执行优先级高于 Promise 的
- setTimeout 的执行优先级高于 setImmediate 的(浏览器中往往正好相反)

![](https://image-static.segmentfault.com/402/025/4020255170-59bc9e1671029)
![](https://user-gold-cdn.xitu.io/2019/1/5/1681c75cd2176add?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

参考
[1](https://juejin.im/post/5bee24866fb9a049f361ad15)
[2](https://juejin.im/post/5c36b3b0f265da611f07e409)

### example 1
```js
(function test() {
    setTimeout(function() {console.log(4)}, 0);

    new Promise(function executor(resolve) {
        console.log(1);
        for( var i=0 ; i<10000 ; i++ ) {
            i == 9999 && resolve();
        }
        console.log(2);
    }).then(function() {
        console.log(5);
    });

    console.log(3);
})();
```

1,2,3,5,4

Promise.then是异步执行的(微任务)，而创建Promise实例（executor）是同步执行的，而then中注册的回调才是异步执行的。

参考：
[1](https://juejin.im/post/5b73d7a6518825610072b42b)

## example 2
```js
async function async1() {
    console.log( 'async1 start' )
    await async2()
    console.log( 'async1 end' )
}

async function async2() {
    console.log( 'async2' )
}

console.log( 'script start' )

setTimeout( function () {
    console.log( 'setTimeout' )
}, 0 )

async1();

new Promise( function ( resolve ) {
    console.log( 'promise1' )
    resolve();
} ).then( function () {
    console.log( 'promise2' )
} )

console.log( 'script end' )
```
-->
任务队列布局如下：
![](https://user-gold-cdn.xitu.io/2019/1/16/168570e33c19cb92?w=1958&h=262&f=png&s=137573)

```bash
    script start
    async1 start
    async2
    promise1
    script end
    promise2
    async1 end
    setTimeout
```

参考 
[1](https://segmentfault.com/a/1190000017224799)

## node 中的 eventloop
nodejs的event loop分为6个阶段，它们会按照顺序反复运行，分别如下：
- 1. timers：执行setTimeout() 和 setInterval()中到期的callback。
- 2. I/O callbacks：上一轮循环中有少数的I/Ocallback会被延迟到这一轮的这一阶段执行
- 3. idle, prepare：队列的移动，仅内部使用
- 4. poll：最为重要的阶段，执行I/O callback，在适当的条件下会阻塞在这个阶段
- 5. check：执行setImmediate的callback
- 6. close callbacks：执行close事件的callback，例如socket.on("close",func)

不同于浏览器的是，在每个阶段完成后，而不是MacroTask任务完成后，microTask队列就会被执行。这就导致了同样的代码在不同的上下文环境下会出现不同的结果。
![1](https://images2018.cnblogs.com/blog/1112801/201804/1112801-20180403204200761-655432817.png)

```js
setTimeout(()=>{
    console.log('timer1');

    Promise.resolve().then(function() {
        console.log('promise1');
    })
}, 0);

setTimeout(()=>{
    console.log('timer2');

    Promise.resolve().then(function() {
        console.log('promise2');
    })
}, 0);

// 浏览器输出：
// time1
// promise1
// time2
// promise2

// Node输出：
// time1
// time2
// promise1
// promise2
```

参考
[1](https://www.cnblogs.com/xuzhudong/p/8711069.html)