const { Tree } = require('./DS/tree.js');

let tree = new Tree(1);

tree.addChild(new Tree(2));
tree.addChild(new Tree(3));
tree.addChild(new Tree(4));

tree.getChildren()[0].addChild(new Tree(5));

console.log(`${tree.root} + ${tree.children.map((ch) => ch.root)}`);

console.log(`${tree.children[0].children[0].root}`);
