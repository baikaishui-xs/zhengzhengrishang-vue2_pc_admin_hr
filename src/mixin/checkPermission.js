import store from '@/store'

export default {
  methods: {
    checkPermission(key) { // 查找用户是否有按钮操作权限 // 说明：这个 key 的值必须要要和 标识 相同
      const { userInfo } = store.state.user
      if (userInfo.roles && userInfo.roles.points) {
        return userInfo.roles.points.some(item => item === key)
      }
      return false
    }
  }
}
