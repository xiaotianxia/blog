# js AAA

## 微任务、宏任务、Event-Loop

- 宏任务：I/0(用户交互)、setTimeout、setInterval、setImmediate、requestAnimationFrame
- 微任务：Promise.then catch finally、MutationObserver等、process.nextTick(node)
- 任务队列执行的过程：每次宏任务执行完，都去检查是否有微任务存在，如有，依次执行微任务，微任务执行结束后，返回继续执行下一个宏任务；
如没有微任务，则结束当前宏任务，继续执行下一宏任务。这个执行过程称为event-loop。

- 1、先执行主线程
- 2、遇到宏任务，放到宏队列
- 3、遇到微任务，放到微队列
- 4、主线程执行完毕
- 5、执行微任务，微队列执行完毕
- 6、执行一次宏任务中的一个任务，执行完毕
- 7、执行微任务，执行完毕
- 8、依次循环。。。

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