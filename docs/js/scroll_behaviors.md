# 简单盘点浏览器的几种滚动行为

## 一， scroll-behavior
```css
scroll-behavior: smooth | auto;
```
### demo 🌰
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

## 二， scroll、 scrollTo、 scrollBy、 scrollIntoView
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

### demo 🌰
<Scroll-ScrollMethods/>

主要代码：
```js
this.scrollWrapper.scrollTo({
	top: this.queryParams.top,
	left: this.queryParams.left,
	behavior: this.queryParams.smooth ? 'smooth' : 'auto'
});
```

## 三， scrollIntoView
```js
element.scrollIntoView(alignToTop);
element.scrollIntoView({
	{
		block: 'start' | 'end' | 'center' | 'nearest', 
		inline: 'start' | 'end' | 'center' | 'nearest', 
	}
});
```

- **alignToTop** 一个Boolean值
- true，默认值，相当于 scrollIntoViewOptions: {block: 'start', inline: 'nearest'}，元素的顶端将和其所在滚动区的可视区域的顶端对齐
- false，相当于 scrollIntoViewOptions: {block: 'end', inline: 'nearest'}，元素的底端将和其所在滚动区的可视区域的底端对齐

### demo 🌰
<Scroll-ScrollIntoView/>

## 四， overscroll-behavior: contain;

```css
overscroll-behavior: contain | auto | none;
overscroll-behavior-x: contain | auto | none;
overscroll-behavior-y: contain | auto | none;
```
- auto - 默认。元素的滚动会传播给祖先元素。
- contain - 阻止滚动链接。滚动不会传播给祖先，但会显示元素内的原生效果。例如，Android 上的炫光效果或 iOS 上的回弹效果，当用户触摸滚动边界时会通知用户。注意：overscroll-behavior: contain 在 html 元素上使用可防止滚动导航操作。
- none - 和 contain 一样，但它也可以防止节点本身的滚动效果（例如 Android 炫光或 iOS 回弹）。

### demo 🌰 
滚动到底感受一下~
<Scroll-Overscroll/>

在此之前，张鑫旭大大就已经试图用js解决这个问题，猛点[这里](https://www.zhangxinxu.com/study/201512/inner-scroll-prevent-parent-scroll.html)

## 五， scroll-snap-*
### demo 🌰
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

更多例子见该[文章](https://css-tricks.com/practical-css-scroll-snapping/)

## 六， history.scrollRestoration
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