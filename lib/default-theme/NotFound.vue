<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">首页</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `怎么会一片空白...`,
  `我是谁？`,
  `我在哪？`,
  `我要去哪？`,
  `可能链接搞错了`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
