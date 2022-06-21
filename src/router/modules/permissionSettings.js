// 权限设置

import Layout from '@/layout'

export default {
  path: '/permissionSettings',
  name: 'permissions',
  component: Layout,
  children: [{
    path: '',
    name: 'permissions',
    component: () => import('@/views/permissionSettings'),
    meta: { title: '权限设置', icon: 'el-icon-set-up' }
  }]
}
