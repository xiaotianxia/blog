# Columns —— CSS多栏布局

[原文链接](https://denzel.netlify.com/css/columns.html?_=7654323456782357)

## 前言
人们阅读文本时，如果眼睛从一行的终点移动到下一个行的开始需要太长时间，它们就会丢失它们所在的行。
因此，为了最大限度地利用大屏幕，如果可以将文本分成多块列并排放置，就像报纸一样，想必会方便很多。
而CSS3里的多栏(multi-col)布局，就是为此而生了。

这个属性相当简单，今天跟大家一起学习一下。

## 正文

伪代码：
```js
let N, //column-count
    W, //column-width 
    W; //容器的可用宽度
if ((column-width == auto) && (column-count == auto)) {
    return; /* not a multicol container */
}
if (column-width = auto) {
    N = column-count;
} else if (column-count == auto) {
    N = max(1, floor((U + column-gap)/(column-width + column-gap)));
} else {
    N = min(column-count, max(1, floor((U + column-gap)/(column-width + column-gap))));
}

W = max(0, ((U + column-gap)/N - column-gap));
```

Demo:
<Columns-Demo/>


## 总结


## 参考资料
- [columns](https://developer.mozilla.org/en-US/docs/Web/CSS/columns)
- [CSS Multi-column Layout Module Level 1](https://drafts.csswg.org/css-multicol-1/)
- [CSS Multi-column Layout Module Level 2](https://drafts.csswg.org/css-multicol-2/)
