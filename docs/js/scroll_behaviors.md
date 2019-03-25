# 简单盘点浏览器的几种滚动行为

> [原文地址](https://xiaotianxia.github.io/blog/vuepress/js/scroll_behaviors.html?_=2625346544)
	
这两天了解到了浏览器的几个滚动相关的属性和方法。感觉还挺有意思的，而且几个属性、方法的结合使用，可以大大改善用户体验。
写篇文章“蜻蜓点水”地简单概述一下供大家了解，如果想深入研究，还请查阅更详尽的资料。

## 一， scroll-behavior: smooth
> 让页面或元素的滚动如丝般柔滑。
```css
scroll-behavior: smooth | auto;
```
### demo 🌰↓
看右下角↘
<scroll-to-top></scroll-to-top>

就一行代码：
```css
html,
body {
	scroll-behavior: smooth;
}
```
```js
document.scrollingElement.scrollTop = 0;
// or window.scrollTo(0, 0);
```

## 二， .scroll()、 .scrollTo()、 .scrollBy()、 .scrollIntoView()
> 几个滚动方法

同样，几个有关滚动的js方法也可以添加类似 scroll-behavior: smooth 的参数已达到平滑滚动效果 —— scroll、scrollTo、scrollBy、scrollIntoView(scrollIntoView 稍有不同，下面会单独说)。

scroll(x, y)、 scrollTo(x, y)、 scrollBy(x, y)标识分别沿着x和y轴滚动的距离。

它们还都可以以一个scrollOptions对象作为参数，
```js
scrollOptions = {
  	top: 0,
  	left: 0,
  	behavior: 'smooth' //平滑滚动
};
```

### demo 🌰↓
<Scroll-ScrollMethods/>

主要代码：
```js
this.scrollWrapper.scrollTo({
	top: this.queryParams.top,
	left: this.queryParams.left,
	behavior: this.queryParams.smooth ? 'smooth' : 'auto'
});
```

## 三， .scrollIntoView()
> 让元素滚到可视区。
```js
element.scrollIntoView(alignToTop);
element.scrollIntoView({
	block: 'start' | 'end' | 'center' | 'nearest', 
	inline: 'start' | 'end' | 'center' | 'nearest', 
	behavior: 'smooth' | 'auto'
});
```

- **alignToTop** 一个Boolean值
- true，默认值，相当于 scrollIntoViewOptions: {block: 'start', inline: 'nearest'}，元素的顶端将和其所在滚动区的可视区域的顶端对齐
- false，相当于 scrollIntoViewOptions: {block: 'end', inline: 'nearest'}，元素的底端将和其所在滚动区的可视区域的底端对齐

### demo 🌰↓
<Scroll-ScrollIntoView/>

::: warning 注意
从demo中可以看出，小红块的滚动也会导致整个页面的滚动，这一点的用户体验稍微差一点。不知道大家有没有办法解决这个问题，还望赐教...
:::

## 四， overscroll-behavior: contain;
> 多滚动区域，滚动不传播。
```css
overscroll-behavior: contain | auto | none;
overscroll-behavior-x: contain | auto | none;
overscroll-behavior-y: contain | auto | none;
```
- auto - 默认。元素的滚动会传播给祖先元素。
- contain - 阻止滚动链接，滚动不会传播给祖先。
- none - 和 contain 效果一样。

### demo 🌰↓ 
滚动到底感受一下~
<Scroll-Overscroll/>
只需要在滚动容易上加一行代码：
```css
overscroll-behavior: contain;
```
在此之前，张鑫旭大大就已经试图用js解决这个问题，猛点[这里](https://www.zhangxinxu.com/study/201512/inner-scroll-prevent-parent-scroll.html)。

## 五， scroll-snap-*
> 规范滚动元素的定位
### demo 🌰↓
<Scroll-ScrollSnaps/>

主要代码：
```css
.container.y-mandatory {
    scroll-snap-type: y mandatory; 
}
.container.y-proximity {
    scroll-snap-type: y proximity;
}
.container.x-mandatory {
    scroll-snap-type: x mandatory;
}
.container.x-proximity {
    scroll-snap-type: x proximity;
}
.y > .scroll-item {
	scroll-snap-align: start;
}
.x > .scroll-item {
	scroll-snap-align: center;
}
```
- **mandatory**： 强制，强制地定位到某个滚动元素
- **proximity**：邻近，个人理解是：只有当某个滚动元素“**足够**”进入滚动容器的时候才会控制定位
- 这两个概念在使用上略有差异，可以多看几个例子感受一下

这个属性还是很有用的，可以用纯CSS来实现各种多平滚动效果，这里只是简单地体验了一下。
更多例子见该[文章](https://css-tricks.com/practical-css-scroll-snapping/)

## 六， history.scrollRestoration
> 设置返回页面是否返回原滚动位置

在从页面跳转回来的时候，一般浏览器都会“贴心”地返回到该页面原来的滚动位置，该行为由 history.scrollRestoration 属性控制的，默认是“auto”，

若不想回到原来的位置，可将值设为“manual”，手动，即不返回原位置，而是手动返回，此时浏览器会返回到页面顶部。但据测试，“返回”都是瞬间的，即使设置了 scroll-behavior: smooth 也无效。
```js
if ('scrollRestoration' in history) {
  	history.scrollRestoration = 'manual';
}
```
## 参考资料
- [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
- [CSS Scroll Snap Module Level 1](https://www.w3.org/TR/css-scroll-snap-1/)
- [https://css-tricks.com/practical-css-scroll-snapping/](https://css-tricks.com/practical-css-scroll-snapping/)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
- [使用 CSS overscroll-behavior 控制滚动行为：自定义下拉刷新和溢出效果](https://segmentfault.com/a/1190000012014962)
- [History API: Scroll Restoration](https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration)