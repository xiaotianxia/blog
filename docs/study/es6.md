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

## for in、for of、forEach
- forEach 用来遍历数组，遍历的是索引，但是不能中断循环(break或return）
- for in 可遍历数组和对象，遍历的是索引，但会把原型方法和可枚举属性全部遍历出来（可用hasOwnPropery筛选掉），且不能保证对象的内部顺序，不推荐用来遍历数组。
- for of 用来遍历iterable类型的对象，遍历的是元素值，Array、Map和Set都属于iterable类型。(普通对象{a: '1', b: '2', c: '3', d: '4'}不是iterable，不可以遍历)

## class
基本框架：
```js
	//变量方法名 可计算成员名称
	let funStr = 'get' + 'Age';
	class A {
		//静态属性
	    static sex = 'male';

	    constructor (name, job) {
	        this.name = name;
	        this.job = job || 'unkown';
	    }
	    
	    sayName () {
	        return this.name;
	    }
		
		//静态方法
	    static sayHeight () {
	        return '188cm';
	    }
	    
	    //getter
	    get myJob () {
	        return this.job;
	    }
	    
	    //setter
	    set myJob (job) {
	        this.job = job;
	    }
		
		//可计算成员名称
	    [funStr] () {
	        return 18;
	    }
	}


	console.log(A.sex);  // 'male'
	console.log(A.sayHeight()); // '188cm'

	let a = new A('Tom'); 
	console.log(a.sayName()); // 'Tom'
	console.log(a.myJob); // 'unkown'
	a.myJob = 'teacher';
	console.log(a.myJob); // 'teacher'
	console.log(a.getAge()); // '18'

```
继承：
```js
	class B extends A {
	    static sex = 'female';
	    constructor (name, job, married) {
	        super(name, job);
	    }
	    
	    sayName () {
	        return 'Hi, I\'m ' + this.name;
	    }
	}

	console.log(B.sex);  // 'female'
	console.log(B.sayHeight()); // '188cm'

	let b = new B('Lucy', 'nurse', true);

	console.log(b.sayName()); // 'Hi, I'm Lucy'
	console.log(b.myJob); // 'nurse'
	b.myJob = 'teacher';
	console.log(b.myJob); // 'teacher'
	console.log(b.getAge()); // '18'

```
参考
[1](https://mp.weixin.qq.com/s?__biz=MzI4MDYyNjQ1OA==&mid=2247483956&idx=1&sn=adc1ec7ae4cd3f01728fdcb43a38690f&chksm=ebb4d641dcc35f57cd2bf66ba9819874cf300108884700bf3d6a1410c18c0ed4ff3d90d10a8f#rd)
[2](https://juejin.im/post/5b3f23066fb9a04fe820cdbe)

## Object的静态方法
- **Object.is()** - 比较两个对象是否相同，值类型对象比较值是否相等，引用类型对象比较内存地址是否相同。
- **Object.keys()** - 返回对象的可枚举属性数组。
- **Object.assign()** - 将多个对象的可枚举属性拷贝到目标对象上，并且返回赋值后的目标对象
- **Object.create()** - 获取一个类的原型（prototype）对象，返回值为参数类的原型对象。可用于类继承。
- **Object.defineProperties()** - 给对象定义属性，如果存在该属性，则用新定义的属性更新已存在的属性，如果不存在该属性，则添加该属性。
- **Object.defineProperty()** - 在对象上定义新属性，或修改对象现有属性，并返回该对象。
- **Object.entries()** - 遍历获取对象上所有可枚举的属性，返回结果是一个二维数组[['key1', 'value1'], ['key2', 'value2'], ...]
- **Object.freeze()** - 将一个对象上的属性冻结，阻止添加、删除、更新属性到该对象及其原型。返回被冻结的对象。
- **Object.getOwnPropertyDescriptors()** - 获取一个对象所有的直接属性的描述信息（直接在对象上的属性，而不是原型链上的属性）。
- **Object.getOwnPropertyDescriptor()** - 获取一个对象指定名称的直接属性的描述信息（直接在对象上的属性，而不是原型链上的属性），存在则返回该属性的描述信息，不存在则返回undefined。
- **Object.getOwnPropertyNames()** - 获取一个对象所有的直接属性的属性名称（直接在对象上的属性，而不是原型链上的属性）。返回属性名称字符串数组。
- **Object.getOwnPropertySymbols()** - 获取对象上所有的Symbol类型的属性列表。
- **Object.getPrototypeOf()** - 获取一个对象上的原型对象，其功能和 obj.\_proto_等同。

参考
[1](https://blog.csdn.net/qbian/article/details/79360972)

## 手写 promise
[这里](diy.html#diy-promise)
https://juejin.im/post/5c2b34a15188257abf1d96eb
https://mp.weixin.qq.com/s/aj45Rfpv5X0CxCpYRCLcmQ

## promise 异常捕获
在多个Promise调用链中如何在某个then中捕捉到错误，但是不停止then语句的执行？

## Proxy