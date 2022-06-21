<template>
  <upload-excel :on-success="success"></upload-excel>
</template>

<script>
import { batchImportEmployee } from '@/api/employeeManagement'

export default {
  methods: {
    async success({ header, results }) { // 上传文件成功后触发
      console.log(header)
      console.log(results)

      // header：字段 【type：Array】
      // results：字段数据 【type：Array】
      const relations = {
        '姓名': 'username',
        '手机号': 'mobile',
        '工号': 'workNumber',
        '入职日期': 'timeOfEntry',
        '转正日期': 'correctionTime'
      }
      var newArr = results.map(item => {
        var userInfo = {}
        Object.keys(item).forEach(key => {
          if (relations[key] === 'timeOfEntry' || relations[key] === 'correctionTime') {
            userInfo[relations[key]] = new Date(this.formatDate(item[key], '/'))
          } else {
            userInfo[relations[key]] = item[key]
          }
        })
        return userInfo
      })

      console.log(newArr)

      await batchImportEmployee(newArr)
      this.$message.success('员工批量导入成功')
      this.$router.push('staff')
    },
    formatDate(numb, format) { // 格式化日期
      const time = new Date((numb - 1) * 24 * 3600000 + 1)
      time.setYear(time.getFullYear() - 70)
      const year = time.getFullYear() + ''
      const month = time.getMonth() + 1 + ''
      const date = time.getDate() - 1 + ''
      if (format && format.length === 1) {
        return year + format + month + format + date
      }
      return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
    }
  }
}
</script>

  <style>

  </style>
