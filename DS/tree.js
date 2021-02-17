class Tree {
    constructor(root) {
        this.root = root;
        this.children = [];
    }
    addChild(root) {
        this.children.push(root);
    }

    getRoot() {
        return this.root;
    }
    getChildren() {
        return this.children;
    }
}

module.exports = {
    Tree
};
