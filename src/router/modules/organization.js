// 组织架构

import Layout from '@/layout'

export default {
  path: '/organization', // 路由地址
  name: 'departments',
  component: Layout, // 路由组件（这里的组件要为 Layout，也就是在 Layout 组件中导航）
  children: [{ // 二级路由
    path: '', // path 为空，则默认使用一级路由的地址，也就是会和一级路由的组件一起展示
    name: 'departments',
    component: () => import('@/views/organization'), // 按需加载
    meta: { // 路由元信息（作用：向组件提供数据）
      title: '组织架构',
      icon: 'el-icon-office-building'
    }
  }]
}
