# CSS A

## 


https://huruji.github.io/FE-Interview/#/?id=%E5%89%8D%E7%AB%AF%E7%AC%94%E8%AF%95%E9%9D%A2%E8%AF%95%E7%AE%80%E7%AD%94%E9%A2%98%E6%B1%87%E6%80%BB

https://juejin.im/post/5b94d8965188255c5a0cdc02

事件原理，闭包，调用栈，Promise，ES6， 工程化，webpack, 性能优化，跨域，安全问题， React、Redux 思想，Virtual DOM，Diff 算法， 移动端布局，浏览器渲染原理，Event Loop 



## 盒子模型 <i class="el-icon-question"></i>
<i class="el-icon-success"></i>
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

## margin折叠<i class="el-icon-question"></i>
<i class="el-icon-success"></i>
1. 都是整数：取最大的

2. 都是负数：取最小的

3. 一正一负：相加

## 水平、垂直居中<i class="el-icon-question"></i>
<i class="el-icon-success"></i>
参考 
[1](https://juejin.im/post/582c04032f301e00594327d4) 
[2](https://juejin.im/post/58f818bbb123db006233ab2a)
[3](https://www.qianduan.net/css-to-achieve-the-vertical-center-of-the-five-kinds-of-methods/)











