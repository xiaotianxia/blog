# CSS A

## 盒子模型 ?

### 标准盒子模型
box-sizing: content-box;
![](http://p8rbt50i2.bkt.clouddn.com/WechatIMG5.jpeg)
### IE盒子模型
box-sizing: border-box;
![](http://p8rbt50i2.bkt.clouddn.com/WechatIMG6.jpeg)

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

<<<<<<< HEAD:docs/interview/css_A.md
## 包含块 <i class="el-icon-question"></i>
<i class="el-icon-success"></i>
=======
## 包含块 ?
>>>>>>> 741f1bec15fc239f96f143ea6b4246f2b196351f:docs/study/css_A.md

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










