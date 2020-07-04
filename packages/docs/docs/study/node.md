# node

## node 单线程
进程是操作系统分配资源和调度任务的基本单位,线程是建立在进程上的一次程序运行单位，一个进程上可以有多个线程。

## node 高并发
核心：事件循环机制

## node 事件循环与浏览器的差异
浏览器：宏任务1 -> 宏任务1中的微任务 -> 宏任务2 -> 宏任务2中的微任务...
node: 宏任务1 -> 宏任务2 -> 宏任务1中的微任务 -> 宏任务2中的微任务...

此差异只在 node10 及以下存在，11以上与浏览器一致
```js
setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(function() {
    console.log('promise1');
  })
}, 0);

setTimeout(() => {
  console.log('timer2');
  Promise.resolve().then(function() {
    console.log('promise2');
  })
}, 0);
```
输出：

浏览器: timer1 -> promise1 -> timer2 -> promise2
node: timer1 -> timer2 -> promise1 -> promise2

## koa 洋葱模型
```js
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'Hello World';
    console.log('first before next')
    next()
    console.log('first after next')
});

app.use(async (ctx, next) => {
    console.log('sencond before next')
    next()
    console.log('sencond after next')
    ctx.body = 'use next';

});

app.listen(3500, () => {
    console.log('run on port 3500')
});
```
结果：
```
first before next
sencond before next
sencond after next
first after next
```
从第一个中间件开始，最后从第一个中间件结束，就像针穿过洋葱一样，从最外层进去，然后从最外层出来一样。
![洋葱模型](https://user-gold-cdn.xitu.io/2020/2/24/1707764a38486648?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## npm install 的执行过程
- 发出npm install命令
- 查询 node_modules 目录之中是否已经存在指定模块
- 若存在，不再重新安装
- 若不存在
- npm 向 registry 查询模块压缩包的网址
- 下载压缩包，存放在根目录下的.npm目录里
- 解压压缩包到当前项目的 node_modules 目录

## RPC 
RPC（Remote Procedure Call）中文名「远程过程调用」，又是一个很蹩脚的翻译。我们拆开理解下，「过程」也叫方法或函数，「远程」就是说方法不在当前进程里，而是在其他进程或机器上面，合起来 RPC 就是调用其他进程或机器上面的函数。
[1](https://www.yuque.com/egg/nodejs/dklip5#ntiwvi)

## 两个node程序之间怎样交互?
用 fork ，原理是子程序用 process.on 、rocess.send ，父程序里用 child.on ，child.send进行交互.
代码演示
```js
1) fork-parent.js
	var cp = require('child_process');
	var child = cp.fork('./fork-child.js');
	child.on('message', function(msg){
		console.log('老爸从儿子接受到数据:', msg);
	});
	child.send('我是你爸爸，送关怀来了!');

2) fork-child.js
	process.on('message', function(msg){
		console.log("儿子从老爸接收到的数据:", msg);
		process.send("我不要关怀，我要银民币！");
    });
```

## 怎样让一个js文件变得像 linux 命令一样可执行?
- 1) 在 myCommand.js 文件头部加入 #!/usr/bin/env node 
- 2) chmod 命令把 js 文件改为可执行即可
- 3) 进入文件目录，命令行输入 myComand 就是相当于 node myComand.js 了



