# http

## get post ?

- GET在浏览器回退时是无害的，而POST会再次提交请求。
- GET产生的URL地址可以被Bookmark，而POST不可以。
- GET请求会被浏览器主动cache，而POST不会，除非手动设置。
- GET请求只能进行url编码，而POST支持多种编码方式。
- GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
- GET请求在URL中传送的参数是有长度限制的，而POST没有。
- 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
- GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
- GET参数通过URL传递，POST放在Request body中。

实际上————

GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。

两者有一个最大的区别就是——

**GET产生一个TCP数据包；POST产生两个TCP数据包。**

对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。


## 缓存

它们的优先级是：(由上到下寻找，找到即返回；找不到则继续)
Service Worker
Memory Cache
Disk Cache
网络请求


当浏览器要请求资源时

调用 Service Worker 的 fetch 事件响应
查看 memory cache
查看 disk cache。这里又细分：

如果有强制缓存且未失效，则使用强制缓存，不请求服务器。这时的状态码全部是 200
如果有强制缓存但已失效，使用对比缓存，比较后确定 304 还是 200


发送网络请求，等待网络响应
把响应内容存入 disk cache (如果 HTTP 头信息配置可以存的话)
把响应内容 的引用 存入 memory cache (无视 HTTP 头信息的配置)
把响应内容存入 Service Worker 的 Cache Storage (如果 Service Worker 的脚本调用了 cache.put())


https://juejin.im/post/5c22ee806fb9a049fb43b2c5