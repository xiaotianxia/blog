# 可编辑的页面——designMode、contenteditable和user-modify

[原文链接](https://denzel.netlify.com/js/editable_dom.html?_=5432542436436543)

## 简介
前几天想研究一下富文本编辑器，发现这玩意涉及的知识点和“坑”还真不少。
谁知道在查阅资料时还有一些额外的收获:smile: 。

于是，今天不谈富文本编辑器，而是一起学一下跟它相关的几个神奇的属性。
或许好多同学跟我一样，还从没见过，它们分别是：**isContentEditable**、**designMode**、**user-modify**
和几乎人人都知道的**contenteditable**。

## isContentEditable
很简单，一个只读的属性，返回true或false，表示页面元素是否可编辑。

## designMode
是document的一个全局开关，可读可写，有两个值：“on”、“off”，表示**整个页面**是否可编辑。一般情况下，document.designMode返回是off。
可以手动设置’开‘或者’关‘，不妨自己试一下，在console里输入:

```js
document.designMode = 'on'
```
再用鼠标点一点页面，是不是发现了神奇的现象？！

参考下图：
![示意图](http://poijlzkaq.bkt.clouddn.com/blogeditable.gif)
整个页面都变成了可编辑状态。
这时候，所有元素的isContentEditable属性都变成了true：

```js
document.documentElement.isContentEditable   //true
document.body.isContentEditable   //true
document.querySelector('#id').isContentEditable   //true
```

## user-modify
这家伙是一个CSS属性！但其功能不可小觑，是CSS版的contenteditable。

```css
user-modify: read-only;   //只读
user-modify: read-write;  //读写，支持富文本
user-modify: write-only;  //只写？！ 什么鬼，不知道啥意思
user-modify: read-write-plaintext-only;  //读写，但只可输入文本
```

直接看张鑫旭大大的[Demo](http://www.zhangxinxu.com/study/201601/user-modify.html)吧。

::: warning 注意
但这时候，isContentEditable是检测不到的该元素是否可编辑的
:::

## contenteditable
前两个属性都存在很大的缺点，designMode是针对整个document的，对于想做到模块化的编辑器的实现是很难得，
user-modify的兼容性更是经不起太多的考验。

那么就只剩下contenteditable了，这是大多数浏览器都能兼容的。

```js
contenteditable=""  //与contenteditable="true"效果一样
contenteditable="events"
contenteditable="caret"
contenteditable="typing"
contenteditable="plaintext-only"  //可编辑，只允许纯文本
contenteditable="true"			//可编辑，支持富文本
contenteditable="false"     //不可编辑
```
"events"、"caret"、"typing"看了半天[文档](https://w3c.github.io/editing/contentEditable.html#contenteditable)也没搞清楚啥意思，而且貌似现在的浏览器也不支持。
可以自己试下：点[这里](http://www.w3school.com.cn/tiy/t.asp?f=html5_global_contenteditable)。有知道的大神还望指导一下下:pray: ~

## demo:
<Editor-ContenteditableTest/>

## 总结
只是蜻蜓点水般的介绍，具体细节没有深究。后续的文章会就与contenteditable有关的几个对象展开学习。

## 参考资料
- [HTMLElement.isContentEditable](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/isContentEditable)
- [Document.designMode](https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode)
- [ContentEditable](https://w3c.github.io/editing/contentEditable.html#contenteditable)
- [小tip: 如何让contenteditable元素只能输入纯文本](http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/)
