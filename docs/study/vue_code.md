# vue code

- Vue渲染的过程：html字符串 → render函数 → vnode → 真实dom节点(template --> AST --> render Function --> VNode --> patch Dom)

- nextTick: vue自己实现了一个时间循环队列，使用顺序：setImmediate --> MessageChannel --> Promise --> setTimeout，
在下一个tick统一执行队列中的回调(Watcher中的run)，拥有相同id的watcher不会重复加入队列，
保证同一数据多次改变只刷新一次视图。[1](https://github.com/muwoo/blogs/issues/13)

- 

源码分析
https://juejin.im/user/5b0f4be36fb9a009f74bf263/posts
https://github.com/muwoo/blogs