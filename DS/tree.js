/*
 TODO: Add tree schema
 * */

class Tree {
  constructor(root, parent = null) {
    this.root = root;
    this.children = [];
    this.parent = parent;
    this.schema = [];
    this.length = 1;
  }
  addChild(root) {
    this.children.push(new Tree(root, this));
  }

  getLength(node = this) {
    if (node.children.length === 0 || !node.children) return 1;
    return 1 + Math.max(...node.children.map(ch => this.getLength(ch)));
  }

  makeSchema(node = this) {}

  getRoot() {
    return this.root;
  }

  getChildren() {
    return this.children;
  }

  getChildrenValues() {
    return this.children.map(ch => ch.root);
  }

  getParent() {
    return this.parent;
  }
}

module.exports = {
  Tree,
};
