// 组织架构

import request from '@/utils/request'

export function getOrganization() { // 获取 组织架构
  return request({
    url: '/company/department',
    method: 'get'
  })
}

export function addDepartment(data) { // 新增部门
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}

export function delDepartment(id) { // 删除部门
  return request({
    url: `/company/department/${id}`,
    method: 'delete'
  })
}
