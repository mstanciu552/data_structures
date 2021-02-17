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
  // TODO: Improve this for max length
  getLength(node) {
    if (node.children.length === 0 || !node.children) return 1;
    return node.length + node.getLength(node.children[0]);
  }

  makeSchema(node) {
    this.schema.push([node.root]);
    this.schema.push(node.getChildrenValues());
    node.children.map(ch => this.makeSchema(ch));
    return this.schema.filter(arr => arr.length !== 0);
  }

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
