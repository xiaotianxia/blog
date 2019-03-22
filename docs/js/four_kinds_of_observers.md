# JS中的观察者们 —— 四种 Observers

观察者(Observer)

## Intersection Observer
当你想监听某个元素，当它在视口中可见的时候希望可以得到通知，这个API就是最佳的选择了。以往我们的做法是绑定容器的scroll事件，或者设定时器不停地调用getBoundingClientRect() 获取元素位置，
这样做的性能会很差，因为每次获取元素的位置都会引起整个布局的重新计算。还有一个场景是，如果你的元素被放在iframe里，如一些广告，想要知道他们何时出现几乎是不可能的。

![demo](http://poijlzkaq.bkt.clouddn.com/observer001.gif)

现在，我们完全可以把这些工作交给IntersectionObserver了。

### 怎么用？

实例化一个观察器：
```js
var observer = new IntersectionObserver(callback[, options]);
```

- callback 是一个回调函数，里面返回监听目标元素的实时数据组成的数组
  - time 时间戳
  - rootBounds 根元素的位置信息
  - boundingClientRect 目标元素的位置信息
  - intersectionRect 交叉部分的位置信息
  - intersectionRatio 目标元素的可见比例，看下图示
  - target等
- options 是一些配置
  - root 目标元素的**祖先元素**，即该元素必须是目标元素的直接或间接父级
  - rootMargin 一个在计算交叉值时添加至root的边界盒中的一组偏移量，写法类似CSS的margin
  - threshold 规定了一个监听目标与边界盒交叉区域的比例值，可以是一个具体的数值或是一组0.0到1.0之间的数组

![smalldemo](http://poijlzkaq.bkt.clouddn.com/intersectratio.png)

开始监听元素：
```js
observer.observe(target)
```
这两步之后，就可以在callback里补全业务代码了。

此外，还有两个方法：
- 停止对某目标的监听
```js
observer.unobserve(target)
```
- 终止对所有目标的监听
```js
observer.disconnect()
```

### demo 🌰↓
做一个视频流的简单demo，当视频滚动到全部出现在屏幕的时候播放，并暂停其他“滚出”屏幕的或者还未“滚进来”的视频。

（滚动看效果，括号里显示的是每个元素在观察视口的可见比例）

<Observers-IntersectionObserver/>

主要代码：
```js
methods: {
    reserveCallback (entries) {
    	let ratio = entries[0].intersectionRatio,
    		$target = entries[0].target;
    	if(1 - ratio <= 0.03) {
    		this.onPlay($target);
    	}
    },

    onPlay ($target) {
    	//播放视频
    },

    onPause ($target) {
    	//暂停视频
    },

    addObserver ($targets) {
    	for(let i = 0, len = $targets.length; i < len; i ++) {
            //开始监听
    		this.observer.observe($targets[i]);
    	}
    }
},

mounted () {
    let $referenceBox = document.querySelector('.js-content'),
    	$targets = document.querySelectorAll('.js-item');
    //实例化观察器
    this.observer = new IntersectionObserver(this.reserveCallback, {
    	root: $referenceBox,
    	rootMargin: '0px',
    	threshold: [0.7, 0.8, 0.9, 1]
    });

    this.addObserver($targets);
    }
```
上面的demo也有很大的不足之处：对所有的视频元素都进行了监听，并且对“消失”的视频没有关掉观察器，当视频数增多时，势必会引起性能上的问题。
如果真的应用在业务中还需要进一步的优化。

### 其他应用
除了上面提到的广告展示，还可以做懒加载：在列表的底部设置一个用来监听的元素，当它出现时，加载更多的内容，同时改变该监听元素的位置到底部继续监听。

除了这些，还可以做什么呢？

### 参考资料
- [Intersection Observer](https://www.w3.org/TR/2018/WD-intersection-observer-20181106/)
- [IntersectionObserver’s Coming into View](https://developers.google.com/web/updates/2016/04/intersectionobserver)
- [Observing Intersection Observers](https://davidwalsh.name/intersection-observers)
- [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
- [IntersectionObserver polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

## Mutation Observer
当我们想知道某个元素在某个时候发生了具体哪些变化时，MutationObserver便是最佳选择了。
### 怎么用

实例化一个观察器：
```js
var observer = new MutationObserver(callback);
```
开始监听：
```js
observer.observe(target, config);
```
- config 填写需要监听属性
  - attributes 布尔类型 属性的变动
  - childList 布尔类型 子节点的变动（指新增，删除或者更改）
  - characterData 布尔类型 节点内容或节点文本的变动。
  - subtree 布尔类型 是否将该观察器应用于该节点的所有后代节点
  - attributeOldValue 布尔类型 观察attributes变动时，是否需要记录变动前的属性值
  - characterDataOldValue 布尔类型 观察characterData变动时，是否需要记录变动前的值
  - attributeFilter 数组 需要观察的特定属性（比如['class','src']）

下面是一个简单的demo,任何对节点的操作都会收到MutationObserver API的通知。
### demo 🌰↓
<Observers-MutationObserver/>

主要代码：
```js
methods: {
    observerCallBack (mutations) {
    	//do log
    },

    onAddAttr () {
    	// toggle attribute 'd'
    }
},

mounted () {
    this.$list = document.querySelector('.js-list');

    let config = {
    	attributes: true, 
    	childList: true, 
    	characterData: true,
    	subtree: true
    };
    let observer = new MutationObserver(this.observerCallBack);
    observer.observe(this.$list, config);
}
```

### 参考资料
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

### demo 🌰↓
<Observers-ResizeObserver/>

实验阶段，好多浏览器没有实现。
<CanIUse :word="'resizeobserver'" />

### 推荐阅读
- [JavaScript中的ResizeObserver](https://www.w3cplus.com/javascript/ResizeObserver-api.html)
- [Resize Observer 1](https://wicg.github.io/ResizeObserver/)
- [A Look at the Resize Observer JavaScript API](https://alligator.io/js/resize-observer/)
- [THE RESIZE OBSERVER EXPLAINED](https://pawelgrzybek.com/the-resize-observer-explained/)


## Performance Observer

#### demo 🌰↓
<spreadown defaultShow>
	<iframe height="393" style="width: 100%;" scrolling="no" title="PerformanceObserver demo" src="//codepen.io/_tianxia/embed/oVargZ/?height=393&theme-id=33504&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href='https://codepen.io/_tianxia/pen/oVargZ/'>PerformanceObserver demo</a> by Denzel(<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/oVargZ"></show-in-codepen>
</spreadown>

### 推荐阅读
- [Performance Timeline Level 2](https://www.w3.org/TR/2019/WD-performance-timeline-2-20190321/)
- [Paint Timing 1](https://w3c.github.io/paint-timing/)
- [Long Tasks API 1](https://www.w3.org/TR/2017/WD-longtasks-1-20170907/)