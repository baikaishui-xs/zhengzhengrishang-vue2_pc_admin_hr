export function tranListToTreeData(list, rootValue) { // 将数组数据转换成树形结构
  var arr = []
  list.forEach(item => {
    if (item.pid === rootValue) {
      const children = tranListToTreeData(list, item.id)
      if (children.length) {
        item.children = children
      }
      arr.push(item)
    }
  })
  return arr
}
