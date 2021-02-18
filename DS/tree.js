class Tree {
  constructor(root, parent = null) {
    this.root = root;
    this.children = [];
    this.parent = parent;
    this.structure = {};
    this.makeSchema();
  }
  addChild(root) {
    this.children.push(new Tree(root, this));
  }

  getLength(node = this) {
    if (node.children.length === 0 || !node.children) return 1;
    return 1 + Math.max(...node.children.map(ch => this.getLength(ch)));
  }

  makeSchema(node = this) {
    let { root, children } = node;
    let parentStructure = node.parent ? node.parent.structure : null;
    node.structure = {
      ...parentStructure,
      ...node.structure,
      [root]: children,
    };
  }

  getStructAsValues(node = this) {
    let { root, structure, children } = node;

    if (!children || children.length === 0) return {};

    return {
      [root]: structure[root].map(val => val.root),
      ch: children.map(ch => {
        return { [ch.root]: [ch.getStructAsValues()] };
      }),
    };
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
