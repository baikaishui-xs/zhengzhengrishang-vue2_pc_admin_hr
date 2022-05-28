import axios from 'axios'
import { Message } from 'element-ui'

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // 请求根路径
  timeout: 8000 // 请求超时时间
})

// 请求 拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应 拦截器
service.interceptors.response.use(response => {
  // 返回响应结果
  if (response.data.success) {
    return response.data.data
  } else {
    Message.error(response.data.success)
    // 把异步API执行失败的结果传递出去
    return Promise.reject(response.data.success)
  }
}, error => {
  return Promise.reject(error)
})

export default service
