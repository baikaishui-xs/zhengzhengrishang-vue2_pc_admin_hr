// 角色管理

import request from '@/utils/request.js'

export function getAllTheCornerList(params) { // 获取 所有角色列表
  return request({
    url: '/sys/role',
    method: 'get',
    params
  })
}
