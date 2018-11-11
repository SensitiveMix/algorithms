// 请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical (pRoot) {
  if (!pRoot) return true
  return compare(pRoot.left, pRoot.right)
}

function compare (rootLeft, rootRight) {
  if (rootLeft === null && rootRight === null) {
    return true
  }

  if (rootLeft === null || rootRight === null) {
    return false
  }

  if (rootLeft.val !== rootRight.val) {
    return false
  }

  return compare(rootLeft.left, rootRight.right) && compare(rootRight.right, rootLeft.left)
}
module.exports = {
  isSymmetrical: isSymmetrical
}
