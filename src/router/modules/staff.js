// 员工

import Layout from '@/layout'

export default {
  path: '/staff',
  name: 'employees',
  component: Layout,
  children: [{
    path: '',
    name: 'employees',
    component: () => import('@/views/staff/index'),
    meta: { title: '员工', icon: 'el-icon-user-solid' }
  }]
}
