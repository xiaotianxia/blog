# vue

## 虚拟DOM

## 生命周期
参考 [1](https://juejin.im/post/5afd7eb16fb9a07ac5605bb3)


## 常见问题及技巧
### data必须是一个函数

因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。

### props 要比 data 先完成初始化，所以我们可以利用这一点给 data 初始化一些数据进去
```js
export default {
    data () {
        return {
            buttonSize: this.size
        }
    },
    props: {
        size: String
    }
}
```

### this.$set() 使用
a.数组的下标去修改数组的值，数据已经被修改了，但是不触发updated函数，视图不更新。

b.vue中检测不到对象属性的添加和删除

### 生命周期函数/methods/watch里面不应该使用箭头函数
箭头函数的this指向外层，即函数所在的所用域，普通函数的this指向函数的调用者

### delete 与 Vue.delete ($delete)
- 都用于数组和对象
- delete 删除数组后，被删除的元素还占据原来的位置，变成empty或undefined，其他元素的简直不发生变化
- Vue.delete 直接删除了数组 改变了数组的键值。

### watch 的 immediate 属性
```js
created() {
    this.fetchPostList()
},

watch: {
    searchInputValue() {
        this.fetchPostList()
    }
}
```
可直接写成这样：
```js
watch: {
    searchInputValue: {
        handler: 'fetchPostList',
        immediate: true
    }
}
```

### 注销 watch
使用app.$watch()时，不用的时候须要注销掉，不然会引起内存泄露。该方法返回的就是一个注销方法，只要调用一下就可以了。
```js
//注册watch
const unWatch = app.$watch('text', (newVal, oldVal) => {
  console.log(`${newVal} : ${oldVal}`);
});

// 手动注销watch
unWatch(); 
```

### 可以在同一个挂载点动态切换多个组件：
```js
var vm = new Vue({
  el: '#example',
  data: {
    currentView: 'home'
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
<component v-bind:is="currentView">
  <!-- 组件在 vm.currentview 变化时改变！ -->
</component>
```

### 异步组件
不需要首屏加载的组件都使用异步组件的方式来加载（如多tab），包括需要触发条件的动作也使用异步组件（如弹窗） 
使用方式为：v-if来控制显示时机，引入组件的Promise即可。
```html
<template>
    <div>
        <HellowWorld v-if="showHello" />
    </div>
</template>
<script>
export default {
    components: { HellowWorld: () => import('../components/HelloWorld.vue') },
  
    data() {
        return {
            showHello: false
        }
    },

    methods: {
        initAsync() {
            addEventListener('scroll', (e) => {
                if (scrollY > 100) {
                    this.showHello = true
                }
            });
        }
    }
}
</script>
```

### 深层组件通信 provide/inject
```html
//父组件 parent.vu
<template>
    <div>
        <child></child>
    </div>
</template>
<script>
export default {
    name: 'parent',
    provide: {
        data: 'I am parent.vue'
    },
    components: {
        Child
    }
}
</script>
```

```html
//子组件 child.vue
<template>
    <div>
        <grand-child></grand-child>
    </div>
</template>
<script>
export default {
    name: 'child',
    components: {
        GrandChild
    }
}
</script>
```

```html
//孙组件 grandchild.vue
<script>
export default {
    name: 'grandchild',
    inject: ['data'],
    mounted() {
        // 控制台输出:
        // grandchild:inject: I am parent.vue
        console.log('grandchild:inject:',this.data);
    }
}
</script>
```
provide 选项应该是一个对象或返回一个对象的函数。该对象包含可注入其子孙的属性。

inject 选项应该是一个字符串数组或一个对象，该对象的 key 代表了本地绑定的名称，value 就为provide中要取值的key。

参考
[1](https://juejin.im/post/5c204c98e51d454637699e33)

### slot-scope
父组件从子组件获取数据的方法，相当于函数中的回调
参考elementUI里的table
```html
<el-table-column
    fixed="right"
    label="操作"
    width="100">
    <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
    </template>
</el-table-column>
```
参考
[1](https://segmentfault.com/a/1190000015884505)

### sync修饰符
父组件
```html
<child :isShow.sync="isShow" v-show="isShow"/>
//是下面写法的语法糖
<child @update:isShow="e => isShow = e;" v-show="isShow"/>
```
子组件
```html
<input type="button" value="点我隐身" @click="upIsShow">
<script>
    export default {
        methods:{
            upIsShow(){
                this.$emit("update:isShow",false);
            }
        }
    }
</script>
```
### 监听子组件(包括第三方子组件)的生命周期钩子
只需要这样：
```html
<Child @hook:mounted="childMounted"/>
```
```js
methods: {
    childMounted() {
        console.log("Child was mounted");
    }
  }
```
见[这里](https://codesandbox.io/s/18r05pkmn7)

### 用 Object.freeze 优化长列表性能

### Vue中的错误、警告捕获
全局捕获：
```js
//捕获错误
Vue.config.errorHandler = function(err, vm, info) {
    console.log(`Error: ${err.toString()}\nInfo: ${info}`);
}
//捕获浸膏
Vue.config.warnHandler = function(msg, vm, trace) {
    console.log(`Warn: ${msg}\nTrace: ${trace}`);
}
```
组件级捕获：
- 生命周期钩子 errorCaptured
```js
errorCaptured(err, vm, info) {
    console.log(`cat EC: ${err.toString()}\ninfo: ${info}`); 
    return false;
}
```
- renderError 只在开发者环境下工作。
```js
new Vue({
    render (h) {
        throw new Error('oops');
    },
    renderError (h, err) {
        return h('pre', { style: { color: 'red' }}, err.stack);
    }
}).$mount('#app');
```

参考
[1](https://www.jianshu.com/p/d42c508ea9de)
[2](https://juejin.im/post/5be01d0ce51d450700084925)
[3](https://www.haorooms.com/post/vue_7secret)
[4](https://juejin.im/post/5b174de8f265da6e410e0b4e)
[5](https://www.haorooms.com/post/vue_project_cg)
[6](https://juejin.im/post/5c204c98e51d454637699e33)
[7](https://juejin.im/post/5ce3b519f265da1bb31c0d5f)

### Vue 的父组件和子组件生命周期钩子执行顺序
- 加载渲染过程：
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
- 子组件更新过程：
父beforeUpdate->子beforeUpdate->子updated->父updated
- 父组件更新过程：
父beforeUpdate->父updated
- 销毁过程：
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
