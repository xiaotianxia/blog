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

## add(1, 2, 3) === add(1,2)(3)() 柯里化实现
```js
// add 函数柯里化
function add(){
    //建立args,利用闭包特性，不断保存arguments
    var args = [].slice.call(arguments);
       //方法一，新建_add函数实现柯里化
    var _add = function(){
        if(arguments.length === 0){
            //参数为空，对args执行加法
            return args.reduce(function(a,b){return a+b});
        }else {
            //否则，保存参数到args，返回一个函数
            [].push.apply(args,arguments);
            return _add;
        }
    }
    //返回_add函数
    return _add;
    
    //方法二，使用匿名函数
    /*
    return function () {
        if (arguments.length === 0) {
            return args.reduce(function(a,b){return a+b});
        }
        Array.prototype.push.apply(args, arguments);
        return arguments.callee;
    }
    */
}
```
参考
[1](https://www.jianshu.com/p/f88a5175e7a2)
[2](https://blog.csdn.net/qq_39207948/article/details/80593715)









