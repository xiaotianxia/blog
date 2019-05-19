# CSS AA

## BFC ?
### 什么是BFC？
- 块格式化上下文（Block Formatting Context）
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
### BFC作用
- 1. 解决margin重叠的问题
- 2. 浮动带来的布局问题
- 3. 清除浮动
### BFC的创建方法
- 根元素或其它包含它的元素；
- 浮动(元素的float不为none)；
- 绝对定位元素(元素的position为absolute或fixed)；
- 行内块inline-blocks(元素的display: inline-block)；
- 表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；
- overflow的值不为visible的元素；
- 弹性盒 flex boxes(元素的display: flex或inline-flex)

参考
[1](https://github.com/kaola-fed/blog/blob/master/source/_posts/%E5%AD%A6%E4%B9%A0BFC.md)

## flex 布局
参考
[1](https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb)
[2](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/#flex-basis)

## CSS 阻塞渲染
- CSS 如何阻塞渲染？
    - 浏览器渲染流程：
    　　- 1、浏览器开始解析目标HTML文件，执行流的顺序为自上而下。
    　　- 2、HTML解析器将HTML结构转换为基础的DOM(文档对象模型)，构建DOM树完成后，触发DomContendLoaded事件。
    　　- 3、CSS解析器将CSS解析为CSSOM(层叠样式表对象模型)，一棵仅含有样式信息的树。
    　　- 4、CSSOM和DOM开始合并构成渲染树，每个节点开始包含具体的样式信息。
    　　- 5、计算渲染树中个各个节点的位置信息，即布局阶段。
    　　- 6、将布局后的渲染树显示到界面上。
　　- 可以看出，当cssdom还没构建完成时，页面是不会渲染到浏览器界面的，也就是css加载过程中会阻塞页面的渲染。
- 怎么防止 CSS 阻塞渲染？ 原则就是尽快的提供CSS。
    - 在引入顺序上，CSS 资源的引入要优于js脚本的引入 
    - 关键 CSS 内联，非关键 CSS 预加载，参考 [html-critical-webpack-plugin](https://www.npmjs.com/package/html-critical-webpack-plugin)

https://www.jianshu.com/p/cbd593748567
https://github.com/addyosmani/critical
