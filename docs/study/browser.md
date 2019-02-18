# 浏览器原理

## 浏览器渲染原理
当生成 DOM 树和 CSSOM 树以后，就将这两棵树组合为渲染树。
![](https://camo.githubusercontent.com/ae6a6d492332cd6332144f8e6c924d1197e26f7e/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031382f31322f32382f313637663536353235323166656132663f773d36383926683d33323726663d706e6726733d313235303739)

### async defer
**延迟加载**：
- defer 和async 属性 提供给开发者一个方式来告诉浏览器哪些脚本是需要异步加载的。

**加载及执行顺序**：
![](https://camo.githubusercontent.com/78835bfd6ba8899decaabec54b713bced79907c2/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031382f362f31362f313634303635366537303736356163373f773d36383926683d31313226663d6a70656726733d3136383935)
- 在加载多个JS脚本的时候，async是无顺序的加载，而defer是有顺序的加载。

参考：
[1](https://www.zcfy.cc/article/building-the-dom-faster-speculative-parsing-async-defer-and-preload-x2605-mozilla-hacks-8211-the-web-developer-blog-4224.html?t=new)
[2](https://github.com/ljianshu/Blog/issues/51)

### preload  prefetch dns-prefetch
**dns-prefetch 多用于预解析CDN的地址的DNS**
```html
    <link rel="dns-prefetch" href="//example.com">
```
**预加载**：
- preload 是告诉浏览器页面必定需要的资源，浏览器一定会加载这些资源；

**preload 的资源加载顺序将被提前**：
- prefetch 是告诉浏览器页面可能需要的资源，浏览器不一定会加载这些资源。
```html
    <link rel="preload" href="very_important.js" as="script">
    <!-- 预加载字体你还必须设置crossorigin 属性，否则可能加载两次 -->
    <link rel="preload" href="font.woff" as="font" crossorigin>
    <!-- as还可以是image、style、audio、video -->
```

**一个完整的结构**：
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Faster</title>
        <link rel="dns-prefetch" href="//cdn.com/">
        
        <link rel="preload" href="//js.cdn.com/p_1.js" as="script">
        <link rel="preload" href="//js.cdn.com/p_2.js" as="script">
        <link rel="preload" href="//js.cdn.com/p_3.js" as="script">

        <link rel="prefetch" href="//js.cdn.com/prefetch.js">
    </head>
    <body>

    <script type="text/javascript" src="//js.cdn.com/p_1.js" defer></script>
    <script type="text/javascript" src="//js.cdn.com/p_2.js" defer></script>
    <script type="text/javascript" src="//js.cdn.com/p_3.js" defer></script>
    </body>
</html>
```