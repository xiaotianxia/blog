# radio和checkbox的自定义样式

[原文链接](https://denzel.netlify.com/css/styled_switch.html)

input控件中，checkbox和radio不像text可以比较随意的设置样式。
在Firefox里同事设置宽和高可以改变checkbox和radio的大小，除此之外，在chrome等浏览器里对他们设置宽高是不起作用的。

本文给出了两种自定义checkboxhe和radio样式的方法：

## 方法一：appearance + :after
该方法的主要思路是：首先利用appearance属性清除radio或checkbox的原生样式，然后在此基础添加上一些自定义的样式和动画效果，以达到自定义样式的目的。
用到了:after伪元素生成控件内部的选中样式。

```css
input[type="radio"],
input[type="checkbox"] {
	appearance: none;
}
```

直接看demo：

<iframe height='422' scrolling='no' title='styled switch' src='//codepen.io/_tianxia/embed/deQBXv/?height=422&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/deQBXv/'>styled switch</a> by tianxia (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

demo截图：

![demo](http://p8rbt50i2.bkt.clouddn.com/blogswitch001.gif)


## 方法二：opacity: 0(display:none) + 额外标签
这个方法是多数UI库使用的方法：首先将checkbox和radio隐藏，然后让相邻它的标签（或label标签）伪装成它，并设置样式，
利用css3的“相邻兄弟选择器”（ + 或  ~ ）,通过checkboxhe和radio的选中切换该元素不同的样式，

直接看demo：

<iframe height='302' scrolling='no' title='styled switch 2' src='//codepen.io/_tianxia/embed/jxdKKL/?height=302&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/jxdKKL/'>styled switch 2</a> by tianxia (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
时间仓促做的有点粗糙，只能简单地用绿色圆点和方点示意选中状态了。

## 对比一下

- 方法一改变原控件的样式，只针对该控件做样式修改； 方法二相当于把原控件隐藏，添加其他标签代替了它
- 方法一比较简单，但应用场景单一，只能用于这种表单填写的场景；方法二较复杂，需要更多的标签支持，
但该方法**应用场景更灵活**，可用来实现tab页切换等效果，见另一篇[checkbox的应用](use_of_checkbox.html)
- 两个缺点都是兼容性不好，只支持高版本浏览器，方法一的appearance在用时还需要加上浏览器前缀
- 等等

有说的不对的地方，望重拍指正。


<comment-tool></comment-tool>