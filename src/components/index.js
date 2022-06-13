// 全局注册组件

import UploadExcel from './UploadExcel'

export default {
  install(Vue) {
    Vue.component('UploadExcel', UploadExcel)
  }
}
