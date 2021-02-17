class Tree {
  constructor(root, parent = null) {
    this.root = root;
    this.children = [];
    this.parent = parent;
    this.schema = [];
    this.setSchema();
  }
  addChild(root) {
    this.children.push(new Tree(root, this));
  }

  getRoot() {
    return this.root;
  }

  getChildren() {
    return this.children;
  }

  getParent() {
    return this.parent;
  }
}

module.exports = {
  Tree,
};
