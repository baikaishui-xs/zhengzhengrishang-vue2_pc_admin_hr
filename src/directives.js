export const imageError = {
  inserted(dom, options) { // inserted 钩子函数：当前 dom 元素插入到节点之后执行
    dom.src = dom.src || options.value
    dom.onerror = function() { // onerror 事件：图片有地址，但是没有加载成功触发
      dom.src = options.value
    }
  },
  componentUpdated(dom, options) { // componentUpdated 钩子函数：当前 dom 元素更新数据后执行
    dom.src = dom.src || options.value
  }
}
