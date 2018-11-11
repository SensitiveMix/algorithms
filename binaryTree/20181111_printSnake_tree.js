// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

function Print (pRoot) {
    // write code here
  let ret = []
  let queue = []

  if (pRoot === null) {
    return ret
  }

  queue.push(pRoot)

  let reverse = false

  while (queue.length) {
    let rowList = []
    let len = queue.length
    while (len-- > 0) {
      let root = queue.shift()
      rowList.push(root.val)

      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
    }

    if (reverse) {
      rowList = rowList.reverse()
    }

    reverse = !reverse

    if (rowList.length > 0) {
      ret.push(rowList)
    }
  }

  return ret
}

Print({ val: 8, left: { val: 10, left: 5, right: 7 }, right: { val: 6, left: 9, right: 11 } })
