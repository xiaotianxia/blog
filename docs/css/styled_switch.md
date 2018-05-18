# radio和checkbox的样式化

[原文链接](https://denzel.netlify.com/js/original_style_resizable_switch.html)


主要的思路就是：首先利用appearance属性清除radio或checkbox的原生样式，然后在此基础添加上一些自定义的样式和动画效果。
```css
input[type="radio"],
input[type="checkbox"] {
	-webkit-appearance: none;
}
```

demo：

<iframe height='300' scrolling='no' title='deQBXv' src='//codepen.io/_tianxia/embed/deQBXv/?height=300&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/deQBXv/'>deQBXv</a> by tianxia (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>

















## 参考资料


<comment-tool></comment-tool>