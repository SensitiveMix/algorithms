/**
 * 后续遍历，先访问左子树，再访问右子树，最后访问根节点，输出对象。
 * @param {*} key
 */

function insertNode (node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if (node.right === null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}
// 批量插入二叉树节点
const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
const binaryTree = new BinaryTree()
nodes.forEach(node => { binaryTree.insert(node) })

function Node (key) {
  this.key = key
  this.left = null
  this.right = null
}

var root = null
function BinaryTree () {
  // 构建平衡二叉树
  this.insert = function (key) {
    const newNode = new Node(key)
    // 插入叶子节点
    if (root === null) {
      root = newNode
    } else {
      // 插入子节点
      insertNode(root, newNode)
    }
  }
  // 后续遍历平衡二叉树
  this.backTree = function (root, callback) {
    backTreeNode(root, callback)
  }
}

function backTreeNode (node, callback) {
  if (node !== null) {
    backTreeNode(node.left, callback)
    backTreeNode(node.right, callback)
    callback(node.key)
  }
}

function callback (key) {
    console.log(key)
}

// 后续遍历节点
binaryTree.backTree(root, callback)
