# 算法

## 数组去重
```js
function uniq(arr) {
    return [...new Set(arr)]
}
```

## 取交集
```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let intersect = new Set([...a].filter(x => b.has(x)));
```

## 取多个数组的交集

```js
var intersection = function(...args) {
    if (args.length === 0) {
    return []
  }
  if (args.length === 1) {
    return args[0]
  }
  return [...new Set(args.reduce((result, arg) => {
    return result.filter(item => arg.includes(item))
  }))]
};

```

## 取差集
```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let difference = new Set([...a].filter(x => !b.has(x)));
```

## 最快捷的数组求最大值 ?
```js
var arr = [ 1,5,1,7,5,9];
Math.max(...arr);  // 9 

//or
Math.max.apply(Math, arr);
//or
Math.max.call(Math, ...arr);
//or
Math.max.bind(Math, ...arr)();
```

## 数组扁平化
reduce递归：
```js
    function flattenDeep (arr) {
        return arr.reduce((acc, val) =>
            Array.isArray(val) 
            ? acc.concat(flattenDeep(val))
            : acc.concat(val),
        []);
    }
```
迭代：
```js
const flatten = function (arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}
```
toString: 只适用于简单数组
```js
    function flatten (arr){
        return arr.toString().split(',');
        //return arr.join(',').split(',').map(item => Number(item))
    }
```
ES10:
```js
    arr.flat(Infinity);
```

## 数字转中文
```js
function money2Chinese(num) {
    if(typeof num !== 'number') {
        throw new Error('参数为数字')
    };

    let strOutput = "";
    let strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
    num += "00";

    const intPos = num.indexOf('.');

    if (intPos >= 0) {
        num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
    }
    strUnit = strUnit.substr(strUnit.length - num.length);

    for (let i = 0; i < num.length; i++) {
      strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
    }
    
    return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元");
}
```

## 驼峰写法转下划线写法
```js
function camelCaseToUnderline (name) {
    if (typeof name !== 'string') {
        throw TypeError('传入参数不正确, 要求为字符串类型');
    }
    return name.replace(/[A-Z]/g, function (val, index) {    
    let char = val.toLowerCase();

    // 首字母为大写时无需加入下划线
    return index === 0 ? char : '_' + char;
  })
}
```

## 下划线写法转驼峰写法
```js
function underlineToCamelCase (s) {
    return s.replace(/-\w/g, function(x) {
        return x.slice(1).toUpperCase();
    })
}
```

## 柯里化的通用实现
```js
const curry = (fn, ...args) => {
    args.length < fn.length
        //参数长度不够时，重新柯里化该函数。等待接收新参数
        ? (...arguments) => curry(fn, ...args, ...arguments)
        //参数长度满足时，执行函数
        : fn(...args);
}
```
举例：
```js
function sumFun (a, b, c) {
    return a + b + c;
} 
var sum = curry(sumFun);
sum(1,2,3)  // 6
sum(1,2)(3)  // 6
sum(1)(2)(3)  // 6
sum(1)(2,3)  // 6
```
https://juejin.im/post/5bf9bb7ff265da616916e816
https://www.zhangxinxu.com/wordpress/2013/02/js-currying/




