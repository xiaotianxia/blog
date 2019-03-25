/* global BASE_URL, SW_ENABLED */

import '@temp/polyfill'
import { createApp } from './app'
import { register } from 'register-service-worker'

const { app, router } = createApp()

// 百度统计代码插入
if (process.env.NODE_ENV === 'production') {
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?a4fc2a60b49a0cde2c60671351164359'
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}

router.onReady(() => {
  app.$mount('#app')

  // Register service worker
  if (process.env.NODE_ENV === 'production' &&
    SW_ENABLED &&
    window.location.protocol === 'https:') {
    register(`${BASE_URL}service-worker.js`, {
      ready () {
        console.log('[vuepress:sw] Service worker is active.')
        app.$refs.layout.$emit('sw-ready')
      },
      cached () {
        console.log('[vuepress:sw] Content has been cached for offline use.')
        app.$refs.layout.$emit('sw-cached')
      },
      updated () {
        console.log('[vuepress:sw] Content updated.')
        app.$refs.layout.$emit('sw-updated')
      },
      offline () {
        console.log('[vuepress:sw] No internet connection found. App is running in offline mode.')
        app.$refs.layout.$emit('sw-offline')
      },
      error (err) {
        console.error('[vuepress:sw] Error during service worker registration:', err)
        app.$refs.layout.$emit('sw-error', err)
      }
    })
  }
})
