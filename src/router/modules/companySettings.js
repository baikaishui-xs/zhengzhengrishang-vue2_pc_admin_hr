// 角色管理

import Layout from '@/layout'

export default {
  path: '/companySettings',
  name: 'settings',
  component: Layout,
  children: [{
    name: 'settings',
    path: '',
    component: () => import('@/views/companySettings'),
    meta: { title: '角色管理', icon: 'el-icon-s-tools' }
  }]
}
