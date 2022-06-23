import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

import Components from '@/components'

import CheckPermission from '@/mixin/checkPermission'

import i18n from '@/lang'

Vue.use(Components)

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import * as directives from '@/directives'

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key) // 动态切换语言类型（key：当前语言类型）
})

Vue.config.productionTip = false

Vue.mixin(CheckPermission)

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  async created() {
    const { roles } = await this.$store.dispatch('user/getUserInfo')
    const routes = await this.$store.dispatch('permission/filterRoutes', roles.menus)
    this.$router.addRoutes(routes) // 将获取到的用户所拥有的动态路由添加到路由表中，并将 404 路由放到动态路由的最后面
  },
  render: h => h(App)
})
