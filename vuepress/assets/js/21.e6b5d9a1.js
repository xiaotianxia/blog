(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{263:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[a("router-link",{attrs:{to:"use_of_checkbox.html"}},[t._v("拓展链接")])],1),a("p",[t._v("input控件中，checkbox和radio不像text可以比较随意的设置样式。\n在Firefox里同事设置宽和高可以改变checkbox和radio的大小，除此之外，在chrome等浏览器里对他们设置宽高是不起作用的。")]),a("p",[t._v("本文给出了两种自定义checkboxhe和radio样式的方法：")]),t._m(2),a("p",[t._v("该方法的主要思路是：首先利用appearance属性清除radio或checkbox的原生样式，然后在此基础添加上一些自定义的样式和动画效果，以达到自定义样式的目的。\n用到了:after伪元素生成控件内部的选中样式。")]),t._m(3),a("p",[t._v("直接看demo：")]),t._m(4),a("p",[t._v("demo截图：")]),t._m(5),t._m(6),a("p",[t._v("这个方法是多数UI库使用的方法：首先将checkbox和radio隐藏，然后让相邻它的标签（或label标签）伪装成它，并设置样式，\n利用css3的“相邻兄弟选择器”（ + 或  ~ ）,通过checkboxhe和radio的选中切换该元素不同的样式，")]),a("p",[t._v("直接看demo：")]),t._m(7),t._v("\n时间仓促做的有点粗糙，只能简单地用绿色圆点和方点示意选中状态了。\n"),t._m(8),a("ul",[a("li",[t._v("方法一改变原控件的样式，只针对该控件做样式修改； 方法二相当于把原控件隐藏，添加其他标签代替了它")]),a("li",[t._v("方法一比较简单，但应用场景单一，只能用于这种表单填写的场景；方法二较复杂，需要更多的标签支持，\n但该方法"),a("strong",[t._v("应用场景更灵活")]),t._v("，可用来实现tab页切换等效果，见另一篇"),a("router-link",{attrs:{to:"use_of_checkbox.html"}},[t._v("checkbox的应用")])],1),a("li",[t._v("两个缺点都是兼容性不好，只支持高版本浏览器，方法一的appearance在用时还需要加上浏览器前缀")]),a("li",[t._v("等等")])]),a("p",[t._v("有说的不对的地方，望重拍指正。")]),a("comment-tool")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"radio和checkbox的自定义样式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#radio和checkbox的自定义样式","aria-hidden":"true"}},[this._v("#")]),this._v(" radio和checkbox的自定义样式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://denzel.netlify.com/css/styled_switch.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("原文链接")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"方法一：appearance-after"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法一：appearance-after","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法一：appearance + :after")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v('input[type="radio"],\ninput[type="checkbox"]')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token property"}},[t._v("appearance")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"422",scrolling:"no",title:"styled switch",src:"//codepen.io/_tianxia/embed/deQBXv/?height=422&theme-id=dark&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/_tianxia/pen/deQBXv/"}},[this._v("styled switch")]),this._v(" by tianxia ("),e("a",{attrs:{href:"https://codepen.io/_tianxia"}},[this._v("@_tianxia")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://p8rbt50i2.bkt.clouddn.com/blogswitch001.gif",alt:"demo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"方法二：opacity-0-display-none-额外标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法二：opacity-0-display-none-额外标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 方法二：opacity: 0(display:none) + 额外标签")])},function(){var t=this.$createElement,e=this._self._c||t;return e("iframe",{staticStyle:{width:"100%"},attrs:{height:"302",scrolling:"no",title:"styled switch 2",src:"//codepen.io/_tianxia/embed/jxdKKL/?height=302&theme-id=dark&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("See the Pen "),e("a",{attrs:{href:"https://codepen.io/_tianxia/pen/jxdKKL/"}},[this._v("styled switch 2")]),this._v(" by tianxia ("),e("a",{attrs:{href:"https://codepen.io/_tianxia"}},[this._v("@_tianxia")]),this._v(") on "),e("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"对比一下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对比一下","aria-hidden":"true"}},[this._v("#")]),this._v(" 对比一下")])}],!1,null,null,null);e.default=r.exports}}]);