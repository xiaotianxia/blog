# 几个有用的Web API——全屏模式

[原文链接](https://denzel.netlify.com/js/useful_webapis_fullscreen.html?_=0987654334523)

## 前言
全屏下播放视频已经很常见了，像这样
![](http://p8rbt50i2.bkt.clouddn.com/fullscreen.jpeg)
而在web里，好多元素都是可以全屏显示的。全屏模式下，一切“闲杂”元素退出，
舞台只为你而亮，请开始你的表演。
![](http://p8rbt50i2.bkt.clouddn.com/blogtimg.jpeg)

今天跟大家一块学习HTML5的全屏模式——fullscreen API。

<!-- 

适用元素  demo
iframe属性 allowfullscreen
document属性 fullscreenElement fullscreenEnabled
css 伪元素 :fullscreen  :backdrop
攻击  http://jackyrong.iteye.com/blog/1830273
浏览器差异

全屏状态下事件响应？

 -->

先看一个例子：
<WebAPIs-FullScreen1/>

可以看到，以上元素都是支持全屏模式的，但在全屏下元素的原本样式也发生了改变，
Chrome下，貌似表现的与**display:inline**一样，虽然我设置的是**display:block**。
不妨在Firefox下试试：Firefox下，则整个元素都是全屏的。
如下图：
chrome：
![](http://p8rbt50i2.bkt.clouddn.com/fullscreen002.png)
firefox：
![](http://p8rbt50i2.bkt.clouddn.com/fullscreen003.png)
关于样式下面会说，我们先从头开始。

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

## 两个属性

### fullscreenElement
documen.fullscreenElement 查看全屏的元素，没有则返回null

注：之前是document.fullscreen，返回true/false，已废弃。

### fullscreenEnabled
document.fullscreenEnabled 当前是否可进入全屏状态。

## 样式

### :fullscreen 

要改变全屏下元素的样式，需要用到:fullscreen伪类。
```css
div:-webkit-full-screen {
	width: 50%;  /*chrome下，width是相对于屏幕宽度的，而且元素自动居中对齐*/
}
```

全屏下chrome会有默认加上白背景色和一个很大的z-index，这样婶的
![](http://p8rbt50i2.bkt.clouddn.com/blogfullscreen001.png)
所以手动改变全屏下的样式是有必要的。
而firefox下，则看到了这样的代码，
![](http://p8rbt50i2.bkt.clouddn.com/fullscreen004.png)
而且试着改变这些样式貌似都不好使，求大神指点啊
```css
div:-moz-full-screen {
	width: 50%!important; 
}
```
从这点上来看，自认为还是Chrome更合理一些呀。

### :backdrop

## 危险？？

## 兼容性

| 标准 | Blink (Chrome & Opera)、Safari (WebKit) | Gecko (Firefox) | Internet Explorer 11 | Edge 
| -   | -  | -  | - | - |
| document.fullscreenEnabled | webkitFullscreenEnabled | mozFullScreenEnabled | msFullscreenEnabled | webkitFullscreenEnabled |
| document.fullscreenElement | webkitFullscreenElement | mozFullScreenElement | msFullscreenElement | webkitFullscreenElement |
| document.onfullscreenchange | onwebkitfullscreenchange | onmozfullscreenchange | MSFullscreenChange | onwebkitfullscreenchange |
| document.onfullscreenerror | onwebkitfullscreenerror | onmozfullscreenerror | MSFullscreenError | onwebkitfullscreenerror |
| document.exitFullscreen()	 | webkitExitFullscreen() | mozCancelFullScreen() | msExitFullscreen() | webkitExitFullscreen() | 
| element.requestFullscreen() | webkitRequestFullscreen() | mozRequestFullScreen() | msRequestFullscreen() | webkitRequestFullscreen() |


<!-- ## 总结 -->



<!-- ## 参考资料 -->
<!-- - [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API) -->
