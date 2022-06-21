// 角色管理

import request from '@/utils/request.js'

export function getAllTheCornerList(params) { // 获取 所有角色列表
  return request({
    url: '/sys/role',
    method: 'get',
    params: {
      page: 1,
      pagesize: 20
    }
  })
}

export function updateRole(data) { // 给员工分配角色
  return request({
    url: '/sys/user/assignRoles',
    method: 'put',
    data
  })
}

export function delRole(id) { // 删除 员工
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}

export function addRole(data) { // 新增角色
  return request({
    url: '/sys/role',
    method: 'post',
    data
  })
}

export function getRoleDetails(id) { // 获取 角色详情
  return request({
    url: `/sys/role/${id}`,
    method: 'get'
  })
}

export function updateRoleDetails(data, id) { // 更新 角色详情
  return request({
    url: `/sys/role/${id}`,
    method: 'put',
    data
  })
}

export function delRole1(id) { // 删除角色
  return request({
    url: `/sys/role/${id}`,
    method: 'delete'
  })
}

export function assignPermissions(data) { // 给角色分配权限
  return request({
    url: '/sys/role/assignPrem',
    method: 'put',
    data
  })
}
