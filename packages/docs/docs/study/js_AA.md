# js 进阶

## 内存泄漏的场景 ?
- 1. 全局变量引起
- 2. 闭包引起
- 3. DOM删除而事件未清除
- 4. 没关掉的计时器

## GC (Garbage Collection, 垃圾回收)机制
- 引用类型是在没有引用之后, 通过 v8 的 GC 自动回收, 
- 值类型如果是处于闭包的情况下, 要等闭包没有引用才会被 GC 回收, 非闭包的情况下等待 v8 的新生代 (new space) 切换的时候回收
[1](https://elemefe.github.io/node-interview/#/sections/zh-cn/common?id=%e5%86%85%e5%ad%98%e9%87%8a%e6%94%be)
[2](https://zhuanlan.zhihu.com/p/25736931)

## 防止内存泄漏
- ESLint 检测代码检查非期望的全局变量。
- 使用闭包的时候，避免写出复杂的闭包。
- 绑定事件的时候，一定得在恰当的时候清除事件。

## 实现一个深拷贝 ?
```js
function deepCopy(o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else if (o instanceof Function) {
        var n = new Function("return " + o.toString())();
        return n
    } else if (o instanceof Object) {
        var n = {}
        for (var i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}
//考虑到了数组、对象、函数三种引用类型
```

## 防抖与节流 ?
- 函数防抖(debounce) 
    - 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
- 函数节流(throttle) 
    - 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

- 不同:
    - 防抖是将多次执行变为最后一次执行，节流是将多次执行变为在规定时间内只执行一次.

- 应用场景:
    - debounce
        - search搜索联想，用户在不断输入值时，用防抖来节约请求资源
        - window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
    - throttle
        - 鼠标不断点击触发，mousedown(单位时间内只触发一次)
        - 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断

参考
[1](https://juejin.im/post/5c6bab91f265da2dd94c9f9e)

## call apply bind 
[这里](diy.html#call)

## toString 和 valueOf 区别
这两个方法主要用于对象的隐式转换。

当这两个函数同时存在时候，会** 先调用 valueOf ** ，若返回的不是原始类型，那么会调用 toString 方法，如果这时候 toString 方法返回的也不是原始数据类型，那么就会报错。

用 String 的拆箱转换会优先调用 toString。

```js
let o = function () {
    this.toString = () => {
        return 'my is o,'
    }
    this.valueOf = () => {
        return 99
    }
}
let n = new o()
console.log(n + 'abc') // 99abc
console.log(n * 10) // 990
```

```js
let o = function () {
    this.toString = () => {
        console.log('into toString')
        return { 'string': 'ssss' }
    }
    this.valueOf = () => {
        console.log('into valueOf')
        return { 'val': 99 }
    }
}
let n = new o()
console.log(n + 'xx')
//into valueOf
//into toString
//TypeError

String(o)
//into toString
//into valueOf
//TypeError
```

在 ES6 之后，还允许对象通过显式指定 @@toPrimitive Symbol 来覆盖原有的行为。
```js
o[Symbol.toPrimitive] = () => {console.log("toPrimitive"); return "hello"};

o + "";
// toPrimitive 
// hello
```


