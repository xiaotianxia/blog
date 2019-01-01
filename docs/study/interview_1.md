# 试题1

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