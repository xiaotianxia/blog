# vue code

## new Vue() 做了什么
```js
Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // ...忽略，从第45行看起
    if (process.env.NODE_ENV !== 'production') {
        // 作用域代理
        initProxy(vm)
    } else {
        vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    // 建立父子组件关系，在当前实例上添加一些属性和生命周期标识。如：$children、$refs、_isMounted等。
    initLifecycle(vm)
    // 用来存放除@hook:生命周期钩子名称="绑定的函数"事件的对象。如：$on、$emit等。
    initEvents(vm)
    // 初始化$slots、$attrs、$listeners
    initRender(vm)
    callHook(vm, 'beforeCreate')
    // 初始化inject 用于高阶组件，与provide配合使用
    initInjections(vm) 
    // 很多选项初始化的汇总，包括：props、methods、data、computed 和 watch 等。
    // 此时才能访问到各种数据
    initState(vm)
    // 初始化provide
    initProvide(vm) 
    callHook(vm, 'created')
    // ...忽略
    // 挂载实例  此时才能访问到DOM节点
    if (vm.$options.el) {
        vm.$mount(vm.$options.el)
    }
  }
}
```

## 生命周期
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed
- 不常用： 
    - activated：keep-alive 组件激活的时候调用
    - deactivated：keep-alive 组件停用的时候调用
    - errorCaptured：2.5.0+，当捕获一个来自子孙组件的错误时被调用。
    - serverPrefetch：2.6+，用来处理ssr的。允许我们在渲染过程中“等待”异步数据

## Vue渲染的过程
html字符串 → render函数 → vnode → 真实dom节点(template --> AST --> render Function --> VNode --> patch Dom)

## nextTick
vue自己实现了一个时间循环队列，使用顺序：setImmediate --> MessageChannel --> Promise --> setTimeout，在下一个tick统一执行队列中的回调(Watcher中的run)，拥有相同id的watcher不会重复加入队列，保证同一数据多次改变只刷新一次视图。[1](https://github.com/muwoo/blogs/issues/13)


源码分析
https://juejin.im/user/5b0f4be36fb9a009f74bf263/posts
https://github.com/muwoo/blogs

## defineProperty、Proxy
- defineProperty 缺点
    - 属性的新加或者删除也无法监听
    - 数组元素的增加和删除也无法监听
    - 无法监听es6的Set、WeakSet、Map、WeakMap的变化
    - 无法监听Class类型的数据
    
- Proxy缺点
    - 兼容性差，IE任意版本都不支持