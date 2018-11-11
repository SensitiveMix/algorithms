// 从上往下打印出二叉树的每个节点，同层节点从左至右打印
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom (root) {
  // write code here
  let queue = []
  let result = []
  if (root === null) {
    return result
  }

  queue.push(root)
  while (queue.length !== 0) {
    root = queue.shift()
    result.push(root.val)

    if (root.left) {
      queue.push(root.left)
    }

    if (root.right) {
      queue.push(root.right)
    }
  }

  return result
}

module.exports = {
  PrintFromTopToBottom
}
