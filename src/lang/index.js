// 多语言实例化文件

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookie from 'js-cookie'
import elementZH from 'element-ui/lib/locale/lang/zh-CN'
import elementEN from 'element-ui/lib/locale/lang/en'
import customZH from './zh'
import customEN from './en'

Vue.use(VueI18n)

export default new VueI18n({
  locale: Cookie.get('language') || 'zh', // 当前语言类型（标识符，可以随意起名）
  messages: { // 语言类型所拥有的语言包（node_modules/element-ui/lib/locale/lang/zh-CN 目录下有很多内置语音包，根据需要选择需要的语音包）
    zh: {
      ...elementZH,
      ...customZH
    },
    en: {
      ...elementEN,
      ...customEN
    }
  }
})
