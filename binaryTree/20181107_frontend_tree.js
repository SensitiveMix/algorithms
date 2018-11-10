
/**
 * 前序遍历，先输出当前访问的对象值，然后再依次访问左子树和右子树
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

  this.frontTree = function (root, callback) {
    frontTreeNode(root, callback)
  }
}

function frontTreeNode (node, callback) {
  if (node !== null) {
    callback(node.key)
    frontTreeNode(node.left, callback)
    frontTreeNode(node.right, callback)
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

binaryTree.frontTree(root, callback)
