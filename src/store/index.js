import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  plugins: [
    createPersistedState({ // 数据持久化插件 配置
      key: 'adminStore', // 本地仓库名字
      paths: ['user'] // 指定需要持久化的模块
    })
  ]
})

export default store
