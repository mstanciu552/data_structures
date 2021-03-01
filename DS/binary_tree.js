class BinaryTree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  setLeft(val) {
    this.left = new BinaryTree(val);
  }

  setRight(val) {
    this.right = new BinaryTree(val);
  }

  // * BFS
  getArray(node = this, arr = [this.val]) {
    if (!node) return;

    if (node.left) arr.push(node.left.val);
    if (node.right) arr.push(node.right.val);

    node.getArray(node.left, arr);
    node.getArray(node.right, arr);

    return arr;
  }
}

module.exports = { BinaryTree };
