# CSS A

## 盒子模型 ?

### 标准盒子模型
box-sizing: content-box;
![](../../../../static/WechatIMG5.jpeg)
### IE盒子模型
box-sizing: border-box;
![](../../../../static/WechatIMG6.jpeg)

```css
div {
    width: 200px;
    padding: 10px;
    border: 15px solid #eee;
}
```
box-sizing: content-box; -> width = 200 + 10 * 2 + 15 * 2 = 250px

box-sizing: border-box; -> width = 200px

另： 

1.对于行级元素，margin-top和margin-bottom对于上下元素无效，margin-left和margin-right有效

2.对于相邻的块级元素margin-bottom和margin-top 取值方式
 
参考 [1](https://blog.csdn.net/lxcao/article/details/52620453)

## 文档流 ?

-  CSS的定位机制有3种：普通流、浮动和定位。
-  文档流：从上到下，从左到右，一个挨一个的简单或者叫正常布局。
-  浮动：（float）脱离文档流，不占空间。
-  定位：（position） 

**static**：保持文档流。 

**relative**：相对本身的原始位置发生位移且保持文档流，占空间。当对象定位在浏览器窗口以外，浏览器因此**显示滚动条**。

**absolute**：脱离文档流，不占空间且相对于其**包含块**[2][3]来定位。当对象定位在浏览器窗口以外，浏览器因此**显示滚动条**。

**fixed**：脱离文档流，当对象定位在浏览器窗口以外，浏览器**不会因此显示滚动条**，而当滚动条滚动时，对象始终固定在原来位置。

参考 
[1](https://www.jianshu.com/p/be2ec907c36f) 
[2](https://www.jianshu.com/p/ac7771ea1e9e)
[3](https://www.jianshu.com/p/74c7d9c6f721)
[4](https://github.com/kaola-fed/blog/blob/master/source/_posts/%E5%AD%A6%E4%B9%A0BFC.md)

## 包含块 ?
![1](https://upload-images.jianshu.io/upload_images/7897087-caaac90e45744798.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/720/format/webp)

## margin折叠 ?

1. 都是整数：取最大的

2. 都是负数：取最小的

3. 一正一负：相加

## 水平、垂直居中?

参考 
[1](https://juejin.im/post/582c04032f301e00594327d4) 
[2](https://juejin.im/post/58f818bbb123db006233ab2a)
[3](https://www.qianduan.net/css-to-achieve-the-vertical-center-of-the-five-kinds-of-methods/)

## 清除浮动 ?

- 1. 添加空元素 clear: both;
```css
.clear {
    clear: both; 
    height: 0; 
    height: 0; 
}
```
- 2. 容器 overflow: hidden/auto; 创建BFC（zoom: 1;兼容IE6\7，触发hasLayout）
```css
.box {
    overflow: auto; 
    zoom: 1;
}
```
- 3. 容器也浮动，创建BFC(破坏了父级元素的文档流，不推荐)
```css
.box {
    float: left;
}
```
- 4. 容器使用块级伪元素
```css
.box:before {
    clear: both;
    content: '.';
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
}
```

## display:none; 和 visibility:hidden; 的图片加载问题

- img标签
  - img标签上的图片总是浏览器会加载
- 背景图片
  - visibility:hidden;的元素背景图片总会加载
  - display:none;的元素背景图片总会加载
  - 父级元素是display:none;的子元素的背景图片不会加载
- 其他
  - 伪元素的背景图片，只有伪元素生效，图片才会加载
  - 已经请求过的相同图片不会重复请求
  - 不存在的元素，即时样式表里有写，也不会请求加载

## 伪类 伪元素
![](https://user-gold-cdn.xitu.io/2019/9/1/16ceac430d44fc54?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
![](https://user-gold-cdn.xitu.io/2019/9/1/16ceac464bbf0add?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
[](https://github.com/lgwebdream/FE-Interview/issues/18)











