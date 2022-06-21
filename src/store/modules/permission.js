// 路由权限

import { constantRoutes, asyncRoutes } from '@/router' // 导入静态路由 和 动态路由

const state = {
  routes: constantRoutes // 路由表。当前用户所拥有的路由权限（静态路由、动态路由）
}
const mutations = {
  setRoutes(state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes] // 将 用户拥有的路由 和 静态路由 合并到一起
  }
}
const actions = {
  filterRoutes(context, menus) { // 获取 用户所有拥有的路由权限
    let routes = [] // 当前用户所有拥有的动态路由权限
    menus.forEach(key => {
      routes.push(...asyncRoutes.filter(item => item.name === key))
    })
    routes = [...routes, { path: '*', redirect: '/404', hidden: true }]
    context.commit('setRoutes', routes) // 这里的 routes 是用来显示左侧菜单

    return routes // 这里的 routes 是给 addRoutes 用的
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
