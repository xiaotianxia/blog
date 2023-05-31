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



## z-index
![层叠水平](https://raw.githubusercontent.com/happylindz/blog/master/images/z-index/6.jpg)

参考
[1](https://github.com/happylindz/blog/issues/11)
