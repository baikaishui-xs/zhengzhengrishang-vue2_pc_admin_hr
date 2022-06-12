<template>
  <!-- 员工 -->

  <div class="staff-container">

    <el-card class="card">
      <div class="left-box">
        <i class="el-icon-info"></i>
        <span class="text">共</span>
        <span class="text1">{{ paginationObj.total }}</span>
        <span class="text2">条记录</span>
      </div>
      <div class="right-box">
        <el-button class="btn" type="success">excel 导入</el-button>
        <el-button class="btn1" type="danger">excel 导出</el-button>
        <el-button class="btn2" type="primary">excel 新增员工</el-button>
      </div>
    </el-card>

    <!-- Table 表格（基础表格） -->
    <el-table :data="tableList" border stripe class="table" style="margin-top: 20px;">
      <el-table-column class="index" label="序号" type="index" align="center" width="80px"></el-table-column>
      <el-table-column class="username" label="姓名" prop="username" align="center"></el-table-column>
      <el-table-column class="mobile" label="头像" align="center">
        <img slot-scope="{row}" :src="row.staffPhoto" style="width: 100px; border-radius: 50%;">
      </el-table-column>
      <el-table-column class="workNumber" label="工号" prop="workNumber" align="center"></el-table-column>
      <el-table-column class="formOfEmployment" label="聘用形式" prop="formOfEmployment" align="center"></el-table-column>
      <el-table-column class="departmentName" label="部门" prop="departmentName" align="center"></el-table-column>
      <el-table-column class="timeOfEntry" label="入职时间" prop="timeOfEntry" align="center"></el-table-column>
      <el-table-column class="operate" label="操作" align="center">
        <template v-slot="{row}">
          <span class="check" style="color: #44A0FF; cursor: pointer">查看</span>
          <span class="role" style="margin: 0 10px; color: #67C23A; cursor: pointer" @click="showDialog('分配角色', row.id)">角色</span>
          <span class="del" style="color: #F56C6D; cursor: pointer">删除</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      :page-size="paginationObj.pagesize"
      :current-page="paginationObj.page"
      layout="prev, pager, next"
      :total="paginationObj.total"
      @current-change="changePage"
    >
    </el-pagination>

    <!-- 对话框 -->
    <el-dialog :title="dialogConfig.title" :visible="dialogConfig.isShowDialog" width="30%" @close="cancel">
      <el-checkbox-group v-model="checkList">
        <el-checkbox v-for="item in cornerList" :key="item.id" :label="item.id">
          {{ item.name }}
        </el-checkbox>
      </el-checkbox-group>
      <el-row slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { getEmployeeList, getStaffInfo } from '@/api/employeeManagement.js'
import { getAllTheCornerList } from '@/api/roleManagement.js'
export default {
  name: 'Staff',
  data() {
    return {
      tableList: [], // 表格数据
      demoList: [], // Demo 列表
      paginationObj: { // 分页器对象
        page: 1, // 页码
        pagesize: 5, // 每页显示多少条数据
        total: 0 // 共多少条数据
      },
      dialogConfig: { // 对话框配置项
        isShowDialog: false, // 是否显示对话框
        title: '' // 标题
      },
      cornerList: [], // 角色列表
      checkList: ['选中且禁用', '复选框 A'] // 选中项
    }
  },
  created() {
    this.getEmployeeList()
    this.getAllTheCornerList()
  },
  methods: {
    async getEmployeeList() { // 获取 员工列表
      const result = await getEmployeeList({ page: this.paginationObj.page, size: this.paginationObj.pagesize })
      this.paginationObj.total = result.total
      this.tableList = result.rows
    },
    async getStaffInfo(id) {
      const result = await getStaffInfo(id)
      this.checkList = result.roleIds
    },
    async getAllTheCornerList() { // 获取 所有角色列表
      const result = await getAllTheCornerList()
      this.cornerList = result.rows
    },
    changePage(newPage) { // 监听页码
      this.paginationObj.page = newPage
      this.getEmployeeList()
    },
    sure() { // 确定
      this.dialogConfig.isShowDialog = false
    },
    cancel() { // 取消
      this.dialogConfig.isShowDialog = false
    },
    async showDialog(type, id) { // 显示对话框
      if (type === '分配角色') {
        this.dialogConfig.title = '分配角色'
      }
      await this.getStaffInfo(id)
      this.dialogConfig.isShowDialog = true
    }
  }
}
</script>
<style lang='scss' scoped>
.staff-container {
  .card {
    ::v-deep .el-card__body {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .left-box {
      padding: 0 10px;
      display: flex;
      align-items: center;
      border: 1px solid #91D5FF;
      background: #E7F4FF;
      .el-icon-info {
        margin-right: 3px;
        color: #409EFF;
      }

      .text {
      }

      .text1 {
        margin: 0 8px;
      }

      .text2 {

      }
    }

    .right-box {
      .btn {

      }
      .btn1 {

      }
      .btn2 {

      }
    }
  }
}
</style>
