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
<Observers-PerformanceObserver/>

const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        // `name` will be either 'first-paint' or 'first-contentful-paint'.
        const metricName = entry.name;
        const time = Math.round(entry.startTime + entry.duration);

        report('send', 'event', {
            eventCategory: 'Performance Metrics',
            eventAction: metricName,
            eventValue: time,
            nonInteraction: true,
        });
    }
});
observer.observe({entryTypes: ['paint']});

https://juejin.im/post/5b7a51886fb9a019ea01f593


const measure = (fn, name = fn.name) => {
  const startName = prefixStart(name)
  const endName = prefixEnd(name)
  performance.mark(startName)
  fn()
  performance.mark(endName)
  // 调用 measure
  performance.measure(name, startName, endName)
}
const getDuration = entries => {
  // 直接获取 duration
  const [{ duration }] = entries
  return duration
}
const retrieveResult = key => getDuration(performance.getEntriesByName(key))

// 使用时
function foo() {
  // some code
}
measure(foo)
const duration = retrieveResult('foo')
console.log('duration of foo is:', duration)

### 推荐阅读
- [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver)
- [PerformanceObserver()](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver/PerformanceObserver)
- [Performance Timeline](https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline)



## 总结
- [现代浏览器支持的不同类型的观察者](https://www.w3cplus.com/javascript/different-types-of-observers-supported-by-modern-browsers.html)

