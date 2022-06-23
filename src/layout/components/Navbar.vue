<template>
  <div class="navbar" style="display: flex; justify-content: space-between; align-items: center">
    <div class="left-box" style="display: flex; align-items: center">
      <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
      <span style="color: #fff; font-weight: 500; font-size: 18px">{{ $t('title') }}</span>
    </div>
    <!-- <breadcrumb class="breadcrumb-container" /> -->

    <div class="right-menu">
      <!-- 切换语言 按钮 -->
      <LangSelect></LangSelect>

      <!-- 切换主题 按钮 -->
      <ThemePicker style="width: 25px; height: 25px"></ThemePicker>

      <!-- 全屏 按钮 -->
      <div class="el-icon-full-screen" style="font-size: 25px; color: #fff; font-weight: 900" @click="toggle"></div>

      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper" style="margin: 0;">
          <span style="color: #fff; font-weight: 500; font-size: 18px; ">{{ $store.state.user.userInfo.username }}</span>
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

import screenfull from 'screenfull'

export default {
  components: {
    // Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      this.$store.dispatch('user/quitLogin')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    toggle() {
      screenfull.toggle()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #AA292B;
  // background: url('../../assets/images/pic_005.png') no-repeat center;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;

    > div {
      margin-right: 20px;
    }

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        display: flex;
        align-items: center;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          color: #fff;
          cursor: pointer;
          position: absolute;
          right: -20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
