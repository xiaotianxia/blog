# checkbox的几种应用

[原文链接](https://denzel.netlify.com/css/use_of_checkbox.html)

## 应用一: todo list

主要代码（LESS）：

```css
input[type=checkbox] {
	display: none;
	
	&:checked ~ span {
		color: @color-gray;
		
		&:after {
			width: 100%;
		}
	}
	
	&:checked ~ label {
		&:after {
			opacity: 1;
		}
	}
}
```

demo截图

![demo截图](http://p8rbt50i2.bkt.clouddn.com/blogchekbox001.gif)

或者看这里

<show-in-codepen :href="'https://codepen.io/_tianxia/pen/NMJyMR'"></show-in-codepen>


## 应用二: 手风琴菜单  

<show-in-codepen :href="'https://codepen.io/_tianxia/pen/ZoPMeE'"></show-in-codepen>


<show-in-codepen :href="'https://codepen.io/_tianxia/pen/vjPwmb'"></show-in-codepen>



<comment-tool></comment-tool>