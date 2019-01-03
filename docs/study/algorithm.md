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
reduce:
```js
    function flatten (arr) {
        return arr.reduce((pre, cur) => {
            return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
        }, [])
    }
```
toString:
```js
    function flatten (arr){
        return arr.toString().split(',');
    }
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