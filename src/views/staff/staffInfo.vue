<template>
  <div class="staff-info-container">
    <!-- 表单 -->
    <el-form :model="formData" class="form">
      <el-form-item class="item" label="头像" label-width="100px">

        <!-- 用户头像上传 -->
        <!-- <el-upload disabled :class="{ disabled: fileComputed }" list-type="picture-card" :limit="1" action="#" :on-preview="preview" :on-change="changeFile" :on-remove="handleRemove" :file-list="fileList"> -->
        <el-upload disabled :class="{ none: fileComputed }" list-type="picture-card" :limit="1" action="#" :on-preview="preview" :on-change="changeFile" :on-remove="handleRemove" :file-list="fileList">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="isShowFileUploadDialog" title="图片预览">
          <img :src="uploadImgUrl" alt="" style="width: 100%">
        </el-dialog>

      </el-form-item>
      <el-form-item class="item1" label="用户名" label-width="100px">
        <el-input v-model="formData.username" disabled class="input"></el-input>
      </el-form-item>
      <el-form-item class="item2" label="密码" label-width="100px">
        <el-input v-model="formData.password" type="password" disabled class="input"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getStaffInfo } from '@/api/employeeManagement.js'

export default {
  name: 'StaffInfo',
  data() {
    return {
      formData: {}, // 表单数据
      id: '', // 用户 id
      fileList: [{ url: '' }], // 上传图片列表
      isShowFileUploadDialog: false, // 是否显示对话框
      uploadImgUrl: '' // 上传图片的 url 地址
    }
  },
  computed: {
    fileComputed() {
      return this.fileList.length >= 1
    }
  },
  created() {
    this.id = this.$route.query.id
    this.getStaffInfo(this.id)
  },
  methods: {
    async getStaffInfo(id) { // 获取 员工信息
      const result = await getStaffInfo(id)
      this.formData = result
      this.fileList[0].url = result.staffPhoto
    },
    preview(file) { // 预览 文件事件
      this.uploadImgUrl = file.url
      this.isShowFileUploadDialog = true
    },
    changeFile(file, fileList) { // 添加 文件事件
      this.fileList = fileList.map(item => item)
    },
    handleRemove(file, fileList) { // 删除 文件事件
      this.fileList = fileList
    }
  }

}
</script>
<style lang='scss' scoped>
  // .none {
  //   display: none
  // }
  ::v-deep.none {
    .el-upload--picture-card {
      display: none
    }
  }
</style>
