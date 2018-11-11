// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行

function Print (pRoot) {
    // write code here
  let ret = []
  let queue = []

  if (pRoot === null) {
    return ret
  }

  queue.push(pRoot)

  while (queue.length) {
    let rowList = []
    let len = queue.length
    while (len-- > 0) {
      let root = queue.shift()
      rowList.push(root.val)

      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
    }

    if (rowList.length > 0) {
      ret.push(rowList)
    }
  }

  return ret
}

Print({ val: 1, left: { val: 2 }, right: { val: 1, left: 1, right: 2 } })
