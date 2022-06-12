// 员工管理

import request from '@/utils/request'

export function getEmployeeList(params) { // 获取 员工列表
  return request({
    url: '/sys/user',
    method: 'get',
    params
  })
}

export function getStaffInfo(id) { // 获取员工信息
  return request({
    url: `/sys/user/${id}`,
    method: 'get'
  })
}
