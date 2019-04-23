<template>
  <div class="theme-container">
    <div class="content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">回首页</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `这里空无一物呢。`,
  `怎么会那这里了呢。`,
  `好像哪里出错了。`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
