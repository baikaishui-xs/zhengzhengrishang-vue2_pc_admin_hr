import request from '@/utils/request.js'

export function getOwnershipPoint() { // 获取 所有权限点
  return request({
    url: '/sys/permission',
    method: 'get'
  })
}
