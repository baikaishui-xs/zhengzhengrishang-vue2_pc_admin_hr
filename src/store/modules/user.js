import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'

import { login, getUserInfo } from '@/api/user'
import { resetRouter } from '@/router'
const state = {
  token: getToken(), // token
  userInfo: '' // 用户名
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  }
}
const actions = {
  async getToken(context, data) { // 获取 token
    const result = await login(data)
    context.commit('setToken', result)
  },
  async getUserInfo(context) { // 获取 用户信息
    const result = await getUserInfo()
    context.commit('setUserInfo', result)
    return result
  },
  quitLogin(context) { // 退出登录
    context.commit('setToken', '')
    context.commit('setUserInfo', '')
    removeToken()
    resetRouter() // 重置路由
    context.commit('permission/setRoutes', [], { root: true }) // 重置路由
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
