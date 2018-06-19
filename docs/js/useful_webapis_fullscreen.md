# 几个有用的Web API——全屏模式

[原文链接](https://denzel.netlify.com/js/useful_webapis_fullscreen.html?_=0987654334523)

## 前言
全屏下播放视频已经很常见了，像这样
![](http://p8rbt50i2.bkt.clouddn.com/fullscreen.jpeg)
而在web页面里，几乎所有元素都是可以全屏显示的。全屏模式下，一切“闲杂”元素退出，
舞台只为你而亮，请开始你的表演。
![](http://p8rbt50i2.bkt.clouddn.com/blogtimg.jpeg)

今天跟大家一块学习HTML5的全屏模式——fullscreen API。

先看一个例子：
<WebAPIs-FullScreen1/>

可以看到，以上元素都是支持全屏模式的，但在全屏下元素的原本样式也发生了改变，
Chrome和Safari下，貌似表现的与**display:inline**一样，虽然我设置的是**display:block**。
不妨在Firefox下试试：Firefox下，则整个元素都是全屏的。
如下图：

Chrome、Safari：
![](http://p8rbt50i2.bkt.clouddn.com/fullscreen002.png)
Firefox：
![](http://p8rbt50i2.bkt.clouddn.com/fullscreen003.png)
关于样式稍后再说，我们先从头开始看。

首先看下mdn的解释：
::: tip 
只有包含在顶层文档内部的标准HTML元素、svg元素和math元素，
以及拥有**allowfullscreen**属性的iframe的内部元素可以进入全屏模式。
这意味着在iframe内部的元素，以及object的内部元素不能进入全屏模式。
:::
iframe可以全屏，但需要有属性allowfullscreen。

## 两个方法

### requestFullscreen()
触发元素的全屏模式：Element.requestFullscreen()

### exitFullscreen()
退出全屏：document.exitFullscreen()

## 两个事件

### fullscreenchange
元素进入和退出全屏时都会触发

### fullscreenerror
元素进入和退出全屏发生错误时触发

遗憾的是，浏览器目前还没支持...

## 两个属性

### fullscreenElement
document.fullscreenElement 查看全屏的元素，没有则返回null

注：之前是document.fullscreen，返回true/false，已废弃。

### fullscreenEnabled
document.fullscreenEnabled 当前是否可进入全屏状态。

## 样式

### :fullscreen 伪类

要改变全屏下元素的样式，需要用到:fullscreen伪类。
```css
div:-webkit-full-screen {
	width: 50%;  /*Chrome下，width是相对于屏幕宽度的，而且元素自动居中对齐*/
}
```

全屏下Chrome会有默认加上白背景色和一个很大的z-index，这样婶的
![](http://p8rbt50i2.bkt.clouddn.com/blogfullscreen001.png)
所以手动改变全屏下的样式是有必要的。

而Firefox下，则看到了这样的代码，
![](http://p8rbt50i2.bkt.clouddn.com/fullscreen004.png)
而且试着改变这些样式貌似都不好使，求大神指点啊！！
```css
div:-moz-full-screen {
	width: 50%!important; 
}
```
从这点上来看，自认为还是Chrome更合理一些呀。

### :backdrop 伪元素
全屏模式的元素下的即刻渲染的盒子（并且在所有其他在堆中的层级更低的元素之上），可用来给下层文档设置样式或隐藏它。
```css
.block::backdrop {
    background: red;
}
```
然而在浏览器中并不好使:joy: 。
<WebAPIs-FullScreen2/>

backdrop这个词还有两个地方用到：一个是[dialog](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dialog)这个标签的伪元素，用来设置弹窗背景样式，这个浏览器的支持还是很好的。
还有一个是css滤镜[backdrop-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter)，可自行查看。

## 危险？？http://jackyrong.iteye.com/blog/1830273

一次只能一个元素全屏？

## 兼容性
手机端不出意料的全军覆没，pc端如下：

（各个浏览器还真是任性，各自的写法真实五花八门呐！来感受一下~）

| 标准 | Blink (Chrome & Opera)、Safari (WebKit)、Edge | Gecko (Firefox) | Internet Explorer 11 |  
| -   | -  | -  | - | - |
| document.fullscreenEnabled | webkitFullscreenEnabled | mozFullScreenEnabled | msFullscreenEnabled |
| document.fullscreenElement | webkitFullscreenElement | mozFullScreenElement | msFullscreenElement | 
| document.onfullscreenchange | onwebkitfullscreenchange | onmozfullscreenchange | MSFullscreenChange | 
| document.onfullscreenerror | onwebkitfullscreenerror | onmozfullscreenerror | MSFullscreenError | 
| document.exitFullscreen()	 | webkitExitFullscreen() | mozCancelFullScreen() | msExitFullscreen() | 
| element.requestFullscreen() | webkitRequestFullscreen() | mozRequestFullScreen() | msRequestFullscreen() |
| :fullscreen | :-webkit-full-screen | :-moz-full-screen | :-ms-fullscreen |


## 总结
可以用来做啥呢？
- 播放器全屏，司空见惯
- 页面小游戏全屏，如canvas游戏等
- 富文本编辑器全屏

## 参考资料
- [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [Element.requestFullscreen()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen)
- [Fullscreen API](https://fullscreen.spec.whatwg.org/)
- [How to Use the HTML5 Full-Screen API](https://www.sitepoint.com/html5-full-screen-api/)
