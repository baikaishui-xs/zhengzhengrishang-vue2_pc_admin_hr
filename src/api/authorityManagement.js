// 权限管理

import request from '@/utils/request.js'

export function getOwnershipPoint() { // 获取 所有权限点
  return request({
    url: '/sys/permission',
    method: 'get'
  })
}

export function addAuthorityPoint(data) { // 添加 权限点
  return request({
    url: '/sys/permission',
    method: 'post',
    data
  })
}
