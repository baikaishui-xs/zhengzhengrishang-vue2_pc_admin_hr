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
        <el-button class="btn" type="success" @click="$router.push('importExcel')">excel 导入</el-button>
        <el-button class="btn1" type="danger" @click="exportData">excel 导出</el-button>

        <!-- 操作权限。因为后台的标识会重置，这样会导致一直没有权限，暂时注释掉 -->
        <!-- <el-button class="btn2" type="primary" :disabled="!checkPermission('add-staff')" @click="showDialog('新增员工')">新增员工</el-button> -->
        <el-button class="btn2" type="primary" @click="showDialog('新增员工')">新增员工</el-button>

      </div>
    </el-card>

    <!-- Table 表格（基础表格） -->
    <el-table :data="tableList" border stripe class="table" style="margin-top: 20px;">
      <el-table-column class="index" label="序号" type="index" align="center" width="80px"></el-table-column>
      <el-table-column class="username" label="姓名" prop="username" align="center"></el-table-column>
      <el-table-column class="mobile" label="头像" align="center">
        <img v-imageError="defaultImg" slot-scope="{row}" :src="row.staffPhoto" style="width: 100px; border-radius: 50%;" @load="imgLost = false" @error="imgLost = true" @click="showQrCodeDialog(row.staffPhoto)">
      </el-table-column>
      <el-table-column class="workNumber" label="工号" prop="workNumber" align="center"></el-table-column>
      <el-table-column class="formOfEmployment" label="聘用形式" prop="formOfEmployment" align="center"></el-table-column>
      <el-table-column class="departmentName" label="部门" prop="departmentName" align="center"></el-table-column>
      <el-table-column class="timeOfEntry" label="入职时间" prop="timeOfEntry" align="center">
        <template v-slot="{row}">
          {{ row.timeOfEntry | formatDate }}
        </template>
      </el-table-column>
      <el-table-column class="operate" label="操作" align="center">
        <template v-slot="{row}">
          <span class="check" style="color: #44A0FF; cursor: pointer" @click="$router.push({name: 'StaffInfo', query: {id: row.id}})">查看</span>
          <span class="role" style="margin: 0 10px; color: #67C23A; cursor: pointer" @click="showDialog('分配角色', row.id)">角色</span>
          <span class="del" style="color: #F56C6D; cursor: pointer" @click="delRole(row.id)">删除</span>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination :page-size="paginationObj.pagesize" :current-page="paginationObj.page" layout="prev, pager, next" :total="paginationObj.total" @current-change="changePage">
    </el-pagination>

    <!-- 对话框 -->
    <el-dialog :title="dialogConfig.title" :visible="dialogConfig.isShowDialog" width="30%" @close="cancel">

      <el-checkbox-group v-if="dialogConfig.title === '分配角色'" v-model="checkList">
        <el-checkbox v-for="item in cornerList" :key="item.id" :label="item.id">
          {{ item.name }}
        </el-checkbox>
      </el-checkbox-group>

      <el-form v-if="dialogConfig.title === '新增员工'" ref="newEmployeeFormRef" :rules="newEmployeeFormRules" :model="newEmployeeFormData" class="form">
        <el-form-item prop="username" class="item" label="姓名" label-width="100px">
          <el-input v-model="newEmployeeFormData.username" class="input"></el-input>
        </el-form-item>
        <el-form-item prop="mobile" class="item1" label="手机" label-width="100px">
          <el-input v-model="newEmployeeFormData.mobile" class="input"></el-input>
        </el-form-item>
        <el-form-item prop="timeOfEntry" class="item2" label="入职时间" label-width="100px">
          <el-date-picker v-model="newEmployeeFormData.timeOfEntry" placeholder="请选择入职时间" />
        </el-form-item>
        <el-form-item prop="formOfEmployment" class="item3" label="聘用形式" label-width="100px">
          <el-input v-model="newEmployeeFormData.formOfEmployment" class="input"></el-input>
        </el-form-item>
        <el-form-item prop="workNumber" class="item4" label="工号" label-width="100px">
          <el-input v-model="newEmployeeFormData.workNumber" class="input"></el-input>
        </el-form-item>
        <el-form-item prop="departmentName" class="item5" label="部门" label-width="100px">
          <el-input v-model="newEmployeeFormData.departmentName" class="input"></el-input>
        </el-form-item>
        <el-form-item prop="correctionTime" class="item6" label="转正时间" label-width="100px">
          <el-date-picker v-model="newEmployeeFormData.correctionTime" placeholder="请选择入职时间" />
        </el-form-item>
      </el-form>

      <el-row slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </el-row>
    </el-dialog>

    <!-- 二维码 对话框 -->
    <el-dialog title="二维码" :visible="whetherShowQrCodeDialog" width="30%" @close="closureQrCodeDialog">
      <el-row type="flex" justify="center">
        <canvas ref="qrCodeCanvas">
        </canvas>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { getEmployeeList, getStaffInfo, addStaff } from '@/api/employeeManagement.js'
import { getAllTheCornerList, updateRole, delRole } from '@/api/roleManagement.js'
import { formatDate } from '@/filters'
import QrCode from 'qrcode'

export default {
  name: 'Staff',
  filters: {
    formatDate, // 格式化时间
  },
  data() {
    return {
      tableList: [], // 表格数据
      demoList: [], // Demo 列表
      paginationObj: {
        // 分页器对象
        page: 1, // 页码
        pagesize: 5, // 每页显示多少条数据
        total: 0, // 共多少条数据
      },
      dialogConfig: {
        // 对话框配置项
        isShowDialog: false, // 是否显示对话框
        title: '', // 标题
      },
      cornerList: [], // 员工列表
      checkList: [], // 选中项
      selectStaffId: 0, // 当前员工 ID
      newEmployeeFormData: {
        // 新增员工 表单数据
        username: '',
        mobile: '',
        timeOfEntry: '',
        formOfEmployment: '',
        workNumber: '',
        departmentName: '',
        correctionTime: '',
      },
      newEmployeeFormRules: {
        // 表单验证规则
        username: [
          { required: true, trigger: 'blur', message: '不能为空' }, // 不能为空
        ],
        mobile: [
          { required: true, trigger: 'blur', message: '不能为空' }, // 不能为空
        ],
        timeOfEntry: [
          { required: true, trigger: 'blur', message: '不能为空' }, // 不能为空
        ],
        formOfEmployment: [
          { required: true, trigger: 'blur', message: '不能为空' }, // 不能为空
        ],
        workNumber: [
          { required: true, trigger: 'blur', message: '不能为空' }, // 不能为空
        ],
        departmentName: [
          { required: true, trigger: 'blur', message: '不能为空' }, // 不能为空
        ],
        correctionTime: [
          { required: true, trigger: 'blur', message: '不能为空' }, // 不能为空
        ],
      },
      defaultImg: require('@/assets/images/default.png'), // 考虑到打包时，路径会发送变化，导致图片加载失败。所以这里使用 require 包裹起来
      whetherShowQrCodeDialog: false, // 是否显示 二维码 对话框
    }
  },
  created() {
    this.getEmployeeList()
    this.getAllTheCornerList()
  },
  methods: {
    async getEmployeeList() {
      // 获取 员工列表
      const result = await getEmployeeList({ page: this.paginationObj.page, size: this.paginationObj.pagesize })
      this.paginationObj.total = result.total
      this.tableList = result.rows
    },
    async getStaffInfo(id) {
      const result = await getStaffInfo(id)
      this.checkList = result.roleIds
    },
    async getAllTheCornerList() {
      // 获取 所有角色列表
      const result = await getAllTheCornerList()
      this.cornerList = result.rows
    },
    async delRole(id) {
      // 删除 角色
      await delRole(id)
    },
    changePage(newPage) {
      // 监听页码
      this.paginationObj.page = newPage
      this.getEmployeeList()
    },
    async sure() {
      // 确定
      if (this.dialogConfig.title === '分配角色') {
        await updateRole({ id: this.selectStaffId, roleIds: this.checkList })
        this.$message.success('分配角色成功')
      }
      if (this.dialogConfig.title === '新增员工') {
        await addStaff(this.newEmployeeFormData)
        this.$message.success('新增员工成功')
        this.getEmployeeList()
        setTimeout(() => {
          this.$refs.newEmployeeFormRef.resetFields()
        }, 100)
      }
      this.dialogConfig.isShowDialog = false
    },
    cancel() {
      // 取消
      if (this.dialogConfig.title === '新增员工') {
        setTimeout(() => {
          this.$refs.newEmployeeFormRef.resetFields()
        }, 100)
      }
      this.dialogConfig.isShowDialog = false
    },
    async showDialog(type, id) {
      // 显示对话框
      if (type === '分配角色') {
        this.dialogConfig.title = '分配角色'
        this.selectStaffId = id
        await this.getStaffInfo(id)
      }
      if (type === '新增员工') {
        this.dialogConfig.title = '新增员工'
      }
      this.dialogConfig.isShowDialog = true
    },
    closureQrCodeDialog() {
      // 关闭 二维码 对话框
      this.whetherShowQrCodeDialog = false
    },
    showQrCodeDialog(url) {
      // 显示 二维码 对话框
      this.whetherShowQrCodeDialog = true

      this.$nextTick(() => {
        // 说明：显示对话框后数据已更新，但是结构还没渲染出来，所以需要使用 $nextTick 来等待结构渲染完毕
        // this.$nextTick 作用：等待结构渲染完毕后再去执行回调函数
        QrCode.toCanvas(this.$refs.qrCodeCanvas, url) // 转换成二维码
      })
    },
    exportData() {
      // 将数据导出为 Excel 文件
      import('@/vendor/Export2Excel').then(excel => {
        // 懒加载
        const order = ['mobile', 'username', 'timeOfEntry', 'correctionTime', 'workNumber']
        /* 格式化数据：将数组中对象类型的成员格式化成数组类型的成员 && 筛选出指定的属性 && 成员中的数据按照规定的顺序排列 && 去掉成员中的数据 key 只保留 value
        格式化前：[{id: "1063705989926227968", mobile: "13800000002", username: "管理员"}, {id: "1063705989926227968", mobile: "13800000003", username: "孙财"}]
        格式化后：[['13800000002', '管理员'], ['13800000003', '孙财']]
        */
        const newRows = this.tableList.map(item =>
          Object.keys(order).map(key => {
            // 日期转换
            if (order[key] === 'timeOfEntry' || order[key] === 'correctionTime') {
              return formatDate(item[order[key]])
            }

            return item[order[key]]
          })
        )

        excel.export_json_to_excel({
          header: ['手机号', '姓名', '入职日期', '转正日期', '工号'],
          data: newRows,
          filename: '员工工资表',
        })
      })
    },
  },
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
      border: 1px solid #91d5ff;
      background: #e7f4ff;
      .el-icon-info {
        margin-right: 3px;
        color: #409eff;
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
