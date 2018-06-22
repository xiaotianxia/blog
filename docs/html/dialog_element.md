# HTML5.2新标签 —— dialog 

[原文地址](https://denzel.netlify.com/html/dialog_element.html)

## 前言
继HTML5新增了诸多新的标签之后，HTML5.2又引入了几个现代标签，其中就包括&lt;dialog&gt;标签。
下面跟大家一块学习一下这个标签。

## 举个栗子
下来看一个最简单的例子↓：

<Dialog-Demo1/>

以上就是dialog的原生态样式，未添加任何额外样式。这在Chrome和Firefox里表现是一致的，它们各自的默认样式是这样的——

Chrome：
![](http://p8rbt50i2.bkt.clouddn.com/dialog002.png)
Firefox:
![](http://p8rbt50i2.bkt.clouddn.com/dialog001.png)

嫌丑？！如果给它加上瘦脸（去掉默认样式），加上美颜（css），再加上特效（js），一样可以十分性感:smile: 。

## 一个属性
### open
该属性意味着该对话框是可见的，没有它，这个对话框就会隐藏起来，直到你使用JavaScript来显示它，其实就是给它加上了open属性。

## 三个方法
### show()
### showModal()
两个方法都是打开弹窗，即都会给dialog元素添加一个open属性。
### close()


## 两个事件
### close
当modal关闭的时候触发
### cancel
当按下ESC关闭模态框的时候触发

## 一个伪元素
### ::backdrop
```css
dialog::backdrop{
  background-color: rgba(0, 0, 0, 0.4);
}
```
<Dialog-Demo2/>


https://codepen.io/keithjgrant/pen/eyMMVL
https://keithjgrant.com/posts/2018/meet-the-new-dialog-element/
事件 cancel
form?

## 参考资料
- [&lt;dialog&gt;: The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- [https://codepen.io/keithjgrant/pen/eyMMVL](https://codepen.io/keithjgrant/pen/eyMMVL)
- [Native Popups and Modals With the HTML5 “dialog” Element](https://webdesign.tutsplus.com/tutorials/native-popups-and-modals-with-the-html5-dialog-element--cms-23876)
- [初探HTML5.x新特性《dialog》标签](https://yq.aliyun.com/articles/374584)