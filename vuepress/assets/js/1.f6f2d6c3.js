(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{308:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("通知标题")]),t._m(7),a("p",[t._v("一个被允许用来设置通知的对象。它包含以下属性：")]),t._m(8),t._m(9),t._m(10),a("p",[t._v("一个用于表明当前通知显示授权状态的字符串。可能的值包括：denied (用户拒绝了通知的显示),\ngranted (用户允许了通知的显示), 或 default (因为不知道用户的选择，所以浏览器的行为与 denied 时相同)。")]),t._m(11),a("p",[t._v("这些属性都是Notification实例中的属性，且都是只读的。")]),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),a("p",[t._v("用于当前页面想用户申请显示通知的权限。这个方法只能被用户行为调用（比如：onclick 事件），并且不能被其他的方式调用。")]),t._m(17),t._m(18),t._m(19),t._m(20),a("p",[t._v("有些参数暂未支持")]),a("WebAPIs-Notification"),t._m(21),a("p",[t._v("主要看了mac下的chrome、chromium和Firefox。windows下的还请读者自行测试...")]),a("p",[t._v("chromium应该算是支持的最好的了")]),t._m(22),a("p",[t._v("chrome67和Firefox样式基本一样")]),a("p",[t._v("chrome67")]),t._m(23),a("p",[t._v("Firefox")]),t._m(24),t._m(25),a("p",[t._v("PC端的表现见上图，手机端嘛...chrome、Firefox等全跪😂 ，反而UC浏览器貌似支持这个属性，但是我的UC显示是denied，\n不知道是我误操作拒绝了权限还是浏览器的bug，算了不深究了...")]),t._m(26),a("p",[t._v("没啥好总结的，兼容性也就这样，算是为未来做点只是储备吧，我们依然坚定地——相信未来。")]),t._m(27),t._m(28)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"几个有用的web-api——桌面通知api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#几个有用的web-api——桌面通知api","aria-hidden":"true"}},[this._v("#")]),this._v(" 几个有用的Web API——桌面通知API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"https://denzel.netlify.com/js/useful_webapis_notification.html?_=65432123456523",target:"_blank",rel:"noopener noreferrer"}},[this._v("原文链接")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"构造方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构造方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 构造方法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" notification "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Notification")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("title"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#title","aria-hidden":"true"}},[this._v("#")]),this._v(" title")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"options-可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options-可选","aria-hidden":"true"}},[this._v("#")]),this._v(" options (可选)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" dir "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 文字的方向；它的值可以是 auto（自动）"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ltr（从左到右）"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" or rtl（从右到左）\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" lang"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 指定通知中所使用的语言。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" badge"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 一个图片的url，当桌面没有空间来展示该通知时，用来表示该通知的图标。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" body"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 通知中额外显示的字符串。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" tag"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 赋予通知一个id，以便在必要的时候对通知进行刷新、替换或移除。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 一个图片的url，将被用于显示通知的图标。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" image"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 一个图片的url，显示在通知文字下方。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 与通知绑定的数据，可以是任意数据类型。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" vibrate"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 通知时设备震动，数组，例如"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("表示设备震动"),a("span",{attrs:{class:"token number"}},[t._v("200")]),t._v("毫秒，然后停止"),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("毫秒，再震动"),a("span",{attrs:{class:"token number"}},[t._v("200")]),t._v("毫秒。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" renotify"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 是否重新通知，默认"),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" requireInteraction"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 是否持续显示通知，"),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("表示通知会一直显示而不会自动消失，直到用户点击或者关闭。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" actions"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("数组，表示通知来时用户可操作的行为。")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("不太懂怎么用"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("joy"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 以下是新添加的属性，目前大多数浏览器尚未支持。")]),t._v("\n\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" silent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 是否静音，默认为"),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" sound"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 声音文件的url，通知来时播放。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" noscreen"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 是否不在屏幕上显示通知信息，默认为"),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("，表示通知来时激活屏幕。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" sticky"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 通知是否“粘屏”？默认"),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("。\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"静态属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Notification.permission")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"实例属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 实例属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" title  在构造方法中指定的 title 参数。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" dir  通知的文本显示方向。在构造方法的 options 中指定。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" lang  通知的语言。在构造方法的 options 中指定。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" body  通知的文本内容。在构造方法的 options 中指定。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" tag  通知的id。在构造方法的 options 中指定。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" icon  通知的图标图片的url地址。在构造方法的 options 中指定。\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" onclick 每当用户点击通知时被触发。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" onshow 当通知显示的时候被触发。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" onerror 每当通知遇到错误时被触发。\n"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" onclose 当用户关闭通知时被触发。\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"静态方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 静态方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Notification.requestPermission()")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"部分代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 部分代码")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        queryParams"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'一条新通知'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            body"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'12345哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈12345'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            icon"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://denzel.netlify.com/hero.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            badge"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://denzel.netlify.com/hero.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            image"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://denzel.netlify.com/hero.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// silent: true,")]),t._v("\n            sound"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'http://p8rbt50i2.bkt.clouddn.com/blogsmile.wav'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            dir"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'rtl'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                t"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            vibrate"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        time"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        msg"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\nmethods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("onConfirm")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("!")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Notification'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token function"}},[t._v("alert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'您的浏览器不支持通知API'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permission"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//检查用户是否同意接受通知")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//用户已同意")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permission "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"granted"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("newNotification")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//若没拒绝获取权限")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permission "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"denied"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("//向用户获取权限")]),t._v("\n            Notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("requestPermission")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("permission"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("newNotification")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("newNotification")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" notification "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Notification")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token comment"}},[t._v("//事件绑定")]),t._v("\n        notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'show'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$message"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("info")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'通知出现'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("t"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toLocaleTimeString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n        notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'click'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$message"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("info")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'你点击了通知'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token comment"}},[t._v("// notification.close();")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        notification"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'close'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$message"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("info")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'你关闭了通知'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"demo-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo-2","aria-hidden":"true"}},[this._v("#")]),this._v(" demo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式","aria-hidden":"true"}},[this._v("#")]),this._v(" 样式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://p8rbt50i2.bkt.clouddn.com/blog/notification_chromium.png",alt:"small-demo chromium"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://p8rbt50i2.bkt.clouddn.com/blog/notification%E2%80%94%E2%80%94chrome67.png",alt:"small-demo chrome"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://p8rbt50i2.bkt.clouddn.com/blog/natification_firefox.png",alt:"small-demo Firefox"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容性","aria-hidden":"true"}},[this._v("#")]),this._v(" 兼容性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/notification",target:"_blank",rel:"noopener noreferrer"}},[this._v("notification")])]),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/notification/Notification",target:"_blank",rel:"noopener noreferrer"}},[this._v("Notification.Notification()")])]),s("li",[s("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2016/07/know-html5-web-notification/",target:"_blank",rel:"noopener noreferrer"}},[this._v("简单了解HTML5中的Web Notification桌面通知")])])])}],!1,null,null,null);s.default=o.exports}}]);