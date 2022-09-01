<template>
  <div class="login-container">

    <!-- logo 区 -->
    <div class="left-box">
      <img class="login-logo" src="@/assets/images/login-logo.png">
    </div>

    <!-- 主体 区 -->
    <div class="right-box">
      <div class="main-area">
        <div class="header-box">登录</div>

        <div class="body-box">
          <el-form :model="formData" class="form">
            <el-form-item class="item" label="" label-width="0">
              <el-input v-model="formData.mobile" class="input"></el-input>
            </el-form-item>
            <el-form-item class="item1" label="" label-width="0">
              <el-input v-model="formData.password" type="password" class="input"></el-input>
            </el-form-item>
            <el-form-item class="item2" label="" label-width="0">
              <el-button class="btn" type="primary" @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      formData: { // 表单数据
        mobile: '13800000002',
        password: '123456'
      }
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('user/getToken', this.formData)

      const { roles } = await this.$store.dispatch('user/getUserInfo')
      const routes = await this.$store.dispatch('permission/filterRoutes', ['settings', 'social_securitys', 'permissions', 'approvals', 'departments', 'salarys', 'saas-clients', 'employees', 'user12345', 'attendances']) // 暂时把路由写死
      // const routes = await this.$store.dispatch('permission/filterRoutes', roles.menus)
      this.$router.addRoutes(routes) // 将获取到的用户所拥有的动态路由添加到路由表中，并将 404 路由放到动态路由的最后面
      this.$router.push({
        name: 'Dashboard'
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url('../../assets/images/background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  .left-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-logo {
    }
  }

  .right-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .main-area {
      width: 500px;
      .header-box {
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: 900;
        color: #000;
      }

      .body-box {
        .form {
          .item {
            .input {

            }
          }

          .item1 {
            .input {

            }
          }

          .item2 {
            margin-bottom: 0;
            .btn {
              width: 100%;
              font-size: 18px;
              background: #B81324;
              border: 0;
            }
          }
        }
      }
    }
  }
}
</style>
