/**
 * 中序遍历，递归访问当前对象的左子树，直至对象没有左子树，输出当前对象；返回上一级，输出对象，递归访问右子树，再访问该左子树。
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

  this.middleTree = function (root, callback) {
    middleTreeNode(root, callback)
  }
}

function middleTreeNode (node, callback) {
  if (node !== null) {
    middleTreeNode(node.left, callback)
    callback(node.key)
    middleTreeNode(node.right, callback)
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

binaryTree.middleTree(root, callback)
