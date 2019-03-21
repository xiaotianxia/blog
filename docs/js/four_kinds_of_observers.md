# JS中的观察者们 —— 四种 Observers

观察者(Observer)

## Intersection Observer
```js
var observer = new IntersectionObserver(callback[, options]);
```
做一个视频流的简单demo，当视频滚动到全部出现在屏幕的时候播放，并暂停其他“滚出”屏幕的或者还未“滚进来”的视频。
### demo
<Observers-IntersectionObserver/>

### 推荐阅读
- [Intersection Observer](https://www.w3.org/TR/2018/WD-intersection-observer-20181106/)
- [IntersectionObserver’s Coming into View](https://developers.google.com/web/updates/2016/04/intersectionobserver)
- [Observing Intersection Observers](https://davidwalsh.name/intersection-observers)
- [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
- [IntersectionObserver polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

## Mutation Observer

下面是一个简单的demo,任何对节点的操作都会收到MutationObserver API的通知。
### demo
<Observers-MutationObserver/>

### 推荐阅读
- [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
- [Detect DOM changes with Mutation Observers](https://developers.google.com/web/updates/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [Mutation Observer API](http://javascript.ruanyifeng.com/dom/mutationobserver.html)
- [Getting to Know Mutation Observers](https://dev.opera.com/articles/mutation-observers-tutorial/)

## Resize Observer
window.resize
之前为了监听div的尺寸变化，都将侦听器附加到window中的resize事件

触发：
- 1.元素被插入或移除时触发
- 2.元素display从显示变成 none 或相反过程时触发

不触发
- 1.对于不可替换内联元素不触发
- 2.CSS transform 操作不触发

### demo
<Observers-ResizeObserver/>

实验阶段，好多浏览器没有实现。
<CanIUse :word="'resizeobserver'" />

### 推荐阅读
- [JavaScript中的ResizeObserver](https://www.w3cplus.com/javascript/ResizeObserver-api.html)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [A Look at the Resize Observer JavaScript API](https://alligator.io/js/resize-observer/)
- [THE RESIZE OBSERVER EXPLAINED](https://pawelgrzybek.com/the-resize-observer-explained/)


## Performance Observer

#### demo
<spreadown defaultShow>
	<iframe height="393" style="width: 100%;" scrolling="no" title="PerformanceObserver demo" src="//codepen.io/_tianxia/embed/oVargZ/?height=393&theme-id=33504&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href='https://codepen.io/_tianxia/pen/oVargZ/'>PerformanceObserver demo</a> by Denzel(<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/oVargZ"></show-in-codepen>
</spreadown>

### 推荐阅读
- [Performance Timeline Level 2](https://www.w3.org/TR/2019/WD-performance-timeline-2-20190321/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/)
- [Long Tasks API 1](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/)