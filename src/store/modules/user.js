import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'

import { login, getUserInfo } from '@/api/user'

const state = {
  token: getToken(), // token
  username: '' // 用户名
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  quitLogin(state) {
    state.token = ''
    removeToken()
  },
  setUsername(state, username) {
    state.username = username
  }
}
const actions = {
  async getToken(context, data) { // 获取 token
    const result = await login(data)
    context.commit('setToken', result)
  },
  async getUserInfo(context) { // 获取 用户信息
    const result = await getUserInfo()
    context.commit('setUsername', result.username)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
