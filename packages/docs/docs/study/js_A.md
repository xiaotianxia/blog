# js 基础

## ajax请求的过程 ?
```js
// 1.创建ajax对象
var xhr = null;
if(window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
} else {
    //为了兼容IE6
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

// 2.连接服务器
// 连接服务器open(方法GET/POST，请求地址， 异步传输)
xhr.open('GET',  'data.txt',  true);

// 3.发送请求
xhr.send();

// 4.接收返回数据
/*
** 每当readyState改变时，就会触发onreadystatechange事件
** readyState属性存储有XMLHttpRequest的状态信息
** 0 ：请求未初始化
** 1 ：服务器连接已建立
** 2 ：请求已接受
** 3 : 请求处理中
** 4 ：请求已完成，且相应就绪
*/
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
        /*
        ** Http状态码
        ** 1xx ：信息展示
        ** 2xx ：成功
        ** 3xx ：重定向
        ** 4xx : 客户端错误
        ** 5xx ：服务器端错误
        */
        if(xhr.status == 200) {
            success(xhr.responseText);
        } else {
            if(failed) {
                failed(xhr.status);
            }
        }
    }
}
```

## DOM事件流 ?

传递方向：先自顶向下(capture阶段), 再自下而上(bubble阶段)，即先执行捕获类型的事件，再执行冒泡类型的事件，最后执行浏览器默认行为。

参考[1](https://juejin.im/post/5bf6330f6fb9a049b41c1934)

## js原型 ?
```js
function Person () {}
var person = new Person();
```

- JS 在创建对象（不论是普通对象还是函数对象）的时候，都有一个叫做__proto__的内置属性，用于指向创建它的构造函数的原型对象，person.\__proto__ == Person.prototype。
- 每个对象都有__proto__属性，但只有函数对象才有 prototype 属性
- 所有对象的__proto__都指向其构造器的 prototype，如[].\__proto__== Array.prototype。
- person 是 Person 的一个实例，构造函数的原型 Person.prototype，也是 Person 的一个实例。
实例的构造器就是 Person，=> 

person.constructor == Person，

Person.prototype.constructor == Person，

person.\__proto__ == Person.prototype。

- 所有函数对象__proto__都指向 Function.prototype，它是一个空函数。
- Function.prototype 是唯一一个typeof XXX.prototype为“function”的prototype，其他的都是“object”。

参考: 
[1](https://www.jianshu.com/p/dee9f8b14771)
[2](https://www.jianshu.com/p/652991a67186)
[3](https://www.jianshu.com/p/a4e1e7b6f4f8)


## 继承 ?
[es6继承](es6.html#class)
```js
// 常用的继承方法： 寄生组合式继承  see: https://zhuanlan.zhihu.com/p/25578222
function Parent(name) {
    this.name = name;
}
Parent.prototype.sayName = function() {
    console.log('parent name:', this.name);
}

function Child(name, parentName) {
    // 借用构造函数实现对实例属性的继承，类似 super()
    Parent.call(this, parentName);  
    this.name = name;    
}

// 使用原型链实现对原型属性和方法的继承
Child.prototype = Object.create(Parent.prototype);   // 这里的几种其他写法，见下
Child.prototype.constructor = Child;

Child.prototype.sayName = function() {
    console.log('child name:', this.name);
}

var parent = new Parent('father');
parent.sayName();      // parent name: father

var child = new Child('son', 'father');
child.sayName();       // child name: son
```

Child.prototype = Object.create(Parent.prototype); Child.prototype.constructor = Child;  // 这里的几种其他写法
```js
// 1： 手动实现 Object.create
function create(proto) {
    function F() {};
    F.prototype = proto;
    return new F();
}

Child.prototype = create(Parent.prototype);
Child.prototype.constructor = Child; 
```

```js
// 2：es6  setPrototypeOf   慢  see: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
Object.setPrototypeOf(Child, Parent);
```

```js
// 3：__proto__
    Child.prototype.__proto__ = Parent.prototype;
    // 或
    Child.__proto__ = Parent;
```
参考：
[1](https://zhuanlan.zhihu.com/p/25578222)
[2](https://juejin.im/post/5c433e216fb9a049c15f841b)

## es5 继承和 es6 继承的区别？
1. 子类__proto__属性不一样
```js
// es6 继承
class Super {}
class Sub extends Super {}

const sub = new Sub();

Sub.__proto__ === Super;
```
子类可以直接通过 __proto__ 寻址到父类。

```js
// es5 继承
function Super() {}
function Sub() {}

Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

var sub = new Sub();

Sub.__proto__ === Function.prototype;
```
而通过 ES5 的方式，Sub.__proto__ === Function.prototype

2. ES5 和 ES6 子类 this 生成顺序不同。ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例，ES6 的继承先生成父类实例，再调用子类的构造函数修饰父类实例。这个差别使得 ES6 可以继承内置对象。
```js
function MyES5Array() {
  Array.call(this, arguments);
}

// it's useless
const arrayES5 = new MyES5Array(3); // arrayES5: MyES5Array {}

class MyES6Array extends Array {}

// it's ok
const arrayES6 = new MyES6Array(3); // arrayES6: MyES6Array(3) []
```

https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/20

## js 类型及其判断 ?
### 数据类型
- 基本数据类型：原始数据类型，包括undefined、null、Boolean、Number、String、Symbol (ES6新增，表示独一无二的值)。
- 引用数据类型：统称为Object对象，主要包括对象、数组和函数。
- 基本类型值的比较：
    - == 只进行值的比较,会进行数据类型的转换。
    - ===不仅进行值得比较，还要进行数据类型的比较。
- 引用类型值的比较：是引用的比较
- 存储位置：基本类型存放在栈区，引用类型同时保存在栈和堆中，其指针存在栈区，指针指向堆中该实体的起始地址。
### 类型判断
#### typeof
**typeof返回一个表示数据类型的字符串**，返回结果包括：'number'、'boolean'、'string'、'symbol'、'object'、'undefined'、'function'等7种数据类型，
但不能判断null、array、Date、RegExp。
```js
    typeof Symbol(); // symbol 有效
    typeof ''; // string 有效
    typeof 1; // number 有效
    typeof true; //boolean 有效
    typeof undefined; //undefined 有效
    typeof new Function(); // function 有效

    typeof null; //object 无效
    typeof [] ; //object 无效
    typeof new Date(); //object 无效
    typeof new RegExp(); //object 无效
```
数组和对象返回的都是object，这时就需要使用instanceof来判断。
#### instanceof
**instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。**
```js
    [] instanceof Array; //true
    {} instanceof Object;//true
    new Date() instanceof Date;//true
    new RegExp() instanceof RegExp//true
```

#### constructor
```js
    var aa=[1,2];
    console.log(aa.constructor===Array);//true
    console.log(aa.constructor===RegExp);//false
    console.log((1).constructor===Number);//true

    var reg=/^$/;
    console.log(reg.constructor===RegExp);//true
    console.log(reg.constructor===Object);//false
```
#### Object.prototype.toString.call()
**Object.prototype.toString.call() 最准确最常用的方式**。首先获取Object原型上的toString方法，让方法执行，让toString方法中的this指向第一个参数的值。
```js
    Object.prototype.toString.call('');   // [object String]
    Object.prototype.toString.call(1);    // [object Number]
    Object.prototype.toString.call(true); // [object Boolean]
    Object.prototype.toString.call(undefined); // [object Undefined]
    Object.prototype.toString.call(null); // [object Null]
    Object.prototype.toString.call(new Function()); // [object Function]
    Object.prototype.toString.call(new Date()); // [object Date]
    Object.prototype.toString.call([]); // [object Array]
    Object.prototype.toString.call(new RegExp()); // [object RegExp]
    Object.prototype.toString.call(new Error()); // [object Error]
    Object.prototype.toString.call(document); // [object HTMLDocument]
    Object.prototype.toString.call(window); //[object Window] window是全局对象global的引用
```
#### 注意点
- instanceof 三大弊端：
    - 对于基本数据类型来说，字面量方式创建出来的结果和实例方式创建的是有一定的区别的
    ```js
        console.log(1 instanceof Number)//false
        console.log(new Number(1) instanceof Number)//true
    ```
    - 只要在当前实例的原型链上，我们用其检测出来的结果都是true。在类的原型继承中，我们最后检测出来的结果未必准确。
    ```js
        var arr = [1, 2, 3];
        console.log(arr instanceof Array) // true
        console.log(arr instanceof Object);  // true
        function fn(){}
        console.log(fn instanceof Function)// true
        console.log(fn instanceof Object)// true
    ```
    - 不能检测null 和 undefined，对于特殊的数据类型null和undefined，他们的所属类是Null和Undefined，但是浏览器把这两个类保护起来了，不允许我们在外面访问使用。
    从 Object.prototype.toString.call(null); // [object Null] 可以看出。
    但可以这样
    ```js
        //判断null
        var a = null;
        typeof a // "object";
        a === null // true;

        //判断undefined
        var b = undefined;
        typeof b === 'undefined'; // true
        b === undefined // true;
   ```
- constructor 两大弊端：
    - null 和 undefined 是无效的对象，因此是不会有 constructor 存在的，这两种类型的数据需要通过其他方式来判断。
    - 函数的 constructor 是不稳定的，这个主要体现在把类的原型进行重写，在重写的过程中很有可能出现把之前的constructor给覆盖了，这样检测出来的结果就是不准确的。

参考
[1](https://github.com/ljianshu/Blog/issues/4)

## 传统全局 isNaN、isFinite 和 Number.isNaN 、 Number.isFinite 的区别

传统的全局方法 isFinite() 、 isNaN() 与 Number.isNaN 、 Number.isFinite 的区别在于，传统方法先调用Number() 将非数值的值转为数值，再进行判断，而后两个新方法只对数值有效， Number.isFinite() 对于非数值一律返回false, Number.isNaN() 只有对于 NaN 才返回 true ，非 NaN 一律返回 false 。[1](http://es6.ruanyifeng.com/#docs/number)
```js
isFinite(25) // true
isFinite("25") // true

Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true

Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false
```

[1](https://segmentfault.com/a/1190000015142897)

## this 指向问题
- 默认绑定
    - 非严格模式下 this 指向全局对象, 严格模式下 this 会绑定到 undefined
- 隐式绑定
    - 当函数引用有上下文对象时, 如 obj.foo() 的调用方式, foo 内的 this 指向 obj
    - this 永远指向最后调用它的那个对象， 匿名函数的 this 永远指向 window
    - 隐式绑定的隐式丢失问题 两种情况
        - 使用另一个变量来给函数取别名
        - 将函数作为参数传递时会被隐式赋值，回调函数丢失 this 绑定
- 显式绑定
    - 通过 call 、 apply 、 bind 方法直接指定 this 的绑定对象, 如f oo.call(obj)
    - 使用 call 或者 apply 的函数是会直接执行的，bind 是创建一个新的函数，需要手动调用才会执行
    - 如果 call 、 apply 、 bind 接收到的第一个参数是空或者 null 、 undefined 的话，则会忽略这个参数
    - forEach 、 map 、filter 函数的第二个参数也是能显式绑定 this 的
- new 绑定
    - 构造函数创建的对象，作用域是可以理解为是这个构造函数，且这个构造函数的 this 是指向新建的对象的，因此this指向这个对象。
- 箭头函数的 this
    - 箭头函数里面的 this 是由外层作用域来决定的，且指向函数定义时的 this 而非执行时
    - 字面量创建的对象，作用域是 window，如果里面有箭头函数属性的话，this 指向的是 window
    - 箭头函数的 this 是无法通过 bind 、 call 、 apply 来直接修改，但是可以通过改变作用域中 this 的指向来间接修改。

[1](https://juejin.im/post/5e6358256fb9a07cd80f2e70)
[2](https://github.com/koala-coding/goodBlog/blob/master/docs/webframe/javascript/this.md)


