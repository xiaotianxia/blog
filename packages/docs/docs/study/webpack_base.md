# webpack 基础

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
module.export = {
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
 

## 异步加载 
使用
```js
require.ensure(
  dependencies: String[],
  callback: function(require),
  errorCallback: function(error),
  chunkName: String
)
```

vue-router中使用：
```js
const Foo = r => require.ensure([], () => r(require('./Foo.vue')), 'group-foo');
```
可以被import替代
### vue中懒加载组件
```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue');
```

## webpack优化配置
https://www.cnblogs.com/imwtr/p/7801973.html



