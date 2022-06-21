import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import router from '@/router'

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // 请求根路径
  timeout: 8000 // 请求超时时间
})

// 请求 拦截器
service.interceptors.request.use(request => {
  request.headers.Authorization = store.state.user.token

  return request
}, error => {
  return Promise.reject(error)
})

// 响应 拦截器
service.interceptors.response.use(response => {
  // 返回响应结果
  if (response.data.success) {
    return response.data.data
  }

  Message.error(response.data.message)
  return Promise.reject(response.data.message)
}, error => {
  // 判断 token 是否过期
  if (error.response && error.response.data && error.response.data.code === 10002) {
    // 调用登出方法
    store.commit('dispatch/quitLogin')
    router.push('/login')
  } else {
    Message.error(error.message) // 提示错误信息
  }
  return Promise.reject(error)
})

export default service
