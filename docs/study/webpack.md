# webpack相关

## 基本配置 ?

```js
//=================极简版====================
module.export={
    entrty:'',//入口
    output:'',//打包出口
    devServer:{},//开发服务器
    module:{},//模块配置
    plugins:[],//插件的配置
    mode:''//更改模式（开发模式、线上模式）
    resolve:{}//配置解析
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


插件：
https://segmentfault.com/a/1190000016816813
## 编写plugin ?

