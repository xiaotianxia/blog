(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{647:function(t,a,e){"use strict";e.r(a);var r=e(12),s=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"css-aa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-aa","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS AA")]),t._v(" "),e("h2",{attrs:{id:"bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC ?")]),t._v(" "),e("h3",{attrs:{id:"什么是bfc？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc？","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是BFC？")]),t._v(" "),e("ul",[e("li",[t._v("块格式化上下文（Block Formatting Context）")]),t._v(" "),e("li",[t._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。")])]),t._v(" "),e("h3",{attrs:{id:"bfc作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc作用","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC作用")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[t._v("解决margin重叠的问题")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("浮动带来的布局问题")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[t._v("清除浮动")])])])]),t._v(" "),e("h3",{attrs:{id:"bfc的创建方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc的创建方法","aria-hidden":"true"}},[t._v("#")]),t._v(" BFC的创建方法")]),t._v(" "),e("ul",[e("li",[t._v("根元素或其它包含它的元素；")]),t._v(" "),e("li",[t._v("浮动(元素的float不为none)；")]),t._v(" "),e("li",[t._v("绝对定位元素(元素的position为absolute或fixed)；")]),t._v(" "),e("li",[t._v("行内块inline-blocks(元素的display: inline-block)；")]),t._v(" "),e("li",[t._v("表格单元格(元素的display: table-cell，HTML表格单元格默认属性)；")]),t._v(" "),e("li",[t._v("overflow的值不为visible的元素；")]),t._v(" "),e("li",[t._v("弹性盒 flex boxes(元素的display: flex或inline-flex)")])]),t._v(" "),e("p",[t._v("参考\n"),e("a",{attrs:{href:"https://github.com/kaola-fed/blog/blob/master/source/_posts/%E5%AD%A6%E4%B9%A0BFC.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("1"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"flex-布局"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局","aria-hidden":"true"}},[t._v("#")]),t._v(" flex 布局")]),t._v(" "),e("p",[t._v("参考\n"),e("a",{attrs:{href:"https://juejin.im/post/58e3a5a0a0bb9f0069fc16bb",target:"_blank",rel:"noopener noreferrer"}},[t._v("1"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/#flex-basis",target:"_blank",rel:"noopener noreferrer"}},[t._v("2"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"css-阻塞渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-阻塞渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 阻塞渲染")]),t._v(" "),e("ul",[e("li",[t._v("CSS 如何阻塞渲染？\n"),e("ul",[e("li",[t._v("浏览器渲染流程：\n　　- 1、浏览器开始解析目标HTML文件，执行流的顺序为自上而下。\n　　- 2、HTML解析器将HTML结构转换为基础的DOM(文档对象模型)，构建DOM树完成后，触发DomContendLoaded事件。\n　　- 3、CSS解析器将CSS解析为CSSOM(层叠样式表对象模型)，一棵仅含有样式信息的树。\n　　- 4、CSSOM和DOM开始合并构成渲染树，每个节点开始包含具体的样式信息。\n　　- 5、计算渲染树中个各个节点的位置信息，即布局阶段。\n　　- 6、将布局后的渲染树显示到界面上。\n　　- 可以看出，当CSSOM还没构建完成时，页面是不会渲染到浏览器界面的，也就是css加载过程中会阻塞页面的渲染。")])])]),t._v(" "),e("li",[t._v("怎么防止 CSS 阻塞渲染？ 原则就是尽快的提供CSS。\n"),e("ul",[e("li",[t._v("在引入顺序上，CSS 资源的引入要优于js脚本的引入")]),t._v(" "),e("li",[t._v("关键 CSS 内联，非关键 CSS 预加载，参考 "),e("a",{attrs:{href:"https://www.npmjs.com/package/html-critical-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("html-critical-webpack-plugin"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("利用“媒体查询”：link标签的media属性，只有符合“媒体查询”条件时，浏览器才阻塞渲染，直至样式表下载并处理完毕，否则不会阻塞")])])])]),t._v(" "),e("p",[t._v("https://www.jianshu.com/p/cbd593748567\nhttps://github.com/addyosmani/critical")])])},[],!1,null,null,null);a.default=s.exports}}]);