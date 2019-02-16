# 性能


## 关键渲染路径

- 浏览器将HTML，CSS，JavaScript转换为屏幕上所呈现的实际像素，这期间所经历的一系列步骤，
叫做关键渲染路径（Critical Rendering Path）。

![](https://static.bluest.xyz/wp-content/uploads/csp_optimization_8.jpg)

参考
[1](https://bluest.xyz/critical-rendering-path-optimization.html)

## 网页性能优化方法 ?

| 网页内容         | 服务器                           | cookie           | js |
| --------        | -----                           | ----            | ---- |
| 减少http请求次数  | 使用CDN                          | 减少cookie大小    | 脚本置底     |
| 减少DNS查询次数   | 添加Expires、cache-control报文头  | 使用无cookie域名  |  使用外部脚本  |
| 避免页面跳转      | 使用Gzip压缩传输文件               | **图片**         |  精简代码    |
| 缓存ajax         | 配置Etags                        |   图片优化        |  去除冗余代码 |
| 延迟加载         |  尽早flush输出                     |  使用CSS sprite   |  减少DOM访问 |
| 预加载           |  避免空的图片src                   |   避免在html缩放图片 |        |
| 减少DOM元素数量    |   **CSS**     |   | |
| 根据域名划分内容    |  样式表置顶      |   | |
| 减少iframe        |  避免CSS表达式     |   | |
|  避免404          |        |   | |


参考： 
[1 配置ETag](https://blog.csdn.net/liaozhongping/article/details/51114264)

preload
async
defer
prefetch
dns-prefetch

预加载：
- preload   是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源；
preload 的资源加载顺序将被提前
- prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源。

延迟加载：
defer 和async 属性 提供给开发者一个方式来告诉浏览器哪些脚本是需要异步加载的。

这两个属性都告诉浏览器，它可以 “在后台” 加载脚本的同时继续解析 HTML，并在脚本加载完之后再执行。这样，脚本下载就不会阻塞 DOM 构建和页面渲染了。结果就是，用户可以在所有的脚本加载完成之前就能看到页面。

defer 和 async 之间的不同是他们开始执行脚本的时机的不同。

defer 比 async 要先引入。它的执行在解析完全完成之后才开始，它处在DOMContentLoaded事件之前。 它保证脚本会按照它在 HTML 中出现的顺序执行，并且不会阻塞解析。

```html
<link rel="preload" href="very_important.js" as="script">
<!-- 预加载字体你还必须设置crossorigin 属性，否则可能加载两次 -->
<link rel="preload" href="font.woff" as="font" crossorigin>
<!-- as还可以是image、style、audio、video -->
```

![](http://p0.qhimg.com/t01fcae11c6a3b7e11c.png)
![](http://p0.qhimg.com/t013c0fb17be3f45a83.png)

参考：
[1](https://www.zcfy.cc/article/building-the-dom-faster-speculative-parsing-async-defer-and-preload-x2605-mozilla-hacks-8211-the-web-developer-blog-4224.html?t=new)

https://juejin.im/post/5a1229596fb9a0451704cae8



