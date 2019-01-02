# es6

## 新特性总览
- 1. let const (变量声明)
- 2. 解构赋值 
- 3. Promise 对象 
- 4. async / await (nodejs controller中经常使用，查询数据库)
- 5. 箭头函数
- 6. 模板字符串
- 7. 字符扩展方法: 
    - 1. 查找 String.prototype.includes() startWith endsWith 
- 8. 函数引入了: rest参数 fn(...param) & 箭头函数
- 9. ... 扩展运算符
- 10. 数组扩展方法: 
    - 1. 查找：find() findIndex() includes()  
    - 2. 遍历：keys() entries() values() 
- 11. 对象扩展方法: 
    - 1. Object.assign() 
    - 2. Object.keys() Object.entries() Object.setPrototypeOf() Object.values() 
    - 3. Object.getOwnPropertyDescriptors()
    - 4. __proto__属性，Object.()，Object.getPrototypeOf() 设置对象的原型，非常重要
- 12. 循环：for...of
- 13. Class 
- 14. Module 
    - 1. import 
    - 2. export
- 15. Number isFinite isNaN isInteger
- 16. Set Map 两种新的数据类型(数据结构) 
    - 1. Set (去重的数组)
        - 1. size
        - 2. has add delete clear() 
        - 3. 遍历: keys values entries 返回的都是一个遍历器对象
    - 2. Map (键值类型没有限制的map)
        - 1. set get
        - 2. has delete clear()    
        - 3. 遍历: keys values entries 返回的都是一个遍历器对象
- 17. Iterator 和 for...of 循环 (引入了遍历器对象的概念,与之搭配的是新的for of 遍历方法)

## let const
- let 用来声明变量，并且会在当前作用域形成代码块 TDZ(Temporal Dead Zone)暂时性死区
- const 用来声明常量，所谓常量就是**物理指针**不可以更改的变量。
即任何改变内存地址的操作都不允许。除此之外特性跟 let 一样。对于引用类型的数据，在使用时要注意。
- const 声明的对象或数组可以改变，只要不改变其内存地址。不能做到冻结对象，要冻结对象还要使用Object.freeze();
```js
var constantize = (obj) => {
  	Object.freeze(obj);
  	Object.keys(obj).forEach(key => {
    	if (typeof obj[key] === 'object') {
      		constantize( obj[key] );
    	}
  	});
};
```
- let声明变量，变量不会提升

## 箭头函数
除了便捷的写法外，注意this的指向问题：
- 默认绑定外层this
```js
const obj = {
	a: function() {
		console.log(this);
	}    
}
obj.a()  //打出的是obj对象
```

```js
const obj = {
    a: () => {
        console.log(this);
    }
}
obj.a()  //打出来的是window
```
- 不能用call方法修改里面的this
```js
const obj = {
    a: () => {
        console.log(this);
    }
}
obj.a.call('123')  //打出来的结果依然是window对象
```
- 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this。
箭头函数不使用自身的this，而是一层一层的向上查找，直到有this。
```js
const obj = {
    a: function() { console.log(this) },
    b: {
    	c: function() {console.log(this)}
	}
}
obj.a()  // 打出的是obj对象, 相当于obj.a.call(obj)
obj.b.c() //打出的是obj.b对象, 相当于obj.b.c.call(obj.b)
```
```js
const obj = {
    a: function() { console.log(this) },
    b: {
    	c: () => {console.log(this)}
	}
}
obj.a()   //没有使用箭头函数打出的是obj
obj.b.c()  //打出的是window对象！！
```

## 手写 promise
[这里](diy.html#diy-promise)

## promise 异常捕获
在多个Promise调用链中如何在某个then中捕捉到错误，但是不停止then语句的执行？

## Proxy