# 浅尝 Web Components 

[原文地址](https://denzel.netlify.com/html/web_components.html)

## 前言
Web Components涉及到的内容还是很多的，每一块都有很多东西可以讲，国外的好多大佬已经产出了好多优秀的文章。
本文照常只是简单了解大致内容而不进入深究，了解且会用即可，浅尝辄止。

## 简介
Web Components本身**不是一个**规范，而是由W3C提出的另外4个规范的合集。这四个规范是：
- [**HTML Template**](#html-template)
- [**HTML Imports**](#html-imports)
- [**Shadow DOM**](#shadow-dom)
- [**Custom Elements**](#custom-elements)

下面我们走马观花，简单了解一个这四个东西。

## HTML Template
之前的页面开发经常的一个做法是把模板放在一个script标签或者隐藏的div中，用的时候通过innerHTML取出，塞进数据，
然后放回页面显示。现在我们可以通过&lt;template&gt;标签存放了。就像这样：

```html
<template id="mytemplate">
	<img src="" alt="great image">
  	<div class="comment"></div>
</template>
```

### 特性检测
要特性检测 &lt;template&gt;，可以创建一个 template 元素并检查它是否拥有 content 属性：
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
用 &lt;template&gt; 来包裹内容为我们提供了几个重要属性：

- 它的内容在激活之前一直处于惰性状态。本质上，这些标记就是隐藏的 DOM，它们不会被渲染。

- 处于模板中的内容不会有副作用。脚本不会运行，图片不会加载，音频不会播放，...直到模板被使用。

- 内容不在文档中。在主页面使用 document.getElementById() 或 querySelector() 不会返回模板的子节点。

- 模板能够被放置在任何位置，包括 &lt;head&gt;，&lt;body&gt;，或 &lt;frameset&gt;，并且任何能够出现在以上元素中的内容都可以放到模板中。 
注意，"任何位置"意味着 &lt;template&gt; 能够安全的出现在 HTML 解析器不允许出现的位置...
几乎可以作为任何内容模型的子节点， 它也可以作为 &lt;table&gt; 或 &lt;select&gt; 的子元素。

### 推荐阅读
- [Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
- [HTML's New Template Tag - standardizing client-side templating](https://www.html5rocks.com/en/tutorials/webcomponents/template/)

## HTML Imports
之前在页面引入另一个页面或片段往往是通过iframe或者ajax异步加载，而现在我们可以这样做：

在head中引入
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
要检测浏览器是否支持导入，可验证 &lt;link&gt; 元素上是否存在 import：
```js
function supportsImports() {
	return 'import' in document.createElement('link');
}

if (supportsImports()) {
  	// 支持导入
} else {
  	// 使用其他方法加载文件
}
```

### 推荐阅读
- [HTML Imports](https://w3c.github.io/webcomponents/spec/imports/)
- [HTML Imports - #include for the web](https://www.html5rocks.com/en/tutorials/webcomponents/imports/)

## Shadow DOM
首先需要设置一下：打开开发者工具，f1打开设置(或右上角三个点)，然后勾上Show user agent shadow DOM ——
![](http://p8rbt50i2.bkt.clouddn.com/component005.png)

然后再看下，video标签是这样的 ——
![](http://p8rbt50i2.bkt.clouddn.com/component006.png)

甚至一个普通的input ——
![](http://p8rbt50i2.bkt.clouddn.com/component008.png)

之前被隐藏掉的DOM部分就是shadow DOM。顾名思义，它是其宿主元素的影子，通常用来封装组件的内部结构。

所以像video、audio甚至input都是用简单的元素封装的组件。

这让我想到，我们是不是可以通过修改元素里面的shadow DOM的样式来改变该元素的样式呢？
答案是 —— 是的，但也**不完全**是...

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
然而并不是所有样式都可以这样覆盖改造，像pseudo="-internal-media-controls-loading-panel"这样以"-internal-"开头的是不可以的。
所以这个做法还是有很大局限性的。

这是我试出来的，并没发现相关标准或依据...😓
:::

<show-in-codepen href="https://codepen.io/_tianxia/pen/gdEmbj"></show-in-codepen>

这种做法自认为只适合拿来玩玩而已，不适合投入到项目开发中去。一来是因为其局限性太大，二来谁知道啥时候浏览器升级，这些标签的内部结构就又变化了呢，
最重要的是shadow DOM是为web Components而生的，与Custom Elements一起是web Components的重要组成部分，并非用于此“旁门左道”😆。


### 推荐阅读
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Shadow DOM 101](https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/)
- [Shadow DOM 201 - CSS and Styling](https://www.html5rocks.com/zh/tutorials/webcomponents/shadowdom-201/)
- [Shadow DOM 301 - Advanced Concepts & DOM APIs](https://www.html5rocks.com/zh/tutorials/webcomponents/shadowdom-301/)


## Custom Elements
自定义元素，首先有个硬性规定，自定义元素的命名中必须要有中划线“-”，否则便是未知元素了。

自定义元素分为两种 ——

- [**自主自定义元素**](#自主自定义元素-autonomous-custom-elements)
- [**自定义内置元素**](#自定义内置元素-customized-built-in-elements)

### 自特性主自定义元素(Autonomous custom elements)
不具备任何已有元素的，其样式和行为完全自定义，如我们要定义一个这样的元素：
```html
<flag-icon country="cn"></flag-icon>
```
通过给属性country赋值来显示对应的国旗。

js的基本结构是这样的
```js
class FlagIcon extends HTMLElement {
  	constructor() {
    	super();
    	this._countryCode = null;
  	}

  	static get observedAttributes() { return ["country"]; }

  	attributeChangedCallback(name, oldValue, newValue) {
	    // name will always be "country" due to observedAttributes
	    this._countryCode = newValue;
	    this._updateRendering();
  	}

  	connectedCallback() {
    	this._updateRendering();
  	}

  	get country() {
    	return this._countryCode;
  	}

  	set country(v) {
    	this.setAttribute("country", v);
  	}

  	_updateRendering() {
	    //...
  	}
}

//全局注册该元素
customElements.define("flag-icon", FlagIcon);
```
注册后，也通过js创建该元素
```js
const flagIcon = document.createElement("flag-icon");
flagIcon.country = "cn";
document.body.appendChild(flagIcon);
```

### 自定义内置元素(Customized built-in elements)
继承自已有元素，拥有已有元素的所有特性。

比如我们自定义一个按钮，集成普通按钮所有的特性，但是当点击的时候会有一个动效，就可以这么做 ——
```js
class PlasticButton extends HTMLButtonElement {
  	constructor() {
    	super();

    	this.addEventListener("click", () => {
      		// 动效逻辑
    	});
  	}
}
```
不同的是，注册时要加上一个参数
```js
customElements.define("plastic-button", PlasticButton, { extends: "button" });
```

使用时也稍有不同
```html
<button is="plastic-button">点我!</button>
```

通过js定义元素，则是这样
```js
const plasticButton = document.createElement("button", { is: "plastic-button" });
plasticButton.textContent = "点我!";
document.body.appendChild(flagIcon);
```

### 生命周期
用过Vue、React等框架的同学对生命周期应该不陌生。同样，自定义元素有4个生命周期：

#### connectedCallback 
元素首次被插入文档DOM时触发

#### disconnectedCallback 
元素从文档DOM中删除时触发

#### adoptedCallback 
元素被移动到新的文档时触发

#### attributeChangedCallback 
元素增加、删除、修改自身属性时触发


### 推荐阅读
- [Using custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [Custom Elements - defining new elements in HTML](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)


### 来一个demo
评分组件相信大家都司空见惯了。照葫芦画瓢，我用原生js写了一个Web Components 版的，简单实现了该组件的基本功能。

demo截图：

![](http://p8rbt50i2.bkt.clouddn.com/component001.gif)

demo地址：
<show-in-codepen href="https://codepen.io/_tianxia/pen/mGZOOG/"></show-in-codepen>

## 推荐阅读
- [Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
- [https://www.webcomponents.org/](https://www.webcomponents.org/)

## 总结
Web Components 为前端组件化提供了解决方案，但用惯了Vue这样的框架，还是会发现Web Components 的问题，
比如
- 浏览器的支持
- 对样式局部作用域的处理，往往js中包着一堆的CSS样式，略显臃肿
- 父子、兄弟组件的通信问题
- 属性都是字符串，需要额外的代码做转换和兼容
- 没有数据驱动，基本全是DOM操作

这些问题貌似都没有给出具体的解决方案，但是目前的好多优秀的polyfill已经做到很好了。

个人愚见，望大佬指点！🙏
