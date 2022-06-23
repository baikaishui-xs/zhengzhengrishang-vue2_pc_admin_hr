# 项目初始化
  ## 使用 vue-cli 脚手架创建项目
  **预设：** vue2 / node-sass / babel / router / vuex / eslint (Use config files)

  ## 在 vue ui 图形界面中启动一次项目

  ## 配置 ESLint（可以根据个人的喜好配置）（-- .eslintrc.js）
  ```js
  module.exports = {
    root: true, // 当前项目使用这个配置文件, 不会往父级目录找 .eslintrc.js 文件
    parserOptions: { // 对新语法使用eslint
      parser: 'babel-eslint',  // 使用 babel-eslint 来解析新语法 ES6
      sourceType: 'module'
    },
    env: { // 指定 eslint 启动环境
      browser: true,
      node: true,
      es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: { // 自定义规则
      /* value 值：
      （1）"off"/0：关闭规则
      （2）"warn"/1：将规则视为一个警告（不会影响退出码）, 只警告，不会退出程序
      （3）"error"/2：将规则视为一个错误 (退出码为1)，报错并退出程序
      */

      "vue/max-attributes-per-line": [2, {
        "singleline": 10,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline":"off",
      "vue/name-property-casing": ["error", "PascalCase"],
      "vue/no-v-html": "off",
      'accessor-pairs': 2,
      'arrow-spacing': [2, {
        'before': true,
        'after': true
      }],
      'block-spacing': [2, 'always'],
      'brace-style': [2, '1tbs', {
        'allowSingleLine': true
      }],
      'camelcase': [0, {
        'properties': 'always'
      }],
      'comma-dangle': [2, 'never'],
      'comma-spacing': [2, {
        'before': false,
        'after': true
      }],
      'comma-style': [2, 'last'],
      'constructor-super': 2,
      'curly': [2, 'multi-line'],
      'dot-location': [2, 'property'],
      'eol-last': 2,
      'eqeqeq': ["error", "always", {"null": "ignore"}],
      'generator-star-spacing': [2, {
        'before': true,
        'after': true
      }],
      'handle-callback-err': [2, '^(err|error)$'],
      'indent': [2, 2, {
        'SwitchCase': 1
      }],
      'jsx-quotes': [2, 'prefer-single'],
      'key-spacing': [2, {
        'beforeColon': false,
        'afterColon': true
      }],
      'keyword-spacing': [2, {
        'before': true,
        'after': true
      }],
      'new-cap': [2, {
        'newIsCap': true,
        'capIsNew': false
      }],
      'new-parens': 2,
      'no-array-constructor': 2,
      'no-caller': 2,
      'no-class-assign': 2,
      'no-cond-assign': 2,
      'no-const-assign': 2,
      'no-control-regex': 0,
      'no-delete-var': 2,
      'no-dupe-args': 2,
      'no-dupe-class-members': 2,
      'no-dupe-keys': 2,
      'no-duplicate-case': 2,
      'no-empty-character-class': 2,
      'no-empty-pattern': 2,
      'no-eval': 2,
      'no-ex-assign': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-extra-boolean-cast': 2,
      'no-extra-parens': [2, 'functions'],
      'no-fallthrough': 2,
      'no-floating-decimal': 2,
      'no-func-assign': 2,
      'no-implied-eval': 2,
      'no-inner-declarations': [2, 'functions'],
      'no-invalid-regexp': 2,
      'no-irregular-whitespace': 2,
      'no-iterator': 2,
      'no-label-var': 2,
      'no-labels': [2, {
        'allowLoop': false,
        'allowSwitch': false
      }],
      'no-lone-blocks': 2,
      'no-mixed-spaces-and-tabs': 2,
      'no-multi-spaces': 2,
      'no-multi-str': 2,
      'no-multiple-empty-lines': [2, {  // 不允许有连续多行空行
        'max': 1
      }],
      'no-native-reassign': 2,
      'no-negated-in-lhs': 2,
      'no-new-object': 2,
      'no-new-require': 2,
      'no-new-symbol': 2,
      'no-new-wrappers': 2,
      'no-obj-calls': 2,
      'no-octal': 2,
      'no-octal-escape': 2,
      'no-path-concat': 2,
      'no-proto': 2,
      'no-redeclare': 2,
      'no-regex-spaces': 2,
      'no-return-assign': [2, 'except-parens'],
      'no-self-assign': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-shadow-restricted-names': 2,
      'no-spaced-func': 2,
      'no-sparse-arrays': 2,
      'no-this-before-super': 2,
      'no-throw-literal': 2,
      'no-trailing-spaces': 2,
      'no-undef': 2,
      'no-undef-init': 2,
      'no-unexpected-multiline': 2,
      'no-unmodified-loop-condition': 2,
      'no-unneeded-ternary': [2, {
        'defaultAssignment': false
      }],
      'no-unreachable': 2,
      'no-unsafe-finally': 2,
      'no-unused-vars': 1,
      'no-useless-call': 2,
      'no-useless-computed-key': 2,
      'no-useless-constructor': 2,
      'no-useless-escape': 0,
      'no-whitespace-before-property': 2,
      'no-with': 2,
      'one-var': [2, {
        'initialized': 'never'
      }],
      'operator-linebreak': [2, 'after', {
        'overrides': {
          '?': 'before',
          ':': 'before'
        }
      }],
      'padded-blocks': [2, 'never'],
      'quotes': [2, 'single', {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }],
      'semi': [2, 'never'],
      'semi-spacing': [2, {
        'before': false,
        'after': true
      }],
      'space-before-blocks': [2, 'always'],
      'space-before-function-paren': [2, 'never'],
      'space-in-parens': [2, 'never'],
      'space-infix-ops': 2,
      'space-unary-ops': [2, {
        'words': true,
        'nonwords': false
      }],
      'spaced-comment': [2, 'always', {
        'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }],
      'template-curly-spacing': [2, 'never'],
      'use-isnan': 2,
      'valid-typeof': 2,
      'wrap-iife': [2, 'any'],
      'yield-star-spacing': [2, 'both'],
      'yoda': [2, 'never'],
      'prefer-const': 2,
      'object-curly-spacing': [2, 'always', {
        objectsInObjects: false
      }],
      'array-bracket-spacing': [2, 'never'],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 上线环境用打印就报警告, 开发环境关闭此规则
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // debugger 可以终止代码执行
      // 要求使用骆驼拼写法
      // 'camelcase': 'none',
      // 要求使用 === 和 !==
      'eqeqeq': 0,
      // 函数和圆括号之间没有空格
      'space-before-function-paren': 0,
      // 要求或禁止使用拖尾逗号
      // "comma-dangle": ["error", {
      //   "arrays": "always-multiline",
      //   "objects": "always-multiline",
      //   "imports": "never",
      //   "exports": "always",
      //   "functions": "never"
      // }],
      // 要求或禁止文件末尾保留一行空行
      'eol-last': ['error', 'always'],
      // 要求对象字面量属性名称用引号括起来："consistent" 要求对象字面量属性名称使用一致的引号，要么全部用引号，要么都不用
      'quote-props': ['error', 'consistent'],
      // 要求注释后要有一个空格
      'spaced-comment': ['error', 'always'],
      // 要求操作符前后都要有一个空格
      'space-infix-ops': 'error',
      // 要求圆括号中的前后都要有一个空格
      /* "space-in-parens": ["error", "always"], */
      // 要求花括号中的前后都要有一个空格
      'object-curly-spacing': ['error', 'always'],
      // 要求数组中逗号后要使用一个空格
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      // 自动补充分号
      // "semi": [2, "always"],
      // 禁止多个空格
      'no-multi-spaces': 'error',
      // 使用单引号
      'quotes': ['error', 'single'],
      //在computed properties中禁用异步actions
      'vue/no-async-in-computed-properties': 'error',
      //不允许重复的keys
      'vue/no-dupe-keys': 'error',
      //不允许重复的attributes
      'vue/no-duplicate-attributes': 'warn',
      //在 <template> 标签下不允许解析错误
      'vue/no-parsing-error': [
        'error',
        {
          'x-invalid-end-tag': false,
        },
      ],
      //不允许覆盖保留关键字
      'vue/no-reserved-keys': 'error',
      //强制data必须是一个带返回值的函数
      // 'vue/no-shared-component-data': 'error',
      //不允许在computed properties中出现副作用。
      'vue/no-side-effects-in-computed-properties': 'error',
      //<template>不允许key属性
      'vue/no-template-key': 'warn',
      //在 <textarea> 中不允许mustaches
      'vue/no-textarea-mustache': 'error',
      //不允许在v-for或者范围内的属性出现未使用的变量定义
      'vue/no-unused-vars': 'warn',
      //<component>标签需要v-bind:is属性
      'vue/require-component-is': 'error',
      // render 函数必须有一个返回值
      'vue/require-render-return': 'error',
      //保证 v-bind:key 和 v-for 指令成对出现
      'vue/require-v-for-key': 'error',
      // 检查默认的prop值是否有效
      'vue/require-valid-default-prop': 'error',
      // 保证computed属性中有return语句
      'vue/return-in-computed-property': 'error',
      // 强制校验 template 根节点
      'vue/valid-template-root': 'error',
      // 强制校验 v-bind 指令
      'vue/valid-v-bind': 'error',
      // 强制校验 v-cloak 指令
      'vue/valid-v-cloak': 'error',
      // 强制校验 v-else-if 指令
      'vue/valid-v-else-if': 'error',
      // 强制校验 v-else 指令
      'vue/valid-v-else': 'error',
      // 强制校验 v-for 指令
      'vue/valid-v-for': 'error',
      // 强制校验 v-html 指令
      'vue/valid-v-html': 'error',
      // 强制校验 v-if 指令
      'vue/valid-v-if': 'error',
      // 强制校验 v-model 指令
      'vue/valid-v-model': 'error',
      // 强制校验 v-on 指令
      'vue/valid-v-on': 'error',
      // 强制校验 v-once 指令
      'vue/valid-v-once': 'error',
      // 强制校验 v-pre 指令
      'vue/valid-v-pre': 'error',
      // 强制校验 v-show 指令
      'vue/valid-v-show': 'error',
      // 强制校验 v-text 指令
      'vue/valid-v-text': 'error',
      'vue/comment-directive': 0,
      // 标签内没有内容时，删除结尾标签
      "vue/html-self-closing": ["off", {
        "html": {
          "void": "never",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }]
    }
  }
  ```

  ## 删除多余的文件和代码
  - 删除 assets/logo.png
  - 删除 components 目录里的所有文件
  - 删除 router 里的 index.js 里的 routes 数组中的所有路由
  - 删除 views 目录中的所有文件
  - 删除 App.vue 中的示例代码

  ## 添加目录结构
  ```
  node_modules                         // 存放 第三方包
  public                               // 存放 页面图标、index.html
  src                                  // 存放 项目源代码
  api                       【手动创建】 // 存放 可复用的 api 接口       
    assets                             // 存放 静态资源
      product               【手动创建】 // 存放 商品图片（大图片）          
      images                【手动创建】 // 存放 小图标（小图片）（该目录里的图片会被转换为 base64）  
      styles                【手动创建】 // 存放 CSS样式表       
        mixins.scss         【手动创建】 // 样式函数混入
        init.scss           【手动创建】 // 样式初始化   
    components                         // 存放 组件
    router                             // 存放 路由模块
    store                              // vuex（状态管理）
      modules               【手动创建】 // 存储数据模块。让 vuex 中的数据持久化         
    utils                   【手动创建】 // 存放 工具性质的函数和模块       
      request.js          【手动创建】 // 请求相关配置        
    vender                  【手动创建】 // 手动添加的第三方 js 库（npm 下载不到的）     
    views                              // 存放 通过路由动态切换的组件
    storage                 【手动创建】 // 数据存储工具箱                
    App.vue                            // 项目 根组件
    main.js                            // 项目 入口文件（主要职责：创建 vue 应用）
    store.js                           // vuex 配置文件
    theme.scss              【手动创建】 // 主题定制                    
  .browserslistrc                      // 将 css 转换为浏览器兼容的版本（在 CSS 前面添加浏览器对应的兼容前缀）
  .editorconfig                        // 编辑器配置文件（配置缩进、空格、字体大小 等）
  .eslintrc.js                         // ESLint 配置文件
  .gitignore                           // 忽略清单
  babel.config.js                      // babel 配置文件（ES降级配置文件）
  package.json                         // 包管理配置文件
  vue.config.js             【手动创建】 // 项目配置文件                 
  ```

  ## 为空目录添加 .gitkeep（解决远程仓库不能上传空目录的问题）

  ## 初始化样式
  ### 1、定义公共代码（-- style/新建 index.scss）
  ```scss
  body {
    height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
    font-weight: bold;
  }

  label {
    font-weight: 700;
  }

  html {
    height: 100%;
    box-sizing: border-box;
  }

  #app {
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a:focus,
  a:active {
    outline: none;
  }

  a,
  a:focus,
  a:hover {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }

  div:focus {
    outline: none;
  }

  .clearfix {
    &:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
  }

  // main-container global css
  .app-container {
    padding: 20px;
  }

  input,
  button {
    border: 0;
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;
  }

  li {
    list-style: none;
  }

  .w {
    width: 1300px;
    margin: 0 auto;
  }

  ul,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  img {
    vertical-align: bottom;
  }
  ```

  ### 2、导入公共代码（-- main.js）
  ```js
  import '@/styles/index.scss'
  ```

  ## 定义 Demo 路由【可选】（个人喜好，用于测试代码）

  ## 下载插件
  1、规范化 css 代码
  2、element-ui 组件库
  3、cookie 库

  `npm i normalize.css@8.0.1 js-cookie@2.2.0`

  ## 导入 规范化 css 代码（-- main.js）
  ```js
  import 'normalize.css'
  ```


  ## 配置 element-ui
  ### 1、下载 element-ui 组件库包
  `npm i element-ui@2.15.6`

  ### 2、完整引入 element ui 组件（-- main.js）
  ```js
  import ElementUI from 'element-ui'
  ```

  ### 3、导入 element-ui 组件的样式（-- 同上）
  ```js
  import 'element-ui/lib/theme-chalk/index.css'
  ```

  ### 4、把 Element 注册为 vue 的插件（-- 同上）
  ```js
  Vue.use(ElementUI)
  ```

  ## 配置 vuex-persistedstate 数据持久化
  ### 1、下载 vuex-persistedstate 包
  `npm i vuex-persistedstate@4.1.0`

  ### 2、配置 vuex-persistedstate（重构）（-- store/index.js）
  ```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  import createPersistedState from 'vuex-persistedstate'
  import demo from '@/store/modules/demo.js'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    modules: { // 注册模块
      demo
    },
    plugins: [
      createPersistedState({ // 数据持久化插件 配置
        key: 'store', // 本地仓库名字
        paths: ['demo'] // 指定需要持久化的模块
      })
    ]
  })

  export default store
  ```

  ### 3、模块骨架示例（-- store/modules/新建 demo.js）
  ```js
  import { getUsernameLogin } from '@/api/user-management.js'

  const state = { // 公共数据
    token: ''
  }

  const mutations = { // 修改 store 中的数据
    setToken(state, token) {
      state.token = token
    }
  }

  const actions = { // 处理异步任务
    async getUsernameLogin(context, data) { // 用户登录[用户名]
      const result = await getUsernameLogin(data)
      context.commit('setToken', result)
    }
  }

  const modules = { // 计算属性。监听 state 数据

  }

  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    modules
  }
  ```


  ## 封装 axios
  ### 1、下载 axios 包
  `npm i axios@0.25.0`

  ### 2、封装 axios（-- utils/request.js）
  ```js
  import axios from 'axios'
  import { Message } from 'element-ui'

  // 创建 axios 实例
  const service = axios.create({
    baseURL: '/api', // 请求根路径
    timeout: 8000 // 请求超时时间
  })

  // 请求 拦截器
  service.interceptors.request.use(request => {
    return request
  }, error => {
    return Promise.reject(error)
  })

  // 响应 拦截器
  service.interceptors.response.use(response => {
    // 返回响应结果
    if (response.data.msg === 'success') {
      return response.data.data
    } 
    Message.error(response.data.msg)
    // 把异步API执行失败的结果传递出去
    return Promise.reject(response.data.msg)
  }, error => {
    return Promise.reject(error)
  })

  export default service
  ```

  ### 【可选】解决请求参数格式和服务端参数格式不一致的问题（-- main.jx）
  **解决方法：** 将请求参数转换成字符串格式。因为 content-type 会根据请求参数的格式自动变换请求格式
  - application/x-www-form-urlencoded   格式：categoryId=263919
  - application/json                    格式：{"categoryId": 263919}

  #### 1、下载 qs 包
  **作用：** 将 application/json 格式转换为 application/x-www-form-urlencoded 格式
  
  `npm i qs@6.10.3`

  #### 2、导入 qs 包（-- utils/request.js）
  ```js
  import qs from 'qs'
  ```

  #### 2、将 application/json 格式转换为 application/x-www-form-urlencoded 格式
  ```js（-- 同上）
  // 请求 拦截器
  axios.interceptors.request.use(request => {

    -- 增    
    if (request.data) {
      request.data = qs.stringify(request.data) // 将 application/json 格式转换为 application/x-www-form-urlencoded 格式
    }
    --

    return request
  })
  ```

  ## 配置 cookie 库
  ### 1、导入以下代码（-- utils/新建 auth.js）
  ```js
  import Cookies from 'js-cookie'

  const TokenKey = 'vue_admin_template_token'

  export function getToken() {
    return Cookies.get(TokenKey)
  }

  export function setToken(token) {
    return Cookies.set(TokenKey, token)
  }

  export function removeToken() {
    return Cookies.remove(TokenKey)
  }
  ```

  ### 2、按需导入（-- store/modules/新建 user.js）
  ```js
  import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
  ```

  ## 配置 开发 环境下的接口代理（-- vue.config.js）
  ```js
  module.exports = {
    devServer: { // 开发环境下的服务器配置
      host: 'localhost',
      port: 8080,
      // 代理配置
      proxy:{
        // 拦截携带 /api 的接口
        '/api': {
          // 代理到的目标地址
          target: 'https://api.it120.cc/zcr',
          // 是否开启跨域
          changeOrigin: true,
          // 路径重写
          pathRewrite:{
            // 将 /api 转换为 空
            '^/api': ''
          }
        }
      }
    },
    configureWebpack: {
      devtool: 'source-map'
    },
  }
  ```

  ## 【可选】配置远程仓库

# 一、登录页
  ## （一）验证码功能
  **核心实现方式：** ???

  **例：**
  ```js
  mounted() {
    this.getImgCode()
  },
  methods: {
    getImgCode() { // 获取 验证码
      this.loginForm.imgCode = process.env.VUE_APP_BASE_API + '/code?k=' + Math.random()
    },
  }
  ```

  ## （二）将 token 存储到 cookie 中
  **核心实现方式：** 使用 js-cookie 插件将 token 存储到 cookie 中

  ### 1、通过 js-cookie 中的 getToken() 获取存储在 cookie 中的 token
   (-- @/store/modules/user.js；state 配置项)
  ```js
  token: getToken()
  ```

  ### 2、通过 js-cookie 中的 setToken() 将 token 存储到 cookie 中 && 将 token 存储到 state 中
  (-- 同上；mutations 配置项)
  ```js 
  setToken(state, token) {
    state.token = token
    setToken(token)
  }
  ```
  
  (-- 同上；actions 配置项)
  ```js
  async login(context, data) {
    const result = await login(data)
    context.commit('setToken', result)
  }
  ```

  （-- @/views/login/index.vue）
  ```js
  import { mapActions } from 'vuex'

  methods() {
    ...mapActions(['user/login'])
  }

  async login() { // 登录

    -- 增
    await this.$store.dispatch('user/login', this.loginForm)
    --

    this.$router.push({
      name: 'Dashboard'
    })
  }
  ```

  ## （三）每次发送请求时携带 token
  **核心实现方式：** 在请求拦截器中的请求头中携带 token

  （-- @/utils/request.js）
  ```js
  service.interceptors.request.use(config => { // 请求拦截器

    -- 增
    if (store.getters.token) { // 在请求头中携带 token
      config.headers['Authorization'] = `${store.getters.token}`
    }
    --

    return config
  })
  ```

  ## （四）token 过期时的处理
  ### 前端实现
  **核心实现方式：** 获取 token 时，将当前时间戳一起存储到缓存中。每当发起请求时，判断（当前时间戳 - 缓存中的时间戳）/ 1000 如果大于过期时间，表示 token 过期，清空 token，跳转到登录页，抛出时间戳过期提示

  #### 1、定义时间戳的 key && 定义获取时间戳的方法 && 定义设置时间戳的方法
  （-- @/utils/auth.js）
  ```js 
  const timeKey = 'hrsaas-timestamp-key' // 时间戳

  export function getTimeStamp() { // 获取 时间戳
    return Cookies.get(timeKey)
  }
  export function setTimeStamp() { // 设置 时间戳
    Cookies.set(timeKey, Date.now())
  }
  ```
  
  #### 2、获取 token 的时候将当前时间戳存到缓存中
  （-- @/views/login/index.vue）
  ```js
  -- 增
  import { setTimeStamp } from '@/utils/auth'
  --

  async login(content, data) { // 登录
    ...
    context.commit('setToken', result)

    -- 增
    setTimeStamp()
    --

  }
  ```
  
  #### 3、每次请求时，调用 判断 token 是否过期的方法，如果过期则清空 token，跳转到登录页，并抛出错误
  （-- @/utils/request.js）
  ```js 
  -- 增
  import { getTimeStamp } from '@/utils/auto'
  import router from '@/router'

  const TimeOut = 3600 // token 过期时间。3600 毫秒 = 一小时
  
  function IsCheckTimeOut() { // 判断 token 是否过期
    var currentTime = Date.now() // 当前时间戳
    var timeStamp = getTimeStamp() // 缓存时间戳
    return (currentTime - timeStamp) / 1000 > TimeOut // 判断 token 是否过期 // 公式：【（当前时间戳 - 缓存中的时间戳）/ 1000 如果大于过期时间，表示 token 过期】。这里的除 1000 是将毫秒转化成秒。
  }
  --

  // 请求拦截器
  if (store.getters.token) {

    -- 增
    if (IsCheckTimeOut()) { // 判断 token 是否过期
      store.dispatch('user/logout') // 调用登出方法
      router.push('/login')
      return Promise.reject(new Error('token 超时了'))
    }
    --

  }
  ```

  ### 后端实现（推荐）
  **核心实现方式：** 在响应拦截器中判断后端响应的状态码，如果是 401 则表示 token 过期，然后清空 token、和 vuex 中的 token 即可

  （-- @/utils/request.js）
  ```js
  -- 增
  import store from '@/store'
  import router from '@/router'
  --

  // 响应拦截器
  service.interceptors.response.use(response => {
    ...
  }, error => {

    -- 增
    if (error.response && error.response.data && error.response.data.code === 10002) { // 判断 token 是否过期

      // 调用登出方法
      store.dispatch('user/logout')

      router.push('/login')
    } else {

      -- 改（新）
      Message.error(error.message) // 提示错误信息
      --

    }
    return Promise.reject(error)
    --

    -- 改（旧）
    Message.error(error.message) // 提示错误信息
  })
  ```

  ## （五）退出功能
  **核心实现方式：** 
  1、清空 state 中的 token
  2、清空 cookie 中的 token
  3、清空 用户信息

  ## （六）设置路由白名单和有 token 的情况下访问登录页直接跳转到首页
  **核心实现方式：** 导航守卫。在前置守卫中（判断是否有 token（如果有 token 在通过前置守卫的第一个参数判断是否访问的是 登录页，如果是登录页则调用前置守卫的第三个参数跳转到首页））

  （-- @/新建 permission.js）
  ```js
  import router from '@/router'
  import nprogress from 'nprogress'
  import 'nprogress/nprogress.css' // 引入进度条样式
  import store from '@/store'

  const whiteList = ['/login', '/404', '/demo'] // 白名单
  
  router.beforeEach((to, from, next) => { // 前置守卫 // （参数一：将要 访问 路由的信息对象）（参数二：将要 离开 路由的信息对象）（参数三：是一个函数，表示放行，允许这次路由导航）
    nprogress.start() // 开启进度条

    if (store.getters.token) { // 判断 是否有 token
      if (to.path === '/login') { // 判断 是否前往 登录页
        next('/')
      } else {
        next()
      }
    } else {
      if (whiteList.includes(to.path)) { // 判断 前往的地址是否在白名单中
        next()
      } else {
        next('/login')
      }
    }

    nprogress.done() // 解决手动切换地址时，进度条不关闭的问题
  })
  router.afterEach(() => { // 后置守卫
    nprogress.done() // 关闭进度条
  })
  ```

# 二、首页
  ## （一）显示左侧导航组件 logo
  ### 1、显示左侧导航组件 logo
  （-- @/settings.js）
  ```js
  -- 改（旧）
  sidebarLogo: false,
  --
  -- 改（新）
  sidebarLogo: true,
  --
  ```

  ### 2、修改 文本、logo 地址 && 替换小图样式 && 替换大图样式
  （-- @/layout/components/Sidebar/Logo.vue）
  ```js
  data() {
    return {

      -- 改（旧）
      title: 'Vue Admin Template',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
      --

      -- 改（新）
      title: 'IHRM 后台登录系统',
      logo: require('@/assets/images/logo.png'),
      --

    }
  },
  ```

  ```scss
  -- 改（旧）
  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
  --

  -- 改（新）
  // 小图样式
  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
      width: 32px;
      height: 32px;
    }
  }
  
  -- 改（旧）
  & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }
  --

  -- 改（新）
  // 大图样式
  & .sidebar-logo {
    width: 140px;
    vertical-align: middle;
    margin-right: 12px;
  }
  ```

  ## （二）一行显示固定个数,强制换行且均匀分布（超出的分布靠左）
  **文档：** `https://blog.csdn.net/EnidChann/article/details/102725124`

  ```scss
  .a {
    display: flex;
    flex-wrap: wrap;
    .b {
      width: calc(100% / 3);  // 这里的10px = (分布个数3-1)*间隙5px, 可以根据实际的分布个数和间隙区调整
      min-width: calc(100% / 3); // 加入这两个后每个item的宽度就生效了
      max-width: calc(100% / 3);
    }
  }
  ```

# 三、组织架构页
  ## （一）部门名称（name）： 同级部门中禁止出现重复部门
  ### 1、使用自定义规则
  ```js
  formRules: {
    name: [
      ...

      -- 增
      { trigger: 'blur', validator: checkNameRepeat }  // 判断同级部门下是否有重复的部门名称
      --
    ],
  },
  ```

  ### 2、定义自定义规则
  ```js
  // 判断同级部门下是否有重复的部门名称
  const checkNameRepeat = async(rule, value, callback) => {
    
    const { depts } = await getDepartments()  // 获取最新的组织架构数据。解决在添加部门时，其它账号已经添加了部门，导致冲突的问题

    /* 1、获取当前部门下的所有子部门（pid 和 id 相同，则代表是当前部门下的子部门）
      { id: 1, pid: '', name: '菜单1' },
      { id: 11, pid: 1, name: '菜单1-1' },
      { id: 12, pid: 1, name: '菜单1-2' },
      { id: 2, pid: '', name: '菜单2' },
      { id: 21, pid: 2, name: '菜单2-1' },
    */
    // 2、判断当前部门下的所有子部门名字是否已经存在
    - this.treeNode.id：当前节点的 id
    const isRepeat = depts.filter(item => item.pid === this.treeNode.id).some(item => item.name === value)

    isRepeat ? callback(new Error(`同级部门下已经有${value}的部门了`)) : callback()  // （callback(new Error())：校验不通过）（callback()：校验通过）
  }
  ```

  ### 3、部门编码（code）： 部门编码在整个模块中都不允许重复
  ```js
  data() {
    formRules: {
      name: [
        ...

        -- 增
        { trigger: 'blur', validator: checkBodeRepeat }  // 判断部门编码在整个模块中是否重复
        --
      ],
    },
  }

  // 判断部门编码在整个模块中是否重复
  const checkBodeRepeat = async(rule, value, callback) => {
    const { depts } = await getDepartments()  // 获取最新的组织架构数据。解决在添加部门时，其它账号已经添加了部门，导致冲突的问题

    const isRepeat = depts.some(item => item.code === value)

    isRepeat ? callback(new Error(`组织架构下已经存在这个${value}编码了`)) : callback()
  }
  ```

  ### 解决首部 tree-tools 添加子部门时，判断同级部门下是否有重复的部门名称 验证失效的问题
  **原因：** 由于treenode属性中没有id，id便是undefined，但是通过undefined进行等值判断是寻找不到对应的根节点的

  **解决方法：** 在传值时，我们将id属性设置为空字符串
  ```js
  this.company = { name: result.companyName, manager: '负责人', id: '' }
  ```

# 四、权限管理
  **说明：**
  1、权限一般分为 页面访问权限、按钮操作权限、API 访问权限
  2、API 权限一般由后端进行拦截，所以这里我们只实现 页面访问权限、按钮操作权限

  ## （一）控制 路由权限（页面访问权限）
  **核心实现方式：** 
  1、通过标识来判断用户是否拥有某个路由的权限
  2、将获取到的用户所拥有的路由和静态路由进行合并，然后使用 $router.addRoutes() 添加到路由表中
  3、使用路由表替换掉 侧边栏的 routes（侧边栏的每一项就是通过遍历 routes 来显示的）

  ### 1、将动态路由存储到一个数组中，用来做筛选权限路由
  #### 1-1、将动态路由抽离出来
  （-- 例：@/router/modules/创建 companySettings.js）
  ```js
  // 公司设置

  import Layout from '@/layout'

  export default {
    path: '/companySettings',
    name: 'companySettings',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/companySettings'),
      meta: { title: '公司设置', icon: 'el-icon-s-tools' }
    }]
  }
  ```

  #### 1-2、删除原路由
  （-- 例：@/router/index.js）
  ```js
  -- 删
  { // 公司设置
    path: '/companySettings',
    component: Layout,
    children: [{
      path: '',
      name: 'companySettings',
      component: () => import('@/views/companySettings'),
      meta: { title: '公司设置', icon: 'el-icon-s-tools' }
    }]
  },
  --
  ```

  #### 1-3、导入 抽离出来的动态路由
  （-- 例：@/router/index.js）
  ```js
  import companySettings from './modules/companySettings'
  ```

  #### 1-4、将动态路由存储到一个数组中，用来做筛选权限路由（-- 同上）
  ```js
  expoer const constantRoutes = [ // 静态路由
    ...
  ]

  -- 增
  export const asyncRoutes = [ // 动态路由
    companySettings
  ]
  --
  ```

  ### 2、将获取到的用户所拥有的路由和静态路由进行合并，然后添加到路由表中 && 将 404 路由放到动态路由的最后面
  **说明：** 标识必须和路由名称相同

  （-- store/modules/新建 permission.js）
  ```js
  // 路由权限

  import { constantRoutes } from '@/router' // 导入静态路由

  const state = {
    routes: constantRoutes  // 路由表。当前用户所拥有的路由权限（静态路由、动态路由）
  }
  const mutations = {
    setRoutes(state, newRoutes) {
      state.routes = [...constantRoutes, ...newRoutes] // 将 用户拥有的路由 和 静态路由 合并到一起
    }
  }
  const actions = {
  }

  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  ```

  （-- store/index.js）
  ```js
  import permission from './modules/permission'
  
  const store = new Vuex.Store({
    modules: {

      -- 增
      permission
      --

    }
  })
  ```

  （-- @/store/modules/permission.js）
  ```js
  -- 增
  import { constantRoutes, asyncRoutes } from '@/router' // 导入静态路由 和 动态路由
  --

  const actions = {
    
    -- 增
    filterRoutes(context, menus) { // 获取 用户所有拥有的路由权限
      let routes = [] // 当前用户所有拥有的动态路由权限
      menus.forEach(key => {
        routes.push(...asyncRoutes.filter(item => item.name === key))
      })
      routes = [...routes, { path: '*', redirect: '/404', hidden: true }]
      context.commit('setRoutes', routes) // 这里的 routes 是用来显示左侧菜单
      return routes // 这里的 routes 是给 addRoutes 用的
    }
    --

  }
  ```

  （-- @/router/index.js）
  ```js
  -- 删
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
  --
  ```

  （-- @/store/modules/user.js）
  ```js
  const actions = {
    async getUserInfo(context) { // 获取 用户信息
      const result = await getUserInfo()
      context.commit('setUserInfo', result)

      -- 增
      return result
      --
    }
  }
  ```

  （-- @/views/login/index.vue）
  ```js
  methods: {
    async login() {
      await this.$store.dispatch('user/getToken', this.formData)

      -- 改（旧）
      await this.$store.dispatch('user/getUserInfo')
      --

      -- 改（新）
      const { roles } = await this.$store.dispatch('user/getUserInfo')
      --

      -- 增 
      const routes = await this.$store.dispatch('permission/filterRoutes', roles.menus)

      this.$router.addRoutes(routes) // 将获取到的用户所拥有的动态路由添加到路由表中，并将 404 路由放到动态路由的最后面
      --

      this.$router.push({
        name: 'Dashboard'
      })
    }
  }
  ```

  ### 3、使用路由表替换掉 侧边栏的 routes
  **说明：** 侧边栏的每一项就是通过遍历 routes 来显示的

  （-- @/store/getters.js）
  ```js
  const getters = {

    -- 增
    routes: state => state.permission.routes
    --

  }
  ```

  （-- @/layout/components/Sidebar/index.vue）
  ```js
  computed: {
    ...mapGetters([
      'sidebar',

      -- 增
      'routes'
      --

    ])
  }
  ```
  
  （-- 同上）
  ```js
  -- 注释
  routes() {
    return this.$router.options.routes
  }
  --
  ```

  ### 4、退出登录后重置路由
  （-- @/store/modules/user.js）
  
  ```js
  -- 增
  import { resetRouter } from '@/router'
  --

  quitLogin(state) { // 退出登录
    state.token = ''
    removeToken()

    -- 增
    resetRouter() // 重置路由
    context.commit('permission/setRoutes', [], { root: true }) // 重置路由
    --

  },
  ```

  **测试：** 退出登录时，观察 vuex 中的 permission 模块中的 store 中的 routes 是否变为静态路由，如果只剩静态路由代表成功

  ### 5、解决用户登录后点击动态路由然后刷新显示空白页的问题
  **说明：** 因为 addRoutes 是存储在内存中的，所以刷新页面后数据就丢失了

  **解决方法：** 每次刷新页面都重新调用一次 addRoutes

  （-- @/main.js）
  ```js
  new Vue({
    el: '#app',
    router,
    store,

    -- 增
    async created() {
      const { roles } = await this.$store.dispatch('user/getUserInfo')
      const routes = await this.$store.dispatch('permission/filterRoutes', roles.menus)
      this.$router.addRoutes(routes) // 将获取到的用户所拥有的动态路由添加到路由表中，并将 404 路由放到动态路由的最后面
    },
    --

    render: h => h(App)
  })
  ```

  ### 【BUG】用户已经有某个路由的权限，但是在左侧菜单栏中没有显示
  **解决方法：** 标识和路由名称要一致，请查看 （-- @/router/modules/XXX.js）中的路由名称是否和标识一致，不一致请修改 路由名称 或 标识 来保持一致

  ## （二）控制 按钮操作权限
  **原理：**
  1、标识符合
  2、每个有按钮操作权限的组件都要定义一次 查找用户是否有按钮操作权限 的方法，所以这里使用 全局混入

  ### 1、定义一个方法，查找用户是否有按钮操作权限
  （-- @/src/新建 mixin/checkPermission.js）
  ```js
  import store from '@/store'
  export default {
    methods: {
      checkPermission(key) { // 查找用户是否有按钮操作权限 // 说明：这个 key 的值必须要要和 标识 相同
        const { userInfo } = store.state.user
        if (userInfo.roles && userInfo.roles.points) {
          return userInfo.roles.points.some(item => item === key)
        }
        return false
      }
    }
  }
  ```

  ### 2、全局混入
  （-- @/main.js）
  ```js
  import CheckPermission from '@/mixin/checkPermission'

  Vue.mixin(CheckPermission)
  ```

  ### 3、查找用户是否有按钮操作权限
  **例：**
  （-- 组件）
  ```html
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item :disabled="!checkPermission('add-dept')">添加子部门</el-dropdown-item>
  </el-dropdown-menu>

  <el-button v-if="!checkPermission('add-staff')">新增员工</el-button>
  <el-button disabled="!checkPermission('add-staff')">新增员工</el-button>
  ```

# 五、员工
  ## （一）excel 导入功能
  ### 1、安装 xlsx 包【作用：主要用于 excel 的导入导出】
  `npm i xlsx@0.16.9`

  ### 2、导入以下代码
  **代码地址：** `https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/UploadExcel/index.vue`

  （-- @/components/新建 UploadExcel/index.vue）
  ```html
  <template>
    <div class="upload-excel">
      <div class="btn-upload">
        <el-button style="width: 100px; margin-bottom: 10px;" :loading="loading" size="mini" type="primary" @click="handleUpload">
          点击上传
        </el-button>
        <span><a target="__blank" href="https://pan.baidu.com/s/1rAv5kRp0nR2w_Bv8HvgN4g" style="color: red">下载模板</a>（提取码：5e3c）</span>
      </div>

      <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleClick">
      <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
        <i class="el-icon-upload" />
        <span>将文件拖到此处</span>
      </div>
    </div>
  </template>

  <script>
  import XLSX from 'xlsx'

  export default {
    props: {
      beforeUpload: Function, // eslint-disable-line
      onSuccess: Function, // eslint-disable-line
    },
    data() {
      return {
        loading: false,
        excelData: {
          header: null,
          results: null,
        },
      }
    },
    methods: {
      generateData({ header, results }) {
        this.excelData.header = header
        this.excelData.results = results
        this.onSuccess && this.onSuccess(this.excelData)
      },
      handleDrop(e) {
        e.stopPropagation()
        e.preventDefault()
        if (this.loading) return
        const files = e.dataTransfer.files
        if (files.length !== 1) {
          this.$message.error('Only support uploading one file!')
          return
        }
        const rawFile = files[0] // only use files[0]

        if (!this.isExcel(rawFile)) {
          this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')
          return false
        }
        this.upload(rawFile)
        e.stopPropagation()
        e.preventDefault()
      },
      handleDragover(e) {
        e.stopPropagation()
        e.preventDefault()
        e.dataTransfer.dropEffect = 'copy'
      },
      handleUpload() {
        this.$refs['excel-upload-input'].click()
      },
      handleClick(e) {
        const files = e.target.files
        const rawFile = files[0] // only use files[0]
        if (!rawFile) return
        this.upload(rawFile)
      },
      upload(rawFile) {
        this.$refs['excel-upload-input'].value = null // fix can't select the same excel

        if (!this.beforeUpload) {
          this.readerData(rawFile)
          return
        }
        const before = this.beforeUpload(rawFile)
        if (before) {
          this.readerData(rawFile)
        }
      },
      readerData(rawFile) {
        this.loading = true
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = e => {
            const data = e.target.result
            const workbook = XLSX.read(data, { type: 'array' })
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]
            const header = this.getHeaderRow(worksheet)
            const results = XLSX.utils.sheet_to_json(worksheet)
            this.generateData({ header, results })
            this.loading = false
            resolve()
          }
          reader.readAsArrayBuffer(rawFile)
        })
      },
      getHeaderRow(sheet) {
        const headers = []
        const range = XLSX.utils.decode_range(sheet['!ref'])
        let C
        const R = range.s.r
        /* start in the first row */
        for (C = range.s.c; C <= range.e.c; ++C) {
          /* walk every column in the range */
          const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
          /* find the cell in the first row */
          let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
          if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
          headers.push(hdr)
        }
        return headers
      },
      isExcel(file) {
        return /\.(xlsx|xls|csv)$/.test(file.name)
      },
    },
  }
  </script>

  <style scoped lang="scss">
  .upload-excel {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    .excel-upload-input {
      display: none;
      z-index: -9999;
    }
    .btn-upload,
    .drop {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px dashed #bbb;
      width: 350px;
      height: 160px;
      text-align: center;
    }
    .drop {
      color: #bbb;
      i {
        font-size: 60px;
        display: block;
      }
    }
  }
  </style>
  ```

  ### 3、导入、全局注册组件
  （-- components/新建 index.js）
  ```js
  // 全局注册组件

  import UploadExcel from './UploadExcel'

  export default {
    install(Vue) {
      Vue.component('UploadExcel', UploadExcel)
    }
  }
  ```

  ### 4、创建 import 页，并导入以下内容
  （-- views/新建 import/index.vue）
  ```vue
  <template>
    <upload-excel :on-success="success"></upload-excel>
  </template>

  <script>
  export default {
    methods: {
      success({ header, results }) { // 上传文件成功后触发
        // header：字段 【type：Array】
        // results：字段数据 【type：Array】
      }
    }
  }
  </script>
  
  <style>

  </style>
  ```

  （-- @/router/index.js）
  ```js
  { // excel 导入路由
    path: '/import',
    component: Layout,
    hidden: true, // 不显示在左侧菜单中
    children: [{
      path: '',
      component: () => import('@/views/import')
    }]
  },
  ```

  ### 5、格式化数据。格式化 success 方法中的 header、results
  （-- views/import/index.vue）
  **如：**
  ```js
  // 转换前：
  [
    {
      姓名: 1,
      手机号: 2,
      工号: 3,
    },
  ]

  // 转换后：
  [
    {
      name: 1,
      mobile: 2,
    },
  ]
  ``` 
  ---------------------
  ```js
  success({ header, results }) { // 上传文件成功后触发
    // header：字段 【type：Array】
    // results：字段数据 【type：Array】

    -- 增
    // 格式：【旧属性：新属性】
    const relations = {
      '姓名': 'username',
      '手机号': 'mobile',
      '工号': 'workNumber',
    }
    /* 数据格式化。替换属性名
    转换前：
    [
      {
        姓名: 1,
        手机号: 2,
        工号: 3,
      },
    ]
    转换后：
    [
      {
        name: 1,
        mobile: 2,
        workNumber: 3,
      },
    ]
    */
    var newArr = results.map(item => {
      var userInfo = {}
      Object.keys(item).forEach(key => {
        userInfo[relations[key]] = item[key]
      })
      return userInfo
    })

    // 调用接口批量添加用户
    await importEmployee(newArr)

    this.$message.success('导入 excel 成功')
    this.$router.back()
    --

  }
  ```

  ### 6、格式化 excel 的日期
  ```js
  // 格式化前：
  43627

  // 格式化后：
  20190910
  ```

  #### 6-1、将以下方法复制到 methods 中（-- @/view/import/index.vue; methods 配置项）
  ```js
  /* 格式化 excel 的日期
  格式化前：
    43535

  格式化后：
    2019-09-09T16:00:00.000Z
  */
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
  ```

  #### 6-2、调用 formatDate 方法（-- 同上）
  ```js
  -- 换（旧）
  Object.keys(item).forEach(key => {
    userInfo[relations[key]] = item[key]
  })
  --

  -- 换（新）
  Object.keys(item).forEach(key => {
    if (relations[key] === 'timeOfEntry' || relations[key] === 'correctionTime') {
      userInfo[relations[key]] = new Date(this.formatDate(item[key], '/'))
    } else {
      userInfo[relations[key]] = item[key]
    }
  })
  --
  ```

  ## （二）excel 导出功能
  ### （1）导入以下代码
  （-- @/新建 vendor/Export2Excel.js）
  ```js
  /* eslint-disable */
  // 作用：导出为 excel 格式
  import { saveAs } from 'file-saver'
  import XLSX from 'xlsx'

  function generateArray(table) {
    var out = [];
    var rows = table.querySelectorAll('tr');
    var ranges = [];
    for (var R = 0; R < rows.length; ++R) {
      var outRow = [];
      var row = rows[R];
      var columns = row.querySelectorAll('td');
      for (var C = 0; C < columns.length; ++C) {
        var cell = columns[C];
        var colspan = cell.getAttribute('colspan');
        var rowspan = cell.getAttribute('rowspan');
        var cellValue = cell.innerText;
        if (cellValue !== "" && cellValue == +cellValue) cellValue = +cellValue;

        //Skip ranges
        ranges.forEach(function (range) {
          if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
            for (var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
          }
        });

        //Handle Row Span
        if (rowspan || colspan) {
          rowspan = rowspan || 1;
          colspan = colspan || 1;
          ranges.push({
            s: {
              r: R,
              c: outRow.length
            },
            e: {
              r: R + rowspan - 1,
              c: outRow.length + colspan - 1
            }
          });
        };

        //Handle Value
        outRow.push(cellValue !== "" ? cellValue : null);

        //Handle Colspan
        if (colspan)
          for (var k = 0; k < colspan - 1; ++k) outRow.push(null);
      }
      out.push(outRow);
    }
    return [out, ranges];
  };

  function datenum(v, date1904) {
    if (date1904) v += 1462;
    var epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
  }

  function sheet_from_array_of_arrays(data, opts) {
    var ws = {};
    var range = {
      s: {
        c: 10000000,
        r: 10000000
      },
      e: {
        c: 0,
        r: 0
      }
    };
    for (var R = 0; R != data.length; ++R) {
      for (var C = 0; C != data[R].length; ++C) {
        if (range.s.r > R) range.s.r = R;
        if (range.s.c > C) range.s.c = C;
        if (range.e.r < R) range.e.r = R;
        if (range.e.c < C) range.e.c = C;
        var cell = {
          v: data[R][C]
        };
        if (cell.v == null) continue;
        var cell_ref = XLSX.utils.encode_cell({
          c: C,
          r: R
        });

        if (typeof cell.v === 'number') cell.t = 'n';
        else if (typeof cell.v === 'boolean') cell.t = 'b';
        else if (cell.v instanceof Date) {
          cell.t = 'n';
          cell.z = XLSX.SSF._table[14];
          cell.v = datenum(cell.v);
        } else cell.t = 's';

        ws[cell_ref] = cell;
      }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
    return ws;
  }

  function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
  }

  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  export function export_table_to_excel(id) {
    var theTable = document.getElementById(id);
    var oo = generateArray(theTable);
    var ranges = oo[1];

    /* original data */
    var data = oo[0];
    var ws_name = "SheetJS";

    var wb = new Workbook(),
      ws = sheet_from_array_of_arrays(data);

    /* add ranges to worksheet */
    // ws['!cols'] = ['apple', 'banan'];
    ws['!merges'] = ranges;

    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    var wbout = XLSX.write(wb, {
      bookType: 'xlsx',
      bookSST: false,
      type: 'binary'
    });

    saveAs(new Blob([s2ab(wbout)], {
      type: "application/octet-stream"
    }), "test.xlsx")
  }

  export function export_json_to_excel({
    multiHeader = [],
    header,
    data,
    filename,
    merges = [],
    autoWidth = true,
    bookType = 'xlsx'
  } = {}) {
    /* original data */
    filename = filename || 'excel-list'
    data = [...data]
    data.unshift(header);

    for (let i = multiHeader.length - 1; i > -1; i--) {
      data.unshift(multiHeader[i])
    }

    var ws_name = "SheetJS";
    var wb = new Workbook(),
      ws = sheet_from_array_of_arrays(data);

    if (merges.length > 0) {
      if (!ws['!merges']) ws['!merges'] = [];
      merges.forEach(item => {
        ws['!merges'].push(XLSX.utils.decode_range(item))
      })
    }

    if (autoWidth) {
      /*设置worksheet每列的最大宽度*/
      const colWidth = data.map(row => row.map(val => {
        /*先判断是否为null/undefined*/
        if (val == null) {
          return {
            'wch': 10
          };
        }
        /*再判断是否为中文*/
        else if (val.toString().charCodeAt(0) > 255) {
          return {
            'wch': val.toString().length * 2
          };
        } else {
          return {
            'wch': val.toString().length
          };
        }
      }))
      /*以第一行为初始值*/
      let result = colWidth[0];
      for (let i = 1; i < colWidth.length; i++) {
        for (let j = 0; j < colWidth[i].length; j++) {
          if (result[j]['wch'] < colWidth[i][j]['wch']) {
            result[j]['wch'] = colWidth[i][j]['wch'];
          }
        }
      }
      ws['!cols'] = result;
    }

    /* add worksheet to workbook */
    wb.SheetNames.push(ws_name);
    wb.Sheets[ws_name] = ws;

    var wbout = XLSX.write(wb, {
      bookType: bookType,
      bookSST: false,
      type: 'binary'
    });
    saveAs(new Blob([s2ab(wbout)], {
      type: "application/octet-stream"
    }), `${filename}.${bookType}`);
  }
  ```

  （-- @/vendor/新建 Export2Zip.js）
  ```js
  /* eslint-disable */
  // 作用：导出为 zip 压缩包格式
  import { saveAs } from 'file-saver'
  import JSZip from 'jszip'

  export function export_txt_to_zip(th, jsonData, txtName, zipName) {
    const zip = new JSZip()
    const txt_name = txtName || 'file'
    const zip_name = zipName || 'file'
    const data = jsonData
    let txtData = `${th}\r\n`
    data.forEach((row) => {
      let tempStr = ''
      tempStr = row.toString()
      txtData += `${tempStr}\r\n`
    })
    zip.file(`${txt_name}.txt`, txtData)
    zip.generateAsync({
      type: "blob"
    }).then((blob) => {
      saveAs(blob, `${zip_name}.zip`)
    }, (err) => {
      alert('导出失败')
    })
  }
  ```


  ### （2）安装包。因为 Export2Excel 依赖 js-xlsx、file-saver、script-loader
  - `npm i xlsx@0.16.9`（实现导入功能的时候已经安装过了，这里可以不用安装）
  - `npm i file-saver@2.0.2 -S`
  - `npm i script-loader@0.7.2 -S -D`（懒加载）

  ### （3）懒加载 Export2Excel 包
  **说明：** 因为 Export2Excel 的体积比较大，并且导出功能不是很常用，可以使用 script-loader 包进行懒加载。只有在使用时，才去引入 Export2Excel 包

  （-- @/views/employees/index.vue）
  ```js
  methods: {
    exportData() { // 将数据导出为 Excel 文件
      import('@/vendor/Export2Excel').then(excel => {}) // 懒加载
    }
  }
  ```

  ### （4）调用 excel.export_json_to_excel 方法将数据导出为 excel 格式
  | 参数      | 说明                   | 类型    | 可选值                                                                                      | 默认值     |
  | --------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------- | ---------- |
  | header    | 导出数据的表头         | Array   | /                                                                                           | []         |
  | data      | 导出的具体数据         | Array   | /                                                                                           | [[]]       |
  | filename  | 导出文件名             | String  | /                                                                                           | excel-list |
  | autoWidth | 单元格是否要自适应宽度 | Boolean | true（默认） / false                                                                        | true       |
  | bookType  | 导出文件类型           | String  | xlsx（默认）, csv, txt, [more](https://github.com/SheetJS/js-xlsx#supported-output-formats) | xlsx       |

  （-- 同上）
  **例：**
  ```js
  excel.export_json_to_excel({
    header: ['姓名', '工资'],
    data: [['张三', 3000], ['李四', 5000]],
    filename: '员工工资表'
  })
  ```

  **实现步骤：**
  （-- 同上）
  ```js
  // 将数据导出为 Excel 文件
  async exportData() {
    // 懒加载
    import('@/vendor/Export2Excel').then(async excel => {

      -- 增
      const { rows } = await getEmployeeList({ page: 1, size: this.paginationObj.total })
      const order = ['username', 'mobile']
      /* 格式化数据：将数组中对象类型的成员格式化成数组类型的成员 && 筛选出指定的属性 && 成员中的数据按照规定的顺序排列 && 去掉成员中的数据 key 只保留 value
      格式化前：[{id: "1063705989926227968", mobile: "13800000002", username: "管理员"}, {id: "1063705989926227968", mobile: "13800000003", username: "孙财"}]
      格式化后：[['13800000002', '管理员'], ['13800000003', '孙财']]
      */
      const newRows = rows.map(item => Object.keys(order).map(key => item[order[key]]))
      excel.export_json_to_excel({
        header: ['姓名', '工资'],
        data: newRows,
        filename: '员工工资表',
      })
      --

    })
  }
  ```
  
  ### （5）导出前对 时间、聘用形式 进行转换
  ```js
  // 处理前
  data: {
    timeOfEntry: 2018-11-02T08:00:00.000+0000,
    correctionTime: 2018-12-02T08:00:00.000+0000,
    formOfEmployment: 1
  }
  
  // 处理后
  newData: {
    timeOfEntry: 2018-11,
    correctionTime: 2018-12,
    formOfEmployment: '正式'
  }
  ```

  **实现步骤：**
  ```js
  import { formatDate } from '@/filters'
  import EmployeeEnum from '@/api/constant/employees'
  ```

  （-- 同上）
  ```js
  // 将数据导出为 Excel 文件
  exportData() {
    // 懒加载
    import('@/vendor/Export2Excel').then(excel => {

      const { rows } = await getEmployeeList({ page: 1, size: this.paginationObj.total })
      const order = ['username', 'mobile']
      /* 格式化数据：将数组中对象类型的成员格式化成数组类型的成员 && 筛选出指定的属性 && 成员中的数据按照规定的顺序排列 && 去掉成员中的数据 key 只保留 value
        格式化前：[{id: "1063705989926227968", mobile: "13800000002", username: "管理员"}, {id: "1063705989926227968", mobile: "13800000003", username: "孙财"}]
        格式化后：[['13800000002', '管理员'], ['13800000003', '孙财']]
      */
      const newRows = rows.map(item => Object.keys(order).map(key => {

        -- 增
        // 日期转换
        if (order[key] === 'timeOfEntry' || order[key] === 'correctionTime') {
          return formatDate(item[order[key]])
        }
        // 通过枚举数据格式化字段数据
        if (order[key] === 'formOfEmployment') {
          const obj = EmployeeEnum.hireType.find(obj => obj.id === item[order[key]])
          return obj ? obj.value : '未知'
        }
        return item[order[key]]
        --

      }))
      excel.export_json_to_excel({
        header: ['姓名', '工资'],
        data: newRows,
        filename: '员工工资表',
      })

    })
  }
  ```

  ## （三）复杂表头的导出
  **说明：** 因为应用场景非常少，所以就暂时不学了，有用到可以再去学习。（-- 课程 10.5 复杂表头的导出）

  **效果图**
  ![](images/2022-04-09-12-23-42.png)

  ## （四）动态组件。动态切换组件
  ### 1、使用组件
  ```html
  <component :is="UserComponent">
  ```

  ### 2、导入组件
  ```js
  import UserInfo from './components/user-info'
  ```

  ### 3、注册组件
  （-- data 配置项）
  ```js
  UserComponent: 'user-info'
  ```

  ### 切换组件
  ```html
  <el-button @click="UserComponent = 'post-info'">
  ```

  ## （五）上传头像【上传图片】
  **核心实现方式：** 将图片放到第三方服务器上代管图片，数据库里只存储图片地址。这里的第三方服务器我们使用腾讯云的 COS

  **文档：** https://cloud.tencent.com/document/product/436/64960

  ### 1、配置腾讯云 COS
  #### 1-1、创建存储桶
  （-- 登录腾讯云账号/云产品/对象存储/存储桶列表/创建存储桶）
  **访问权限：** 公有读私有写

  #### 1-2、添加 cors 规则
  （-- 登录腾讯云账号/云产品/对象存储/存储桶列表/选择创建好的存储桶/安全管理/跨域访问 CORS 配置/添加规则）
  **来源：** *（真实项目中是写项目域名）
  **操作 Methods：** 全选
  **其它：** 默认

  ### 2、封装上传组件
  **核心实现方式：**
  1、el-upload 组件
  2、调用腾讯云的 JavaScript SDK 插件的上传方法

  #### 2-1、安装腾讯云的 JavaScript SDK 包，主要用于上传图片
  `npm i cos-js-sdk-v5@1.0.1 --save`

  #### 2-2、封装上传组件
  （-- @/components/新建 ImageUpload/index.vue）
  ```html
  <el-upload :http-request="upload">
    <i class="el-icon-plus"></i>
  </el-upload>
  ```

  ```js
  import COS from 'cos-js-sdk-v5'

  const cos = new COS({ // 以下两个身份参数可以在（-- 登录腾讯云账号/点击头像/访问管理/访问密钥/API密钥管理）中查看
    SecretId: 'AKID2uYx71g5F8lAKFuJSSFn57tQhiS4TcV9',  // 身份识别 ID
    SecretKey: 'RcXCcmgJhphIdjZ9TYNwEG3arrc7MK3W'  // 身份密钥
  })

  methods: {
    upload(params){ // 上传到腾讯云
      if (params.file) {
        cos.putObject({
          Bucket: 'examplebucket-1250000000', /* 填入您自己的存储桶，必须字段。可在腾讯云存储桶详情中查看 */
          Region: 'COS_REGION',  /* 存储桶所在地域，例如 ap-beijing，必须字段。可在腾讯云存储桶详情中查看 */
          Key: params.file.name,  /* 文件名（例如1.jpg，a/b/test.txt），必须字段 */
          StorageClass: 'STANDARD',  // 上传文件类型，默认标准模式
          Body: params.file, // 上传文件对象
          onProgress: (progressData) => { // 上传进度回调函数
          }
        },(err, data) => { // 上传 错误/成功 后的回调函数
          if (!err && data.statusCode === 200) { // 判断 文件是否上传成功
            this.fileList[0] = {
              url: 'http://' + data.Location, // 将上传成功后响应的图片地址赋值给原来的 url 属性
            }
          }
        })
      }
    }
  }
  ```

  全局注册组件（-- @/components/index.js）
  ```js
  import ImageUpload from './ImageUpload'

  export default {
    install(vue) {
      Vue.component('ImageUpload', ImageUpload)
    }
  }
  ```

  ### 【BUG 】状态码： 403 (Forbidden)
    **解决方法：** 检查 SecretId、SecretKey 是否正确

    ![](images/2022-04-12-17-20-39.png)

  ## （六）图片地址生成二维码
  **核心实现方式：**
  1、qrcode 插件
  2、<canvas> 标签

  ### 1、下载 qrcode 包
  **作用：** 生成二维码
  
  `npm i qrcode@1.5.0`

  ### 2、导入基础结构
  ```html
  <!-- 二维码 对话框 -->
  <el-dialog title="二维码" :visible="whetherShowQrCodeDialog" width="30%" @close="closureQrCodeDialog">
    <el-row type="flex" justify="center">
      <canvas ref="qrCodeCanvas">
    </el-row>
  </el-dialog>
  ```

  ```js
  import QrCode from 'qrcode'

  data() {
    return {
      whetherShowQrCodeDialog: false, // 是否显示 二维码 对话框
    }
  },
  methods: {
    closureQrCodeDialog() { // 关闭 二维码 对话框
      this.whetherShowQrCodeDialog = false
    },
    showQrCodeDialog(url) { // 显示 二维码 对话框
      this.whetherShowQrCodeDialog = true
      this.$nextTick(() => { // 说明：显示对话框后数据已更新，但是结构还没渲染出来，所以需要使用 $nextTick 来等待结构渲染完毕
        // this.$nextTick 作用：等待结构渲染完毕后再去执行回调函数
        QrCode.toCanvas(this.$refs.qrCodeCanvas, url) // 转换成二维码
      })
    }
  }
  ```



  ### 1、下载插件
  `npm i screenfull@5.0.2`

  重启项目

  ### 2、封装全屏组件
  （-- @/components/新建 ScreenFull/index.vue）
  ```html
  <template>
    <div class="screen-full-container">
      <div @click="changeScreen">全屏</div>
    </div>
  </template>
  <script>
  import ScreenFull from 'screenfull'
  export default {
    name: 'ScreenFull',
    methods: {
      changeScreen() {
        if (!ScreenFull.isEnabled) { // 判断 当前全屏是否可用
          this.$message.warning('当前全屏功能不可用')
          return
        }
        ScreenFull.toggle() // 全屏切换
      },
    },
  }
  </script>
  <style lang='scss' scoped></style>
  ```

  ### 3、全局引入、注册组件
  （-- @/components/index.js）
  ```js
  import ScreenFull from './ScreenFull'

  export default {
    install(Vue) {
      Vue.component('ScreenFull', ScreenFull)
    }
  }
  ```

  ### 4、使用组件
  （-- @/layout/components/Navbar.vue）
  ```html
  <screen-full></screen-full>
  ```

# 六、全局功能
  ## （一）解决图片有地址，但是没有加载成功的问题
  **详见：** 知识点&自定义指令

  ## （二）全屏 功能
  ### 方法一：原生方法
  **开启全屏：** document.documentElement.requestFullscreen()
  **关闭全屏：** document.exitFullscreen()

  ### 方法二：screenfull 插件（推荐）
  **核心实现方式：** 使用 ScreenFull 插件中的 toggle() 来切换全屏

  **下载：** screenfull@5.0.2

  ## （三）动态主题 功能
  **核心实现方式：** 使用别人封装好的动态组件

  ### 1、封装 动态主题 组件
  **源代码地址：** https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/ThemePicker/index.vue

  （-- @/components/新建 ThemePicker/index.vue）
  ```html
  <template>
    <el-color-picker
      v-model="theme"
      :predefine="['#409EFF', '#1890ff', '#304156','#212121','#11a983', '#13c2c2', '#6959CD', '#f5222d', ]"
      class="theme-picker"
      popper-class="theme-picker-dropdown"
    />
  </template>

  <script>
  const version = require('element-ui/package.json').version // element-ui version from node_modules
  const ORIGINAL_THEME = '#409EFF' // default color
  export default {
    data() {
      return {
        chalk: '', // content of theme-chalk css
        theme: ''
      }
    },
    computed: {
      defaultTheme() {
        return this.$store.state.settings.theme
      }
    },
    watch: {
      defaultTheme: {
        handler: function(val, oldVal) {
          this.theme = val
        },
        immediate: true
      },
      async theme(val) {
        const oldVal = this.chalk ? this.theme : ORIGINAL_THEME
        if (typeof val !== 'string') return
        const themeCluster = this.getThemeCluster(val.replace('#', ''))
        const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
        console.log(themeCluster, originalCluster)
        this.$message({
          message: '换肤成功',
          // customClass: 'theme-message',
          type: 'success',
        })
        const getHandler = (variable, id) => {
          return () => {
            const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
            const newStyle = this.updateStyle(this[variable], originalCluster, themeCluster)
            let styleTag = document.getElementById(id)
            if (!styleTag) {
              styleTag = document.createElement('style')
              styleTag.setAttribute('id', id)
              document.head.appendChild(styleTag)
            }
            styleTag.innerText = newStyle
          }
        }
        if (!this.chalk) {
          const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
          await this.getCSSString(url, 'chalk')
        }
        const chalkHandler = getHandler('chalk', 'chalk-style')
        chalkHandler()
        const styles = [].slice.call(document.querySelectorAll('style'))
          .filter(style => {
            const text = style.innerText
            return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
          })
        styles.forEach(style => {
          const { innerText } = style
          if (typeof innerText !== 'string') return
          style.innerText = this.updateStyle(innerText, originalCluster, themeCluster)
        })
        this.$emit('change', val)
      }
    },
    methods: {
      updateStyle(style, oldCluster, newCluster) {
        let newStyle = style
        oldCluster.forEach((color, index) => {
          newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
        })
        return newStyle
      },
      getCSSString(url, variable) {
        return new Promise(resolve => {
          const xhr = new XMLHttpRequest()
          xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
              this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
              resolve()
            }
          }
          xhr.open('GET', url)
          xhr.send()
        })
      },
      getThemeCluster(theme) {
        const tintColor = (color, tint) => {
          let red = parseInt(color.slice(0, 2), 16)
          let green = parseInt(color.slice(2, 4), 16)
          let blue = parseInt(color.slice(4, 6), 16)
          if (tint === 0) { // when primary color is in its rgb space
            return [red, green, blue].join(',')
          } else {
            red += Math.round(tint * (255 - red))
            green += Math.round(tint * (255 - green))
            blue += Math.round(tint * (255 - blue))
            red = red.toString(16)
            green = green.toString(16)
            blue = blue.toString(16)
            return `#${red}${green}${blue}`
          }
        }
        const shadeColor = (color, shade) => {
          let red = parseInt(color.slice(0, 2), 16)
          let green = parseInt(color.slice(2, 4), 16)
          let blue = parseInt(color.slice(4, 6), 16)
          red = Math.round((1 - shade) * red)
          green = Math.round((1 - shade) * green)
          blue = Math.round((1 - shade) * blue)
          red = red.toString(16)
          green = green.toString(16)
          blue = blue.toString(16)
          return `#${red}${green}${blue}`
        }
        const clusters = [theme]
        for (let i = 0; i <= 9; i++) {
          clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
        }
        clusters.push(shadeColor(theme, 0.1))
        return clusters
      }
    }
  }
  </script>

  <style>
  .theme-message,
  .theme-picker-dropdown {
    z-index: 99999 !important;
  }
  .theme-picker .el-color-picker__trigger {
    height: 26px !important;
    width: 26px !important;
    padding: 2px;
  }
  .theme-picker-dropdown .el-color-dropdown__link-btn {
    display: none;
  }
  </style>
  ```

  ### 2、全局引入、注册组件 
  （@/components/index.js）
  ```js
  import ThemePicker from './ThemePicker'

  export default {
    install(Vue) {

      -- 增
      Vue.component('ThemePicker', ThemePicker)
      --
      
    }
  }
  ```

  ### 3、使用组件
  ```html
  <ThemePicker></ThemePicker>
  ```

  ## （四）多语言 功能
  **核心实现方式：**
  1、使用 vue-i18n 插件中的 t() 来动态切换语言类型
  2、使用 vue-i18n 插件中的 $t() 方法来动态切换文本，也就是文本不在写死，而是改成了变量，这个变量存储在语音包中，使用多语言的文本都要写在语音包中

  ### 1、安装 vue-i18n 国际化语言包
  `npm i vue-i18n@8.22.1`
  
  ### 2、动态切换语言类型
  #### 2-1、配置自定义语言包
  （-- @/新建 lang/zh.js）
  ```js
  export default {
    route: {
      dashboard: '首页',
      manage: '后台管理',
      users: '用户管理',
      menus: '菜单管理',
      logs: '日志管理',
      example: '示例',
      table: '数据列表',
      // permissions: '权限管理',
      // employees: '员工',
      // employeesList: '员工管理',
      // employeesInfo: '个人信息',
      postInfo: '岗位信息',
      manageSelf: '经理自助',
      setting: '设置',
      report: '报表',
      employeesAdd: '添加员工',
      EditiNfo: '编辑信息',
      print: '打印页面',
      form: '表单页',
      basicForm: '基础表单',
      stepForm: '分步表单',
      advancedList: '高级表单',
      step: '步骤',
      details: '详情页',
      BasicsDetails: '基础详情页',
      seniorDetails: '高级详情页',
      import: '导入',
      // 注册
      register: '人资-注册',
      login: '人资-登录',
      // 审批
      approvals: '审批', // 审批
      salaryApproval: '工资审核',
      enterApproval: '入职审核',
      leaveApproval: '申请请假',
      quitApproval: '申请离职',
      overtimeApproval: '加班申请',
      securitySetting: '审批设置',
      // 员工
      employees: '员工',
      employeesList: '员工列表',
      employeesInfo: '个人信息',
      employeesAdjust: '调岗',
      employeesLeave: '离职',
      employeesPrint: '打印',

      // 工资
      salarys: '工资',
      salarysList: '工资列表',
      salarysSetting: '工资设置',
      salarysDetails: '工资详情',
      salarysHistorical: '历史归档',
      salarysMonthStatement: '月报表',
      // 社保
      'social_securitys': '社保',
      socialSecuritys: '社保管理',
      socialDetail: '详情',
      socialHistorical: '历史归档',
      socialMonthStatement: '当月报表',
      // 组织架构
      departments: '组织架构',
      'departments-import': '引入',
      // 公司
      settings: '公司设置',
      // 考勤
      attendances: '考勤',
      usersApprovals: '用户审批',
      // saas企业
      'saas-clients': '企业',
      'saas-clients-details': '企业详情',
      // 权限
      'permissions': '权限管理' // 权限管理
    },
    navbar: {
      search: '站内搜索',
      logOut: '退出登录',
      dashboard: '首页',
      github: '项目地址',
      screenfull: '全屏',
      theme: '换肤',
      lang: '多语言',
      error: '错误日志'
    },
    login: {
      title: '人力资源管理系统',
      login: '登录',
      username: '账号',
      password: '密码',
      any: '随便填',
      thirdparty: '第三方登录',
      thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
    },
    tagsView: {
      close: '关闭',
      closeOthers: '关闭其它',
      closeAll: '关闭所有',
      refresh: '刷新'
    },
    table: {
      title: '请输入用户',
      search: '搜索',
      add: '添加',
      addUser: '新增用户',
      id: '序号',

      email: '邮箱',
      phone: '手机',
      name: '姓名',
      entryTime: '入职时间',
      hireForm: '聘用形式',
      jobNumber: '工号',
      department: '部门',
      managementForm: '管理形式',
      city: '工作城市',
      turnPositiveTime: '转正时间',

      permissionNew: '新增权限组',
      permissionUser: '权限组名称',
      imdsAi: '高级接口授权',
      avatar: '头像',
      introduction: '介绍',
      paddword: '密码',
      powerCode: '权限代码',
      powerDistriB: '权限分配',
      powerTitle: '权限标题',
      powerNav: '主导航',
      actions: '操作',
      edit: '编辑',
      delete: '删除',
      cancel: '取 消',
      confirm: '确 定',
      return: '返回',
      operationType: '操作类型',
      operationDate: '操作时间',
      date: '日期',
      submit: '提交',
      operator: '操作人',
      results: '执行结果',
      describe: '描述',
      save: '保存',
      signOut: '退出',
      reset: '重置',
      know: '我知道了',
      view: '查看'

    }
  }
  ```

  （-- @/lang/新建 en.js）
  ```js
  export default {
    route: {
      dashboard: 'Dashboard',
      manage: 'manage',
      users: 'users',
      menus: 'menus',
      // permissions: 'permissions',
      logs: 'logs',
      example: 'example',
      table: 'table',

      postInfo: 'Job information',
      manageSelf: 'Manager self-help',
      setting: 'setting',
      report: 'report',
      employeesAdd: 'add employees',
      EditiNfo: 'Edit information',
      print: 'print',

      form: 'form',
      basicForm: 'basic form',
      stepForm: 'step form',
      advancedList: 'advanced form',
      step: 'step',

      details: 'details',
      BasicsDetails: 'Basic details page',
      seniorDetails: 'Advanced details page',
      import: 'Import',
      register: 'HRM-Register',

      // 登录
      login: 'HRM-Login',
      // 审批
      approvals: 'Approvals', // 审批
      salaryApproval: 'Salary-Approval',
      enterApproval: 'Enter-Approval',
      leaveApproval: 'Leave-Approval',
      quitApproval: 'Quit-Approval',
      overtimeApproval: 'Overtime-Approval',
      securitySetting: 'Security-Setting',
      // 员工
      employees: 'Employees',
      employeesList: 'Employees-List',
      employeesInfo: 'Employees-Info',
      employeesAdjust: 'Employees-Adjust',
      employeesLeave: 'Employees-Leave',
      employeesPrint: 'Employees-Print',
      // 工资
      salarys: 'salarys',
      salarysList: 'Salarys-List',
      salarysSetting: 'Salarys-Setting',
      salarysDetails: 'Salarys-Details',
      salarysHistorical: 'Salarys-Historical',
      salarysMonthStatement: 'Salarys-Month',
      // 社保
      'social_securitys': 'Social',
      socialSecuritys: 'Social-Securitys',
      socialDetail: 'Social-Detail',
      socialHistorical: 'Social-Historical',
      socialMonthStatement: 'Social-Month',
      // 组织架构
      departments: 'departments',
      'departments-import': 'import',

      // 公司
      settings: 'Company-Settings',
      // 考勤
      attendances: 'Attendances',
      // 用户审批
      usersApprovals: 'Users-Approvals',
      // 企业
      'saas-clients': 'Saas-Clients',
      'saas-clients-details': 'Saas-Details',
      'permissions': 'permissions' // 权限管理

    },
    navbar: {
      search: 'search',
      logOut: 'Log Out',
      dashboard: 'Dashboard',
      github: 'Github',
      screenfull: 'screenfull',
      theme: 'theme',
      lang: 'i18n',
      error: 'error log'
    },
    login: {
      title: 'itheima login',
      login: 'Log in',
      name: 'name',
      entryTime: 'entry time',
      hireForm: 'hire form',
      jobNumber: 'job number',
      department: 'department',
      managementForm: 'management form',
      city: 'city',
      turnPositiveTime: 'turn positive time',

      password: 'Password',
      any: 'any',
      thirdparty: 'Third',
      thirdpartyTips: 'Can not be simulated on local, so please combine you own business simulation! ! !'
    },
    tagsView: {
      close: 'Close',
      closeOthers: 'Close Others',
      closeAll: 'Close All',
      refresh: 'refresh'

    },
    table: {
      title: 'Title',
      search: 'Search',
      add: 'add',
      addUser: 'addUser',
      id: 'ID',
      email: 'Email',
      phone: 'Phone',
      username: 'User',
      permissionNew: 'permissionNew',
      permissionUser: 'Permission',
      imdsAi: 'Advanced interface authorization',
      avatar: 'Avatar',
      introduction: 'Introduction',
      paddword: 'paddWord',
      powerCode: 'Permission code',
      powerTitle: 'Permission title',
      actions: 'Actions',
      edit: 'Edit',
      delete: 'Delete',
      cancel: 'Cancel',
      confirm: 'Confirm',
      operationType: 'operationType',
      operationDate: 'operationDate',
      date: 'Date',
      operator: 'operator',
      results: 'results of enforcement',
      describe: 'Pedagogical operation',
      save: 'save',
      signOut: 'sign out',
      submit: 'submit',
      reset: 'reset',
      know: 'I Know',
      return: 'return',
      view: 'view'
    }
  }
  ```

  #### 2-2、新建多语言实例化文件
  （-- @/lang/index.js）
  ```js
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
  ```

  #### 2-3、挂载
  （-- @/main.js）
  ```js
  -- 增
  import i18n from '@/lang'
  --

  new Vue({
    ...

    -- 增
    i18n,
    --

    render: h => h(APp)
  })
  ```

  #### 2-4、注释原来的英文包
  （-- 同上）
  ```js
  // import locale from 'element-ui/lib/locale/lang/en' // lang i18n

  // Vue.use(ElementUI, { locale })
  ```

  #### 2-5、动态切换语言类型
  （-- 同上）
  ```js
  -- 改（旧）
  Vue.use(ElementUI)
  --

  -- 改（新）
  Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key) // 动态切换语言类型（key：当前语言类型）
  })
  --
  ```

  #### 【BUG】页面渲染的是对象（如：home.hello）
  **说明：** 没有在语音包中找到这个变量

  ### 3、封装 多语言 组件
  **核心实现方式：**
  1、将选择的语言类型存储到 cookie 中
  2、修改当前的语音类型。重新给 $i18n.locale 属性赋值

  #### 3-1、封装 多语言 组件
  （-- @/components/新建 Lang/index.vue）
  ```html
  <template>
    <el-dropdown trigger="click" @command="changeLanguage">
      <div>
        <svg-icon style="color:#fff;font-size:20px" icon-class="language" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :disabled="this.$i18n.locale === 'zh'" command="zh">中文</el-dropdown-item>
        <el-dropdown-item :disabled="this.$i18n.locale === 'en'" command="en">en</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </template>

  <script>
  import Cookie from 'js-cookie'
  export default {
    methods: {
      changeLanguage(type) {
        Cookie.set('language', type)
        this.$i18n.locale = type // 修改当前的语音类型
        this.$message.success('切换多语言成功')
      }
    }
  }
  </script>
  ```

  #### 3-2、注册为全局组件
  （-- @/components/index.js）
  ```js
  -- 增
  import LangSelect from './Lang'
  --

  export default {
    install(Vue) {

      -- 增
      Vue.component('LangSelect', LangSelect)
      --

    }
  }
  ```

  #### 3-3、使用组件
  （-- @/layout/components/Navbar.vue）
  ```js
  <LangSelect></LangSelect>
  ```

  ### 4、根据语言类型动态切换文本
  #### 4-1、定义文本
  （-- @/lang/zh.js）
  ```js
  export default {

    -- 增
    home: {
      hello: '你好'
    }
    --

  }
  ```

  （-- @/lang/en.js）
  ```js
  export default {

    -- 增
    home: {
      hello: 'hello'
    }
    --

  }
  ```

  #### 4-2、使用文本
  （-- @/views/home/index.vue）
  ```html
  <span>{{$t('route.employees')}}</span>
  ```

  （-- @/@/layout/components/Sidebar/SidebarItem.vue）
  ```html
  -- 改（旧）
  <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
  --

  -- 改（新）
  <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="$t('route.' + onlyOneChild.name)" />
  --
  ```