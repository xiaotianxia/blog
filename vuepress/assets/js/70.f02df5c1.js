(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{433:function(t,s,a){t.exports=a.p+"assets/img/columns.e8c9f044.svg"},617:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"columns-——-css多栏布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#columns-——-css多栏布局","aria-hidden":"true"}},[t._v("#")]),t._v(" Columns —— CSS多栏布局")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://xiaotianxia.github.io/blog/vuepress/css/columns.html?_=7654323456782357",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("人们阅读文本时，如果眼睛从一行的终点移动到下一个行的开始需要太长时间，它们就会丢失它们所在的行。\n因此，为了最大限度地利用大屏幕，如果可以将文本分成多块列并排放置，就像报纸一样，想必会方便很多。\n而CSS3里的多栏(multi-col)布局，就是为此而生了。")]),t._v(" "),n("p",[t._v("若文章页混乱，请移步原文地址："),n("a",{attrs:{href:"https://xiaotianxia.github.io/blog/vuepress/css/columns.html?_=7654323456782357",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("这个属性相当简单，今天跟大家一起学习一下。")]),t._v(" "),n("h2",{attrs:{id:"正文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#正文","aria-hidden":"true"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),n("h3",{attrs:{id:"columns声明多栏布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#columns声明多栏布局","aria-hidden":"true"}},[t._v("#")]),t._v(" columns声明多栏布局")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("columns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column-width | column-count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"column-gap、column-rule样式控制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column-gap、column-rule样式控制","aria-hidden":"true"}},[t._v("#")]),t._v(" column-gap、column-rule样式控制")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("column-gap "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*栏之间的间隔*/")]),t._v("\ncolumn-rule "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*分割线 与border的写法几乎一毛一样*/")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*column-rule分开写是这样的：*/")]),t._v("\ncolumn-rule-width "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*分割线宽*/")]),t._v("\ncolumn-rule-style "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*分割线样式*/")]),t._v("\ncolumn-rule-color "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*分割线颜色*/")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[t._v("一个相对完整的多栏布局结构是这样的：\n"),n("img",{attrs:{src:a(433),alt:"demo"}})]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("多栏容器中的其他元素，样式中的百分比是相对其所在的某一栏的。\n见下例中的图片，宽度是100%。")])]),t._v(" "),n("h3",{attrs:{id:"column-span"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#column-span","aria-hidden":"true"}},[t._v("#")]),t._v(" column-span")]),t._v(" "),n("p",[t._v("如果想让某元素在多栏容器中占据整行(横穿所有栏)，需要用到column-span。该属性只有两个值：'all'、'none'。\n详见下例。")]),t._v(" "),n("p",[t._v("但是这个属性目前pc端的Firefox还没支持，奇怪的是移动端的Firefox竟然支持😄 。")]),t._v(" "),n("p",[t._v("下面是浏览器计算column-count、column-width和容器可用宽度的伪代码：")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("N")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//column-count")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//column-width ")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//容器的可用宽度")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 不是多栏容器 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("count "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("N")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("h2",{attrs:{id:"demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[t._v("#")]),t._v(" Demo:")]),t._v(" "),n("Columns-Demo"),t._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/columns",target:"_blank",rel:"noopener noreferrer"}},[t._v("columns"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://drafts.csswg.org/css-multicol-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Multi-column Layout Module Level 1"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://drafts.csswg.org/css-multicol-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS Multi-column Layout Module Level 2"),n("OutboundLink")],1)])])],1)},[],!1,null,null,null);s.default=r.exports}}]);