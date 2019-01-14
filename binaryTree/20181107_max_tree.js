/**
 * 获取二叉树最大节点值
 * @param {*} key
 */

function Node (key) {
  this.key = key
  this.left = null
  this.right = null
}

var root = null
function BinaryTree () {
  this.insert = function (key) {
    const newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  this.max = function (root) {
    maxTreeNode(root)
  }
}

function maxTreeNode (node) {
  if (node) {
    // 找出最右节点，平衡二叉树特点：左子树根节点值均小于右子树节点值
    while (node.right && node.right !== null) {
      node = node.right
    }

    console.log(node.key)
    return null
  }
}

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

const nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13]
const binaryTree = new BinaryTree()

nodes.forEach(node => {
  binaryTree.insert(node)
})

binaryTree.max(root)
