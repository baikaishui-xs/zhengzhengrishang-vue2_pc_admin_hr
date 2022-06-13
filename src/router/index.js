import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'el-icon-s-home' }
    }]
  },

  // 组织架构
  {
    path: '/organization', // 路由地址
    component: Layout, // 路由组件（这里的组件要为 Layout，也就是在 Layout 组件中导航）
    children: [{ // 二级路由
      path: '', // path 为空，则默认使用一级路由的地址，也就是会和一级路由的组件一起展示
      name: 'Organization',
      component: () => import('@/views/organization'), // 按需加载
      meta: { // 路由元信息（作用：向组件提供数据）
        title: '组织架构',
        icon: 'el-icon-office-building'
      }
    }]
  },

  // 员工
  {
    path: '/staff',
    component: Layout,
    children: [{
      path: '',
      name: 'Staff',
      component: () => import('@/views/staff/index'),
      meta: { title: '员工', icon: 'el-icon-user-solid' }
    }]
  },

  // 员工详情
  {
    path: '/staffInfo',
    component: Layout,
    children: [{
      path: '/staffInfo',
      name: 'StaffInfo',
      component: () => import('@/views/staff/staffInfo')
    }]
  },

  {
    path: '/demo',
    component: () => import('@/views/demo/index')
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
