# webpack 基础

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

## 配置相关
### JS Tree Shaking
- webpack4 无需手动配置UglifyjsWebpackPlugin，只需要配置mode为"production"，即可显式激活 UglifyjsWebpackPlugin 插件 (根据版本不同，更新的webpack v4.x不配置mode也会自动激活插件)

- JS 的 Tree Shaking 依赖的是 ES2015 的模块系统（比如：import和export），所以如果依赖包没有使用 CommonJS 或者 ES6 的写法，是不会生效的
- import { chunk } from "lodash"; 需换成 lodash-es -> import { chunk } from "lodash-es";
    - 对于lodash，还可以通过其他的方式实现按需打包
        - babel插件 babel-plugin-lodash，通过配置.babelrc实现
        - webpack插件 lodash-webpack-plugin，通过配置webpack.config.js实现





