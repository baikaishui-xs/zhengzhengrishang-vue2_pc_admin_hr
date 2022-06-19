<template>
  <!-- 权限设置 页 -->
  <div class="permission-settings-container">
    <el-button type="primary" style="margin-bottom: 20px;" @click="showDialog('添加权限', 1, '0')">添加权限</el-button>

    <!-- 权限设置 表格 -->
    <el-table :data="permissionSetTableList" row-key="id" border stripe>
      <el-table-column label="名称" prop="name" align="left"></el-table-column>
      <el-table-column label="标识" prop="code" align="center"></el-table-column>
      <el-table-column label="描述" prop="description" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="{row}">
          <span style="color: #A9292C; cursor: pointer" @click="showDialog('添加权限', row.type+1, row.id)">添加</span>
          <span style="margin: 0 10px; color: #A9292C; cursor: pointer" @click="showEditDialog('编辑权限', row.id)">编辑</span>
          <span style="color: #A9292C; cursor: pointer" @click="delAuthorityPoint(row.id)">删除</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- 对话框 -->
    <el-dialog :title="dialogConfig.title" :visible="dialogConfig.isShowDialog" width="30%" @close="cancel">

      <!-- 添加权限 -->
      <el-form ref="addAuthorityFormRef" add-authority-form-ref :rules="addAuthorityFormRules" :model="addAuthorityFormData">
        <el-form-item label="名称" label-width="100px" prop="name">
          <el-input v-model="addAuthorityFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="标识" label-width="100px" prop="code">
          <el-input v-model="addAuthorityFormData.code"></el-input>
        </el-form-item>
        <el-form-item label="描述" label-width="100px" prop="description">
          <el-input v-model="addAuthorityFormData.description"></el-input>
        </el-form-item>
        <el-form-item label="开启" label-width="100px">
          <el-switch v-model="addAuthorityFormData.enVisible" active-value="1" inactive-value="0"></el-switch>
        </el-form-item>
      </el-form>

      <el-row slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </el-row>
    </el-dialog>

  </div>
</template>
<script>
import { getOwnershipPoint, addAuthorityPoint, delAuthorityPoint, getAuthorityPoint, editAuthorityPoint } from '@/api/authorityManagement.js'
import { tranListToTreeData } from '@/utils/dataConvert.js'
export default {
  name: 'PermissionSettings',
  data() {
    return {
      switch1: '1',
      permissionSetTableList: [], // 权限设置 表格数据
      whetherShowAddAuthorityDialog: false, // 是否显示 添加权限 对话框
      addAuthorityFormRules: { // 表单验证规则
        name: [
          { required: true, trigger: 'blur', message: '不能为空' } // 不能为空
        ],
        code: [
          { required: true, trigger: 'blur', message: '不能为空' } // 不能为空
        ],
        description: [
          { required: true, trigger: 'blur', message: '不能为空' } // 不能为空
        ]
      },
      dialogConfig: { // 对话框 配置项
        isShowDialog: false, // 是否显示对话框
        title: '' // 标题
      },
      addAuthorityFormData: { // 添加权限 表单数据
        enVisible: '0'
      },
      id: 0 // 当前权限 id
    }
  },
  created() {
    this.getOwnershipPoint()
  },
  methods: {
    async getOwnershipPoint() { // 获取 所有权限点
      const result = await getOwnershipPoint()
      this.permissionSetTableList = tranListToTreeData(result, '0')
    },
    async getAuthorityPoint(id) { // 根据 ID 获取权限点详情
      const result = await getAuthorityPoint(id)
      this.addAuthorityFormData = result
    },
    async delAuthorityPoint(id) { // 根据 id 删除权限点
      await delAuthorityPoint(id)
      this.$message.success('删除权限点成功')
      this.getOwnershipPoint()
    },
    showDialog(type, type1, pid) { // 显示对话框
      this.dialogConfig.title = type
      this.dialogConfig.isShowDialog = true
      this.addAuthorityFormData.type = type1
      this.addAuthorityFormData.pid = pid
    },
    async showEditDialog(type, id) { // 显示 编辑 对话框
      this.dialogConfig.title = type
      this.dialogConfig.isShowDialog = true
      this.id = id
      this.getAuthorityPoint(id)
    },
    async sure() { // 确定
      this.$refs.addAuthorityFormRef.validate(async isOK => {
        if (isOK) { // isOK：验证结果（true：通过）（false：不通过）
          if (this.dialogConfig.title === '添加权限') await addAuthorityPoint(this.addAuthorityFormData)
          if (this.dialogConfig.title === '编辑权限') await editAuthorityPoint(this.id, this.addAuthorityFormData)
          this.dialogConfig.isShowDialog = false
          this.getOwnershipPoint()
          this.$message.success(this.dialogConfig.title + '成功')
        }
      })
    },
    cancel() { // 取消
      this.dialogConfig.isShowDialog = false

      setTimeout(() => { // 解决对话框连续点击确定按钮，导致提交空数据的问题
        this.$refs.addAuthorityFormRef.resetFields()
      }, 1000)
    }
  }
}
</script>
<style lang='scss' scoped></style>
