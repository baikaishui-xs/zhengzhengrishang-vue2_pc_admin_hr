export function tranListToTreeData(list, rootValue) { // （参数一【Array】： 数据）（参数二【String】：根值。分别顶层节点的值）
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
