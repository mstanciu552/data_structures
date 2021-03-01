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

  getArray() {}

  static convertArray() {}
}

module.exports = { BinaryTree };
