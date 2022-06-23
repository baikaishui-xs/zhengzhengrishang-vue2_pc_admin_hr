<template>
  <el-dropdown trigger="click" @command="changeLanguage">
    <div>
      <!-- <svg-icon style="color:#fff;font-size:20px" icon-class="language" /> -->
      <i class="el-icon-chat-dot-square" style="color: #fff; font-size: 30px;"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="this.$i18n.locale === 'zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="this.$i18n.locale === 'en'" command="en">en</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  methods: {
    changeLanguage(type) {
      console.log(1)
      Cookie.set('language', type)
      this.$i18n.locale = type // 修改当前的语音类型
      this.$message.success('切换多语言成功')
    }
  }
}
</script>
