/**
 * 后续遍历，先访问左子树，再访问右子树，最后访问根节点，输出对象。
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

binaryTree.backTree(root, callback)
