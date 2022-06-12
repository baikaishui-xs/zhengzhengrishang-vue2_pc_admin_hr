<template>
  <div class="organization-container">
    <el-card>
      <el-row type="flex" style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #cfcfcf;">
        <i class="el-icon-video-camera-solid" style="margin-right: 10px; font-size: 20px"></i>
        <el-col>郑郑日上电子商务有限公司</el-col>
        <el-col style="text-align: center;" :span="2">负责人</el-col>
        <el-col style="text-align: center;" :span="2">操作</el-col>
      </el-row>

      <!-- 树形控件 -->
      <el-tree :data="treeData" :props="defaultProps" default-expand-all>
        <el-row ref="formRef" slot-scope="{ data }" type="flex" class="box" style="width: 100%">
          <el-col class="title">{{ data.name }}</el-col>
          <el-col :span="2" class="principal" style="text-align: center;">{{ data.manager }}</el-col>
          <el-col :span="2" class="operate" style="text-align: center;">
            <el-dropdown>
              <span class="el-dropdown-link">
                操作<i class="el-icon-arrow-down el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="showDialog('add', data)">添加子部门</el-dropdown-item>
                <el-dropdown-item @click.native="showDialog('edit', data)">编辑子部门</el-dropdown-item>
                <el-dropdown-item @click.native="showDialog('del', data)">删除子部门</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-tree>

    </el-card>

    <!-- 对话框 -->
    <el-dialog :title="dialogConfig.title" :visible="dialogConfig.isShowDialog" width="30%" @close="cancel">

      <el-form v-if="dialogConfig.title !== '删除子部门'" ref="formRef1" :model="formData" class="form" :rules="formRules">
        <el-form-item prop="name" class="item" label="部门名称" label-width="100px">
          <el-input v-model="formData.name" class="input"></el-input>
        </el-form-item>
        <el-form-item prop="manager" class="item1" label="部门负责人" label-width="100px">
          <el-select v-model="formData.manager" placeholder="请选择" style="width: 100%;" @focus="getEmployeeList">
            <el-option v-for="(item, index) in employeeList" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="introduce" class="item2" label="部门介绍" label-width="100px">
          <el-input v-model="formData.introduce" class="input"></el-input>
        </el-form-item>
      </el-form>

      <el-row slot="footer" class="dialog-footer">
        <el-button type="primary" @click="sure">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </el-row>

    </el-dialog>
  </div>
</template>
<script>
import { getOrganization, addDepartment, delDepartment } from '@/api/organization'
import { tranListToTreeData } from '@/utils/dataConvert'
import { getEmployeeList } from '@/api/employeeManagement.js'
export default {
  name: 'Organization',
  data() {
    return {
      treeData: [], // 树形控件数据
      defaultProps: { // 指定渲染的数据
        children: 'children', // 从 data 中指定渲染 children 数据
        label: 'name' // 从 data 指定渲染 label 数据
      },
      dialogConfig: { // 对话框对象
        isShowDialog: false, // 是否显示对话框
        title: '' // 标题
      },
      formData: { // 表单数据
        code: '', // 编码
        name: '', // 部门名称
        manager: '', // 负责人
        introduce: '', // 介绍
        pid: '' // 父级部门ID
      },
      formRules: { // 表单验证规则
        name: [
          { required: true, trigger: 'blur', message: '不能为空' } // 不能为空
        ],
        manager: [
          { required: true, trigger: 'change', message: '不能为空', type: 'string' } // 不能为空
        ],
        introduce: [
          { required: true, trigger: 'blur', message: '不能为空' } // 不能为空
        ]
      },
      employeeList: [] // 员工列表
    }
  },
  created() {
    this.getOrganization()
  },
  methods: {
    async getOrganization() { // 获取 组织架构
      const result = await getOrganization()
      this.treeData = tranListToTreeData(result.depts, '')
    },
    async getEmployeeList() { // 获取 员工列表
      const result = await getEmployeeList({
        size: 10,
        page: 1
      })
      this.employeeList = result.rows.map(item => item.username)
    },
    async sure() { // 确定
      if (this.dialogConfig.title === '添加子部门' || this.dialogConfig.title === '编辑子部门') {
        this.$refs.formRef1.validate(async isOK => {
          if (isOK) {
            if (this.dialogConfig.title === '添加子部门') {
              await addDepartment(this.formData)
              this.$message.success('添加子部门成功')
            }
            // if (this.dialogConfig.title === '编辑子部门') {

            // }
          }
        })
      }
      if (this.dialogConfig.title === '删除子部门') {
        await delDepartment(this.formData.id)
        this.$message.success('删除子部门成功')
      }
      this.dialogConfig.isShowDialog = false
      await this.getOrganization()
    },
    cancel() { // 取消
      this.dialogConfig.isShowDialog = false
      setTimeout(() => { // 解决 formData 提交数据值为空的问题
        this.$refs.formRef1.resetFields()
      }, 0)
    },
    showDialog(type, data) { // 显示对话框
      if (type === 'add') {
        this.dialogConfig.title = '添加子部门'
        this.formData.pid = data.id
      }
      if (type === 'edit') {
        this.dialogConfig.title = '编辑子部门'
        this.$nextTick(() => {
          Object.assign(this.formData, data)
        })
      }
      if (type === 'del') {
        this.dialogConfig.title = '删除子部门'
        this.$nextTick(() => {
          Object.assign(this.formData, data)
        })
      }
      this.dialogConfig.isShowDialog = true
    }
  }
}
</script>
<style lang='scss' scoped></style>
