# js AA

## 内存泄漏的场景 ?
- 1. 全局变量引起
- 2. 闭包引起
- 3. DOM删除而事件未清除
- 4. 没关掉的计时器

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



