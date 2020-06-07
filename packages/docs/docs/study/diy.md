# DIY系列

## call 

```js
/*
** var value = 2;
** var obj = {
**     value: 1
** };
** 
** function bar(name, age) {
**     return {
**         value: this.value,
**         name: name,
**         age: age
**     }
** }
** 
** bar.call2(null); // 2
** 
** bar.call2(obj, 'kevin', 18);
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
*/
Function.prototype.call2 = function (context) {
    //context undefined、null、'' -> window
    //context true\false -> {}
    context = typeof context == 'boolean' ? {} : (context ? (typeof context == 'object' ? context : {}) : window);
    //临时方法fn，存储bar函数
    context.fn = this;
    //执行该方法，参数不包括obj本身  es6写法... 也可遍历arguments获取
    var result = context.fn(...[...arguments].slice(1));
    //删除该方法
    delete context.fn;
    //返回bar的返回值
    return result;
}
```

## apply 
```js
//只需把fn的参数换成arr即可
Function.prototype.apply2 = function (context, arr) {
    context = typeof context == 'boolean' ? {} : (context ? (typeof context == 'object' ? context : {}) : window);
    context.fn = this;
    var result;
    if(arr) {
        result = context.fn(...arr);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}
```

## bind
bind的特点：
- 1.bind() 方法会创建一个新函数。
- 2.一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。此时的this指向实例对象，而不是context。
```js
/*
** var foo = {
**     value: 1
** };
** 
** function bar(name, age) {
**     console.log(this.value);
**     console.log(name);
**     console.log(age);
** 
** }
** 
** var bindFoo = bar.bind(foo, 'daisy');
** bindFoo('18');
** // 1
** // daisy
** // 18
** bind的时候可以传参，执行bind的时候也可以传参
*/

//利用call和apply 只满足条件1
Function.prototype.bind2 = function (context) {
    context = typeof context == 'boolean' ? {} : (context ? (typeof context == 'object' ? context : {}) : window);
    //bind的时候 取 除context以外的参数
    var args = Array.prototype.slice.call(arguments, 1);
    //执行环境是bar
    var self = this;
    return function () {
        //取执行bin时候的参数
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(context, args.concat(bindArgs));
    }
}
```
```js
// 满足条件1 2 
Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("not a function - this is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    // 利用一个中间函数，用于继承bar，且bar不被修改原型
    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}
```

参考
[1](https://juejin.im/post/59e365856fb9a0450808b046)
[2](https://jothy1023.github.io/2016/10/16/js-bind-es5-es6/)

## promise

https://juejin.im/post/5c2b34a15188257abf1d96eb
https://juejin.im/post/5a006ec351882554b836f1fd

https://github.com/Jocs/jocs.github.io/issues/7

## instanceof

```js
// 对象a的__proto__属性指向其构造函数的prototype
// L insatanceof R ==> L.__proto__[n个] === R.prototype
function instance_of (L, R) {//L 表示左表达式，R 表示右表达式
    var O = R.prototype;
    L = L.__proto__;
    while (true) { ·
        if (L === null) 
            return false; 
        if (O === L)  // 这里重点：当 O 严格等于 L 时，返回 true 
            return true; 
        L = L.__proto__; 
    } 
}
```

## new
new 关键字调用函数都的具体过程:
- 首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
- 把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象
- 如果构造函数返回一个非基本类型的值，则返回这个值，否则返回上面创建的对象
```js
function _new(fn, ...arg) {
    var obj = Object.create(fn.prototype);
    var result = fn.apply(obj, arg);
    return Object.prototype.toString.call(result) == '[object Object]' ? result : obj;
}
```
[1](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/12)

## 写一个简单的模板引擎实现
/*
let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let data = {
    name: '姓名',
    age: 18
}
render(template, data); // 我是姓名，年龄18，性别undefined
*/

```js
function render(template, data) {
    const reg = /\{\{(\s+)?(\w+)(\s+)?}\}/; // 模板字符串正则  
    if (reg.test(template)) { // 判断模板里是否有模板字符串
        const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
        template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
        return render(template, data); // 递归的渲染并返回渲染后的结构
    }
    return template; // 如果模板没有模板字符串直接返回
}
```

```js
function render(tpl, data) {
    return tpl.replace(/\{\{(\s+)?(\w+)(\s+)?}\}/g, (match, key) => { return data[key.trim()] });
}
```

## compose 实现
举例：
```js
const add = num => num  + 10;
const multiply = num => num * 2;
const foo = compose(multiply, add);
foo(5) => 30;
```
实现：
```js
// 摘自 https://github.com/reactjs/redux/blob/master/src/compose.
export default function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
```
