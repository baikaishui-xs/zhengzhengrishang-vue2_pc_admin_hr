<template>
  <div class="login-container">

    <!-- 主体 区 -->
    <div class="main-area">
      <div class="header-box">人力资源管理系统</div>

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
  justify-content: center;
  align-items: center;
  background: #202124;
  .main-area {
    width: 500px;
    .header-box {
      margin-bottom: 20px;
      font-size: 40px;
      font-weight: 900;
      color: #fff;
      text-align: center;
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
          }
        }
      }
    }
  }
}
</style>
