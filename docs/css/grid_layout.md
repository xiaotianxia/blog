# Grid —— CSS网格布局

[原文链接](https://denzel.netlify.com/css/grid_layout.html?_=7654323456782357)

## 前言
CSS网格布局是CSS中最强大的布局系统。 这是一个二维系统，这意味着它可以同时处理列和行，
不像flexbox那样主要是一维系统。 你可以通过将CSS规则应用于父元素（网格容器）
和该元素的子元素（网格元素）来使用网格布局。

通过网格布局和媒体查询的结合，不需要修改任何文档结构就可以重新排列元素布局的顺序，达到理想的布局效果。

可点击展开查看代码及效果，如没有，请点击[原文链接](https://denzel.netlify.com/css/grid_layout.html?_=7654323456782357)查看原文。

先看一个例子：
![demo](http://p8rbt50i2.bkt.clouddn.com/bloggrid002.png)
这种布局已经司空见惯了。我们看用grid的话，可以有哪些骚操作：
```css
.grid {
    display: grid;
    grid-gap: 5px;
    height: 400px;
    grid-template-areas: "header  header"
                         "content sidebar" 
                         "footer  footer";
    grid-template-columns: 1fr 100px;
    grid-template-rows: 80px 1fr 80px;
}

.header {
    grid-area: header;
    background-color: #009688;
}

.content {
    grid-area: content
}

.sidebar {
    grid-area: sidebar;
    background-color: #ff5722;
}

.footer {
    grid-area: footer;
    background: #9c27b0;
}
```

<spreadown :default-show="true">
	<iframe height='350' scrolling='no' title='demo' src='//codepen.io/_tianxia/embed/QxYqLm/?height=350&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/QxYqLm/'>demo</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/QxYqLm"></show-in-codepen>
</spreadown>


## 几个概念

### 网格容器(Grid Container)
顾名思义，真个望各位布局的容器，所有网格项目的父元素。例如上面例子中.grid。 

### 网格项目(Grid Item)
网格容器里的子元素(直接子元素)。上例中的.item。

### 网格线(Grid Line)
简单理解，就是网格元素之间的缝隙。它们既可以是垂直的，也可以是水平的，并位于行或列的任一侧。
![demo](http://p8rbt50i2.bkt.clouddn.com/grid003.jpg)

### 网格轨道(Grid Track)
两个相邻网格线之间的空间。 可以把它们想象成网格的列或行。
![demo](http://p8rbt50i2.bkt.clouddn.com/grid004.jpg)

### 网格单元(Grid Cell)
两个相邻的行和两个相邻的列网格线之间的空间。它是网格的一个“单元”。
![demo](http://p8rbt50i2.bkt.clouddn.com/grid005.jpg)

### 网格区域(Grid Area)
四个网格线包围的总空间。 网格区域可以由任意数量的网格单元组成。
![demo](http://p8rbt50i2.bkt.clouddn.com/grid006.jpg)

## 属性列表

### 网格容器
```
display
grid
grid-template
grid-template-columns
grid-template-rows
grid-template-areas
grid-gap(grid-column-gap/grid-row-gap)
grid-auto-flow
grid-auto-columns
grid-auto-rows
justify-items
align-items
justify-content
align-content
```

### 网格项目
```
grid-column(grid-column-start/grid-column-end)
grid-row(grid-row-start/grid-row-end)
grid-area
justify-self
align-self
```

## display
```css
.container {
    display: grid | inline-grid | subgrid;
}
```
- **grid** – 生成一个块级(block-level)网格
- **inline-grid** – 生成一个行级(inline-level)网格
- **subgrid** – 如果你的 grid container 本身就是一个 grid item（即,嵌套网格），你可以使用这个属性来表示你想从它的父节点获取它的行/列的大小，而不是指定它自己的大小。

## grid-template-columns / grid-template-rows
```css
.container {
    grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
    grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```
用空格分隔的值来定义网格的列和行，值表示的是轨道大小。
如果轨道值之间有line name，表示自定义的网格线名称，如果没有，系统会自动分配从1开始递增的数字名称。
### 轨道值
任何非负值，长度可以是px、%、em等长度单位的值。
如：
```css
grid-template-columns: 100px 30% 200px;
grid-template-rows: 50px 100px;
```
![demo](http://p8rbt50i2.bkt.clouddn.com/grid010.png)

<spreadown>
	<iframe height='325' scrolling='no' title='1' src='//codepen.io/_tianxia/embed/vrbJPG/?height=325&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/vrbJPG/'>1</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/vrbJPG"></show-in-codepen>
</spreadown>

定义了一个2行3列的网格，第二列占据30%父元素宽度。

```css
grid-template-columns: 100px 2fr 1fr;
grid-template-rows: 50px 100px;
```
![demo](http://p8rbt50i2.bkt.clouddn.com/grid011.png)

<spreadown>
	<iframe height='330' scrolling='no' title='2' src='//codepen.io/_tianxia/embed/oymOLJ/?height=330&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/oymOLJ/'>2</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/oymOLJ"></show-in-codepen>
</spreadown>

fr单位可以创建一个弹性的网格轨道。这个例子中，网格容器的列分成了100px和3等份（1 + 2 = 3），每一份（1fr）是网格容器宽度的三分之一。所以第二个item和第三个item的宽度分别是网格容器宽度的三分之二和三分之一。

如果定义中包含重复的部分，则可以使用repeat()方法来简化写法：
```css
grid-template-columns: repeat(2, 100px 1fr);
```
参数1是重复的次数，参数2是重复的内容。

<spreadown>
	<iframe height='300' scrolling='no' title='3' src='//codepen.io/_tianxia/embed/GGzLbj/?height=300&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/GGzLbj/'>3</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/GGzLbj"></show-in-codepen>
</spreadown>


### minmax
[minmax()函数如何工作](https://www.w3cplus.com/css3/how-the-minmax-function-works.html)

## grid-gap
```css
.container {
    grid-gap: <grid-row-gap> <grid-column-gap>;
}
```
这个简单，是grid-column-gap和grid-row-gap的缩写形式，分别定义列与列、行与行之间的间隙。上面的例子已经用到了。

## grid-column / grid-row
grid-column：grid-column-start / grid-column-end的缩写

grid-row：grid-row-start / grid-row-end的缩写

可使用grid-column / grid-row来定义网格的大小(跨度)定位网格。定位我们一会再说，先看下如何定义网格的大小。
这类似于table的合并单元格(rowspan、colspan)，不同的是网格项数目并不会增减。

```css
grid-column: span 2;
grid-row: span 2;
```
![demo](http://p8rbt50i2.bkt.clouddn.com/grid012.png)

<spreadown>
	<iframe height='370' scrolling='no' title='4' src='//codepen.io/_tianxia/embed/rKPgNo/?height=370&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/rKPgNo/'>4</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/rKPgNo"></show-in-codepen>
</spreadown>

## 通过网格线名称定位
```css
grid-column: 2 / 4;
grid-row: 3 / 5;
```
相当于

```css
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 3;
grid-row-end: 5;
```

```css
grid-column: 2;
grid-row: 3;
```
相当于

```css
grid-column-start: 2;
grid-column-end: auto;
grid-row-start: 3;
grid-row-end: auto;
```

![demo](http://p8rbt50i2.bkt.clouddn.com/grid014.png)

<spreadown>
	<iframe height='400' scrolling='no' title='6' src='//codepen.io/_tianxia/embed/ERrzLa/?height=400&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/ERrzLa/'>6</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/ERrzLa"></show-in-codepen>
</spreadown>

```css
grid-column: 2 / span 2;
grid-row: 3 / span 2;
```
![demo](http://p8rbt50i2.bkt.clouddn.com/grid013.png)

<spreadown>
	<iframe height='400' scrolling='no' title='5' src='//codepen.io/_tianxia/embed/GGzavE/?height=400&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/GGzavE/'>5</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/GGzavE"></show-in-codepen>
</spreadown>

## 通过网格区域定位

### grid-area
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end的缩写，可以是默认的数字网格线名称，也可以是自定义的网格线名称，

还可以是**一个**具体的自定义的名称，见开头的例子：
给每个块定义grid-area名称，然后通过grid-template-areas定义块的布局。这种写法简单明了，一眼就能看出整体布局。

<spreadown>
	<iframe height='400' scrolling='no' title='7' src='//codepen.io/_tianxia/embed/dKaEjN/?height=400&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/dKaEjN/'>7</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/dKaEjN"></show-in-codepen>
</spreadown>

## 隐式网格(Implicit Grid)
想象一下：网格容器中，我们定义了一个3行4列的网格，但是容器的直接子元素多余3×4=12个，那个多余的子元素该怎么安排呢。
css规定，没有显式地定义的网格项目(即显式网格外面的项目)会形成一个**隐式网格**。这一部分元素可通过grid-auto-columns、
grid-auto-rows和grid-auto-flow控制。

## grid-auto-columns / grid-auto-rows
分别定义隐式网格列和行的尺寸。

<spreadown>
	<iframe height='400' scrolling='no' title='8' src='//codepen.io/_tianxia/embed/GGzVrR/?height=400&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/GGzVrR/'>8</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/GGzVrR"></show-in-codepen>
</spreadown>

## grid-auto-flow
默认值是row，定义网格的展示方式：网格项目是按列的方式还是行的方式排列。

```css
.container {
  	grid-auto-flow: row | column | row dense | column dense
}
```
可以给grid-auto-flow属性添加另外一个关键词dense(密集的)，这个属性值相当有用：系统会利用自动排列算法尽可能的填补空缺，
使布局变得密集。但这可能打乱元素原来的顺序，这也意味着它不能友好地反映文档流顺序，这一点对于一些用户而言并不总是有用的。

看下前后对比图：

前：![demo](http://p8rbt50i2.bkt.clouddn.com/grid015.png)

后：![demo](http://p8rbt50i2.bkt.clouddn.com/grid016.png)

<spreadown>
	<iframe height='511' scrolling='no' title='9' src='//codepen.io/_tianxia/embed/eKQNYm/?height=511&theme-id=33504&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/_tianxia/pen/eKQNYm/'>9</a> by Denzel (<a href='https://codepen.io/_tianxia'>@_tianxia</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>
	<show-in-codepen href="https://codepen.io/_tianxia/pen/eKQNYm"></show-in-codepen>
</spreadown>

## 对齐相关

justify-items、justify-self指定**网格项目**沿着**行**轴对齐方式。

align-items、align-self指定**网格项目**沿着**列**轴对齐方式。

align-content指定**网格轨道**沿着**行**轴对齐方式；
justify-content指定**网格轨道**沿着**列**轴对齐方式。

他们所对应的值及具体表现形式，可参考[这里](https://drafts.csswg.org/css-align/)，不再赘述了。


## 浏览器debug
firefox里，可以通过设置显示网格的名称、行号等信息，点[这里](http://www.w3cplus.com/css/grid-inspector.html)，非常方便，
如下图：
![demo](http://p8rbt50i2.bkt.clouddn.com/grid017.png)
chrome的高一点版本(我的是67)，可以显示对应网格线，不知道能不能进一步设置？。。。
如下图：
![demo](http://p8rbt50i2.bkt.clouddn.com/grid018.png)



## 参考资料
- [Playing with css grid layout](https://medium.com/@purplecones/playing-with-css-grid-layout-a75836098370)
- [learn css grid](https://learncssgrid.com/)
- [grid入门](http://www.w3cplus.com/blog/tags/355.html?page=5)
- [CSS 网格布局学习指南](http://blog.jirengu.com/?p=990)
