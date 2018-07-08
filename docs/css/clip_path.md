# clip-path

[原文链接](https://denzel.netlify.com/css/clip_path.html?_=7654323456782357)

## 前言
Photoshop中用钢笔工具勾出轮廓，转为选取，然后反选，删去多余部分，最后只留下要选择的区域，
这一波操作想必是懂PS都非常熟悉的了，就像这样：
![不重要的图](http://p8rbt50i2.bkt.clouddn.com/clip004.png)
在CSS3中也有思思功能的属性：clip-path。顾名思义：裁剪路径，
该属性可以将方方正正的元素裁剪成几乎任何你想要的形状。

今天就跟大家一块学习这一操作。

有一个在线[神器](http://bennettfeely.com/clippy)，学习之前先体验一下这个特性吧。

## 基本语法
```css
clip-path: <clip-source> | [ <basic-shape> || <geometry-box> ] | none

/*属性说明*/
<clip-source> = <url>
<basic-shape> = <inset()> | <circle()> | <ellipse()> | <polygon()>
<geometry-box> = <shape-box> | fill-box | stroke-box | view-box
```
下面会展开一块学一下~

### clip-source
svg

![demo](http://p8rbt50i2.bkt.clouddn.com/blog/clip009.png)

<spreadown>
    <iframe height='300' scrolling='no' title='svg' src='//codepen.io/_tianxia/embed/JZgWBN/?height=300&theme-id=33504&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/JZgWBN/'>svg</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    <show-in-codepen href="https://codepen.io/_tianxia/pen/JZgWBN/"></show-in-codepen>
</spreadown>

### basic-shape

#### inset()

::: tip tip
inset() : 定义一个矩形 。注意，定义矩形不是rect，而是 inset。
:::

```css
inset( <length-percentage>{1,4} [ round <border-radius> ]? )
```
inset()可以传入5个参数，分别对应top，right，bottom，left的裁剪位置，round radius（可选，圆角）

![demo](http://p8rbt50i2.bkt.clouddn.com/blog/clip005.png)
<spreadown>
    <iframe height='310' scrolling='no' title='1' src='//codepen.io/_tianxia/embed/dKxNgM/?height=310&theme-id=33504&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/dKxNgM/'>1</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    <show-in-codepen href="https://codepen.io/_tianxia/pen/dKxNgM/"></show-in-codepen>
</spreadown>


#### circle()
定义圆形

```css
circle( [ <shape-radius> ]? [ at <position> ]? )
```
circle()可以传人2个可选参数；

1. 圆的半径，默认元素宽高中短的那个为直径，支持百分比

2. 圆心位置，默认为元素中心点

半径公式：如果半径使用百分比：圆的半径 = (sqrt(width^2 + height^2) / sqrt(2)) * 百分比 

![demo](http://p8rbt50i2.bkt.clouddn.com/blog/clip006.png)
<spreadown>
    <iframe height='300' scrolling='no' title='2' src='//codepen.io/_tianxia/embed/ZRgeKE/?height=300&theme-id=33504&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/ZRgeKE/'>2</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    <show-in-codepen href="https://codepen.io/_tianxia/pen/ZRgeKE/"></show-in-codepen>
</spreadown>


#### ellipse()
定义椭圆

```css
ellipse( [ <shape-radius>{2} ]? [ at <position> ]? )
```

ellipse()可以传人3个可选参数；

1. 椭圆的X轴半径，默认是宽度的一半，支持百分比

2. 椭圆的Y轴半径，默认是高度的一半，支持百分比

3. 椭圆中心位置，默认是元素的中心点

![demo](http://p8rbt50i2.bkt.clouddn.com/blog/clip007.png)
<spreadown>
    <iframe height='300' scrolling='no' title='3' src='//codepen.io/_tianxia/embed/oyKZwW/?height=300&theme-id=33504&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/oyKZwW/'>3</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    <show-in-codepen href="https://codepen.io/_tianxia/pen/oyKZwW/"></show-in-codepen>
</spreadown>


#### polygon()
定义多变形

```css
polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )
```

fill-rule可选，表示填充规则用来确定该多边形的内部。可能的值有nonzero和evenodd,默认值是nonzero
后面的每对参数表示多边形的顶点坐标（X,Y），也就是连接点

![demo](http://p8rbt50i2.bkt.clouddn.com/blog/clip008.png)
<spreadown>
    <iframe height='300' scrolling='no' title='inset' src='//codepen.io/_tianxia/embed/dKxNgM/?height=300&theme-id=33504&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/dKxNgM/'>inset</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
    <show-in-codepen href="https://codepen.io/_tianxia/pen/dKxNgM/"></show-in-codepen>
</spreadown>


### geometry-box


## Demo

<ClipPath-Demo/>



## 参考资料
- [clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)
- [不可思议的CSS之clip-path](https://segmentfault.com/a/1190000010936207)
- [CSS clip-path maker](http://bennettfeely.com/clippy/)
