# AA

## 内存泄漏的场景 <i class="el-icon-question"></i>
1. 全局变量引起

2. 闭包引起

3. DOM删除而事件未清除

4. 没关掉的计时器

## 实现一个深拷贝 <i class="el-icon-question"></i>

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





