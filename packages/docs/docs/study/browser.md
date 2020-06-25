# 浏览器原理

## 输入 url 后发生了什么
[见参考]（https://juejin.im/post/5e82aa8df265da47ca6910b5#heading-3

### async defer
**延迟加载**：
- defer 和async 属性 提供给开发者一个方式来告诉浏览器哪些脚本是需要异步加载的。

**加载及执行顺序**：
![](https://camo.githubusercontent.com/78835bfd6ba8899decaabec54b713bced79907c2/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031382f362f31362f313634303635366537303736356163373f773d36383926683d31313226663d6a70656726733d3136383935)
- 在加载多个JS脚本的时候，async是无顺序的加载，而defer是有顺序的加载。

参考：
[1](https://www.zcfy.cc/article/building-the-dom-faster-speculative-parsing-async-defer-and-preload-x2605-mozilla-hacks-8211-the-web-developer-blog-4224.html?t=new)
[2](https://github.com/ljianshu/Blog/issues/51)

### preload  prefetch dns-prefetch
**dns-prefetch 多用于预解析CDN的地址的DNS**
```html
    <link rel="dns-prefetch" href="//example.com">
```
**预加载**：
- preload 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源；

**preload 的资源加载顺序将被提前**：
- prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源。
```html
    <link rel="preload" href="very_important.js" as="script">
    <!-- 预加载字体你还必须设置crossorigin 属性，否则可能加载两次 -->
    <link rel="preload" href="font.woff" as="font" crossorigin>
    <!-- as还可以是image、style、audio、video -->
```

**一个完整的结构**：
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Faster</title>
        <link rel="dns-prefetch" href="//cdn.com/">
        
        <link rel="preload" href="//js.cdn.com/p_1.js" as="script">
        <link rel="preload" href="//js.cdn.com/p_2.js" as="script">
        <link rel="preload" href="//js.cdn.com/p_3.js" as="script">

        <link rel="prefetch" href="//js.cdn.com/prefetch.js">
    </head>
    <body>

    <script type="text/javascript" src="//js.cdn.com/p_1.js" defer></script>
    <script type="text/javascript" src="//js.cdn.com/p_2.js" defer></script>
    <script type="text/javascript" src="//js.cdn.com/p_3.js" defer></script>
    </body>
</html>
```

## 重绘与重排 ?

**重绘(repaint、redraw)**: 一个元素外观的改变所触发的浏览器行为，例如改变visibility、outline、背景色等属性。浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。重绘不会带来重新布局，并不一定伴随回流。

**重排(reflow，回流)**: 若渲染树的一部分更新，且尺寸变化，就会发生重排，可以理解为渲染树需要重新计算；重排会从 html 这个 root frame 开始递归往下，依次计算所有的结点几何尺寸和位置。

注意：回流一定会触发重绘，而重绘不一定会回流。

**优化reflow、repaint触发次数**

- 避免逐个修改节点样式，尽量一次性修改
- 使用DocumentFragment将需要多次修改的DOM元素缓存，最后一次性append到真实DOM中渲染
- 可以将需要多次修改的DOM元素设置display:none，操作完再显示。（因为隐藏元素不在render树内，因此修改隐藏元素不会触发回流重绘）
- 避免多次读取某些属性
- 将复杂的节点元素脱离文档流，降低回流成本
- 使用 transform 替代 top
- 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
- 不要把节点的属性值放在一个循环里当成循环里的变量。
```js
for(let i = 0; i < 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
```
- 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
- 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
- CSS 选择符从右往左匹配查找，避免节点层级过多
- 将频繁重绘或者回流的节点设置为图层，图层能够阻止该节点的渲染行为影响别的节点。比如对于 video 标签来说，浏览器会自动将该节点变为图层。

参考
[1](https://segmentfault.com/a/1190000011297958#articleHeader1)
[2](https://mp.weixin.qq.com/s?timestamp=1545144084&src=3&ver=1&signature=7YtbKqhExARr1YWMXH7v1D*EX2qKZ2Hkc8qCBP8jhJxsO7Oj8*aGya4vtcJedluvnbXXqK9YPvc*8P6O9lz7e0ruXAfGQn3buRvdEyYpJIc8uvTklHPwIJoMkjKrlkBNv3NDvGg6zRQEKuBYefXXEfX8hwHHrMpOsIiT0SWDYh0=)