import router from '@/router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css' // 引入进度条样式
import store from '@/store'

// 白名单
const whiteList = ['/login', '/404', '/demo']
// 前置守卫
router.beforeEach((to, from, next) => {
  // 开启进度条
  nprogress.start()
  // 判断是否有 token
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 没有token的情况下
    if (whiteList.includes(to.path)) {
      // 表示要去的地址在白名单
      next()
    } else {
      next('/login')
    }
  }
  // 解决手动切换地址时，进度条不关闭的问题
  nprogress.done()
})
// 后置守卫
router.afterEach(() => {
  // 关闭进度条
  nprogress.done()
})
