# vue

## 虚拟DOM

## 生命周期
参考 [1](https://juejin.im/post/5afd7eb16fb9a07ac5605bb3)

props 要比 data 先完成初始化

## 常见问题及技巧
- 1. data必须是一个函数

因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。

- 2. this.$set() 使用

a.数组的下标去修改数组的值，数据已经被修改了，但是不触发updated函数，视图不更新。

b.vue中检测不到对象属性的添加和删除

- 3. 生命周期函数/methods/watch里面不应该使用箭头函数

箭头函数的this指向外层，即函数所在的所用域，普通函数的this指向函数的调用者

- 4. watch的immediate属性
```js
created() {
    this.fetchPostList()
},

watch: {
    searchInputValue(){
        this.fetchPostList()
    }
}
```
可直接写成这样：
```js
watch: {
    searchInputValue:{
        handler: 'fetchPostList',
        immediate: true
    }
}
```

- 5. 可以在同一个挂载点动态切换多个组件：
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

- 6. 深层组件通信 provide/inject
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

- 7. slot-scope
参考
[1](https://segmentfault.com/a/1190000015884505)




参考 
[1](https://juejin.im/post/5be01d0ce51d450700084925)
[2](https://www.haorooms.com/post/vue_7secret)
[3](https://juejin.im/post/5b174de8f265da6e410e0b4e)
[4](https://www.haorooms.com/post/vue_project_cg)
[5](https://juejin.im/post/5c204c98e51d454637699e33)



异步加载
https://blog.csdn.net/zhbhun/article/details/46826129



https://juejin.im/user/5b0f4be36fb9a009f74bf263/posts