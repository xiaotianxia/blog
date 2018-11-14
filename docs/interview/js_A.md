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

## js原型 <i class="el-icon-question"></i>

## 继承

## js 类型判断 <i class="el-icon-question"></i>

## 跨域

## get post
![](http://p8rbt50i2.bkt.clouddn.com/WechatIMG8.jpeg)
