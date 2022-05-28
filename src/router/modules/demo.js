import Layout from '@/layout'

// demo 路由规则
export default {
  // 一级路由

  // 命名
  name: 'demo',

  // 路由地址
  path: '/demo',

  // 路由组件
  component: Layout,

  // 二级路由
  children: [{
    // path 为空，则默认使用一级路由的地址，也就是会和一级路由的组件一起展示
    path: '',

    // 按需加载
    component: () => import('@/views/demo'),

    // 路由元信息（作用：向组件提供数据）
    meta: {
      title: 'demo'
    }
  }]
}
