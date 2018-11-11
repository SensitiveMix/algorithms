function TreeNode (x) {
  this.val = x
  this.left = null
  this.right = null
}
function reConstructBinaryTree (pre, vin) {
    // write code here
    // 定义二叉树

  if (!pre.length || !vin.length) return false
  let binaryTree = new TreeNode(pre[0])

  let preLeft = []
  let preRight = []
  let vinLeft = []
  let vinRight = []

  let vinChunkIndex = vin.indexOf(pre[0])
  vinLeft = vin.slice(0, vinChunkIndex)
  vinRight = vin.slice(vinChunkIndex + 1)
  preLeft = pre.slice(1, vinChunkIndex + 1)
  preRight = pre.slice(vinChunkIndex + 1)

  binaryTree.left = reConstructBinaryTree(preLeft, vinLeft)
  binaryTree.right = reConstructBinaryTree(preRight, vinRight)
  return binaryTree
}

reConstructBinaryTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
