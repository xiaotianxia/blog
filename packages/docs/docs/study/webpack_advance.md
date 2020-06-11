# webpack 进阶

## 运行原理
- 解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。
- 注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。
- 从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。
- 在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。
- 递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。
- 输出所有chunk到文件系统。

![](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)


## loader
- loader的功能：对模块源码的转换，将所有类型的文件转换为 webpack 能够处理(webpack只识别js)的有效模块
- loader大概就是这样一个JavaScript文件：
```js
module.exports = function (source) {
    //可以通过 this 访问Loader API
    //this是由webpack提供的，可以直接使用
    //source是原文件内容（abcde），下面对内容进行处理，这里是反转
    var result = source.split('').reverse().join(''); //edcba
    //返回JavaScript源码，必须是String或者Buffer
    return `module.exports = '${result}'`;
}
```

参考
[1](https://www.jianshu.com/p/7fa359ffcf8d)
[2](https://www.jianshu.com/p/60a8bd26796c)


## plugin
- 插件的功能：
    - 扩展 webpack 的功能，执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。
    - 在 webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果。
- 使用插件
```js
// webpack.config.js
var HelloWorldPlugin = require('hello-world');

module.exports = {
    // ... config settings here ...
    plugins: [
        new HelloWorldPlugin({ someOption: true })
    ]
};
```
webpack 插件由以下组成：
- 一个 JavaScript 命名函数。
- 在插件函数的 prototype 上定义一个 apply 方法。
- 指定一个绑定到 webpack 自身的事件钩子。
- 处理 webpack 内部实例的特定数据。
- 功能完成后调用 webpack 提供的回调。

```js
// A JavaScript class.
class HelloWorldPlugin {
    // 在插件函数的 prototype 上定义一个 `apply` 方法。
    apply(compiler) {
        // 指定一个挂载到 webpack 自身的事件钩子。
        compiler.hooks.emit.tapAsync(
            'HelloWorldPlugin',
            (compilation, callback) => {
                console.log('This is an example plugin!');
                console.log('Here’s the `compilation` object which represents a single build of assets:', compilation);

                compilation.addModule(/* ... */);

                callback();
            }
        );
    }
}
```

参考
[1](https://juejin.im/post/5ec169786fb9a043721b46ad#heading-15)
[2](https://www.webpackjs.com/contribute/writing-a-plugin/)


## webpack4 新特性 ?
- 受 Parcel 启发，支持 0 配置启动项目，不再强制需要 webpack.config.js 配置文件，默认入口 ./src/ 目录，默认entry ./src/index.js ，默认输出 ./dist 目录，默认输出文件 ./dist/main.js。
- 开箱即用 WebAssembly，webpack4提供了wasm的支持，现在可以引入和导出任何一个 Webassembly 的模块，也可以写一个loader来引入C++、C和Rust。（注：WebAssembly 模块只能在异步chunks中使用）
- 提供mode属性，设置为 development 将获得最好的开发体验，设置为 production 将专注项目编译部署，比如说开启 Scope hoisting 和 Tree-shaking 功能。
- 全新的插件系统，提供了针对插件和钩子的新API，变化如下：
    - 所有的 hook 由 hooks 对象统一管理，它将所有的hook作为可扩展的类属性
    - 添加插件时，你需要提供一个名字
    - 开发插件时，你可以选择插件的类型（sync/callback/promise之一）
    - 通过 this.hooks = { myHook: new SyncHook(…) } 来注册hook

参考
[1](http://louiszhai.github.io/2019/01/04/webpack4/)

## webpack配置优化
从减少打包时间、缩小打包体积的角度入手

- 优化 Loader 的文件搜索范围，从 include 和 exclude 配置入手，配合文件缓存 loader: 'babel-loader?cacheDirectory=true'；
- HappyPack，将 Loader 的同步执行转换为并行的，充分利用系统资源来加快打包效率；
- DllPlugin，将特定的类库提前打包然后引入；
- 代码压缩，一般使用 UglifyJS 来压缩代码，不过这是单线程的，可使用 webpack-parallel-uglify-plugin 来并行运行 UglifyJS，从而提高效率;
- 按需加载，一个项目难免会存在几十个页面的路由，如果所有页面的都打包进一个 js 文件（文件就会过大），加载第一个页面就会耗费很长时间。实现按需加载，每个页面（路由）打包成一个文件。另外，对于一些库文件也可以打包成一个文件。
- Scope Hoisting，范围提升，会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去；（Scope Hoisting 的实现原理其实很简单：分析出模块之间的依赖关系，尽可能的把打散的模块合并到一个函数中去，但前提是不能造成代码冗余。
因此只有那些被引用了一次的模块才能被合并。）
- Tree Shaking，（树抖动，将一些要掉落的叶子或小树杈抖落）删除项目中未被引用的代码；

[1](https://www.cnblogs.com/imwtr/p/7801973.html)

## webpack热更新原理
[1](https://zhuanlan.zhihu.com/p/30669007)