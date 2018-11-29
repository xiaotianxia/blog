# js A

## ajax请求的过程 <i class="el-icon-question"></i>
<i class="el-icon-success"></i>
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

## DOM事件流 <i class="el-icon-question"></i>
<i class="el-icon-success"></i>
传递方向：先自顶向下(capture阶段), 再自下而上(bubble阶段)，即先执行捕获类型的事件，再执行冒泡类型的事件，最后执行浏览器默认行为。

参考[1](https://juejin.im/post/5bf6330f6fb9a049b41c1934)

## js原型 <i class="el-icon-question"></i>
<i class="el-icon-success"></i>

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







## 继承 <i class="el-icon-question"></i>
<i class="el-icon-success"></i>


## js 类型判断 <i class="el-icon-question"></i>

## 跨域<i class="el-icon-question"></i>
<i class="el-icon-success"></i>

## get post<i class="el-icon-question"></i>
<i class="el-icon-success"></i>
![](http://p8rbt50i2.bkt.clouddn.com/WechatIMG8.jpeg)
