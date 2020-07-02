# 浏览器原理

## 输入 url 后发生了什么
[见参考]（https://juejin.im/post/5e82aa8df265da47ca6910b5#heading-3

## async defer
**延迟加载**：
- defer 和async 属性 提供给开发者一个方式来告诉浏览器哪些脚本是需要异步加载的。

**加载及执行顺序**：
![](../../../../static/defer-async.jpg)
- 在加载多个JS脚本的时候，async是无顺序的加载，而defer是有顺序的加载。

参考：
[1](https://juejin.im/post/5e143104e51d45414a4715f7#heading-27)

## preload  prefetch dns-prefetch
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
for (let i = 0; i < 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
```
- 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
- 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
- CSS 选择符从右往左匹配查找，避免节点层级过多
- 将频繁重绘或者回流的节点提升为合成层。将元素提升为合成层有以下优点：
    - 合成层的位图，会交由 GPU 合成，比 CPU 处理要快
    - 当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层
    - 对于 transform 和 opacity 效果，不会触发 layout 和 paint，如果不是合成层，则其依然会触发 paint

元素提升为合成层方式：
- 最常用的方式：translate3d、translateZ
- opacity 属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）
- filters
- will-change 属性，一般配合opacity与translate使用（而且经测试，除了上述可以引发硬件加速的属性外，其它属性并不会变成复合层）
- video 、 iframe 、 canvas 、webgl 等元素
- 其它，譬如以前的flash插件
[1](https://segmentfault.com/a/1190000011297958#articleHeader1)

## 为什么浏览器读取css规则的顺序是从右到左

从右到左匹配性能更好，效率更高。

根据2009年Google和Firefox的测试，right-to-left方式可以避免70%左右的无效匹配。right-to-left 比 left-to-right 的无效匹配次数更少，从而匹配快、性能更优，所以目前主流的浏览器基本采取right-to-left的方式读取css规则。

所以后代选择器不是那么被推荐的选择器。

## CSS 阻塞渲染
- CSS 如何阻塞渲染？[1](https://juejin.im/post/5e143104e51d45414a4715f7#heading-20)
    - 浏览器渲染流程：
        - 1、浏览器开始解析目标HTML文件，执行流的顺序为自上而下。
        - 2、HTML解析器将HTML结构转换为基础的DOM(文档对象模型)，构建DOM树完成后，触发DomContendLoaded事件。
        - 3、CSS解析器将CSS解析为CSSOM(层叠样式表对象模型)，一棵仅含有样式信息的树。
        - 4、CSSOM和DOM开始合并构成渲染树，每个节点开始包含具体的样式信息。
        - 5、计算渲染树中个各个节点的位置信息，即布局阶段。
        - 6、将布局后的渲染树显示到界面上。
        - 可以看出，当CSSOM还没构建完成时，页面是不会渲染到浏览器界面的，也就是css加载过程中会阻塞页面的渲染。
- 怎么防止 CSS 阻塞渲染？ 原则就是尽快的提供CSS。
    - 在引入顺序上，CSS 资源的引入要优于js脚本的引入 
    - 关键 CSS 内联，非关键 CSS 预加载，参考 [html-critical-webpack-plugin](https://www.npmjs.com/package/html-critical-webpack-plugin)
    - 利用“媒体查询”：link标签的media属性，只有符合“媒体查询”条件时，浏览器才阻塞渲染，直至样式表下载并处理完毕，否则不会阻塞

[1](https://www.jianshu.com/p/cbd593748567)
[2](https://github.com/addyosmani/critical)

## 关键渲染路径(Critical Rendering Path)? 如何优化 ?
[1](https://juejin.im/post/5e143104e51d45414a4715f7#heading-22)