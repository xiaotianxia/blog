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





参考 
[1](https://juejin.im/post/5be01d0ce51d450700084925)
[2](https://www.haorooms.com/post/vue_7secret)




https://juejin.im/user/5b0f4be36fb9a009f74bf263/posts