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

export function delAuthorityPoint(id) { // 根据 id 删除权限点
  return request({
    url: `/sys/permission/${id}`,
    method: 'delete'
  })
}

export function getAuthorityPoint(id) { // 根据 ID 获取权限点详情
  return request({
    url: `/sys/permission/${id}`,
    method: 'get'
  })
}

export function editAuthorityPoint(id, data) { // 根据 ID 更新权限点详情
  return request({
    url: `/sys/permission/${id}`,
    method: 'put',
    data
  })
}
