(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{378:function(t,e,a){"use strict";a.r(e);var r=a(1),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("最近在学习SVG相关的内容，感叹SVG真的是太强大了。内容之多，根本不是一两篇文章能够涵盖的。所以决定还是找几个小点慢慢学习吧。")]),a("p",[t._v("很多电商网站里，在加入购物车时都会有一个形象的动画，让宝贝以类似抛物线的轨迹飞进购物车，就像不要钱一样😂 。\n像这样：")]),t._m(2),a("p",[t._v("实现这种效果可能有很多方法，但是用SVG可以快速简单的实现。今天我们一块学习一下这个方法。")]),t._m(3),a("p",[t._v("SVG中最强大的元素莫过于path了，它可以描绘机会任意的2D图形。")]),a("p",[t._v("一个简单的路径是这样婶儿的：")]),t._m(4),a("p",[t._v("还有稍微复杂的路径：")]),t._m(5),a("p",[t._v("这是一个心形，下面会用到这个路径。当然这种路径不是手动写出来的，而是用专门的软件导出的。这个就是我用PS导出来的。")]),a("p",[t._v("path有以下这些指令：")]),t._m(6),t._m(7),a("p",[t._v("两个都是CSS属性。")]),t._m(8),t._m(9),a("p",[t._v("可想而知，用这两个属性就能实现路径动画了，只需改变offset-distance的值即可。")]),a("p",[t._v("举一个栗子：")]),t._m(10),a("spreadown",{attrs:{defaultShow:""}},[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"480",scrolling:"no",title:"SVG-二次贝塞尔曲线",src:"//codepen.io/_tianxia/embed/VBmBGY/?height=480&theme-id=33504&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/VBmBGY/"}},[t._v("SVG-二次贝塞尔曲线")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/VBmBGY/"}})],1),a("p",[t._v("如果是心形的呢，我们让它40s之内转10圈，再来一个栗子：")]),t._m(11),a("spreadown",{attrs:{defaultShow:""}},[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"410",scrolling:"no",title:"SVG & CSS path",src:"//codepen.io/_tianxia/embed/PBbwXd/?height=410&theme-id=33504&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/PBbwXd/"}},[t._v("SVG & CSS path")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/PBbwXd/"}})],1),t._m(12),t._m(13),a("p",[t._v("如下面俩图：")]),t._m(14),a("p",[t._v("同学们可以自行感受下，\n"),a("spreadown",[a("my-iframe",{attrs:{src:"https://myst729.github.io/bezier-curve/",height:"720px"}})],1),t._v("\n挂了？！那就点击"),a("a",{attrs:{href:"https://myst729.github.io/bezier-curve/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里")]),t._v("自行前往。")],1),t._m(15),a("p",[t._v("这样：")]),t._m(16),a("p",[t._v("只要在页面上获取到这三个点，就可以了。")]),a("p",[t._v("又一个栗子：")]),t._m(17),a("spreadown",{attrs:{defaultShow:""}},[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"440",scrolling:"no",title:"SVG-动态贝塞尔曲线",src:"//codepen.io/_tianxia/embed/MBbqGM/?height=440&theme-id=33504&default-tab=js,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/MBbqGM/"}},[t._v("SVG-动态贝塞尔曲线")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/MBbqGM/"}})],1),a("p",[t._v("继续添加上按钮，加点图片，就是这样的：")]),t._m(18),a("spreadown",{attrs:{defaultShow:""}},[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"564",scrolling:"no",title:"SVG-路径动画",src:"//codepen.io/_tianxia/embed/djOwyY/?height=564&theme-id=33504&default-tab=js,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/djOwyY/"}},[t._v("SVG-路径动画")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/djOwyY/"}})],1),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"svg轻松实现路径动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svg轻松实现路径动画","aria-hidden":"true"}},[this._v("#")]),this._v(" SVG轻松实现路径动画")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://pq3mt9wke.bkt.clouddn.com/path006.gif",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"svg路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svg路径","aria-hidden":"true"}},[this._v("#")]),this._v(" SVG路径")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("path")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("d")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("M10 10 L75 10 L75 75 Z"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("path")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("d")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("M199.428,125.107C159.17,32.871,44.736,54.392,43.983,161.445c-0.417,58.8,54.491,80.773,91.049,104.277,35.45,22.8,60.68,53.978,64.634,67.252,3.385-13.006,31.486-45.071,64.3-67.889,35.88-24.951,91.466-45.485,91.049-104.279C354.26,53.487,237.835,36.55,199.428,125.107Z"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("指令")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("M(Move to)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("x y")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("起始点坐标x y")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("L(Line to)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("x y")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("从当前点的坐标画直线到指定点的 x y坐标")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("H(Horizontal line to)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("x")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("从当前点的坐标画水平直线到指定的x轴坐标")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("V(Vertical line to)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("y")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("从当前点的座标画垂直直线到指定的y轴坐标")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("C(Curve)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("x1 y1 x2 y2 x y")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("从当前点的坐标画条贝塞风线到指定点的x, y坐标，其中 x1 y1及x2, y2为控制点")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("S(Smooth curve)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("x2 y2 x y")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("从当前点的坐标画条反射的贝塞曲线到指定点的x, y坐标，其中x2, y2为反射的控制点")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Q(Quadratic Bézier curve)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("x1 y1 x y")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("从当前点的坐标画条反射二次贝塞曲线到指定点的x, y坐标，其中x1 y1为控制点")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("T(Smooth Quadratic Bézier curve)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("x y")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("从当前点的坐标画条反射二次贝塞曲线到指定点的x, y坐标，以前一个坐标为反射控制点")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("A(Arc)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("rx ry x-axis-rotation large-arc-flag sweep-flag x y")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("从当前点的坐标画个椭圆形到指定点的x, y坐标，其中rx, ry为椭圆形的x轴及y轴的半径，x-axis-rotation是弧线与x轴的旋转角度，large-arc-flag则设定1最大角度的弧线或是0最小角度的弧线，sweep-flag设定方向为1顺时针方向或0逆时针方向")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Z(Closepath)")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("关闭路径，将当前点坐标与第一个点的坐标连接起来")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"offset-path、offset-distance"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#offset-path、offset-distance","aria-hidden":"true"}},[this._v("#")]),this._v(" offset-path、offset-distance")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("offset-path")]),this._v("表示元素的运动路径；")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("offset-distance")]),this._v("定义了元素在路径上运动的距离，单位是数值或百分比。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"demo-🌰"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo-🌰","aria-hidden":"true"}},[this._v("#")]),this._v(" demo 🌰")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"demo-🌰🌰"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo-🌰🌰","aria-hidden":"true"}},[this._v("#")]),this._v(" demo 🌰🌰")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"贝塞尔曲线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贝塞尔曲线","aria-hidden":"true"}},[this._v("#")]),this._v(" 贝塞尔曲线")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("那怎么模拟出抛物线的形状呢？这里想到了贝塞尔曲线，因为path可以很轻松的绘制贝塞尔曲线。\n对于贝塞尔曲线其实我不是太了解，只是看着这种曲线就觉得很“性感”，而且貌似阶数越高越是"),e("strong",[this._v("性感")]),this._v("😊。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://pq3mt9wke.bkt.clouddn.com/path005.gif",alt:"small demo"}}),e("img",{attrs:{src:"http://pq3mt9wke.bkt.clouddn.com/path003.gif",alt:"small demo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("于是我们可以用一个二阶贝塞尔曲线来模拟抛物线的轨迹：我们暂定三个点分别在"),e("strong",[this._v("左下角")]),this._v("、"),e("strong",[this._v("上中间")]),this._v("和"),e("strong",[this._v("左中间")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://pq3mt9wke.bkt.clouddn.com/blogpath.gif",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"demo-🌰🌰🌰"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo-🌰🌰🌰","aria-hidden":"true"}},[this._v("#")]),this._v(" demo 🌰🌰🌰")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"demo-🌰🌰🌰🌰"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo-🌰🌰🌰🌰","aria-hidden":"true"}},[this._v("#")]),this._v(" demo 🌰🌰🌰🌰")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("遗憾的是，目前"),e("a",{attrs:{href:"https://caniuse.com/#search=offset-path",target:"_blank",rel:"noopener noreferrer"}},[this._v("只有Chrome和部分移动端浏览器（如安卓版UC和三星）")]),this._v("支持offset-path属性😰。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("除此之外，还有三个相关属性："),e("a",{attrs:{href:"https://www.w3.org/TR/motion-1/#offset-anchor-property",target:"_blank",rel:"noopener noreferrer"}},[this._v("offset-ancor")]),this._v("、"),e("a",{attrs:{href:"https://www.w3.org/TR/motion-1/#offset-rotate-property",target:"_blank",rel:"noopener noreferrer"}},[this._v("offset-rotate")]),this._v("和"),e("a",{attrs:{href:"https://www.w3.org/TR/motion-1/#offset-position-property",target:"_blank",rel:"noopener noreferrer"}},[this._v("offset-position")]),this._v("\n分别表示锚定的中心点、运动的角度和路径的初始位置，感兴趣的同学可自行前往学习。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"https://www.w3.org/TR/motion-1/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Motion Path Module Level 1")])]),e("li",[e("a",{attrs:{href:"http://www.w3cplus.com/svg/svg-animation-guide.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("SVG 路径动画简易指南")])]),e("li",[e("a",{attrs:{href:"https://myst729.github.io/bezier-curve/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Bézier Curve")])]),e("li",[e("a",{attrs:{href:"http://cubic-bezier.com/#.17,.67,.83,.67",target:"_blank",rel:"noopener noreferrer"}},[this._v("http://cubic-bezier.com")])])])}],!1,null,null,null);e.default=s.exports}}]);