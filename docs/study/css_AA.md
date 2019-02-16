# CSS AA

## BFC ?
### 什么是BFC？
块格式化上下文（Block Formatting Context）

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。
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

参考
[1](https://segmentfault.com/a/1190000011297958#articleHeader1)
[2](https://mp.weixin.qq.com/s?timestamp=1545144084&src=3&ver=1&signature=7YtbKqhExARr1YWMXH7v1D*EX2qKZ2Hkc8qCBP8jhJxsO7Oj8*aGya4vtcJedluvnbXXqK9YPvc*8P6O9lz7e0ruXAfGQn3buRvdEyYpJIc8uvTklHPwIJoMkjKrlkBNv3NDvGg6zRQEKuBYefXXEfX8hwHHrMpOsIiT0SWDYh0=)