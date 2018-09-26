# Web Components初探 

[原文地址](https://denzel.netlify.com/html/web_components.html)

## 前言

Web Components它本身**不是一个**规范，而是由W3C提出的另外4个规范的合集。这四个规范是：
- [**HTML Template**](#html-template)
- [**HTML Imports**](#html-imports)
- [**Shadow Dom**](#shadow-dom)
- [**Custom Elements**](#custom-elements)

## HTML Template

### 特性检测
要特性检测 &lt;template&gt;，需要创建一个 DOM 元素并检查它是否拥有 .content 属性：
```js
function supportsTemplate() {
	return 'content' in document.createElement('template');
}

if (supportsTemplate()) {
  	// 检测通过！
} else {
  	// 使用旧的模板技术或库。
}
```

### 模板声明
```html
<template id="mytemplate">
	<img src="" alt="great image">
  	<div class="comment"></div>
</template>
```

### 激活模板
激活模板，即渲染出模板里面的内容。激活模板最简单的方法就是使用 
document.importNode() 对模板的 .content 进行深拷贝。 
.content 为只读属性，关联一个包含模板内容的 DocumentFragment。
```js
var t = document.querySelector('#mytemplate');
// 在运行时填充 src。
t.content.querySelector('img').src = 'logo.png';

var clone = document.importNode(t.content, true);
document.body.appendChild(clone);
```


### 特点
用 &lt;template&gt; 来包裹内容为我们提供了几个重要属性。

- 它的内容在激活之前一直处于惰性状态。本质上，这些标记就是隐藏的 DOM，它们不会被渲染。

- 处于模板中的内容不会有副作用。脚本不会运行，图片不会加载，音频不会播放，...直到模板被使用。

- 内容不在文档中。在主页面使用 document.getElementById() 或 querySelector() 不会返回模板的子节点。

- 模板能够被放置在任何位置，包括 &lt;head&gt;，&lt;body&gt;，或 &lt;frameset&gt;，并且任何能够出现在以上元素中的内容都可以放到模板中。 注意，"任何位置"意味着 &lt;template&gt; 能够安全的出现在 HTML 解析器不允许出现的位置...几乎可以作为任何内容模型的子节点。 它也可以作为 &lt;table&gt; 或 &lt;select&gt; 的子元素。

### 推荐资料
- [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
- [HTML's New Template Tag - standardizing client-side templating](https://www.html5rocks.com/en/tutorials/webcomponents/template/)

## HTML Imports
引入html片段，可以这样做：

head中引入
```html
<head>
	<link rel="import" href="/path/to/imports/stuff.html">
</head>
```

js中获取
```js
var content = document.querySelector('link[rel="import"]').import;
```

### 特性检测
要检测浏览器是否支持导入，可验证 <link> 元素上是否存在 import：
```js
function supportsImports() {
	return 'import' in document.createElement('link');
}

if (supportsImports()) {
  	// 支持导入!
} else {
  	// 使用其他的库来加载文件。
}
```

### 推荐资料
- [HTML Imports - #include for the web](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)

## Shadow Dom
设置
![](http://p8rbt50i2.bkt.clouddn.com/component005.png)

video标签是这样的——
![](http://p8rbt50i2.bkt.clouddn.com/component006.png)

甚至一个普通的input——
![](http://p8rbt50i2.bkt.clouddn.com/component008.png)

这让我想到，我们是不是可以通过修改元素里面的shadow dom的样式来改变元素的样式呢？答案是 —— 是的，但也不完全是...

![](http://p8rbt50i2.bkt.clouddn.com/component009.png)

从上图audio标签的结构和浏览器默认样式可以看到，我们可以像这样修改对应的样式：
```css
audio::-webkit-media-controls {
	...
}
```
就像通过::-webkit-scrollbar改造浏览的滚动条样式那样，
于是，默认的audio样式(新版chrome)——

![small](http://p8rbt50i2.bkt.clouddn.com/componet003.png)

经过改造后，可以变成这样——

![small](http://p8rbt50i2.bkt.clouddn.com/component004.png)

::: warning
然而并不是所有样式都可以这样覆盖改造，想pseudo="-internal-media-controls-loading-panel"这样以"-internal-"开头的是不可以的。
所以这个做法还是有很大局限性的。
:::

<show-in-codepen href="https://codepen.io/_tianxia/pen/gdEmbj"></show-in-codepen>

### 推荐资料
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Shadow DOM 101](https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/)
- [Shadow DOM 201 - CSS and Styling](https://www.html5rocks.com/zh/tutorials/webcomponents/shadowdom-201/)
- [Shadow DOM 301 - Advanced Concepts & DOM APIs](https://www.html5rocks.com/zh/tutorials/webcomponents/shadowdom-301/)


## Custom Elements

### 推荐资料
- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Custom Elements - defining new elements in HTML](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)



## Web Components
### demo
![](http://p8rbt50i2.bkt.clouddn.com/component001.gif)
<show-in-codepen href="https://codepen.io/_tianxia/pen/mGZOOG/"></show-in-codepen>

## 参考资料
- [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
- [https://www.webcomponents.org/](https://www.webcomponents.org/)
- [HTML's New Template Tag - standardizing client-side templating](https://www.html5rocks.com/en/tutorials/webcomponents/template/)
- [HTML Imports - #include for the web](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)
- [Shadow DOM 101](https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/)
- [Shadow DOM 201 - CSS and Styling](https://www.html5rocks.com/zh/tutorials/webcomponents/shadowdom-201/)
- [Shadow DOM 301 - Advanced Concepts & DOM APIs](https://www.html5rocks.com/zh/tutorials/webcomponents/shadowdom-301/)
- [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/#html-content-model)
- [Custom Elements - defining new elements in HTML](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)