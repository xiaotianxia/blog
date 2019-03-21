# JS中的观察者们 —— 四种 Observers

观察者(Observer)

## Intersection Observer

### demo
<Observers-IntersectionObserver/>

### 推荐阅读
- [IntersectionObserver’s Coming into View](https://developers.google.com/web/updates/2016/04/intersectionobserver)
- [Observing Intersection Observers](https://davidwalsh.name/intersection-observers)
- [IntersectionObserver.IntersectionObserver()](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)
- [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
- [IntersectionObserver polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

## Mutation Observer

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
- [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)
- [PerformanceObserver()](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/PerformanceObserver)
- [Performance Timeline](https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline)

## 总结
- [现代浏览器支持的不同类型的观察者](https://www.w3cplus.com/javascript/different-types-of-observers-supported-by-modern-browsers.html)

