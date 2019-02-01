# DOM

## DOMContentLoaded与load的区别
DOM文档加载步骤：

- (1）解析html结构
- (2）加载外部脚本和样式表文件
- (3）解析并执行脚本代码
- (4）构造HTML DOM模型   // DOMContentLoaded执行点
- (5）加载图片等外部文件
- (6）页面加载完毕      //load

## script style 在 html 里的顺序问题

- CSS 不会阻塞 DOM 的解析，但会阻塞 DOM 渲染。
- JS 阻塞 DOM 解析，但浏览器会"偷看"DOM，预先下载相关资源。
- 浏览器遇到 script 且没有defer或async属性的 标签时，会触发页面渲染，因而如果前面CSS资源尚未加载完毕时，浏览器会等待它加载完毕在执行脚本。

因此，

- script 最好放最底下
- link 最好放最上面
- 当 script 和 link 同事在上面的时候，最好 将 script 放在 link 上面



参考
[1](https://juejin.im/post/59c60691518825396f4f71a1)
