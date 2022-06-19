<template>
  <!-- 权限设置 页 -->
  <div class="permission-settings-container">
    <el-button type="primary" style="margin-bottom: 20px;" @click="showAddAuthorityDialog(1, '0')">添加权限</el-button>

    <!-- 权限设置 表格 -->
    <el-table :data="permissionSetTableList" row-key="id" border stripe>
      <el-table-column label="名称" prop="name" align="left"></el-table-column>
      <el-table-column label="标识" prop="code" align="center"></el-table-column>
      <el-table-column label="描述" prop="description" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="{row}"></template>
        <span style="color: #A9292C" @click="showAddAuthorityDialog(row.type+1, row.id)">添加</span>
        <span style="margin: 0 10px; color: #A9292C">编辑</span>
        <span style="color: #A9292C">删除</span>
      </el-table-column>
    </el-table>

    <!-- 添加/编辑 权限 对话框 -->
    <el-dialog title="添加权限" :visible="whetherShowAddAuthorityDialog" width="30%" @close="cancelAddAuthorityDialog">

      <!-- 添加权限 表单 -->
      <el-form ref="addAuthorityFormRef" :rules="addAuthorityFormRules" :model="addAuthorityFormData">
        <el-form-item prop="name" label="名称" label-width="100px">
          <el-input v-model="addAuthorityFormData.name"></el-input>
        </el-form-item>
        <el-form-item prop="code" label="标识" label-width="100px">
          <el-input v-model="addAuthorityFormData.code"></el-input>
        </el-form-item>
        <el-form-item prop="description" label="描述" label-width="100px">
          <el-input v-model="addAuthorityFormData.description"></el-input>
        </el-form-item>
        <el-form-item label="开启" label-width="100px">
          <el-switch v-model="addAuthorityFormData.enVisible" value="true" active-value="1" inactive-value="0"></el-switch>
        </el-form-item>
      </el-form>

      <el-row slot="footer" class="dialog-footer">
        <el-button @click="cancelAddAuthorityDialog">取 消</el-button>
        <el-button type="primary" @click="sureAddAuthorityDialog">确 定</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { getOwnershipPoint, addAuthorityPoint } from '@/api/authorityManagement.js'
import { tranListToTreeData } from '@/utils/dataConvert.js'
export default {
  name: 'PermissionSettings',
  data() {
    return {
      permissionSetTableList: [], // 权限设置 表格数据
      whetherShowAddAuthorityDialog: false, // 是否显示 添加权限 对话框
      addAuthorityFormData: { // 添加权限 表单数据
        type: 0,
        pid: '0'
      },
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
      }
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
    sureAddAuthorityDialog() { // 确定（AddAuthority 对话框）
      this.$refs.addAuthorityFormRef.validate(async isOK => {
        if (isOK) { // isOK：验证结果（true：通过）（false：不通过）
          addAuthorityPoint(this.addAuthorityFormData)
          this.$message.success('添加权限成功')
          this.whetherShowAddAuthorityDialog = false
          setTimeout(() => {
            this.getOwnershipPoint()
          }, 100)
        }
      })
    },
    cancelAddAuthorityDialog() { // 取消（AddAuthority 对话框）
      this.whetherShowAddAuthorityDialog = false
    },
    showAddAuthorityDialog(type, pid) { // 显示（AddAuthority 对话框）
      this.addAuthorityFormData.type = type
      this.addAuthorityFormData.pid = pid
      this.whetherShowAddAuthorityDialog = true
    }
  }
}
</script>
<style lang='scss' scoped></style>
