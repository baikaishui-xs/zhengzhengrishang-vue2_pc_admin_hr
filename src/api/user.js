import request from '@/utils/request'

export function login(data) { // 获取 token
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function getUserInfo() { // 获取 用户信息
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}
