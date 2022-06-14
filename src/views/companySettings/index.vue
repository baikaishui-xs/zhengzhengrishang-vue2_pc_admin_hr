<template>
  <!-- 公司设置 -->

  <div class="company-settings-container">
    <el-card>
      <el-tabs v-model="activeName">
        <!-- 角色管理 tab -->
        <el-tab-pane label="角色管理" name="user">
          <el-button type="primary" style="margin-bottom: 20px;" @click="showDialog('新增角色')">新增角色</el-button>

          <!-- Table 表格（基础表格） -->
          <el-table :data="tableList" border stripe>
            <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
            <el-table-column label="角色名" prop="name" align="center"></el-table-column>
            <el-table-column label="描述" prop="description" align="center"></el-table-column>
            <el-table-column label="操作" prop="mobile" align="center">
              <template v-slot="{row}">
                <el-button type="success">分配角色</el-button>
                <el-button type="primary" @click="showDialog('编辑角色', row.id)">编辑</el-button>
                <el-button type="danger" @click="delRole1(row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <!-- 公司信息 tab -->
        <el-tab-pane label="公司信息" name="config">
          <el-alert class="el-icon-video-camera-solid" title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改" type="info"></el-alert>

          <!-- 表单 -->
          <el-form :model="formData" class="form" style="margin-top: 20px;">
            <el-form-item class="item" label="企业名称" label-width="100px">
              <el-input value="郑郑日上电子商务有限公司" disabled class="input"></el-input>
            </el-form-item>
            <el-form-item class="item1" label="电话" label-width="100px">
              <el-input value="15288888888" disabled class="input"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 对话框 -->
    <el-dialog :title="dialogConfig.title" :visible="dialogConfig.isShowDialog" width="30%" @close="cancel">

      <el-form ref="addRoleFormRef" :rules="addRoleFormRules" :model="addRoleFormData" class="form">
        <el-form-item prop="name" class="item" label="角色名称" label-width="100px">
          <el-input v-model="addRoleFormData.name" class="input"></el-input>
        </el-form-item>
        <el-form-item prop="description" class="item1" label="角色描述" label-width="100px">
          <el-input v-model="addRoleFormData.description" class="input"></el-input>
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
import { getAllTheCornerList, addRole, getRoleDetails, updateRoleDetails, delRole1 } from '@/api/roleManagement.js'
import { getOwnershipPoint } from '@/api/authorityManagement.js'
export default {
  name: 'CompanySettings',
  data() {
    return {
      activeName: 'user', // 当前选项卡
      tableList: [], // 表格数据
      formData: { // 表单数据
      },
      dialogConfig: { // 对话框配置项
        isShowDialog: false, // 是否显示对话框
        title: '' // 标题
      },
      addRoleFormData: { // 表单数据
      },
      addRoleFormRules: { // 表单验证规则
        name: [
          { required: true, trigger: 'blur', message: '不能为空' } // 不能为空
        ],
        description: [
          { required: true, trigger: 'blur', message: '不能为空' } // 不能为空
        ]
      },
      roleId: 0, // 当前角色 id
      ownershipPoint: [] // 所有权限点
    }
  },
  created() {
    this.getAllTheCornerList()
  },
  methods: {
    async getAllTheCornerList() { // 获取 所有角色列表
      const result = await getAllTheCornerList({ page: 1, pagesize: 50 })
      this.tableList = result.rows
    },
    async getRoleDetails(id) { // 获取 角色详情
      const result = await getRoleDetails(id)

      this.addRoleFormData = result
    },
    async getOwnershipPoint() { // 获取 所有权限点
      const result = await getOwnershipPoint()
      this.ownershipPoint = result
    },
    async sure() { // 确定
      if (this.dialogConfig.title === '新增角色') await addRole(this.addRoleFormData)
      if (this.dialogConfig.title === '编辑角色') await updateRoleDetails(this.addRoleFormData, this.roleId)
      this.dialogConfig.isShowDialog = false
      this.$refs.addRoleFormRef.resetFields()
      this.$message.success('新增角色成功')
      this.getAllTheCornerList()
    },
    cancel() { // 取消
      this.dialogConfig.isShowDialog = false
      this.$refs.addRoleFormRef.resetFields()
    },
    showDialog(type, id) { // 显示对话框
      this.dialogConfig.title = type
      this.roleId = id
      if (type === '编辑角色') {
        this.$nextTick(async() => {
          await this.getRoleDetails(id)
        })
      }
      this.dialogConfig.isShowDialog = true
    },
    async delRole1(id) { // 删除 角色
      await delRole1(id)
      this.$message.success('删除角色成功')
      this.getAllTheCornerList()
    }
  }
}
</script>
<style lang='scss' scoped></style>
