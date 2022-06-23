// 全局注册组件

import UploadExcel from './UploadExcel'
import ThemePicker from './ThemePicker'

export default {
  install(Vue) {
    Vue.component('UploadExcel', UploadExcel)
    Vue.component('ThemePicker', ThemePicker)
  }
}
