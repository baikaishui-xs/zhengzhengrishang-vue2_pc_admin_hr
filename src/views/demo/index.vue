<template>
  <div class="demo-container">
    <button @click="dialogConfig.isShowDialog = true">按钮</button>
    <el-dialog :title="dialogConfig.title" :visible="dialogConfig.isShowDialog" width="30%" @close="cancel">
      <span>这是一段信息</span>
      <el-row slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data() {
    return {
      dialogConfig: { // 对话框配置项
        isShowDialog: false, // 是否显示对话框
        title: '' // 标题
      }
    }
  },
  methods: {
    sure() { // 确定
      console.log(1)
      this.dialogConfig.isShowDialog = false
    },
    cancel() { // 取消
      console.log(2)
      this.dialogConfig.title = '1'
      // this.dialogConfig.isShowDialog = false
    },
    showDialog(type) { // 显示对话框
      if (type === 'add') {
        this.dialogConfig.title = '新增员工'
      }
      if (type === 'del') {
        this.dialogConfig.title = '删除员工'
      }
      this.dialogConfig.isShowDialog = true
    }
  }
}
</script>
<style lang='scss' scoped></style>
