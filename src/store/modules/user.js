import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'

import { login } from '@/api/user'

const state = {
  token: getToken() // token
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  quitLogin(state) {
    state.token = ''
    removeToken()
  }
}
const actions = {
  async getToken(context, data) { // 获取 token
    const result = await login(data)
    context.commit('setToken', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
