/* global VUEPRESS_VERSION, LAST_COMMIT_HASH*/

import { createApp } from './app'

const { app, router } = createApp(false /* isServer */)

window.__VUEPRESS_VERSION__ = {
  version: VUEPRESS_VERSION,
  hash: LAST_COMMIT_HASH
}

// 百度统计代码插入
if (process.env.NODE_ENV === 'production') {
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement('script')
    hm.src = '//hm.baidu.com/hm.js?a4fc2a60b49a0cde2c60671351164359'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })();

  (function () {
    var sele = document.createElement('script')
    sele.src = '//s23.cnzz.com/z_stat.php?id=1276810675&web_id=1276810675'
    var t = document.getElementsByTagName('script')[0]
    t.parentNode.insertBefore(sele, t)
  })()
}

router.onReady(() => {
  app.$mount('#app')
})
