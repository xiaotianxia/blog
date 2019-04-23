# Columns —— CSS多栏布局

[原文链接](https://xiaotianxia.github.io/blog/vuepress/css/columns.html?_=7654323456782357)

## 前言
人们阅读文本时，如果眼睛从一行的终点移动到下一个行的开始需要太长时间，它们就会丢失它们所在的行。
因此，为了最大限度地利用大屏幕，如果可以将文本分成多块列并排放置，就像报纸一样，想必会方便很多。
而CSS3里的多栏(multi-col)布局，就是为此而生了。

若文章页混乱，请移步原文地址：[原文链接](https://xiaotianxia.github.io/blog/vuepress/css/columns.html?_=7654323456782357)

这个属性相当简单，今天跟大家一起学习一下。

## 正文

### columns声明多栏布局
```css
columns: column-width | column-count;
```
### column-gap、column-rule样式控制
```css
column-gap /*栏之间的间隔*/
column-rule /*分割线 与border的写法几乎一毛一样*/
/*column-rule分开写是这样的：*/
column-rule-width /*分割线宽*/
column-rule-style /*分割线样式*/
column-rule-color /*分割线颜色*/
```
一个相对完整的多栏布局结构是这样的：
![demo](http://pq3mt9wke.bkt.clouddn.com/columns.svg)
::: tip TIP
多栏容器中的其他元素，样式中的百分比是相对其所在的某一栏的。
见下例中的图片，宽度是100%。
:::

### column-span
如果想让某元素在多栏容器中占据整行(横穿所有栏)，需要用到column-span。该属性只有两个值：'all'、'none'。
详见下例。

但是这个属性目前pc端的Firefox还没支持，奇怪的是移动端的Firefox竟然支持:smile: 。


下面是浏览器计算column-count、column-width和容器可用宽度的伪代码：
```js
let N, //column-count
    W, //column-width 
    W; //容器的可用宽度
if ((column-width == auto) && (column-count == auto)) {
    return; /* 不是多栏容器 */
}
if (column-width == auto) {
    N = column-count;
} else if (column-count == auto) {
    N = max(1, floor((U + column-gap) / (column-width + column-gap)));
} else {
    N = min(column-count, max(1, floor((U + column-gap) / (column-width + column-gap))));
}

W = max(0, ((U + column-gap) / N - column-gap));
```

## Demo:
<Columns-Demo/>


## 参考资料
- [columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)
- [CSS Multi-column Layout Module Level 1](https://drafts.csswg.org/css-multicol-1/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
