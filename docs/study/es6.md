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
    - 2. Object.keys() Object.entrsetPrototypeOfies() Object.values() 
    - 3. Object.getOwnPropertyDescriptors()
    - 4. __proto__属性，Object.()，Object.getPrototypeOf() 设置对象的原型，非常重要
- 12. 循环：for...of
- 13. Class 
- 14. Module 
    - 1. import 
    - 2. export
- 15. Number isFinite isNan isInteger
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

## 手写 promise
[这里](diy.html#diy-promise)

## promise 异常捕获
在多个Promise调用链中如何在某个then中捕捉到错误，但是不停止then语句的执行？

## Proxy