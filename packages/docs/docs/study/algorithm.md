# 算法

## 数组去重
```js
function uniq(arr) {
    return [...new Set(arr)]
}
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
    function flatten (arr) {
        return arr.reduce((pre, cur) => {
            return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
        }, [])
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
function underlineToCamelCase (name) {
    if (typeof name !== 'string') {
        throw TypeError('传入参数不正确, 要求为字符串类型');
    }
    return name.replace(/_([a-z|A-Z])/g, function (matchStr, char, index) {
    if (index > 0) {
        return char.toUpperCase();
    }
    return matchStr;
  })
}
```

## 柯里化的通用实现







