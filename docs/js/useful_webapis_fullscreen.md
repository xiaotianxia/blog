# 几个有用的Web API——全屏模式

[原文链接](https://denzel.netlify.com/js/useful_webapis_fullscreen.html?_=0987654334523)

## 前言
全屏下播放视频已经很常见了，像这样
![](http://pq3mt9wke.bkt.clouddn.com/fullscreen.jpeg)
而在web页面里，几乎所有元素都是可以全屏显示的。全屏模式下，一切“闲杂”元素退出，
舞台只为你而亮，请开始你的表演。
![](http://pq3mt9wke.bkt.clouddn.com/blogtimg.jpeg)

今天跟大家一块学习HTML5的全屏模式——fullscreen API。

先看一个例子↓：
<WebAPIs-FullScreen1/>

可以看到，以上元素都是支持全屏模式的，但在全屏下元素的原本样式也发生了改变，
Chrome和Safari下，貌似表现的与**display:inline**一样，虽然我设置的是**display:block**。
不妨在Firefox下试试：Firefox下，则整个元素都是全屏的。
如下图：

Chrome、Safari：
![](http://pq3mt9wke.bkt.clouddn.com/fullscreen002.png)
Firefox：
![](http://pq3mt9wke.bkt.clouddn.com/fullscreen003.png)
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


## 两个属性

### fullscreenElement
document.fullscreenElement 查看全屏的元素，没有则返回null

这个的支持度不高。

注：之前是document.fullscreen，返回true/false，已废弃。

### fullscreenEnabled
document.fullscreenEnabled 当前是否支持进入全屏状态。

## 样式

### :fullscreen 伪类

要改变全屏下元素的样式，需要用到:fullscreen伪类。
```css
div:-webkit-full-screen {
	width: 50%;  /*Chrome下，width是相对于屏幕宽度的，而且元素自动居中对齐*/
}
```

全屏下Chrome会有默认加上白背景色和一个很大的z-index，这样婶的
![](http://pq3mt9wke.bkt.clouddn.com/blogfullscreen001.png)
所以手动改变全屏下的样式是有必要的。

而Firefox下，则看到了这样的代码，
![](http://pq3mt9wke.bkt.clouddn.com/fullscreen004.png)
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
    background: green;
}
```
这个自测只有最新的Firefox支持。
如下图：
![](http://pq3mt9wke.bkt.clouddn.com/blogfullscreen005.png)

>另：backdrop这个词还有两个地方用到：一个是[dialog](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dialog)这个标签的伪元素，用来设置弹窗背景样式，这个浏览器的支持还是很好的。
还有一个是css滤镜[backdrop-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter)，可自行查看。

再来一个例子↓，里面用到了[这个库](https://github.com/rafrex/fscreen)，它对各个方法和属性做了很好的兼容，在开发中可以作参考。
用法很简单，如
```js
fscreen.requestFullscreen(element); //用来代替element.requestFullscreen()
```
<WebAPIs-FullScreen2/>

其中部分代码：
```js
import fscreen from './fscreen.js';

export default {
	data () {
		return {
			fullscreen: false
		}
	},

	computed: {
		fullscreenEnabled () {
			return fscreen.fullscreenEnabled;
		},

		fullscreenElement () {
			return JSON.stringify(fscreen.fullscreenElement)
		}
	},

	methods: {
		onTriggerClick (e) {
			if(this.fullscreen) {
				this.onExitFullsreen();
			} else {
				this.requestFullscreen(document.querySelector('.fullscreen-content'));
			}
			this.fullscreen = !this.fullscreen;
		},

		requestFullscreen (ele) {
			if(fscreen.requestFullscreen) {
				return fscreen.requestFullscreen(ele);
			} else {
				alert('浏览器不支持全屏API');
			}
		},

		onExitFullsreen () {
			if(fscreen.exitFullscreen) {
				return fscreen.exitFullscreen();
			} else {
				alert('浏览器不支持全屏API');
			}
		}
	},

	mounted () {
		fscreen.addEventListener('fullscreenchange', e => {
			this.$message.info(this.fullscreen ? '进入全屏' : '退出全屏');
			console.log(e);
		});

		fscreen.addEventListener('fullscreenerror', e => {
			this.$message.info('全屏切换出错');
			console.log(e);
		});
	}
}
```

```css
.block {
	display: block;
	height: 50px;
	width: 200px;
	margin: 10px auto;
	cursor: pointer;
	border-radius: 5px;
	text-align: center;
	line-height: 50px;
	font-size: 18px;
	color: #fff;
	background-color: #2d3436;
}
.block:before {
	content: '正常模式';
	color: #fff;
}
.fullscreen-content {
	width: 400px;
	margin: 10px auto;
	text-align: center;
}
.fullscreen-content:fullscreen .block {
	background-color: #ff7675;
}
.fullscreen-content:fullscreen .block:before {
	content: '全屏模式(点击退出)';
}
.fullscreen-content::backdrop {
	position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: green;
}
```

## 危险

有人提出这个API有个问题，那就是容易造成欺骗。在[这里](http://feross.org/html5-fullscreen-api-attack/)有个demo，
比如某个链结写的是 http://www.×××.com ，大家以为是美国银行， 但是一点进去，因为使用了全屏幕API，就会欺骗到人，被成功钓鱼。
大概意思是这样婶的，看另一个例子↓：
<WebAPIs-FullScreen3/>

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
- 还有啥呢...

## 参考资料
- [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API)
- [Element.requestFullscreen()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullScreen)
- [Fullscreen API](https://fullscreen.spec.whatwg.org/)
- [How to Use the HTML5 Full-Screen API](https://www.sitepoint.com/html5-full-screen-api/)
- [https://github.com/rafrex/fscreen](https://github.com/rafrex/fscreen/blob/master/src/index.js)
