# webpack

## 底层原理
- 1.读取文件分析模块依赖
- 2.对模块进行解析执行(深度遍历)
- 3.针对不同的模块使用相应的loader
- 4.编译模块，生成抽象语法树AST。
- 5.循环遍历AST树，拼接输出js。
![](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)

## 基本配置 ?

```js
//=================极简版====================
module.export={
    entrty: '',//入口
    output: '',//打包出口
    devServer: {},//开发服务器
    module: {},//模块配置
    plugins: [],//插件的配置
    mode: ''//更改模式（开发模式、线上模式）
    resolve: {}//配置解析
}
```

```js
//=================详细版====================
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development', //4新增，development : 开发模式，打包的代码不会被压缩，开启代码调试；production : 生产模式，则正好反之。
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/', //最终访问的路径就是：localhost:8888/dist/xxx.min.js
        filename: 'xxx.min.js', // hash:[hash]\[chunkhash]\[contenthash]
        //开发类库时用
        libraryTarget: 'umd', //模块化规范： amd、commonjs、umd，其他值var、this等参考[2]
        library: 'XXX', //库名称
        umdNamedDefine: true
    },
    //配置模块如何解析
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx', '.scss','.json','.css'],//自动解析确定的扩展,省去你引入组件时写后缀的麻烦
        modules: ['node_modules'],//webpack 解析模块时应该搜索的目录，默认就是node_modules
        //配置路径别名
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        //各loader
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'}
                ]
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, './src')]
            }
        ]
    },

    //各插件
    plugins: [
        //代码压缩
        new uglify(),
        // vue-loader插件
        new VueLoaderPlugin()
    ],

    //配置开发服务器
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),//配置开发服务运行时的文件根目录 （把出口js打包到dist文件夹下，运行目录就是dist）
        host: 'localhost',//开发服务器监听的主机地址 
        compress: true,//启用 gzip 压缩
        open:true,// 自动打开浏览器
        port: 8888
    }
}
```

参考
[1](https://www.jianshu.com/p/ce345815cccc)
[2](https://www.jianshu.com/p/d22f678af5b7)
 
## 运行原理

解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。

注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。

从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。

在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。

递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。

输出所有chunk到文件系统。

## 编写loader ?

loader的功能：对模块源码的转换

loader大概就是这样一个JavaScript文件：

```js
module.exports = function(source) {
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


## 编写plugin ?
使用插件
```js
// webpack.config.js
var HelloWorldPlugin = require('hello-world');

module.exports = {
    // ... config settings here ...
    plugins: [new HelloWorldPlugin({ options: true })]
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
class MyExampleWebpackPlugin {
    // 在插件函数的 prototype 上定义一个 `apply` 方法。
    apply(compiler) {
        // 指定一个挂载到 webpack 自身的事件钩子。
        compiler.hooks.emit.tapAsync(
            'MyExampleWebpackPlugin',
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
[1](中文)(https://www.webpackjs.com/contribute/writing-a-plugin/)
[2](英文es6)(https://webpack.js.org/contribute/writing-a-plugin/)


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




异步加载
https://blog.csdn.net/zhbhun/article/details/46826129


