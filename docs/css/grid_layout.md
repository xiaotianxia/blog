# Grid —— CSS网格布局

## 前言
CSS网格布局是CSS中最强大的布局系统。 这是一个二维系统，这意味着它可以同时处理列和行，
不像flexbox那样主要是一维系统。 你可以通过将CSS规则应用于父元素（网格容器）
和该元素的子元素（网格元素）来使用网格布局。

通过网格布局和媒体查询的结合，不需要修改任何文档结构就可以重新排列元素布局的顺序，达到理想的布局效果。

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

## 几个概念

### 网格容器(Grid Container)
顾名思义，真个望各位布局的容器，所有网格项目的父元素。   

### 网格项目(Grid Item)
网格容器里的子元素(直接子元素)。

### 网格线(Grid Line)
简单理解，就是网格元素之间的缝隙。它们既可以是垂直的（“column grid lines”），也可以是水平的（“row grid lines”），并位于行或列的任一侧。

### 网格轨道(Grid Track)
两个相邻网格线之间的空间。 可以把它们想象成网格的列或行。

### 网格单元(Grid Cell)
两个相邻的行和两个相邻的列网格线之间的空间。它是网格的一个“单元”。

### 网格区域(Grid Area)
四个网格线包围的总空间。 网格区域可以由任意数量的网格单元组成。

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

## grid-template-columns / grid-template-rows
```css
.container {
    grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
    grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
}
```

### 网格线命名

### minmax

## grid-gap
```css
.container {
    grid-gap: <grid-row-gap> <grid-column-gap>;
}
```

## 合并单元格
excel?


## 通过网格线名称定位

### grid-area

## 通过网格区域定位


## 隐式网格

## grid-auto-flow

## grid-auto-columns / grid-auto-rows


## 对齐相关
### justify-items
### align -items
### justify-content
### align-content
### justify-self
### align-self








## 参考资料
- [Playing with css grid layout](https://medium.com/@purplecones/playing-with-css-grid-layout-a75836098370)
- [learn css grid](https://learncssgrid.com/)
- [grid入门](http://www.w3cplus.com/blog/tags/355.html?page=5)
- [CSS 网格布局学习指南](http://blog.jirengu.com/?p=990)
